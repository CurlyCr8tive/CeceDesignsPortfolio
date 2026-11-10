import { useId, useMemo, useRef, useState } from "react";
import { Info, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import {
  serviceGroups,
  CUSTOM_SERVICE_ROWS,
  QUOTE_EMAIL,
  type Service,
} from "@/data/services";

type RowState = { selected: boolean; qty: string };
type CustomRow = { selected: boolean; name: string; rate: string; qty: string };

const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

/** Returns a positive number, or null when the value is empty/invalid. */
function parsePositive(value: string): number | null {
  if (value.trim() === "") return null;
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? n : null;
}

function isInvalid(value: string) {
  return value.trim() !== "" && parsePositive(value) === null;
}

// Desktop grid: checkbox | service | rate | hours | total
const ROW_GRID =
  "grid grid-cols-[auto_1fr] md:grid-cols-[auto_minmax(0,1fr)_8rem_8rem_8rem] gap-x-3 md:gap-x-4 gap-y-2 items-center";
// Rate / Hours / Total: three equal columns on every screen size, all boxes h-9.
const NUMBER_CELLS =
  "col-start-2 md:col-start-auto md:contents grid grid-cols-3 items-start gap-2";
const CELL_INPUT =
  "h-9 w-full rounded-md border border-input bg-background px-3 text-base md:text-sm text-right focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 aria-[invalid=true]:border-destructive";
const TOTAL_CELL =
  "h-9 flex items-center justify-end rounded-md bg-muted/60 px-3 text-sm font-semibold tabular-nums";

function MobileLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="md:hidden block whitespace-nowrap text-right text-[11px] leading-4 font-medium uppercase text-muted-foreground mb-1">
      {children}
    </span>
  );
}

function ServiceDetailsToggle({ service, nameId }: { service: Service; nameId: string }) {
  const panelId = useId();
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [pinned, setPinned] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const open = hovered || focused || pinned;

  const close = () => {
    setPinned(false);
    setFocused(false);
    setHovered(false);
  };

  return (
    <div
      className="relative min-w-0"
      onPointerEnter={(e) => e.pointerType === "mouse" && setHovered(true)}
      onPointerLeave={(e) => e.pointerType === "mouse" && setHovered(false)}
      onBlur={(e) => {
        // Close a pinned panel once focus moves to another part of the page.
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setPinned(false);
          setFocused(false);
        }
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          e.stopPropagation();
          close();
          buttonRef.current?.focus();
        }
      }}
    >
      <div>
        <span id={nameId} className="font-medium text-foreground mr-1">
          {service.name}
        </span>
        <button
          ref={buttonRef}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={`Service details: ${service.name}`}
          className={cn(
            "inline-flex h-8 w-8 md:h-7 md:w-7 align-middle -my-1 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-brand hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            open && "text-brand bg-muted",
          )}
          onFocus={(e) => {
            // Open on keyboard focus only; taps are handled by onClick.
            if (e.currentTarget.matches(":focus-visible")) setFocused(true);
          }}
          // Click/tap pins the panel open; a second click/tap closes it.
          onClick={() => (pinned ? close() : setPinned(true))}
          data-testid={`button-details-${service.id}`}
        >
          <Info className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      <div
        id={panelId}
        role="region"
        aria-label={`About ${service.name}`}
        hidden={!open}
        className={cn(
          // Narrow screens: expand inside the row. Desktop: float below the name.
          "mt-2 rounded-lg border bg-card p-4 text-sm leading-relaxed text-card-foreground",
          "md:absolute md:left-0 md:top-full md:z-30 md:mt-1 md:w-[26rem] md:shadow-lg",
        )}
        data-testid={`panel-details-${service.id}`}
      >
        <dl className="space-y-2">
          <div>
            <dt className="font-semibold text-brand">What it is</dt>
            <dd className="text-muted-foreground">{service.details.what}</dd>
          </div>
          <div>
            <dt className="font-semibold text-brand">What goes into it</dt>
            <dd className="text-muted-foreground">{service.details.work}</dd>
          </div>
          <div>
            <dt className="font-semibold text-brand">What you'll receive</dt>
            <dd className="text-muted-foreground">{service.details.receive}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

function ServiceRow({
  service,
  state,
  onChange,
}: {
  service: Service;
  state: RowState;
  onChange: (next: RowState) => void;
}) {
  const nameId = useId();
  const qtyId = useId();
  const qty = parsePositive(state.qty);
  const total = state.selected && service.rate !== null && qty !== null ? service.rate * qty : null;

  return (
    <li className={cn(ROW_GRID, "py-3 border-b last:border-b-0")} data-testid={`row-${service.id}`}>
      <Checkbox
        className="h-5 w-5 self-start mt-1.5 md:self-center md:mt-0"
        checked={state.selected}
        onCheckedChange={(v) => onChange({ ...state, selected: v === true })}
        aria-labelledby={nameId}
        data-testid={`checkbox-${service.id}`}
      />
      <ServiceDetailsToggle service={service} nameId={nameId} />

      {/* On mobile, rate / hours / total sit on a second line under the name */}
      <div className={NUMBER_CELLS}>
        <div>
          <MobileLabel>Rate ($)</MobileLabel>
          <div className="h-9 flex items-center justify-end">
          {service.rate !== null ? (
            <span className="tabular-nums">{currency.format(service.rate)}</span>
          ) : (
            <a
              href={`mailto:${QUOTE_EMAIL}?subject=${encodeURIComponent(`Quote request: ${service.name}`)}`}
              className="text-right text-xs leading-tight md:whitespace-nowrap md:text-sm text-brand font-medium underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            >
              Request a quote
            </a>
          )}
          </div>
        </div>
        <div>
          <label htmlFor={qtyId}>
            <MobileLabel>Hours / Qty</MobileLabel>
            <span className="sr-only">Hours or quantity for {service.name}</span>
          </label>
          <input
            id={qtyId}
            type="number"
            inputMode="decimal"
            min={0}
            step="any"
            value={state.qty}
            onChange={(e) => onChange({ ...state, qty: e.target.value })}
            aria-invalid={isInvalid(state.qty)}
            className={CELL_INPUT}
            data-testid={`input-qty-${service.id}`}
          />
        </div>
        <div>
          <MobileLabel>Line total</MobileLabel>
          <output className={TOTAL_CELL} aria-label={`Line total for ${service.name}`} data-testid={`total-${service.id}`}>
            {total !== null ? currency.format(total) : ""}
          </output>
        </div>
      </div>
    </li>
  );
}

function CustomServiceRow({
  index,
  state,
  onChange,
}: {
  index: number;
  state: CustomRow;
  onChange: (next: CustomRow) => void;
}) {
  const nameId = useId();
  const rateId = useId();
  const qtyId = useId();
  const rate = parsePositive(state.rate);
  const qty = parsePositive(state.qty);
  const total = state.selected && rate !== null && qty !== null ? rate * qty : null;
  const label = state.name.trim() || `Custom service ${index + 1}`;

  return (
    <li className={cn(ROW_GRID, "py-3 border-b last:border-b-0")} data-testid={`row-custom-${index}`}>
      <Checkbox
        className="h-5 w-5"
        checked={state.selected}
        onCheckedChange={(v) => onChange({ ...state, selected: v === true })}
        aria-label={`Select ${label}`}
        data-testid={`checkbox-custom-${index}`}
      />
      <div>
        <label htmlFor={nameId} className="sr-only">
          Custom service {index + 1} name
        </label>
        <input
          id={nameId}
          type="text"
          placeholder="Describe a custom service"
          value={state.name}
          onChange={(e) => onChange({ ...state, name: e.target.value })}
          className={cn(CELL_INPUT, "text-left")}
          data-testid={`input-custom-name-${index}`}
        />
      </div>
      <div className={NUMBER_CELLS}>
        <div>
          <label htmlFor={rateId}>
            <MobileLabel>Rate ($)</MobileLabel>
            <span className="sr-only">Rate in dollars for {label}</span>
          </label>
          <input
            id={rateId}
            type="number"
            inputMode="decimal"
            min={0}
            step="any"
            value={state.rate}
            onChange={(e) => onChange({ ...state, rate: e.target.value })}
            aria-invalid={isInvalid(state.rate)}
            className={CELL_INPUT}
            data-testid={`input-custom-rate-${index}`}
          />
        </div>
        <div>
          <label htmlFor={qtyId}>
            <MobileLabel>Hours / Qty</MobileLabel>
            <span className="sr-only">Hours or quantity for {label}</span>
          </label>
          <input
            id={qtyId}
            type="number"
            inputMode="decimal"
            min={0}
            step="any"
            value={state.qty}
            onChange={(e) => onChange({ ...state, qty: e.target.value })}
            aria-invalid={isInvalid(state.qty)}
            className={CELL_INPUT}
            data-testid={`input-custom-qty-${index}`}
          />
        </div>
        <div>
          <MobileLabel>Line total</MobileLabel>
          <output className={TOTAL_CELL} aria-label={`Line total for ${label}`} data-testid={`total-custom-${index}`}>
            {total !== null ? currency.format(total) : ""}
          </output>
        </div>
      </div>
    </li>
  );
}

function GroupHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h3
      id={id}
      className="mt-6 first:mt-0 rounded-md bg-brand/10 px-3 py-2 text-xs font-bold uppercase tracking-widest text-brand"
    >
      {children}
    </h3>
  );
}

export default function ServicesSection() {
  const allServices = useMemo(() => serviceGroups.flatMap((g) => g.services), []);
  const [rows, setRows] = useState<Record<string, RowState>>(() =>
    Object.fromEntries(allServices.map((s) => [s.id, { selected: false, qty: "" }])),
  );
  const [custom, setCustom] = useState<CustomRow[]>(() =>
    Array.from({ length: CUSTOM_SERVICE_ROWS }, () => ({ selected: false, name: "", rate: "", qty: "" })),
  );

  const selected = allServices.filter((s) => rows[s.id].selected);
  const selectedCustom = custom.filter((c) => c.selected);
  const selectedCount = selected.length + selectedCustom.length;

  const pricedTotal =
    selected.reduce((sum, s) => {
      const q = parsePositive(rows[s.id].qty);
      return s.rate !== null && q !== null ? sum + s.rate * q : sum;
    }, 0) +
    selectedCustom.reduce((sum, c) => {
      const r = parsePositive(c.rate);
      const q = parsePositive(c.qty);
      return r !== null && q !== null ? sum + r * q : sum;
    }, 0);
  const needsQuote = selected.some((s) => s.rate === null);

  const mailtoHref = useMemo(() => {
    const lines = [
      ...selected.map((s) => {
        const q = rows[s.id].qty.trim();
        return `- ${s.name}${q ? ` (${q} hrs/qty)` : ""}`;
      }),
      ...selectedCustom.map((c, i) => {
        const q = c.qty.trim();
        return `- ${c.name.trim() || `Custom service ${i + 1}`}${q ? ` (${q} hrs/qty)` : ""}`;
      }),
    ];
    const body = [
      "Hi Cherice,",
      "",
      "I'm interested in the following services:",
      ...lines,
      "",
      "About my project:",
      "",
    ].join("\n");
    return `mailto:${QUOTE_EMAIL}?subject=${encodeURIComponent("Services & Fees inquiry")}&body=${encodeURIComponent(body)}`;
  }, [selected, selectedCustom, rows]);

  return (
    <section id="services" className="py-20 md:py-32 px-4 bg-muted/30" data-testid="section-services">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-brand" data-testid="text-services-title">
            Services & Fees
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Tick the services you need and add hours to estimate your project. Hover, focus, or tap the
            <Info className="inline h-4 w-4 mx-1 align-[-2px] text-brand" aria-label="details" />
            icon to see what each service includes.
          </p>
        </div>

        <Card className="p-4 md:p-8">
          <form onSubmit={(e) => e.preventDefault()} aria-labelledby="services-form-title">
            <h3 id="services-form-title" className="sr-only">
              Services and fees estimate
            </h3>

            {/* Column headers (desktop) */}
            <div
              className={cn(ROW_GRID, "hidden md:grid pb-3 border-b-2 border-foreground/80")}
              aria-hidden="true"
            >
              <span className="w-5" />
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Service</span>
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground text-right">Rate ($)</span>
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground text-right">Hours / Qty</span>
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground text-right">Line total</span>
            </div>

            <div className="mt-4 md:mt-5">
              {serviceGroups.map((group) => (
                <div key={group.id} role="group" aria-labelledby={`group-${group.id}`}>
                  <GroupHeading id={`group-${group.id}`}>{group.title}</GroupHeading>
                  <ul>
                    {group.services.map((service) => (
                      <ServiceRow
                        key={service.id}
                        service={service}
                        state={rows[service.id]}
                        onChange={(next) => setRows((prev) => ({ ...prev, [service.id]: next }))}
                      />
                    ))}
                  </ul>
                </div>
              ))}

              <div role="group" aria-labelledby="group-custom">
                <GroupHeading id="group-custom">Other (Custom Services)</GroupHeading>
                <ul>
                  {custom.map((row, i) => (
                    <CustomServiceRow
                      key={i}
                      index={i}
                      state={row}
                      onChange={(next) => setCustom((prev) => prev.map((r, j) => (j === i ? next : r)))}
                    />
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 rounded-lg bg-muted/60 p-4 md:p-5">
              <div aria-live="polite" className="text-sm md:text-base">
                <p className="font-semibold" data-testid="text-selected-count">
                  {selectedCount === 0
                    ? "No services selected yet"
                    : `${selectedCount} service${selectedCount === 1 ? "" : "s"} selected`}
                </p>
                {selectedCount > 0 && (
                  <p className="text-muted-foreground" data-testid="text-estimate">
                    {pricedTotal > 0 ? `Estimated subtotal: ${currency.format(pricedTotal)}` : "Estimate to follow"}
                    {needsQuote && " · some services are priced by quote"}
                  </p>
                )}
              </div>
              <Button asChild size="lg" className="rounded-full px-6">
                <a href={mailtoHref} data-testid="button-services-inquire">
                  <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
                  {selectedCount > 0 ? "Email me about these services" : "Request a quote"}
                </a>
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
}

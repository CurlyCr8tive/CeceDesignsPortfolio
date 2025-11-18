import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Download } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="resume" className="py-16 md:py-20 px-4 bg-card" data-testid="section-contact">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-contact-title">
          Contact & resume
        </h2>
        <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed" data-testid="text-contact-subtitle">
          For roles or collaborations in UX / UI, accessible AI products, or health and civic tech, you can reach me at{" "}
          <a
            href="mailto:ChericeHeron@gmail.com"
            className="text-primary font-semibold hover:underline"
            data-testid="link-email-inline"
          >
            ChericeHeron@gmail.com
          </a>
          .
        </p>

        <Card className="p-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button
              size="lg"
              onClick={() => window.location.href = "mailto:ChericeHeron@gmail.com"}
              className="px-8 rounded-full w-full sm:w-auto"
              data-testid="button-contact-email"
            >
              <Mail className="mr-2 w-5 h-5" />
              Email me
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => console.log('Download resume')}
              className="px-8 rounded-full border-2 w-full sm:w-auto"
              data-testid="button-download-resume"
            >
              <Download className="mr-2 w-5 h-5" />
              Download my resume
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}

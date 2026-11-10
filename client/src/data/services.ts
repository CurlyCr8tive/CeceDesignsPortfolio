/**
 * Services & Fees — edit this file to change service names, explanations, and rates.
 *
 * rate:  a number (USD, per hour or per unit) shows that rate and enables the
 *        line-total calculation. `null` shows "Request a quote" and leaves the
 *        line total blank.
 * details: plain-language explanation shown when a visitor hovers, focuses,
 *        or taps the "Service details" button.
 */

export type ServiceDetails = {
  /** What the service is */
  what: string;
  /** What work goes into it */
  work: string;
  /** What the client receives */
  receive: string;
};

export type Service = {
  id: string;
  name: string;
  rate: number | null;
  details: ServiceDetails;
};

export type ServiceGroup = {
  id: string;
  title: string;
  services: Service[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: "ux",
    title: "User Experience (UX) Services",
    services: [
      {
        id: "user-research",
        name: "User research and interviews",
        rate: null,
        details: {
          what: "Talking with the people who use (or will use) your product to learn what they need and where they struggle.",
          work: "I plan the research questions, recruit participants, run one-on-one interviews or surveys, and look for patterns across what people say and do.",
          receive: "A research summary with key findings, user needs, quotes, and clear recommendations for what to design next.",
        },
      },
      {
        id: "journey-mapping",
        name: "Journey mapping",
        rate: null,
        details: {
          what: "A visual map of every step a person takes to reach a goal with your product or service.",
          work: "I use research and your team's knowledge to chart each step, what people think and feel along the way, and where things break down.",
          receive: "A shareable journey map that highlights pain points and the best opportunities to improve the experience.",
        },
      },
      {
        id: "wireframing",
        name: "Wireframing",
        rate: null,
        details: {
          what: "Simple, low-detail layouts that show the structure of each screen before visual design begins.",
          work: "I organize content, plan navigation, and sketch screen layouts, then refine them with your feedback.",
          receive: "Annotated wireframes for the agreed screens, ready for review and the next design stage.",
        },
      },
      {
        id: "prototyping",
        name: "Prototyping",
        rate: null,
        details: {
          what: "A clickable model of your product that looks and feels like the real thing, without writing production code.",
          work: "I link screens together in Figma (or build a quick coded version) so people can tap through the main flows.",
          receive: "A shareable interactive prototype you can test with users or show to stakeholders and investors.",
        },
      },
      {
        id: "ui-design",
        name: "User interface design",
        rate: null,
        details: {
          what: "The polished look of your product: layout, color, type, icons, and every on-screen element.",
          work: "I turn wireframes into high-fidelity screens that follow your brand and accessibility standards, including key states like empty, loading, and error.",
          receive: "Final design files for each screen, with specs and assets your developers can build from.",
        },
      },
      {
        id: "usability-testing",
        name: "Usability testing",
        rate: null,
        details: {
          what: "Watching real people try to use your product to find out what works and what gets in their way.",
          work: "I create realistic tasks, observe people as they use the product, and note where they hesitate, get confused, or fail.",
          receive: "A prioritized list of issues and recommended fixes, so your team knows what to change first.",
        },
      },
      {
        id: "design-systems",
        name: "Design systems",
        rate: null,
        details: {
          what: "A shared library of reusable components, styles, and rules that keeps your product consistent as it grows.",
          work: "I audit your existing screens, define colors, type, and spacing, and build reusable components with usage guidelines.",
          receive: "A documented component library in Figma that your designers and developers can use and extend.",
        },
      },
      {
        id: "accessibility-review",
        name: "Accessibility review",
        rate: null,
        details: {
          what: "A check of your product against accessibility standards (WCAG) so people of all abilities can use it.",
          work: "I review contrast, keyboard navigation, screen reader support, forms, and content, testing with assistive technology.",
          receive: "A report of accessibility issues ranked by severity, with practical fixes for each one.",
        },
      },
    ],
  },
  {
    id: "ai",
    title: "AI Enablement Services",
    services: [
      {
        id: "ai-strategy",
        name: "AI strategy and use-case discovery",
        rate: null,
        details: {
          what: "Finding where AI can genuinely help your team or customers, and where it can't.",
          work: "I interview your team, map current workflows, and assess ideas by value, effort, and risk.",
          receive: "A prioritized list of AI use cases with a recommended starting point and next steps.",
        },
      },
      {
        id: "prompt-library",
        name: "Prompt library creation",
        rate: null,
        details: {
          what: "A set of tested, ready-to-use prompts for the tasks your team does most often.",
          work: "I learn your recurring tasks, write and test prompts against real examples, and refine them for reliable results.",
          receive: "An organized prompt library with instructions and examples your team can copy and adapt.",
        },
      },
      {
        id: "workflow-automation",
        name: "Workflow automation",
        rate: null,
        details: {
          what: "Using tools such as Power Automate or AI assistants to handle repetitive, manual steps for you.",
          work: "I map the current process, find steps that can be automated, then build and test the automation with your team.",
          receive: "A working automated workflow, plus simple documentation so your team can run and maintain it.",
        },
      },
      {
        id: "ai-training",
        name: "AI tool training and workshops",
        rate: null,
        details: {
          what: "Hands-on sessions that help your team use AI tools confidently and responsibly.",
          work: "I tailor the content to your team's tools and skill level and run live, practical workshops with real tasks.",
          receive: "Workshop sessions, slides, and take-home guides your team can refer back to.",
        },
      },
      {
        id: "process-improvement",
        name: "Process-improvement consulting",
        rate: null,
        details: {
          what: "Looking closely at how work gets done today and finding ways to make it simpler and faster.",
          work: "I observe and map your current process, identify bottlenecks and duplicated effort, and design a better way of working.",
          receive: "A current-versus-improved process map and a practical action plan for making the change.",
        },
      },
      {
        id: "ai-adoption",
        name: "AI adoption support",
        rate: null,
        details: {
          what: "Ongoing help so new AI tools actually get used and deliver value after launch.",
          work: "I check in with your team, answer questions, track how tools are being used, and adjust guidance as needs change.",
          receive: "Regular support sessions, usage insights, and updated guidelines for your team.",
        },
      },
    ],
  },
];

/** Number of editable "Other (Custom Services)" rows. */
export const CUSTOM_SERVICE_ROWS = 2;

/** Where "Request a quote" emails go. */
export const QUOTE_EMAIL = "ChericeHeron@gmail.com";

import { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "GTM Stack Solutions | SiyaSphere - Go-to-Market Platform",
  description: "SiyaSphere provides the best GTM stack for modern B2B SaaS. Integrate marketing automation, RevOps, AI workflows, and go-to-market tools in one unified platform. Unify your go-to-market strategy with SiyaSphere.",
  keywords: "GTM stack, go-to-market stack, GTM tools, GTM platform, marketing automation, RevOps, AI workflows, SiyaSphere, Siya Sphere, GTM tech integration",
  openGraph: {
    title: "The Modern GTM Stack | SiyaSphere",
    description: "Unified go-to-market platform: marketing automation, RevOps, AI workflows, and GTM tech integration.",
    url: "https://siyasphere.com/gtm-stack",
  },
};

export default function GTMStackPage() {
  return (
    <main className="space-y-16 py-12 md:py-20">
      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "The Modern GTM Stack | SiyaSphere",
            description: "SiyaSphere provides go-to-market stack solutions including marketing automation, RevOps, and AI workflows.",
            url: "https://siyasphere.com/gtm-stack",
            publisher: {
              "@type": "Organization",
              name: "SiyaSphere",
              logo: "https://siyasphere.com/logo.png",
            },
            mainEntity: {
              "@type": "Product",
              name: "SiyaSphere GTM Stack",
              description: "Unified go-to-market platform combining marketing automation, RevOps, and AI workflows.",
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          The Modern <span className="text-primary-400">GTM Stack</span>
        </h1>
        <p className="text-xl text-gray-300 mb-4">
          <strong>SiyaSphere</strong> unifies your entire go-to-market (GTM) stack. Integrate marketing automation, RevOps optimization, AI workflows, and GTM planning into one cohesive platform.
        </p>
        <p className="text-lg text-gray-400 mb-8">
          Stop managing fragmented GTM tools. Start executing a unified go-to-market strategy with the complete GTM stack.
        </p>
        <Button href="/contact" variant="primary" size="lg">
          Explore Our GTM Stack
        </Button>
      </section>

      {/* GTM Stack Components */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {[
          {
            title: "GTM Planning & Strategy",
            description: "Define your go-to-market strategy with SiyaSphere's unified planning tools. Create roadmaps, set GTM goals, and align teams.",
            keywords: ["GTM planning", "go-to-market strategy", "GTM roadmap"],
          },
          {
            title: "Marketing Automation Platform",
            description: "Automate lead nurturing, email campaigns, and customer journeys with AI-driven marketing automation built for GTM.",
            keywords: ["marketing automation", "lead automation", "campaign automation"],
          },
          {
            title: "RevOps Optimization",
            description: "Align sales and marketing with RevOps best practices. Optimize revenue operations and improve GTM execution.",
            keywords: ["RevOps", "revenue operations", "sales alignment"],
          },
          {
            title: "AI-Powered GTM Workflows",
            description: "Harness AI to automate GTM processes, predict customer behavior, and accelerate deal cycles.",
            keywords: ["AI workflows", "AI marketing", "predictive analytics"],
          },
          {
            title: "GTM Tech Integration",
            description: "Integrate all your GTM tools: CRM, marketing platforms, analytics, and more into one unified GTM stack.",
            keywords: ["GTM integration", "tool integration", "stack integration"],
          },
          {
            title: "Go-to-Market Analytics",
            description: "Track GTM metrics, measure campaign performance, and optimize your go-to-market execution with real-time analytics.",
            keywords: ["GTM analytics", "performance metrics", "GTM KPIs"],
          },
        ].map((item) => (
          <div
            key={item.title}
            className="p-6 rounded-xl border border-gray-800 bg-gray-900/50 hover:bg-gray-800/50 transition"
          >
            <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
            <p className="text-gray-300 mb-4">{item.description}</p>
            <p className="text-sm text-gray-400">
              {item.keywords.map((kw, i) => (
                <span key={kw}>
                  {kw}
                  {i < item.keywords.length - 1 ? ", " : ""}
                </span>
              ))}
            </p>
          </div>
        ))}
      </section>

      {/* Why SiyaSphere for GTM */}
      <section className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-8">
          Why <span className="text-primary-400">SiyaSphere</span> for Your GTM Stack?
        </h2>
        <div className="space-y-6 text-gray-300">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Unified Go-to-Market Platform</h3>
            <p>
              SiyaSphere consolidates your go-to-market tech stack into one platform. No more jumping between GTM tools—manage planning, marketing automation, RevOps, and AI from a single interface. One platform. One plan. One flow.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Marketing Automation Built for GTM Teams</h3>
            <p>
              Our marketing automation platform is designed specifically for go-to-market teams. Automate lead scoring, nurture workflows, and account-based marketing (ABM) strategies. Scale your demand generation with intelligent marketing automation.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">RevOps Excellence & Alignment</h3>
            <p>
              Align your sales and marketing teams with RevOps best practices. SiyaSphere helps you optimize revenue operations, improve GTM efficiency, and accelerate deal cycles across your entire go-to-market system.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">AI-Powered GTM Workflows</h3>
            <p>
              Leverage AI to predict customer behavior, automate GTM processes, and optimize your go-to-market strategy. Our AI workflows accelerate decision-making and improve go-to-market outcomes at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 py-12 rounded-2xl bg-gradient-to-r from-primary-500/10 to-primary-400/10 border border-primary-500/20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Unify Your GTM Stack?
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          SiyaSphere brings together go-to-market planning, marketing automation, RevOps, and AI workflows into one powerful platform. Start your GTM transformation today.
        </p>
        <Button href="/contact" variant="primary" size="lg">
          Book a GTM Audit
        </Button>
      </section>
    </main>
  );
}

import { faqSchema } from "@/lib/seoConfig";

export default function FAQ() {
  return (
    <section className="section-padding bg-gray-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-100 mb-4 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400 mb-10 text-center">
            What teams usually ask before a GTM audit.
          </p>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((item) => (
              <details
                key={item.name}
                className="group bg-gray-900 border border-gray-800 rounded-xl p-6 open:border-[#7FC6C4]/40"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-gray-100">
                  {item.name}
                  <span className="ml-4 text-[#7FC6C4] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-gray-400 leading-relaxed">{item.acceptedAnswer.text}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import BackgroundGlow from "../ui/BackgroundGlow";
import BackgroundGrid from "../ui/BackgroundGrid";
import FAQItem from "./FAQItem";
import { questions } from "./questions";
import Reveal from "../animations/Reveal";

export default function FAQ() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24" id="faq">
      <BackgroundGrid />
      <BackgroundGlow />

      <div className="relative mx-auto max-w-5xl">
        {/* Header */}

        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mt-6 text-4xl font-black text-blue-900 lg:text-5xl">
              Une question ?
              <span className="text-yellow-400"> Nous avons la réponse.</span>
            </h2>

            <p className="mt-5 text-lg text-slate-600">
              Retrouvez les réponses aux questions les plus fréquentes
              concernant nos formations, le CPF et les examens.
            </p>
          </div>
        </Reveal>

        {/* Questions */}

        <div className="mt-14 space-y-4">
          {questions.map((item, index) => (
            <Reveal key={item.question} delay={index * 0.08}>
              <FAQItem {...item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

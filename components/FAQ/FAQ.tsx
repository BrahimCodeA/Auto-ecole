import BackgroundGlow from "../ui/BackgroundGlow";
import BackgroundGrid from "../ui/BackgroundGrid";
import FAQItem from "./FAQItem";
import { questions } from "./questions";

export default function FAQ() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24">
      <BackgroundGrid />
      <BackgroundGlow />

      <div className="relative mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-6 text-4xl font-black text-blue-900 lg:text-5xl">
            Une question ?
            <span className="text-yellow-400"> Nous avons la réponse.</span>
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Retrouvez les réponses aux questions les plus fréquentes concernant
            nos formations, le CPF et les examens.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {questions.map((item) => (
            <FAQItem key={item.question} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

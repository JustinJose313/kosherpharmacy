import React from "react";
import Link from "next/link";

const Faq = () => {
  const faqs = [
    {
      id: 1,
      question: "I have a query regarding your pharmaceutical products.",
      answer:
        "Feel free to ask your query and learn more about our products and services by sending an Email to info@kosherpharmaceuticals.com",
    },
    {
      id: 1,
      question:
        "How can I obtain more information on a product than that displayed on your site?",
      answer:
        "We can help you if contact us by writing to info@kosherpharmaceuticals.com. We do not encourage casual reading about the products on the web as it can be misleading. We suggest you seek guidance from a certified medical practioner on the same.",
    },
    {
      id: 1,
      question:
        "Who do I enquire to understand the safety of consumption of a product?",
      answer:
        "If you are already taking other medications, it’s best to understand from your doctor what is safe for you to consume. You may also consult us by dropping an email at info@kosherpharmaceuticals.com and explore what products we can provide you with for your condition.",
    },
    {
      id: 1,
      question: "Can I hire you for a personalised order?",
      answer: "Yes, we offer customised services.",
    },
  ];
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Can’t find the answer you’re looking for? Reach out to our{" "}
              <a
                href="mailto:info@kosherpharmaceuticals.com"
                className="font-medium text-brand-100 hover:text-brand-200"
              >
                customer support
              </a>{" "}
              team.
            </p>
          </div>

          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              {faqs.map((each, i) => {
                return (
                  <div key={i}>
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      {each.question}
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      {each.answer}
                    </dd>
                  </div>
                );
              })}
              <Link href="/faq">
                <button className="font-bold text-brand-100 hover:text-brand-200">
                  See all questions
                </button>
              </Link>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;

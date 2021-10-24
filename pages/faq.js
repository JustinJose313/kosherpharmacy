import React from "react";
import MainLayout from "../layouts/MainLayout";

const faq = () => {
  const SEOData = {
    title:
      "Kosher Pharmaceuticals - PURE ∙ GENUINE ∙ AUTHENTIC - FAQ Page (Frequently Asked Questions)",
      desc: "Buy Pharmacy Online - Cheap Medication - Kosher Pharmaceuticals. We export prescription and over-the-counter (OTC) pharmaceuticals, nutritional products, active pharmaceutical ingredients (API) and veterinary medicines. Our product list constitutes a huge product assortment to suit every customer in major therapeutic categories or targeted segments enabling customers to return fully satisfied and contended.",
      author: "Kosher Pharmaceuticals",
    ogImg: `${process.env.NEXT_PUBLIC_URL}/logo.png`,
    ogImgAlt: "Kosher Pharmaceuticals",
    page:"faq"
  };
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
    {
      id: 1,
      question:
        "What certifications support the purity and authenticity of your products?",
      answer:
        "We are ISO 9001:2015 certified and also have GMP certification. All products sold by Kosher Pharmaceuticals are guaranteed to be pure, genuine and authentic.",
    },
    {
      id: 1,
      question: "What parts of the world are your products available in?",
      answer:
        "We are available in all the countries which are reachable through post.",
    },
  ];
  return (
    <MainLayout data={SEOData}>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl lg:mx-auto lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently asked questions
            </h2>
            {/* <p className="mt-4 text-gray-500">
           
            </p> */}
          </div>
          <div className="mt-20">
            <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <dt className="font-semibold text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-3 text-gray-500">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default faq;

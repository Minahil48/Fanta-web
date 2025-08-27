import React, { useState } from "react";

const PlusIcon = ({ isOpen }) => (
  <svg
    className={`transition-transform duration-300 ${
      isOpen ? "rotate-45 text-orange-500" : "text-gray-900 cursor-pointer group-hover:text-orange-500"
    }`}
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const faqData = [
  {
    id: "faq-1",
    question: "What is Fanta?",
    answer:
      "Fanta is a popular fruit-flavored carbonated soft drink created by The Coca-Cola Company.",
  },
  {
    id: "faq-2",
    question: "What flavors does Fanta offer?",
    answer:
      "Fanta offers a variety of flavors including orange, grape, pineapple, and more!.",
  },
  {
    id: "faq-3",
    question: "Is Fanta gluten-free?",
    answer: "A 12 oz can of Fanta Orange contains about 160 calories.",
  },
  {
    id: "faq-4",
    question: "How many calories are in a can of Fanta?",
    answer:
      "Payments are processed securely via trusted gateways. You can choose your preferred method at checkout.",
  },
];

function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pb-24 pt-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 leading-[3rem]">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-6 text-left">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className="border-b border-gray-200 pb-8"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex items-center justify-between w-full text-xl text-black font-semibold transition cursor-pointer hover:text-orange-500 group"
                >
                  <span>{faq.question}</span>
                  <PlusIcon isOpen={isOpen} />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 mt-3" : "max-h-0"
                  }`}
                >
                  <p className="text-base text-gray-600">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Faqs;

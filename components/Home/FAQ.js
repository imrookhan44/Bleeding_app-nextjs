import faqs from "@/utils/faqs";
import React from "react";
import { useEffect, useState } from "react";

const FAQ = ({ questions }) => {
  const [content, setContent] = useState(questions || faqs);
  const [faqsToShow, setFaqsToShow] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    setFaqsToShow(content.slice(0, 5));
  }, [content]);

  const loadMore = () => {
    const start = (page + 1) * 5;
    const end = start + 5;
    setFaqsToShow([...faqsToShow, ...content.slice(start, end)]);
    setPage(page + 1);
  };

  return (
    <section className="container mt-5 pt-5">
      <h1 className="mb-4 display-3 fw-semibold col-12 col-lg-8">
        Some of our <span className="text-primary">Frequently</span> asked
        questions
      </h1>

      <div className="accordion accordion-flush" id="faq-accordion">
        {faqsToShow.map((faq, index) => (
          <div key={index} className="accordion-item bg-black border-dark">
            <h2 className="accordion-header" id={`flush-heading${index}`}>
              <button
                className="accordion-button fs-5 fw-semibold collapsed bg-black"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#flush-collapse${index}`}
              >
                {faq.qus}
              </button>
            </h2>
            <div
              id={`flush-collapse${index}`}
              className="accordion-collapse collapse"
              data-bs-parent="#faq-accordion"
            >
              <div className="accordion-body bg-black text-secondary">
                <p
                  className="fs-5"
                  dangerouslySetInnerHTML={{ __html: faq.ans }}
                ></p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        {(page + 1) * 5 < content.length && (
          <button
            className="btn btn-sm btn-outline-primary px-5"
            type="button"
            onClick={loadMore}
          >
            Load More
          </button>
        )}
      </div>
    </section>
  );
};

export default FAQ;

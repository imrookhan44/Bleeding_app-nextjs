import React from "react";

const ServiceDescription = ({ contents }) => {
  return (
    <section className="px-3 px-lg-5 pb-5">
      {contents &&
        contents.length > 0 &&
        contents?.map((c, i) =>
          c.type === "h" ? (
            <h3 key={i}>{c.text}</h3>
          ) : (
            <p key={i} className="fs-5">
              {c.text}
            </p>
          )
        )}
    </section>
  );
};

export default ServiceDescription;

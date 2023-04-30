import React from "react";
import RightIcon from "../../public/images/RightArrow.svg";
import Link from "next/link";

const CareerFindPositions = () => {
  const positions = [
    { title: "Business Analyst", experience: "3-6 Years", openings: 3 },
    { title: "Content Writer", experience: "3-6 Years", openings: 3 },
    { title: "IOT Engineer", experience: "3-6 Years", openings: 3 },
    { title: "Talent Acquisition", experience: "3-6 Years", openings: 3 },
    { title: "3D Designer", experience: "3-6 Years", openings: 3 },
    { title: "UI / UX Designer", experience: "3-6 Years", openings: 3 },
    { title: "Unreal Developer", experience: "3-6 Years", openings: 3 },
    { title: "Unity 3D Developer", experience: "3-6 Years", openings: 3 },
    { title: "Laravel Developer", experience: "3-6 Years", openings: 3 },
    { title: "Project Manager", experience: "3-6 Years", openings: 3 },
    { title: "IOS Developer", experience: "3-6 Years", openings: 3 },
    { title: "Android Developer", experience: "3-6 Years", openings: 3 },
  ];
  return (
    <section className="container py-5 my-5" id="find-opening-section">
      <div className="d-flex flex-wrap align-items-center justify-content-between mb-3">
        <div>
          <h2 className="mb-2">
            Let’s Find you an <span className="text-primary">Open</span>{" "}
            Positions
          </h2>
          <p className="fs-5">
            Find the right job for you. Based on your skill sets
          </p>
        </div>
      </div>
      <div className="row">
        {positions.map((p,index) => (
          <div key={index} className="col-12 col-lg-6 mb-3">
            <div className="rounded border border-dark glass p-3 d-flex align-items-center justify-content-between position-relative">
              <div>
                <h5>{p.title}</h5>
                <p className="mb-0">
                  Experience: {p.experience} Opening: {p.openings}
                </p>
              </div>
              <Link href="/contact" className="stretched-link">
                <img src={RightIcon?.src} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerFindPositions;

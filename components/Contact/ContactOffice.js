import React from "react";
import OfficeImage1 from "../../public/images/contact us/ContactUsOffice1.png";
import OfficeImage2 from "../../public/images/contact us/ContactUsOffice2.png";
import OfficeImage3 from "../../public/images/contact us/ContactUsOffice3.jpg";
import Icon from "../../public/images/contact us/ContactUsIcon.png";
import Location from "../../public/images/contact us/location.svg";
import Phone from "../../public/images/contact us/phone.svg";
import Email from "../../public/images/contact us/email.svg";

const ContactOffice = () => {
  return (
    <section className="container mt-5 pt-5">
      <h2>
        Our <span className="text-primary">Office</span>
      </h2>
      <p className="fs-5">
        We currently have 3 Offices worldwide and planning to launch many more.
      </p>

      <div className="row">
        <div className="col-12 col-lg-4 p-2">
          <div className="rounded border border-dark glass h-100">
            <div className="p-3 border-bottom border-dark">
              <img
                src={OfficeImage3.src}
                className="w-100 rounded-bottom rounded-4"
              />
            </div>
            <div className="p-3">
              <h3>Corporate Office</h3>
              <h5 className="text-primary">Abu Dhabi</h5>
              <div className="d-flex align-items-start gap-2">
                <img src={Location.src} className="mt-1" />
                <p>Office # 79, Yas Creative Hub, Yas South, Abu Dhabi, UAE</p>
              </div>
              <div className="d-flex align-items-start gap-2">
                <img src={Phone.src} className="mt-1" />
                <p>00971-50-409-7190</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 p-2">
          <div className="rounded border border-dark glass h-100">
            <div className="p-3 border-bottom border-dark">
              <img
                src={OfficeImage1.src}
                className="w-100 rounded-bottom rounded-4"
              />
            </div>
            <div className="p-3">
              <h3>Office</h3>
              <h5 className="text-primary">Dubai</h5>
              <div className="d-flex align-items-start gap-2">
                <img src={Location.src} className="mt-1" />
                <p>
                  Office # 25 , One Business Center , OneJLT , Jumeriah Lake
                  Towers , Dubai , UAE
                </p>
              </div>
              <div className="d-flex align-items-start gap-2">
                <img src={Email.src} className="mt-1" />
                <p>+971-509274101</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 p-2">
          <div className="rounded border border-dark glass h-100">
            <div className="p-3 border-bottom border-dark">
              <img
                src={OfficeImage2.src}
                className="w-100 rounded-bottom rounded-4"
              />
            </div>
            <div className="p-3">
              <h3>Production Studio</h3>
              <h5 className="text-primary">Lahore</h5>
              <div className="d-flex align-items-start gap-2">
                <img src={Location.src} className="mt-1" />
                <p>
                  Villa # 1 , Street 1 - Cavalry Ground , Lahore Cantt Lahore ,
                  Pakistan
                </p>
              </div>
              <div className="d-flex align-items-start gap-2">
                <img src={Email.src} className="mt-1" />
                <p>contact@bleedingedge.studio</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 p-4">
          <div className="rounded border border-dark glass p-4">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6 text-center">
                <img
                  src={Icon.src}
                  className="w-75"
                  style={{ margin: "-10%" }}
                />
              </div>
              <div className="col-12 col-lg-6">
                <h1>Questions or comments? Get in touch!</h1>
                <h6 className="text-primary">
                  Questions or comments? Get in touch! We&apos;d love to hear
                  from you!
                </h6>
                <p>
                  We are ready to discuss the detail of your dream project. And
                  would love to give the answer of your queries.
                </p>
                <a href="#top" className="btn btn-primary text-white px-4">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactOffice;

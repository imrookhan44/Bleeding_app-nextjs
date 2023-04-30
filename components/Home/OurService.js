import React from "react";
import Bg1 from "../../public/images/home/ServiceBg1.png";
import Bg2 from "../../public/images/home/ServiceBg2.png";
import Bg3 from "../../public/images/home/ServiceBg3.png";
import Bg4 from "../../public/images/home/ServiceBg4.png";
import Bg5 from "../../public/images/home/ServiceBg5.png";
import Icon1 from "../../public/images/home/Android.png";
import Icon2 from "../../public/images/home/Apple.png";
import Icon3 from "../../public/images/home/Vr.png";
import Link from "next/link";

const OurService = () => {
  const services = [
    {
      icon: Icon1,
      bg: Bg1,
      title: "Android Game Development",
      route: "services/mobile-game-development",
    },
    {
      icon: Icon2,
      bg: Bg2,
      title: "IOS Game Development",
      route: "services/mobile-game-development",
    },
    {
      icon: Icon3,
      bg: Bg3,
      title: "Virtual Reality",
      route: "services/ar-vr-webxr-development",
    },
    {
      icon: Icon3,
      bg: Bg4,
      title: "Augmented Reality",
      route: "services/ar-vr-webxr-development",
    },
    {
      bg: Bg5,
      title: "View More",
      route: "#",
    },
  ];

  const allServices = [
    {
      title: "Game Development Services",
      route: "#",
      children: [
        {
          title: "Mobile Game Development",
          route: "services/mobile-game-development",
        },
        {
          title: "NFT Game Development",
          route: "services/nft-game-development",
        },
        {
          title: "Desktop Game Development",
          route: "services/desktop-game-development",
        },
        {
          title: "Web3 Game Development",
          route: "services/web3-game-development",
        },
        {
          title: "Metaverse Game Development",
          route: "services/metaverse-game-development",
        },
      ],
    },
    {
      title: "Art, Design & Animation",
      route: "#",
      children: [
        { title: "Post-Production", route: "services/post-production" },
        { title: "UI/UX", route: "services/ui-ux" },
        { title: "Asset Production", route: "services/asset-production" },
        { title: "Animation", route: "services/animation" },
      ],
    },

    {
      title: "Interactive Application",
      route: "#",
      children: [
        { title: "Metaverse Services", route: "services/metaverse-services" },
        { title: "Simulations", route: "services/simulation" },
        {
          title: "Learning And Edutainment",
          route: "services/learning-and-edutainment",
        },
        {
          title: "AR, VR, WebXR Development",
          route: "services/ar-vr-webxr-development",
        },
        {
          title: "Gamification & Serious Games",
          route: "services/gamification-serious-games",
        },
      ],
    },

    {
      title: "Technology Services",
      route: "#",
      children: [
        {
          title: "Unity3D Game Development",
          route: "services/unity-game-development",
        },
        {
          title: "Unreal Game Development",
          route: "services/unreal-game-development",
        },
        {
          title: "HTML5/WebGL Game Development",
          route: "services/html5-web-gl-game-development",
        },
        {
          title: "Flutter Developments",
          route: "services/flutter-development",
        },
      ],
    },

    {
      title: "Blockchain Services",
      route: "#",
      children: [
        {
          title: "Blockchain Game Development",
          route: "services/blockchain-game-development",
        },
        {
          title: "dApps Game Development",
          route: "services/dapps-game-development",
        },
      ],
    },

    {
      title: "Resource Augmentation",
      route: "#",
      children: [
        { title: "Game Designer", route: "services/game-design" },
        { title: "2D Artist", route: "services/artists-2d" },
        { title: "3D Artist", route: "services/artists-3d" },
      ],
    },
  ];

  return (
    <section className="container text-center mt-5 pt-5">
      <h2>
        Our{" "}
        <span className="border-3 border-primary border-bottom">Services</span>
      </h2>
      <p className="fs-5 my-4">
        We own a team of highly skilled designers and developers specializing in
        Android , iOS , Metaverse , Play 2 Earn NFT & VR/AR Development .
        services . What sets us apart from others is our highly Specialized
        teams who have excellent track in project developments
      </p>
      <div className="row">
        {services.map((s, i) => (
          <div key={i} className="col-6 col-20 p-3">
            <div
              className="d-flex flex-column align-items-center justify-content-center border border-dark position-relative"
              style={{
                backgroundImage: `linear-gradient(0, rgba(0,0,0,.5) 0%, rgba(0,0,0,.5) 100%), url(${s.bg.src})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderTopRightRadius: "50px",
                borderBottomLeftRadius: "50px",
                height: "25vmax",
              }}
            >
              <img src={s.icon?.src} />
              <h6>{s.title}</h6>
              {s.title === "View More" ? (
                <a
                  href="#"
                  className="stretched-link"
                  data-bs-toggle="modal"
                  data-bs-target="#serviceModal"
                ></a>
              ) : (
                <Link className="stretched-link" href={s.route}></Link>
              )}
            </div>
          </div>
        ))}
      </div>
      <div
        className="modal fade"
        id="serviceModal"
        tabIndex="-1"
        aria-labelledby="serviceModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content bg-black border border-2 border-primary-light">
            <div className="modal-header border-0">
              <h1 className="modal-title fs-5" id="serviceModalLabel">
                Services
              </h1>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <ul className="row list-unstyled bg-black text-start">
                {allServices.map((si, index) => (
                  <li key={index} className={"col-12 col-lg-3 pt-3"}>
                    <Link
                      href={si.route}
                      className={`text-decoration-none ${
                        si.children ? "fw-bold" : "link-light"
                      }`}
                    >
                      {si.title}
                    </Link>

                    {si.children && (
                      <ul className="list-unstyled">
                        {si.children.map((child, siIndex) => (
                          <li
                            key={siIndex}
                            className="ps-2"
                            data-bs-dismiss="modal"
                          >
                            <Link
                              href={child.route}
                              className="w-100 d-block text-decoration-none link-light"
                            >
                              {child.title}
                            </Link>
                          </li>
                        ))}
                        <hr className="d-lg-none" />
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-end p-3">
              <button
                type="button"
                className="btn btn-sm btn-outline-primary px-4"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurService;

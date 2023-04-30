import React from "react";
import Logo from "../public/images/Logo.png";
import Fb from "../public/images/social/facebook.svg";
import Twitter from "../public/images/social/twitter.svg";
import Linkedin from "../public/images/social/linkedin.svg";
import Tiktok from "../public/images/social/tiktok.svg";
import Youtube from "../public/images/social/youtube.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-5 pt-5 border-3 border-dark border-top">
      <div className="px-3 px-lg-5">
        <div className="row">
          <div className="col-12 col-lg-3 mb-5 mb-lg-0">
            <img src={Logo.src} alt="Bleeding Edge" />
            <p className="small">
              Bleeding Edge has years of experience in mobile game development,
              providing quality solutions at affordable prices without
              compromising quality. We are a leading game development company
              that provides its clients with flexible game solutions that
              consistently exceed expectations. If you are hoping for a job well
              done, let us know!
            </p>
            <div className="d-flex align-items-center gap-3 gap-lg-4">
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://www.facebook.com/bleedingedgestudio/"
              >
                <img src={Fb.src} />
              </a>
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://twitter.com/Bleeding_edge1"
              >
                <img src={Twitter.src} />
              </a>
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://www.linkedin.com/company/bleedingedgestudio/"
              >
                <img src={Linkedin.src} />
              </a>
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://www.youtube.com/channel/UCb-d-csAruXkKUy9h2oWA2g"
              >
                <img src={Youtube.src} />
              </a>
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://www.tiktok.com/@bleedingedge_shorts"
              >
                <img src={Tiktok.src} />
              </a>
            </div>
          </div>
          <div className="col-6 col-lg-2 mb-5 mb-lg-0">
            <h6 className="text-primary ps-3">Services</h6>
            <ul className="nav flex-column ">
              <li className="nav-item">
                <Link
                  className="nav-link link-light"
                  href="/services/mobile-game-development"
                >
                  Mobile Game Development
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link  link-light"
                  href="/services/nft-game-development"
                >
                  NFT Game Development
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link  link-light"
                  href="/services/desktop-game-development"
                >
                  Desktop Game Development
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link  link-light"
                  href="/services/web3-game-development"
                >
                  Web3 Game Development
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link  link-light"
                  href="/services/metaverse-game-development"
                >
                  Metaverse Game Development
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-2 mb-5 mb-lg-0">
            <h6 className="text-primary ps-3">Company</h6>
            <ul className="nav flex-column ">
              <li className="nav-item">
                <Link className="nav-link link-light" href="/">
                  Abouts us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  link-light" href="/work">
                  Our Work
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  link-light" href="/process">
                  Our Process
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link  link-light"
                  href="https://bleedingedge.studio/blog/"
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  link-light" href="/infrastructure">
                  Key Infrastructure
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  link-light" href="/engagement">
                  Engagement Model
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  link-light" href="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-3 mb-5 mb-lg-0">
            <h6 className="text-primary ps-3">Our Location</h6>
            <ul className="nav flex-column ">
              <li className="nav-item">
                <a className="nav-link link-light">
                  Office # 79, Yas Creative Hub, Yas South, Abu Dhabi, UAE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-light">
                  Office # 25 , One Business Center , OneJLT , Jumeriah Lake
                  Towers , Dubai , UAE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-light">
                  Villa # 1 , Street 1 - Cavalry Ground , Lahore Cantt Lahore ,
                  Pakistan
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-2">
            <h6 className="text-primary ps-3">Contact Us</h6>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link link-light">
                  contact@bleedingedge .studio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  link-light">+971-543256936</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center border-3 border-dark border-top mt-5 p-3 mb-0">
        © All rights reserved.{" "}
        <span className="text-primary">Bleeding Edge</span>{" "}
        <Link href="/privacy-policy">Privacy Policy</Link>
      </p>
    </footer>
  );
};

export default Footer;

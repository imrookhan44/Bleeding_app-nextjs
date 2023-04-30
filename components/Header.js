import Link from "next/link";
import React from "react";
import logo from "../public/images/Logo.png";

const Header = () => {
  const [menuItems, setMenuItems] = React.useState([
    { title: "Home", route: "/" },
    {
      title: "Services",
      route: "/services",
      subItems: [
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
            {
              title: "Metaverse Services",
              route: "services/metaverse-services",
            },
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
      ],
    },

    {
      title: "Solution",
      route: "/solution",
      subItems: [
        {
          title: "Snack & Ladder Game",
          route: "solution/snakes-and-ladder-game-development",
        },
        { title: "Ludo Game", route: "solution/ludo-game-development" },
        {
          title: "Tic Tac Toe Game",
          route: "solution/tic-tac-toe-game-development",
        },
        {
          title: "Hyper Casual Game",
          route: "solution/hyper-casual-game-development",
        },
        {
          title: "Bubble Shooter Game",
          route: "solution/bubble-shooter-game-development",
        },
        { title: "UNO Game ", route: "solution/uno-game-development" },
        { title: "Carrom Game", route: "solution/carrom-game-development" },
        { title: "Archery Game", route: "solution/archery-game-development" },
        {
          title: "8 Ball Pool Game",
          route: "solution/pool-8_ball-game-development",
        },
        {
          title: "Real Money Game",
          route: "solution/real-money-game-development",
        },
        { title: "Chess Game", route: "solution/chess-game-development" },
        {
          title: "Car Simulation Game",
          route: "solution/car-simulation-game-development",
        },
        { title: "Shooting Game", route: "solution/shooting-game-development" },
        { title: "Rummy Game", route: "solution/rummy-game-development" },
        { title: "Poker Game", route: "solution/poker-game-development" },
        { title: "Tarneeb Game", route: "solution/tarneeb-game-development" },
        { title: "Hand Game", route: "solution/hand-game-development" },
        { title: "Casino Game", route: "solution/casino-game-development" },
        {
          title: "Tower Defence Game",
          route: "solution/tower-defense-game-development",
        },
        {
          title: "Callbreak Card Game",
          route: "solution/callbreak-card-game-development",
        },
        {
          title: "Stock Fantasy App",
          route: "solution/stock-fantasy-app-development",
        },
        {
          title: "Fantasy Sports App",
          route: "solution/fantasy-sports-app-development",
        },
        {
          title: "Multi-gaming App",
          route: "solution/multi-gaming-app-development",
        },
      ],
    },
    {
      title: "Company",
      route: "/about",
      subItems: [
        { title: "About Us", route: "/about" },
        { title: "Our Work", route: "/work" },
        { title: "Our Process", route: "/process" },
        { title: "Key Infrastructure", route: "/infrastructure" },
        { title: "Engagement Model", route: "/engagement" },
        // { title: "Chess Game", route: "/chessgame" },
      ],
    },
    { title: "Career", route: "/career" },
    { title: "Let's Talk", route: "/contact" },
  ]);
  return (
    <nav className="navbar navbar-dark flex-nowrap position-absolute top-0 w-100">
      <div className="container-fluid px-3 px-lg-5">
        <Link className="navbar-brand align-self-baseline" href="/">
          <img src={logo.src} alt="Bleeding Edge" />
        </Link>
        <div className="d-flex flex-column align-items-end border-gradient">
          {menuItems.map((item, i) =>
            item.subItems ? (
              <>
                <div className="menu-item mb-1">
                  <div className="menu-label text-end pe-2">
                    <Link
                   
                      href={item.route}
                      className="dropdown-toggle text-decoration-none"
                    >
                      {item.title}
                    </Link>
                    <ul className="row list-unstyled p-3 rounded-3 border border-primary-light border-2 bg-black text-start">
                      <li>
                        <h5>
                          <Link
                         
                            href={item.route}
                            className="text-decoration-none"
                          >
                            {item.title}
                          </Link>
                        </h5>
                      </li>
                      {item.subItems.map((si, itemIndex) => (
                        <li key={itemIndex} className={"col-12 col-lg-4 pt-3"}>
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
                                <li key={siIndex} className="ps-2">
                                  <Link
                                 
                                    href={child.route}
                                    className="text-decoration-none link-light"
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
                  <div className="menu-line" />
                </div>
              </>
            ) : (
              <Link
                key={i}
                href={item.route}
           
                className="menu-item text-decoration-none mb-1"
              >
                <span className="menu-label pe-2">{item.title}</span>
                <div className="menu-line" />
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;

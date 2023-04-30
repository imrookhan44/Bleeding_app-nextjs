import Link from "next/link";
import React, { useState } from "react";
import logo from "../public/images/Logo.png";
import Offcanvas from "react-bootstrap/Offcanvas";
import OffcanvasHeader from "react-bootstrap/OffcanvasHeader";
import OffcanvasTitle from "react-bootstrap/OffcanvasTitle";
import OffcanvasBody from "react-bootstrap/OffcanvasBody";

const HeaderTwo = () => {
  const [show, setShow] = useState(false);
  const closeMenu = () => setShow(false);
  const openMenu = () => setShow(true);
  const [menuItems] = useState([
    { title: "Home", route: "/" },
    {
      title: "Services",
      description: "Services",
      route: "/services",
      subItems: [
        {
          title: "Game Development Services",
          route: "#",
          description:
            "Looking for professional game development services? Look no further! Our team specializes in creating top-quality games for various platforms. Contact us today to learn more.",
          children: [
            {
              title: "Mobile Game Development",
              route: "/services/mobile-game-development",
              description:
                "Create engaging mobile games with our expert game development services. From concept to launch, we'll bring your ideas to life. Contact us today",
            },
            {
              title: "NFT Game Development",
              route: "/services/nft-game-development",
              description:
                "Looking to develop an NFT game? Our expert team can help bring your vision to life. Get in touch to learn more about our NFT game development services.",
            },
            {
              title: "Desktop Game Development",
              route: "/services/desktop-game-development",
              description:
                "Create engaging desktop games with our expert game development services. From concept to launch, we bring your vision to life. Get in touch today.",
            },
            {
              title: "Web3 Game Development",
              route: "/services/web3-game-development",
              description:
                "Explore the exciting world of Web3 game development and immerse yourself in the future of gaming. Learn about blockchain technology, NFTs, and more. Start creating today!",
            },
            {
              title: "Metaverse Game Development",
              route: "/services/metaverse-game-development",
              description:
                "Create immersive worlds and unforgettable experiences with our metaverse game development services. Explore the possibilities of the virtual realm today",
            },
          ],
        },
        {
          title: "Art, Design & Animation",
          description:
            "Discover the world of Art, Design & Animation with our comprehensive resources. From inspiration to execution, elevate your creativity today.",
          route: "#",
          children: [
            {
              title: "Post-Production",
              route: "/services/post-production",
              description:
                "Improve the quality of your film with expert post-production services. We offer comprehensive solutions for editing, color grading, sound design, and more. Contact us today.",
            },
            {
              title: "UI/UX",
              route: "/services/ui-ux",
              description:
                "Looking for a great user experience (UX) and intuitive user interface (UI)? Our experts provide top-notch UI/UX design services to boost your website's performance. Contact us now!",
            },
            {
              title: "Asset Production",
              route: "/services/asset-production",
              description:
                "Looking to produce assets for your business? Learn about asset production strategies and techniques to help your brand stand out. Discover more here.",
            },
            {
              title: "Animation",
              route: "/services/animation",
              description:
                "Create captivating visuals and bring your stories to life with animation. Learn about the different types of animation and how they can enhance your brand or project.",
            },
          ],
        },

        {
          title: "Interactive Application",
          description:
            "Looking for an engaging and dynamic way to interact with your audience? Check out our interactive application! Engage, entertain, and educate with ease. Learn more today.",
          route: "#",
          children: [
            {
              title: "Metaverse Services",
              route: "/services/metaverse-services",
              description:
                "Discover the latest Metaverse services and unlock new possibilities for virtual experiences. Connect with ChatGPT for expert insights and guidance.",
            },
            {
              title: "Simulations",
              route: "/services/simulation",
              description:
                "Experience virtual reality with our cutting-edge simulations. Our immersive technology allows you to explore, learn and engage like never before. Discover our simulations today.",
            },
            {
              title: "Learning And Edutainment",
              route: "/services/learning-and-edutainment",
              description:
                "Discover the perfect blend of learning and entertainment with our innovative approach. Experience engaging and educational content like never before.",
            },
            {
              title: "AR, VR, WebXR Development",
              route: "/services/ar-vr-webxr-development",
              description:
                "Looking to develop AR, VR, or WebXR applications? Our team can help! Get top-quality development services for immersive technologies today. Contact us to learn more.",
            },
            {
              title: "Gamification & Serious Games",
              route: "/services/gamification-serious-games",
              description:
                "Discover the power of Gamification & Serious Games in engaging and motivating users. Learn how to implement these techniques for business success",
            },
          ],
        },

        {
          title: "Technology Services",
          description:
            "Looking for reliable technology services? Our team offers expert solutions for all your tech needs. Contact us today for a free consultation!",
          route: "#",
          children: [
            {
              title: "Unity3D Game Development",
              route: "/services/unity-game-development",
              description:
                "Create engaging and immersive games with Unity3D game development. Learn from industry experts and unleash your creativity to build your own games. Start today!",
            },
            {
              title: "Unreal Game Development",
              route: "/services/unreal-game-development",
              description:
                "Looking to develop a game using Unreal Engine? Our comprehensive guide to Unreal Game Development has everything you need to get started. Learn more here.",
            },
            {
              title: "HTML5/WebGL Game Development",
              route: "/services/html5-web-gl-game-development",
              description:
                "Looking to develop an engaging game using HTML5 and WebGL technology? Explore the possibilities with our expert game development services. Contact us now.",
            },
            {
              title: "Flutter Developments",
              route: "/services/flutter-development",
              description:
                "Looking for the latest updates on Flutter development? Stay ahead of the curve with our expert insights and analysis on Flutter developments.",
            },
          ],
        },

        {
          title: "Blockchain Services",
          description:
            "Looking for reliable blockchain services? Explore our offerings and discover how we can help your business leverage the power of blockchain technology. Contact us today",
          route: "#",
          children: [
            {
              title: "Blockchain Game Development",
              route: "/services/blockchain-game-development",
              description:
                "Create immersive and secure gaming experiences with blockchain technology. Discover the benefits of blockchain game development for your next project. Learn more now.",
            },
            {
              title: "dApps Game Development",
              route: "/services/dapps-game-development",
              description:
                "Looking to create a decentralized gaming experience? Explore dApps game development with our expert team. Contact us today to bring your ideas to life.",
            },
          ],
        },

        {
          title: "Resource Augmentation",
          description:
            "Resource augmentation can help businesses expand their capabilities by increasing their resources. Learn how to effectively implement resource augmentation strategies for success.",
          route: "#",
          children: [
            {
              title: "Game Designer",
              route: "/services/game-design",
              description:
                "Craft immersive game experiences as a professional game designer. Create engaging gameplay mechanics and captivating storylines that keep players hooked. Start your journey today.",
            },
            {
              title: "2D Artist",
              route: "/services/artists-2d",
              description:
                "Find the best 2D artists for your project. Browse a diverse range of skilled 2D artists and hire the perfect one for your design needs. Contact us today!",
            },
            {
              title: "3D Artist",
              route: "/services/artists-3d",
              description:
                "Looking for a skilled 3D artist? Look no further! Our team of experts can bring your visions to life with stunning 3D graphics and animations. Contact us today to see what we can create for you.",
            },
          ],
        },
      ],
    },

    {
      title: "Solution",
      description: "Unreal Game Development",
      route: "/solution",
      subItems: [
        {
          title: "Snack & Ladder Game",
          route: "/solution/snakes-and-ladder-game-development",
          description:
            "Climb up the Snack & Ladder Game! Enjoy the ultimate adventure with this classic board game. Roll the dice and climb ladders, but watch out for those pesky snakes!",
        },
        {
          title: "Ludo Game",
          route: "/solution/ludo-game-development",
          description:
            "Looking for a fun and exciting board game to play with family and friends? Look no further than Ludo Game! Enjoy hours of entertainment with this classic game of strategy and luck. Download now and get rolling!",
        },
        {
          title: "Tic Tac Toe Game",
          route: "/solution/tic-tac-toe-game-development",
          description:
            "Play the classic Tic Tac Toe game online for free! Test your strategy skills against the computer or a friend. Enjoy hours of fun with this simple yet addictive game.",
        },
        {
          title: "Hyper Casual Game",
          route: "/solution/hyper-casual-game-development",
          description:
            "Looking for a quick and addictive gaming experience? Check out our hyper casual games! These simple yet challenging games are perfect for a quick break or to pass the time. Try them now!",
        },
        {
          title: "Bubble Shooter Game",
          route: "/solution/bubble-shooter-game-development",
          description:
            "Enjoy endless fun with Bubble Shooter game! Aim, match and pop colorful bubbles to win levels and beat your high score. Play now for free and indulge in this addictive puzzle game.",
        },
        {
          title: "UNO Game ",
          route: "/solution/uno-game-development",
          description:
            "Get ready to play UNO, the classic card game loved by millions! Enjoy hours of fun with family and friends. Buy now and start playing today.",
        },
        {
          title: "Carrom Game",
          route: "/solution/carrom-game-development",
          description:
            "Looking for a fun indoor game? Check out Carrom! This classic board game is perfect for players of all ages and skill levels. Get ready to hone your strategic thinking and precision shots!",
        },
        {
          title: "Archery Game",
          route: "/solution/archery-game-development",
          description:
            "Get ready to aim and shoot! Play our exciting Archery Game and experience the thrill of hitting the bullseye. Challenge your skills and compete with friends today.",
        },
        {
          title: "8 Ball Pool Game",
          route: "/solution/pool-8_ball-game-development",
          description:
            "Play the popular 8 Ball Pool game online and challenge your skills against players worldwide. Enjoy the classic gameplay and win big prizes. Start playing now!",
        },
        {
          title: "Real Money Game",
          route: "/solution/real-money-game-development",
          description:
            "Play exciting real money games and win big at our online gaming platform. Join now and experience the thrill of our top-rated games! Meta description: Play real money games and win big at our online gaming platform. Join now and experience the thrill of our top-rated games!",
        },
        {
          title: "Chess Game",
          route: "/solution/chess-game-development",
          description:
            "Experience the ultimate strategy game with Chess. Play online or against a computer and improve your skills. Join the millions of players worldwide!",
        },
        {
          title: "Car Simulation Game",
          route: "/solution/car-simulation-game-development",
          description:
            "Experience the thrill of driving in our car simulation game. With realistic graphics and physics, you'll feel like you're behind the wheel of your dream car. Play now!",
        },
        {
          title: "Shooting Game",
          route: "/solution/shooting-game-development",
          description:
            "Get ready to aim and fire with our thrilling shooting game! Test your skills and reflexes as you take on challenging levels and enemies. Play now for an adrenaline-pumping experience.",
        },
        {
          title: "Rummy Game",
          route: "/solution/rummy-game-development",
          description:
            "Enjoy the classic Rummy game online! Play with real players or against the computer. Get the ultimate gaming experience with our user-friendly interface. Join now!",
        },
        {
          title: "Poker Game",
          route: "/solution/poker-game-development",
          description:
            "Enjoy the thrill of the ultimate Poker Game! Join now and experience the excitement of high-stakes betting, skillful strategy, and big wins. Play with friends or join global tournaments.",
        },
        {
          title: "Tarneeb Game",
          route: "/solution/tarneeb-game-development",
          description:
            "Play your favorite fantasy sports games on our app. Choose your teams, make trades, and compete against friends. Download now for the ultimate gaming experience.",
        },
        {
          title: "Hand Game",
          route: "/solution/hand-game-development",
          description:
            "Play the popular hand game and challenge your friends! Learn the rules, techniques, and strategies to win. Enjoy endless hours of fun with this classic game.",
        },
        {
          title: "Casino Game",
          route: "/solution/casino-game-development",
          description:
            "Looking for a thrilling casino game experience? Look no further than our selection of exciting games, featuring everything from classic slots to live dealer tables. Start playing now!",
        },
        {
          title: "Tower Defence Game",
          route: "/solution/tower-defense-game-development",
          description:
            "Protect your territory and strategize against enemy attacks in our Tower Defence Game. Play now and experience the thrill of defending your base!",
        },
        {
          title: "Callbreak Card Game",
          route: "/solution/callbreak-card-game-development",
          description:
            "Enjoy the popular Callbreak card game online! Play with friends or challenge new opponents. Learn the rules and strategy for this exciting trick-taking game.",
        },
        {
          title: "Stock Fantasy App",
          route: "/solution/stock-fantasy-app-development",
          description:
            "Experience the thrill of virtual trading with Stock Fantasy App. Learn, compete and win exciting rewards. Join now and become a pro trader!",
        },
        {
          title: "Fantasy Sports App",
          route: "/solution/fantasy-sports-app-development",
          description:
            "Looking for a fun way to engage with your favorite sports? Download our Fantasy Sports App today and get in on the action! Create your own teams and compete with other sports fans for the top spot on the leaderboard.",
        },
        {
          title: "Multi-gaming App",
          route: "/solution/multi-gaming-app-development",
          description:
            "Discover a world of endless gaming possibilities with our multi-gaming app. Enjoy a diverse range of games all in one place. Download now and start playing!",
        },
      ],
    },
    {
      title: "Company",
      description: "Company",
      route: "/about",
      subItems: [
        {
          title: "About Us",
          route: "/about",
          description:
            "Learn more about our company and what sets us apart. Discover our mission, values, and commitment to providing exceptional products/services. Find out more.",
        },
        {
          title: "Our Work",
          route: "/work",
          description:
            "Discover what we do and how we can help you achieve your goals. Learn more about our work and the services we offer. Contact us today for more information.",
        },
        {
          title: "Our Process",
          route: "/process",
          description:
            "Discover the step-by-step approach to 'Our Process' and how it can help streamline your business. Learn how we can help you achieve your goals today.",
        },
        {
          title: "Key Infrastructure",
          route: "/infrastructure",
          description:
            "Discover the importance of key infrastructure in ensuring stability and security. Learn about critical systems and their role in modern society. Find out more now.",
        },
        {
          title: "Engagement Model",
          route: "/engagement",
          description:
            "An engagement model defines how businesses interact with customers, employees, and stakeholders. Learn how to create effective engagement models to drive growth.",
        },
        // { title: "Chess Game", route: "/chessgame" },
      ],
    },
    {
      title: "Career",
      route: "/career",
      description: "Career",
    },
    {
      title: "Let's Talk",
      route: "/contact",
      description: "Let's Talk",
    },
  ]);

  function Popup({ item, index }) {
    return (
      <>
        <a
          href="#"
          className="nav-link fs-4"
          data-bs-toggle="modal"
          data-bs-target={`#modal${index}`}
          onClick={closeMenu}
        >
          {item.title} {"->"}
        </a>
        <div
          className="modal fade"
          id={`modal${index}`}
          tabIndex="-1"
          aria-labelledby={`modalLabel${index}`}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content border border-primary-light border-2 bg-black text-start">
              <div className="modal-header border-0">
                <h1
                  className="modal-title fs-5 text-light"
                  id={`modalLabel${index}`}
                >
                  <Link
                    className="nav-link fs-4"
                    href={item.route}
                    onClick={closeMenu}
                  >
                    {item.title}
                  </Link>
                </h1>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <ul className="row list-unstyled">
                  {item.subItems.map((si, i2) => (
                    <li
                      className={"col-12 col-lg-4 pt-3"}
                      key={`${index}${i2}`}
                    >
                      <Link
                        href={si.route}
                        key={`${index}${i2}`}
                        className={`text-decoration-none ${
                          si.children ? "fw-bold" : "link-light"
                        }`}
                      >
                        {si.title}
                      </Link>

                      {si.children && (
                        <ul className="list-unstyled p-3">
                          {si.children.map((child, i3) => (
                            <li key={i3} className="ps-2">
                              <Link
                                href={child.route}
                                className="text-decoration-none link-light"
                                key={`${index}${i2}${i3}`}
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
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <nav className="bg-black text-light navbar navbar-dark">
      <div className="container-fluid px-3 px-lg-5">
        <Link className="navbar-brand" href="/">
          <img src={logo.src} alt="Cross Jump Studio" height={70} />
        </Link>
        <button
          variant="primary"
          onClick={openMenu}
          className="navbar-toggler border-primary shadow-primary rounded-circle border-2 p-2"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <Offcanvas
        show={show}
        onHide={closeMenu}
        placement="end"
        className="text-bg-dark bg-black"
      >
        <OffcanvasHeader closeButton closeVariant="white" className="px-4">
          <OffcanvasTitle>Menu</OffcanvasTitle>
        </OffcanvasHeader>
        <OffcanvasBody className="px-0">
          <ul className="nav flex-column">
            {menuItems.map((item, i) => (
              <li
                className="nav-item border-bottom border-dark"
                data-bs-dismiss="offcanvas"
                key={i}
              >
                {item.subItems ? (
                  <Popup item={item} key={i} index={i} closeMenu={closeMenu} />
                ) : (
                  <Link
                    className="nav-link fs-4"
                    href={item.route}
                    onClick={closeMenu}
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </OffcanvasBody>
      </Offcanvas>
    </nav>
  );
};

export default HeaderTwo;

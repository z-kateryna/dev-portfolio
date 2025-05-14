import "./Hero.scss";
import Portrait from "../../assets/images/picture.png";
import CatGif from "../../assets/gifs/cat.gif";
import CatStill from "../../assets/images/cat.gif";
import JS from "../../assets/icons/js.svg";
import CSS from "../../assets/icons/css-3.svg";
import HTML from "../../assets/icons/html5.svg";
import Tailwind from "../../assets/icons/tailwind.svg";
import Sass from "../../assets/icons/sass.svg";
import VS from "../../assets/icons/vs.svg";
import Postman from "../../assets/icons/postman.svg";
import Adobe from "../../assets/icons/adobe.svg";
import Figma from "../../assets/icons/figma.svg";
import Mysql from "../../assets/icons/mysql.svg";

const icons = [JS, CSS, HTML, Tailwind, Sass, VS, Postman, Adobe, Figma, Mysql];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <div className="hero__copy-container">
          <div className="hero__copy--line1">
            <p className="hero__copy--black">Hello, I'm Kat</p>
            <img
              className="hero__img"
              src={Portrait}
              alt="Kateryna's picture"
            />
          </div>

          <div className="hero__copy--line2">
            <div className="hero__gif-wrapper">
              <img className="cat-still" src={CatStill} alt="static cat" />
              <img className="cat-animated" src={CatGif} alt="animated cat" />
            </div>
            <p className="hero__copy--green">creative&nbsp;</p>
            <p className="hero__copy--green">developer,&nbsp;</p>
                        <p className="hero__copy--green-mobile"> designer</p>
          </div>

          <div className="hero__copy--line3">
            <p className="hero__copy--green-desktop">designer&nbsp;</p>
            <p className="hero__copy--black">& lifelong learner</p>
          </div>
          <div className="hero__paragraph">
          <p className="hero__copy--small">
            I obsess over details, care deeply about user experience, and love
            turning ideas into beautiful, useful, and usable products.
          </p>
          </div>
        </div>

        <div className="hero__icons-scroll">
          <div className="hero__icons-track">
            {[...icons, ...icons].map((icon, index) => (
              <img
                key={index}
                src={icon}
                className="hero__icon"
                alt="tech icon"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

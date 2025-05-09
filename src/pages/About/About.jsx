import "./About.scss";
import Img from "../../assets/images/mypicture.jpg";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

export default function About() {
  return (
    <>
      <Navigation />
      <section className="about">
        <div className="about__wrapper">
          <h1 className="about__header--big">
            Obsessions make{" "}
            <span className="about__header--it">my life worse </span>and{" "}
            <span className="about__header--green">my work better.</span>
          </h1>
          <div className="about__content-container">
            <img className="about__img" src={Img} alt="Kateryna presenting" />
            <div>
              <h2 className="about__header--small">
                Hi there, thanks for stopping by!
              </h2>
              <div className="about__copy-wrapper">
                <p className="about__copy">
                  I'm a Ukrainian native who first dove into tech (as a
                  designer) in 2020—and ever since, I’ve dreamed of learning how
                  to code. Now, I can finally bring my own designs to life, and
                  there's something incredibly satisfying about that.
                </p>
                <p className="about__copy">
                  My philosophy is simple: in today’s competitive world,
                  websites and apps need to be both visually appealing and
                  intuitive to use. That’s why, for me, design and code go hand
                  in hand. I bring the same creativity and attention to detail
                  to my code as I do to my designs.
                </p>
                <p className="about__copy">
                  I'm currently open to freelance projects and full-time
                  opportunities. Don’t hesitate to reach out—I'm always up for a
                  good chat (and a coffee, of course).
                </p>
              </div>
            </div>
          </div>
          <div className="about__tags-wrapper">
            <h3 className="about__header--small">My toolkit</h3>
            <div className="about__tags-container">
              <div className="about__tag">HTML</div>
              <div className="about__tag">CSS</div>
              <div className="about__tag">Javascript</div>
              <div className="about__tag">Sass</div>
              <div className="about__tag">Tailwind</div>
              <div className="about__tag">React</div>
              <div className="about__tag">Node.js</div>
              <div className="about__tag">Express</div>
              <div className="about__tag">Mysql</div>
              <div className="about__tag">Bootstrap</div>
              <div className="about__tag">Github</div>
              <div className="about__tag">Postman</div>
              <div className="about__tag">Webflow</div>
              <div className="about__tag">Framer</div>
              <div className="about__tag">Wix</div>
              <div className="about__tag">Figma</div>
              <div className="about__tag">Miro</div>
              <div className="about__tag">Jira</div>
              <div className="about__tag">Photoshop</div>
              <div className="about__tag">Illustrator</div>
              <div className="about__tag">InDesign</div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

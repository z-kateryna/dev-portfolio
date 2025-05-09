import "./Content.scss";
import MockUpAgustin from "../../assets/images/mockupagustin.jpg";
import MockUpCapstone from "../../assets/images/mockupbsmart.jpg";
import MockupInstock from "../../assets/images/mockupinstock.jpg";
import MockUpCandubai from "../../assets/images/mockupcandubai.jpg";
import MockUpBandsite from "../../assets/images/mockupbandsite.jpg";
import MockUpOsvitaTour from "../../assets/images/mockuposvitatour.jpg";

export default function Content() {
  return (
    <section className="content">
      <div className="content__wrapper">
        <div className="content__card">
          <img
            className="content__img"
            src={MockUpAgustin}
            alt="mock up of agustincalderon.com"
          />
          <div className="content__tags-container">
            <div className="content__tag">Front-End</div>
            <div className="content__tag">Website</div>
            <div className="content__tag">React</div>
            <div className="content__tag">Vite</div>
            <div className="content__tag">UI/UX Design</div>
            <div className="content__tag">Sass</div>
            <div className="content__tag">i18n</div>
            <div className="content__tag">EmailJS</div>
            <div className="content__tag">Netlify</div>
            <div className="content__tag">GitHub</div>
          </div>
          <h2 className="content__header">
            Custom React website
          </h2>
          <p className="content__copy">
            This high-performance front-end project blends clean design,
            responsive development, and intuitive user experience. Built with
            React and Sass, it delivers fast load times, accessible interfaces,
            and modern visuals optimized for all devices.
          </p>
          <a
            href="https://www.agustincalderon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="content__button"
          >
            See live site
          </a>
        </div>
        <div className="content__card">
          <img
            className="content__img"
            src={MockUpCapstone}
            alt="mock up of agustincalderon.com"
          />
          <div className="content__tags-container">
            <div className="content__tag">Full-stack</div>
            <div className="content__tag">Web app</div>
            <div className="content__tag">OpenAI API</div>
            <div className="content__tag">React</div>
            <div className="content__tag">Node</div>
            <div className="content__tag">Express</div>
            <div className="content__tag">UI Design</div>
            <div className="content__tag">GitHub</div>
            <div className="content__tag">Prompt engineering</div>
          </div>
          <h2 className="content__header">b.smart app</h2>
          <p className="content__copy">
            An AI-powered micro-learning web app that replaces social media
            feeds with educational content. Built in just three weeks, it
            dynamically generates bite-sized learning prompts tailored to each
            user.
          </p>
          <a
            href="https://drive.google.com/file/d/1WU-0WVSAu5Bx0WrOKpVDXYNoX6ajsdSo/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="content__button"
          >
            See demo
          </a>
        </div>
        <div className="content__card">
          <img
            className="content__img"
            src={MockUpCandubai}
            alt="mock up of agustincalderon.com"
          />
          <div className="content__tags-container">
            <div className="content__tag">Webflow development</div>
            <div className="content__tag">Website</div>
            <div className="content__tag">UI/UX Design</div>
            <div className="content__tag">Graphic Design</div>
          </div>
          <h2 className="content__header">
            Canada Dubai Business Network website
          </h2>
          <p className="content__copy">
            I created the brand identity from the ground up—including the logo,
            brandbook, and all graphic assets—and translated the vision into a
            responsive, modern website that reflects the organization’s values
            and professionalism.
          </p>
          <a
            href="https://www.candubai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="content__button"
          >
            See live site
          </a>
        </div>
        <div className="content__card">
          <img
            className="content__img"
            src={MockupInstock}
            alt="mock up of agustincalderon.com"
          />
          <div className="content__tags-container">
            <div className="content__tag">Full-stack</div>
            <div className="content__tag">Web app</div>
            <div className="content__tag"> MySQL</div>
            <div className="content__tag">React</div>
            <div className="content__tag">Node</div>
            <div className="content__tag">Express</div>
            <div className="content__tag">Jira</div>
            <div className="content__tag">GitHub</div>
          </div>
          <h2 className="content__header">
            Instock - Inventory Management System
          </h2>
          <p className="content__copy">
            An Inventory Management App designed to streamline stock tracking
            and warehouse operations through intuitive UI and CRUD
            functionalities.
          </p>
          <a
            href="https://drive.google.com/file/d/1ANg1c8j8DgIymswkjoDPM0BJWgNb9mpz/view"
            target="_blank"
            rel="noopener noreferrer"
            className="content__button"
          >
            See demo
          </a>
        </div>
        <div className="content__card">
          <img
            className="content__img"
            src={MockUpOsvitaTour}
            alt="mock up of agustincalderon.com"
          />
          <div className="content__tags-container">
            <div className="content__tag">Framer development</div>
            <div className="content__tag">Website</div>
            <div className="content__tag">UI/UX Design</div>
            <div className="content__tag">Graphic Design</div>
          </div>
          <h2 className="content__header">Osvita Tour website redesign</h2>
          <p className="content__copy">
            A complete rebrand and website redesign for Osvita Tour, an
            international education agency. I refreshed the logo, designed a new
            visual identity, and developed a modern, responsive website in
            Framer.
          </p>
          <a
            href="https://www.osvitatour.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="content__button"
          >
            See live site
          </a>
        </div>

        <div className="content__card">
          <img
            className="content__img"
            src={MockUpBandsite}
            alt="mock up of agustincalderon.com"
          />
          <div className="content__tags-container">
            <div className="content__tag">Full-stack</div>
            <div className="content__tag">Website</div>
            <div className="content__tag">Dynamic data</div>
            <div className="content__tag">DOM</div>
            <div className="content__tag">React</div>
            <div className="content__tag">Github</div>
          </div>
          <h2 className="content__header">Bandsite website</h2>
          <p className="content__copy">
            A responsive website for a fictional music band, featuring
            media-rich content, dynamic events, and an interactive fan
            engagement section.
          </p>
          <a
            href="https://drive.google.com/file/d/1GKP7JrQAiZ3U_qR1ricPlBDNiiWJHSdN/view"
            target="_blank"
            rel="noopener noreferrer"
            className="content__button"
          >
            See demo
          </a>
        </div>
      </div>
    </section>
  );
}

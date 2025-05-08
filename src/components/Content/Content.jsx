import "./Content.scss";
import MockUpAgustin from "../../assets/images/mockupagustin.jpg";
import MockUpCapstone from "../../assets/images/mockupbsmart.jpg";

export default function Content () {
    return (
        <section className="content">
            <div className="content__wrapper">
                <div className="content__card">
                    <img className="content__img" src={MockUpAgustin} alt="mock up of agustincalderon.com"/>
                    <div className="content__tags-container">
                        <div className="content__tag">Front-End</div>
                        <div className="content__tag">React</div>
                        <div className="content__tag">UI/UX Design</div>
                        <div className="content__tag">Sass</div>
                        <div className="content__tag">i18n</div>
                        <div className="content__tag">EmailJS</div>
                    </div>
                    <h2 className="content__header">Custom React portfolio designed and built from scratch</h2>
                    <p className="content__copy">This high-performance front-end project blends clean design, responsive development, and intuitive user experience. Built with React and Sass, it delivers fast load times, accessible interfaces, and modern visuals optimized for all devices.</p>
                </div>
                <div className="content__card">
                    <img className="content__img" src={MockUpCapstone} alt="mock up of agustincalderon.com"/>
                    <div className="content__tags-container">
                        <div className="content__tag">Full-stack</div>
                        <div className="content__tag">OpenAI API</div>
                        <div className="content__tag">React</div>
                        <div className="content__tag">Node</div>
                        <div className="content__tag">Express</div>
                        <div className="content__tag">UI Design</div>
                    </div>
                    <h2 className="content__header">Custom React portfolio designed and built from scratch</h2>
                    <p className="content__copy">This high-performance front-end project blends clean design, responsive development, and intuitive user experience. Built with React and Sass, it delivers fast load times, accessible interfaces, and modern visuals optimized for all devices.</p>
                </div>
            </div>

        </section>
    )
}
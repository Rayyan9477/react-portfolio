import { BsCheck2All } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="services_container container grid grid-cols-3 gap-[3rem] max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-[1.5rem]">
        <article className="service hover:cursor-default hover:border-[#2f2f69] hover:bg-transparent max-md:h-auto">
          <div className="service__head">
            <h3>AI-Powered Solutions</h3>
          </div>
          <ul className="service__list p-[1.8rem] pl-[1.6rem]">
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Custom AI model development and deployment</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Generative AI applications (image, text, code)</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>AI-driven automation and optimization</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>AI-enhanced data analysis and insights</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>AI-powered personalization and recommendations</p>
            </li>
          </ul>
        </article>
        <article className="service hover:cursor-default hover:border-[#2f2f69] hover:bg-transparent max-md:h-auto">
          <div className="service__head">
            <h3>Data Science & Machine Learning</h3>
          </div>
          <ul className="service__list p-[1.8rem] pl-[1.6rem]">
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>End-to-end machine learning pipeline development</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Deep learning model design and optimization</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Natural Language Processing (NLP) solutions</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Computer Vision and Image Recognition</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Time series analysis and forecasting</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Recommendation systems and personalization</p>
            </li>
          </ul>
        </article>
        <article className="service hover:cursor-default  hover:border-[#2f2f69] hover:bg-transparent max-md:h-auto">
          <div className="service__head">
            <h3>Data Analysis & Insights</h3>
          </div>
          <ul className="service__list p-[1.8rem] pl-[1.6rem]">
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Data exploration, cleaning, and preprocessing</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Statistical analysis and hypothesis testing</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Data visualization and storytelling</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Business intelligence (BI) and reporting</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>A/B testing and experimentation analysis</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Data-driven decision making and consulting</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
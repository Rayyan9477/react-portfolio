import { BsPatchCheckFill } from "react-icons/bs";

const ProfessionalExperience = () => {
  return (
    <section id="professional-experience">
      <h5>What I have Done</h5>
      <h2>Professional Experience</h2>
      <div className="experience__container container grid grid-cols-1 gap-[2rem] max-sm:gap-[1rem]">
        <div className="experience__item col-span-1 max-md:mx-auto max-md:my-0 max-md:w-[85%] max-md:p-[2rem] max-sm:w-[100%] max-sm:px-[1rem] max-sm:py-[2rem]">
          <h3 className="color-primary mb-[1rem]">Data Scientist</h3>
          <h4 className="text-light">Nobility MBS | Islamabad, Pakistan</h4>
          <p className="text-light">March 2025 – Present</p>
          <ul className="list-disc pl-5 mt-2">
            <li>
              Automated medical billing workflows using browser automation, AI agents, and LLMs, reducing manual processing by 
              35% and boosting billing accuracy by 20%.
            </li>
            <li>
              Designed and deployed RAG pipelines and MCP-driven AI solutions to deliver real-time insights, accelerating billing 
              operations and improving decision-making efficiency by 30%.
            </li>
          </ul>
        </div>
        
        <div className="experience__item col-span-1 max-md:mx-auto max-md:my-0 max-md:w-[85%] max-md:p-[2rem] max-sm:w-[100%] max-sm:px-[1rem] max-sm:py-[2rem]">
          <h3 className="color-primary mb-[1rem]">Data Analyst</h3>
          <h4 className="text-light">Ozibook | Remote, Bangalore, India</h4>
          <p className="text-light">October 2024 – Present</p>
          <ul className="list-disc pl-5 mt-2">
            <li>
              Optimized SQL Queries and Interactive Dashboards: Enhanced SQL
              query performance by 20%, enabling faster data processing, and
              developed Power BI dashboards, improving data visualization and
              decision-making processes by 15%.
            </li>
            <li>
              Predictive Analytics Implementation: Built machine learning models
              using Python libraries such as Pandas, NumPy, Matplotlib, Scrapy,
              and Scikit-Learn, achieving an 18% increase in predictive
              accuracy.
            </li>
          </ul>
        </div>

        <div className="experience__item col-span-1 max-md:mx-auto max-md:my-0 max-md:w-[85%] max-md:p-[2rem] max-sm:w-[100%] max-sm:px-[1rem] max-sm:py-[2rem]">
          <h3 className="color-primary mb-[1rem]">
            AI Engineer (Machine Learning)
          </h3>
          <h4 className="text-light">
            Digital Empowerment Networks | Islamabad, Pakistan
          </h4>
          <p className="text-light">July – September 2024</p>
          <ul className="list-disc pl-5 mt-2">
            <li>
              Advanced Data Processing: Conducted data cleaning, preprocessing,
              and visualization to prepare large datasets for analysis,
              enhancing data quality by 30%.
            </li>
            <li>
              Machine Learning Models: Implemented concept such as k-means
              clustering, logistic regression, and NLP tokenizing to build
              predictive models, improving fraud detection accuracy by 22% and
              reducing false positives by 99.05%.
            </li>
          </ul>
        </div>

        <div className="experience__item col-span-1 max-md:mx-auto max-md:my-0 max-md:w-[85%] max-md:p-[2rem] max-sm:w-[100%] max-sm:px-[1rem] max-sm:py-[2rem]">
          <h3 className="color-primary mb-[1rem]">Data Analyst Intern</h3>
          <h4 className="text-light">Mentorness | Remote, Pakistan</h4>
          <p className="text-light">May 2024 – June 2024</p>
          <ul className="list-disc pl-5 mt-2">
            <li>
              Power BI Dashboards, Presentation Skills: Developed interactive
              Power BI dashboards, enhancing data visualization and
              decision-making resulting in a 20% boost in report efficiency and
              15% improvement in decision-making accuracy.
            </li>
            <li>
              SQL Data Management: Optimized SQL queries for data extraction
              and analysis, enhancing data retrieval speed by 25% and ensuring
              accurate data handling.
            </li>
          </ul>
        </div>

        <div className="experience__item col-span-1 max-md:mx-auto max-md:my-0 max-md:w-[85%] max-md:p-[2rem] max-sm:w-[100%] max-sm:px-[1rem] max-sm:py-[2rem]">
          <h3 className="color-primary mb-[1rem]">Open Source Contributor</h3>
          <h4 className="text-light">Google Summer of Code (GSOC) | Remote</h4>
          <p className="text-light">April 2024 – August 2024</p>
          <ul className="list-disc pl-5 mt-2">
            <li>
              Developed and contributed code to open-source projects, implementing new features and resolving critical bugs that improved software performance by 25% and enhanced user experience.
            </li>
            <li>
              Collaborated with global developers using Git workflow, participating in code reviews and agile development processes while adhering to project standards and deadlines.
            </li>
            <li>
              Gained expertise in software development best practices, continuous integration, and technical documentation in a distributed team environment.
            </li>
          </ul>
        </div>

        <div className="experience__item col-span-1 max-md:mx-auto max-md:my-0 max-md:w-[85%] max-md:p-[2rem] max-sm:w-[100%] max-sm:px-[1rem] max-sm:py-[2rem]">
          <h3 className="color-primary mb-[1rem]">Lab Demonstrator</h3>
          <h4 className="text-light">National University of Computer and Emerging Sciences | Pakistan</h4>
          <p className="text-light">August 2023 – January 2024</p>
          <ul className="list-disc pl-5 mt-2">
            <li>
              Facilitated hands-on programming sessions for 50+ undergraduate students, resulting in a 30% improvement in practical programming skills and a 25% increase in assignment completion rates.
            </li>
            <li>
              Designed and evaluated comprehensive assessments including practical tests, programming tasks, and technical examinations that effectively measured student proficiency in key programming concepts.
            </li>
            <li>
              Provided one-on-one mentoring for complex programming concepts including arrays, pointers, object-oriented programming, and data science fundamentals, helping students overcome technical challenges and improve debugging skills.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;
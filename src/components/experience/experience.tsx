import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I have</h5>
      <h2>My Skills</h2>
      <div className="experience__container container grid grid-cols-2 gap-[2rem] max-sm:gap-[1rem]">
        <div className="experience__frontend col-span-2 max-md:mx-auto max-md:my-0 max-md:w-[85%] max-md:p-[2rem] max-sm:w-[100%] max-sm:px-[1rem] max-sm:py-[2rem]">
          <h3 className="color-primary mb-[2rem] text-center">
            Programming Languages
          </h3>
          <div className="experience__content grid grid-cols-3 gap-y-[1rem] max-md:p-[1rem] max-sm:grid-cols-2 max-xsm:grid-cols-1">
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>Python <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python Logo" className="inline-block ml-1 w-4 h-4" /></h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>R <img src="https://www.r-project.org/logo/Rlogo.svg" alt="R Logo" className="inline-block ml-1 w-4 h-4" /></h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>SQL <img src="https://img.icons8.com/color/48/000000/sql.png" alt="SQL Logo" className="inline-block ml-1 w-4 h-4" /></h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>Java <img src="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" alt="Java Logo" className="inline-block ml-1 w-4 h-4" /></h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>C++ <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" alt="C++ Logo" className="inline-block ml-1 w-4 h-4" /></h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__tools max-md:col-span-2 max-md:mx-auto max-md:my-0 max-md:w-[85%] max-md:p-[2rem] max-sm:w-[100%] max-sm:px-[1rem] max-sm:py-[2rem]">
          <h3 className="color-primary mb-[2rem] text-center">
            Tools and Frameworks
          </h3>
          <div className="experience__content grid grid-cols-2 gap-y-[1rem] max-md:p-[1rem] max-xsm:grid-cols-1">
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>Machine Learning </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>Deep Learning  </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>Pandas <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pandas_logo.svg/1200px-Pandas_logo.svg.png" alt="Pandas Logo" className="inline-block ml-1 w-4 h-4" /></h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>Numpy <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg" alt="Numpy Logo" className="inline-block ml-1 w-4 h-4" /></h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>Matplotlib </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>TensorFlow </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>Scikit Learn <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" alt="Scikit Learn Logo" className="inline-block ml-1 w-4 h-4" /></h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>Pytorch </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>LLM Fine-tuning <img src="https://cdn-icons-png.flaticon.com/512/10779/10779791.png" alt="LLM Logo" className="inline-block ml-1 w-4 h-4" /></h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>RAG <img src="https://cdn-icons-png.flaticon.com/512/10779/10779791.png" alt="RAG Logo" className="inline-block ml-1 w-4 h-4" /></h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>AI Agents <img src="https://cdn-icons-png.flaticon.com/512/10779/10779791.png" alt="AI Agents Logo" className="inline-block ml-1 w-4 h-4" /></h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__cloud max-md:col-span-2 max-md:mx-auto max-md:my-0  max-md:w-[85%] max-md:p-[2rem] max-sm:w-[100%] max-sm:px-[1rem] max-sm:py-[2rem]">
          <h3 className="color-primary mb-[2rem] text-center">
            Databases and Cloud Services
          </h3>
          <div className="experience__content grid grid-cols-2 gap-y-[1rem] max-md:p-[1rem] max-xsm:grid-cols-1">
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>MySQL </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>MS SQL Server <img src="https://img.icons8.com/color/48/000000/sql.png" alt="MS SQL Server Logo" className="inline-block ml-1 w-4 h-4" /></h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>Mongo DB </h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
             <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>ChromaDB <img src="https://avatars.githubusercontent.com/u/114152494?s=200&v=4" alt="ChromaDB Logo" className="inline-block ml-1 w-4 h-4" /></h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
             <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>FAISS <img src="https://avatars.githubusercontent.com/u/48947242?s=200&v=4" alt="FAISS Logo" className="inline-block ml-1 w-4 h-4" /></h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>AWS <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS Logo" className="inline-block ml-1 w-4 h-4" /></h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>Azure <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" alt="Azure Logo" className="inline-block ml-1 w-4 h-4" /></h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>GCP </h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend col-span-2 max-md:mx-auto max-md:my-0  max-md:w-[85%] max-md:p-[2rem] max-sm:w-[100%] max-sm:px-[1rem] max-sm:py-[2rem]">
          <h3 className="color-primary mb-[2rem] text-center">Soft Skills</h3>
          <div className="experience__content grid grid-cols-3 gap-y-[1rem] max-md:p-[1rem] max-sm:grid-cols-2 max-xsm:grid-cols-1">
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>Ability to get the job Done</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>Analytical Thinking</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>Communication</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>Problem-Solving</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>Attention to Detail</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
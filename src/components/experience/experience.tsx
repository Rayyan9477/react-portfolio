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
            AI & LLM Stack
          </h3>
          <div className="experience__content grid grid-cols-2 gap-y-[1rem] max-md:p-[1rem] max-xsm:grid-cols-1">
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>LangChain / LangGraph</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>RAG (FAISS + BM25)</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>LLM Fine-tuning</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>AI Agents / MCP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>Hugging Face</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>Vision Language Models</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>PyTorch</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>TensorFlow</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>Scikit-Learn</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>OpenCV</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__cloud max-md:col-span-2 max-md:mx-auto max-md:my-0  max-md:w-[85%] max-md:p-[2rem] max-sm:w-[100%] max-sm:px-[1rem] max-sm:py-[2rem]">
          <h3 className="color-primary mb-[2rem] text-center">
            Infrastructure & DevOps
          </h3>
          <div className="experience__content grid grid-cols-2 gap-y-[1rem] max-md:p-[1rem] max-xsm:grid-cols-1">
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>Docker / Compose</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>FastAPI / Celery</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>FAISS / ChromaDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>MLflow / DVC</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>Airflow</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>Prometheus / Grafana</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>PostgreSQL / Redis</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>AWS / Azure / GCP</h4>
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
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>Adaptability </h4>
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
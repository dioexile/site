import { faqs } from "./data";
import { useState, useRef } from "react";

import AccordionItem from "./AccordionItem";





const Accordion = () => {
  const handleToggle = () => {
    setClicked((prev) => !prev);
  };
  const handleToggle2 = () => {
    setClicked1((prev) => !prev);
  };
  const [clicked, setClicked] = useState(false);
  const [clicked1, setClicked1] = useState(false);

  const contentEl = useRef();
  const contentEl2 = useRef();

  return (
    <ul className="accordion">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} faq={faq} />
      ))}
      <li className={`accordion_item ${clicked ? "active" : ""}`}>
        <button className="button" onClick={handleToggle}>
          What innovations are behind  your collection?
          <span className="control">{clicked ? "—" : "+"} </span>
        </button>

      <div
        ref={contentEl}
        className="answer_wrapper"
        style={
          clicked
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="answer">
        We integrate our AI revolutionized the way we create and share information by combining text and picture creation and connecting it to the Internet .
        For more information you can check our gitbook <a href="https://draconomorphism.gitbook.io/draconomorphism/" className="linkk" target="_blank">https://draconomorphism.gitbook.io/draconomorphism/</a> 
        </div>
      </div>
    </li>
    <li className={`accordion_item ${clicked1 ? "active" : ""}`}>
        <button className="button" onClick={handleToggle2}>
          What team is behind Draconomorphism?
          <span className="control">{clicked1 ? "—" : "+"} </span>
        </button>

      <div
        ref={contentEl2}
        className="answer_wrapper"
        style={
          clicked1
            ? { height: contentEl2.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="answer">
        Our team consists of specialists from different fields such as artists, front-end, back-end, data science specialist, Natural Language Processing (NLP), Machine Learning, Ethics developers with extensive experience in AI development and marketers. All of them are working for the success of the project.
        <br /><br />For a better understanding: <br /><br />
        -Machine Learning: Machine learning is a specialized field of AI that involves developing algorithms that can learn from data. Expertise in machine learning is essential for developing effective AI systems
        <br /><br />- Natural Language Processing (NLP): NLP is a field of AI that involves teaching machines to understand and generate human language. NLP expertise is crucial for developing chatbots, virtual assistants, and other AI-powered language tools
        <br /><br />- Ethics: As AI becomes more integrated into our lives, it's essential to consider the ethical implications of AI systems. Ethics experts are needed to ensure that AI is developed and used responsibly and in a way that benefits society as a whole
        <br /><br />- Data scientist is to collect, clean, preprocess, analyze, and interpret large and complex data sets using statistical and machine learning techniques. They build models to predict future outcomes and identify opportunities, create visualizations and dashboards to communicate insights to stakeholders, and work closely with decision-makers to understand their needs and provide data-driven solutions. They also use their expertise to identify data quality issues, optimize data storage and retrieval, and develop new data-driven products and services. Effective communication and collaboration skills are essential for data scientists, as they need to explain complex technical concepts to non-technical stakeholders 
        <br /><br />- Frontend developer is to design and develop the user interface and user experience of a website or web application using HTML, CSS, and JavaScript
        <br /><br />- Backend developer is to design and develop the server-side of a website or web application, which includes managing databases, handling server requests, and integrating with other services 
        </div>
      </div>
    </li>
    </ul>
  );
};

export default Accordion;

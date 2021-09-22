import React from "react";
import { Accordion } from "react-bootstrap";
import st from "./../../styles/faq.module.css";
import "bootstrap/dist/css/bootstrap.css";
const Faq = (props) => {
  return (
    <Accordion.Item eventKey={props.eventKey} className={st.faqBox}>
      <Accordion.Header className={st.faqQuestion}>
        <p>{props.question}</p>
      </Accordion.Header>
      <Accordion.Body eventKey={props.eventKey} className={st.faqAnswer}>
        <p>{props.answer}</p>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default Faq;

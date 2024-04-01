import { useEffect } from "react";
import React, {useState} from "react";
import styled from "styled-components";


const AccordionTitle = styled.h2`
background-color: #dddddd;
color: #222222;
padding :1rem;
border-radius: 0.5rem;
margin-bottom:0;

display: flex;
justify-content: space-between;
cursor: pointer;
transition: 0.3s;
&:hover {
    background-color: #cccccc
}s
`;

const AccordionBody = styled.div`
  background: #ffffff;
  color: #222222;
  padding: 1rem;
  overflow: hidden;
`;

const Accordion = ({ title, children }) => {

    const [show, setShow]= useState(false)
      return (
    <div>
      <AccordionTitle onClick={(e) => setShow(!show)}>
        {title}
        <i class={"fa-solid fa-angle-" + (show ? "up" : "down")}></i>
      </AccordionTitle>

      <AccordionBody className={"accordion " + (show ? "show" : "hide")}>
        {children}
      </AccordionBody>
    </div>
  );
};

export default Accordion;

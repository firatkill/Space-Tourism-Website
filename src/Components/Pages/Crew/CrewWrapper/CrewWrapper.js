import React from "react";
import CrewWrapperCSS from "./CrewWrapper.module.css";
import Container from "../../../UI/Container/Container";
import CrewTab from "../CrewTab/CrewTab";
function CrewWrapper() {
  const styled = CrewWrapperCSS;
  return (
    <Container className={styled.CrewContainer}>
      <div className={styled.crewContent}>
        <header className={styled.crewHeader}>
          <h3>02</h3>
          <h2>MEET YOUR CREW</h2>
        </header>
        <CrewTab />
      </div>
    </Container>
  );
}

export default CrewWrapper;

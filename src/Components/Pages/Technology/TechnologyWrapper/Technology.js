import React from "react";
import TechnologyCSS from "./Technology.module.css";
import Container from "../../../UI/Container/Container";
import TechnologyTab from "../TechnologyTab/TechnologyTab";
function Technology() {
  const styled = TechnologyCSS;
  return (
    <Container className={styled.TechnologyContainer}>
      <div className={styled.technologyContent}>
        <header className={styled.technologyHeader}>
          <h3>03</h3>
          <h2>SPACE LAUNCH 101</h2>
        </header>
        <TechnologyTab />
      </div>
    </Container>
  );
}

export default Technology;

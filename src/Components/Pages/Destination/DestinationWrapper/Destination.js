import React from "react";
import DestinationCSS from "./Destination.module.css";
import Container from "../../../UI/Container/Container";
import DestinationTabs from "../DestinationTabs/DestinationTabs";
function Destination() {
  const styled = DestinationCSS;
  return (
    <Container className={styled.DestinationContainer}>
      <div className={styled.tabHeader}>
        <header>
          <h3>01</h3>
          <h2>PICK YOUR DESTINATION</h2>
        </header>
        <DestinationTabs />
      </div>
    </Container>
  );
}

export default Destination;

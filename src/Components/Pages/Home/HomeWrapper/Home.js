import React from "react";
import HomeCSS from "./Home.module.css";
import Button from "../../../UI/Button/Button";
import Container from "../../../UI/Container/Container";
import { Link } from "react-router-dom";
function Home() {
  const styled = HomeCSS;
  return (
    <Container className={styled.HomeContainer}>
      <div className={styled.textContent}>
        <h1>SO,YOU WANT TO TRAVEL TO</h1>
        <h1 className={styled.hugeHeader}>SPACE</h1>
        <p>
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </div>
      <Link to="/destination">
        <div className={styled.buttonContent}>
          <Button type="CircleButton">
            <h1>EXPLORE</h1>
          </Button>
        </div>
      </Link>
    </Container>
  );
}

export default Home;

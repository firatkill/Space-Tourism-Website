import React from "react";
import DestinationTabsCSS from "./DestinationTabs.module.css";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../../../Redux/ui-slice";

function DestinationTabs() {
  const styled = DestinationTabsCSS;
  const dispatch = useDispatch();

  const selectedDestination = useSelector(
    (state) => state.ui.selectedDestination
  );

  const clickHandler = (e) => {
    dispatch(uiActions.setDestination(e.currentTarget.id));
  };

  return (
    <div className={styled.DestinationTabsContainer}>
      <div className={styled.imageContainer}>
        <img
          alt={selectedDestination}
          src={`${DestinationInfos[selectedDestination]["image"]}`}
        />
      </div>
      <div className={styled.textContainer}>
        <div className={styled.buttonContainer}>
          <button
            id="moon"
            onClick={clickHandler}
            status={selectedDestination === "moon" ? "active" : "disabled"}
          >
            Moon
          </button>
          <button
            id="mars"
            onClick={clickHandler}
            status={selectedDestination === "mars" ? "active" : "disabled"}
          >
            Mars
          </button>
          <button
            id="europa"
            onClick={clickHandler}
            status={selectedDestination === "europa" ? "active" : "disabled"}
          >
            Europa
          </button>
          <button
            id="titan"
            onClick={clickHandler}
            status={selectedDestination === "titan" ? "active" : "disabled"}
          >
            Titan
          </button>
        </div>
        <div className={styled.textContainer__textContent}>
          <h1>{DestinationInfos[selectedDestination]["title"]}</h1>
          <p>{DestinationInfos[selectedDestination]["description"]}</p>
        </div>
        <div className={styled.textContainer__travelInfos}>
          <div className={styled.distanceBox}>
            <h5> AVG. DISTANCE</h5>
            <h4>{DestinationInfos[selectedDestination]["distance"]}</h4>
          </div>
          <div className={styled.timeBox}>
            <h5>EST. TRAVEL TIME</h5>
            <h4>{DestinationInfos[selectedDestination]["time"]}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationTabs;

const DestinationInfos = {
  moon: {
    image: "/assets/destination/image-moon.webp",
    title: "MOON",
    description:
      "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 KM",
    time: "3 DAYS",
  },
  mars: {
    image: "/assets/destination/image-mars.webp",
    title: "MARS",
    description:
      "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
    distance: "225 MIL. KM",
    time: "9 MONTHS",
  },
  europa: {
    image: "/assets/destination/image-europa.webp",
    title: "EUROPA",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. KM",
    time: "3 YEARS",
  },
  titan: {
    image: "/assets/destination/image-titan.webp",
    title: "TITAN",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. KM",
    time: "7 YEARS",
  },
};

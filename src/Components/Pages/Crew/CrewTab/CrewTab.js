import React from "react";
import CrewTabCSS from "./CrewTab.module.css";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../../../Redux/ui-slice";
function CrewTab() {
  const styled = CrewTabCSS;
  const selectedCrew = useSelector((state) => state.ui.selectedCrew);
  const dispatch = useDispatch();
  const clickHandler = (e) => {
    dispatch(uiActions.setCrew(e.currentTarget.id));
  };

  return (
    <div className={styled.CrewTabContainer}>
      <div className={styled.textContent}>
        <h3>{crewInfos[selectedCrew]["title"]}</h3>
        <h1>{crewInfos[selectedCrew]["name"]}</h1>
        <p>{crewInfos[selectedCrew]["description"]}</p>
        <div className={styled.textContent__dots}>
          <div
            id="commander"
            onClick={clickHandler}
            className={
              selectedCrew === "commander"
                ? `${styled.active}`
                : `${styled.disabled}`
            }
          ></div>
          <div
            id="mission_specialist"
            onClick={clickHandler}
            className={
              selectedCrew === "mission_specialist"
                ? `${styled.active}`
                : `${styled.disabled}`
            }
          ></div>
          <div
            id="pilot"
            onClick={clickHandler}
            className={
              selectedCrew === "pilot"
                ? `${styled.active}`
                : `${styled.disabled}`
            }
          ></div>
          <div
            id="flight_engineer"
            onClick={clickHandler}
            className={
              selectedCrew === "flight_engineer"
                ? `${styled.active}`
                : `${styled.disabled}`
            }
          ></div>
        </div>
      </div>
      <div className={styled.imageContent}>
        <img alt="crew" src={`/assets/crew/image-${selectedCrew}.webp`} />
      </div>
    </div>
  );
}

export default CrewTab;

const crewInfos = {
  commander: {
    title: "COMMANDER",
    name: "DOUGLAS HURLEY",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  mission_specialist: {
    title: "MISSION SPECIALIST",
    name: "MARK SHUTTLEWORTH",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  pilot: {
    title: "PILOT",
    name: "VICTOR GLOVER",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
  },
  flight_engineer: {
    title: "FLIGHT ENGINEER",
    name: "ANOUSHEH ANSARI",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
  },
};

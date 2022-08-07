import React from "react";
import TechnologyTabCSS from "./TechnologyTab.module.css";
import { uiActions } from "../../../../Redux/ui-slice";
import { useDispatch, useSelector } from "react-redux";
function TechnologyTab() {
  const styled = TechnologyTabCSS;
  const selectedTechTab = useSelector((state) => state.ui.selectedTechTab);
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    dispatch(uiActions.setSelectedTechTab(e.currentTarget.id));
  };

  return (
    <div className={styled.technologyTabContainer}>
      <div className={styled.buttons}>
        <div
          id="1"
          onClick={clickHandler}
          className={selectedTechTab === "1" ? `${styled.activeButton}` : ""}
        >
          1
        </div>
        <div
          id="2"
          onClick={clickHandler}
          className={selectedTechTab === "2" ? `${styled.activeButton}` : ""}
        >
          2
        </div>
        <div
          id="3"
          onClick={clickHandler}
          className={selectedTechTab === "3" ? `${styled.activeButton}` : ""}
        >
          3
        </div>
      </div>
      <div className={styled.textContent}>
        <h3>THE TERMINOLOGY...</h3>
        <h1>{technologyInfos[`${selectedTechTab}`]["title"]}</h1>
        <p>{technologyInfos[`${selectedTechTab}`]["description"]}</p>
      </div>
      <div className={styled.imageContent}>
        <img alt="tech101" src={`/assets/technology/${selectedTechTab}.jpg`} />
      </div>
    </div>
  );
}

export default TechnologyTab;

const technologyInfos = {
  1: {
    title: "LAUNCH VEHICLE",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  2: {
    title: "SPACEPORT",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  3: {
    title: "SPACE CAPSULE",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
};

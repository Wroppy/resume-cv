import "./CvHeading.scss";
import { name } from "../../secrets";

const CvHeading = () => {
  return (
    <div className="CvHeading">
      <div className="BlockColour"/>
      <div className="NameContainer">{name}</div>
    </div>
  );
};

export default CvHeading;

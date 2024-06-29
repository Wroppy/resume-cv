import React from "react";
import { Info } from "../../types/Info";
import "./InformationCard.scss";

type Props = {
  info: Info;
};

const InformationCard = (props: Props) => {
  return <div className="InformationCard">
    <props.info.Icon />
    <div className="Text">{props.info.text}</div>
  </div>;
};

export default InformationCard;

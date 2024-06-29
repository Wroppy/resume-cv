import React from "react";
import "./CvHeading.scss";
import { EmailOutlined, GitHub, Phone } from "@mui/icons-material";
import { Info } from "../../types/Info";
import InformationCard from "../InformationCard/InformationCard";
import { info, name } from "../../secrets";

const CvHeading = () => {
  const infos: Info[] = [
    {
      Icon: Phone,
      text: info.phone,
    },
    {
      Icon: EmailOutlined,
      text: info.email,
    },
    {
      Icon: GitHub,
      text: info.github,
    },
  ];

  return (
    <div className="CvHeading">
      <div className="NameContainer">{name}</div>
      <div className="InformationCards">
        {infos.map((info, index) => (
          <InformationCard key={index} info={info} />
        ))}
      </div>
    </div>
  );
};

export default CvHeading;

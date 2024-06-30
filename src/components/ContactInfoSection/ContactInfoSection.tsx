import React from "react";
import "./ContactInfoSection.scss";
import InformationCard from "../InformationCard/InformationCard";
import { Info } from "../../types/Info";
import { EmailOutlined, GitHub, Phone } from "@mui/icons-material";
import { info } from "../../secrets";

const ContactInfoSection = () => {
  // Sets the information to be displayed in the InformationCard components
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
    <div className="InformationCards">
      {infos.map((info, index) => (
        <InformationCard key={index} info={info} />
      ))}
    </div>
  );
};

export default ContactInfoSection;

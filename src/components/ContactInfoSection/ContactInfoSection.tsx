import "./ContactInfoSection.scss";
import InformationCard from "../InformationCard/InformationCard";
import { Info } from "../../types/Info";
import {
  EmailOutlined,
  GitHub,
  LocationOnOutlined,
  PhoneOutlined,
} from "@mui/icons-material";
import { info } from "../../secrets";
import DescriptiveSection from "../DescriptiveSection/DescriptiveSection";

const ContactInfoSection = () => {
  // Sets the information to be displayed in the InformationCard components
  const infos: Info[] = [
    {
      Icon: PhoneOutlined,
      text: info.phone,
    },
    {
      Icon: EmailOutlined,
      text: <a href={`mailto:${info.email}`}>{info.email}</a>,
    },
    {
      Icon: GitHub,
      text: <a href={info.github}>{info.github}</a>,
    },
    {
      Icon: LocationOnOutlined,
      text: info.address,
    },
  ];
  return (
    <DescriptiveSection
      heading="Contact"
      contents={infos.map((info, index) => (
        <InformationCard key={index} info={info} />
      ))}
    />
  );
};

export default ContactInfoSection;

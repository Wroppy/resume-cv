import { Info } from "../../types/Info";
import "./InformationCard.scss";

type Props = {
  info: Info;
};

/**
 * A component that displays an icon and some text in a card format
 *
 * @param props a prop object with a single property info of type Info
 * @returns a div element with the icon and text from the Info object
 */
const InformationCard = (props: Props) => {
  return (
    <div className="InformationCard">
      <props.info.Icon />
      <div className="Text">{props.info.text}</div>
    </div>
  );
};

export default InformationCard;

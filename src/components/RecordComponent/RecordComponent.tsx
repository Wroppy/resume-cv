import "./RecordComponent.scss";
import { Record } from "../../types/Record";

type Props = { children: React.ReactNode; record: Record };

const RecordComponent = (props: Props) => {
  return (
    <div className="Record">
      <div className="RecordHeading" style={{fontWeight: "600"}}>{props.record.name}</div>
      <div className="RecordTimestamp">{props.record.timestamp}</div>
      <div className="RecordContent">{props.children}</div>
    </div>
  );
};

export default RecordComponent;

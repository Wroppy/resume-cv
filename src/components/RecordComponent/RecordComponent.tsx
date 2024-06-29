import "./RecordComponent.scss";
import { Record } from "../../types/Record";

type Props = { children?: React.ReactNode; record: Record };

const RecordComponent = ({ children, record }: Props) => {
  return (
    <div className="Record">
      <div className="RecordLeftSide">
        <div className="RecordHeading">{record.name}</div>
        {children && <div className="RecordContent">{children}</div>}
      </div>
      <div className="RecordTimestamp">{record.timestamp}</div>
    </div>
  );
};

export default RecordComponent;

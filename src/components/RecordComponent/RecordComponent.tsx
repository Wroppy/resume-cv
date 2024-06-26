import "./RecordComponent.scss";
import { Record } from "../../types/Record";

type Props = { children?: React.ReactNode; record: Record; bold?: boolean };

const RecordComponent = ({ children, record, bold = true }: Props) => {
  const style = {
    fontWeight: bold ? "500" : "normal",
    fontSize: bold ? "15px" : "12px",
  };

  return (
    <div className="Record">
      <div className="RecordLeftSide">
        <div className="RecordHeading" style={style}>
          {record.name}
        </div>
        {children && <div className="RecordContent">{children}</div>}
      </div>
      {record.timestamp != null && (
        <div className="RecordTimestamp" style={style}>
          {record.timestamp}
        </div>
      )}
    </div>
  );
};

export default RecordComponent;

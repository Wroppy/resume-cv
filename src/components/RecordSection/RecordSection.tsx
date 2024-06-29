import React from "react";
import "./RecordSection.scss";

type Props = { heading: string; children: React.ReactNode };

const RecordSection = ({ heading, children }: Props) => {
  return (
    <div className="RecordSection">
      <div className="RecordSectionHeading">{heading}</div>
      <div className="RecordSectionContent">{children}</div>
    </div>
  );
};

export default RecordSection;

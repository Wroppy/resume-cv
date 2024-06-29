import React from "react";
import RecordSection from "../RecordSection/RecordSection";
import "./DescriptiveSection.scss";

type Props = { heading: string; words: string[] };

const DescriptiveSection = ({ heading, words }: Props) => {
  return (
    <RecordSection heading={heading}>
      <div className="DescriptiveSectionContent">
        {words.map((word, index) => (
          <div className="Descriptor" key={index}>
            {word}
          </div>
        ))}
      </div>
    </RecordSection>
  );
};

export default DescriptiveSection;

import React from "react";
import DescriptiveSection from "../DescriptiveSection/DescriptiveSection";

const HobbiesAndInterests = () => {
  const hobbiesAndInterests = [
    "Badminton",
    "Chess",
    "Cooking",
    "Technology",
    "Programming",
    "Gaming",
  ];

  return (
    <DescriptiveSection
      heading="Hobbies & Interests"
      words={hobbiesAndInterests}
    />
  );
};

export default HobbiesAndInterests;

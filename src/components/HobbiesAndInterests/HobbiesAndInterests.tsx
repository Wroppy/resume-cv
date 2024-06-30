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
      contents={hobbiesAndInterests}
    />
  );
};

export default HobbiesAndInterests;

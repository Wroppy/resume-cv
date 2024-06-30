import DescriptiveSection from "../DescriptiveSection/DescriptiveSection";

const HobbiesAndInterests = () => {
  const hobbiesAndInterests = [
    "Badminton",
    "Chess",
    "Cooking",
    "Technology",
    "Programming",
    "Gaming",
    "Movies & TV Shows",
    "Baking",
    "Traveling",
  ];

  return (
    <DescriptiveSection
      heading="Hobbies & Interests"
      contents={hobbiesAndInterests}
    />
  );
};

export default HobbiesAndInterests;

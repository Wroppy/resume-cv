import "./SubColumn.scss";
import ContactInfoSection from "../ContactInfoSection/ContactInfoSection";
import CustomDivider from "../CustomDivider/CustomDivider";
import SkillsSection from "../SkillsSection/SkillsSection";
import HobbiesAndInterests from "../HobbiesAndInterests/HobbiesAndInterests";
import LanguagesSection from "../LanguagesSection/LanguagesSection";

const SubColumn = () => {
  return (
    <div className="SubColumn">
      <ContactInfoSection />
      <CustomDivider />
      <SkillsSection />
      <CustomDivider />
      <HobbiesAndInterests />
      <CustomDivider />
      <LanguagesSection />
    </div>
  );
};

export default SubColumn;

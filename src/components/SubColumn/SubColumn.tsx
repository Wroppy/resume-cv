import "./SubColumn.scss";
import ContactInfoSection from "../ContactInfoSection/ContactInfoSection";
import CustomDivider from "../CustomDivider/CustomDivider";
import SkillsSection from "../SkillsSection/SkillsSection";
import HobbiesAndInterests from "../HobbiesAndInterests/HobbiesAndInterests";
import LanguagesSection from "../LanguagesSection/LanguagesSection";
import RefereesSection from "../RefereesSection/RefereesSection";

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
      <CustomDivider />
      <RefereesSection />
      <CustomDivider />
    </div>
  );
};

export default SubColumn;

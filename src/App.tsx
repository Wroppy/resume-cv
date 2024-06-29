import "./App.css";
import CustomDivider from "./components/CustomDivider/CustomDivider";
import CvHeading from "./components/CvHeading/CvHeading";
import EducationSection from "./components/EducationSection/EducationSection";

function App() {
  return (
    <div className="CV">
      <CvHeading />
      <CustomDivider />
      <EducationSection />
    </div>
  );
}

export default App;

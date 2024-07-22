import "./App.css";
import MainColumn from "./components/MainColumn/MainColumn";
import ProjectsSectionBottom from "./components/ProjectsSection/ProjectsSectionBottom";
import SubColumn from "./components/SubColumn/SubColumn";

function App() {
  return (
    <div className="CV">
      <div className="CV_section_1">
        <MainColumn />
        <SubColumn />
      </div>
      <ProjectsSectionBottom />
    </div>
  );
}

export default App;

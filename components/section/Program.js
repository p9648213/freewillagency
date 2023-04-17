import ProgHighlight from "../common/ProgHighlight";
import ProgDetails from "../common/ProgDetails";
import ProjectImgs from "../common/ProjectImgs";
import ProjectHighlight from "../common/ProjectHighlight";

function Program({ handleScrolling }) {
  return (
    <div id="program">
      <ProgHighlight handleScrolling={handleScrolling} />
      <ProjectHighlight handleScrolling={handleScrolling} />
      <ProjectImgs />
      <ProgDetails handleScrolling={handleScrolling} />
    </div>
  );
}

export default Program;

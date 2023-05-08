import ProgHighlight from "../common/ProgHighlight";
import ProgDetails from "../common/ProgDetails";
import ProjectImgs from "../common/ProjectImgs";
import ProjectHighlight from "../common/ProjectHighlight";
import ProgHighlightMB from "../common/ProgHighlightMB";

function Program({ handleScrolling }) {
  return (
    <div id="program">
      <ProgHighlight handleScrolling={handleScrolling} />
      <ProgHighlightMB handleScrolling={handleScrolling} />
      {/* <ProjectHighlight handleScrolling={handleScrolling} /> */}
      {/* <ProjectImgs /> */}
      {/* <ProgDetails handleScrolling={handleScrolling} /> */}
    </div>
  );
}

export default Program;

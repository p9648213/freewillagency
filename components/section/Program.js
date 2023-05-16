import ProgHighlight from "../common/ProgHighlight";
import ProgDetails from "../common/ProgDetails";
import ProgDetailsMB from "../common/ProgDetailsMB";
import ProjectImgs from "../common/ProjectImgs";
import ProjectHighlight from "../common/ProjectHighlight";
import ProgHighlightMB from "../common/ProgHighlightMB";
import ProjectHighlightMB from "../common/ProjectHighlightMB";
import ProjectImgsMB from "../common/ProjectImgsMB";

function Program({ handleScrolling }) {
  return (
    <div id="program">
      <ProgHighlight handleScrolling={handleScrolling} />
      <ProgHighlightMB handleScrolling={handleScrolling} />
      {/* <ProjectHighlight handleScrolling={handleScrolling} />
      <ProjectHighlightMB handleScrolling={handleScrolling} />
      <ProjectImgs />
      <ProjectImgsMB /> */}
      <ProgDetails handleScrolling={handleScrolling} />
      <ProgDetailsMB handleScrolling={handleScrolling} />
    </div>
  );
}

export default Program;

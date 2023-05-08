import { useState } from "react";

import Header from "./common/Header";
import Banner from "./common/Banner";
import AboutUs from "./section/AboutUs";
import Service from "./section/Service";
import PrBanner from "./common/PrBanner";
import Promotion from "./section/Promotion";
import Program from "./section/Program";
import Advise from "./section/Advise";
import Partner from "./section/Partner";
import Member from "./section/Member";
import Consultation from "./section/Consultation";
import Footer from "./section/Footer";
import ReportModal from "./common/ReportModal";

function Container() {
  const [reportMessage, setReportMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("data-target");
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-sans sm:min-w-fit">
      <ReportModal
        message={reportMessage}
        isError={isError}
        show={showModal}
        handleShow={setShowModal}
      />
      <Header handleScrolling={handleClick} />
      <Banner handleScrolling={handleClick} />
      <AboutUs />
      <Service />
      <PrBanner />
      <Promotion />
      <Program handleScrolling={handleClick} />
      {/* <Advise />
      <Partner />
      <Member />
      <Consultation
        handleMessage={setReportMessage}
        handleError={setIsError}
        handleShow={setShowModal}
      />
      <Footer /> */}
    </div>
  );
}

export default Container;

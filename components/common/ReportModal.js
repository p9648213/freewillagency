import { useEffect } from "react";

function ReportModal({ message, isError, show, handleShow }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        handleShow(false);
      }, 10000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [show, handleShow]);

  const modalClasses = `
    fixed top-[30px] right-[30px] z-[9999] transition-opacity duration-1000 ${
      show ? "opacity-100" : "opacity-0 pointer-events-none"
    }
  `;

  const innerModalClasses = `
    flex items-center justify-center max-w-md px-7 py-4 rounded-lg text-white text-lg font-bold ${
      isError ? "bg-red-800" : "bg-green-700"
    }
  `;

  return (
    <div className={modalClasses}>
      <div className={innerModalClasses}>{message}</div>
    </div>
  );
}

export default ReportModal;

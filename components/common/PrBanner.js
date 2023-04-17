import { useState } from "react";
import { useTranslation } from "next-i18next";

function PrBanner() {
  const [email, setEmail] = useState("");

  const { t } = useTranslation();

  const handleChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail("");
  };

  return (
    <div className="flex w-full">
      <div className="bg-[#FEBE27] skew-box relative z-10 pl-3.5 flex-1">
        <div
          className="pr-16 flex justify-end text-[#110A5C] text-[22px] text-center 
      font-[700] pt-2 pb-2"
        >
          <div>
            {t("common:prbanner:title:0")}{" "}
            <span className="text-[#EA0127]">
              {t("common:prbanner:title:1")}
            </span>
            <br />
            {t("common:prbanner:title:2")}
          </div>
        </div>
      </div>

      <div className="flex-1 bg-[#004AAD] flex items-stretch">
        <form
          className="ml-14 flex justify-center items-center gap-4"
          onSubmit={handleSubmit}
        >
          <div>
            <input
              required
              type="email"
              placeholder="Enter the email"
              value={email}
              name="customer-email"
              onChange={handleChange}
              className="px-3 w-[203px] rounded-full h-10 pb-1 pr-input"
            />
          </div>
          <button
            className="text-[#110A5C] font-bold bg-[#FFBE27] px-7 rounded-full h-10 flex items-center"
            type="submit"
          >
            {t("common:prbanner:button")}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PrBanner;

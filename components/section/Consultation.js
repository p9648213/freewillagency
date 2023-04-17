import { useState } from "react";
import { useTranslation } from "next-i18next";
import { GoSync } from "react-icons/go";
import axios from "axios";

function Consultation({ handleMessage, handleError, handleShow }) {
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "selectedValue":
        setSelectedValue(value);
        break;
      default:
        break;
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setSelectedValue("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    const data = {
      name,
      email,
      phone,
      service: selectedValue,
      date: (() => {
        const now = new Date();
        const day = ("0" + now.getDate()).slice(-2);
        const month = ("0" + (now.getMonth() + 1)).slice(-2);
        const year = now.getFullYear();
        const hours = ("0" + now.getHours()).slice(-2);
        const minutes = ("0" + now.getMinutes()).slice(-2);
        return `${day}-${month}-${year} ${hours}:${minutes}`;
      })(),
    };

    await axios
      .post("/api/sheet", data)
      .then((res) => {
        handleMessage(
          language === "en"
            ? "Your infomation have been saved"
            : "Thông tin của bạn đã được lưu lại"
        );
        handleError(false);
      })
      .catch((err) => {
        handleMessage(
          language === "en"
            ? "Something went wrong. Please contact us by phone or email"
            : "Lỗi hệ thống. Vui lòng liên hệ với chúng tôi qua email hoặc SĐT"
        );
        handleError(true);
      })
      .finally(() => {
        setIsLoading(false);
        handleShow(true);
      });

    resetForm();
  };

  return (
    <div
      id="consultation"
      className="h-[837px] bg-no-repeat bg-cover"
      style={{
        backgroundImage: 'url("/assets/consultion-img1.webp")',
        backgroundOrigin: "content-box",
        backgroundPositionX: "0%",
        backgroundPositionY: "100%",
      }}
    >
      <div
        className="h-full w-full"
        style={{
          backgroundColor: "rgba(14, 114, 150, 0.4)",
        }}
      >
        <div className="flex flex-col justify-center items-center h-full gap-8">
          <div
            className="w-[147px] h-[147px] bg-white bg-no-repeat bg-cover rounded-full"
            style={{
              backgroundImage: 'url("/assets/logo.webp")',
            }}
          ></div>
          <div className="text-[27px] text-[white] font-bold leading-[1.2] text-center whitespace-pre">
            {t("common:consultation:title")}
          </div>
          <div
            className="w-[485px] h-[485px] rounded-full flex justify-center items-center"
            style={{
              background:
                "linear-gradient(180deg, rgba(12, 108, 144, 1), rgba(1, 60, 82, 1))",
            }}
          >
            <div
              className={`flex flex-col ${
                language === "en" ? "gap-3" : "gap-7"
              }`}
            >
              <div className="text-[23px] text-white font-bold leading-[1.4] px-2 whitespace-pre text-center">
                {t("common:consultation:form-title")}
              </div>
              <form
                className="flex w-[290px] flex-col gap-4"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col gap-2 consultation-input-container">
                  <div>
                    <input
                      required
                      className="w-full py-2 px-4 rounded-full"
                      type="text"
                      placeholder={t("common:consultation:placeholder:0")}
                      name="name"
                      value={name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      required
                      className="w-full py-2 px-4 rounded-full"
                      type="email"
                      placeholder={t("common:consultation:placeholder:1")}
                      name="email"
                      value={email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      required
                      className="w-full py-2 px-4 rounded-full"
                      type="tel"
                      pattern="^\+?\d+\d+$"
                      placeholder={t("common:consultation:placeholder:2")}
                      title="Ex. +841234567 or 091234567"
                      name="phone"
                      value={phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <select
                      required
                      className={
                        selectedValue !== ""
                          ? "w-full py-2 px-4 rounded-full selected cursor-pointer"
                          : "w-full py-2 px-4 rounded-full cursor-pointer"
                      }
                      name="selectedValue"
                      value={selectedValue}
                      onChange={handleChange}
                      data-selected=""
                    >
                      <option value="" disabled hidden>
                        {t("common:consultation:placeholder:3")}
                      </option>
                      <option value="Đầu tư EB5">
                        {t("common:consultation:options:0")}
                      </option>
                      <option value="Đầu tư EB3">
                        {t("common:consultation:options:1")}
                      </option>
                      <option value="Đầu tư L1">
                        {t("common:consultation:options:2")}
                      </option>
                      <option value="Visa du lịch Mỹ">
                        {t("common:consultation:options:3")}
                      </option>
                      <option value="Visa du lịch Úc">
                        {t("common:consultation:options:4")}
                      </option>
                      <option value="Vé máy bay">
                        {t("common:consultation:options:5")}
                      </option>
                    </select>
                  </div>
                </div>

                <button
                  className="flex items-center justify-center py-2 px-4 text-[18px] text-white font-bold rounded-full bg-[#FF5C2C] text-center"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <GoSync className="animate-spin text-[27px]" />
                  ) : (
                    t("common:consultation:button")
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consultation;

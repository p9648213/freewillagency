function Footer() {
  return (
    <div
      id="footer"
      className="h-[363px] bg-no-repeat mt-2"
      style={{
        backgroundImage: 'url("/assets/footer-img1.webp")',
        backgroundSize: "100%",
        backgroundPosition: "50% 100%",
      }}
    >
      <div
        className="h-full w-full"
        style={{
          background:
            "linear-gradient(180deg, rgba(50, 174, 171, 1), rgba(13, 108, 145, 0.8))",
        }}
      >
        <div className="flex flex-col justify-center items-center h-full gap-8">
          <div className="text-[19px] text-white font-bold leading-[1.4]">
            FREEWILL AGENCY
          </div>
          <div className="flex gap-14 justify-start relative">
            <div
              className="w-[190px] h-[190px] bg-white bg-no-repeat bg-cover rounded-full absolute top-[-50px] left-[-230px]"
              style={{
                backgroundImage: 'url("/assets/logo.webp")',
              }}
            ></div>
            <div className="flex flex-col justify-center items-center gap-10">
              <div className="flex flex-col justify-center items-center gap-6">
                <div className="flex flex-col justify-center items-center gap-1 text-[15px] leading-[1.4] text-white">
                  <div className="flex gap-2">
                    <div className="w-[25px] h-[26px] translate-y-[-3px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xlink="http://www.w3.org/1999/xlink"
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="rgba(255,255,255,1)"
                      >
                        <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"></path>
                      </svg>
                    </div>
                    <div>
                      Pax Sky Tower, 159C De Tham, Co Giang Ward, District 1,
                      HCMC
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="w-[22.5px] h-[22.5px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xlink="http://www.w3.org/1999/xlink"
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="rgba(255,255,255,1)"
                      >
                        <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"></path>
                      </svg>
                    </div>
                    <div>Hotline: +84 797 033 888 / +84 798 046 888</div>
                  </div>

                  <div className="flex gap-2">
                    <div className="w-[22.5px] h-[22.5px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xlink="http://www.w3.org/1999/xlink"
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="rgba(255,255,255,1)"
                      >
                        <path d="M20,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6A2,2 0 0,0 20,4M20,18H4V8L12,13L20,8V18M20,6L12,11L4,6V6H20V6Z"></path>
                      </svg>
                    </div>
                    <div>info@freewillagency.com</div>
                  </div>

                  <div className="flex gap-2 ">
                    <div className="w-[28.7px] h-[22.5px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xlink="http://www.w3.org/1999/xlink"
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="rgba(255,255,255,1)"
                      >
                        <path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path>
                      </svg>
                    </div>
                    <div>Website: http://freewillagency.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 mt-12">
            <div
              className="w-[960px] h-[1px] border-t-[1px] "
              style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
            ></div>
            <div
              className="text-[13px]"
              style={{ color: "rgba(255, 255, 255, 0.9)" }}
            >
              ©2023 Allrights reserved freewillagency.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import JsonEN from "../public/locales/en/common.json" assert { type: "json" };
import JsonVI from "../public/locales/vi/common.json" assert { type: "json" };

const environtment = process.env.NEXT_PUBLIC_MODE;

let url;

if (environtment === "DEVELOPMENT") {
  url = "http://localhost:3000";
} else if (environtment === "TESTING") {
  url = "https://free-will-agency.vercel.app";
} else {
  url = "https://www.freewillagency.com";
}

export const rootPage = url;

//Config menu in English
export const menuItemsConfigEN = [
  {
    navTitle: JsonEN.header.titles[0],
    submenu: [
      {
        title: "Picth Deck FreeWill.PDF",
        file: "pdf1.pdf",
      },
      {
        title: "Picth Deck BioTech.PDF",
        file: "pdf2.pdf",
      },
      {
        title: "Picth Deck Hayyat.PDF",
        file: "pdf3.pdf",
      },
    ],
  },
  {
    navTitle: JsonEN.header.titles[1],
    submenu: [
      {
        title: "Định cư Mỹ",
        submenu: [
          {
            title: "Chương trình EB3",
          },
          {
            title: "Chương trình EB5",
          },
          {
            title: "Chương trình L1",
          },
          {
            title: "Visa du lịch Mỹ",
          },
        ],
      },
      {
        title: "Định cư Úc",
        submenu: [
          {
            title: "Visa lao động 482, 462",
          },
          {
            title: "Visa định cư dạng doanh nhân 188",
          },
          {
            title: "Visa du lịch",
          },
        ],
      },
      {
        title: "Investment",
      },
    ],
  },
  {
    navTitle: JsonEN.header.titles[2],
    dataTarget: "footer",
  },
];

//Config menu in VietNamese
export const menuItemsConfigVN = [
  {
    navTitle: JsonVI.header.titles[0],
    submenu: [
      {
        title: "Picth Deck FreeWill.PDF",
        file: "pdf1.pdf",
      },
      {
        title: "Picth Deck BioTech.PDF",
        file: "pdf2.pdf",
      },
      {
        title: "Picth Deck Hayyat.PDF",
        file: "pdf3.pdf",
      },
    ],
  },
  {
    navTitle: JsonVI.header.titles[1],
    submenu: [
      {
        title: "Định cư Mỹ",
        submenu: [
          {
            title: "Chương trình EB3",
          },
          {
            title: "Chương trình EB5",
          },
          {
            title: "Chương trình L1",
          },
          {
            title: "Visa du lịch Mỹ",
          },
        ],
      },
      {
        title: "Định cư Úc",
        submenu: [
          {
            title: "Visa lao động 482, 462",
          },
          {
            title: "Visa định cư dạng doanh nhân 188",
          },
          {
            title: "Visa du lịch",
          },
        ],
      },
      {
        title: "Investment",
      },
    ],
  },
  {
    navTitle: JsonVI.header.titles[2],
    dataTarget: "footer",
  },
];

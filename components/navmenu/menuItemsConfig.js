import JsonEN from "../../public/locales/en/common.json" assert { type: "json" };
import JsonVI from "../../public/locales/vi/common.json" assert { type: "json" };

export const menuItemsConfigEN = [
  {
    navTitle: JsonEN.header.titles[0],
    submenu: [
      {
        title: "Picth Deck FreeWill.PDF",
      },
      {
        title: "Picth Deck BioTech.PDF",
      },
      {
        title: "Picth Deck Hayyat.PDF",
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

export const menuItemsConfigVN = [
  {
    navTitle: JsonVI.header.titles[0],
    submenu: [
      {
        title: "Picth Deck FreeWill.PDF",
      },
      {
        title: "Picth Deck BioTech.PDF",
      },
      {
        title: "Picth Deck Hayyat.PDF",
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

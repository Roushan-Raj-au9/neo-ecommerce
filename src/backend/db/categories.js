import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "electronics",
    image: "https://i.postimg.cc/dQB53ZLd/newton-banner-01.png",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic",
  },
  {
    _id: uuid(),
    categoryName: "cloth",
    image: "https://i.postimg.cc/fbRXRCgS/5d1a03f3095c0.png",
    description:
      "supernatural and paranormal elements in morbid stories that are sometimes a little too realistic Non-fiction is writing that gives information or describes real events, rather than telling a story.",
  },
  {
    _id: uuid(),
    categoryName: "grocery",
    image: "https://i.postimg.cc/gjzbCw0p/fresh-fruits-vegetables-wood-table-supermarket-grocery-store-blurred-defocused-background-142430536.png",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  },
];

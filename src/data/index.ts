import { v4 as uuid } from "uuid";

export interface Item {
  id?: string;
  title: string;
  price: string;
  imageURL: string;
}

export const data: Item[] = [
  {
    id: uuid(),
    title: "Ice Cafe",
    price: "$7.00",
    imageURL: "/assets/ice-coffee.png",
  },
  {
    id: uuid(),
    title: "Espresso",
    price: "$30.00",
    imageURL: "/assets/ice-coffee-2.png",
  },
  {
    id: uuid(),
    title: "Cappuccino",
    price: "$20.00",
    imageURL: "/assets/ice-coffee-3.png",
  },
  {
    id: uuid(),
    title: "American",
    price: "$5.00",
    imageURL: "/assets/ice-coffee-4.png",
  },
  {
    id: uuid(),
    title: "Cafe Latte",
    price: "$12.00",
    imageURL: "/assets/ice-coffee-5.jpg",
  },
  {
    id: uuid(),
    title: "Mocha",
    price: "$15.00",
    imageURL: "/assets/ice-coffee-6.png",
  },
];

import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Apple Laptop",
    description: 'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor', 
    price: 5000,
    quantity: 5,
    for: ['adult'],
    review: 2,
    ratings: 4.8,
    image: "https://i.postimg.cc/cCCXJVXj/applePC2.png",
    comments: [
      {
        name: 'Jack Jhon',
        rating: 3,
        text: 'Nice Laptop',
        date: '2023-02-10'
      },
      {
        name: 'Tom White',
        rating: 5,
        text: 'Good Laptop',
        date: '2023-02-15'
      },
    ],
    categoryName: "electronics",
  },
  {
    _id: uuid(),
    title: "Apple Mobile",
    description: 'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor', 
    price: 10000,
    quantity: 2,
    for: ['kid'],
    review: 2,
    ratings: 1.5,
    image: "https://i.postimg.cc/QMTd51fp/slider1.png",
    comments: [
      {
        name: 'Jack Jhon',
        rating: 3,
        text: 'Nice Player',
        date: '2023-02-10'
      },
      {
        name: 'Tom White',
        rating: 5,
        text: 'Good Player',
        date: '2023-02-15'
      },
    ],
    categoryName: "electronics",
  },
  {
    _id: uuid(),
    title: "Men Premium Jacket",
    description: 'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor', 
    price: 6000,
    quantity: 8,
    for: ['adult'],
    review: 2,
    ratings: 3.5,
    image: "https://i.postimg.cc/KvKM8kny/istockphoto-658909998-170667a-1.png",
    comments: [
      {
        name: 'Jack Jhon',
        rating: 3,
        text: 'Nice Jacket',
        date: '2023-02-10'
      },
      {
        name: 'Tom White',
        rating: 5,
        text: 'Good jacket',
        date: '2023-02-15'
      },
    ],
    categoryName: "cloth",
  },
  {
    _id: uuid(),
    title: "Kid Premium Jacket",
    description: 'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor', 
    price: 3000,
    quantity: 3,
    for: ['kid'],
    review: 2,
    ratings: 3,
    image: "https://i.postimg.cc/hPpQs8cx/michael-podger-z-d21-Hg7-CF0-unsplash.png",
    comments: [
      {
        name: 'Jack Jhon',
        rating: 3,
        text: 'Nice Jacket',
        date: '2023-02-10'
      },
      {
        name: 'Tom White',
        rating: 5,
        text: 'Good jacket',
        date: '2023-02-15'
      },
    ],
    categoryName: "cloth",
  },
  {
    _id: uuid(),
    title: "Orange",
    description: 'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor', 
    price: 50,
    quantity: 10,
    for: ['adult', 'kid'],
    review: 2,
    ratings: 5,
    image: "https://i.postimg.cc/PqCPyNMM/ag-slider-fruit-trees.png",
    comments: [
      {
        name: 'Jack Jhon',
        rating: 3,
        text: 'Nice Orange',
        date: '2023-02-10'
      },
      {
        name: 'Tom White',
        rating: 5,
        text: 'Good Orange',
        date: '2023-02-10'
      },
    ],
    categoryName: "grocery",
  },
  {
    _id: uuid(),
    title: "Pineapple",
    description: 'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor', 
    price: 500,
    quantity: 0,
    for: ['adult'],
    review: 2,
    ratings: 3.8,
    image: "https://i.postimg.cc/8CNZrQBD/food-composition-whole-pieces-pineapple-blue-ba-338799-6699-1.png",
    comments: [
      {
        name: 'Jack Jhon',
        rating: 3,
        text: 'Nice Pineapple',
        date: '2023-02-10'
      },
      {
        name: 'Tom White',
        rating: 5,
        text: 'Good Pineapple',
        date: '2023-02-10'
      },
    ],
    categoryName: "grocery",
  },
];

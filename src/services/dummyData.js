import product1 from "../images/product1.png";
import product2 from "../images/product2.png";
import product3 from "../images/product3.png";
import product4 from "../images/product4.png";
import logo from "../images/addidas.svg";

const data = [
  {
    id: 1,
    img: product1,
    title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    price: "9,999",
    oldPrice: "9,999",
    sale: "50%",
    logo: logo,
    shipping: false,
    from: "Genena Mall",
  },
  {
    id: 2,
    img: product2,
    title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    price: "9,999",
    logo: logo,
    shipping: true,
    from: "UK",
    to: "Egypt",
    in: 10,
  },
  {
    id: 3,
    img: product3,
    title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    price: "9,999",
    oldPrice: "9,999",
    sale: "30%",
    logo: logo,
    shipping: false,
    from: "Genena Mall",
  },
  {
    id: 4,
    img: product4,
    title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    price: "9,999",
    oldPrice: "9,999",
    sale: "70%",
    logo: logo,
    shipping: true,
    from: "Egypt",
    to: "Egypt",
    in: 2,
  },
];

export default data;

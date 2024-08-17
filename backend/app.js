const express = require("express");
const app = express();

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "Laptop",
      category: "Electronics",
      price: 999.99,
      inStock: true,
      ratings: {
        average: 4.5,
        reviews: 150,
      },
      specifications: {
        brand: "TechBrand",
        processor: "Intel i7",
        ram: "16GB",
        storage: "512GB SSD",
      },
    },
    {
      id: 2,
      name: "Wireless Mouse",
      category: "Accessories",
      price: 29.99,
      inStock: true,
      ratings: {
        average: 4.2,
        reviews: 85,
      },
      specifications: {
        brand: "MouseCo",
        wireless: true,
        color: "Black",
        batteryLife: "1 year",
      },
    },
    {
      id: 3,
      name: "Bluetooth Headphones",
      category: "Audio",
      price: 89.99,
      inStock: false,
      ratings: {
        average: 4.7,
        reviews: 200,
      },
      specifications: {
        brand: "AudioMax",
        bluetoothVersion: "5.0",
        noiseCancellation: true,
        batteryLife: "20 hours",
      },
    },
    {
      id: 4,
      name: "Smartphone",
      category: "Electronics",
      price: 699.99,
      inStock: true,
      ratings: {
        average: 4.6,
        reviews: 300,
      },
      specifications: {
        brand: "PhoneMaker",
        screenSize: "6.5 inches",
        processor: "Snapdragon 888",
        ram: "8GB",
        storage: "128GB",
      },
    },
  ];
  if(req.query.name){
    const filteredArray = products.filter((ele)=>{
      return ele.name === req.query.name
    })
    res.send(filteredArray)
    return
  }
  setTimeout(() => {
    res.send(products);
  }, 3000);
});

app.listen(3000, () => {
  console.log("sever online");
});

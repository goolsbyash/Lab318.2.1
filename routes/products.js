const express = require("express");
const router = express.Router();

// Routes

router.get("/", (req, res) => {
  res.send("Getting general products list.");
});

router.get("/cats", (req, res) => {
  const options = {
animal: 'Cat',
image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1686&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
message: 'Placeholder for list of cat products.'
  };
  res.render("productList", options);
});

router.get("/dogs", (req, res) => {
  const options = {
    animal: 'Dog',
    image: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    message: 'Placeholder for list of dog products.'
  }; 
  res.render("productList", options);
});

module.exports = router;

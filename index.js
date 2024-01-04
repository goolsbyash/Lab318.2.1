const express = require("express");
const app = express();
const PORT = 3000;
const morgan = require("morgan");

const productRoutes = require("./routes/products");
app.use("/products", productRoutes);

// Placeholder to use Morgan middleware


// Root/main route
app.get("/", (req, res) => {
    res.send("Welcome to The Shop!")
})

app.listen(PORT, (req, res) => {
    console.log(`Server is running fine on port: ${PORT}!`);
});
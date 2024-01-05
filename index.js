//* Part One: Routes, Templates and Views

const fs = require("fs");
const express = require("express");
const app = express();
const PORT = 3000;
const morgan = require("morgan");

const productRoutes = require("./routes/products");

app.engine("shop", (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);

    const renderedData = content
      .toString()
      .replaceAll("#animal#", `${options.animal}`)
      .replace("#imgSource#", `${options.image}`)
      .replace("#content#", `${options.message}`);

      return callback(null, renderedData);
  });
});

app.set("views", './views/');
app.set("view engine", "shop");

app.use("/products", productRoutes);
//* Part Two: Middleware

// Root/main route
app.get("/", (req, res) => {
    res.send("Welcome to The Pet Supplies Shop!");
  
});


app.listen(PORT, (req, res) => {
  console.log(`Server is running just fine on port: ${PORT}!`);
});

//* Part Three: Exploring Response Options

//* Part Four: Open Exploration

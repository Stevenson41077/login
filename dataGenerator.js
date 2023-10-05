// src/dataGenerator.js
const faker = require("faker");

// Function to generate random data
function generateRandomData() {
  const data = [];

  for (let i = 0; i < 20; i++) {
    const name = faker.commerce.productName();
    const category = faker.commerce.department();

    data.push({
      name,
      category,
    });
  }

  return data;
}

module.exports = generateRandomData;

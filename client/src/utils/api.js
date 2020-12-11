export async function getFruits() {
  const response = await fetch(
    `http://localhost:3001/api/groceries?type=fruit`
  );
  const groceries = await response.json();
  return groceries;
}

export async function getDrinks() {
  const response = await fetch(
    `http://localhost:3001/api/groceries?type=drink`
  );
  const groceries = await response.json();
  return groceries;
}

export async function getVegetables() {
  const response = await fetch(
    `http://localhost:3001/api/groceries?type=vegetable`
  );
  const groceries = await response.json();
  return groceries;
}

export async function getCereals() {
  const response = await fetch(
    `http://localhost:3001/api/groceries?type=cereal`
  );
  const groceries = await response.json();
  return groceries;
}

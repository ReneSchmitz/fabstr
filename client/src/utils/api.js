export async function getFruits() {
  const response = await fetch(`/api/groceries?type=fruit`);
  const fruits = await response.json();
  return fruits;
}

export async function getDrinks() {
  const response = await fetch(`/api/groceries?type=drink`);
  const drinks = await response.json();
  return drinks;
}

export async function getVegetables() {
  const response = await fetch(`/api/groceries?type=vegetable`);
  const vegetables = await response.json();
  return vegetables;
}

export async function getCereals() {
  const response = await fetch(`/api/groceries?type=cereal`);
  const cereals = await response.json();
  return cereals;
}

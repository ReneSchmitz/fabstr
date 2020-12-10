export async function getGroceriesHeader() {
  const result = await fetch(`http://localhost:3001/api/groceries`);
  const groceriesHeader = result.json();
  return groceriesHeader;
}

export async function getGroceries() {
  const result = await fetch(`http://localhost:3001/api/groceries`);
  const groceries = result.json();
  return groceries;
}

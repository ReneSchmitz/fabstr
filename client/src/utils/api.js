export async function getGroceries(fruits) {
  const result = await fetch(`/api/groceries/${fruits}`);
  const groceries = result.json();
  return groceries;
}

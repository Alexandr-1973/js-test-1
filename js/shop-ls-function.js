let randomKey;

function addItemLS(shopObject) {
  randomKey = `randomkey${Math.random()}`;
  localStorage.setItem(randomKey, JSON.stringify(shopObject));
}

function removeItemLS(randomKey) {
  localStorage.removeItem(randomKey);
}

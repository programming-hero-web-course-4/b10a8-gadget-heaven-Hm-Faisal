const getlocalstgItems = (item) => {
  const items = localStorage.getItem(item);
  const itemsObj = JSON.parse(items);
  return itemsObj ? itemsObj : [];
};

const addToCard = (item) => {
  const cardItems = getlocalstgItems("cardItem");
  cardItems.push(item);
  localStorage.setItem("cardItem", JSON.stringify(cardItems));
};

const addToWishlist = (item) => {
  const wishlistItems = getlocalstgItems("wishlistItem");
  wishlistItems.push(item);
  localStorage.setItem("wishlistItem", JSON.stringify(wishlistItems));
};

export { addToCard, addToWishlist, getlocalstgItems };

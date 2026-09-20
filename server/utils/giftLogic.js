export const getApplicableGift = (subtotal) => {
  if (subtotal >= 2999) {
    return { name: "Scented Wax Sachet (Free Gift)", quantity: 1 };
  } else if (subtotal >= 1999) {
    return { name: "Set of 2 Mini Candles (Free Gift)", quantity: 2 };
  }
  return null;
};
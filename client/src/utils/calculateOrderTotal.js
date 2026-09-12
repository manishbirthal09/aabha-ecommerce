export function calculateOrderTotal({ cartItems, settings, couponDiscountPercent = 0 }) {
  const subtotal = cartItems.reduce((sum, item) => {
    const price = item.product.discountPrice || item.product.price;
    return sum + price * item.quantity;
  }, 0);

  const couponDiscount = (subtotal * couponDiscountPercent) / 100;
  const afterCoupon = subtotal - couponDiscount;
  // const deliveryCharge = settings.deliveryCharge;
  // const total = afterCoupon + deliveryCharge;
const total = afterCoupon ;
  return {
    subtotal,
    couponDiscount,
    deliveryCharge,
    total: Math.round(total),
  };
}
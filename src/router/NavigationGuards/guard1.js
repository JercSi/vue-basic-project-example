export const guard1 = (to, from, next) => {
  // Proceed to next page
  next();
  return;
};
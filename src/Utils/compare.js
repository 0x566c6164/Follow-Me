const alphabetic = (a, b) => {
  if (a < b) return -1;
  return a !== b; // if a == b we return 0, otherwise 1
}

export default {
  alphabetic,
}
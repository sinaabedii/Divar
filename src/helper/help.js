const openInfo = (data, selectedId) => {
  const finder = data.filter((post) => post._id !== selectedId);
  return finder;
};
export { openInfo };

const getFromStorage = (key) => {
  const Data = localStorage.getItem(key);
  return Data;
};

export default getFromStorage;
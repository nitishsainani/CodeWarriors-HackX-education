export const getUser = () => {
  return JSON.parse(localStorage.getItem('userdata'));
};

export const storeUser = (userData) => {
  localStorage.setItem('userdata', JSON.stringify(userData));
};

export const clearStorage = () => {
  localStorage.clear();
};

export const getAuthHeader = () => {
  return {"Authorization": "Token " + getUser().token}
}

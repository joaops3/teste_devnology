

export const getToken = <T extends any>(name: string): T | null => {
  const tokenStg = localStorage.getItem(name);
  if (!tokenStg) {
    return null;
  }
  const token: T = JSON.parse(tokenStg);
  return token ?? null;
};

export const setToken = <T extends any>(name: string, value: T) => {
  localStorage.setItem(name, JSON.stringify(value));
};
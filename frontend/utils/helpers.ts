export const currencyFormater = new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL", maximumFractionDigits: 2})

export const dateFormater = new Intl.DateTimeFormat("pt-BR", {dateStyle: "short", timeStyle: undefined})

export const relativeDateFormater = new Intl.RelativeTimeFormat("pt-BR", {style: "long", numeric: "auto"}) // 1 day ago

export const removeSpecialCharacters = (string: string): string => {
  return string.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/gi, "").replace(/\s/g, "");
};

export const onlyNumbers = (document: string) => {
  return document.replace(/\D/g, "");
};


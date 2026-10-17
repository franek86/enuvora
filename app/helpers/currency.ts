export const money = (value: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "EUR" }).format(value);

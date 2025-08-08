export const capitalizeFullName = (name: string) =>
  name
    .trim()
    .split(/\s+/) // Split by one or more spaces
    .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(" ");
  
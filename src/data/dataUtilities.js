import data from "./master.json";

const isPostalCodeExist = (postal_code) => {
  const found = data.some((entry) => entry.postal_code.toUpperCase() === postal_code.toUpperCase());
  return found;
}

const getPostalCodeData = (postal_code) => {
  const entry = data.find((item) => item.postal_code.toUpperCase() === postal_code.toUpperCase());

  if (entry) {
    console.log(entry);
    return entry;
  } else {
    console.log(`Postal code ${postal_code} does not exist.`);
    return null;
  }
};

export { isPostalCodeExist, getPostalCodeData };

import countries from "world-countries";

export const formattedCountries = countries.map((item) => {
  return {
    code: item.cca2,
    flag: item.flag,
    name: item.name.common,
    location: item.latlng,
    region: item.region,
  };
});
export const findCountryLocation = (country: string) => {
  const found = formattedCountries.find((item) => item.name === country);
  if (!found) return null;
  const countr = findCountryByCode(found?.code);

  return countr;
};
export const findCountryByCode = (countryCode: string) => {
  const found = formattedCountries.find((item) => item.code === countryCode);
  return found; // Return the found country or null if not found
};

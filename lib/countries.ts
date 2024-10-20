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

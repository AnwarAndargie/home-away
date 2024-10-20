import { formattedCountries } from "../../lib/countries";
import { Label } from "../ui/label";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
type countryType = {
  name: string;
  flag: string;
  location: string;
  region: string;
  code: string;
};
function CountrySelect() {
  return (
    <div>
      <Label htmlFor="country" className="font-semibold mb-2">
        Country
      </Label>
      <Select name="country" required defaultValue={formattedCountries[0].name}>
        <SelectTrigger></SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {formattedCountries.map((country) => (
              <SelectItem key={country.code} value={country.code}>
                <span className="capitalize flex gap-2">
                  {country.flag}
                  {country.name}
                </span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default CountrySelect;

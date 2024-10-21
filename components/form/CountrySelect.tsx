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
  const name = "country";
  return (
    <div>
      <Label htmlFor="country" className="font-semibold mb-2">
        Country
      </Label>
      <Select name={name} required defaultValue={formattedCountries[0].code}>
        <SelectTrigger id={name}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {formattedCountries.map((item) => (
            <SelectItem key={item.code} value={item.code}>
              <span className="flex items-center gap-2">
                {/* {item.flag} */}
                {item.name}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default CountrySelect;

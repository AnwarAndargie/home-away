"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function CountrySelect() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        const countryOptions = response.data.map((country: any) => ({
          label: country.name.common,
          value: country.name.common,
        }));
        setCountries(countryOptions);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  return (
    <div>
      <h1 className="font-semibold">Country</h1>
      <Select>
        <SelectTrigger className="">
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {countries.map((country: any) => (
              <SelectItem key={country.value} value={country.value}>
                <p className="capitalize">{country.label}</p>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default CountrySelect;

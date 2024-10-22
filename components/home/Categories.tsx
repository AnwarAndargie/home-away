import React from "react";
import { categoryList } from "@/lib/categories";
import { Card, CardHeader } from "../ui/card";
import { ScrollBar, ScrollArea } from "../ui/scroll-area";
import Link from "next/link";

async function Categories({
  search,
  category,
}: {
  search?: string;
  category?: string;
}) {
  const searchTerm = search ? `search=${search}` : " ";
  return (
    <section>
      <ScrollArea>
        <div className="flex flex-row items-center justify-between">
          {categoryList.map((item) => {
            const isActive = category === item.name;
            return (
              <Link
                id={item.name}
                href={`/?category=${item.name}${searchTerm}`}
              >
                <span
                  className={`flex flex-col items-center cursor-pointer duration-300 capitalize hover:text-primary ${
                    isActive ? `text-primary` : ``
                  } `}
                >
                  {<item.icon className="w-8 h-8" />}
                  <p className="text-sm"> {item.name}</p>
                </span>
              </Link>
            );
          })}
        </div>

        <ScrollBar orientation="horizontal"></ScrollBar>
      </ScrollArea>
      {/* <div className="mt-8 grid grid-cols-3 gap-2">
        {properties.map((item) => {
          return (
            <Card className="max-w-sm rounded-lg">
              <div className="">
                <img
                  //width={250}
                  //height={650}
                  className="w-full h-full rounded-lg"
                  src={item.imageUrl}
                  alt={item.name}
                />
                <div className="p-2">
                  <p className="capitalize font-medium ">
                    {item.name} in {item.country}
                  </p>
                  <p className="capitalize text-muted-foreground text-sm">
                    {item.tagline}
                  </p>
                </div>
                <div className="flex flex-row justify-between p-2">
                  <p className="font-bold">${item.price}/night</p>
                  <p>{item.country}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div> */}
    </section>
  );
}

export default Categories;

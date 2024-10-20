import { IconType } from "react-icons/lib";
import { MdCabin } from "react-icons/md";
import { TbCaravan, TbTent, TbBuildingCottage } from "react-icons/tb";
import { GiWoodCabin, GiMushroomHouse } from "react-icons/gi";
import { PiWarehouse, PiLighthouse, PiVan } from "react-icons/pi";
import { GoContainer } from "react-icons/go";
export const category = [
  {
    icon: MdCabin,
    name: "cabin",
  },
  {
    icon: PiVan,
    name: "airstream",
  },
  {
    icon: TbTent,
    name: "tent",
  },
  {
    icon: PiWarehouse,
    name: "warehouse",
  },
  {
    icon: TbBuildingCottage,
    name: "cottage",
  },
  {
    icon: GiMushroomHouse,
    name: "magic",
  },
  {
    icon: GoContainer,
    name: "container",
  },
  {
    icon: TbCaravan,
    name: "caravan",
  },
  {
    icon: PiLighthouse,
    name: "tiny",
  },
  {
    icon: GiWoodCabin,
    name: "lodge",
  },
];

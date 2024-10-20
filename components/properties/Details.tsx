"use client";
import React from "react";
import { Button } from "../ui/button";

type DetailsProps = {
  name: string;
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

function Details({ name, value, onIncrement, onDecrement }: DetailsProps) {
  return (
    <div className="flex justify-between border rounded-md p-4">
      <div className="flex flex-col space-y-1">
        <p className="capitalize text-lg font-medium ">{name}</p>
        <p>Specify the number of {name}</p>
      </div>
      <div className="flex items-center space-x-2">
        <Button
          size="sm"
          variant="outline"
          className="text-orange-700 text-2xl bg-white"
          onClick={onDecrement}
        >
          -
        </Button>
        <p className="font-bold">{value}</p>
        <Button
          size="sm"
          variant="outline"
          className="text-orange-700 text-2xl bg-white"
          onClick={onIncrement}
        >
          +
        </Button>
      </div>
    </div>
  );
}

export default Details;

// "use client";
// import React from "react";
// import { useState } from "react";
// import { Button } from "../ui/button";
// type nameType = {
//   name: String;
// };
// function Details(props: nameType) {
//   const { name } = props;
//   const [guests, setGuests] = useState({ type: "guests", value: 0 });
//   const [bedrooms, setBedrooms] = useState({ type: "bedrooms", value: 0 });
//   const [beds, setBeds] = useState({ type: "beds", value: 0 });
//   const [baths, setBaths] = useState({ type: "baths", value: 0 });
//   const collect = [guests, bedrooms, beds, baths];
//   //  function handleIncrement(type:String, value:Number){
//   //   if (type==name)

//   //   }
//   return (
//     <div className="flex justify-between">
//       <div className="flex flex-col space-y-2">
//         <p className="capitalize text-2xl ">{name}</p>
//         <p>Specify the number of {name}</p>
//       </div>
//       <div>
//         {collect.map((item) => {
//           return (
//             <div className="flex justify-between ">
//               <Button
//                 size="lg"
//                 className="text-red-600"
//                 onClick={() => {
//                   item.type == name && item.value - 1;
//                 }}
//               >
//                 -
//               </Button>
//               <p>{item.type == name && item.value}</p>
//               <Button
//                 size="lg"
//                 className="text-red-600"
//                 onClick={() => {
//                   item.type == name && item.value + 1;
//                 }}
//               >
//                 +
//               </Button>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Details;

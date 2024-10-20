import React from "react";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
type textAreaProp = {
  name: string;
  textLable?: string;
  defaultValue?: string;
};
function TextInput({ name, textLable, defaultValue }: textAreaProp) {
  return (
    <div className="mb-2 col-span-2">
      <div>
        <Label htmlFor={name}>{textLable || name}</Label>
      </div>
      <Textarea
        name={name}
        rows={5}
        required
        defaultValue={defaultValue || tempDefault}
        cols={10}
      />
    </div>
  );
}
const tempDefault =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, labore praesentium temporibus accusantium debitis minima, deleniti omnis esse aliquid impedit maiores quidem iure iste! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cupiditate perferendis autem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, eligendi.Lorem ipsum dolor, sit amet consectetur adipisicing elit. At natus, tempore fugit non earum voluptas magnam nihil similique quos qui veritatis commodi voluptatem, saepe labore ullam accusamus repellendus ad velit soluta. Dolores quam libero non ducimus assumenda, recusandae maiores sed ipsum aperiam nemo! Iste inventore omnis repellat quibusdam quia temporibus iusto maxime quis culpa, error ratione. Vero blanditiis possimus sed! Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dicta possimus harum neque! Ullam! ";

export default TextInput;

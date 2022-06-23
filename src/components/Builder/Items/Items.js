import React from "react";
import { Item } from "./Item/Item";

export const Items = ({ items, add, remove }) => {
  const flavours = Object.keys(items);
  return (
    <div>
      <ul>
        {flavours.map((flavour) => (
          <Item key={flavour} name={flavour} add={add} remove={remove} />
        ))}
      </ul>
    </div>
  );
};
export default Items;

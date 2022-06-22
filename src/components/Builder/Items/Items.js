import React from "react";
import { Item } from "./Item/Item";

export const Items = ({ items }) => {
  const flavours = Object.keys(items);
  return (
    <div>
      <ul>
        {flavours.map((flavour) => (
          <Item key={flavour} name={flavour} />
        ))}
      </ul>
    </div>
  );
};
export default Items;

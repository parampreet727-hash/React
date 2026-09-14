import React, { useMemo } from "react";

export default function DerviedState({ quantity, price }) {
  const totalPrice = useMemo(() => {
    return quantity * price;
  }, [quantity, price]);
  return (
    <div>
        <h1>Dervied State</h1>
      <h1>Total Price : {totalPrice}</h1>
    </div>
  );
}

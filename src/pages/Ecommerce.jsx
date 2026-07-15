import { useState } from "react";
import Products from "./Products";

export default function Ecommerce() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <>
      {/* Your Orders Page */}

      <button
        onClick={() => setShowProducts(true)}
      >
        Open Products
      </button>

      {showProducts && (
        <Products
          onClose={() => setShowProducts(false)}
        />
      )}
    </>
  );
}
import React from "react";
import "./Product.css";
const ProductCard = ({ product, Product }) => {
  const item = product || Product;

  if (!item) {
    return null;
  }

  return (
    <div className="productCard w-[15rem] m-3 transition-all cursor-pointer">
      <div>
        <img
          className="h-[15rem] w-full object-cover object-left-top"
          src={item.imageUrl}
          alt={item.title}
        />
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60">{item.brand}</p>
          <p className="">{item.title}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold opacity-50">₹{item.discountedPrice}</p>
          <p className="line-through opacity-50">{item.price}</p>
          <p className="text-green-600 font-semibold">
            {item.discountPersent}% off
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

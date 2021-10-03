import React, { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import { addToCart } from "../../service";
import Skeleton from "react-loading-skeleton";

export default function Product({
  product: {
    title,
    category,
    id,
    image,
    price,
    description,
    rating: { rate },
  },
}) {
  const product = {
    title,
    category,
    id,
    image,
    price,
    description,
    rating: { rate },
  };
  const dispatch = useDispatch();

  return (
    <div className="relative flex flex-col m-5 p-10 bg-white z-30 rounded-lg">
      <p className="absolute top-2 text-xs italic">{category}</p>
      {image ? (
        <Image src={image} height={200} width={200} objectFit="contain" />
      ) : (
        <Skeleton count={2} />
      )}
      <h4>{title}</h4>

      <div className="flex">
        {Array(Math.round(rate))
          .fill()
          .map((_, idx) => (
            <StarIcon className="h-5" color={"yellow"} />
          ))}
      </div>
      <p className="my-2 line-clamp-2  text-xs">{description}</p>
      <p className="mb-5"> &#8377;{price}</p>

      <button className="button" onClick={() => addToCart(product, dispatch)}>
        Add To Cart
      </button>
    </div>
  );
}

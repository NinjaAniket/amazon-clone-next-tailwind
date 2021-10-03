import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct({
  item: {
    title,
    category,
    id,
    image,
    price,
    description,
    rating: { rate },
  },
}) {
  const dispatch = useDispatch();

  function removeItems(id) {
    dispatch(removeFromBasket(id));
  }
  return (
    <div className="grid grid-cols-5">
      <Image src={image} objectFit="contain" width={200} height={200} />

      <div className="mx-5 col-span-3 items-center ">
        <p>{title}</p>
        <div className="flex">
          {Array(Math.round(rate))
            .fill()
            .map((_, idx) => (
              <StarIcon className="h-5" color={"yellow"} />
            ))}
        </div>
        <p className="text-sm mt-2 mb-2 line-clamp-3 md:line-clamp-none">
          {description}
        </p>
        <p>&#x20B9;{Math.round(price)}</p>
      </div>
      <div className="flex flex-col space-y-4 my-auto justify-self-end">
        <button className="button" onClick={() => removeItems(id)}>
          Delete Items
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;

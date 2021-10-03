import { CheckCircleIcon } from "@heroicons/react/outline";
import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";

export default function Success({ navigation }) {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  });
  return (
    <div className="mx-auto m-10 p-10  ">
      <div className=" text-center items-center flex flex-col justify-center">
        <CheckCircleIcon width={50} height={50} color="green" />
        <h1 className="text-3xl">Your Order was Placed Successfully</h1>
      </div>
    </div>
  );
}

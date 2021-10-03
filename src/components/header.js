import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/dist/client/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import { useState } from "react";

export default function Header() {
  const [session] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);
  const [search, setSearch] = useState();

  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 cursor-pointer ">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            onClick={() => router.push("/")}
          />
        </div>
        <div className=" hidden sm:flex items-center h-10 bg-yellow-400 hover:bg-yellow-500 cursor-pointer flex-grow rounded-md">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none focus:ring-yellow-500 focus:ring-2"
          />
          <SearchIcon className="h-12 p-4 " />
        </div>

        <div className="text-white flex items-center text-sm space-x-6 mx-6 whitespace-nowrap">
          <div
            className="link cursor-pointer"
            onClick={!session ? signIn : signOut}
          >
            <p className="font-extrabold md:text-sm">
              {session ? `Hello, ${session.user.name}` : "Hello, Sign in"}
            </p>
            <p>Account & Lists</p>
          </div>
          <div className="link">
            <p className="font-extrabold md:text-sm">Orders</p>
            <p>& Returns</p>
          </div>
          <div
            className="relative link flex items-center"
            onClick={() => router.push("/checkout")}
          >
            <span className="bg-yellow-400 text-black absolute right-0 top-0 md:right-10 h-5 w-5 rounded-full text-center font-bold">
              {items?.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="font-extrabold md:text-sm hidden sm:flex mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center text-white bg-amazon_blue-light space-x-10 p-2 pl-6">
        <p className="link flex  items-center">
          <MenuIcon className="h-6 w-4" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deal</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
}

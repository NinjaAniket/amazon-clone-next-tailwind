import Head from "next/head";
import Banner from "../components/banner";
import GridProducts from "../components/grid-products";
import Header from "../components/header";
import ProductFeed from "../components/product-feed";
import favicon from "../../public/favicon.ico";

export default function Home({ data }) {
  const products = [
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 2,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 3,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 4,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    // More products...
  ];
  return (
    <div>
      <Head>
        <link
          rel="shortcut icon"
          href={favicon.src}
          type="image/x-icon"
          style={{ backgroundColor: "white" }}
        />
        <title>Amazon.in</title>
      </Head>
      <Header />

      <main className="max-w-screen-2xl mx-auto bg-gray-300 ">
        <Banner />
        {/* <ProductFeed {...{ data }} /> */}
        <ProductFeed {...{ data }} />
        <GridProducts {...{ products }} />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();

  return { props: { data } };
}

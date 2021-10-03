import Product from "./product";

export default function ProductFeed({ data }) {
  const newData = [...data].reverse();
  return (
    <>
      <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:-mt-80  sm:-mt-10 mx-auto">
        {newData?.slice(0, 8).map((product) => (
          <Product {...{ product }} key={product.id} />
        ))}

        <img
          className="md:col-span-full mx-auto"
          src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
          alt="product as a banner"
        />
        <div className="md:col-span-2">
          {newData?.slice(4, 5).map((product) => (
            <Product {...{ product }} key={product.id} />
          ))}
        </div>
        {newData?.slice(8, data.length - 1).map((product) => (
          <Product {...{ product }} key={product.id} />
        ))}
      </div>
    </>
  );
}

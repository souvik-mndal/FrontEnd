export function Cards({ data }) {
  return (
    <>
      {data.map((item) => {
        return item.products.map((i) => {
          return <div
            className="cardWrap h-auto w-11/12  mb-6 xd:w-3/4 sm:w-two lg:w-three 2xl:w-1/5 2xl:mx-2" 
            key={i.id}
          >
            <img
              src={i.thumbnail}
              alt=""
              className="w-full h-3/4 object-cover "
            />
            <div
              id="title"
              className=" h-1/4 py-4 flex justify-between items-center px-2 "
            >
              <h3 className="text-lg leading-none  w-3/5 md:text-xl lg:w-two">{i.title}</h3>
              <h2 className="text-2xl md:text-3xl lg:text-3xl">${i.price}</h2>
            </div>
          </div>;
        });
      })}
    </>
  );
}

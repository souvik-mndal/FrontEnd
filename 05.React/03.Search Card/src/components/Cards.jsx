export function Cards({ data }) {
  return (
    <>
      {data.map((item) => {
        return item.products.map((i) => {
          return <div
            className="cardWrap"
            style={{
              height: 400 + "px",
              boxShadow: "0 0 1rem #999",
              width: 350 + "px",
              borderRadius: 20 + "px",
              overflow: "hidden",
              marginBottom:1.5+"rem"
            }} key={i.id}
          >
            <img
              src={i.thumbnail}
              alt=""
              style={{ height: 80 + "%", width: 100 + "%", objectFit: "cover" }}
            />
            <div
              id="title"
              className=" h-1/5 flex justify-between items-center px-2"
            >
              <h3 className="text-xl leading-none  w-3/5">{i.title}</h3>
              <h2 className="text-2xl">${i.price}</h2>
            </div>
          </div>;
        });
      })}
    </>
  );
}

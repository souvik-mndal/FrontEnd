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
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: .5 + "rem",
                paddingRight: .5 + "rem",
                fontSize: 1.15 + "rem",
              }}
            >
              <h3>{i.title}</h3>
              <h2>${i.price}</h2>
            </div>
          </div>;
        });
      })}
    </>
  );
}

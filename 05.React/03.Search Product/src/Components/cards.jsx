
export function Card({input}){
    console.log(input);
    return (
        <>
            {input.map((item)=>{
                return item.products.map((innerItem)=>{
                    return <div style={{border:"1px solid black"}} key={innerItem.id}>
                        <img src={innerItem.thumbnail} alt="Product image" />
                        <div>
                            <h3>{innerItem.title}</h3>
                            <h2>{innerItem.price}</h2>
                        </div>
                    </div> 
                })
            })}
        </>
    )
}
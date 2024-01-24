// import React from 'react'
import ItemLocation, { TLocation } from '../item-locations/item-location'
type Prop = {
    data: TLocation[]
}
function ListLocation(props: Prop) {
    return (
        <>
            <hr style={{ width: "100%", color: "#DDDDDD", boxShadow: " 0 0 5px #ccc" }} />
            <div className="flex flex-wrap gap-5 ml-4 mt-20">
                {props.data.map((item) => {
                    return (
                        <ItemLocation
                            id={item.id}
                            name={item.name}
                            src={item.src}
                            nation={item.nation}
                            pon={item.pon}
                            key={item.id}
                        />
                    )
                })}
            </div>
        </>
    )
}
export default ListLocation
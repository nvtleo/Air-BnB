import React from 'react'
import ItemLocation, { TLocation } from '../item-locations/item-location'
type Prop = {
    data: TLocation[]
}
function ListLocation(props: Prop) {
    console.log(props)
    return (
        <>
            <hr style={{ width: "100%", color: "#DDDDDD", boxShadow: " 0 0 5px #ccc" }} />
            <div className="flex flex-wrap gap-10 ml-20 mt-20">
                {props.data.map((item) => {
                    return (

                        <ItemLocation
                            key={item.id}
                            name={item.name}
                            src={item.src}
                            nation={item.nation}
                            pon={item.pon}
                        />
                    )
                })}

            </div>

        </>
    )
}
export default ListLocation
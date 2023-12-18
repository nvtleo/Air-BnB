import React, { useEffect, useState } from 'react'
// import { IIFE } from '../../util';
import { GetAllLocation } from '../../service/test-location.service';
import ListLocation from '../../components/Location/list-locations/list-locations';
import { convert } from './convert';
import "./location-module.css"
function Locations() {
    const [locations, setLocations] = useState([]);
    useEffect(() => {
        GetAllLocation()
            .then((resp) => { setLocations(resp) })
            .catch((error) => console.error(error));
    }, []);
    // useEffect(() => {
    //     IIFE(async () => {
    //         const resp = await GetAllLocation();
    //         setLocations(resp)
    //     })
    //     console.log(locations)
    // }, [])
    return (
        <>
            <div className="bg">
                <ListLocation data={convert(locations)} />
            </div>
        </>
    )
}
export default Locations
import React, { useEffect, useState } from 'react'
import { IIFE } from '../../util';
// import { GetLocation } from '../../service/locatin.service';
import { GetAllLocation } from '../../service/test-location.service';

function ListLocations() {
    const [locations, setLocations] = useState([]);
    // useEffect(() => {
    //     GetLocation()
    //         .then((res) => { setLocations(res) })

    //         .catch((error) => console.error(error));
    // }, []);
    useEffect(() => {
        IIFE(async () => {
            const resp = await GetAllLocation();
            setLocations(resp)
            console.log(resp)
        })
    }, [])
    console.log(locations)
    return (
        <div>ListLocations</div>
    )
}
export default ListLocations
// import React, { useEffect, useState } from 'react'
import "./home.moudl.css"
import IconSearch from '../../assets/icon/icon-search'
// import { GetLocation } from '../../service/locatin.service'
import { useNavigate } from 'react-router-dom';
// import { GetLocation } from '../../service/locatin.service';
// import { IIFE } from '../../util';
// import { IIFE } from '../../util';
function Home() {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/Locations");
    };
    // const [locations, setLocations] = useState([]);
    // useEffect(() => {
    //     IIFE(async () => {
    //         const resp = await GetLocation();
    //         setLocations(resp)
    //     })
    // }, []);
    return (
        <>
            <div className="carousel">
                <img src="/src/assets/img/crs.jpg" alt="" />
                <div className="btn__intro">
                    <button
                        onClick={handleNavigate}
                        className='btn__location'>
                        Địa điểm</button>
                    <span className='span__btn'></span>
                    <button className='btn__introsm'>Nhận Phòng</button>
                    <span className='span__btn'></span>
                    <button className='btn__introsm'>Trả phòng</button>
                    <span className='span__btn'></span>
                    <button className='btn__introsm'>Khách</button>
                    <button> <p style={{ display: "none" }}>a</p> <IconSearch /></button>
                </div>
            </div>
        </>
    )
}
export default Home
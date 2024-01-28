// import React, { useEffect, useState } from 'react'
import "./home.moudl.css"
// import IconSearch from '../../assets/icon/icon-search'
// import { GetLocation } from '../../service/locatin.service'
import { useNavigate } from 'react-router-dom';
import ListLctHome from "../../components/LCT-home/list-lct-home/list-lct-home";
import { useEffect, useState } from "react";
import { GetLocationsHome } from "../../service/location-home.service";
import { converts } from "./convert";
// import { TItemLCT } from "../../components/LCT-home/item-lct-home/item-lct-home";

import IconSearch from "../../assets/icon/icon-search";
function Home() {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/Locations");
    };
    const [locationsHome, setLocationHome] = useState([])
    useEffect(() => {
        GetLocationsHome()
            .then((resp) => { setLocationHome(resp) })
            .catch((error) => { console.log(error) })
    }, []);
    console.log(locationsHome)
    return (
        <>
            <div className="carousel">
                <img src="/dist/assets/img/crs.jpg" alt="" />
                <div className="btn__intro">
                    <button
                        onClick={handleNavigate}
                        className='btn__location'>
                        Địa điểm</button>
                    <span className='span__btn'></span>
                    <button
                        onClick={handleNavigate}
                        className='btn__introsm'>Nhận Phòng</button>
                    <span className='span__btn'></span>
                    <button className='btn__introsm'>Trả phòng</button>
                    <span className='span__btn'></span>
                    <button className='btn__introsm'>Khách</button>
                    <button> <p style={{ display: "none" }}>a</p> <IconSearch /></button>
                </div>
            </div>
            {/* location phần trang */}
            <ListLctHome data={converts(locationsHome)} />
            <div className="img__footer">
                <img src="/dist/assets/img/img-footer1.png" alt="" />
                <img src="/dist/assets/img/img-footer2.png" alt="" />
                <img src="/dist/assets/img/img-footer3.png" alt="" />
                <img src="/dist/assets/img/img-footer4.png" alt="" />
            </div>
        </>
    )
}
export default Home
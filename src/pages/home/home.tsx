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
import crs from "../../assets/img/crs.jpg";
import img1 from "../../assets/img/img-footer1.png";
import img2 from "../../assets/img/img-footer2.png";
import img3 from "../../assets/img/img-footer3.png";
import img4 from "../../assets/img/img-footer4.png";
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
                <img src={crs} alt="" />
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
            <ListLctHome data={converts(locationsHome)} />
            <div className="img__footer">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
            </div>
        </>
    )
}
export default Home
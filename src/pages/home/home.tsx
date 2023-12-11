import React from 'react'
import "./home.moudl.css"
import IconSearch from '../../assets/icon/icon-search'
function Home() {
    return (
        <>
            <div className="carousel">
                <img src="/src/assets/img/crs.jpg" alt="" />
                <div className="btn__intro">
                    <button className='btn__location'>Địa điểm</button>
                    <span className='span__btn'></span>
                    <button className='btn__introsm'>Nhận Phòng</button>
                    <span className='span__btn'></span>
                    <button className='btn__introsm'>Trả phòng</button>
                    <span className='span__btn'></span>
                    <button className='btn__introsm'>Khách</button>
                    <button> <IconSearch /></button>
                </div>
            </div>
        </>
    )
}

export default Home
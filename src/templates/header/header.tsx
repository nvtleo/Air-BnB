import React from 'react'
import { Link } from 'react-router-dom'
import "./header.moudle.css.css"
import IconInsta from '../../assets/icon/icon-header'
import { UnorderedListOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

const items: MenuProps['items'] = [
    {
        label: <Link to="/Login">Đăng Nhập</Link>,
        key: '0',
    },
    {
        label: <Link to="/Register" className='Res' >Đăng Ký</Link>,
        key: '1',
    },
    {
        type: 'divider',
    },
];
function Header() {

    return (
        <>
            <header style={{ position: "relative" }}>
                <div className='flex items-center justify-between' style={{ backgroundColor: "black", width: "100%", paddingBottom: "6rem" }}>
                    <div className="header__img">
                        <img style={{ width: "10rem", height: "8rem", marginLeft: "6rem" }} src="/src/assets/img/airbnb-logo.png" alt="" />
                    </div>
                    <div className="header__info">
                        <Link className='text-4xl text-stone-50 Link' to={"."}>Nơi ở</Link>
                        <Link className='text-4xl text-stone-50 mx-10 Link' to={"."}>Trại nghiệm</Link>
                        <Link className='text-4xl text-stone-50  Link' to={"."}>Trải Nghiệm trực tuyến</Link>
                    </div>
                    <div className="header__log flex items-center">
                        <Link className='Link text-3xl text-stone-50 p-4' to={"."}>Đón tiếp khách</Link>
                        <IconInsta />
                        <Dropdown menu={{ items }} trigger={['click']}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space className='text-lg text-black bg-white ml-20 mr-10 Log border px-10 py-5 rounded-[3rem]'>
                                    <UnorderedListOutlined className='text-4xl' />
                                </Space>
                            </a>
                        </Dropdown>
                    </div>
                </div>

            </header>

        </>
    )
}


export default Header
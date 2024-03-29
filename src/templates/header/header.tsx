// import React from 'react'
import { Link } from 'react-router-dom'
import "./header.moudle.css.css"
import IconInsta from '../../assets/icon/icon-header'
import { UnorderedListOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hook';
import logo from "../../assets/img/logo-pink.jpg"
// import { setLogin } from "../../redux/userSlice";
// import { removeLocal } from '../../util';
// import { ACCESS_TOKEN } from '../../const';
// import { useDispatch } from "react-redux";

const items: MenuProps['items'] = [
    {
        label: <Link to="/login">Đăng Nhập</Link>,
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
    const { login } = useAppSelector((rootReducer) => rootReducer.userReducer);
    console.log(login.email, "login")
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/");
    };
    return (
        <>
            <header style={{ position: "relative" }}>
                <div className='flex items-center justify-between' style={{ backgroundColor: "white", width: "100%", paddingBottom: "3rem" }}>
                    <div className="header__img">
                        <img onClick={handleNavigate} style={{ width: "16rem", height: "8rem", marginLeft: "7rem" }} src={logo} alt="" />
                    </div>
                    <div className="header__info ml-24">
                        <Link className='text-4xl text-slate-950 Link' to={"."}>Nơi ở</Link>
                        <Link className='text-4xl text-slate-950 mx-10 Link' to={"."}>Trại nghiệm</Link>
                        <Link className='text-4xl  text-slate-950  Link' to={"."}>Trải Nghiệm trực tuyến</Link>
                    </div>
                    <div className="header__log flex items-center">
                        <Link className='Link text-3xl  text-slate-950 p-4' to={"."}>Đón tiếp khách</Link>
                        <IconInsta />
                        {/* {login ? (
                            <span className="Link text-3xl text-slate-950 p-4">{login.email}</span>
                        ) : ( */}
                        <>
                            <Dropdown menu={{ items }} trigger={['click']}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space className='text-lg text-black bg-pink ml-20 mr-10 Log border px-10 py-5 rounded-[3rem]'>
                                        <UnorderedListOutlined className='text-4xl' />
                                    </Space>
                                </a>
                            </Dropdown>
                        </>
                        {/* )} */}

                    </div>
                </div>
            </header>
        </>
    )
}
export default Header
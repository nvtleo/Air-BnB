import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { IIFE } from '../../util';
import { GetRoomDetail } from '../../service/room-detail.service';
import { TCommentAPI, TRoomDetail } from './type';
import * as S from "./style"
import IconWifi from '../../assets/icon/icon-wifi';
import IconAir from '../../assets/icon/icon-air';
import IconCarside from '../../assets/icon/icon-car-side';
import IconKichen from '../../assets/icon/icon-kichen';
import IconPool from '../../assets/icon/icon-pool';
import IconWash from '../../assets/icon/icon-wash';
import IconTV from '../../assets/icon/icon-tv';
import { useScrollToTop } from '../../hooks';
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
import moment from 'moment';
import "./style.css"
import { GetComment } from '../../service/comment.service';
import { P } from '../../components/Location/item-locations/style';

function Roomdetail() {
    const [selectedDateRange, setSelectedDateRange] = useState<[moment.Moment, moment.Moment] | null>(null);

    const handleDateChange = (dates: [moment.Moment, moment.Moment] | null) => {
        setSelectedDateRange(dates);
    };

    const calculateNumberOfDays = (): number | null => {
        if (selectedDateRange) {
            const [checkInDate, checkOutDate] = selectedDateRange;
            return checkOutDate.diff(checkInDate, 'days');
        }
        return null;
    };

    useScrollToTop();
    const param = useParams();
    console.log(param, "param")
    const id: number = param.id;
    console.log(id)
    const [detail, setDetail] = useState<TRoomDetail>()
    useEffect(() => {
        IIFE(async () => {
            if (id) {
                const resp = await GetRoomDetail(id);
                setDetail(resp);
            }
        });
        console.log(detail)
    }, []);
    const [comment, setComment] = useState<TCommentAPI>()
    useEffect(() => {
        IIFE(async () => {
            if (id) {
                const resp = await GetComment(id);
                setComment(resp);
            }
        });
    }, []);
    console.log(comment)
    const Price = Number(detail?.giaTien) * (Number(calculateNumberOfDays()) || 0);
    const totalPrice = Number(Price) + Number(detail?.giaTien) / 10

    return (
        <>
            <S.RoomDetail>
                <S.H1>{detail?.tenPhong}</S.H1>
                <S.Image src={detail?.hinhAnh} alt="" />
                <div className="space__sell flex">
                    <S.PInfo className="info">
                        <p style={{ fontWeight: 500 }}>Toàn bộ thông tin về căn hộ {detail?.tenPhong} </p>
                        <p>★  {detail?.khach} người ở - {detail?.phongNgu} phòng ngủ - {detail?.phongTam} - phòng tắm - {detail?.giuong} - giường</p>
                        <p>★ {detail?.moTa}</p>
                        <p style={{ fontWeight: 500 }}>Các tiện nghi:</p>
                        <p>{detail?.dieuHoa ? <IconAir /> : ""}</p>
                        <p> {detail?.doXe ? <IconCarside /> : ""} </p>
                        <p>{detail?.bep ? <IconKichen /> : ""}</p>
                        <p>{detail?.hoBoi ? <IconPool /> : ""}</p>
                        <p>{detail?.mayGiat ? <IconWash /> : ""}</p>
                        <p>{detail?.tivi ? <IconTV /> : ""}</p>
                        <p>{detail?.wifi ? <IconWifi /> : ""}</p>
                        <p style={{ fontWeight: 500 }}>Miễn phí huỷ đặt phòng trong 48h</p>
                    </S.PInfo>
                    <S.BookTK className="book__room">
                        <div className="pay">
                            <S.Cost>{detail?.giaTien} $ / Ngày</S.Cost>
                        </div>
                        <div className="calendar">
                            <Space style={{ margin: "3rem 0", width: "100%" }} direction="vertical" size={12}>
                                <RangePicker
                                    style={{ width: "100%", fontSize: "30px", borderColor: "black", fontWeight: 700 }}
                                    placeholder={["Nhận phòng", "Trả phòng"]}
                                    onChange={handleDateChange}
                                />
                            </Space>
                        </div>
                        <S.BtnDP>Đặt phòng</S.BtnDP>
                        <p style={{ textAlign: "center", fontSize: 20, margin: "10px 0" }}>Bạn vẫn chưa bị trừ tiền</p>
                        <div className="info__money"></div>
                        <p style={{ fontSize: "2rem", fontWeight: 500 }}>
                            Số ngày đã đặt phòng: {calculateNumberOfDays()}
                        </p>
                        <div className="money__rom">
                            <S.PIF>{detail?.giaTien} x {calculateNumberOfDays()} ngày</S.PIF>
                            <S.PIF>{Price}$</S.PIF>
                        </div>
                        <div className="extra__money">
                            <S.PIF>Phí dịch vụ AirBnB</S.PIF>
                            <S.PIF>{Number(detail?.giaTien) / 10}$</S.PIF>
                        </div>
                        <div className="total__money">
                            <S.PIF>Tổng trước thuế</S.PIF>
                            <S.PIF>{totalPrice}$</S.PIF>
                        </div>
                    </S.BookTK>
                </div>
                <hr style={{ marginTop: "5rem", fontSize: "2rem", fontWeight: 800 }} />
                <div className="space__cmt">
                    {comment?.slice(0, 6).map((item, index) => (
                        <div className='cmt__all' key={index}>
                            <div>
                                <S.AVT src={item.avatar} alt="" />
                            </div>
                            <div>
                                <p>{item.id}</p>
                                <p>{item.ngayBinhLuan}</p>
                                <p>{item.noiDung}</p>
                                <p>{item.saoBinhLuan}★</p>
                                <p>{item.tenNguoiBinhLuan}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </S.RoomDetail>
            <div className="add__cmt">
                <input type="text" placeholder='bình luận ....' />
                <button>Thêm bình luận</button>
            </div>
        </>

    )
}

export default Roomdetail
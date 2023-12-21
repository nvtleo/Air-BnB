import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { IIFE } from '../../util';
import { GetRoomDetail } from '../../service/room-detail.service';
import { TRoomDetail } from './type';
import * as S from "./style"
import IconWifi from '../../assets/icon/icon-wifi';
import IconAir from '../../assets/icon/icon-air';
import IconCarside from '../../assets/icon/icon-car-side';
import IconKichen from '../../assets/icon/icon-kichen';
import IconPool from '../../assets/icon/icon-pool';
import IconWash from '../../assets/icon/icon-wash';
import IconTV from '../../assets/icon/icon-tv';
function Roomdetail() {
    const param = useParams<{ id: string }>();
    console.log(param)
    const [detail, setDetail] = useState<TRoomDetail>()
    useEffect(() => {
        IIFE(async () => {
            if (param.id) {
                const resp = await GetRoomDetail(param.id);
                setDetail(resp);
            }
        });
    }, []);
    console.log(detail, "detail")

    console.log(param.id)
    return (
        <>
            <S.RoomDetail>
                <S.H1>{detail?.tenPhong}</S.H1>
                <S.Image src={detail?.hinhAnh} alt="" />
                <S.PInfo className="info">
                    <p style={{ fontWeight: 500 }}>Toàn bộ thông tin về căn hộ {detail?.tenPhong} </p>
                    <p>★  {detail?.khach} khách - {detail?.phongNgu} phòng ngủ - {detail?.phongTam} - phòng tắm - {detail?.giuong} - giường</p>
                    <p>★ {detail?.moTa}</p>
                    <p style={{ fontWeight: 500 }}>Các tiện nghi:</p>
                    <p>
                        {detail?.dieuHoa ? <IconAir /> : ""}
                    </p>
                    <p>
                        {detail?.doXe ? <IconCarside /> : ""}
                    </p>
                    <p>
                        {detail?.bep ? <IconKichen /> : ""}
                    </p>
                    <p>
                        {detail?.hoBoi ? <IconPool /> : ""}
                    </p>
                    <p>
                        {detail?.mayGiat ? <IconWash /> : ""}
                    </p>
                    <p>
                        {detail?.tivi ? <IconTV /> : ""}
                    </p>
                    <p>
                        {detail?.wifi ? <IconWifi /> : ""}
                    </p>
                    <p style={{ fontWeight: 500 }}>Miễn phí huỷ trong 48h</p>
                </S.PInfo>
            </S.RoomDetail>

        </>
    )
}

export default Roomdetail
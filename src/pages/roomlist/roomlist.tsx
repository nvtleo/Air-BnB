import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetListRoom } from '../../service/list-room.service';
import { IIFE } from '../../util';
import { TRoomAPI } from './type';
import * as S from "./style"
import { styled } from 'styled-components';
function Roomlist() {
    const param = useParams<{ idRoom: string }>();
    console.log(param)
    const [room, setRoom] = useState<TRoomAPI>()
    useEffect(() => {
        IIFE(async () => {
            if (param.idRoom) {
                const resp = await GetListRoom(param.idRoom);
                setRoom(resp);
            }
        });
    }, []);
    console.log(room)
    return (
        <>
            <S.RoomList>
                {room?.map((roomItem, index) => (

                    <S.Room key={index}>
                        <div>
                            <h3 className='text-center font-bold text-3xl'>{roomItem.tenPhong}</h3>
                            <S.Image src={roomItem.hinhAnh} alt={roomItem.tenPhong} />
                        </div>
                        <div>
                            <S.Detail>Giá phòng: {roomItem.giaTien}$</S.Detail>
                            <S.Detail>Số khách: {roomItem.khach}</S.Detail>
                            <S.Info>Các tiện nghi: {roomItem.moTa}</S.Info>
                        </div>
                    </S.Room>
                ))}

            </S.RoomList>

        </>
    )
}

export default Roomlist
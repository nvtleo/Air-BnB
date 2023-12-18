import React from 'react';
import * as S from "./style"
import { useNavigate } from 'react-router-dom';
export type TLocation = {
    src: string,
    alt?: string,
    nation: string,
    id?: number | string,
    pon: string,
    name: string,
}
type Props = TLocation
function ItemLocation(props: Props) {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/room/${props.id}`)
    };
    return (
        <>
            <S.Card className="card flex flex-col items-center">
                <S.Image onClick={handleNavigate} src={props.src} alt={props.alt} />
                <S.P> {props.name} - {props.pon}</S.P>
                {/* <S.P> {props.pon}</S.P> */}
                <S.PNation> {props.nation}</S.PNation>
            </S.Card>

        </>
    )
}

export default ItemLocation
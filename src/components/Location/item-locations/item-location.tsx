import React from 'react';
import * as S from "./style"
export type TLocation = {
    src: string,
    alt?: string,
    nation: string,
    id?: number | string,
    pon: string,
    name: string,
}
type Props = Omit<TLocation, "id">
function ItemLocation(props: Props) {
    return (
        <>
            <S.Card style={{ cursor: 'pointer' }} className="card flex flex-col items-center">
                <S.Image src={props.src} alt={props.alt} />
                <S.P> {props.name} - {props.pon}</S.P>
                {/* <S.P> {props.pon}</S.P> */}
                <S.PNation> {props.nation}</S.PNation>
            </S.Card>

        </>
    )
}

export default ItemLocation
// import React from 'react'
import * as S from "./style"
import "./location-home.css"
export type TItemLCT = {
    id: number | string,
    src: string,
    alt?: string,
    nation: string,
    pon: string,
    name: string
}
type Props = TItemLCT
function ItemLctHome(props: Props) {

    return (
        <>

            <div className="flex flex-col items-center item__home">
                <S.Image src={props.src} alt={props.alt} />
                <S.PLocation>{props.name} - {props.pon}</S.PLocation>
                {/* <p>{props.pon}</p> */}
                <S.PLocation>{props.nation}</S.PLocation>
            </div>
        </>
    )
}

export default ItemLctHome
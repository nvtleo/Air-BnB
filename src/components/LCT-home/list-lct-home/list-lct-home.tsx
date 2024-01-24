// import React from 'react'
import type { TItemLCT } from '../item-lct-home/item-lct-home'
import ItemLctHome from '../item-lct-home/item-lct-home'
import * as S from "./style"
type Props = {
    data: TItemLCT[]
}
function ListLctHome(props: Props) {
    return (
        <>
            <div className="mt-20">
                <p className='text-3xl font-medium py-5 flex justify-center'>Khám phá những địa điểm gần đây</p>
                <S.List  >
                    {props.data.map((item) => {
                        return (
                            <ItemLctHome
                                id={item.id}
                                key={item.id}
                                name={item.name}
                                src={item.src}
                                nation={item.nation}
                                pon={item.pon}
                            />
                        )
                    })}
                </S.List>
            </div>
        </>
    )
}

export default ListLctHome
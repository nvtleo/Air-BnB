import { TItemLCT } from "../../components/LCT-home/item-lct-home/item-lct-home"

export interface TLCTHomeAPI {
    id: number
    tenViTri: string
    tinhThanh: string
    quocGia: string
    hinhAnh: string
  }
  export const converts = (data: TLCTHomeAPI[]): TItemLCT[]=>{
    console.log(data)
return data.map(item=>({
  id:item.id,
  src:item.hinhAnh,
  name: item.tenViTri,
  pon:item.tinhThanh,
  nation:item.quocGia
}))
  }
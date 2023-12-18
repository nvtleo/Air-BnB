import { TLocation } from "../../components/Location/item-locations/item-location"

export interface TLocationsAPI {
    id: number
    tenViTri: string
    tinhThanh: string
    quocGia: string
    hinhAnh: string
  }
  export const convert = (data: TLocationsAPI[]): TLocation[] => {
    console.log(data)
return data.map(item =>({
    nation: item.quocGia,
    src: item.hinhAnh,
    pon: item.tinhThanh,
    name: item.tenViTri,
    id: item.id
})
)
  }
  
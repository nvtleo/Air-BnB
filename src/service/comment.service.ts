import { axiosWthoutAuth } from './axios.config';
export interface TCMTAPI {
    id: number
    maPhong: number
    maNguoiBinhLuan: number
    ngayBinhLuan: string
    noiDung: string
    saoBinhLuan: number
  }
// import { TRoomDetail } from '../pages/roomdetail/type';
export const GetComment = async  (id:number)=>{
    try {
     const resp = await  axiosWthoutAuth(`./binh-luan/lay-binh-luan-theo-phong/${id}`);
     console.log(resp.data.content,"comment")
     return resp.data.content
    } catch (error:any) {
     throw new Error(error)
    }
 }
 export const Comment =async (data:TCMTAPI) => {
    try{
        const resp = await axiosWthoutAuth("/binh-luan",{method: "POST",
        data});
        return resp.data.content;
     }
     catch(error:any){
        throw new Error(error)
     }
    
 }
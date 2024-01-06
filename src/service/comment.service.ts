import { axiosWthoutAuth } from './axios.config';
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
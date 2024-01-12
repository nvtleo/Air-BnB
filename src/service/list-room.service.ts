import { TRoomAPI } from '../pages/roomlist/type';
import { axiosWthoutAuth } from './axios.config';
export const GetListRoom = async (maViTri:string): Promise<TRoomAPI>=>{
    try {
     const resp = await  axiosWthoutAuth("./phong-thue/lay-phong-theo-vi-tri",{params:{maViTri}});
     console.log(resp,"list")
     return resp.data.content
 
    } catch (error:any) {
     throw new Error(error)
    }
 }
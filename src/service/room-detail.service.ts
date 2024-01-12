import { TRoomDetail } from '../pages/roomdetail/type';
import { axiosWthoutAuth } from './axios.config';
export const GetRoomDetail = async (id:number): Promise<TRoomDetail>=>{
    try {
     const resp = await  axiosWthoutAuth(`./phong-thue/${id}`);
     console.log(resp.data.content,"resp")
     return resp.data.content
    } catch (error:any) {
     throw new Error(error)
    }
 }
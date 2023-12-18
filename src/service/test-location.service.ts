import { axiosWthoutAuth } from './axios.config';
export const GetAllLocation = async ()=>{
    try {
     const resp = await  axiosWthoutAuth("./vi-tri");
     return resp.data.content
    } catch (error:any) {
     throw new Error(error)
    }
 }
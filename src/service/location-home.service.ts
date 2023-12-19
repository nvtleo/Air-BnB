import { axiosWthoutAuth } from './axios.config';
export const GetLocationsHome = async ()=>{
    try {
     const resp = await  axiosWthoutAuth("./vi-tri/phan-trang-tim-kiem?pageIndex=1&pageSize=10");
     console.log(resp,"resp")
     return resp.data.content.data
    } catch (error:any) {
     throw new Error(error)
    }
 }
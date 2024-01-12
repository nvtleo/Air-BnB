import { axiosWthoutAuth } from "./axios.config";
type TBody = {
    email: string;
    password: string;
    name: string;
    gender: boolean;
    phone: string;
  };
  
  export const signUp = async (data: TBody) => {
    try {
      const resp = await axiosWthoutAuth("/auth/signup", {
        method: "POST",
        data,
      });
   return resp.data.content;
    } catch (error: any) {
      throw new Error(error);
    }
  };
  type TDataSignin = {
    email: string;
    password: string;
  };
  export const signIn = async (data: TDataSignin) => {
    try {
      const resp = await axiosWthoutAuth("/auth/signin", {
        method: "POST",
        data,
      });
      console.log(resp.data.content)
    return resp.data.content;
    } catch (error: any) {
      throw new Error(error);
    }
  };
  
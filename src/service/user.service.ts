import { axiosWthoutAuth } from "./axios.config";

type TBody = {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  gender: boolean;
  role: string;
};

export const signUp = async (data: TBody) => {
  try {
    const resp = await axiosWthoutAuth("/auth/signup", {
      method: "POST",
      data,
    });
    return resp.data.content;
  } catch (error: any){
    throw new Error(error);
  }
};

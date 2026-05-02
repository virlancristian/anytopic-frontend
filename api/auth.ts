import { API_URL } from "@/constants/api";
import axios, { AxiosResponse } from "axios";

interface UserRegisterRequest {
    username: string;
    email: string;
    password: string;
}

interface UserRegisterResponse {
    message: string;
}

const AUTH_ENDPOINT = "/auth";

async function registerUser(userRegisterData: UserRegisterRequest): Promise<{ message: string; isError: boolean }> {
    try {
        const response: AxiosResponse<UserRegisterResponse> = await axios.post(`${API_URL}${AUTH_ENDPOINT}/register`, userRegisterData);
        return {
            message: response.data.message,
            isError: false
        };
    } catch(error: any) {
        console.error(`Error while trying to register user: ${error}`);
        
        return {
            message: error["response"]["data"]["message"],
            isError: true,
        }
    }
}

export const Auth = {
    registerUser: registerUser
};
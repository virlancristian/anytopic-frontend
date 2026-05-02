'use server'

import { Api } from "@/api";

export async function registerUser(initialState: any, userAuthData: FormData) {
    const requestBody = {
        username: userAuthData.get("username")?.toString() || "",
        email: userAuthData.get("email")?.toString() || "",
        password: userAuthData.get("password")?.toString() || ""
    };
    const { message, isError } = await Api.Auth.registerUser(requestBody);

    return {
        message: message,
        isError: isError
    };
}
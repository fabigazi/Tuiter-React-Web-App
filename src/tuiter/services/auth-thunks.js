import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./auth-service";


export const loginThunk = createAsyncThunk(
    "users/login", async (credentials) => {
        const user = await authService.login(credentials);
        return user;
    }
);

export const profileThunk = createAsyncThunk(
    "users/profile", async () => {
        return await authService.profile();
    });
export const logoutThunk = createAsyncThunk(
    "auth/logout", async () => {
        return await authService.logout();
    });
export const updateUserThunk = createAsyncThunk(
    "user/updateUser", async (user) => {
        await authService.updateUser(user);
        return user;
    });


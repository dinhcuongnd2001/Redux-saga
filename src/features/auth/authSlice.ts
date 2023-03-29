import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../models/user";

export interface LoginPayload {
  username: string;
  password: string;
}

export interface AuthState {
  isLoggIn: boolean;
  logging?: boolean;
  currentUser?: User;
}

const initialState: AuthState = {
  isLoggIn: false,
  logging: false,
  currentUser: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayload>) {
      state.logging = true;
    },

    loginSuccess(state, action: PayloadAction<User>) {
      state.isLoggIn = true;
      state.logging = false;
      state.currentUser = action.payload;
    },

    loginFailed(state, action: PayloadAction<string>) {
      state.logging = false;
      state.isLoggIn = false;
    },

    logout(state) {
      state.currentUser = undefined;
      state.isLoggIn = false;
    },
  },
});

// action

export const authActions = authSlice.actions;

// Selector

export const selectIsLoggedIn = (state: any) => state.auth.isLoggIn;
export const selectIsLogging = (state: any) => state.auth.logging;

// reducer
const authReducer = authSlice.reducer;
export default authReducer;

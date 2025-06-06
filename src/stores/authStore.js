import { create } from "zustand";
import { persist } from "zustand/middleware";
import authApi from "../api/authApi";

const useAuthStore = create(persist( (set) = ({
  user: null,
  accessToken: "",
  actionLogin: async (input) => {
    await authApi.login(input)
  }
}) ))
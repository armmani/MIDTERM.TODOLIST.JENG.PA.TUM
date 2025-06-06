import { create } from "zustand";
import { persist } from "zustand/middleware";
import authApi from "../api/authApi";

const useAuthStore = create(persist((set) => ({
  userId: null,
  accessToken: "",
  actionLogin: async (input) => {
    const res = await authApi.login(input);
    console.log("res login", res.data)
    set({ userId: res.data.userId, accessToken: res.data.accessToken })
  }
}), {
  name: "user-store",
})
);

export default useAuthStore
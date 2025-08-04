import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface SessionState {
  user: { uid: string; email: string; displayName?: string } | null;
}

const initialState: SessionState = { user: null };

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<SessionState["user"]>) {
      state.user = action.payload;
    },
    clearUser(state) {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = sessionSlice.actions;
export default sessionSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 1. تعريف شكل البيانات (الـ State)
interface AuthState {
    users: any[];            // مصفوفة لتخزين المستخدمين المسجلين
    currentUser: any | null; // بيانات المستخدم الحالي الذي سجل دخوله
    isAuthenticated: boolean; // حالة تسجيل الدخول (صحيح/خطأ)
}

// 2. القيمة الابتدائية
const initialState: AuthState = {
    users: [],
    currentUser: null,
    isAuthenticated: false,
};

// 3. الـ Slice (المنطق)
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // دالة التسجيل: تأخذ بيانات المستخدم وتضيفها للمصفوفة
        registerUser: (state, action) => {
        state.users.push(action.payload);
        
        },
        // دالة تسجيل الدخول: تبحث عن المستخدم في المصفوفة
        loginUser: (state, action) => {
        const user = state.users.find(
            (u) => u.email == action.payload.email && u.password == action.payload.password
        );
        if (user) {
            state.currentUser = user;
            state.isAuthenticated = true;
        }
        },
    }
});

// 4. تصدير الدوال (Actions) والـ Reducer
export const { registerUser, loginUser} = authSlice.actions;
export default authSlice.reducer;
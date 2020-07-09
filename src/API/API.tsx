import axios from "axios";


const axiosInstance = axios.create(
    {
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
        headers: {'API-KEY': '3de0712e-e19a-4637-bf5e-355c7a8ad46c'}
    },
);

export const friendsAPI = {
    getUsers(currentPage: number, pageSize: number) {
        debugger
        return (
            axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => response.data)

        )
    },
    follow(userId: number) {
        return (
            axiosInstance.post(`follow/${userId}`)
        )
    },
    unFollow(userId: number) {
        return (
            axiosInstance.delete(`follow/${userId}`)
        )
    },
}

export const profileAPI = {
    getProfileInfo(userId: string) {
        return (
            axiosInstance.get(`profile/${userId}`)
        )
    }
}


type GetAuthInfoType = {
    data: { id: number, email: string, login: string }
    resultCode: number
    messages: Array<string>
}

export const authAPI = {
    getAuthInfo() {
        return (
            axiosInstance.get<GetAuthInfoType>(`auth/me`)
        )
    }
}



import axios from "axios";


const axiosInstance = axios.create(
    {
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
        headers: {'API-KEY': '3de0712e-e19a-4637-bf5e-355c7a8ad46c'}
    },
);

export const userAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return (
            axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => response.data)

        )
    }
}

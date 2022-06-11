import axios from 'axios'
const apiClient = axios.create({
    baseURL: "/api",
    withCredentials: true,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})

export default {
    loginWithCredentials(userid: string, password: string) {
        return apiClient.post('/login',
            {
                userid: userid,
                password: password
            }
        )
    },
    logout() {
        // 404? 路由不对吗
        return apiClient.get('/login/logout')
    }
}
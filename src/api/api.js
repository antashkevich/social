import * as axios from 'axios';

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "678c75af-36b1-48ef-970e-df9f1f4c29ea",
    },
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    followUser(id){
        return instance.post(`follow/${id}`);
    },
    unfollowUser(id){
        return instance.delete(`follow/${id}`);
    },
};

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status){
        return instance.put('profile/status', { status: status});
    },
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(r => r.data);
    }
};

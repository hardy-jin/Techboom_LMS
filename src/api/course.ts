import request from '@/utils/request';

// mock data
export function getCourseById() {
    return request({
        url: '/getCourseById',
        method: 'get',
    });
}
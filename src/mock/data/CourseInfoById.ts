import Mock, { Random } from 'mockjs';

const course = {
    id: Random.id(),
    name: '计算机网络技术及应用实验',
    code: Random.integer(10000000,80000000),
    url: Random.url('http'),
    createTime: Random.datetime('y-MM-dd HH:mm'),
    updateTime: Random.datetime('y-MM-dd HH:mm'),
    description: '计算机网络技术及应用实验',
    img: '/src/assets/cover/class1.webp'
}

export default {
    // 查
    getCourse: () => {
        return {
           course: course
        }
    },
    // 增
    create: () => ({
        result: true,
        data: 'success'
    }),
    // 改
    update: () => ({
        result: true,
        data: 'success'
    })
}


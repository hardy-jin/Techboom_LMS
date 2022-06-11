import Mock, { Random } from 'mockjs';

const courses = [{ _id: '5bbdd142cc194f2aa87a9c90', name: '计算机网络技术及应用实验', teacher: Array(1), description: '计算机网络技术及应用实验', img: '/src/assets/cover/class1.webp' },
{ _id: '5bbdd17ecc194f2aa87a9c91', name: '互联网应用及维护实训', teacher: Array(1), description: '互联网应用及维护实训', img: '/src/assets/cover/class2.webp' },
{ _id: '5bbdd191cc194f2aa87a9c92', name: '网络工程师认证实训', teacher: Array(1), description: '网络工程师认证实训', img: '/src/assets/cover/class3.webp' },
{ _id: '5bc5bb9df84d0f1e90e5db26', name: '信息安全导论', teacher: Array(1), description: '信息安全导论', img: '/src/assets/cover/class4.jpg' },
{ _id: '618ade8bf9af6e71556d5b50', name: '大学物理', description: '123', teacher: Array(1), semester: '1819b', img: '/src/assets/cover/class5.webp' },
{ _id: '618b14b73042407185d645bf', name: '概率论', description: 'Python是一种计算机编程语言。计算机编程语言和我们日常使用的自然语言有所不同，最大的区别就是，自…者解释器就是负责把符合语法的程序代码转换成CPU能够执行的机器码，然后执行。Python也不例外。', teacher: Array(1), semester: '1819b', img: '/src/assets/cover/class6.webp' },
{ _id: '618b14ee3042407185d645c1', name: 'python程序设计', description: 'Python是一种计算机编程语言。计算机编程语言和我们日常使用的自然语言有所不同，最大的区别就是，自…者解释器就是负责把符合语法的程序代码转换成CPU能够执行的机器码，然后执行。Python也不例外。', teacher: Array(1), semester: '1920a', img: '/src/assets/cover/class7.webp' },
{ _id: '618b15623042407185d645c2', name: 'Java高级编程语言', description: '从互联网到企业平台，Java是应用最广泛的编程语言，原因在于：\n\nJava是基于JVM虚拟机的跨平台…高度优化的性能，且经过了长时期的考验；\n\nJava拥有最广泛的开源社区支持，各种高质量组件随时可用', teacher: Array(1), semester: '1920a', img: '/src/assets/cover/class8.webp' }]

export default {
    // 查
    getCourses: () => {
        return {
            courses: courses
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

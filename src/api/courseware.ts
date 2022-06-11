import request from '@/utils/request';

// upload file
export function uploadCourseWare(data: any) {
    return request({
        url: '/courseware/file/618ade8bf9af6e71556d5b50',
        method: 'post',
        headers: { 'mimeType': 'multipart/form-data', },
        data
    });
}

// get course videos
export function getVideoList() {
    // return request({
    //     url: '/courseware/videolist/618ade8bf9af6e71556d5b50', //course "test2", 改成存bilibili的链接？
    //     method: 'get',
    // });

    //fake data
    return [
        {
          date: '2016-05-03',
          title: '课程要求',
          description: 'No. 189, Grove St, Los Angeles',
          url: "//player.bilibili.com/player.html?aid=712020469&bvid=BV1wD4y1o7AS&cid=234725733&page=1"
        },
        {
          date: '2016-05-02',
          title: '第一课 网络安全导论',
          description: 'No. 189, Grove St, Los Angeles',
          url: "//player.bilibili.com/player.html?aid=712020469&bvid=BV1wD4y1o7AS&cid=234725733&page=1"
        },
        {
          date: '2016-05-04',
          title: '实验1 Windows网络配置命令使用',
          description: 'No. 189, Grove St, Los Angeles',
          url: "//player.bilibili.com/player.html?aid=712020469&bvid=BV1wD4y1o7AS&cid=234725733&page=1"
        },
        {
          date: '2016-05-01',
          title: '实验2 PGP加密文件使用',
          description: 'No. 189, Grove St, Los Angeles',
          url: "//player.bilibili.com/player.html?aid=712020469&bvid=BV1wD4y1o7AS&cid=234725733&page=1"
        },
      ]
}
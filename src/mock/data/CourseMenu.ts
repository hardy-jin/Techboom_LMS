import Mock, { Random } from 'mockjs';

const courseMenu = [
    {
      "file_name": "第一章",
      "id": 1,
      "isParent": true,
      "children": [
        {
          "id": 11,
          "isParent": false,
          "type": "text",
          "_id": {
            "$oid": "5bc873fb2dc2c80cdbbca35b"
          },
          "course_id": "5bc5bb9df84d0f1e90e5db26",
          "file_id": "8df28d38",
          "file_name": "课前预习"
        },
        {
          "id":12,
          "isParent": false,
          "type": "video",
          "_id": {
            "$oid": "5bc873f12dc2c80cdbbca359"
          },
          "course_id": "5bc5bb9df84d0f1e90e5db26",
          "file_id": "4a078c28",
          "file_name": "第一课 网络安全导论"
        },
        {
          "id":12,
          "isParent": false,
          "type": "file",
          "_id": {
            "$oid": "5bc873f12dc2c80cdbbca359"
          },
          "course_id": "5bc5bb9df84d0f1e90e5db26",
          "file_id": "4a078c28",
          "file_name": "实验1  Windows网络配置命令使用.doc"
        },
        {
          "id": 13,
          "isParent": false,
          "type": "file",
          "_id": {
            "$oid": "5bc873fb2dc2c80cdbbca35b"
          },
          "course_id": "5bc5bb9df84d0f1e90e5db26",
          "file_id": "8df28d38",
          "file_name": "实验2  PGP加密文件使用.docx"
        },
        {
          "id": 14,
          "isParent": false,
          "type": "homework",
          "_id": {
            "$oid": "5bc873fb2dc2c80cdbbca35b"
          },
          "course_id": "5bc5bb9df84d0f1e90e5db26",
          "file_id": "8df28d38",
          "file_name": "课后练习"
        }
      ]
    },
    {
      "file_name": "第二章",
      "id": 2,
      "isParent": true,
      "children": [
        {
          "id": 21,
          "isParent": false,
          "type": "video",
          "_id": {
            "$oid": "5bc879fd2dc2c80cdbbca362"
          },
          "course_id": "5bc5bb9df84d0f1e90e5db26",
          "file_id": "d353b170",
          "file_name": "第一课 信息安全概论.pdf"
        },
        {
          "id": 22,
          "isParent": false,
          "type": "video",
          "_id": {
            "$oid": "5bc87a082dc2c80cdbbca364"
          },
          "course_id": "5bc5bb9df84d0f1e90e5db26",
          "file_id": "5cfbe199",
          "file_name": "第二课 信息加密.pdf"
        },
        {
          "id": 23,
          "isParent": false,
          "type": "video",
          "_id": {
            "$oid": "5bdacb9f333fc8068e509aff"
          },
          "course_id": "5bc5bb9df84d0f1e90e5db26",
          "file_id": "cc61f52d",
          "file_name": "第三课 无线网络安全.pdf"
        }
      ]
    }
  ]

export default {
    // 查
    getCourseMenu: () => {
        return {
           courseMenu: courseMenu
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


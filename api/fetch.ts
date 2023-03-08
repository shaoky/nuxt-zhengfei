import axios from 'axios';

export default async (
    url: string = '',
    params: object,
    method: any = 'get',
) => {
    return new Promise((resolve, reject) => {
        axios({
            baseURL: 'http://api.zhengfei.shaoky.com',
            url,
            method,
            params: method === 'get' ? params : {},
            data: method === 'post' ? params : {},
            responseType: 'json'
        }).then(res => {
            if (res.data.code === 200) {
                resolve(res.data.data)
            } else {
                reject(res.data)
            }
        }).catch(err => {
            reject(err)
        })
    })
}
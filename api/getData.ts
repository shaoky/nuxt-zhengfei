import fetch from './fetch'

export const getNav = (data: any) => fetch('/pc/nav/list', data, 'get')
export const getProductCategory = (data: any) => fetch('/pc/goods/type/list', data, 'get')
export const getProducts = (data: any) => fetch('/pc/goods/list', data, 'get')
export const getProductInfo = (data: any) => fetch('/pc/goods/info', data, 'get')
export const getNews = (data: any) => fetch('/pc/article/list', data, 'get')
export const getNewsInfo = (data: any) => fetch('/pc/article/info', data, 'get')
export const getWebConfig = () => fetch('/pc/config', {}, 'get')
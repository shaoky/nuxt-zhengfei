<template>
    <div>
        <web-header></web-header>
        <div class="wrap">
            <div class="news-title">
                <h1>{{news.title}}</h1>
                <div class="info">
                    <span>来源：本站</span>
                    <span>时间：{{news.createTime}}</span>
                    <span>浏览：{{news.viewCount || 1}}次</span>
                </div>
            </div>
            <div class="news-content" v-html="news.content"></div>
        </div>
    </div>
</template>

<script>
import { getNewsInfo, getProductCategory } from '@/api/getData'
import webHeader from '@/components/web-header.vue'

export default {
    components: {
        webHeader
    },
    head() {
        return {
            title: `${this.news.title}-${this.head.title}`
        }
    },
    async asyncData({params, app}) {
        const categorys  = await getProductCategory({})
        const news = await getNewsInfo({id: params.id || 0})
        return {
            head: app.head,
            categorys,
            news: news.info
        }
    }
}

</script>

<style lang="less" scoped>
.wrap {
    max-width: 1300px;
}
.news-title {
    padding-bottom: 15px;
    text-align: center;
    border-bottom: 1px dotted #DBDBDB;
    h1 {
        font-weight: 100;
        font-size: 20px;
    }
    .info {
        margin-top: 10px;
        span {
            margin-right: 20px;
        }
    }
}
.news-content {
    margin-top: 15px;
    line-height: 27px;
    font-size: 14px;
}
</style>

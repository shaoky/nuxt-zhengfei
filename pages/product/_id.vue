<template>
    <div>
        <web-header></web-header>
        <div class="wrap">
            <div class="product-title">
                <h1>{{product.title}}</h1>
                <div class="info">
                <span>来源：本站</span>
                <span>浏览：{{product.viewCount || 1}}次</span>
                </div>
            </div>
            <div class="product-content" v-html="product.content"></div>
        </div>
        <web-footer></web-footer>
    </div>
</template>

<script>
import { getProductInfo } from '@/api/getData'
import webHeader from '@/components/web-header.vue'
import webFooter from '@/components/web-footer.vue'
import page from '@/components/page.vue'

export default {
    components: {
        webHeader,
        webFooter,
        page
    },
    head() {
        return {
           title: `${this.product.title}-${this.head.title}`
        }
    },
    async asyncData({params,app}) {
        const product = await getProductInfo({id: params.id})
        return {
            head: app.head,
            product: product.info
        }
    }
}

</script>

<style lang="less" scoped>
.product-title {
    margin-top: 50px;
    padding-bottom: 15px;
    text-align: center;
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
.product-content {
    margin-top: 15px;
    line-height: 27px;
    font-size: 14px;
    text-align: center;
    /deep/img {
        max-width: 100%;
    }
}
</style>

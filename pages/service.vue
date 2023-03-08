<template>
    <div>
        <web-header></web-header>
        <div class="wrap">
            服务
        </div>
    </div>
</template>

<script>
import { getProductCategory, getNewsInfo } from '@/api/getData'
import webHeader from '@/components/web-header.vue'

export default ({
    components: {
        webHeader
    },
    head() {
        return {
            title: `服务-${this.head.title}`
        }
    },
    async asyncData({app}) {
        const categorys  = await getProductCategory({});
        const company = await getNewsInfo({ id: 6 })
        return {
            head: app.head,
            categorys,
            company: company.info
        }
    }
})
</script>

<style lang="less" scoped>
.main-content {
    line-height: 27px;
}
</style>

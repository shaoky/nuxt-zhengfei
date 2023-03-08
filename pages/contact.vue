<template>
    <div>
        <web-header></web-header>
        <div class="wrap">
            <baidu-map
                id="allmap" 
                class="bm-view" 
                :center="center" 
                :zoom="zoom" 
                :scroll-wheel-zoom="true" 
                @click="mapClick"
                ak="O3aiwCPwChwQFcEoXXu0nzuS315TtqW8">
                <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
                <bm-marker :position="center" :dragging="true" @click="infoWindowOpen"></bm-marker>
                <!-- animation="BMAP_ANIMATION_BOUNCE" -->
                <!-- <bm-info-window :position="center" :show="false"  @close="infoWindowClose" @open="infoWindowOpen">
                <p>{{config.webTitle}}</p>
                <p>联系人：{{config.linkman}}</p>
                <p>手机：{{config.tel}}</p>
                <p>地址：{{config.address}}</p>
                </bm-info-window> -->
            </baidu-map>
        </div>
        <web-footer></web-footer>
    </div>
</template>
<script>
import { getProductCategory, getWebConfig, getNewsInfo } from '@/api/getData'
import webHeader from '@/components/web-header.vue'
import webFooter from '@/components/web-footer.vue'
// import BaiduMap from 'vue-baidu-map/components/map/Map.vue'

export default ({
    components: {
        webHeader,
        webFooter
    },
    data() {
        return {
            zoom: 13,
            content: '11111111',
            show: false
        }
    },
    head() {
        return {
            title: `联系-${this.head.title}`
        }
    },
    async asyncData({app}) {
        const categorys  = await getProductCategory({})
        const config = await getWebConfig()
        const center = {
            lng: config.baiduMapX,
            lat: config.baiduMapY
        }
        return {
            head: app.head,
            categorys,
            config,
            center
        }
    },
    methods: {
        infoWindowOpen() {
            this.show = true
        },
        infoWindowClose () {
            this.show = false
        },
        mapClick(e) {
            console.log(e)
        }
    }
})
</script>

<style lang="less" scoped>
.main-content {
    line-height: 27px;
}
.bm-view {
    width: 100%;
    height: 400px;
    margin-top: 50px;
}
</style>

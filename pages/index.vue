<template>
    <div>
        <web-header></web-header>
        <web-banner></web-banner>
        <div class="wrap-index">
            <div class="category">
                <span 
                    v-for="item in categorys" 
                    :class="{active: item.id === categoryActiveId}"
                    @click="categoryActiveId = item.id"
                >{{ item.title }}</span>
            </div>
            <div class="products">
                <div class="products-item" v-for="item in products">
                    <nuxt-link :to="{name: 'product-id', params: { id: item.id }}">
                        <img :src="item.imageUrl" alt="">
                    </nuxt-link>
                </div>
                <div class="clear"></div>
            </div>
            <div class="products-more">
                <nuxt-link :to="{name: 'product-type-id', params: { id: categoryActiveId }}">点击查看更多案例</nuxt-link>
            </div>

            <div class="brand">
                <div class="center">
                    <div class="title">品牌解决方案</div>
                    <div class="des">
                        <p>我们根据您的品牌发展所处的不同阶段，针对性的提出解决方案</p>
                        <p>并根据当前的市场规律和变化统一规划，分阶段执行，提供基于进化式的全程品牌服务策略，为你的品牌发展提供持续不断的动力！</p>
                    </div>
                    <div class="brand-list">
                        <div class="item">
                            <div class="title">初创品牌</div>
                            <div class="image">
                                <img src="/brand01.jpg">
                            </div>
                            <div class="des">
                                <p>没有品牌，客户记不住</p>
                                <p>没有品牌，陷于价格战，产品无溢价空间</p>
                                <p>没有品牌，无法与同行竞争</p>
                                <p>想做品牌，不知如何开始？</p>
                            </div>
                            <div class="btn">
                                <a href="tencent://message/?uin=目标123456号&Site=qq&Menu=yes">立即咨询</a>
                            </div>
                        </div>
                        <div class="item">
                            <div class="title">发展中品牌</div>
                            <div class="image">
                                <img src="/brand02.jpg">
                            </div>
                            <div class="des">
                                <p>以前的品牌系统已无法适应现在的市场需求</p>
                                <p>品牌整体形象应用混乱，执行难度大</p>
                                <p>集团下多个品牌相互竞争，定位模糊不清</p>
                                <p>线上线下形象不统一，产品力，传播力不够</p>
                            </div>
                            <div class="btn">
                                <a href="tencent://message/?uin=目标123456号&Site=qq&Menu=yes">立即咨询</a>
                            </div>
                        </div>
                        <div class="item">
                            <div class="title">成熟型品牌</div>
                            <div class="image">
                                <img src="/brand03.jpg">
                            </div>
                            <div class="des">
                                <p>品牌目标消费人群结构发生变化，比如品片人群年轻化,原品牌缺乏活力和粘性，品牌战略方向调整，需要更新品牌形象，以满足新的发展需求</p>
                                <p>品牌市场布局发生变化，国内讯往国际市场延伸，外销转内销，需要全新的品牌支撑品牌产品布局或推广渠道发生变化，需要全新的品牌形象支撑</p>
                            </div>
                            <div class="btn">
                                <a href="tencent://message/?uin=目标123456号&Site=qq&Menu=yes">立即咨询</a>
                            </div>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
            </div>

            <!-- 合作 -->
            <div class="cooperation">
                <div class="top">
                    <h2>主要为科技制造，民宿文旅，餐饮，电商，贸易等中小企业提供VI设计服务</h2>
                    <div class="en">Mainly for technology manufacturing, accommodation culture and tourism, catering, e-commerce and other small and medium-sized enterprises to provide VI design services</div>
                </div>
                <div class="bottom">
                    <div class="item">
                        <span class="num">1</span>
                        <span class="text">一站式设计服务</span>
                    </div>
                    <div class="item">
                        <span class="num">14+</span>
                        <span class="text">14年专业历程</span>
                    </div>
                    <div class="item">
                        <span class="num">200+</span>
                        <span class="text">与超过1000家企业精诚合作</span>
                    </div>
                    <div class="item">
                        <span class="num">1500+</span>
                        <span class="text">2000个以上项目实战经验</span>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>

            <!-- 选择我们 -->
            <div class="advantage">
                <div class="center">
                    <div class="advantage-title animate__animated animate__zoomInDown">为什么选择我们？</div>
                    <div class="advantage-desc">策略先行 差异化设计 懂创意 更懂营销</div>
                    <div class="advantage-box">
                        <div class="images">
                            <img src="/advantage01.png" ref="images1" class="animate__animated1" v-show="advantageIndex === 0">
                            <img src="/advantage02.png" ref="images2" class="animate__animated1 animate__fadeIn1" v-show="advantageIndex === 1">
                            <img src="/advantage03.png" ref="images3" class="animate__animated1 animate__fadeIn1" v-show="advantageIndex === 2">
                            <img src="/advantage04.png" ref="images4" class="animate__animated1 animate__fadeIn1" v-show="advantageIndex === 3">
                        </div>
                        <div class="list">
                            
                            <div class="item" @mouseover="mouseover(0)">
                                <div class="bottom">
                                    <div class="title">策略先行</div>
                                    <div class="subtitle">策略精准，效益倍增</div>
                                    <div class="desc">我们有专门的营销策划师，所有的设计都会基于目标市场、产品、目标消费者等因素进行严谨的策略规划，从而让您的品牌赢得市场。</div>
                                </div>
                            </div>
                            <div class="item" @mouseover="mouseover(1)">
                                <div class="bottom">
                                    <div class="title">差异创意</div>
                                    <div class="subtitle">路子有点野，却与众不同</div>
                                    <div class="desc">
                                        <p>没有创意，就没有差异!</p>
                                        <p>没有差异，就没有记忆!</p>
                                        <p>没有记忆，就没有生意!</p>
                                    </div>
                                </div>
                            </div>
                            <div class="item" @mouseover="mouseover(2)">
                                <div class="bottom">
                                    <div class="title">高效输出</div>
                                    <div class="subtitle">团队协同作战</div>
                                    <div class="desc">
                                        <p>科学的流程，总监全盘布局</p>
                                        <p>团队头脑风暴，明确方向</p>
                                        <p>然后分工合作协同作战，快速输出</p>
                                    </div>
                                </div>
                            </div>
                            <div class="item" @mouseover="mouseover(3)">
                                <div class="bottom">
                                    <div class="title">合作灵活</div>
                                    <div class="subtitle">整体策划分阶段执行，顾问式服务</div>
                                    <div class="desc">
                                        <p>战略全局规划，分阶段输出，能根据市场作出灵活调整，成体系，成本低，熟悉每一个环节，易于落地</p>
                                    </div>
                                </div>
                            </div>
                            <div class="clear"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="news">
                <div class="center">
                    <div class="left">
                        <div class="title">
                            <h2>观点分享</h2>
                        </div>
                        <div class="list">
                            <div class="item" v-for="item in news">
                                <div class="img">
                                    <nuxt-link :to="{name: 'news-id', params: { id: item.id }}">
                                        <img :src="item.imageUrl" :alt="item.title">
                                    </nuxt-link>
                                </div>
                                <div class="title multi-ellipsis-2">
                                    <nuxt-link :to="{name: 'news-id', params: { id: item.id }}">{{ item.title }}</nuxt-link>
                                </div>
                                <div class="desc">{{ item.desc }}</div>
                            </div>
                            <div class="clear"></div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="title">经典案例</div>
                        <div class="list">
                            <!-- <div class="item" v-for="item in rollingList" :key="item.id"></div> -->
                        </div>
                        <!-- <rolling :data="rollingList"></rolling> -->
                    </div>
                    <div class="clear"></div>
                    <!-- <div class="news-text">
                        <p>相信品牌的力量，彰显整合的价值</p>
                        <span>帮助客户以更少的成本投入，整合全方位的营销视觉，获得成倍的价值转换是标派持续追求的专业素养</span>
                    </div> -->
                </div>
            </div>
            <div class="clear"></div>
            <web-footer></web-footer>
        </div>
    </div>
</template>

<script>
import { getNews, getProductCategory, getProducts } from '@/api/getData'
import webBanner from '@/components/web-banner.vue'
import webHeader from '@/components/web-header.vue'
import webFooter from '@/components/web-footer.vue'

export default {
    components: {
        webHeader,
        webBanner,
        webFooter,
    },
    data() {
        return {
            advantageIndex: 0
        }
    },
    computed: {
        products() {
            return this.productList.find(item => item.id === this.categoryActiveId).children
        }
    },
    async asyncData() {
        let news = await getNews({type: 3})
        let categorys = await getProductCategory({})
        const product = await getProducts({page: 1, size: 9999, type: 0})
        let productList = []
        for (let item of product.list) {
            let find = productList.find(f => f.id === item.goodsClassId)
            if (find) {
                if (find.children.length < 8) {
                    find.children.push(item)
                }
            } else {
                productList.push({
                    id: item.goodsClassId,
                    children: [item]
                })
            }
        }

        return {
            news: news.list,
            categorys,
            productList: productList,
            categoryActiveId: categorys[0].id
        }
    },
    methods: {
        mouseover(val) {
            this.advantageIndex = val
        }
    }
}

</script>

<style lang="less" scoped>

.wrap-index {
    padding-top: 30px;
    position: relative;
    z-index: 300;
    background: #f5f5f5;
}
.category {
    padding: 30px 0;
    text-align: center;
    span {
        display: inline-block;
        padding: 20px 15px;
        font-size: 14px;
        color: #555;
        cursor: pointer;
        
        &.active {
            color: #fff;
            background: #000;
        }
    }
}
.products {
    width: 100%;
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    &:after {
        clear: both;
    }
}
.products-item {
    width: 25%;
    img {
        display: block;
        width: 100%;
        height: 100%;
    }
}
.products-more {
    width: 14.75%;
    min-width: 150px;
    margin: 25px auto;
    padding: 1.3vw 0;
    border: 2px solid #999;
    font-size: 1.13vw;
    text-align: center;
    color: #656565;
    cursor: pointer;
    &:hover {
        border: 2px solid #b40c39;
        background: #b40c39;
        a {
            color: #fff;
        }
    }
}

.brand {
    width: 100%;
    background: #f5f5f5;
    // padding: 105px 0 100px;
    padding-top: 105px;
    .center >.title {
        font-size: 45px;
        font-weight: bold;
        color: #000;
    }
    .des {
        margin-top: 12px;
        font-size: 16px;
        line-height: 27px;
    }
}
.brand-list {
    margin-top: 80px;
    padding-bottom: 60px;
    .item {
        width: 31%;
        float: left;
        margin-right: 3.5%;
        .title {
            font-size: 20px;
            padding-bottom: 20px;
            margin-bottom: 20px;
            border-bottom: 1px solid #ddd;
            color: #000;
            font-weight: bold;
        }
        img {
            width: 100%;
        }
        .btn {
            margin-top: 40px;
            width: 170px;
            // padding: 15px;
            background: #fff;
            text-align: center;
            font-size: 18px;
            transition: all 0.3s;
            box-sizing: border-box;
            cursor: pointer;
            a {
                display: block;
                padding: 15px;
                border: 1px solid #000;
                color: #000;
                &:hover {
                    border: 1px solid #b40c39;
                    background: #b40c39;
                    color: #fff;
                }
            }
        }
        &:nth-child(3) {
            margin-right: 0;
        }
    }
   
}

.cooperation {
    .top {
        background: url('/cooperation-bg.jpg') no-repeat 100% 100%;
        padding: 10vw 0 12vw;
        h2 {
            width: 912px;
            margin: 0 auto;
            font-size: 48px;
            color: #fff;
            text-align: center;
            &::after {
                content: "";
                display: block;
                width: 140px;
                background-color: #fff100;
                height: 5px;
                margin: 2vw auto;
            }
        }
        .en {
            width: 912px;
            margin: 0 auto;
            margin-top: 20px;
            text-align: center;
            font-size: 20px;
            color: #fff;
        }
    }
    .bottom {
        margin: 0 auto;
        padding: 5.2vw 0 4vw;
        background: #000;
        text-align: center;
        .item {
            float: left;
            text-align: center;
            .num {
                display: block;
                font-size: 53px;
                color: #fff100;
            }
            .text {
                display: block;
                font-size: 17px;
                color: #fff;
                line-height: 35px;
            }
            &:nth-child(1) {
                width: 14%;
            }
            &:nth-child(2) {
                width: 31%;
            }
            &:nth-child(3) {
                width: 24%;
                margin-right: 8%;
            }
            &:nth-child(4) {
                width: 22%;
            }
        }
    }
}

.advantage {
    margin-top: 100px;
    .advantage-title {
        font-size: 40px;
        color: #454545;
        text-align: center;
    }
    .advantage-desc {
        margin-top: 15px;
        font-size: 16px;
        text-align: center;
    }
}

.advantage-box {
    height: 32.85vw;
    position: relative;
    margin-top: 35px;
    .images {
        position: absolute;
        width: 100%;
        height: 100%;
    
        img {
            width: 100%;
            height: 100%;
            display: block;
        }
    }
    .list {
        position: relative;
        height: 100%;
        z-index: 5;
        .item {
            width: 25%;
            height: 100%;
            float: left;
            position: relative;
            border-right: 1px solid rgba(255, 255, 255, 0.1);
            .bottom {
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                color: #fff;
                padding: 4% 8%;
                .title {
                    font-size: 28px;
                }
                .subtitle {
                    margin-top: 15px;
                    font-size: 14px;
                }
                .desc {
                    margin-top: 20px;
                    font-size: 14px;
                }
            }
            &:hover {
                background-color: rgba(0, 0, 0, 0.2);
            }
        }
    }
}

.news {
    padding-top: 125px;
    padding-bottom: 80px;
    background: #f5f5f5;
    .left {
        width: 74%;
        overflow: hidden;
        background: #fff;
        float: left;
        padding: 5px 15px 15px 15px;
        >.title {
            display: flex;
            align-items: center;
            a {
                color: #414141;
            }
            h2 {
                flex: 1;
                padding: 30px 17px;
                font-size: 24px;
                color: #414141;
            }
            .more {
                margin-right: 20px;
                font-size: 16px;
            }
        }
        .list {
            .item {
                width: 32%;
                float: left;
                margin-right: 2%;
                padding-bottom: 5px;
                margin-bottom: 20px;
                .img {
                    width: 100%;
                    min-height: 100px;
                    overflow: hidden;
                    img {
                        width: 100%;
                        height: 100%;
                        display: block;
                        transition: all 0.7s;
                        &:hover {
                            transform: scale(1.05);
                        }
                    }
                }
                .title {
                    a {
                        display: block;
                        height: 38px;
                        margin: 20px 0 10px 0;
                        font-size: 14px;
                        color: #000;
                    }
                    
                }
                .desc {
                    height: 60px;
                    line-height: 21px;
                    overflow: hidden;
                    font-size: 12px;
                }
                &:nth-child(3n) {
                    margin-right: 0;
                }
            }
        }
    }

    .right {
        float: right;
        width: 25%;
        overflow: hidden;
        background: #fff;
        >.title {
            padding: 30px 17px;
            font-size: 24px;
            color: #414141;
        }
    }
}

.news-text {
    margin: 60px 0 0 0;
    p {
        font-size: 45px;
        color: #414141;
    }
    span {
        padding-top: 5px;
        color: #757575;
        font-size: 14px;
    }
}

@media screen and (max-width: 750px) {
    .category {
        padding: 0;
        span {
            padding: 10px 15px;
            background: #fff;
            margin: 0 5px 10px 5px;
        }
        a {
            font-size: 13px;
        }
    }
    .products-item {
        width: 50%;
        
    }
    .products-more {
        font-size: 14px;
    }
    .brand {
        padding-top: 50px;
        .center {
            >.title {
                font-size: 22px;
            }
            .des {
                font-size: 12px;
            }
            .brand-list {
                .item {
                    width: 100%;
                    margin-bottom: 20px;
                    margin-right: 0;
                    .title {
                        font-size: 16px;
                    }
                    .btn {
                        width: 85px;
                        font-size: 14px;
                        margin-top: 20px;
                        a {
                            padding: 8px;
                        }
                    }
                }
            }
        }
    }

    .cooperation {
        .top {
            padding-left: 10%;
            padding-right: 10%;
            h2 {
                width: 100%;
                font-size: 18px;
                &:after {
                    margin: 30px auto;
                    width: 80px;
                }
            }
            .en {
                width: 100%;
                font-size: 14px;
                line-height: 24px;
            }
        }
        .bottom {
            .item {
                width: 50%!important;
                margin-right: 0!important;
                .num {
                    font-size: 30px;
                }
                .text {
                    font-size: 14px;
                }
            }
        }
    }
    .advantage {
        margin-top: 50px;
        .advantage-title  {
            font-size: 24px;
        }
        .advantage-desc {
            font-size: 14px;
        }
    }
    .advantage-box {
        .images {
            display: none;
        }
        .list {
            .item {
                width: 100%;
                height: initial;
                margin-bottom: 7px;
                &:nth-child(1) {
                    background: url('/advantage01.png') no-repeat;
                    background-size: cover;
                }
                &:nth-child(2) {
                    background: url('/advantage02.png') no-repeat;
                    background-size: cover;
                }
                &:nth-child(3) {
                    background: url('/advantage03.png') no-repeat;
                    background-size: cover;
                }
                &:nth-child(4) {
                    background: url('/advantage04.png') no-repeat;
                    background-size: cover;
                }
                .bottom {
                    position: initial;
                    .title {
                        font-size: 20px;
                    }
                    .subtitle {
                        font-size: 14px;
                    }
                    .desc {
                        font-size: 12px;
                        line-height: 23px;
                    }
                }
            }
        }
    }

    .news {
        .left {
            width: 100%;
            height: auto;
            .list {
                .item {
                    width: 100%;
                }
            }
        }
        .right {
            display: none;
        }
    }

}
</style>


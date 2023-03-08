<template>
    <div class="banner">
        <client-only>
            <swiper
                ref="carousel"
                class="swiper"
                :options="swiperOptions"
            >
                <swiper-slide v-for="(item, index) in list" :key="index">
                    <div class="content">
                        <div class="title" v-html="item.title"></div>
                        <div class="subtitle" v-html="item.subtitle"></div>
                        <div class="desc">{{item.desc}}</div>
                    </div>
                    <img :src="item.imageUrl">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </client-only>
    </div>
</template>
<script>
export default {
    components: {
    },
    data() {
        return {
            isInit: false,
            mySwiper: null,
            swiperOptions: {
                loop: true,
                autoplay: 5000,
                slidesPerView: 'auto',
                centeredSlides: true,
                spaceBetween: 30,
                pagination: {
                    el: '.swiper-pagination',
                    dynamicBullets: true
                }
            },
            list: [
                {
                    imageUrl: '/b01.jpg',
                    url: '/',
                    title: '基于进化的品牌<br/>塑造体系',
                    subtitle: '建立品牌基因，塑造品牌符号，打造品牌营销工具，品牌高效传播<br/>简单四步，统一策划，分阶段执行',
                    desc: '助力品牌提升，让您的生意更好做!'
                },
                {
                    imageUrl: '/b02.jpg',
                    url: '/'
                },
                {
                    imageUrl: '/b03.jpg',
                    url: '/'
                },
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.banner {
    width: 100%;
    position: relative;
    height: 45vw;
    overflow: hidden;
    margin: 0 auto;
    z-index: 100;
}

.swiper  {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    .content {
        position: absolute;
        top: 22%;
        left: 0;
        right: 0;
        width: 87.4%;
        margin: 0 auto;
        color: #fff;
        .title {
            font-size: 60px;
        }
        .subtitle {
            margin-top: 20px;
            font-size: 22px;
        }
        .desc {
            margin-top: 90px;
            font-size: 22px;
        }
    }
}
img {
    width: 100%;
    height: 100%;
    display: block;
}

@media screen and (max-width: 750px) {
    .banner {
        height: 55vw;
    }
    .swiper {
        top: 50px;
        .content {
            top: 12%;
            .title {
                font-size: 18px;
                font-weight: 700;
            }
            .subtitle {
                margin-top: 10px;
                font-size: 13px;
            }
            .desc {
                margin-top: 10px;
                font-size: 13px;
            }
        }
    }
}
</style>

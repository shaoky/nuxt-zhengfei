<template>
    <header :class="{scroll: isScroll}">
        <div class="center">
            <div class="logo">
                <img src="/logo.png" alt="" v-if="!isScroll">
                <img src="/logo1.png" alt="" v-else>
            </div>
            <div class="logo-h5">
                <img src="/logo1.png" alt="">
            </div>
            <div class="nav">
                <div class="item" v-for="(item, index) in list" :key="index" :class="{active: $route.path === item.url && item.url !== '/'}">
                    <nuxt-link :to="item.url">{{item.title}}</nuxt-link>
                </div>
            </div>
            <div class="burger" @click="openNav">
                <div class="a" :class="{rotate45: isOpenNav}"></div>
                <div class="b" :style="{display: isOpenNav ? 'none' : 'block'}"></div>
                <div class="c" :class="{rotate135: isOpenNav}"></div>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    data() {
        return {
            isOpenNav: false,
            isScroll: false,
            list: [
                {
                    title: '首页',
                    url: '/'
                },
                {
                    title: '服务',
                    url: '/service'
                },
                // {
                //     title: '方案',
                //     url: '/product/type/0'
                // },
                {
                    title: '作品',
                    url: '/product/type/28'
                },
                {
                    title: '关于',
                    url: '/company'
                },
                {
                    title: '联系',
                    url: '/contact'
                }
            ]
        }
    },
    created() {
        if (this.$route.name === 'index') {
        } else {
            this.isScroll = true
        }
    },
    mounted() {
        if (this.$route.name === 'index') {
            window.addEventListener('scroll',this.handleScroll)
        }
    },
    methods: {
        handleScroll() {
           let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop // 滚动条偏移量
           this.scrollVal = scrollTop
           if (scrollTop > 200) {
               this.isScroll = true
           } else {
               this.isScroll = false
           }
        },
        openNav() {
            const dom = document.getElementsByClassName('nav')[0]
            if (dom.style.display === 'none' || dom.style.display === '') {
                dom.style.display = 'block'
            } else {
                dom.style.display = 'none'
            }
            this.isOpenNav = !this.isOpenNav 
        }
    }
}
</script>

<style lang="less" scoped>
header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    width: 100%;
    height: 110px;
    margin: 0 auto;
    padding-top: 40px;
    transition-duration: .5s;
    .center {
        position: relative;
        display: flex;
    }
    .logo {
        // width: 200px;
        flex: 1;
        // background: url("/logo.png") no-repeat;
        img {
            width: 316px;
            height: 39px;
            display: block;
        }
    }
    .logo-h5 {
        display: none;
        img {
            width: 228px;
            height: 26px;
            display: block;
        }
    }
    .nav {
        display: flex;
        align-items: center;
        height: 45px;
        font-size: 14px;
        margin-right: 20px;
        .item {
            width: 60px;
            line-height: 45px;
            // background: url('/nav-item-bg.jpg') right no-repeat;
            text-align: center;
            a {
                display: block;
                text-decoration: none;
                color: #fff;
                &:hover {
                    color: #f00;
                }
            }
            &.active {
                a {
                    color: #f00;
                }
            }
            &:last-child {
                background: none;
            }
        }
    }
    .burger {
        position: absolute;
        top: 0;
        right: 20px;
        width: 27px;
        height: 37px;
        z-index: 99;
        display: none;
        div {
            position: absolute;
            width: 26px;
            height: 2px;
            transition: all .1s ease-out;
            background: #d60201;
            border-radius: 2px;
            margin: auto;
        }
        .a {
            top: 0;
        }
        .b {
            top: 9px;
        }
        .c {
            top: 18px;
        }
        .rotate45 {
            top: 9px;
            transform: rotate(45deg);
        }
        .rotate135 {
            transform: rotate(135deg);
            top: 9px;
        }
    }
}

.scroll {
    height: 83px;
    padding-top: 20px;
    background: #fff;
    border-bottom: 1px solid #eee;
    .nav {
        .item {
            a {
                color: #2c2c2c;
            }
        }
    }
}


@media screen and(max-width: 750px) {
    .scroll {
        padding: 15px 0;
        height: 50px;
        .nav {
            .item {
                a {
                    color: #fff;
                }
            }
        }
    }
    header {
        height: 50px;
        padding: 15px 0;
        background: #fff;
        .logo {
            display: none;
        }
        .logo-h5 {
            display: block;
        }
        .nav {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #c80036;
            z-index: 9999;
            margin-top: 50px;
            .item {
                width: 100%;
                text-align: left;
                text-indent: 20px;
                border-bottom: 1px solid rgba(255, 255, 255, .2);
                &.active {
                    a {
                        color: #fff;
                    }
                }
                a {
                    &:hover {
                        color: #fff;
                    }
                }
            }
        }
        .burger {
            display: block;
        }
    }
}
</style>

<template>
    <div class="left-nav">
        <div class="category">
            <div class="title">产品分类</div>
            <div class="content">
                <ul>
                    <li v-for="item in categorys" :key="item.id">
                        <nuxt-link :to="{name: 'product-type-id', params: {id: item.id}}">{{item.title}}</nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="contact">
            <div class="title">联系我们</div>
            <div class="content">
                <div class="item">联系人：{{config.linkman}}</div>
                <div class="item">手机：{{config.tel}}</div>
                <div class="item">邮箱：{{config.email}}</div>
                <div class="item">地址：{{config.address}}</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {}
    },
    props: {
        categorys: {
            type: Array,
        },
        config: {
            type: Object
        }
    },
}
</script>


<style lang="less" scoped>
.left-nav {
    width: 230px;
    float: left;
}

.title {
    height: 30px;
    line-height: 30px;
    text-indent: 20px;
    background: #157dba;
    color: #fff;
}
.category {
    .content {
        border: 1px solid #ccc;
        border-top: none;
        ul {
            width: 203px;
            margin: 0 auto;
            padding-top: 15px;
            li {
                height: 29px;
                margin-bottom: 15px;
                line-height: 29px;
                text-indent: 17px;
                font-size: 13px;
                background: url('/category-bg.jpg') no-repeat;
                a {
                    display: block;
                }
            }
        }
    }
}

.contact {
    margin-top: 20px;
    .content {
        border: 1px solid #ccc;
        border-top: none;
        padding: 10px;
        line-height: 25px;
        .item {

        }
    }
}
</style>

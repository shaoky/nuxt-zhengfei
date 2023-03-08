<template>
    <div>
        <web-header></web-header>
        <div class="wrap">
            <div class="category">
                <div class="item" v-for="item in categorys" :class="{active: item.id === id}">
                    <nuxt-link :to="{name: 'product-type-id', params: {id: item.id}}">{{ item.title }}</nuxt-link>
                </div>
                <div class="clear"></div>
            </div>
            <div class="clear"></div>
            <div class="products">
                <div class="item" v-for="item in products">
                    <div class="img">
                        <nuxt-link :to="{name: 'product-id', params: {id: item.id}}">
                            <img :src="item.imageUrl" :alt="item.title">
                        </nuxt-link>
                    </div>
                    <div class="title">
                        <nuxt-link :to="{name: 'product-id', params: {id: item.id}}">{{item.title}}</nuxt-link>
                        <span class="multi-ellipsis-2">{{ item.subtitle }}</span>
                    </div>
                </div>
            </div>
            <!-- <page class="mt20" :pageSize="size" :currentPage="currentPage" :total="count" @change="currentChange"></page> -->
            <web-footer></web-footer>
        </div>
    </div>
</template>

<script>
import { getProducts, getProductCategory } from '@/api/getData'
import webHeader from '@/components/web-header.vue'
import page from '@/components/page.vue'
import webFooter from '@/components/web-footer.vue'

export default {
    components: {
        webHeader,
        webFooter,
        page
    },
    data() {
        return {
            size: 8
        }
    },
    head() {
        return {
           title: `${this.currentName}-${this.head.title}`
        }
        
    },
    async asyncData({params, query, app}) {
        const categorys  = await getProductCategory({})
        const product = await getProducts({page: query.page || 1, size: 8, type: params.id})
        const find = categorys.find(item => item.id === +params.id)
        return {
            head: app.head,
            currentName: find.title,
            currentPage: +query.page,
            id: +params.id,
            categorys,
            products: product.list,
            count: product.count,
        }
    },
    methods: {
        async currentChange(value) {
            const product = await getProducts({page: value, size: this.size, type: this.id})
            this.products = product.list
            this.$router.push({name: 'product-type-id', params: { id: this.$route.params.id }, query: {page: value}})
        }
    }
}

</script>

<style lang="less" scoped>
.category {
    padding-top: 20px;
    .item {
        float: left;
        padding: 5px 10px;
        margin-right: 35px;
        font-size: 14px;
        a {
            &:hover {
                color: #f00;
            }
        }
        &.active{
            a {
                color: #f00;
            }
        }
    }
}


.products {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
    .item {
        width: 24%;
        padding: 5px 10px;
        margin-right: 1%;
        margin-bottom: 10px;
        // &:nth-child(3n) {
        //     margin-right: 0;
        // }
        .img {
            img {
                width: 100%;
                display: block;
            }
        }
        .title {
            a {
                padding: 12px 0;
                font-weight: 700;
                color: #000;
                display: block;
            }
        }
       
    }
    
}

@media screen and (max-width: 1300px) {
    .products {
        .item {
           width: 32%;
        }
    }
}

@media screen and (max-width: 750px) {
    .category {
        margin-top: 0;
    }
    .products {
        .item {
           width: 49%;
        }
    }
}
</style>

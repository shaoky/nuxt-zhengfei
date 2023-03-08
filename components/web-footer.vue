<template>
    <div class="footer">
        广州正飞设计有限公司　地址：广州　邮编：123456　QQ：1235555
    </div>
</template>
<script>
import Vue from 'vue'
export default  Vue.extend({
    components: {
    },
    data() {
        return {
        }
    },
    computed: {
    },
    
    mounted() {
        
    },
    methods: {
        
    }
})
</script>

<style lang="less" scoped>
.footer {
    width: 100%;
    margin-top: 100px;
    padding: 20px 0;
    text-align: center;
    font-size: 14px;
    // background: #f5f5f5;
    background: #000;
    color: #fff;
}

@media screen and (max-width: 750px) {
    .footer {
        margin-top: 20px;
    }
}
</style>

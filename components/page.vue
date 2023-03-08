<template>
    <div>
        <el-pagination
            background
            layout="prev, pager, next"
            :current-page="currentPage"
            :page-size="pageSize"
            :total="total"
            @current-change="currentChange"
        ></el-pagination>
    </div>
    
</template>
<script>
export default {
    props: {
        currentPage: {
            type: Number,
            default: 1
        },
        total: {
            type: Number,
            default: 1
        },
        pageSize: {
            type: Number,
            default: 10
        }
    },
    data() {
        return {}
    },
    methods: {
        currentChange(value) {
            this.$emit('change', value)
        }
    }
}
</script>
<style lang="less" scoped>
.el-pagination {
    margin-top: 20px;
    text-align: center;
    font-weight: normal;
}
</style>

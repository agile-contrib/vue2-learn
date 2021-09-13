<template>
    <div>

        <!-- 单向绑定 -->
        {{value1}}
        <span v-bind:key1='value1'></span>
        <input type="text" v-bind:value='value1'>

        <br />

        <!-- 双向绑定 -->
        <input type="text" v-model='value1'>

        <br />

        <!-- 交互事件 -->
        <button @click='doit1'>点击我</button>

        <br />

        <!-- 循环显示  -->
        <div>
            <span v-for='item in value2' :key='item'>【{{item}}】</span>
        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                value1: "默认的值",
                value2: ["one", "two", "three"],
            };
        },
        methods: {
            doit1() {
                this.value1 = "改变的新值";
            },
        },
    };
</script>

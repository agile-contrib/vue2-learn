<template>
    <div>

        <input type="text" v-model='value1'>
        <hr />
        计算属性计算的值：{{newValue1}}

        <hr />

        <input type="text" v-model='value2_1'>
        <input type="text" v-model='value2_2'>
        <input type="text" v-model='newValue2'>
        <hr />
        计算属性计算的值：{{newValue2}}

    </div>
</template>
<script>
    export default {
        data() {
            return {
                value1: "默认的值",
                value2_1: "你好",
                value2_2: "2007",
            };
        },
        watch: {
            // value1改变的时候就会触发
            value1(newVal1, oldVal1) {
                console.log(
                    `监听到value1改变了，新的值是：${newVal1}，旧的值是：${oldVal1}`
                );
            },
        },
        computed: {
            // 用于生成一个新的绑定值
            // 默认只有一个getter
            newValue1() {
                return "【" + this.value1 + "】";
            },

            // getter+setter
            newValue2: {
                get() {
                    return this.value2_1 + " " + this.value2_2;
                },
                set(newVal2) {
                    let val2s = newVal2.split(' ');
                    this.value2_1 = val2s[0];
                    this.value2_2 = val2s[1];
                }
            },
        },
    };
</script>

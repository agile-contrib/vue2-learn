<template>
    <div>

        <!-- class -->

        <!-- 最终结果： class="static active" -->
        <div class="static" v-bind:class="{ active: isActive, 'text-danger': hasError }">
            对象语法
        </div>

        <!-- 最终结果： class="active text-danger" -->
        <div v-bind:class="[activeClass, errorClass]">
            数组语法
        </div>

        <!-- style -->

        <!-- 最终结果： style="color: red; font-size: 30px;" -->
        <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">
            对象语法
        </div>

        <!-- 最终结果： style="color: red; font-size: 12px; font-weight: 800;" -->
        <div v-bind:style="[value1, value2]">
            数组语法
        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                isActive: true,
                hasError: false,
                activeClass: 'active',
                errorClass: 'text-danger',
                activeColor: 'red',
                fontSize: 30,
                value1: {
                    color: "red",
                    "font-size": "12px"
                },
                value2: {
                    "font-weight": 800
                }
            };
        }
    };
</script>

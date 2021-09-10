<template>
  <div>
    <input
      type="text"
      v-model='value1'
    >
    <hr />
    计算属性计算的值：{{newValue1}}
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: "默认的值",
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
    newValue1() {
      return "【" + this.value1 + "】";
    },
  },
};
</script>

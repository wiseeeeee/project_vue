<template>
  <div>
    <button @click="showToast" class="btn btn_white" style="width: 200px;">Show Toast</button>
    <div class="toast_wrap" :class="{show: isShow}">
      <div class="desc">
        A notification message..A notification message..A notification message..
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "toast-notice",
    data() {
      return {
        isShow: false
      }
    },
    methods: {
      showToast() {
        this.isShow = true;
        setTimeout(() => this.isShow = false, 3000);
          

      }
    }
    
  }
</script>

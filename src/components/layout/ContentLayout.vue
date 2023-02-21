<template>
<div class="content">
  <router-view></router-view>
</div>
</template>

<script>

  export default {
    name: 'content-layout',
    created() {
       this.$forceUpdate();
    }
  }
</script>

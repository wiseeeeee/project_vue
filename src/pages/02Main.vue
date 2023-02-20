<template>
  <div>
    <div>
      <div v-for="number in [currentNumber]" :key="number" class="img_box">
        <img :src="require(`@/assets/img/${images[Math.abs(currentNumber) % images.length]}`)" class="img_thumb"/>
        <a @click="prev" class="prev"><i class="arrow left"></i></a>
        <a @click="next" class="next"><i class="arrow right"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
    data() {
      return {
        images: ['minions01.jpg','minions02.jpg','minions03.jpg'],
        currentNumber: 0,
      }
    },
    methods: {
        next: function() {
            this.currentNumber += 1
        },
        prev: function() {
            this.currentNumber -= 1
        }
    },
    created () {
      
    }
  }
</script>

<template>
  HomeRoute.vue
  
</template>

<script lang="ts">
import a from '../shared/a'
import { ref, defineComponent } from 'vue';
export default defineComponent({
  setup: () => {
    console.log(a)
    const count = ref(0)
    return { count }
  }
})
</script>


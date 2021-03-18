<template>
  <div id="home">
    {{ message }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const message = ref('Hello')
    return { message }
  },
})
</script>

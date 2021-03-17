<template>
  <div class="home">
    <div>{{id}}</div>
  </div>
</template>

<script>
export default {
  name: 'About',
  computed: {
    id () {
      return this.$route.params.id
    }
  }
}
</script>

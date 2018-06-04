<template>
  <div class='single'>
    <h1 v-html='single.title.rendered' />
  </div>
</template>

<script>
export default {
  name: 'Slide',
  props: {
    single: {
      type: [ Array, Object ],
      required: true
    }
  }
}
</script>

<style lang='scss'>
@import '~/assets/style/variables.scss';
@import '~/assets/style/single.scss';
</style>
<template>
  <div class='slide'>
    <div class='slide__inner'>
      SLIDE, {{single}}
      <h1 v-html='single.post_title' />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slide',
  props: {
    single: {
      type: Object,
      required: true
    }
  }
}
</script>


<template>
  <div class='footer'>
    <Transform  :color='false'
                :showOn='"#footer"'/>
    <p  class='footer__content'
        v-html='single.content.rendered' />
  </div>  
</template>

<script>
import Transform from '~/components/base/Transform'

export default {
  name: 'Footer',
  components: {
    Transform
  },
  props: {
    single: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/variables.scss';

.footer {
  height: auto;
  background-color: $cruella;
  color: white;
  padding: $margin-ver $margin-hor * 2 5em; 

  &__content {
    column-count: 2;
    column-gap: $margin-hor;
  }
}
</style>

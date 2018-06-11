<template>
  <h1 class='title'>
    <span class='title__trans'
          :class='transClasses'>.Trans</span>
    <span class='title__form'
          :class='formClasses'>form</span>
  </h1>  
</template>

<script>
export default {
  name: 'Transform',
  props: {
    color: {
      type: Boolean,
      required: true
    },
    showOn: {
      type: String,
      required: true
    }
  },
  computed: {
    transClasses() {
      return {
        'title__trans--active': this.$route.hash === this.showOn, 
        'title__trans--color': this.color
      }
    },
    formClasses() {
      return {
        'title__form--active': this.$route.hash === this.showOn, 
        'title__form--color': this.color
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/variables.scss';
@import '~/assets/style/helpers/mixins.scss';

.title {
  font-size: $font-size-l;
  line-height: $line-height-l;
  color: white;

  &__trans {
    @include fade-up;

    &--color {
      color: $purple;
    }
  }

  &__form {
    @include fade-up;

    &--active {
      transition-delay: 0.7s;
    }

    &--color {
      color: $red;
    }
  }

}
</style>



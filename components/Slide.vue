<template>
  <div class='slide'>
    <div class='slide__inner'>
      <div  class='slide__inner__item'
            v-if='slide.acf.featured_image'>
        <img  class='slide__inner__item__image'
              :src='slide.acf.featured_image.sizes["manegame-medium"]' />
      </div>
      <div class='slide__inner__item'>
        <h1 class='slide__inner__item__title'
            v-if='slide.acf.title'
            v-html='slide.acf.title' />
        <div  class='slide__inner__item__content'
              v-if='slide.acf.wysiwyg'
              v-html='slide.acf.wysiwyg' />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slide',
  props: {
    slide: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/variables.scss';

.slide {
  &__inner {
    height: 100%;
    padding: $margin-hor * 4;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: flex-end;

    &__item {
      width: 50%;
      height: 100%;

      &__image {
        width: 100%;
        height: 100%;
        object-fit: contain;
        align-self: center;
        padding-right: $margin-ver;
      }

      &__content {
        max-width: 70ch;
      }
    }
  }
}
</style>



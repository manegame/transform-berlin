<template>
  <ul class='menu'
      id='menu'>
    <!-- SLIDES -->
    <li v-for='(page, index) in pages' 
        v-if='index !== 0 && index !== pages.length - 1'
        :key='page.slug' 
        :data-menuanchor='page.slug'
        class='menu__item'>
      <a  :href="'#' + page.slug "
          v-html='page.title.rendered' />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'transform-menu',
  props: {
    pages: {
      type: [ Array, Object ],
      required: true
    }
  },
  data() {
    return {
      menuOpen: false
    }
  }
}
</script>

<style scoped lang='scss'>
@import '~/assets/style/variables.scss';
@import '~/assets/style/helpers/mixins.scss';
@import '~/assets/style/helpers/responsive.scss';

.menu {
  position: absolute;
  padding: 0;
  width: 100%;
  height: auto;
  text-align: center;
  list-style: none;
  bottom: 20%;
  z-index: 10;
  transition: all .3s;

  @include screen-size('small') {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    bottom: auto;
    background-color: $haze;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__close {
    font-size: $font-size-l;
    line-height: $line-height-l;
    padding: 0 $margin-hor;
    color: $red;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    
    @include no-select;
  }

  &__item {
    display: inline;
    padding: 0 20px;

    @include screen-size('small') {
      display: block;
    }
  }

  &--active {
    bottom: 10%;
    opacity: 1;
  }

  a {
    color: $red;
    text-decoration: none;
    font-size: 20px;

    &:active {
      color: $purple;
    }
  }
}
</style>

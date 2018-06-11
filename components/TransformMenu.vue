<template>
  <ul class='menu'
      :class='{"menu--active": $route.hash === "#home"}'
      id='menu'>
    <!-- SLIDES -->
    <li v-for='(page, index) in pages' 
        v-if='index !== 0'
        :key='page.slug' 
        :data-menuanchor='page.slug'
        class='menu__item'>
      <a  :href="'#' + page.slug "
          v-html='page.title.rendered' />
    </li>
    <!-- EXTRA -->
    <li class='menu__item'>
      <nuxt-link to="/posts">Blag</nuxt-link>
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
  }
}
</script>

<style scoped lang='scss'>
@import '~/assets/style/variables.scss';

.menu {
  padding: 0;
  width: 100%;
  height: auto;
  text-align: center;
  list-style: none;
  bottom: 20%;
  z-index: 10;
  opacity: 0;
  transition: all .3s;

  &__item {
    display: inline;
    padding: 0 20px;
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

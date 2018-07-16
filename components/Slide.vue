<template>
  <div class='slide'>
    <div class='slide__inner'>
      <!-- TITLE -->
      <div  v-if='slide.acf.show_title'
            class='slide__inner__title slide__inner__title--centered'>
        <h1 v-html='slide.acf.title' />
      </div>
      <!-- IMAGE -->
      <div  class='slide__inner__item'
            v-if='slide.acf.featured_image'>
        <img  class='slide__inner__item__image'
              :src='slide.acf.featured_image.sizes["manegame-medium"]' />
      </div>
      <!-- TEXT -->
      <div class='slide__inner__item' v-if='slide.acf.wysiwyg'>
        <div  class='slide__inner__item__content'
              v-html='slide.acf.wysiwyg' />
      </div>
      <!-- CHART -->
      <div  class='slide__inner__item'
            v-if='slide.acf.chart'>
        <div class='slide__inner__item__chart'>
          <doughnut-chart :options='chartOptions'
                          :data='chartData' />
        </div>
        <p  class='slide__inner__item__title slide__inner__item__title--centered'
            v-html='slide.acf.chart_title' />
      </div>
    </div>
  </div>
</template>

<script>
import DoughnutChart from '@/components/chart/doughnut-chart.js'
import { data, options } from '@/components/chart/config.js'

export default {
  name: 'Slide',
  components: { DoughnutChart },
  props: {
    slide: {
      type: Object,
      required: true
    }
  },
  computed: {
    chartOptions() {
      return options
    },
    chartData() {
      return data
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
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-end;

    &__title {
      width: 100%;

      &--centered {
        text-align: center;
      }
    }

    &__item {
      width: 100%;
      height: 100%;

      &__title {
        &--centered {
          text-align: center;
        }
      }

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

      &__chart {
        width: 60vmin;
        height: 60vmin;
        margin: $line-height auto;
      }
    }
  }
}
</style>



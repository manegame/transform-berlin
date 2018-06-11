<template>
  <div class='tease'>
    <a  href='#dialog'
        class='tease__link' >
      <h1 class='tease__link--title'><span class='red'>.Dia</span><span class='purple'>log #14</span></h1>
      <div class="tease__wave">
        <span class="tease__wave__dot"></span>
        <span class="tease__wave__dot"></span>
        <span class="tease__wave__dot"></span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'tease'
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/variables.scss';

.tease {
  width: 160px;
  position:absolute;
  bottom: 3em;
  right: 1em;
  z-index: 9;
  text-align: center;
  margin-right: $margin-hor;
  margin-bottom: $margin-ver;

  &__link {
    &--title {
      padding-bottom: $margin-hor;
    }
  }

  &__wave {
    width: 100%;
    height: auto;
    padding: 6px 10px 20px;
    border-radius: 40px;
    background: white;
    border: $red-border;
  
    &__dot {
      display: inline-block;
      width: 12px;
      height: 12px;
      border-radius:50%;
      margin-right:8px;
      margin-left:8px;
      background: $red;
      animation: wave 1.2s ease-in infinite;
  
      &:nth-child(2) {
        animation-delay: -0.8s;
      }
  
      &:nth-child(3) {
        animation-delay: -0.6s;
      }
    }
  }
}

// keyframes

@keyframes wave {
	0%,
  100% {
		transform: initial;
		-webkit-transform: initial;
		-moz-transform: initial;
	}

	33% {
		transform: translateY(-3px) scale(1.5);
		-webkit-transform: translateY(-3px) scale(1.5);
		-moz-transform: translateY(-3px) scale(1.5);
	}

	66% {
		transform: translateY(12px) scale(1);
		-webkit-transform: translateY(12px) scale(1);
		-moz-transform: translateY(12px) scale(1);
	}
}

// global styles

.red {
  color: $red;
}

.purple {
  color: $purple;
}
</style>


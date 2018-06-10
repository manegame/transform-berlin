<template>
  <div class='tease'>
    <h1><span class='red'>.Dia</span><span class='purple'>log</span></h1>
    <div class="tease__wave">
      <span class="tease__wave__dot"></span>
      <span class="tease__wave__dot"></span>
      <span class="tease__wave__dot"></span>
    </div>
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
  bottom: 0;
  right: 0;
  z-index: 9;
  text-align: center;
  margin-right: $margin-hor;
  margin-bottom: $margin-ver;

  &__wave {
    width: 100%;
    height: auto;
    padding: 20px 10px 20px;
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
      animation: wave 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
  
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

	30% {
		transform: translateY(-6px) scale(1.5);
		-webkit-transform: translateY(-6px) scale(1.5);
		-moz-transform: translateY(-6px) scale(1.5);
	}

	60% {
		transform: translateY(6px) scale(1.5);
		-webkit-transform: translateY(6px) scale(1.5);
		-moz-transform: translateY(6px) scale(1.5);
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


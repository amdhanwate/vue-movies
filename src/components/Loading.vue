<template>
  <div class="loading"></div>
</template>

<script>
export default {};
</script>

<style scoped>
.loading {
  margin: auto;
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  border: 0.5rem solid #444;
  border-top: 0.5rem solid white;
  position: relative;
  animation: loading 2s linear 0s infinite;
}

@keyframes loading {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

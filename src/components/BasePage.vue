<template>
  <div class="base-page">
    <slot></slot>
  </div>
</template>




<script>
export default { name: 'BasePage' };
</script>




<style lang="postcss" scoped>
.base-page {
  @apply
    mx-auto
    shadow
  ;

  height: 11in;
  padding: .5in;
  width: 8.5in;
}
</style>

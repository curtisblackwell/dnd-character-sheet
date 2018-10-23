<template>
  <BasePage class="bg-white my-16 print:m-0">
    <MetaData></MetaData>
  </BasePage>
</template>




<script>
import BasePage from './components/BasePage';
import MetaData from './components/MetaData';

export default {
  name: 'app',

  components: {
    BasePage,
    MetaData,
  },
};
</script>




<style src="./styles/app.css"></style>

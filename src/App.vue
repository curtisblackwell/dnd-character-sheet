<template>
  <BasePage class="bg-white my-16 print:m-0">
    <MetaData/>
    <AbilityScores class="w-1/2 mt-4"/>
    <BattleData class="mt-2"/>
  </BasePage>
</template>




<script>
import AbilityScores from './components/AbilityScores';
import BasePage      from './components/BasePage';
import BattleData    from './components/BattleData';
import MetaData      from './components/MetaData';

export default {
  name: 'app',

  components: {
    AbilityScores,
    BasePage,
    BattleData,
    MetaData,
  },
};
</script>




<style src="./styles/app.css"></style>

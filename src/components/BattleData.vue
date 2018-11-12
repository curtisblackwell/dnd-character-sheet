<template>
  <div class="flex pl-1 py-2 border-4 border-grey-lightest rounded">
    <div class="w-1/6">
      <div class="relative">
        <div class="absolute w-1/3 h-full pin-l p-1">
          <ArmorClass class="h-full opacity-25"/>
        </div>
        <div class="mt-2 absolute w-full">
          <label for="armor_class" class="ruled-label">Armor class</label>
        </div>
        <input type="text" name="armor_class" id="armor_class" class="h-6 filled rounded">
      </div>

      <div class="flex mt-2">
        <div
          v-for = "(field, i) in ['Speed', 'Initiative']"
          :key  = "i"
          class = "relative w-1/2"
          :class = "{ 'pl-1': i > 0 }"
        >
          <label :for="field" v-text="field" class="ruled-label"></label>
          <input type="text" :name="field" :id="field" class="ruled">
        </div>
      </div>
    </div>


    <div class="flex justify-between w-1/6 ml-2 h-12">
      <div class="w-1/2 relative">
        <input
          type  = "text"
          name  = "max_hit_points"
          id    = "max_hit_points"
          class = "absolute w-4 pin-l pin-t -mt-1 -ml-1
            bg-grey-lightest border border-grey-lighter rounded-full"
        >
        <div class="mt-8 absolute">
          <label for="hit_points" class="ruled-label pt-px">HP</label>
        </div>
        <input type="text" name="hit_points" id="hit_points" class="h-12 filled rounded">
      </div>

      <div class="w-1/2 ml-1">
        <div class="mt-8 absolute">
          <label for="temp_hit_points" class="ruled-label pt-px whitespace-no-wrap">Temp HP</label>
        </div>
        <input
          type  = "text"
          name  = "temp_hit_points"
          id    = "temp_hit_points"
          class = "h-12 filled rounded"
        >
      </div>
    </div>

    <div class="w-1/12 ml-2 relative h-12">
      <input
        type  = "text"
        name  = "max_hit_dice"
        id    = "max_hit_dice"
        class = "absolute w-4 pin-l pin-t -mt-1 -ml-1
          bg-grey-lightest border border-grey-lighter rounded-full"
      >
      <input
        type  = "text"
        name  = "hit_dice_type"
        id    = "hit_dice_type"
        class = "absolute w-4 pin-r pin-b -mb-1 -mr-1
          bg-grey-lightest border border-grey-lighter rounded-full"
      >
      <div class="mt-8 absolute">
        <label for="hit_dice" class="ruled-label pt-px whitespace-no-wrap">Hit dice</label>
      </div>
      <input type="text" name="hit_dice" id="hit_dice" class="h-12 filled rounded">
    </div>
  </div>
</template>




<script>
import ArmorClass from './ArmorClass';

export default {
  name: 'BattleData',

  components: { ArmorClass },

  data() {
    return {};
  },
};
</script>

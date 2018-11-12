<template>
  <div class="flex pl-1 py-2 border-4 border-grey-lightest rounded">
    <div class="w-1/6">
      <FilledField name="armor_class" class="h-6">
        <ArmorClass slot="icon" class="absolute pin-l p-1 w-1/3 h-full opacity-25"/>
      </FilledField>

      <div class="flex mt-2">
        <RuledField
          v-for  = "(field, i) in ['speed', 'initiative']"
          :key   = "i"
          class  = "w-1/2 h-4"
          :class = "{ 'pl-1': i > 0 }"
          :name  = "field"
        />
      </div>
    </div>


    <FilledField
      name        = "hit_points"
      label       = "HP"
      class       = "w-1/12 ml-2 h-12"
      super-field = "max_hit_points"
    />
    <FilledField
      name  = "temp_hit_points"
      label = "Temp HP"
      class = "w-1/12 ml-1 h-12"
    />

    <FilledField
      name        = "hit_dice"
      class       = "w-1/12 ml-2 h-12"
      sub-field   = "hit_dice_type"
      super-field = "max_hit_dice"
    />
  </div>
</template>




<script>
import ArmorClass  from './svg/ArmorClass';
import FilledField from './FilledField';
import RuledField  from './RuledField';

export default {
  name: 'BattleData',

  components: {
    ArmorClass,
    FilledField,
    RuledField,
  },
};
</script>

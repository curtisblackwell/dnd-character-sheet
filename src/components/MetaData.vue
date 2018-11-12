<template>
  <div>
    <div class="flex w-full">
      <FilledField name="name" class="w-1/3 h-8">
        <DndLogo slot="icon" class="absolute pin-r pin-b pr-1 pb-1 mr-1 w-1/5 opacity-25"/>
      </FilledField>

      <div class="flex-1 pl-1 inline-flex flex-wrap">
        <div v-for="field in fields" :key="field.name" :class="field.class">
          <label :for="field.name" v-text="field.name" class="ruled-label"></label>
          <input type="text" :name="field.name" :id="field.name" class="ruled">
        </div>
      </div>
    </div>
  </div>
</template>




<script>
import DndLogo     from './DndLogo';
import FilledField from './FilledField';

export default {
  name: 'MetaData',

  components: {
    DndLogo,
    FilledField,
  },

  data() {
    return {
      fields: [
        {
          name:  'Class',
          class: 'w-2/5 pr-px',
        },
        {
          name:  'Race',
          class: 'w-2/5 px-px',
        },
        {
          name:  'LVL',
          class: 'w-1/5 pl-px',
        },
        {
          name:  'Background',
          class: 'w-2/5 pr-px',
        },
        {
          name:  'Alignment',
          class: 'w-2/5 px-px',
        },
        {
          name:  'XP',
          class: 'w-1/5 pl-px',
        },
      ],
    };
  },
};
</script>

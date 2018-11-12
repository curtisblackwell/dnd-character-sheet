<template>
  <div>
    <div class="flex w-full">
      <FilledField name="name" class="w-1/3 h-8">
        <DndLogo slot="icon" class="absolute pin-r pin-b pr-1 pb-1 mr-1 w-1/5 opacity-25"/>
      </FilledField>

      <div class="flex-1 pl-1 inline-flex flex-wrap">
        <RuledField
          v-for  = "field in fields"
          :key   = "field.name"
          :name  = "field.name"
          :class = "field.class"
        />
      </div>
    </div>
  </div>
</template>




<script>
import DndLogo     from './DndLogo';
import FilledField from './FilledField';
import RuledField  from './RuledField';

export default {
  name: 'MetaData',

  components: {
    DndLogo,
    FilledField,
    RuledField,
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

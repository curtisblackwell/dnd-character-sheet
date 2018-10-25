<template>
  <ol class="list-reset flex flex-wrap">
    <li
      v-for  = "(ability, i) in abilities"
      :key   = "i"
      :class = "ability.class"
      class  = "w-1/3 px-2 py-1 bg-white border-4 border-grey-lightest"
    >
      <div>
        <input
          type  = "checkbox"
          :name = "ability.name"
          :id   = "ability.name"
          class = "rounded"
        >
        <label
          :for   = "ability.name"
          class  = "
            text-base uppercase tracking-wide font-medium text-grey-dark
            justify-center -ml-2
          "
          v-text = "ability.name"
        ></label>
      </div>

      <div>
        <input type="text" class="filled h-2x w-5/6 block mx-auto mt-1">

        <input
          type  = "text"
          :name = "`${ability.name}_mod`"
          :id   = "`${ability.name}_mod`"
          class = "ruled border-grey-lighter w-1/2 block mx-auto"
        >
      </div>

      <ol class="list-reset text-1/3 uppercase tracking-wider mt-2 text-grey">
        <li v-for="skill in ability.skills" :key="skill" class="my-px">
          <input type="checkbox" :name="skill" :id="skill">
          <label :for="skill" class="whitespace-no-wrap" v-text="skill"></label>
        </li>
      </ol>
    </li>
  </ol>
</template>




<script>
export default {
  name: 'AbilityScores',

  data() {
    return {
      abilities: [
        {
          name:   'STR',
          skills: ['Athletics'],
          class:  'border-b-2 border-r-2 rounded-tl',
        },
        {
          name:   'DEX',
          skills: [
            'Acrobatics',
            'Sleight of hand',
            'Stealth',
          ],
          class: 'border-b-2 border-l-2 border-r-2',
        },
        {
          name:   'CON',
          skills: [],
          class:  'border-b-2 border-l-2 rounded-tr',
        },
        {
          name:   'INT',
          skills: [
            'Arcana',
            'History',
            'Investigation',
            'Nature',
            'Religion',
          ],
          class: 'border-t-2 border-r-2 rounded-bl',
        },
        {
          name:   'WIS',
          skills: [
            'Animal handling',
            'Insight',
            'Medicine',
            'Perception',
            'Survival',
          ],
          class: 'border-t-2 border-l-2 border-r-2',
        },
        {
          name:   'CHA',
          skills: [
            'Deception',
            'Intimidation',
            'Performance',
            'Persuasion',
          ],
          class: 'border-t-2 border-l-2 rounded-br',
        },
      ],
    };
  },
};
</script>

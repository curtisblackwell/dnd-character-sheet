<template>
  <div class="relative">
    <slot name="icon"></slot>

    <input
      v-if  = "superField"
      type  = "text"
      :name = "superField"
      :id   = "superField"
      class = "absolute w-4 pin-l pin-t -mt-1 -ml-1
        bg-grey-lightest border border-grey-lighter rounded-full"
    >

    <input
      v-if  = "subField"
      type  = "text"
      :name = "subField"
      :id   = "subField"
      class = "absolute w-4 pin-r pin-b -mb-1 -mr-1
        bg-grey-lightest border border-grey-lighter rounded-full"
    >

    <div class="absolute w-full h-full">
      <label :for="name" class="filled-label" v-text="labelComputed"></label>
    </div>
    <input type="text" :name="name" :id="name" class="h-full filled rounded">
  </div>
</template>




<script>
export default {
  name: 'FilledField',


  props: {
    label: String,

    name: {
      type:     String,
      required: true,
    },

    subField:   String,
    superField: String,
  },


  computed: {
    /**
     * If a label is passed through the prop, use it. Fallback to the passed name, sentence-cased.
     *
     * @return {String}
     */
    labelComputed() {
      const fallback = this.name.replace(/_/g, ' ');
      return this.label || fallback.charAt(0).toUpperCase() + fallback.slice(1);
    },
  },
};
</script>

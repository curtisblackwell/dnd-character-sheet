<template>
  <div class="relative">
    <label :for="name" class="ruled-label"  v-text="labelComputed"></label>
    <input type="text" :name="name" :id="name" class="ruled">
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

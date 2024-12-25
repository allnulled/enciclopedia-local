Vue.component("wiki-settings-page", {
  name: "wiki-settings-page",
  template: $template,
  props: {
    root: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    
  },
  watch: {
    
  },
  beforeCreate() { },
  created() { },
  beforeMount() { },
  mounted() {
    this.$logger.trace("wiki-settings-page.mounted", arguments);
  },
  beforeUpdate() { },
  updated() { },
  beforeDestroy() { },
  destroyed() { },
  activated() { },
  deactivated() { },
});
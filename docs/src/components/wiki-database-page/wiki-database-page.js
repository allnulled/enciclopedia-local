Vue.component("wiki-database-page", {
  name: "wiki-database-page",
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
    this.$logger.trace("wiki-database-page.mounted", arguments);
  },
  beforeUpdate() { },
  updated() { },
  beforeDestroy() { },
  destroyed() { },
  activated() { },
  deactivated() { },
});
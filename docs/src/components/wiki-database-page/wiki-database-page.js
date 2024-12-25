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
      selected_database: undefined,
      selected_database_size: undefined,
      selected_database_schema: undefined,
    }
  },
  methods: {
    async loadDatabaseInfo() {
      this.selected_database = this.root.selected_database;
      this.selected_database_size = await this.$browsie.constructor.getDatabaseSize(this.selected_database);
      this.selected_database_schema = await this.$browsie.constructor.getSchema(this.selected_database);
    }
  },
  watch: {
    
  },
  beforeCreate() { },
  created() { },
  beforeMount() { },
  async mounted() {
    this.$logger.trace("wiki-database-page.mounted", arguments);
    await this.loadDatabaseInfo();
  },
  beforeUpdate() { },
  updated() { },
  beforeDestroy() { },
  destroyed() { },
  activated() { },
  deactivated() { },
});
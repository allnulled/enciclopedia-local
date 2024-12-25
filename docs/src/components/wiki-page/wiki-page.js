Vue.component("wiki-page", {
  name: "wiki-page",
  template: $template,
  props: {},
  data() {
    return {
      selected_page: 'wiki-home-page',
      selected_database: undefined,
    }
  },
  methods: {
    selectPage(page) {
      if(this.$refs.dialogo_de_menu_principal) {
        this.$refs.dialogo_de_menu_principal.close();
      }
      this.selected_page = page;
    },
    selectDatabase(db) {
      this.selected_database = db;
      this.selected_page = 'wiki-database-page';
    },
    async listDatabases() {
      this.$logger.trace("wiki-page.listDatabases", arguments);
      return await this.$browsie.constructor.listDatabases();
    },
    async createDatabase(name, schema = {}) {
      this.$logger.trace("wiki-page.createDatabase", arguments);
      this.$ensure({ name }).type("string");
      this.$ensure({ schema }).type("object");
      return await this.$browsie.constructor.createDatabase(name, schema);
    },
    async deleteDatabase(name) {
      this.$logger.trace("wiki-page.deleteDatabase", arguments);
      this.$ensure({ name }).type("string");
      return await this.$browsie.constructor.deleteDatabase(name);
    }
  },
  watch: {},
  beforeCreate() { },
  created() { },
  beforeMount() { },
  mounted() {
      this.$logger.trace("wiki-page.mounted", arguments);
      this.$window.c = this;
  },
  beforeUpdate() { },
  updated() { },
  beforeDestroy() { },
  destroyed() { },
  activated() { },
  deactivated() { },
});
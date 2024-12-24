Vue.component("wiki-home-page", {
  name: "wiki-home-page",
  template: $template,
  props: {
    root: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      database_text_filter: "",
      omitted_databases_by_text_filter: [],
      available_databases: [],
      filtered_databases: [],
      new_database_name: "",
      delete_database_name: undefined
    }
  },
  methods: {
    async loadDatabases() {
      this.$logger.trace("wiki-home-page.loadDatabases", arguments);
      this.available_databases = await this.root.listDatabases();
      this._synchronizeFilteredDatabases();
    },
    async _onClickCreateDatabase() {
      this.$logger.trace("wiki-home-page._onClickCreateDatabase", arguments);
      this.new_database_name = "";
      const respuesta = await this.$refs.dialogo_crear_base_de_datos.open();
      if (typeof respuesta !== "undefined") {
        // // No esto:
        // await this.$window.Webmarket.open(respuesta);
        // // Sino esto:
        await this.root.createDatabase(respuesta);
        await this.loadDatabases();
      }
      return respuesta;
    },
    async _onClickDeleteDatabase() {
      this.$logger.trace("wiki-home-page._onClickDeleteDatabase", arguments);
      this.delete_database_name = undefined;
      await this.$refs.dialogo_eliminar_base_de_datos.open();
      return;
    },
    _onClickAcceptCreateDatabase() {
      this.$logger.trace("wiki-home-page._onClickAcceptCreateDatabase", arguments);
      if(!this.new_database_name) {
        this.$refs.dialogo_crear_base_de_datos.setError(new Error("El nombre de la base de datos no puede estar vacío"));
        return;
      }
      return this.$refs.dialogo_crear_base_de_datos.set(this.new_database_name).close();
    },
    _onClickCancelCreateDatabase() {
      this.$logger.trace("wiki-home-page._onClickCancelCreateDatabase", arguments);
      return this.$refs.dialogo_crear_base_de_datos.close();
    },
    _onClickRenameDatabase() {
      this.$logger.trace("wiki-home-page._onClickRenameDatabase", arguments);
      return this.$refs.dialogo_renombrar_base_de_datos.open();
    },
    _synchronizeFilteredDatabases() {
      this.$logger.trace("wiki-home-page._synchronizeFilteredDatabases", arguments);
      const databaseList = [];
      const textFilter = this.database_text_filter;
      if (textFilter.length !== 0) {
        for (let index = 0; index < this.available_databases.length; index++) {
          const db = this.available_databases[index];
          const hasMatch = this.root._correctDBName(db, false).indexOf(textFilter) === -1;
          if (hasMatch) {
            databaseList.push(db);
          }
        }
      }
      omitted_databases_by_text_filter = databaseList;
      let sorted_databases = [];
      if (textFilter.length !== 0) {
        sorted_databases = this.available_databases.filter(db => omitted_databases_by_text_filter.indexOf(db) === -1).sort();
      } else {
        sorted_databases = this.available_databases.sort();
      }
      this.filtered_databases = sorted_databases;
    }
  },
  watch: {
    database_text_filter() {
      this.$logger.trace("wiki-home-page.watch.database_text_filter", arguments);
      this._synchronizeFilteredDatabases();
    }
  },
  beforeCreate() { },
  created() { },
  beforeMount() { },
  mounted() {
    this.$logger.trace("wiki-home-page.mounted", arguments);
    this.loadDatabases();
  },
  beforeUpdate() { },
  updated() { },
  beforeDestroy() { },
  destroyed() { },
  activated() { },
  deactivated() { },
});
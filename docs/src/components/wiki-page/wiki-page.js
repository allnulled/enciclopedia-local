Vue.component("wiki-page", {
  name: "wiki-page",
  template: $template,
  props: {},
  data() {
    return {}
  },
  methods: {
    async listDatabases() {
      this.$logger.trace("wiki-page.listDatabases", arguments);
      const allDatabases = await this.$window.Webmarket.listDatabases();
      const APP_MARKET_PREFIX = "webmarket.enciclopedia_local.";
      return allDatabases.filter(dbName => dbName.startsWith(APP_MARKET_PREFIX)).map(dbName => dbName.replace(APP_MARKET_PREFIX, ""));
    },
    _correctDBName(name, alsoPrependReal = true) {
      const name2 = name.replace(/^(webmarket\.)(enciclopedia_local\.)?/g, "");
      if(alsoPrependReal) {
        return "webmarket.enciclopedia_local." + name2;
      } else {
        return name2;
      }
    },
    async createDatabase(name) {
      this.$logger.trace("wiki-page.createDatabase", arguments);
      return await this.$window.Webmarket.open(this._correctDBName(name));
    },
    async deleteDatabase(name) {
      this.$logger.trace("wiki-page.deleteDatabase", arguments);
      const request = indexedDB.deleteDatabase("webmarket.enciclopedia_local.Whereeee");
      return new Promise((resolve, reject) => {
        request.onsuccess = function () {
          console.log(`[*] Base de datos '${name}' eliminada exitosamente.`);
          return resolve(request);
        };
        request.onerror = function (event) {
          console.error(`[!] Error al eliminar la base de datos '${name}':`, event.target.error);
          return reject(event);
        };
        request.onblocked = function () {
          console.warn(`[!] La eliminación de la base de datos '${name}' está bloqueada. Cierra otras pestañas o procesos usando esta base de datos.`);
          return reject(request);
        };
      });
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
(function(factory) {
  const mod = factory();
  if(typeof window !== 'undefined') {
    window["Litestarter_app_components"] = mod;
  }
  if(typeof global !== 'undefined') {
    global["Litestarter_app_components"] = mod;
  }
  if(typeof module !== 'undefined') {
    module.exports = mod;
  }
})(function() {
Vue.component("app", {
  name: "app",
  template: `<div class="app">
    <!--Contenido del componente-->
    <wiki-page></wiki-page>
</div>`,
  props: {},
  data() {
    return {}
  },
  methods: {},
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    Arranque_automatico_para_tests: {
      break Arranque_automatico_para_tests;
      document.querySelector("button").click();
    }
  },
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  deactivated() {},
});
const noop = () => {};
const defaultData = {
  is_active: false,
  promise: Promise.resolve(),
  resolve: noop,
  reject: noop,
  value: undefined
};
Vue.component("c-dialog", {
  name: "c-dialog",
  template: `<div class="c-dialog">
    <dialog class="window_dialog">
        <div class="window_container">
            <div class="window_viewer">
                <transition name="fade">
                    <div class="window modal"
                        v-if="is_active">
                        <div class="title-bar">
                            <div class="title-bar-text">
                                <slot name="title"></slot>
                            </div>
                            <div class="title-bar-controls">
                                <button aria-label="Close"
                                    v-on:click="() => set(undefined).close()"></button>
                            </div>
                        </div>
                        <div class="window-body">
                            <div style="display: flex; flex-direction: column; height: 100%;">
                                <div style="flex: 100; overflow: scroll; padding: 4px 6px;">
                                    <slot name="body"></slot>
                                </div>
                                <div class="bodyfooter" style="flex: 1;"
                                    v-if="$slots.bodyfooter">
                                    <div class="error_container" style="position: relative;" v-if="error" v-on:click="clearError">
                                        <div class="error_content" style="position: absolute; top: auto; bottom: 0; left: 0; right: 0;">
                                            <div class="error_box" v-if="error instanceof $window.Error">
                                                <div class="error_info_item">
                                                    <pre class="default_codeviewer">{{ error.name }}: {{ error.message }}.
{{ formatAndGroupStackTrace(error.stack) }}</pre>
                                                </div>
                                            </div>
                                            <div class="error_box" v-else="">
                                                <div class="error_info_item">{{ error }}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <slot name="bodyfooter"></slot>
                                </div>
                            </div>
                        </div>
                        <div class="status-bar">
                            <div class="status-bar-field">
                                <template v-if="$slots.footer">
                                    <slot name="footer"></slot>
                                </template>
                                <template v-else>
                                    Powered by <a href="https://github.com/allnulled">allnulled</a>
                                </template>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </dialog>
</div>`,
  data() {
    return Object.assign({}, defaultData, {
      priority: 1,
      error: false,
    });
  },
  methods: {
    open() {
      const priority = this.$dialogs.getTicket();
      let resolve = noop;
      let reject = noop;
      const promise = new Promise((_resolve, _reject) => {
        resolve = _resolve;
        reject = _reject;
      });
      this.resolve = resolve;
      this.reject = reject;
      this.promise = promise;
      this.value = undefined;
      this.priority = priority;
      this._show();
      this.is_active = true;
      return this.promise;
    },
    set(value) {
      this.value = value;
      return this;
    },
    close() {
      const value = this.value;
      this.resolve(value);
      this.reset();
      return value;
    },
    reset() {
      Object.assign(this, defaultData, {is_active:true});
      this.is_active = false;
      this._close();
      return this;
    },
    _show() {
      this.$el.querySelector("dialog").show();
    },
    _close() {
      this.$el.querySelector("dialog").close();
    },
    setError(error) {
      this.error = error;
    },
    clearError() {
      this.error = false;
    },
    formatStackTrace(stackTrace) {
      // Dividir por líneas y limpiar espacios extra
      const lines = stackTrace.split(/\s+/).filter(Boolean);
    
      // Procesar cada línea para hacerla más legible
      const formatted = lines.map((line) => {
        // Separar el método, archivo y ubicación (si aplica)
        const match = line.match(/^(.*?)(@|$)(.*?):(\d+):(\d+)$/);
        if (match) {
          const [, method, , file, line, column] = match;
          return `@${file}\n  ${line}:${column}:${(method || "(anonymous)").trim()}`;
        }
        return line; // Si no coincide con el patrón esperado
      });
    
      // Unir líneas procesadas
      return formatted.join("\n");
    },
    formatAndGroupStackTrace(stackTrace) {
      // Dividir por líneas y limpiar espacios extra
      const lines = stackTrace.split(/\s+/).filter(Boolean);
    
      // Mapa para agrupar por archivo
      const grouped = {};
    
      lines.forEach((line) => {
        const match = line.match(/^(.*?)(@|$)(.*?):(\d+):(\d+)$/);
        if (match) {
          const [, method, , file, line, column] = match;
          const location = {
            method: method || "(anonymous)",
            line: parseInt(line, 10),
            column: parseInt(column, 10),
          };
    
          // Agrupar por archivo
          if (!grouped[file]) grouped[file] = [];
          grouped[file].push(location);
        }
      });
    
      // Construir salida agrupada y ordenada
      let result = "";
      for (const file in grouped) {
        // Ordenar ubicaciones por número de línea
        grouped[file].sort((a, b) => a.line - b.line || a.column - b.column);
    
        // Construir sección del archivo
        result += `File: ${file}\n`;
        grouped[file].forEach(({ line, column, method }) => {
          result += `  @${line}:${column}::${method}\n`;
        });
        result += "\n";
      }
    
      return result.trim();
    }    
  },
  watch: {}
});
Vue.component("c-title", {
  name: "c-title",
  template: `<div class="c-title">
    <h3><slot></slot></h3>
</div>`,
  props: {},
  data() {
    return {}
  },
  methods: {},
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  deactivated() {},
});
Vue.component("wiki-page", {
  name: "wiki-page",
  template: `<div class="wiki-page">
    <div class="wiki_title">
        <span class="wiki_title_text">Enciclopedia local</span>
        <div class="wiki_controls">
            <button class="stretch_button" v-on:click="() => $refs.dialogo_de_menu_principal.open()">☰</button>
        </div>
    </div>
    <div class="" style="border: 0px solid #333; box-sizing: border-box; min-height: 550px; overflow: scroll;">
        <component :is="selected_page" :root="this"></component>
    </div>
    <c-dialog ref="dialogo_de_menu_principal">
        <template slot="title">Secciones generales</template>
        <template slot="body">
            <div class="">
                <div class="wiki_paragraph_no_spaces">Escoge la sección a donde quieres ir:</div>
                <ol>
                    <li>
                        <a href="#" v-on:click="() => selectPage('wiki-home-page')">Sección de inicio</a>
                    </li>
                    <li>
                        <a href="#" v-on:click="() => selectPage('wiki-searcher-page')">Sección de buscador</a>
                    </li>
                    <li>
                        <a href="#" v-on:click="() => selectPage('wiki-settings-page')">Sección de configuraciones</a>
                    </li>
                </ol>
            </div>
        </template>
        <template slot="bodyfooter">
            <div style="text-align: right; padding: 4px;">
                <button v-on:click="() => $refs.dialogo_de_menu_principal.close()">Cancelar</button>
            </div>
        </template>
        <template slot="footer">
            <span class="status-bar-field">Estás en el menú principal.</span>
        </template>
    </c-dialog>
</div>`,
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
Vue.component("wiki-home-page", {
  name: "wiki-home-page",
  template: `<div class="wiki-home-page">
    <div class="wiki_viewer">
        <div class="wiki_content">
            <!--div class="wiki_subtitle">
                <span class="wiki_subtitle_text">Inicio</span>
            </div-->
            <div class="wiki_paragraph">Bienvenid@ a enciclopedia-local <sup><a href="#references">[ 1 ]</a></sup>.</div>
            <div class="wiki_space_3"></div>
            <div class="wiki_subtitle">
                <span class="wiki_subtitle_text">Bases de datos disponibles</span>
                <span class="wiki_controls">
                    <button class="stretch_button"
                        v-on:click="loadDatabases">⟳</button>
                </span>
            </div>
            <input v-model="database_text_filter"
                style="width: 100%;"
                type="search"
                v-autofocus
                placeholder="Filtra bases de datos aquí" />
            <div class="wiki_list_viewer"
                style="padding: 0px;">
                <div v-if="!filtered_databases">No hay bases de datos creadas. Crea una <a href="#">aquí</a>.</div>
                <ol v-else="">
                    <template v-for="db, dbIndex in filtered_databases">
                        <li v-bind:key="'available_database_' + dbIndex">
                            <a class="accessible_text display_block"
                                v-on:click="() => root.selectDatabase(db.name)"
                                href="#">{{ db.name }}</a>
                        </li>
                    </template>
                </ol>
            </div>
            <div class="wiki_space_3"></div>
            <div class="wiki_subtitle">
                <span class="wiki_subtitle_text">Otras operaciones disponibles</span>
            </div>
            <ol style="padding-top: 0px;">
                <li><a href="#"
                        v-on:click="_onClickCreateDatabase">Crear base de datos</a></li>
                <!--li><a href="#"
                        v-on:click="_onClickRenameDatabase">Renombrar base de datos</a></li-->
                <li><a class="danger_text"
                        href="#"
                        v-on:click="_onClickDeleteDatabase">Eliminar base de datos</a></li>
            </ol>
            <c-dialog ref="dialogo_crear_base_de_datos">
                <template slot="title">Crear base de datos</template>
                <template slot="body">
                    <div class="">
                        <div class="wiki_paragraph"><b>Paso 1.</b> Escribe el nombre de la nueva base de datos:</div>
                        <input style="width:100%;"
                            type="text"
                            v-model="new_database_name"
                            v-autofocus
                            v-on:keypress.enter="_onClickAcceptCreateDatabase"
                            v-on:keyup.esc="_onClickCancelCreateDatabase" />
                        <div class="wiki_paragraph"><b>Paso 2.</b> Clica a <a href="#"
                                v-on:click="_onClickAcceptCreateDatabase">Crear</a>.</div>
                    </div>
                </template>
                <template slot="bodyfooter">
                    <div style="text-align: right; padding: 4px;">
                        <button v-on:click="_onClickAcceptCreateDatabase">Crear</button>
                        <button v-on:click="_onClickCancelCreateDatabase">Cancelar</button>
                    </div>
                </template>
                <template slot="footer">
                    <span class="status-bar-field">Estás por crear una base de datos.</span>
                </template>
            </c-dialog>
            <c-dialog ref="dialogo_renombrar_base_de_datos">
                <template slot="title">Renombrar base de datos</template>
                <template slot="body">
                    <div class="">
                        <div class="wiki_paragraph"><b>Paso 1.</b> Escoge la base de datos a renombrar:</div>
                        <div class="wiki_list_viewer"
                            style="padding: 0px;">
                            <div v-if="!filtered_databases">No hay bases de datos creadas. Crea una <a href="#">aquí</a>.</div>
                            <ol v-else="">
                                <template v-for="db, dbIndex in filtered_databases">
                                    <li v-bind:key="'available_database_' + dbIndex">
                                        <a class="accessible_text display_block"
                                        :class="{marked:rename_database_name === db.name}"
                                        v-on:click="() => _setAsDatabaseToRename(db.name)"
                                            href="#">{{ db.name }}</a>
                                    </li>
                                </template>
                            </ol>
                        </div>
                        <div class="wiki_paragraph"><b>Paso 2.</b> Escribe el nuevo nombre de la base de datos:</div>
                        <input style="width:100%;"
                            type="text"
                            ref="rename_database_input"
                            v-model="rename_database_name_new"
                            v-autofocus
                            v-on:keypress.enter="_onClickAcceptRenameDatabase"
                            v-on:keyup.esc="_onClickCancelRenameDatabase" />
                        <div class="wiki_paragraph"><b>Paso 3.</b> Clica a <a href="#"
                                v-on:click="_onClickAcceptRenameDatabase">Renombrar</a>.</div>
                    </div>
                </template>
                <template slot="bodyfooter">
                    <div style="text-align: right; padding: 4px;">
                        <button v-on:click="_onClickAcceptRenameDatabase">Renombrar</button>
                        <button v-on:click="_onClickCancelRenameDatabase">Cancelar</button>
                    </div>
                </template>
                <template slot="footer">
                    <span class="status-bar-field">Estás en el diálogo de renombrar base de datos.</span>
                </template>
            </c-dialog>
            <c-dialog ref="dialogo_eliminar_base_de_datos">
                <template slot="title">Eliminar base de datos</template>
                <template slot="body">
                    <div class="">
                        <div class="wiki_paragraph"><b>Paso 1.</b> Selecciona la base de datos a eliminar:</div>
                        <div class="wiki_list_viewer"
                            style="padding: 0px;">
                            <div v-if="!filtered_databases">No hay bases de datos creadas. Crea una <a href="#">aquí</a>.</div>
                            <ol v-else="">
                                <template v-for="db, dbIndex in filtered_databases">
                                    <li v-bind:key="'available_database_' + dbIndex">
                                        <a class="accessible_text display_block danger_text"
                                        :class="{marked:delete_database_name === db.name}"
                                        v-on:click="() => _setAsDatabaseToDelete(db.name)"
                                        href="#">{{ db.name }}</a>
                                    </li>
                                </template>
                            </ol>
                        </div>
                        <div class="wiki_paragraph"><b>Paso 2.</b> Clica a <a href="#" v-on:click="_onClickAcceptDeleteDatabase">Eliminar</a>.</div>
                    </div>
                </template>
                <template slot="bodyfooter">
                    <div style="text-align: right; padding: 4px;">
                        <button v-on:click="_onClickAcceptDeleteDatabase">Eliminar</button>
                        <button v-on:click="_onClickCancelDeleteDatabase">Cancelar</button>
                    </div>
                </template>
                <template slot="footer">
                    <span class="status-bar-field">Estás por eliminar una base de datos.</span>
                </template>
            </c-dialog>
            <div class="wiki_space_3"></div>
            <div class="wiki_subtitle">
                <span class="wiki_subtitle_text">Referencias</span>
            </div>
            <div class="wiki_references">
                <ol>
                    <li>
                        <div>Documentación oficial de «enciclopedia-local» en:</div>
                        <ul class="inner">
                            <li>
                                <a
                                    href="https://github.com/allnulled/enciclopedia-local">https://github.com/allnulled/enciclopedia-local</a>
                            </li>
                        </ul>
                    </li>
                </ol>
            </div>
        </div>
    </div>
</div>`,
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
      rename_database_name: undefined,
      rename_database_name_new: undefined,
      delete_database_name: undefined
    }
  },
  methods: {
    async loadDatabases() {
      this.$logger.trace("wiki-home-page.loadDatabases", arguments);
      this.available_databases = await this.root.listDatabases();
      this._synchronizeFilteredDatabases();
    },
    _setAsDatabaseToRename(db) {
      this.$logger.trace("wiki-home-page._setAsDatabaseToRename", arguments);
      this.rename_database_name = db;
      this.rename_database_name_new = db;
    },
    _setAsDatabaseToDelete(db) {
      this.$logger.trace("wiki-home-page._setAsDatabaseToDelete", arguments);
      this.delete_database_name = db;
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
        this.$refs.dialogo_crear_base_de_datos.setError(new Error("Debe de haber un nombre de base de datos antes de poder crearla"));
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
      this.$refs.dialogo_renombrar_base_de_datos.open();
      return this._setAsDatabaseToRename("");
    },
    _onClickAcceptRenameDatabase() {
      this.$logger.trace("wiki-home-page._onClickAcceptRenameDatabase", arguments);
      if(!this.rename_database_name) {
        this.$refs.dialogo_renombrar_base_de_datos.setError(new Error("El nombre de la base de datos no puede estar vacío"));
        return;
      }
      return this.$refs.dialogo_renombrar_base_de_datos.close();
    },
    _onClickCancelRenameDatabase() {
      this.$logger.trace("wiki-home-page._onClickCancelRenameDatabase", arguments);
      return this.$refs.dialogo_renombrar_base_de_datos.close();
    },
    async _onClickAcceptDeleteDatabase() {
      this.$logger.trace("wiki-home-page._onClickAcceptDeleteDatabase", arguments);
      if(!this.delete_database_name) {
        this.$refs.dialogo_eliminar_base_de_datos.setError(new Error("Debe de haber una base de datos seleccionada antes de poder eliminarla"));
        return;
      }
      await this.root.deleteDatabase(this.delete_database_name);
      return this.$refs.dialogo_eliminar_base_de_datos.close();
    },
    _onClickCancelDeleteDatabase() {
      this.$logger.trace("wiki-home-page._onClickCancelDeleteDatabase", arguments);
      return this.$refs.dialogo_eliminar_base_de_datos.close();
    },
    _synchronizeFilteredDatabases() {
      this.$logger.trace("wiki-home-page._synchronizeFilteredDatabases", arguments);
      const databaseList = [];
      const textFilter = this.database_text_filter;
      if (textFilter.length !== 0) {
        for (let index = 0; index < this.available_databases.length; index++) {
          const db = this.available_databases[index];
          const hasMatch = JSON.stringify(db).toLowerCase().indexOf(textFilter.toLowerCase()) === -1;
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
Vue.component("wiki-settings-page", {
  name: "wiki-settings-page",
  template: `<div class="wiki-settings-page">
    <div class="wiki_viewer">
        <div class="wiki_content">
            <!--div class="wiki_subtitle">
                <span class="wiki_subtitle_text">Inicio</span>
            </div-->
            Settings page
            <div class="wiki_paragraph">Esto es la página de configuraciones <sup><a href="#references">[ 1 ]</a></sup>. Para ir a inicio, clica <a href="#" v-on:click="() => root.selectPage('wiki-home-page')">aquí</a></div>
            <div class="wiki_space_3"></div>
            <div class="wiki_subtitle">
                <span class="wiki_subtitle_text">Bases de datos disponibles</span>
                <span class="wiki_controls">
                    <button class="stretch_button">⟳</button>
                </span>
            </div>
        </div>
    </div>
</div>`,
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
Vue.component("wiki-searcher-page", {
  name: "wiki-searcher-page",
  template: `<div class="wiki-searcher-page">
    <div class="wiki_viewer">
        <div class="wiki_content">
            <!--div class="wiki_subtitle">
                <span class="wiki_subtitle_text">Inicio</span>
            </div-->
            Searcher page
            <div class="wiki_paragraph">Esto es la página de configuraciones <sup><a href="#references">[ 1 ]</a></sup>. Para ir a inicio, clica <a href="#" v-on:click="() => root.selectPage('wiki-home-page')">aquí</a></div>
            <div class="wiki_space_3"></div>
            <div class="wiki_subtitle">
                <span class="wiki_subtitle_text">Bases de datos disponibles</span>
                <span class="wiki_controls">
                    <button class="stretch_button">⟳</button>
                </span>
            </div>
        </div>
    </div>
</div>`,
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
    this.$logger.trace("wiki-searcher-page.mounted", arguments);
  },
  beforeUpdate() { },
  updated() { },
  beforeDestroy() { },
  destroyed() { },
  activated() { },
  deactivated() { },
});
Vue.component("wiki-database-page", {
  name: "wiki-database-page",
  template: `<div class="wiki-database-page">
    <div class="wiki_viewer">
        <div class="wiki_content">
            <!--div class="wiki_subtitle">
                <span class="wiki_subtitle_text">Inicio</span>
            </div-->
            <div class="wiki_subtitle">BD: {{ root.selected_database }}</div>
            <div class="wiki_paragraph">Clica <a href="#" v-on:click="() => root.selectPage('wiki-home-page')">aquí</a> para volver a inicio.</div>
            <div class="wiki_space_3"></div>
            <div class="wiki_subtitle">
                <span class="wiki_subtitle_text">Tablas</span>
                <span class="wiki_controls">
                    <button class="stretch_button">⟳</button>
                </span>
            </div>
        </div>
    </div>
</div>`,
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
});

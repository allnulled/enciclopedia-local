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
    <home-page></home-page>
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
                                <div style="flex: 1;"
                                    v-if="$slots.bodyfooter">
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
Vue.component("home-page", {
  name: "home-page",
  template: `<div class="home-page">
    <c-dialog ref="dialogo_1">
        <template slot="title">Título del diálogo</template>
        <template slot="body">
            Cuerpo del diálogo
        </template>
        <template slot="bodyfooter">
            <div style="text-align: right; padding: 4px;">
                <button v-on:click="() => $refs.dialogo_1.set(true).close()">Aceptar</button>
                <button v-on:click="() => $refs.dialogo_1.close()">Cancelar</button>
            </div>
        </template>
        <!--template slot="footer">
            <span class="status-bar-field">Pie del diálogo</span>
        </template-->
    </c-dialog>
    <c-dialog ref="notificacion_1">
        <template slot="title">Título del diálogo</template>
        <template slot="body">
            Cuerpo del diálogo
        </template>
        <template slot="bodyfooter">
            <div style="text-align: right; padding: 4px;">
                <button v-on:click="() => $refs.notificacion_1.set(true).close()">Aceptar</button>
                <button v-on:click="() => $refs.notificacion_1.close()">Cancelar</button>
            </div>
        </template>
        <!--template slot="footer">
            <span class="status-bar-field">Pie del diálogo</span>
        </template-->
    </c-dialog>
    <div class="wiki_viewer">
        <div class="wiki_content">
            <div class="wiki_title">
                <span class="wiki_title_text">En Linux Libertine y en 21.8px</span>
                <span class="wiki_title_controls">
                    <button class="stretch_button"
                        v-on:click="() => $refs.notificacion_1.open()">Notificación</button>
                    <button class="stretch_button"
                        v-on:click="() => $refs.dialogo_1.open()">Diálogo</button>
                </span>
            </div>
            <!--
        wiki_table_of_contents
        wiki_article
        wiki_table_of_details
        -->
            <div class="wiki_subtitle">
                <span class="wiki_subtitle_text">En Linux Libertine y en 17px</span>
                <span class="wiki_subtitle_controls">
                    <button class="stretch_button"
                        v-on:click="() => $refs.notificacion_1.open()">Notificación</button>
                    <button class="stretch_button"
                        v-on:click="() => $refs.dialogo_1.open()">Diálogo</button>
                </span>
            </div>
            <div class="table_of_details">
                <div class="title">Título del artículo</div>
                <div class="image_container">
                    <div class="image">Imagen no disponible.</div>
                    <div class="image_footer">Título de la imagen.</div>
                </div>
                <table class="subtable_of_details">
                    <thead>
                        <tr>
                            <td class="title" colspan="100">Título de la tabla</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="key">Propiedad:</td>
                            <td class="value">Valor</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="wiki_paragraph">Texto normal, en Arial o Sans-Serif o algo.</div>
            <div class="wiki_paragraph">Esto sería un <a href="#">hipervínculo</a> a algún recurso.</div>
            <div class="wiki_paragraph">Esto sería una lista de elementos ordenados:</div>
            <ol class="wiki_list">
                <li>
                    <div>Elemento 1:</div>
                    <ol class="wiki_list">
                        <li>Elemento 1.1</li>
                        <li>Elemento 1.2</li>
                        <li>Elemento 1.3</li>
                    </ol>
                </li>
                <li>
                    <div>Elemento 2:</div>
                    <ol class="wiki_list">
                        <li>Elemento 2.1</li>
                        <li>Elemento 2.2</li>
                        <li>Elemento 2.3</li>
                    </ol>
                </li>
                <li>
                    <div>Elemento 3:</div>
                    <ol class="wiki_list">
                        <li>Elemento 3.1</li>
                        <li>Elemento 3.2</li>
                        <li>Elemento 3.3</li>
                    </ol>
                </li>
            </ol>
            <div class="wiki_paragraph">Esto sería una lista de elementos desordenados:</div>
            <ul class="wiki_list">
                <li>
                    <div>Elemento 1:</div>
                    <ul class="wiki_list">
                        <li>Elemento 1.1</li>
                        <li>Elemento 1.2</li>
                        <li>Elemento 1.3</li>
                    </ul>
                </li>
                <li>
                    <div>Elemento 2:</div>
                    <ul class="wiki_list">
                        <li>Elemento 2.1</li>
                        <li>Elemento 2.2</li>
                        <li>Elemento 2.3</li>
                    </ul>
                </li>
                <li>
                    <div>Elemento 3:</div>
                    <ul class="wiki_list">
                        <li>Elemento 3.1</li>
                        <li>Elemento 3.2</li>
                        <li>Elemento 3.3</li>
                    </ul>
                </li>
            </ul>
            <div class="wiki_paragraph">Esto es un superíndice<a href="#"><sup>[123]</sup></a> y esto un subíndice <a href="#"><sub>[123]</sub></a></div>
        </div>
    </div>
</div>`,
  props: {},
  data() {
    return {}
  },
  methods: {},
  watch: {},
  beforeCreate() { },
  created() { },
  beforeMount() { },
  mounted() {
    this.$window.c = this;
  },
  beforeUpdate() { },
  updated() { },
  beforeDestroy() { },
  destroyed() { },
  activated() { },
  deactivated() { },
});
});

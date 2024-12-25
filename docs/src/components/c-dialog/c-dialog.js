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
  template: $template,
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
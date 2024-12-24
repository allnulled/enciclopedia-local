window.process = {
    env: {
        // In local/http "test", in github/https "production":
        NODE_ENV: (window.location.href.startsWith("https") ? "production" : "test")
    }
};
process.env.NODE_ENV = "production";
process.env.NODE_ENV = "test";
const main = async function () {
    try {
        Import_scripts: {
            if(process.env.NODE_ENV === "test") {
                importer.setTotal(45);
                importer.setTimeout(1000 * 0);
                await Promise.all([
                    importer.scriptSrc("src/external/socket.io-client.js"),
                    importer.scriptSrc("src/external/vue-v2.js"),
                    importer.scriptSrc("src/external/basic-logger.js"),
                    importer.scriptSrc("src/external/ensure.js"),
                    importer.scriptSrc("src/external/ufs.js"),
                    importer.scriptSrc("src/external/store.unbundled.js"),
                    importer.scriptSrc("src/external/webmarket.js"),
                    importer.scriptSrc("src/external/sql-wasm.js"),
                    importer.scriptSrc("src/external/sqlite-polyfill.js"),
                    importer.scriptSrc("src/external/sqlite-data-system.unbundled.js"),
                ]);
                await Promise.all([
                    importer.scriptSrc("src/components/c-dialogs/c-dialogs.js"),
                    importer.scriptSrc("src/components/c-badges/c-badges.js"),
                    importer.importVueComponent("src/components/c-title/c-title"),
                    importer.importVueComponent("src/components/wiki-page/wiki-page"),
                    importer.importVueComponent("src/components/app/app"),
                    importer.importVueComponent("src/components/c-dialog/c-dialog"),
                    importer.importVueComponent("src/components/c-badge/c-badge"),
                ]);
                ///////////////////////////////////////////////////////
                await importer.importVueComponent("src/components/c-title/c-title");
                await importer.importVueComponent("src/components/wiki-page/wiki-page");
                await importer.importVueComponent("src/components/wiki-home-page/wiki-home-page");
                await importer.importVueComponent("src/components/app/app");
                ///////////////////////////////////////////////////////
                await importer.linkStylesheet("src/components/wiki-page/wikipedia.css");
                // await importer.linkStylesheet("src/external/wikipedia.css");
                await importer.linkStylesheet("src/external/win7.css");
                await importer.scriptSrc("src/external/refresher.js");
            } else if(process.env.NODE_ENV === "production") {
                importer.setTotal(1);
                importer.setTimeout(1000 * 1);
                await importer.scriptSrc("dist/app.js");
                await importer.linkStylesheet("dist/app.css");
            } else {
                importer.setTotal(2);
                importer.setTimeout(1000 * 1);
                await importer.scriptSrc("dist/app.js");
                await importer.linkStylesheet("dist/app.css");
                await importer.scriptSrc("src/external/refresher.js");
            }
        }
        Create_app: {
            Vue.prototype.$dialogs = CDialogs;
            Vue.prototype.$logger = BasicLogger.create("app", { trace: true });
            Vue.prototype.$window = window;
            Vue.prototype.$importer = importer;
            Vue.prototype.$socketio = io;
            Vue.prototype.$fetch = fetch;
            Vue.prototype.$ufs = UFS_manager.create();
            Vue.prototype.$store = UniversalStore.create();
            Conflictive_point: {
                // Vue.prototype.$sqlite = new SQLitePolyfill("litestarter.main.db", "src/external/sql-wasm.wasm");
                // await Vue.prototype.$sqlite.init("litestarter.main.db", "src/external/sql-wasm.wasm");
                const dataSystem = SqliteDataSystem.create();
                Vue.prototype.$db = dataSystem.db;
                Vue.prototype.$auth = dataSystem.auth;
                Vue.prototype.$rest = dataSystem.rest;
                Vue.prototype.$ajax = fetch;
                await Vue.prototype.$db.init("litestarter.main.db", "src/external/sql-wasm.wasm");
            }
            const app = new Vue({
                render: h => h(Vue.options.components.app),
            }).$mount("#app");
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
};
window.addEventListener("load", main);
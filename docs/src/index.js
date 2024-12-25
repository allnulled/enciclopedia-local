window.process = {
    env: {
        // In local/http "test", in github/https "production":
        NODE_ENV: (window.location.href.startsWith("https") ? "production" : "test")
    }
};
process.env.NODE_ENV = "development";
process.env.NODE_ENV = "production";
process.env.NODE_ENV = "test";
const main = async function () {
    try {
        Import_scripts: {
            if (process.env.NODE_ENV === "test") {
                importer.setTotal(44);
                importer.setTimeout(1000 * 0);
                Bundlelist_js: {
                    Dependencies_level_1: {
                        await Promise.all([
                            importer.scriptSrc("src/external/socket.io-client.js"),
                            importer.scriptSrc("src/external/vue-v2.js"),
                            importer.scriptSrc("src/external/basic-logger.js"),
                            importer.scriptSrc("src/external/ensure.js"),
                            importer.scriptSrc("src/external/ufs.js"),
                            importer.scriptSrc("src/external/store.unbundled.js"),
                            importer.scriptSrc("src/external/browsie.js"),
                            importer.scriptSrc("src/external/sql-wasm.js"),
                            importer.scriptSrc("src/external/sqlite-polyfill.js"),
                            importer.scriptSrc("src/external/sqlite-data-system.unbundled.js"),
                            // await importer.scriptSrc("dist/components.js"),
                        ]);
                    }
                    Dependencies_level_2: {
                        await Promise.all([
                            importer.scriptSrc("src/directives/autofocus.js"),
                            importer.scriptSrc("src/components/utils/utils.js"),
                            importer.scriptSrc("src/components/c-dialogs/c-dialogs.js"),
                            importer.scriptSrc("src/components/c-badges/c-badges.js"),
                        ]);
                    }
                }
                Bundlelist_components: {
                    await Promise.all([
                        importer.importVueComponent("src/components/c-title/c-title"),
                        importer.importVueComponent("src/components/c-dialog/c-dialog"),
                        importer.importVueComponent("src/components/c-badge/c-badge"),
                        importer.importVueComponent("src/components/wiki-page/wiki-page"),
                        importer.importVueComponent("src/components/wiki-home-page/wiki-home-page"),
                        importer.importVueComponent("src/components/wiki-settings-page/wiki-settings-page"),
                        importer.importVueComponent("src/components/wiki-searcher-page/wiki-searcher-page"),
                        importer.importVueComponent("src/components/wiki-database-page/wiki-database-page"),
                        importer.importVueComponent("src/components/app/app"),
                    ]);
                }
                Bundlelist_css: {
                    await importer.linkStylesheet("src/external/win7.css");
                    await importer.linkStylesheet("src/components/wiki-styles/wiki-styles.css");
                    // await importer.linkStylesheet("dist/components.css"),
                }
                Payload: {
                    await importer.scriptSrc("src/external/refresher.js");
                }
            } else if (process.env.NODE_ENV === "production") {
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
            Vue.prototype.$ensure = ensure;
            Vue.prototype.$ufs = UFS_manager.create();
            Vue.prototype.$store = UniversalStore.create();
            Vue.prototype.$browsie = await Browsie.open("enciclopedia_local");
            Vue.prototype.$utils = Enciclopedia_local_utils;
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
"use strict";
(() => {
var exports = {};
exports.id = 320;
exports.ids = [320];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 3366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/prompt/[id]/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  DELETE: () => (DELETE),
  GET: () => (GET),
  PATCH: () => (PATCH)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./utils/database.js
var database = __webpack_require__(8400);
// EXTERNAL MODULE: ./models/prompt.js
var models_prompt = __webpack_require__(960);
;// CONCATENATED MODULE: ./app/api/prompt/[id]/route.js


// GET (read)
const GET = async (request, { params })=>{
    try {
        await (0,database/* connectToDB */.P)();
        const prompt = await models_prompt/* default */.Z.findById(params.id).populate("creator");
        if (!prompt) return new Response("Prompt not found", {
            status: 404
        });
        return new Response(JSON.stringify(prompt), {
            status: 200
        });
    } catch (error) {
        return new Response("Failed to fetch all prompts", {
            status: 500
        });
    }
};
// PATCH (update)
const PATCH = async (request, { params })=>{
    const { prompt, tag } = await request.json();
    try {
        await (0,database/* connectToDB */.P)();
        const existingPrompt = await models_prompt/* default */.Z.findById(params.id);
        if (!existingPrompt) {
            return new Response("Prompt not found", {
                status: 404
            });
        }
        // Update the prompt with new data
        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;
        await existingPrompt.save();
        return new Response("Successfully updated the Prompts", {
            status: 200
        });
    } catch (error) {
        return new Response("Failed to update prompt", {
            status: 500
        });
    }
};
// DELETE (delete)
const DELETE = async (request, { params })=>{
    try {
        await (0,database/* connectToDB */.P)();
        // Find the prompt by ID and remove it
        await models_prompt/* default */.Z.findByIdAndRemove(params.id);
        return new Response("Prompt delete successfully", {
            status: 200
        });
    } catch (error) {
        return new Response("Failed to delete prompt", {
            status: 500
        });
    }
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fprompt%2F%5Bid%5D%2Froute&name=app%2Fapi%2Fprompt%2F%5Bid%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2Fprompt%2F%5Bid%5D%2Froute.js&appDir=%2FUsers%2Faki%2Fjsmastery%2Fpromptopia%2Fapp&appPaths=%2Fapi%2Fprompt%2F%5Bid%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/prompt/[id]/route","pathname":"/api/prompt/[id]","filename":"route","bundlePath":"app/api/prompt/[id]/route"},"resolvedPagePath":"/Users/aki/jsmastery/promptopia/app/api/prompt/[id]/route.js","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/prompt/[id]/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [212,501,778], () => (__webpack_exec__(3366)));
module.exports = __webpack_exports__;

})();
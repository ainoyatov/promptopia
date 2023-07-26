exports.id = 767;
exports.ids = [767];
exports.modules = {

/***/ 5115:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6753));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6969))

/***/ }),

/***/ 992:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23))

/***/ }),

/***/ 6753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4284);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);
/* __next_internal_client_entry_do_not_use__ default auto */ 




const Nav = ()=>{
    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();
    const [providers, setProviders] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const [toggleDropdown, setToggleDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const setUpProviders = async ()=>{
            const response = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.getProviders)();
            setProviders(response);
        };
        setUpProviders();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
        className: "flex-between w-full mb-16 pt-3",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: "/",
                className: "flex gap-2 flex-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: "/assets/images/logo.svg",
                        alt: "logo",
                        width: 30,
                        height: 30,
                        className: "object-contain"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "logo_text",
                        children: "Promptopia"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "sm:flex hidden",
                children: session?.user ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex gap-3 md:gap-5",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/create-prompt",
                            className: "black_btn",
                            children: "Create Post"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            onClick: next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signOut,
                            className: "outline_btn",
                            children: "Sign Out"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/profile",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                src: session?.user.image,
                                width: 37,
                                height: 37,
                                className: "rounded-full",
                                alt: "profile"
                            })
                        })
                    ]
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: providers && Object.values(providers).map((provider)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signIn)(provider.id),
                            className: "black_btn",
                            children: "Sign In"
                        }, provider.name))
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "sm:hidden flex relative",
                children: session?.user ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: session?.user.image,
                            width: 37,
                            height: 37,
                            className: "rounded-full",
                            alt: "profile",
                            onClick: ()=>setToggleDropdown((prev)=>!prev)
                        }),
                        toggleDropdown && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "dropdown",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: "/profile",
                                    className: "dropdown_link",
                                    onClick: ()=>setToggleDropdown(false),
                                    children: "My Profile"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: "/create-prompt",
                                    className: "dropdown_link",
                                    onClick: ()=>setToggleDropdown(false),
                                    children: "Create Prompt"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        setToggleDropdown(false);
                                        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signOut)();
                                    },
                                    className: "mt-5 w-full black_btn",
                                    children: "Sign Out"
                                })
                            ]
                        })
                    ]
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: providers && Object.values(providers).map((provider)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signIn)(provider.id),
                            className: "black_btn",
                            children: "Sign In"
                        }, provider.name))
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);


/***/ }),

/***/ 6969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4284);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 

const Provider = ({ children, session })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_auth_react__WEBPACK_IMPORTED_MODULE_1__.SessionProvider, {
        session: session,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Provider);


/***/ }),

/***/ 2173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ layout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(7633);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./components/Nav.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/aki/jsmastery/promptopia/components/Nav.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Nav = (__default__);
;// CONCATENATED MODULE: ./components/Provider.jsx

const Provider_proxy = (0,module_proxy.createProxy)(String.raw`/Users/aki/jsmastery/promptopia/components/Provider.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Provider_esModule, $$typeof: Provider_$$typeof } = Provider_proxy;
const Provider_default_ = Provider_proxy.default;


/* harmony default export */ const Provider = (Provider_default_);
;// CONCATENATED MODULE: ./app/layout.jsx




const metadata = {
    title: "Promptopia",
    description: "Discover & Share AI Prompts"
};
const RootLayout = ({ children })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Provider, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "main",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "gradient"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                        className: "app",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Nav, {}),
                            children
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const layout = (RootLayout);


/***/ }),

/***/ 7633:
/***/ (() => {



/***/ })

};
;
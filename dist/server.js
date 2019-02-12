/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar path = __webpack_require__(/*! path */ \"path\");\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar routes_1 = __webpack_require__(/*! ./src/routes */ \"./src/server/src/routes/index.ts\");\r\nvar app = express();\r\nvar p = path.join(__dirname, '../public');\r\nconsole.log(p);\r\napp.use(express.static(p));\r\napp.use(express.json());\r\napp.use(routes_1.default);\r\nvar port = process.env.PORT || 3000;\r\napp.listen(port, function () {\r\n    console.log(\"Server listening on port: \" + port);\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.ts?");

/***/ }),

/***/ "./src/server/src/config/development.ts":
/*!**********************************************!*\
  !*** ./src/server/src/config/development.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.default = {\r\n    mysql: {\r\n        host: 'localhost',\r\n        database: 'bookstore',\r\n        user: 'bookapp',\r\n        password: 'finalproject'\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/server/src/config/development.ts?");

/***/ }),

/***/ "./src/server/src/config/index.ts":
/*!****************************************!*\
  !*** ./src/server/src/config/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.default = __webpack_require__(/*! ./development */ \"./src/server/src/config/development.ts\").default;\r\n\n\n//# sourceURL=webpack:///./src/server/src/config/index.ts?");

/***/ }),

/***/ "./src/server/src/db/index.ts":
/*!************************************!*\
  !*** ./src/server/src/db/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar mysql = __webpack_require__(/*! mysql */ \"mysql\");\r\nvar config_1 = __webpack_require__(/*! ../config */ \"./src/server/src/config/index.ts\");\r\nvar books_1 = __webpack_require__(/*! ./queries/books */ \"./src/server/src/db/queries/books.ts\");\r\nvar categories_1 = __webpack_require__(/*! ./queries/categories */ \"./src/server/src/db/queries/categories.ts\");\r\nvar tokens_1 = __webpack_require__(/*! ./queries/tokens */ \"./src/server/src/db/queries/tokens.ts\");\r\nvar users_1 = __webpack_require__(/*! ./queries/users */ \"./src/server/src/db/queries/users.ts\");\r\nexports.pool = mysql.createPool(config_1.default.mysql);\r\nexports.Query = function (query, values) {\r\n    return new Promise(function (resolve, reject) {\r\n        exports.pool.query(query, [values], function (err, results) {\r\n            if (err)\r\n                reject(err);\r\n            return resolve(results);\r\n        });\r\n    });\r\n};\r\nexports.default = {\r\n    Books: books_1.default,\r\n    Categories: categories_1.default,\r\n    Tokens: tokens_1.default,\r\n    Users: users_1.default\r\n};\r\n\n\n//# sourceURL=webpack:///./src/server/src/db/index.ts?");

/***/ }),

/***/ "./src/server/src/db/queries/books.ts":
/*!********************************************!*\
  !*** ./src/server/src/db/queries/books.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar index_1 = __webpack_require__(/*! ../index */ \"./src/server/src/db/index.ts\");\r\nvar getBooks = function () { return index_1.Query(\"SELECT * FROM books\"); };\r\nvar getBook = function (id) { return index_1.Query(\"SELECT * FROM books WHERE id = \" + id); };\r\nvar addBook = function (columns, values) { return index_1.Query(\"INSERT INTO books (\" + columns + \") VALUES(?)\", values); };\r\nvar editBook = function (updatedBook, id) { return index_1.Query(\"UPDATE books SET \" + updatedBook + \" WHERE id = \" + id); };\r\nvar deleteBook = function (id) { return index_1.Query(\"DELETE FROM books WHERE id = \" + id); };\r\nexports.default = {\r\n    getBook: getBook,\r\n    getBooks: getBooks,\r\n    addBook: addBook,\r\n    editBook: editBook,\r\n    deleteBook: deleteBook\r\n};\r\n\n\n//# sourceURL=webpack:///./src/server/src/db/queries/books.ts?");

/***/ }),

/***/ "./src/server/src/db/queries/categories.ts":
/*!*************************************************!*\
  !*** ./src/server/src/db/queries/categories.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar index_1 = __webpack_require__(/*! ../index */ \"./src/server/src/db/index.ts\");\r\nvar getCategories = function () { return index_1.Query(\"SELECT * FROM categories\"); };\r\nvar getCategory = function (id) { return index_1.Query(\"SELECT * FROM categories WHERE id = \" + id); };\r\nexports.default = {\r\n    getCategories: getCategories,\r\n    getCategory: getCategory\r\n};\r\n\n\n//# sourceURL=webpack:///./src/server/src/db/queries/categories.ts?");

/***/ }),

/***/ "./src/server/src/db/queries/tokens.ts":
/*!*********************************************!*\
  !*** ./src/server/src/db/queries/tokens.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar _this = this;\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar index_1 = __webpack_require__(/*! ../index */ \"./src/server/src/db/index.ts\");\r\nvar findOne = function (id, token) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {\r\n    return [2 /*return*/, index_1.Query(\"SELECT * FROM tokens WHERE id = \" + id + \" AND token = \\\"\" + token + \"\\\"\")];\r\n}); }); };\r\nvar insert = function (userid) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {\r\n    return [2 /*return*/, index_1.Query(\"INSERT INTO tokens (userid) VALUES (\" + userid + \")\")];\r\n}); }); };\r\nvar update = function (id, token) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {\r\n    return [2 /*return*/, index_1.Query(\"UPDATE tokens SET token = \\\"\" + token + \"\\\" WHERE id = \" + id)];\r\n}); }); };\r\nexports.default = {\r\n    findOne: findOne,\r\n    insert: insert,\r\n    update: update\r\n};\r\n\n\n//# sourceURL=webpack:///./src/server/src/db/queries/tokens.ts?");

/***/ }),

/***/ "./src/server/src/db/queries/users.ts":
/*!********************************************!*\
  !*** ./src/server/src/db/queries/users.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar _this = this;\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar index_1 = __webpack_require__(/*! ../index */ \"./src/server/src/db/index.ts\");\r\nvar addUser = function (columns, values) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {\r\n    return [2 /*return*/, index_1.Query(\"INSERT INTO users(\" + columns + \") VALUES(?)\", values)];\r\n}); }); };\r\nvar findByEmail = function (email) { return index_1.Query(\"SELECT * FROM users WHERE email = \\\"\" + email + \"\\\" LIMIT 1\"); };\r\nvar deleteUser = function (id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {\r\n    return [2 /*return*/, index_1.Query(\"DELETE FROM users WHERE id = \" + id)];\r\n}); }); };\r\nvar getUsers = function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {\r\n    return [2 /*return*/, index_1.Query(\"SELECT * FROM users\")];\r\n}); }); };\r\nvar getUser = function (id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {\r\n    return [2 /*return*/, index_1.Query(\"SELECT * FROM users WHERE id = \" + id)];\r\n}); }); };\r\nexports.default = {\r\n    addUser: addUser,\r\n    findByEmail: findByEmail,\r\n    deleteUser: deleteUser,\r\n    getUsers: getUsers,\r\n    getUser: getUser\r\n};\r\n\n\n//# sourceURL=webpack:///./src/server/src/db/queries/users.ts?");

/***/ }),

/***/ "./src/server/src/routes/api/bookRouter.ts":
/*!*************************************************!*\
  !*** ./src/server/src/routes/api/bookRouter.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar _this = this;\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __webpack_require__(/*! express */ \"express\");\r\nvar db_1 = __webpack_require__(/*! ../../db */ \"./src/server/src/db/index.ts\");\r\nvar router = express_1.Router();\r\nrouter.get('/:id?', function (req, res) { return __awaiter(_this, void 0, void 0, function () {\r\n    var id, books, e_1, book, e_2;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                id = req.params.id;\r\n                if (!id) return [3 /*break*/, 5];\r\n                _a.label = 1;\r\n            case 1:\r\n                _a.trys.push([1, 3, , 4]);\r\n                return [4 /*yield*/, db_1.default.Books.getBook(id)];\r\n            case 2:\r\n                books = _a.sent();\r\n                res.send(books);\r\n                return [3 /*break*/, 4];\r\n            case 3:\r\n                e_1 = _a.sent();\r\n                console.log(e_1);\r\n                res.sendStatus(500);\r\n                return [3 /*break*/, 4];\r\n            case 4: return [3 /*break*/, 8];\r\n            case 5:\r\n                _a.trys.push([5, 7, , 8]);\r\n                return [4 /*yield*/, db_1.default.Books.getBooks()];\r\n            case 6:\r\n                book = _a.sent();\r\n                res.send(book);\r\n                return [3 /*break*/, 8];\r\n            case 7:\r\n                e_2 = _a.sent();\r\n                console.log(e_2);\r\n                res.sendStatus(500);\r\n                return [3 /*break*/, 8];\r\n            case 8: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.post('/', function (req, res) { return __awaiter(_this, void 0, void 0, function () {\r\n    var book, columns, values, result, e_3;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                book = req.body;\r\n                columns = Object.keys(book);\r\n                values = Object['values'](book);\r\n                return [4 /*yield*/, db_1.default.Books.addBook(columns, values)];\r\n            case 1:\r\n                result = _a.sent();\r\n                res.json(result);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_3 = _a.sent();\r\n                console.log(e_3);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.delete('/:id', function (req, res) { return __awaiter(_this, void 0, void 0, function () {\r\n    var id, e_4;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                id = req.params.id;\r\n                _a.label = 1;\r\n            case 1:\r\n                _a.trys.push([1, 3, , 4]);\r\n                return [4 /*yield*/, db_1.default.Books.deleteBook(id)];\r\n            case 2:\r\n                _a.sent();\r\n                res.json({ message: 'Book Deleted!' });\r\n                return [3 /*break*/, 4];\r\n            case 3:\r\n                e_4 = _a.sent();\r\n                console.log(e_4);\r\n                res.sendStatus(500);\r\n                return [3 /*break*/, 4];\r\n            case 4: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.put('/:id', function (req, res) { return __awaiter(_this, void 0, void 0, function () {\r\n    var id, book, placeHolderColumns, updatedBook, e_5;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                id = req.params.id;\r\n                book = req.body;\r\n                _a.label = 1;\r\n            case 1:\r\n                _a.trys.push([1, 3, , 4]);\r\n                placeHolderColumns = Object.keys(book).map(function (key) { return [key + \"=\\\"\" + book[key] + \"\\\"\"]; });\r\n                updatedBook = placeHolderColumns.join(', ');\r\n                return [4 /*yield*/, db_1.default.Books.editBook(updatedBook, id)];\r\n            case 2:\r\n                _a.sent();\r\n                res.json({ message: 'book updated!' });\r\n                return [3 /*break*/, 4];\r\n            case 3:\r\n                e_5 = _a.sent();\r\n                console.log(e_5);\r\n                res.sendStatus(500);\r\n                return [3 /*break*/, 4];\r\n            case 4: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/src/routes/api/bookRouter.ts?");

/***/ }),

/***/ "./src/server/src/routes/api/categoriesRouter.ts":
/*!*******************************************************!*\
  !*** ./src/server/src/routes/api/categoriesRouter.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar _this = this;\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __webpack_require__(/*! express */ \"express\");\r\nvar db_1 = __webpack_require__(/*! ../../db */ \"./src/server/src/db/index.ts\");\r\nvar router = express_1.Router();\r\nrouter.get('/:id?', function (req, res) { return __awaiter(_this, void 0, void 0, function () {\r\n    var id, category, e_1, categories, e_2;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                id = req.params.id;\r\n                if (!id) return [3 /*break*/, 5];\r\n                _a.label = 1;\r\n            case 1:\r\n                _a.trys.push([1, 3, , 4]);\r\n                return [4 /*yield*/, db_1.default.Categories.getCategory(id)];\r\n            case 2:\r\n                category = _a.sent();\r\n                res.send(category);\r\n                return [3 /*break*/, 4];\r\n            case 3:\r\n                e_1 = _a.sent();\r\n                console.log(e_1);\r\n                res.sendStatus(500);\r\n                return [3 /*break*/, 4];\r\n            case 4: return [3 /*break*/, 8];\r\n            case 5:\r\n                _a.trys.push([5, 7, , 8]);\r\n                return [4 /*yield*/, db_1.default.Categories.getCategories()];\r\n            case 6:\r\n                categories = _a.sent();\r\n                res.send(categories);\r\n                return [3 /*break*/, 8];\r\n            case 7:\r\n                e_2 = _a.sent();\r\n                console.log(e_2);\r\n                res.sendStatus(500);\r\n                return [3 /*break*/, 8];\r\n            case 8: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/src/routes/api/categoriesRouter.ts?");

/***/ }),

/***/ "./src/server/src/routes/api/index.ts":
/*!********************************************!*\
  !*** ./src/server/src/routes/api/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __webpack_require__(/*! express */ \"express\");\r\nvar passport = __webpack_require__(/*! passport */ \"passport\");\r\nvar bookRouter_1 = __webpack_require__(/*! ./bookRouter */ \"./src/server/src/routes/api/bookRouter.ts\");\r\nvar categoriesRouter_1 = __webpack_require__(/*! ./categoriesRouter */ \"./src/server/src/routes/api/categoriesRouter.ts\");\r\nvar userRouter_1 = __webpack_require__(/*! ./userRouter */ \"./src/server/src/routes/api/userRouter.ts\");\r\nvar router = express_1.Router();\r\nrouter.use('/books', bookRouter_1.default);\r\nrouter.use('/categories', categoriesRouter_1.default);\r\nrouter.use(function (req, res, next) {\r\n    passport.authenticate('bearer', { session: false }, function (err, user, info) {\r\n        if (user)\r\n            req.user = user;\r\n        return next();\r\n    })(req, res, next);\r\n});\r\nrouter.use('/users', userRouter_1.default);\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/src/routes/api/index.ts?");

/***/ }),

/***/ "./src/server/src/routes/api/userRouter.ts":
/*!*************************************************!*\
  !*** ./src/server/src/routes/api/userRouter.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar _this = this;\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __webpack_require__(/*! express */ \"express\");\r\nvar db_1 = __webpack_require__(/*! ../../db */ \"./src/server/src/db/index.ts\");\r\nvar router = express_1.Router();\r\nrouter.get('/:id?', function (req, res) { return __awaiter(_this, void 0, void 0, function () {\r\n    var id, user, e_1, users, e_2;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                id = req.params.id;\r\n                if (!id) return [3 /*break*/, 5];\r\n                _a.label = 1;\r\n            case 1:\r\n                _a.trys.push([1, 3, , 4]);\r\n                return [4 /*yield*/, db_1.default.Users.getUser(id)];\r\n            case 2:\r\n                user = _a.sent();\r\n                res.send(user);\r\n                return [3 /*break*/, 4];\r\n            case 3:\r\n                e_1 = _a.sent();\r\n                console.log(e_1);\r\n                res.sendStatus(500);\r\n                return [3 /*break*/, 4];\r\n            case 4: return [3 /*break*/, 8];\r\n            case 5:\r\n                _a.trys.push([5, 7, , 8]);\r\n                return [4 /*yield*/, db_1.default.Users.getUsers()];\r\n            case 6:\r\n                users = _a.sent();\r\n                res.send(users);\r\n                return [3 /*break*/, 8];\r\n            case 7:\r\n                e_2 = _a.sent();\r\n                console.log(e_2);\r\n                res.sendStatus(500);\r\n                return [3 /*break*/, 8];\r\n            case 8: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/src/routes/api/userRouter.ts?");

/***/ }),

/***/ "./src/server/src/routes/auth/index.ts":
/*!*********************************************!*\
  !*** ./src/server/src/routes/auth/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __webpack_require__(/*! express */ \"express\");\r\nvar login_1 = __webpack_require__(/*! ./login */ \"./src/server/src/routes/auth/login.ts\");\r\nvar register_1 = __webpack_require__(/*! ./register */ \"./src/server/src/routes/auth/register.ts\");\r\nvar router = express_1.Router();\r\nrouter.use('/login', login_1.default);\r\nrouter.use('/register', register_1.default);\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/src/routes/auth/index.ts?");

/***/ }),

/***/ "./src/server/src/routes/auth/login.ts":
/*!*********************************************!*\
  !*** ./src/server/src/routes/auth/login.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar _this = this;\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar passport = __webpack_require__(/*! passport */ \"passport\");\r\nvar tokens_1 = __webpack_require__(/*! ../../utils/security/tokens */ \"./src/server/src/utils/security/tokens.ts\");\r\nvar db_1 = __webpack_require__(/*! ../../db */ \"./src/server/src/db/index.ts\");\r\nvar router = express.Router();\r\nrouter.post('/', passport.authenticate('local'), function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {\r\n    var user, token, e_1;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 3, , 4]);\r\n                return [4 /*yield*/, db_1.default.Users.findByEmail(req.body.email)];\r\n            case 1:\r\n                user = _a.sent();\r\n                return [4 /*yield*/, tokens_1.createToken({ userid: user[0].id })];\r\n            case 2:\r\n                token = _a.sent();\r\n                res.json({\r\n                    token: token,\r\n                    role: req.user.role,\r\n                    userid: req.user.id\r\n                });\r\n                return [3 /*break*/, 4];\r\n            case 3:\r\n                e_1 = _a.sent();\r\n                console.log(e_1);\r\n                return [3 /*break*/, 4];\r\n            case 4: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/src/routes/auth/login.ts?");

/***/ }),

/***/ "./src/server/src/routes/auth/register.ts":
/*!************************************************!*\
  !*** ./src/server/src/routes/auth/register.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar _this = this;\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar db_1 = __webpack_require__(/*! ../../db */ \"./src/server/src/db/index.ts\");\r\nvar passwords_1 = __webpack_require__(/*! ../../utils/security/passwords */ \"./src/server/src/utils/security/passwords.ts\");\r\nvar tokens_1 = __webpack_require__(/*! ../../utils/security/tokens */ \"./src/server/src/utils/security/tokens.ts\");\r\nvar router = express.Router();\r\nrouter.post('/', function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {\r\n    var user, columns, values, result, token, e_1;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 3, , 4]);\r\n                user = req.body;\r\n                user.password = passwords_1.HashPassword(req.body.password);\r\n                columns = Object.keys(user).join(', ');\r\n                values = Object['values'](user);\r\n                return [4 /*yield*/, db_1.default.Users.addUser(columns, values)];\r\n            case 1:\r\n                result = _a.sent();\r\n                return [4 /*yield*/, tokens_1.createToken({ userid: result.insertId })];\r\n            case 2:\r\n                token = _a.sent();\r\n                res.json({\r\n                    token: token,\r\n                    role: user.role,\r\n                    userid: result.insertID\r\n                });\r\n                return [3 /*break*/, 4];\r\n            case 3:\r\n                e_1 = _a.sent();\r\n                console.log(e_1);\r\n                res.sendStatus(500);\r\n                return [3 /*break*/, 4];\r\n            case 4:\r\n                ;\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/src/routes/auth/register.ts?");

/***/ }),

/***/ "./src/server/src/routes/index.ts":
/*!****************************************!*\
  !*** ./src/server/src/routes/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar api_1 = __webpack_require__(/*! ./api */ \"./src/server/src/routes/api/index.ts\");\r\nvar auth_1 = __webpack_require__(/*! ./auth */ \"./src/server/src/routes/auth/index.ts\");\r\nvar router = express.Router();\r\nrouter.use('/api', api_1.default);\r\nrouter.use('/auth', auth_1.default);\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/src/routes/index.ts?");

/***/ }),

/***/ "./src/server/src/utils/security/passwords.ts":
/*!****************************************************!*\
  !*** ./src/server/src/utils/security/passwords.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar bcrypt = __webpack_require__(/*! bcrypt-nodejs */ \"bcrypt-nodejs\");\r\nexports.ComparePassword = function (password, hash) {\r\n    return bcrypt.compareSync(password, hash);\r\n};\r\nexports.HashPassword = function (password) {\r\n    var salt = bcrypt.genSaltSync(10);\r\n    var hash = bcrypt.hashSync(password, salt);\r\n    return hash;\r\n};\r\n\n\n//# sourceURL=webpack:///./src/server/src/utils/security/passwords.ts?");

/***/ }),

/***/ "./src/server/src/utils/security/tokens.ts":
/*!*************************************************!*\
  !*** ./src/server/src/utils/security/tokens.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar _this = this;\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar crypto = __webpack_require__(/*! crypto */ \"crypto\");\r\nvar jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\r\nvar config_1 = __webpack_require__(/*! ../../config */ \"./src/server/src/config/index.ts\");\r\nvar db_1 = __webpack_require__(/*! ../../db */ \"./src/server/src/db/index.ts\");\r\nexports.createToken = function (payload) { return __awaiter(_this, void 0, void 0, function () {\r\n    var tokenID, token;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, db_1.default.Tokens.insert(payload.userid)];\r\n            case 1:\r\n                tokenID = _a.sent();\r\n                payload.accesstokenid = tokenID.insertId;\r\n                payload.unique = crypto.randomBytes(32).toString('hex');\r\n                return [4 /*yield*/, jwt.sign(payload, config_1.default.auth.secret)];\r\n            case 2:\r\n                token = _a.sent();\r\n                return [4 /*yield*/, db_1.default.Tokens.update(payload.accesstokenid, token)];\r\n            case 3:\r\n                _a.sent();\r\n                return [2 /*return*/, token];\r\n        }\r\n    });\r\n}); };\r\nexports.validToken = function (token) { return __awaiter(_this, void 0, void 0, function () {\r\n    var payload, accesstokenid;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                payload = jwt.decode(token);\r\n                return [4 /*yield*/, db_1.default.Tokens.findOne(payload.accesstokenid, token)];\r\n            case 1:\r\n                accesstokenid = (_a.sent())[0];\r\n                if (!accesstokenid) {\r\n                    throw new Error('invalid token');\r\n                }\r\n                else {\r\n                    return [2 /*return*/, payload];\r\n                }\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); };\r\n\n\n//# sourceURL=webpack:///./src/server/src/utils/security/tokens.ts?");

/***/ }),

/***/ "bcrypt-nodejs":
/*!********************************!*\
  !*** external "bcrypt-nodejs" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt-nodejs\");\n\n//# sourceURL=webpack:///external_%22bcrypt-nodejs%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mysql\");\n\n//# sourceURL=webpack:///external_%22mysql%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });
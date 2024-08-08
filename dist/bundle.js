/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _updatetime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updatetime */ \"./scripts/updatetime.js\");\n\n\n// Filter Country\nvar time = function time() {\n  var times = document.querySelectorAll('.box');\n  return Array.from(times);\n};\ntime();\nvar filters = {\n  searchText: ''\n};\nvar renderTime = function renderTime(times, filters) {\n  var find = false;\n  times.forEach(function (time) {\n    var heading = time.querySelector('.h2');\n    if (heading.textContent.toLowerCase().startsWith(filters.searchText.toLowerCase()) && heading.textContent.toLowerCase().includes(filters.searchText.toLowerCase())) {\n      time.style.display = 'block';\n      find = true;\n    } else {\n      time.style.display = 'none';\n    }\n  });\n  var message = document.querySelector('.message');\n  if (!find) {\n    message.textContent = 'Nothing found';\n  } else {\n    message.textContent = '';\n  }\n};\nrenderTime(time(), filters);\n\n// Input Button\n\nvar inputString = document.querySelector('input');\nvar clear = document.querySelector('.clear-button');\n\n// Function to toggle clear button visibility\nvar toggleButton = function toggleButton() {\n  if (inputString.value.trim() !== '') {\n    clear.style.display = 'inline-block';\n  } else {\n    clear.style.display = 'none';\n  }\n};\n\n// Input event listener to show/hide clear button and update filters\ninputString.addEventListener('input', function () {\n  filters.searchText = inputString.value;\n  renderTime(time(), filters);\n  toggleButton();\n});\n\n// When delete button is press\nclear.addEventListener('click', function (e) {\n  inputString.value = '';\n  filters.searchText = '';\n  renderTime(time(), filters);\n  toggleButton();\n});\ntoggleButton();\n\n// Input \n\ndocument.querySelector('input').addEventListener('input', function (e) {\n  filters.searchText = e.target.value;\n  renderTime(time(), filters);\n});\n\n// Sort by Alphabetically\n\nvar sort = function sort() {\n  var container = document.querySelector('.container');\n  var boxes = Array.from(document.querySelectorAll('.box'));\n  boxes.sort(function (a, b) {\n    var A = a.querySelector('.h2').textContent;\n    var B = b.querySelector('.h2').textContent;\n    return A.localeCompare(B);\n  });\n  boxes.forEach(function (box) {\n    container.appendChild(box);\n  });\n};\nsort();\n\n// Hamburger\n\nvar header = document.querySelector(\"header\");\nvar logo = document.querySelector(\".logo\");\nvar h1 = document.querySelector(\".h1\");\nvar input = document.querySelector(\".input\");\ndocument.querySelector(\".hamburger\").addEventListener(\"click\", function () {\n  header.classList.toggle(\"show\");\n  logo.classList.toggle(\"show\");\n  h1.classList.toggle(\"show\");\n  input.classList.toggle(\"show\");\n});\nsetInterval(_updatetime__WEBPACK_IMPORTED_MODULE_0__[\"default\"], 1000);\n\n//# sourceURL=webpack://world-clock/./scripts/index.js?");

/***/ }),

/***/ "./scripts/updatetime.js":
/*!*******************************!*\
  !*** ./scripts/updatetime.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar updateTime = function updateTime() {\n  var date = new Date();\n  AFG.innerHTML = date.toLocaleString('en-US', {\n    timeZone: 'Asia/Kabul'\n  }).split(',')[1];\n  PK.innerHTML = date.toLocaleString('en-US', {\n    timeZone: 'Asia/Karachi'\n  }).split(',')[1];\n  US.innerHTML = date.toLocaleString('en-US', {\n    timeZone: 'America/New_York'\n  }).split(',')[1];\n  CN.innerHTML = date.toLocaleString('en-US', {\n    timeZone: 'Asia/Shanghai'\n  }).split(',')[1];\n  KSA.innerHTML = date.toLocaleString('en-US', {\n    timeZone: 'Asia/Riyadh'\n  }).split(',')[1];\n  DXB.innerHTML = date.toLocaleString('en-US', {\n    timeZone: 'Asia/Dubai'\n  }).split(',')[1];\n  BRA.innerHTML = date.toLocaleString('en-US', {\n    timeZone: 'America/Sao_Paulo'\n  }).split(',')[1];\n  RUS.innerHTML = date.toLocaleString('en-US', {\n    timeZone: 'Europe/Moscow'\n  }).split(',')[1];\n  JPN.innerHTML = date.toLocaleString('en-US', {\n    timeZone: 'Asia/Tokyo'\n  }).split(',')[1];\n  IDN.innerHTML = date.toLocaleString('en-US', {\n    timeZone: 'Asia/Jakarta'\n  }).split(',')[1];\n  BGD.innerHTML = date.toLocaleString('en-US', {\n    timeZone: 'Asia/Dhaka'\n  }).split(',')[1];\n  EGY.innerHTML = date.toLocaleString('en-US', {\n    timeZone: 'Africa/Cairo'\n  }).split(',')[1];\n  TUR.innerHTML = date.toLocaleString('en-US', {\n    timeZone: 'Europe/Istanbul'\n  }).split(',')[1];\n  DZA.innerHTML = date.toLocaleString('en-US', {\n    timeZone: 'Africa/Algiers'\n  }).split(',')[1];\n  IRQ.innerHTML = date.toLocaleString('en-US', {\n    timeZone: 'Asia/Baghdad'\n  }).split(',')[1];\n  AL.innerHTML = date.toLocaleString('en-US', {\n    timeZone: 'Europe/Tirane'\n  }).split(',')[1];\n  DZ.innerHTML = date.toLocaleString('en-US', {\n    timeZone: 'Africa/Algiers'\n  }).split(',')[1];\n  AR.innerHTML = date.toLocaleString('en-US', {\n    timeZone: 'America/Argentina/Buenos_Aires'\n  }).split(',')[1];\n  AM.innerHTML = date.toLocaleString('en-US', {\n    timeZone: 'Asia/Yerevan'\n  }).split(',')[1];\n  AU.innerHTML = date.toLocaleString('en-US', {\n    timeZone: 'Australia/Sydney'\n  }).split(',')[1];\n  AT.innerHTML = date.toLocaleString('en-US', {\n    timeZone: 'Europe/Vienna'\n  }).split(',')[1];\n  AZ.innerHTML = date.toLocaleString('en-US', {\n    timeZone: 'Asia/Baku'\n  }).split(',')[1];\n  BH.innerHTML = date.toLocaleString('en-US', {\n    timeZone: 'Asia/Bahrain'\n  }).split(',')[1];\n  BJ.innerHTML = date.toLocaleString('en-US', {\n    timeZone: 'Africa/Porto-Novo'\n  }).split(',')[1];\n  BT.innerHTML = date.toLocaleString('en-US', {\n    timeZone: 'Asia/Thimphu'\n  }).split(',')[1];\n  CA.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'America/Toronto'\n  }).split(',')[1];\n  CO.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'America/Bogota'\n  }).split(',')[1];\n  DK.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Europe/Copenhagen'\n  }).split(',')[1];\n  ET.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Africa/Addis_Ababa'\n  }).split(',')[1];\n  GE.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Asia/Tbilisi'\n  }).split(',')[1];\n  DE.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Europe/Berlin'\n  }).split(',')[1];\n  GR.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Europe/Athens'\n  }).split(',')[1];\n  IS.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Atlantic/Reykjavik'\n  }).split(',')[1];\n  IE.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Europe/Dublin'\n  }).split(',')[1];\n  ITA.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Europe/Rome'\n  }).split(',')[1];\n  JAM.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'America/Jamaica'\n  }).split(',')[1];\n  JOR.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Asia/Amman'\n  }).split(',')[1];\n  KAZ.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Asia/Almaty'\n  }).split(',')[1];\n  KEN.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Africa/Nairobi'\n  }).split(',')[1];\n  KOR.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Asia/Seoul'\n  }).split(',')[1];\n  KWT.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Asia/Kuwait'\n  }).split(',')[1];\n  LBR.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Africa/Monrovia'\n  }).split(',')[1];\n  LBY.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Africa/Tripoli'\n  }).split(',')[1];\n  MYS.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Asia/Kuala_Lumpur'\n  }).split(',')[1];\n  MDV.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Indian/Maldives'\n  }).split(',')[1];\n  MEX.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'America/Mexico_City'\n  }).split(',')[1];\n  MNG.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Asia/Ulaanbaatar'\n  }).split(',')[1];\n  MAR.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Africa/Casablanca'\n  }).split(',')[1];\n  MMR.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Asia/Yangon'\n  }).split(',')[1];\n  NAM.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Africa/Windhoek'\n  }).split(',')[1];\n  NPL.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Asia/Kathmandu'\n  }).split(',')[1];\n  NLD.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Europe/Amsterdam'\n  }).split(',')[1];\n  NZL.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Pacific/Auckland'\n  }).split(',')[1];\n  NGA.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Africa/Lagos'\n  }).split(',')[1];\n  NOR.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Europe/Oslo'\n  }).split(',')[1];\n  OMN.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Asia/Muscat'\n  }).split(',')[1];\n  PSE.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Asia/Gaza'\n  }).split(',')[1];\n  PHL.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Asia/Manila'\n  }).split(',')[1];\n  POL.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Europe/Warsaw'\n  }).split(',')[1];\n  PRT.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Europe/Lisbon'\n  }).split(',')[1];\n  QAT.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Asia/Qatar'\n  }).split(',')[1];\n  ROU.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Europe/Bucharest'\n  }).split(',')[1];\n  SRB.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Europe/Belgrade'\n  }).split(',')[1];\n  SGP.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Asia/Singapore'\n  }).split(',')[1];\n  ZAF.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Africa/Johannesburg'\n  }).split(',')[1];\n  ESP.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Europe/Madrid'\n  }).split(',')[1];\n  LKA.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Asia/Colombo'\n  }).split(',')[1];\n  SDN.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Africa/Khartoum'\n  }).split(',')[1];\n  SWE.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Europe/Stockholm'\n  }).split(',')[1];\n  CHE.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Europe/Zurich'\n  }).split(',')[1];\n  SYR.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Asia/Damascus'\n  }).split(',')[1];\n  TJK.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Asia/Dushanbe'\n  }).split(',')[1];\n  TZA.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Africa/Dar_es_Salaam'\n  }).split(',')[1];\n  THA.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Asia/Bangkok'\n  }).split(',')[1];\n  TKM.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Asia/Ashgabat'\n  }).split(',')[1];\n  UKR.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Europe/Kiev'\n  }).split(',')[1];\n  GBR.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Europe/London'\n  }).split(',')[1];\n  UZB.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Asia/Tashkent'\n  }).split(',')[1];\n  VAT.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Europe/Vatican'\n  }).split(',')[1];\n  YEM.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Asia/Aden'\n  }).split(',')[1];\n  ZWE.innerHTML = new Date().toLocaleString('en-US', {\n    timeZone: 'Africa/Harare'\n  }).split(',')[1];\n};\nsetInterval(updateTime, 1000);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateTime);\n\n//# sourceURL=webpack://world-clock/./scripts/updatetime.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;
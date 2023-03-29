"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["main"],{

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _banana_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banana.jpg */ "./src/banana.jpg");


const homepage = () => {
    const content = document.querySelector('#content');
    
    const image = document.createElement('img');
        image.src = _banana_jpg__WEBPACK_IMPORTED_MODULE_0__;
        image.style.width = '200px';
        content.appendChild(image);

    const pageTitle = document.createElement('h1');
        pageTitle.textContent = "Jim's bananas";
        content.appendChild(pageTitle);

    const copy = document.createElement('p');
        copy.textContent = "Providing fresh and potassium rich cuisine in a comfy, stylish environment."
        content.appendChild(copy);

    return content
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homepage);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print */ "./src/print.js");
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");



(0,_homepage__WEBPACK_IMPORTED_MODULE_1__["default"])();


/***/ }),

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printMe)
/* harmony export */ });
function printMe() {
    console.log('I get called from print.js!!!');
  }



/***/ }),

/***/ "./src/banana.jpg":
/*!************************!*\
  !*** ./src/banana.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a0e5661ebb13576a3f4b.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix3Q0FBTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7OztBQ3JCTztBQUNJO0FBQ2xDO0FBQ0EscURBQVE7Ozs7Ozs7Ozs7Ozs7OztBQ0hPO0FBQ2Y7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvcHJpbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJhbmFuYSBmcm9tICcuL2JhbmFuYS5qcGcnO1xyXG5cclxuY29uc3QgaG9tZXBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuICAgIFxyXG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBpbWFnZS5zcmMgPSBiYW5hbmE7XHJcbiAgICAgICAgaW1hZ2Uuc3R5bGUud2lkdGggPSAnMjAwcHgnO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG5cclxuICAgIGNvbnN0IHBhZ2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICAgICAgcGFnZVRpdGxlLnRleHRDb250ZW50ID0gXCJKaW0ncyBiYW5hbmFzXCI7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChwYWdlVGl0bGUpO1xyXG5cclxuICAgIGNvbnN0IGNvcHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgY29weS50ZXh0Q29udGVudCA9IFwiUHJvdmlkaW5nIGZyZXNoIGFuZCBwb3Rhc3NpdW0gcmljaCBjdWlzaW5lIGluIGEgY29tZnksIHN0eWxpc2ggZW52aXJvbm1lbnQuXCJcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvcHkpO1xyXG5cclxuICAgIHJldHVybiBjb250ZW50XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhvbWVwYWdlOyIsImltcG9ydCBwcmludE1lIGZyb20gJy4vcHJpbnQnO1xyXG5pbXBvcnQgaG9tZXBhZ2UgZnJvbSAnLi9ob21lcGFnZSc7XHJcblxyXG5ob21lcGFnZSgpO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludE1lKCkge1xyXG4gICAgY29uc29sZS5sb2coJ0kgZ2V0IGNhbGxlZCBmcm9tIHByaW50LmpzISEhJyk7XHJcbiAgfVxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
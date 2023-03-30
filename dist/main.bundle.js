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
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");



(0,_homepage__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const addMenuItem = (dish, price, imgSrc) => {
    const contentDiv = document.querySelector('#content');
    const newDish = document.createElement('div');

    const dishName = document.createElement('p');
        dishName.textContent = dish;
        newDish.appendChild(dishName);

    const dishPrice = document.createElement('p');
        dishPrice.textContent = price;
        newDish.appendChild(dishPrice);

    const dishImage = document.createElement('img');
        dishImage.src = imgSrc;
        newDish.appendChild(dishImage);

    contentDiv.appendChild(newDish);
};

const renderMenuPage = () => {
    const contentDiv = document.querySelector('#content');
    Array.from(contentDiv.childNodes).forEach((child) => {
        contentDiv.removeChild(child);
      });

    addMenuItem('Organic Banana Bunch', '$5.50', './banana.jpg');
    addMenuItem('Regular Banana Bunch', '$3.90', './banana.jpg');
    addMenuItem('Banana Singleton', '$1', './banana.jpg');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMenuPage);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix3Q0FBTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7OztBQ3JCVztBQUNFO0FBQ3BDO0FBQ0EscURBQVE7QUFDUixpREFBYzs7Ozs7Ozs7Ozs7Ozs7O0FDSmQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBiYW5hbmEgZnJvbSAnLi9iYW5hbmEuanBnJztcclxuXHJcbmNvbnN0IGhvbWVwYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcbiAgICBcclxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgaW1hZ2Uuc3JjID0gYmFuYW5hO1xyXG4gICAgICAgIGltYWdlLnN0eWxlLndpZHRoID0gJzIwMHB4JztcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGltYWdlKTtcclxuXHJcbiAgICBjb25zdCBwYWdlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgICAgIHBhZ2VUaXRsZS50ZXh0Q29udGVudCA9IFwiSmltJ3MgYmFuYW5hc1wiO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFnZVRpdGxlKTtcclxuXHJcbiAgICBjb25zdCBjb3B5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvcHkudGV4dENvbnRlbnQgPSBcIlByb3ZpZGluZyBmcmVzaCBhbmQgcG90YXNzaXVtIHJpY2ggY3Vpc2luZSBpbiBhIGNvbWZ5LCBzdHlsaXNoIGVudmlyb25tZW50LlwiXHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjb3B5KTtcclxuXHJcbiAgICByZXR1cm4gY29udGVudFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBob21lcGFnZTsiLCJpbXBvcnQgaG9tZXBhZ2UgZnJvbSAnLi9ob21lcGFnZSc7XHJcbmltcG9ydCByZW5kZXJNZW51UGFnZSBmcm9tICcuL21lbnUnO1xyXG5cclxuaG9tZXBhZ2UoKTtcclxucmVuZGVyTWVudVBhZ2UoKTtcclxuIiwiXHJcbmNvbnN0IGFkZE1lbnVJdGVtID0gKGRpc2gsIHByaWNlLCBpbWdTcmMpID0+IHtcclxuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG4gICAgY29uc3QgbmV3RGlzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGNvbnN0IGRpc2hOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGRpc2hOYW1lLnRleHRDb250ZW50ID0gZGlzaDtcclxuICAgICAgICBuZXdEaXNoLmFwcGVuZENoaWxkKGRpc2hOYW1lKTtcclxuXHJcbiAgICBjb25zdCBkaXNoUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgZGlzaFByaWNlLnRleHRDb250ZW50ID0gcHJpY2U7XHJcbiAgICAgICAgbmV3RGlzaC5hcHBlbmRDaGlsZChkaXNoUHJpY2UpO1xyXG5cclxuICAgIGNvbnN0IGRpc2hJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGRpc2hJbWFnZS5zcmMgPSBpbWdTcmM7XHJcbiAgICAgICAgbmV3RGlzaC5hcHBlbmRDaGlsZChkaXNoSW1hZ2UpO1xyXG5cclxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobmV3RGlzaCk7XHJcbn07XHJcblxyXG5jb25zdCByZW5kZXJNZW51UGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG4gICAgQXJyYXkuZnJvbShjb250ZW50RGl2LmNoaWxkTm9kZXMpLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICAgICAgY29udGVudERpdi5yZW1vdmVDaGlsZChjaGlsZCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGFkZE1lbnVJdGVtKCdPcmdhbmljIEJhbmFuYSBCdW5jaCcsICckNS41MCcsICcuL2JhbmFuYS5qcGcnKTtcclxuICAgIGFkZE1lbnVJdGVtKCdSZWd1bGFyIEJhbmFuYSBCdW5jaCcsICckMy45MCcsICcuL2JhbmFuYS5qcGcnKTtcclxuICAgIGFkZE1lbnVJdGVtKCdCYW5hbmEgU2luZ2xldG9uJywgJyQxJywgJy4vYmFuYW5hLmpwZycpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZW5kZXJNZW51UGFnZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
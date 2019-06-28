(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

  /***/ "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function() {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }
    webpackEmptyAsyncContext.keys = function() { return []; };
    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

    /***/ }),

  /***/ "./src/app/app.component.html":
  /*!************************************!*\
    !*** ./src/app/app.component.html ***!
    \************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    module.exports = "<h1>Teamfight Tactics Item Helper</h1>\n<div class=\"info-text\">\n  Toggle this during carousel to know what items to grab\n</div>\n\n<mat-button-toggle mat-button mat-raised-button class=\"filter-button\" #filter [checked]=false>\n  Show only recipes that require one more item\n</mat-button-toggle>\n<mat-divider></mat-divider>\n<h2>Base Items</h2>\n<div class=\"info-text\">\n  Click the icon to toggle which items you have available. Available items will have a green border in recipes.\n</div>\n\n<div class=\"base-items-container\">\n  <mat-button-toggle-group class=\"base-items\" #selectedItems multiple (change)=\"baseItemChange($event)\">\n    <mat-button-toggle *ngFor=\"let item of baseItems\" value=\"{{item.id}}\" aria-label=\"{{item.name}}\">\n        <img [src]=\"item.iconPath\">\n    </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n<mat-divider></mat-divider>\n<h2>Combined Items</h2>\n\n<ng-container *ngFor=\"let tier of tiers; let i = index\">\n  <h3>Tier {{i+1}}</h3>\n  <div class=\"completed-items\">\n    <ng-container *ngFor=\"let item of tier\">\n      <div class=\"completed-item\" *ngIf=\"!filter.checked || hasAtLeastOneComponent(item)\">\n        <div class=\"completed-item-display\">\n          <div class=\"icon\">\n            <img [src]=\"item.iconPath\">\n          </div>\n          <div class=\"name\">\n            {{item.name}}\n          </div>\n        </div>\n        <div class=\"spacer\"></div>\n        <div [ngClass]=\"{'icon': true, 'selected': itemSelected(item.in1), 'not-selected': !itemSelected(item.in1)}\">\n          <img [src]=\"item.in1.iconPath\">\n        </div>\n        <div class=\"plus\">\n          +\n        </div>\n        <div [ngClass]=\"{'icon': true, 'selected': itemSelected(item.in2), 'not-selected': !itemSelected(item.in2)}\">\n          <img [src]=\"item.in2.iconPath\">\n        </div>\n        <div class=\"spacer\"></div>\n        <div class=\"description\">\n          {{item.description}}\n        </div>\n      </div>\n    </ng-container>\n  </div>\n</ng-container>\n\n"

    /***/ }),

  /***/ "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    module.exports = "h1 {\n  text-align: center; }\n\nh2 {\n  margin-left: 10px; }\n\nh3 {\n  text-align: center; }\n\n.base-items-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin-bottom: 25px; }\n\n.base-items-container .mat-button-toggle-group {\n    width: 100%;\n    border: none;\n    display: -webkit-inline-box;\n    display: inline-flex;\n    -webkit-box-pack: center;\n            justify-content: center; }\n\n.base-items {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: wrap; }\n\n.base-items .mat-button-toggle-label-content {\n    padding: 0 !important; }\n\n.base-items mat-button-toggle {\n    padding: 0;\n    margin-right: 15px; }\n\n.base-items .mat-button-toggle {\n    -webkit-filter: brightness(50%) grayscale(75%);\n            filter: brightness(50%) grayscale(75%); }\n\n.base-items .mat-button-toggle-checked {\n    -webkit-filter: none;\n            filter: none; }\n\n.base-items .mat-button-toggle-button {\n    margin: 0;\n    max-width: 64px;\n    max-height: 64px; }\n\n.info-text {\n  margin-left: 10px;\n  margin-bottom: 10px; }\n\n.completed-items {\n  margin-left: 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n\n.completed-items .completed-item {\n    min-height: 80px;\n    padding: 10px;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    flex-wrap: wrap;\n    -webkit-box-align: center;\n            align-items: center; }\n\n.completed-items .completed-item .completed-item-display {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n              flex-direction: column;\n      width: 15%;\n      -webkit-box-align: center;\n              align-items: center; }\n\n.completed-items .completed-item .completed-item-display .icon {\n        height: 64px;\n        width: 64px; }\n\n@media screen and (min-width: 620px) {\n        .completed-items .completed-item .completed-item-display .name {\n          font-weight: 300;\n          font-size: 20px; } }\n\n@media screen and (max-width: 620px) {\n        .completed-items .completed-item .completed-item-display .name {\n          display: none; } }\n\n.completed-items .completed-item .spacer {\n      width: 50px; }\n\n.completed-items .completed-item .icon {\n      height: 64px;\n      width: 64px; }\n\n.completed-items .completed-item .icon.not-selected {\n        border-style: solid;\n        border-width: 7px;\n        border-radius: 5px;\n        border-color: red; }\n\n.completed-items .completed-item .icon.selected {\n        border-style: solid;\n        border-width: 7px;\n        border-radius: 5px;\n        border-color: green; }\n\n.completed-items .completed-item .plus {\n      font-weight: bold;\n      font-size: 48px;\n      margin-left: 10px;\n      margin-right: 10px; }\n\n.completed-items .completed-item .description {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n              flex-direction: column;\n      margin-left: 10px;\n      font-size: 24px; }\n\nmat-button-toggle.filter-button {\n  margin-left: 20px;\n  margin-bottom: 20px;\n  display: block;\n  max-width: 350px;\n  text-align: center; }\n\n.mat-button-toggle-button {\n  max-width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxBcnRlbVxcV2Vic3Rvcm1Qcm9qZWN0c1xcdGZ0SXRlbXMvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFJLGtCQUFrQixFQUFBOztBQUN0QjtFQUFJLGlCQUFpQixFQUFBOztBQUNyQjtFQUFJLGtCQUFrQixFQUFBOztBQUl0QjtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBOztBQUhyQjtJQU1JLFdBQVc7SUFDWCxZQUFZO0lBQ1osMkJBQW9CO0lBQXBCLG9CQUFvQjtJQUNwQix3QkFBdUI7WUFBdkIsdUJBQXVCLEVBQUE7O0FBSTNCO0VBQ0UsMkJBQW9CO0VBQXBCLG9CQUFvQjtFQUNwQiw4QkFBbUI7RUFBbkIsNkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FBSGpCO0lBTUkscUJBQXFCLEVBQUE7O0FBTnpCO0lBWUksVUFBVTtJQUNWLGtCQUFpQixFQUFBOztBQWJyQjtJQWlCSSw4Q0FBc0M7WUFBdEMsc0NBQXNDLEVBQUE7O0FBakIxQztJQXFCSSxvQkFBWTtZQUFaLFlBQVksRUFBQTs7QUFyQmhCO0lBeUJJLFNBQVM7SUFDVCxlQUFlO0lBQ2YsZ0JBQWdCLEVBQUE7O0FBS3BCO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGlCQUFpQjtFQUNqQixvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQixFQUFBOztBQUh4QjtJQU1JLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isb0JBQWE7SUFBYixhQUFhO0lBQ2IsOEJBQW1CO0lBQW5CLDZCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHlCQUFtQjtZQUFuQixtQkFBbUIsRUFBQTs7QUFYdkI7TUFjTSxvQkFBYTtNQUFiLGFBQWE7TUFDYiw0QkFBc0I7TUFBdEIsNkJBQXNCO2NBQXRCLHNCQUFzQjtNQUN0QixVQUFVO01BQ1YseUJBQW1CO2NBQW5CLG1CQUFtQixFQUFBOztBQWpCekI7UUFtQlEsWUFBWTtRQUNaLFdBQVcsRUFBQTs7QUFHYjtRQXZCTjtVQXlCVSxnQkFBZ0I7VUFDaEIsZUFBZSxFQUFBLEVBQ2hCOztBQUdIO1FBOUJOO1VBZ0NVLGFBQWEsRUFBQSxFQUNkOztBQWpDVDtNQXdDTSxXQUFXLEVBQUE7O0FBeENqQjtNQTRDTSxZQUFZO01BQ1osV0FBVyxFQUFBOztBQTdDakI7UUFnRFEsbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsaUJBQWlCLEVBQUE7O0FBbkR6QjtRQXVEUSxtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixtQkFBbUIsRUFBQTs7QUExRDNCO01BK0RNLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLGtCQUFrQixFQUFBOztBQWxFeEI7TUFzRU0sb0JBQWE7TUFBYixhQUFhO01BQ2IsNEJBQXNCO01BQXRCLDZCQUFzQjtjQUF0QixzQkFBc0I7TUFDdEIsaUJBQWlCO01BQ2pCLGVBQWUsRUFBQTs7QUFLckI7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBSXBCO0VBQ0UsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge3RleHQtYWxpZ246IGNlbnRlcjt9XHJcbmgyIHttYXJnaW4tbGVmdDogMTBweDt9XHJcbmgzIHt0ZXh0LWFsaWduOiBjZW50ZXI7fVxyXG5cclxuXHJcblxyXG4uYmFzZS1pdGVtcy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG5cclxuICAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuLmJhc2UtaXRlbXMge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAubWF0LWJ1dHRvbi10b2dnbGUtbGFiZWwtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIG1hdC1idXR0b24tdG9nZ2xlIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MTVweDtcclxuICB9XHJcblxyXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNTAlKSBncmF5c2NhbGUoNzUlKTtcclxuICB9XHJcblxyXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcclxuICAgIGZpbHRlcjogbm9uZTtcclxuICB9XHJcblxyXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1idXR0b24ge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWF4LXdpZHRoOiA2NHB4O1xyXG4gICAgbWF4LWhlaWdodDogNjRweDtcclxuICB9XHJcblxyXG59XHJcblxyXG4uaW5mby10ZXh0IHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uY29tcGxldGVkLWl0ZW1zIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIC5jb21wbGV0ZWQtaXRlbSB7XHJcbiAgICBtaW4taGVpZ2h0OiA4MHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAuY29tcGxldGVkLWl0ZW0tZGlzcGxheSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIHdpZHRoOiAxNSU7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIC5pY29uIHtcclxuICAgICAgICBoZWlnaHQ6IDY0cHg7XHJcbiAgICAgICAgd2lkdGg6IDY0cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYyMHB4KSB7XHJcbiAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyMHB4KSB7XHJcbiAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5zcGFjZXIge1xyXG4gICAgICB3aWR0aDogNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuaWNvbiB7XHJcbiAgICAgIGhlaWdodDogNjRweDtcclxuICAgICAgd2lkdGg6IDY0cHg7XHJcblxyXG4gICAgICAmLm5vdC1zZWxlY3RlZCB7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDdweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuc2VsZWN0ZWQge1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiA3cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogZ3JlZW47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucGx1cyB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbm1hdC1idXR0b24tdG9nZ2xlLmZpbHRlci1idXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWF4LXdpZHRoOiAzNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLy9tYXgtd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LWJ1dHRvbi10b2dnbGUtYnV0dG9uIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"

    /***/ }),

  /***/ "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/
  /*! exports provided: AppComponent */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
    /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
    /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
    /* harmony import */ var _item_defs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item-defs */ "./src/app/item-defs.ts");



    var AppComponent = /** @class */ (function () {
      function AppComponent() {
        this.baseItems = _item_defs__WEBPACK_IMPORTED_MODULE_2__["baseItemList"];
        this.tiers = [];
        this.tiers[0] = _item_defs__WEBPACK_IMPORTED_MODULE_2__["tier1ItemList"];
        this.tiers[1] = _item_defs__WEBPACK_IMPORTED_MODULE_2__["tier2ItemList"];
        this.tiers[2] = _item_defs__WEBPACK_IMPORTED_MODULE_2__["tier3ItemList"];
        this.selectedItems = [];
      }
      AppComponent.prototype.baseItemChange = function (ev) {
        this.selectedItems = ev.value;
      };
      AppComponent.prototype.itemSelected = function (item) {
        return this.selectedItems.includes(item.id);
      };
      AppComponent.prototype.hasAtLeastOneComponent = function (item) {
        return this.itemSelected(item.in1) || this.itemSelected(item.in2);
      };
      AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
          selector: 'app-root',
          template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
      ], AppComponent);
      return AppComponent;
    }());



    /***/ }),

  /***/ "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/
  /*! exports provided: AppModule */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
    /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
    /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
    /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
    /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
    /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
    /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






    var AppModule = /** @class */ (function () {
      function AppModule() {
      }
      AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
          declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
          ],
          imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"]
          ],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
      ], AppModule);
      return AppModule;
    }());



    /***/ }),

  /***/ "./src/app/item-defs.ts":
  /*!******************************!*\
    !*** ./src/app/item-defs.ts ***!
    \******************************/
  /*! exports provided: BaseItem, baseItems, baseItemList, CompletedItem, tier1ItemList, tier2ItemList, tier3ItemList */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseItem", function() { return BaseItem; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseItems", function() { return baseItems; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseItemList", function() { return baseItemList; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletedItem", function() { return CompletedItem; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tier1ItemList", function() { return tier1ItemList; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tier2ItemList", function() { return tier2ItemList; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tier3ItemList", function() { return tier3ItemList; });
    /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

    var BaseItem = /** @class */ (function () {
      function BaseItem() {
      }
      return BaseItem;
    }());

    var baseItems = {
      BF_SWORD: {
        id: 'BF_SWORD',
        name: 'B.F. Sword',
        iconPath: 'assets/BF_SWORD.png',
        description: '+20 Attack Damage'
      },
      RECURVE_BOW: {
        id: 'RECURVE_BOW',
        name: 'Recurve Bow',
        iconPath: 'assets/RECURVE_BOW.png',
        description: '+15% Attack Speed'
      },
      NEEDLESSLY_LARGE_ROD: {
        id: 'NEEDLESSLY_LARGE_ROD',
        name: 'Needlessly Large Rod',
        iconPath: 'assets/NEEDLESSLY_LARGE_ROD.png',
        description: '+20% Spell Damage'
      },
      TEAR_OF_THE_GODDESS: {
        id: 'TEAR_OF_THE_GODDESS',
        name: 'Tear of the Goddess',
        iconPath: 'assets/TEAR_OF_THE_GODDESS.png',
        description: '+20 Mana'
      },
      CHAIN_VEST: {
        id: 'CHAIN_VEST',
        name: 'Chain Vest',
        iconPath: 'assets/CHAIN_VEST.png',
        description: '+20 Armor'
      },
      NEGATRON_CLOAK: {
        id: 'NEGATRON_CLOAK',
        name: 'Negatron Cloak',
        iconPath: 'assets/NEGATRON_CLOAK.png',
        description: '+20 Magic Resist'
      },
      GIANTS_BELT: {
        id: 'GIANTS_BELT',
        name: 'Giants Belt',
        iconPath: 'assets/GIANTS_BELT.png',
        description: '+200 Health'
      },
      SPATULA: {
        id: 'SPATULA',
        name: 'Spatula',
        iconPath: 'assets/SPATULA.png',
        description: 'It must do something'
      }
    };
    var baseItemList = Object.values(baseItems);
    var CompletedItem = /** @class */ (function (_super) {
      tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CompletedItem, _super);
      function CompletedItem() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      return CompletedItem;
    }(BaseItem));

    var tier1ItemList = [
      {
        id: 'BLOODTHIRSTER',
        name: 'Bloodthirster',
        iconPath: 'assets/BLOODTHIRSTER.png',
        description: '+35% Lifesteal',
        in1: baseItems.BF_SWORD,
        in2: baseItems.NEGATRON_CLOAK,
      },
      {
        id: 'FORCE_OF_NATURE',
        name: 'Force of Nature',
        iconPath: 'assets/FORCE_OF_NATURE.png',
        description: 'Gain +1 team size',
        in1: baseItems.SPATULA,
        in2: baseItems.SPATULA,
      },
      {
        id: 'GUINSOOS_RAGEBLADE',
        name: 'Guinsoo\'s Rageblade',
        iconPath: 'assets/GUINSOOS_RAGEBLADE.png',
        description: 'Attacks grant 3% Attack Speed. Stacks infinitely',
        in1: baseItems.RECURVE_BOW,
        in2: baseItems.NEEDLESSLY_LARGE_ROD,
      },
      {
        id: 'RAPID_FIRECANNON',
        name: 'Rapid Firecannon',
        iconPath: 'assets/RAPID_FIRECANNON.png',
        description: 'Wearer\'s attacks cannot be dodged. Attack Range is doubled',
        in1: baseItems.RECURVE_BOW,
        in2: baseItems.RECURVE_BOW,
      },
      {
        id: 'SPEAR_OF_SHOJIN',
        name: 'Spear of Shojin',
        iconPath: 'assets/SPEAR_OF_SHOJIN.png',
        description: 'After casting, wearer gains 20% of its max mana per attack',
        in1: baseItems.BF_SWORD,
        in2: baseItems.TEAR_OF_THE_GODDESS,
      },
      {
        id: 'STATIKK_SHIV',
        name: 'Statikk Shiv',
        iconPath: 'assets/STATIKK_SHIV.png',
        description: 'Every 3rd attack deals 100 splash magical damage',
        in1: baseItems.RECURVE_BOW,
        in2: baseItems.TEAR_OF_THE_GODDESS,
      },
    ];
    var tier2ItemList = [
      {
        id: 'FROZEN_HEART',
        name: 'Frozen Heart',
        iconPath: 'assets/FROZEN_HEART.png',
        description: 'Adjacent enemies lose 20% Attack Speed',
        in1: baseItems.CHAIN_VEST,
        in2: baseItems.TEAR_OF_THE_GODDESS,
      }, {
        id: 'FROZEN_MALLET',
        name: 'Frozen Mallet',
        iconPath: 'assets/FROZEN_MALLET.png',
        description: 'Wearer is also a Glacial',
        in1: baseItems.GIANTS_BELT,
        in2: baseItems.SPATULA,
      }, {
        id: 'HEXTECH_GUNBLADE',
        name: 'Hextech Gunblade',
        iconPath: 'assets/HEXTECH_GUNBLADE.png',
        description: 'Heal for 25% of all damage dealt',
        in1: baseItems.BF_SWORD,
        in2: baseItems.NEEDLESSLY_LARGE_ROD,
      }, {
        id: 'LOCKET_OF_THE_IRON_SOLARI',
        name: 'Locket of the Iron Solari',
        iconPath: 'assets/LOCKET_OF_THE_IRON_SOLARI.png',
        description: 'On start of combat, all adjacent allies gain a shield of 200',
        in1: baseItems.NEEDLESSLY_LARGE_ROD,
        in2: baseItems.CHAIN_VEST,
      }, {
        id: 'RUNAANS_HURRICANE',
        name: 'Runaan\'s Hurricane',
        iconPath: 'assets/RUNAANS_HURRICANE.png',
        description: 'Attacks target 2 additional enemies. These additional attacks deal 50% damage',
        in1: baseItems.NEGATRON_CLOAK,
        in2: baseItems.SPATULA,
      }, {
        id: 'TITANIC_HYDRA',
        name: 'Titanic Hydra',
        iconPath: 'assets/TITANIC_HYDRA.png',
        description: 'Attacks deal 10% of the wearer\'s max Health as splash damage',
        in1: baseItems.RECURVE_BOW,
        in2: baseItems.GIANTS_BELT,
      }, {
        id: 'WARMOGS_ARMOR',
        name: 'Warmog\'s Armor',
        iconPath: 'assets/WARMOGS_ARMOR.png',
        description: 'Wearer regenerates 2.5% max Health per second',
        in1: baseItems.GIANTS_BELT,
        in2: baseItems.GIANTS_BELT,
      }, {
        id: 'YUUMI',
        name: 'Yuumi',
        iconPath: 'assets/YUUMI.png',
        description: 'Wearer is also a Sorcerer',
        in1: baseItems.SPATULA,
        in2: baseItems.NEEDLESSLY_LARGE_ROD,
      }, {
        id: 'ZEKES_HERALD',
        name: 'Zeke\'s Herald',
        iconPath: 'assets/ZEKES_HERALD.png',
        description: 'Adjacent allies gain +20% Attack Speed',
        in1: baseItems.BF_SWORD,
        in2: baseItems.GIANTS_BELT,
      }, {
        id: 'ZEPHYR',
        name: 'Zephyr',
        iconPath: 'assets/ZEPHYR.png',
        description: 'On start of combat, banish an enemy for 5 seconds',
        in1: baseItems.NEGATRON_CLOAK,
        in2: baseItems.GIANTS_BELT,
      },
    ];
    var tier3ItemList = [
      {
        id: 'BLADE_OF_THE_RUINED_KING',
        name: 'Blade of the Ruined King',
        iconPath: 'assets/BLADE_OF_THE_RUINED_KING.png',
        description: 'Wearer is also a Blademaster',
        in1: baseItems.RECURVE_BOW,
        in2: baseItems.SPATULA,
      }, {
        id: 'CURSED_BLADE',
        name: 'Cursed Blade',
        iconPath: 'assets/CURSED_BLADE.png',
        description: 'Attacks have a low chance to Shrink (Reduce enemy\'s star level by 1)',
        in1: baseItems.RECURVE_BOW,
        in2: baseItems.NEGATRON_CLOAK,
      }, {
        id: 'DRAGONS_CLAW',
        name: 'Dragon\'s Claw',
        iconPath: 'assets/DRAGONS_CLAW.png',
        description: 'Gain 83% resistance to magic damage',
        in1: baseItems.NEGATRON_CLOAK,
        in2: baseItems.NEGATRON_CLOAK,
      }, {
        id: 'HUSH',
        name: 'Hush',
        iconPath: 'assets/HUSH.png',
        description: 'Attacks have a high chance to Silence',
        in1: baseItems.NEGATRON_CLOAK,
        in2: baseItems.TEAR_OF_THE_GODDESS,
      }, {
        id: 'INFINITY_EDGE',
        name: 'Infinity Edge',
        iconPath: 'assets/INFINITY_EDGE.png',
        description: 'Critical Strikes deal +100% damage',
        in1: baseItems.BF_SWORD,
        in2: baseItems.BF_SWORD,
      }, {
        id: 'KNIGHTS_VOW',
        name: 'Knight\'s Vow',
        iconPath: 'assets/KNIGHTS_VOW.png',
        description: 'Wearer is also a Knight',
        in1: baseItems.CHAIN_VEST,
        in2: baseItems.SPATULA,
      }, {
        id: 'LUDENS_ECHO',
        name: 'Luden\'s Echo',
        iconPath: 'assets/LUDENS_ECHO.png',
        description: 'Spells deal 100 splash damage on hit',
        in1: baseItems.NEEDLESSLY_LARGE_ROD,
        in2: baseItems.TEAR_OF_THE_GODDESS,
      }, {
        id: 'MORELLONOMICON',
        name: 'Morellonomicon',
        iconPath: 'assets/MORELLONOMICON.png',
        description: 'Spells deal burn damage equal to 5% of the enemy\'s maximum health per second',
        in1: baseItems.NEEDLESSLY_LARGE_ROD,
        in2: baseItems.GIANTS_BELT,
      }, {
        id: 'RABADONS_DEATHCAP',
        name: 'Rabadon\'s Deathcap',
        iconPath: 'assets/RABADONS_DEATHCAP.png',
        description: 'Wearer\'s Spell Damage stat is amplified by 50%',
        in1: baseItems.NEEDLESSLY_LARGE_ROD,
        in2: baseItems.NEEDLESSLY_LARGE_ROD,
      }, {
        id: 'RED_BUFF',
        name: 'Red Buff',
        iconPath: 'assets/RED_BUFF.png',
        description: 'Attacks deal 2.5% burn damage',
        in1: baseItems.CHAIN_VEST,
        in2: baseItems.GIANTS_BELT,
      }, {
        id: 'SERAPHS_EMBRACE',
        name: 'Seraph\'s Embrace',
        iconPath: 'assets/SERAPHS_EMBRACE.png',
        description: 'Regain 20 mana each time a spell is cast',
        in1: baseItems.TEAR_OF_THE_GODDESS,
        in2: baseItems.TEAR_OF_THE_GODDESS,
      }, {
        id: 'SWORD_OF_THE_DIVINE',
        name: 'Sword of the Divine',
        iconPath: 'assets/SWORD_OF_THE_DIVINE.png',
        description: 'Each second, the wearer has a 5% chance to gain 100% Critical Strike',
        in1: baseItems.BF_SWORD,
        in2: baseItems.RECURVE_BOW,
      }, {
        id: 'THORNMAIL',
        name: 'Thornmail',
        iconPath: 'assets/THORNMAIL.png',
        description: 'Reflect 25% of damage taken from attacks',
        in1: baseItems.CHAIN_VEST,
        in2: baseItems.CHAIN_VEST,
      }, {
        id: 'YOUMUUS_GHOSTBLADE',
        name: 'Youmuu\'s Ghostblade',
        iconPath: 'assets/YOUMUUS_GHOSTBLADE.png',
        description: 'Wearer is also an Assassin',
        in1: baseItems.BF_SWORD,
        in2: baseItems.SPATULA,
      },
    ];


    /***/ }),

  /***/ "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/
  /*! exports provided: environment */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


    /***/ }),

  /***/ "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/
  /*! no exports provided */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
    /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
    /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
    /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
    /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
      .catch(function (err) { return console.error(err); });


    /***/ }),

  /***/ 0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

    module.exports = __webpack_require__(/*! C:\Users\Artem\WebstormProjects\tftItems\src\main.ts */"./src/main.ts");


    /***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map

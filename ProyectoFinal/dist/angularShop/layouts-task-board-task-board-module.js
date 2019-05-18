(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-task-board-task-board-module"],{

/***/ "./src/app/layouts/task-board/task-board.component.html":
/*!**************************************************************!*\
  !*** ./src/app/layouts/task-board/task-board.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\">\n  <div class=\"row\">\n    <p class=\"content\">\n      The <code><a href=\"https://material.angular.io/cdk/drag-drop/overview\" target=\"_blank\">@angular/cdk/drag-drop</a></code>\n      module\n      provides you with a way to easily and declaratively\n      create\n      drag-and-drop\n      interfaces,\n      with support for free dragging, sorting within a list, transferring items between lists, animations, touch\n      devices,\n      custom drag handles, previews, and placeholders, in addition to horizontal lists and locking along an axis.\n    </p>\n  </div>\n  <div class=\"row m-auto\">\n    <div class=\"col-12\">\n      <div class=\"example-container\">\n        <div class=\"d-flex flex-row bd-highlight3\" style=\"width: 300px\">\n          <div class=\"bd-highlight\">\n            <h4>Todo</h4>\n          </div>\n          <div class=\"bd-highlight ml-auto\">\n            <span class=\"badge badge-secondary\">{{todo.length}}</span>\n          </div>\n        </div>\n        <div cdkDropList id=\"todoList\" [cdkDropListData]=\"todo\" [cdkDropListConnectedTo]=\"['inProgressList']\" class=\"example-list\"\n          (cdkDropListDropped)=\"drop($event)\">\n          <div class=\"card example-box\" *ngFor=\"let item of todo\" cdkDrag (click)=\"onSelect(item)\">\n            <div class=\"card-body\">\n              <div class=\"d-flex flex-row bd-highlight3\">\n                <div class=\"bd-highlight\">\n                  <h6 class=\"card-subtitle mb-2 text-muted\">{{item.name}}</h6>\n                </div>\n                <div class=\"bd-highlight ml-auto edit-icon\">\n                  <a href=\"javascript:;;\"> <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></a>\n                </div>\n              </div>\n              <!-- <p class=\"card-text\">{{cards.description}}.</p> -->\n              <p style=\"font-size: 12px\">Created: <span style=\"color: gray\">{{item.createdOn | momentTimeAgo}}</span></p>\n              <span style=\"color: gray\" *ngFor=\"let assignie of item.assignies\"><img src=\"https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png\"\n                  [alt]=\"assignie.userId\" width=\"40px\" height=\"40px\"></span>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"example-container\">\n        <div class=\"d-flex flex-row bd-highlight3\" style=\"width: 300px\">\n          <div class=\"bd-highlight\">\n            <h4>In Progress</h4>\n          </div>\n          <div class=\"bd-highlight ml-auto\">\n            <span class=\"badge badge-secondary\">{{inProgress.length}}</span>\n          </div>\n        </div>\n\n        <div cdkDropList id=\"inProgressList\" [cdkDropListData]=\"inProgress\" [cdkDropListConnectedTo]=\"['todoList', 'completedList']\"\n          class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n          <div class=\"card example-box\" *ngFor=\"let item of inProgress\" (click)=\"onSelect(item)\" cdkDrag>\n            <div class=\"card-body\">\n              <div class=\"d-flex flex-row bd-highlight3\">\n                <div class=\"bd-highlight\">\n                  <h6 class=\"card-subtitle mb-2 text-muted\">{{item.name}}</h6>\n                </div>\n                <div class=\"bd-highlight ml-auto edit-icon\">\n                  <a href=\"javascript:;;\"> <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></a>\n                </div>\n              </div>\n              <!-- <p class=\"card-text\">{{cards.description}}.</p> -->\n              <p style=\"font-size: 12px\">Created: <span style=\"color: gray\">{{item.createdOn\n                  | momentTimeAgo}}</span></p>\n              <span style=\"color: gray\" *ngFor=\"let assignie of item.assignies\"><img src=\"https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png\"\n                  [alt]=\"assignie.userId\" width=\"40px\" height=\"40px\"></span>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"example-container\">\n        <div class=\"d-flex flex-row bd-highlight3\" style=\"width: 300px\">\n          <div class=\"bd-highlight\">\n            <h4>Completed</h4>\n          </div>\n          <div class=\"bd-highlight ml-auto\">\n            <span class=\"badge badge-secondary\">{{completed.length}}</span>\n          </div>\n        </div>\n\n        <div cdkDropList id=\"completedList\" [cdkDropListData]=\"completed\" [cdkDropListConnectedTo]=\"['inProgressList']\"\n          class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n          <div class=\"card example-box\" *ngFor=\"let item of completed\" (click)=\"onSelect(item)\" cdkDrag>\n            <div class=\"card-body\">\n              <div class=\"d-flex flex-row bd-highlight3\">\n                <div class=\"bd-highlight\">\n                  <h6 class=\"card-subtitle mb-2 text-muted\">{{item.name}}</h6>\n                </div>\n                <div class=\"bd-highlight ml-auto edit-icon\">\n                  <a href=\"javascript:;;\"> <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></a>\n                </div>\n              </div>\n              <!-- <p class=\"card-text\">{{cards.description}}.</p> -->\n              <p style=\"font-size: 12px\">Created: <span style=\"color: gray\">{{item.createdOn\n                  | momentTimeAgo}}</span></p>\n              <span style=\"color: gray\" *ngFor=\"let assignie of item.assignies\"><img src=\"https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png\"\n                  [alt]=\"assignie.userId\" width=\"40px\" height=\"40px\"></span>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layouts/task-board/task-board.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/layouts/task-board/task-board.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top; }\n\n.content {\n  font-size: 16px;\n  line-height: 28px;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.87);\n  margin: 12px;\n  padding: 10px; }\n\n.example-list {\n  padding: 6px;\n  width: 300px;\n  background: #f4f5f7;\n  margin: 5px;\n  border-radius: 4px;\n  height: 450px;\n  overflow: auto; }\n\n.example-box {\n  box-shadow: 0px 1px 2px 0px rgba(9, 30, 66, 0.25);\n  padding: 5px;\n  margin: 0 0 6px 0; }\n\n.example-box .d-flex .edit-icon {\n    display: none; }\n\n.example-box:hover {\n  background-color: #f0f2f4; }\n\n.example-box:hover .d-flex .edit-icon {\n    display: block;\n    position: absolute;\n    right: 10px; }\n\n.card-body {\n  padding: 0.8rem; }\n\n.cdk-drag {\n  cursor: pointer; }\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.cdk-drag-placeholder {\n  opacity: 0; }\n\n.cdk-drag-animating {\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n.example-box:last-child {\n  border: none; }\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NwZWVkc3RyZWFtL1Byb2plY3RzL0ZpbmFsQXBwc1dlYi9zcmMvYXBwL2xheW91dHMvdGFzay1ib2FyZC90YXNrLWJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsMEJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsaURBQWlEO0VBQ2pELFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFIbkI7SUFPTSxhQUFhLEVBQUE7O0FBS25CO0VBQ0UseUJBQXlCLEVBQUE7O0FBRDNCO0lBS00sY0FBYztJQUNkLGtCQUFrQjtJQUNsQixXQUFXLEVBQUE7O0FBS2pCO0VBQ0UsZUFDRixFQUFBOztBQUVBO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIscUhBRW9DLEVBQUE7O0FBR3RDO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsOERBQXNEO0VBQXRELHNEQUFzRDtFQUF0RCwwR0FBc0QsRUFBQTs7QUFHeEQ7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSw4REFBc0Q7RUFBdEQsc0RBQXNEO0VBQXRELDBHQUFzRCxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0cy90YXNrLWJvYXJkL3Rhc2stYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCAyNXB4IDI1cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC44Nyk7XG4gIG1hcmdpbjogMTJweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmV4YW1wbGUtbGlzdCB7XG4gIHBhZGRpbmc6IDZweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjRmNWY3O1xuICBtYXJnaW46IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBoZWlnaHQ6IDQ1MHB4O1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmV4YW1wbGUtYm94IHtcbiAgYm94LXNoYWRvdzogMHB4IDFweCAycHggMHB4IHJnYmEoOSwgMzAsIDY2LCAwLjI1KTtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW46IDAgMCA2cHggMDtcblxuICAuZC1mbGV4IHtcbiAgICAuZWRpdC1pY29uIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbi5leGFtcGxlLWJveDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYyZjQ7XG5cbiAgLmQtZmxleCB7XG4gICAgLmVkaXQtaWNvbiB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgfVxufVxuXG4uY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMC44cmVtXG59XG5cbi5jZGstZHJhZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNkay1kcmFnLXByZXZpZXcge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5leGFtcGxlLWJveDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uZXhhbXBsZS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmV4YW1wbGUtYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/layouts/task-board/task-board.component.ts":
/*!************************************************************!*\
  !*** ./src/app/layouts/task-board/task-board.component.ts ***!
  \************************************************************/
/*! exports provided: TaskBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskBoardComponent", function() { return TaskBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var src_app_shared_services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/task.service */ "./src/app/shared/services/task.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskBoardComponent = /** @class */ (function () {
    function TaskBoardComponent(taskService) {
        this.taskService = taskService;
        this.todo = new Array();
        this.inProgress = new Array();
        this.completed = new Array();
    }
    TaskBoardComponent.prototype.ngOnInit = function () {
        this.getAllTasks();
    };
    TaskBoardComponent.prototype.getAllTasks = function () {
        var _this = this;
        this.taskService.getTasks().then(function (data) {
            var tasks = data;
            tasks.forEach(function (task) {
                var boardId = task["boardId"];
                // Pushing Task to board based on boardId
                switch (boardId) {
                    case "IK_PROGRESS":
                        _this.inProgress.push(task);
                        break;
                    case "IK_COMPLETED":
                        _this.completed.push(task);
                        break;
                    default:
                        _this.todo.push(task);
                        break;
                }
                // Sorting Board Cards based on columnIndex
                _this.todo = lodash__WEBPACK_IMPORTED_MODULE_3__["sortBy"](_this.todo, ["columnIndex"]);
                _this.inProgress = lodash__WEBPACK_IMPORTED_MODULE_3__["sortBy"](_this.inProgress, ["columnIndex"]);
                _this.completed = lodash__WEBPACK_IMPORTED_MODULE_3__["sortBy"](_this.completed, ["columnIndex"]);
            });
        });
    };
    TaskBoardComponent.prototype.drop = function (event) {
        console.log(event.container.data);
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    };
    TaskBoardComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    TaskBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-task-board",
            template: __webpack_require__(/*! ./task-board.component.html */ "./src/app/layouts/task-board/task-board.component.html"),
            styles: [__webpack_require__(/*! ./task-board.component.scss */ "./src/app/layouts/task-board/task-board.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"]])
    ], TaskBoardComponent);
    return TaskBoardComponent;
}());



/***/ }),

/***/ "./src/app/layouts/task-board/task-board.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/layouts/task-board/task-board.module.ts ***!
  \*********************************************************/
/*! exports provided: TaskBoardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskBoardModule", function() { return TaskBoardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _task_board_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-board.component */ "./src/app/layouts/task-board/task-board.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _task_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task.routing */ "./src/app/layouts/task-board/task.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TaskBoardModule = /** @class */ (function () {
    function TaskBoardModule() {
    }
    TaskBoardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _task_routing__WEBPACK_IMPORTED_MODULE_4__["TaskRoutes"]
            ],
            declarations: [_task_board_component__WEBPACK_IMPORTED_MODULE_2__["TaskBoardComponent"]]
        })
    ], TaskBoardModule);
    return TaskBoardModule;
}());



/***/ }),

/***/ "./src/app/layouts/task-board/task.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/layouts/task-board/task.routing.ts ***!
  \****************************************************/
/*! exports provided: TaskRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskRoutes", function() { return TaskRoutes; });
/* harmony import */ var _task_board_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-board.component */ "./src/app/layouts/task-board/task-board.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");


var routes = [{
        path: "tasks",
        children: [
            {
                path: '',
                component: _task_board_component__WEBPACK_IMPORTED_MODULE_0__["TaskBoardComponent"]
            }
        ]
    }];
var TaskRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/shared/moke_data/tasks.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/moke_data/tasks.ts ***!
  \*******************************************/
/*! exports provided: tasks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tasks", function() { return tasks; });
var tasks = [
    {
        id: 0,
        guid: "f2d381ca-6f1c-4e68-ac72-fff973ab3701",
        boardId: "IK_TODO",
        description: "Incididunt aute anim culpa pariatur sint esse cupidatat. Ea veniam ullamco velit irure do. Laborum in elit excepteur cillum voluptate proident excepteur labore ullamco aliqua dolor mollit proident culpa. Occaecat dolor enim et consequat nulla elit ex veniam consectetur nulla est exercitation reprehenderit elit. Eiusmod magna ea pariatur magna sunt dolor.",
        name: "Haley assigned task to Salazar",
        dueDate: "2018-04-23T11:45:06.122Z",
        startDate: "2018-04-30T08:57:16.346Z",
        createdOn: "2018-10-21T21:14:50.261Z",
        columnIndex: 3,
        isDraggable: true,
        columnStatus: [
            {
                column: "IK_TODO",
                dropedOn: "2018-10-26T02:27:31.553Z"
            }
        ],
        assignies: [
            {
                userId: "bzf1920313"
            }
        ]
    },
    {
        id: 1,
        guid: "4ebe8ada-d07a-45d0-8913-80f2468e7054",
        boardId: "IK_COMPLETED",
        description: "Laborum exercitation incididunt officia laborum culpa laborum velit. Ad eu nulla id consectetur esse elit ipsum anim. Ex laboris elit qui Lorem nisi. Sint est exercitation irure occaecat commodo id voluptate ut minim voluptate esse adipisicing labore ipsum. Ex aliquip sit Lorem non elit sint adipisicing amet aliquip culpa ad reprehenderit exercitation. Officia officia proident ut sint irure consectetur et dolore et cupidatat proident.",
        name: "Justine assigned task to Joyner",
        dueDate: "2018-09-04T15:03:37.554Z",
        startDate: "2018-06-10T06:40:29.062Z",
        createdOn: "2018-10-03T10:52:36.102Z",
        columnIndex: 1,
        isDraggable: false,
        assignies: [
            {
                userId: "bzf1920314"
            },
            {
                userId: "bzf1920312"
            }
        ]
    },
    {
        id: 2,
        guid: "959af5fe-0508-4ab0-94bc-70d2c79d89d0",
        boardId: "IK_TODO",
        description: "Consequat Lorem cupidatat occaecat laborum labore esse mollit adipisicing. Velit officia occaecat ut laboris consequat commodo tempor est Lorem sunt. Mollit mollit aute eiusmod esse fugiat aliquip sint aliqua Lorem. Cillum elit dolor nulla minim aute labore ipsum irure id incididunt fugiat quis laboris enim. Elit dolore ex est nostrud consequat quis id.",
        name: "Margaret assigned task to Russo",
        dueDate: "2018-07-12T07:40:01.101Z",
        startDate: "2018-08-19T07:40:43.169Z",
        createdOn: "2018-10-27T13:32:14.084Z",
        columnIndex: 0,
        isDraggable: true,
        "assignies": [
            {
                "userId": "bzf1920314"
            }
        ]
    },
    {
        id: 3,
        guid: "be74010e-19ac-4525-afdb-68a8a9c1c842",
        boardId: "IK_PROGRESS",
        description: "Dolor quis excepteur est incididunt. Proident cillum ex sunt excepteur eu et velit Lorem occaecat mollit dolore sint. Consequat laborum deserunt fugiat ullamco laboris id ad enim magna ex excepteur do ipsum irure. Aliqua eu duis adipisicing cillum reprehenderit deserunt eu pariatur.",
        name: "Carla assigned task to Fischer",
        dueDate: "2018-03-29T17:52:07.172Z",
        startDate: "2018-07-10T09:18:39.733Z",
        createdOn: "2018-10-30T14:29:10.719Z",
        columnIndex: 1,
        isDraggable: false,
        assignies: [
            {
                userId: "bzf1920312"
            },
            {
                userId: "bzf1920313"
            }
        ]
    },
    {
        id: 5,
        guid: "a1526afc-a3f4-4969-8509-69c455d80427",
        boardId: "IK_COMPLETED",
        description: "Sunt aliquip aute non id nisi in excepteur consectetur enim. Lorem in proident Lorem do anim nostrud nisi irure et veniam nisi pariatur mollit sint. Veniam qui ut Lorem voluptate aliqua nostrud exercitation.",
        name: "Anderson assigned task to Phillips",
        dueDate: "2018-05-04T13:50:21.924Z",
        startDate: "2018-07-07T15:55:36.491Z",
        createdOn: "2018-10-06T19:09:52.025Z",
        columnIndex: 0,
        isDraggable: false,
        assignies: [
            {
                "userId": "bzf1920312"
            }
        ]
    },
    {
        id: 6,
        guid: "23903dea-e7f8-4d4e-af39-45ac69a1042f",
        boardId: "IK_PROGRESS",
        description: "Fugiat nisi aliqua eu excepteur proident quis consequat aliquip do sunt. Commodo enim tempor eu reprehenderit amet mollit nulla minim velit excepteur incididunt ex. Pariatur laborum irure irure ut. Quis laboris occaecat duis ex.",
        name: "Gamble assigned task to Sandoval",
        dueDate: "2018-06-16T00:10:43.727Z",
        startDate: "2018-02-07T02:32:51.995Z",
        createdOn: "2018-10-19T06:55:42.790Z",
        columnIndex: 0,
        isDraggable: false,
        assignies: [
            {
                "userId": "bzf1920313"
            },
            {
                "userId": "bzf1920313"
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/shared/services/task.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/task.service.ts ***!
  \*************************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _moke_data_tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../moke_data/tasks */ "./src/app/shared/moke_data/tasks.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskService = /** @class */ (function () {
    function TaskService() {
    }
    TaskService.prototype.getTasks = function () {
        return new Promise(function (resolve, reject) {
            resolve(_moke_data_tasks__WEBPACK_IMPORTED_MODULE_1__["tasks"]);
        });
    };
    TaskService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TaskService);
    return TaskService;
}());



/***/ })

}]);
//# sourceMappingURL=layouts-task-board-task-board-module.js.map
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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-wrapper\">\r\n  <app-header></app-header>\r\n  <app-sidebar></app-sidebar>\r\n\r\n  <!-- ============================================================== -->\r\n  <!-- Page wrapper  -->\r\n  <!-- ============================================================== -->\r\n  <div class=\"page-wrapper\">\r\n    <!-- ============================================================== -->\r\n    <!-- Container fluid  -->\r\n    <!-- ============================================================== -->\r\n    <div class=\"container-fluid\">\r\n\r\n      <!-- ============================================================== -->\r\n      <!-- Start Page Content -->\r\n      <!-- ============================================================== -->\r\n      <router-outlet></router-outlet>\r\n      <!-- ============================================================== -->\r\n      <!-- End Page Content -->\r\n      <!-- ============================================================== -->\r\n    </div>\r\n    <!-- ============================================================== -->\r\n    <!-- END Container fluid  -->\r\n    <!-- ============================================================== -->\r\n  </div>\r\n  <!-- ============================================================== -->\r\n  <!-- END Page wrapper  -->\r\n  <!-- ============================================================== -->\r\n</div>"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin.routes */ "./src/app/admin/admin.routes.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users/users.component */ "./src/app/admin/users/users.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Modulos

// Componentes



var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _admin_routes__WEBPACK_IMPORTED_MODULE_2__["ADMIN_ROUTES"]
            ],
            declarations: [
                _admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_6__["UsersComponent"]
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/admin.routes.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.routes.ts ***!
  \***************************************/
/*! exports provided: ADMIN_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADMIN_ROUTES", function() { return ADMIN_ROUTES; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _services_guards_login_guard_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/guards/login-guard.guard */ "./src/app/services/guards/login-guard.guard.ts");
/* harmony import */ var _services_guards_admin_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/guards/admin.guard */ "./src/app/services/guards/admin.guard.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users/users.component */ "./src/app/admin/users/users.component.ts");

// PAGES





// GUARD
// import { LoginGuardGuard } from '../services/guards/login-guard.guard';
// guard de admin
var ADMIN_ROUTE = [
    {
        path: 'admin',
        component: _admin_component__WEBPACK_IMPORTED_MODULE_1__["AdminComponent"],
        canActivate: [_services_guards_login_guard_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuardGuard"], _services_guards_admin_guard__WEBPACK_IMPORTED_MODULE_4__["AdminGuard"]],
        children: [
            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
            { path: 'users', component: _users_users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"] },
            { path: '', pathMatch: 'full', redirectTo: 'dashboard' }
        ]
    }
];
var ADMIN_ROUTES = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(ADMIN_ROUTE);


/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-dashboard\">\r\n\t<!-- =============================================================== -->\r\n\t<!-- Report boxes\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t -->\r\n\t<!-- =============================================================== -->\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-4\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"d-flex no-block\">\r\n\t\t\t\t\t\t<div class=\"m-r-20 align-self-center\">\r\n\t\t\t\t\t\t\t<span class=\"lstick m-r-20\"></span>\r\n\t\t\t\t\t\t\t<img src=\"../assets/images/icon/staff.png\" alt=\"Income\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"align-self-center\">\r\n\t\t\t\t\t\t\t<h6 class=\"text-muted m-t-10 m-b-0\">Total de usuarios</h6>\r\n\t\t\t\t\t\t\t<h2 class=\"m-t-0\">{{ count_users }}</h2>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-lg-4\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"d-flex no-block\">\r\n\t\t\t\t\t\t<div class=\"m-r-20 align-self-center\">\r\n\t\t\t\t\t\t\t<span class=\"lstick m-r-20\"></span>\r\n\t\t\t\t\t\t\t<img src=\"../assets/images/icon/expense.png\" alt=\"Income\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"align-self-center\">\r\n\t\t\t\t\t\t\t<h6 class=\"text-muted m-t-10 m-b-0\">Total de libros</h6>\r\n\t\t\t\t\t\t\t<h2 class=\"m-t-0\">{{ count_books }}</h2>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-lg-4\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"d-flex no-block\">\r\n\t\t\t\t\t\t<div class=\"m-r-20 align-self-center\">\r\n\t\t\t\t\t\t\t<span class=\"lstick m-r-20\"></span>\r\n\t\t\t\t\t\t\t<img src=\"../assets/images/icon/assets.png\" alt=\"Income\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"align-self-center\">\r\n\t\t\t\t\t\t\t<h6 class=\"text-muted m-t-10 m-b-0\">Mensajes enviados</h6>\r\n\t\t\t\t\t\t\t<h2 class=\"m-t-0\">{{ count_messages }}</h2>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<!-- =============================================================== -->\r\n\t<!-- End report boxes\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t -->\r\n\t<!-- =============================================================== -->\r\n\r\n\t<!-- =============================================================== -->\r\n\t<!-- Users status\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t -->\r\n\t<!-- =============================================================== -->\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12 col-md-12\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"d-flex\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<h4 class=\"card-title\"><span class=\"lstick\"></span>Estado de usuarios</h4>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!-- TODO: ??? Agregar admin -->\r\n\t\t\t\t\t\t<!-- <div class=\"ml-auto\">\r\n\t\t\t\t\t\t\t<button class=\"pull-right btn btn-circle btn-info\" data-toggle=\"modal\" data-target=\"#addAdmin\">\r\n\t\t\t\t\t\t\t\t<i class=\"ti-plus\"></i>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"table-responsive m-t-20\">\r\n\t\t\t\t\t\t<table class=\"table vm no-th-brd no-wrap pro-of-month\">\r\n\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<th colspan=\"2\">Usuario</th>\r\n\t\t\t\t\t\t\t\t\t<th>Tipo de usuario</th>\r\n\t\t\t\t\t\t\t\t\t<th>Estado</th>\r\n\t\t\t\t\t\t\t\t\t<th>Cambiar estado</th>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let u of users\">\r\n\t\t\t\t\t\t\t\t\t<td style=\"width:50px;\"><span class=\"round\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/users/1.jpg\" alt=\"user\" width=\"50\"></span>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<h6>{{ u.name | titlecase }} {{ u.last_name1 | titlecase }} {{ u.last_name2 | titlecase }}</h6>\r\n\t\t\t\t\t\t\t\t\t\t<small class=\"text-muted\">Creado el: {{ u.created_date }}</small>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{ u.role | titlecase }}</td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"[u.status] == 'true'\" class=\"label label-success label-rounded\">Activo</span>\r\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"[u.status] == 'false'\" class=\"label label-danger label-rounded\">Inactivo</span>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<!-- TODO: Hacer algo con esto -->\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\tCambiar jjj\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<!-- =============================================================== -->\r\n\t<!-- End users status\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t -->\r\n\t<!-- =============================================================== -->\r\n\r\n\r\n\t<!-- ============================================================== -->\r\n\t<!-- Reports\t\t\t              \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n\t<!-- ============================================================== -->\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12 col-md-12\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"d-flex\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<h3 class=\"card-title m-b-5\">\r\n\t\t\t\t\t\t\t<span class=\"lstick\"></span>Reportes \r\n\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"ml-auto\">\r\n\t\t\t\t\t\t\t<!-- FIXME: -->\r\n\t\t\t\t\t\t\t<!-- TODO: Hacer que funcione por fechas -->\r\n\t\t\t\t\t\t\t<label>Fecha</label>\r\n\t\t\t\t\t\t\t<select class=\"custom-select b-0\" formControlName=\"date\">Fecha\r\n\t\t\t\t\t\t\t\t<option value=\"all\" selected>Todas</option>\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let r of reports\">{{ r.day }}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<table class=\"table vm no-th-brd no-wrap pro-of-month\">\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th>ID</th>\r\n\t\t\t\t\t\t\t<th>Usuario que reporta</th>\r\n\t\t\t\t\t\t\t<th>Tipo de reporte</th>\r\n\t\t\t\t\t\t\t<th>Fecha</th>\r\n\t\t\t\t\t\t\t<th>Hora</th>\r\n\t\t\t\t\t\t\t<th>Reporte</th>\r\n\t\t\t\t\t\t\t<th>Estado</th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t<tr *ngFor=\"let r of reports\">\r\n\t\t\t\t\t\t\t<!-- TODO: Revisar visualmente y borrar referencis sin ID -->\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<h6>{{ r.id }}</h6>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<h6>{{ r.user.name | titlecase }} {{ r.user.last_name1 | titlecase }} {{ r.user.last_name2 | titlecase }}</h6>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<h6>{{ r.type }}</h6>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<h6>{{ r.day }}</h6>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<h6>{{ r.hour }}</h6>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<!-- FIXME: Alinear el link de la img para que quede justificado o algo así, a la columna -->\r\n\t\t\t\t\t\t\t\t<!-- <h6 *ngIf=\"r.type == 'Reporte de imagen'\">Se reportan las imagenes contenidas en el siguiente link {{ r.img }}</h6> -->\r\n\t\t\t\t\t\t\t\t<h6 *ngIf=\"r.type == 'Reporte de usuario'\">Se reporta al usuario {{ r.user_reported.name | titlecase }} {{ r.user_reported.last_name1 | titlecase }} {{ r.user_reported.last_name2 | titlecase }}</h6>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<span *ngIf=\"[r.status] == 'Revisado'\" class=\"label label-success label-rounded\">Revisado</span>\r\n\t\t\t\t\t\t\t\t<span *ngIf=\"[r.status] == 'No revisado'\" class=\"label label-danger label-rounded\">No revisado</span>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n  </div>\r\n  <!-- ============================================================== -->\r\n\t<!-- End reports\t\t\t              \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n\t<!-- ============================================================== -->\r\n\r\n\t<!-- ============================================================== -->\r\n\t<!-- Todo list \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n\t<!-- ============================================================== -->\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-6 col-xlg-8\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"d-flex\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<h4 class=\"card-title\"><span class=\"lstick\"></span>To Do list</h4>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"ml-auto\">\r\n\t\t\t\t\t\t\t<button class=\"pull-right btn btn-circle btn-success\" data-toggle=\"modal\" data-target=\"#myModal\">\r\n\t\t\t\t\t\t\t\t<i class=\"ti-plus\"></i>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"to-do-widget m-t-20\">\r\n\t\t\t\t\t\t<!-- ============================================================== -->\r\n\t\t\t\t\t\t<!-- Modal for add tasks   \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  -->\r\n\t\t\t\t\t\t<!-- ============================================================== -->\r\n\t\t\t\t\t\t<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n\t\t\t\t\t\t\t<div class=\"modal-dialog\" role=\"document\">\r\n\t\t\t\t\t\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"modal-title\">Agregar tarea</h4>\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"> <span aria-hidden=\"true\">&times;</span> </button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t\t\t\t\t\t<form>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Nombre de la tarea</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input formControlName=\"task\" type=\"text\" class=\"form-control\" placeholder=\"Revisar mensajes\"> \r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Descripción de la tarea</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input formControlName=\"description\" type=\"text\" class=\"form-control\" placeholder=\"Revisar la lista de mensajes que están pendientes\"> \r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Prioridad</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<select formControlName=\"priority\" class=\"custom-select form-control pull-right\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"high\">Alta</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"medium\">Media</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"low\">Baja</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"addTask()\">Agregar</button>\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!-- ============================================================== -->\r\n\t\t\t\t\t\t<!-- End modal for add tasks   \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  -->\r\n\t\t\t\t\t\t<!-- ============================================================== -->\r\n\t\t\t\t\t\t<ul class=\"list-task todo-list list-group m-b-0\" data-role=\"tasklist\">\r\n\t\t\t\t\t\t\t<li class=\"list-group-item\" data-role=\"task\" *ngFor=\"let t of tasks\">\r\n\t\t\t\t\t\t\t\t<div class=\"checkbox checkbox-info m-b-10\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"inputSchedule\" name=\"inputCheckboxesSchedule\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"inputSchedule\" class=\"\"> \r\n\t\t\t\t\t\t\t\t\t\t<span>{{ t.task }}</span> \r\n\t\t\t\t\t\t\t\t\t\t<span class=\"label label-rounded label-danger pull-right\">{{ t.description }}</span>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"list-group-item\" data-role=\"task\">\r\n\t\t\t\t\t\t\t\t<div class=\"checkbox checkbox-info\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"inputBook\" name=\"inputCheckboxesBook\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"inputBook\" class=\"\"> \r\n\t\t\t\t\t\t\t\t\t\t<span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"label label-primary label-rounded pull-right\">{{ t.priority }}</span> \r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"item-date\"> 26 jun 2017</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"list-group-item\" data-role=\"task\">\r\n\t\t\t\t\t\t\t\t<div class=\"checkbox checkbox-info\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"inputCall\" name=\"inputCheckboxesCall\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"inputCall\" class=\"\"> \r\n\t\t\t\t\t\t\t\t\t\t<span>Give Purchase report to</span> \r\n\t\t\t\t\t\t\t\t\t\t<span class=\"label label-info label-rounded pull-right\">Yesterday</span> \r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"list-group-item\" data-role=\"task\">\r\n\t\t\t\t\t\t\t\t<div class=\"checkbox checkbox-info\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"inputForward\" name=\"inputCheckboxesForward\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"inputForward\" class=\"\"> \r\n\t\t\t\t\t\t\t\t\t\t<span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</span> \r\n\t\t\t\t\t\t\t\t\t\t<span class=\"label label-warning label-rounded pull-right\">2 weeks</span> \r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"item-date\">{{ actual_day }}</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- ============================================================== -->\r\n\t\t<!-- My contact and feed \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\t\t\t\t\r\n\t\t<!-- ============================================================== -->\r\n\t\t<div class=\"col-lg-6\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<h4 class=\"card-title\"><span class=\"lstick\"></span> Feeds</h4>\r\n\t\t\t\t\t<ul class=\"feeds\">\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<div class=\"bg-light-info\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-bell-o\"></i>\r\n\t\t\t\t\t\t\t</div> You have 4 pending tasks. \r\n\t\t\t\t\t\t\t<span class=\"text-muted\">Just Now</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<div class=\"bg-light-success\">\r\n\t\t\t\t\t\t\t\t<i class=\"ti-server\"></i>\r\n\t\t\t\t\t\t\t</div> Server #1 overloaded.\r\n\t\t\t\t\t\t\t<span class=\"text-muted\">2 Hours ago</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<div class=\"bg-light-warning\">\r\n\t\t\t\t\t\t\t\t<i class=\"ti-shopping-cart\"></i>\r\n\t\t\t\t\t\t\t</div> New order received.\r\n\t\t\t\t\t\t\t<span class=\"text-muted\">31 May</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<div class=\"bg-light-danger\">\r\n\t\t\t\t\t\t\t\t<i class=\"ti-user\"></i>\r\n\t\t\t\t\t\t\t</div> New user registered.\r\n\t\t\t\t\t\t\t\t<span class=\"text-muted\">30 May</span>\r\n\t\t\t\t\t\t\t\t/li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<div class=\"bg-light-inverse\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-bell-o\"></i>\r\n\t\t\t\t\t\t\t</div> New Version just arrived. \r\n\t\t\t\t\t\t\t<span class=\"text-muted\">27 May</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<div class=\"bg-light-danger\">\r\n\t\t\t\t\t\t\t\t<i class=\"ti-user\"></i>\r\n\t\t\t\t\t\t\t</div> New user registered.\r\n\t\t\t\t\t\t\t<span class=\"text-muted\">30 May</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<div class=\"bg-light-primary\">\r\n\t\t\t\t\t\t\t\t<i class=\"ti-settings\"></i>\r\n\t\t\t\t\t\t\t</div> You have 4 pending tasks. \r\n\t\t\t\t\t\t\t<span class=\"text-muted\">27 May</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<!-- ============================================================== -->\r\n\t<!-- Comment and chat -->\r\n\t<!-- ============================================================== -->\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-6\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<h4 class=\"card-title\"><span class=\"lstick\"></span>Recent Comments</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- ============================================================== -->\r\n\t\t\t\t<!-- Comment widgets -->\r\n\t\t\t\t<!-- ============================================================== -->\r\n\t\t\t\t<div class=\"comment-widgets\">\r\n\t\t\t\t\t<!-- Comment Row -->\r\n\t\t\t\t\t<div class=\"d-flex flex-row comment-row\">\r\n\t\t\t\t\t\t<div class=\"p-2\">\r\n\t\t\t\t\t\t\t<span class=\"round\">\r\n\t\t\t\t\t\t\t\t<img src=\"../assets/images/users/1.jpg\" alt=\"user\" width=\"50\">\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"comment-text w-100\">\r\n\t\t\t\t\t\t\t<h5>James Anderson</h5>\r\n\t\t\t\t\t\t\t<p class=\"m-b-5\">Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.</p>\r\n\t\t\t\t\t\t\t<div class=\"comment-footer\"> \r\n\t\t\t\t\t\t\t\t<span class=\"text-muted pull-right\">April 14, 2016</span> \r\n\t\t\t\t\t\t\t\t<span class=\"label label-rounded label-info\">Pending</span> \r\n\t\t\t\t\t\t\t\t<span class=\"action-icons\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i class=\"ti-pencil-alt\"></i></a>\r\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i class=\"ti-check\"></i></a>\r\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i class=\"ti-heart\"></i></a>    \r\n\t\t\t\t\t\t\t\t</span> \r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- Comment Row -->\r\n\t\t\t\t\t<div class=\"d-flex flex-row comment-row active\">\r\n\t\t\t\t\t\t<div class=\"p-2\">\r\n\t\t\t\t\t\t\t<span class=\"round\">\r\n\t\t\t\t\t\t\t\t<img src=\"../assets/images/users/2.jpg\" alt=\"user\" width=\"50\">\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"comment-text active w-100\">\r\n\t\t\t\t\t\t\t<h5>Michael Jorden</h5>\r\n\t\t\t\t\t\t\t<p class=\"m-b-5\">Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry..</p>\r\n\t\t\t\t\t\t\t<div class=\"comment-footer \"> \r\n\t\t\t\t\t\t\t\t<span class=\"text-muted pull-right\">April 14, 2016</span> \r\n\t\t\t\t\t\t\t\t<span class=\"label label-success label-rounded\">Approved</span> \r\n\t\t\t\t\t\t\t\t<span class=\"action-icons active\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i class=\"ti-pencil-alt\"></i></a>\r\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i class=\"icon-close\"></i></a>\r\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i class=\"ti-heart text-danger\"></i></a>    \r\n\t\t\t\t\t\t\t\t</span> \r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- Comment Row -->\r\n\t\t\t\t\t<div class=\"d-flex flex-row comment-row\">\r\n\t\t\t\t\t\t<div class=\"p-2\">\r\n\t\t\t\t\t\t\t<span class=\"round\">\r\n\t\t\t\t\t\t\t\t<img src=\"../assets/images/users/3.jpg\" alt=\"user\" width=\"50\">\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"comment-text w-100\">\r\n\t\t\t\t\t\t\t<h5>Johnathan Doeting</h5>\r\n\t\t\t\t\t\t\t<p class=\"m-b-5\">Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.</p>\r\n\t\t\t\t\t\t\t<div class=\"comment-footer\"> \r\n\t\t\t\t\t\t\t\t<span class=\"text-muted pull-right\">April 14, 2016</span> \r\n\t\t\t\t\t\t\t\t<span class=\"label label-rounded label-danger\">Rejected</span> \r\n\t\t\t\t\t\t\t\t<span class=\"action-icons\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i class=\"ti-pencil-alt\"></i></a>\r\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i class=\"ti-check\"></i></a>\r\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i class=\"ti-heart\"></i></a>    \r\n\t\t\t\t\t\t\t\t</span> \r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<!-- ============================================================== -->\r\n\t<!-- End Right panel -->\r\n\t<!-- ============================================================== -->\r\n</div>\r\n<!-- ============================================================== -->\r\n<!-- End Container fluid  -->\r\n<!-- ============================================================== -->\r\n\t\t\t\t\t"

/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/date.service */ "./src/app/services/date.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// SERVICES


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_dbService, _date) {
        var _this = this;
        this._dbService = _dbService;
        this._date = _date;
        this.actual_user = JSON.parse(localStorage.getItem("user"));
        this.actual_date = this._date.actual_date();
        this.actual_day = this._date.actual_day();
        this._dbService.getData("users")
            .valueChanges()
            .subscribe(function (data) {
            _this.users = data;
            _this.count_users = data.length;
        });
        this._dbService.getData("books")
            .valueChanges()
            .subscribe(function (data) { return _this.count_books = data.length; });
        this._dbService.getData("messages-transaction")
            .valueChanges()
            .subscribe(function (data) { return _this.count_messages = data.length; });
        this._dbService.getData("reports")
            .valueChanges()
            .subscribe(function (data) { return _this.reports = data; });
        // this._dbService.getData( "tasks")
        // 	.valueChanges()
        // 	.subscribe( data => this.tasks = data );
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            task: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            priority: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required) //high, medium, low
        });
    };
    // TODO: Terminar po jjj
    DashboardComponent.prototype.addTask = function () {
        this._dbService.addDataIdCustom('tasks', this.actual_user, this.form)
            .then(function () { return swal('Tarea guardada', 'La tarea ha sido guardada con éxito', 'success'); })
            .catch(function () { return swal('Error', 'La tarea no ha podido guardarse, vuelva a intentarlo', 'error'); });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/admin/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/admin/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
            _services_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/admin/users/users.component.css":
/*!*************************************************!*\
  !*** ./src/app/admin/users/users.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/users/users.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/users/users.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Usuarios</h1>\r\n<div class=\"row\">\r\n\t<div class=\"col-md-6 col-lg-6 col-xlg-4\" *ngFor=\"let u of users\">\r\n\t\t<div class=\"card card-body\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-md-4 col-lg-3 text-center\">\r\n\t\t\t\t\t<img [src]=\"u.img\" alt=\"user\" class=\"img-circle img-responsive\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-8 col-lg-9\">\r\n\t\t\t\t\t<h3 class=\"box-title m-b-0\">{{ u.name | titlecase }} {{ u.last_name1 | titlecase }} {{ u.last_name2 | titlecase }}</h3> \r\n\t\t\t\t\t<small>{{ u.rut }}</small>\r\n\t\t\t\t\t<br/>\r\n\t\t\t\t\t<address>\r\n\t\t\t\t\t\t{{ u.email }}\r\n\t\t\t\t\t\t<br/>\r\n\t\t\t\t\t\t<abbr title=\"Phone\">P:</abbr> (+56 9) {{ u.phone }}\r\n\t\t\t\t\t</address>\r\n\t\t\t\t\t<small class=\"text-muted\">Creado el: {{ u.created_date }}</small>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/users/users.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/users/users.component.ts ***!
  \************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// SERVICES

var UsersComponent = /** @class */ (function () {
    function UsersComponent(_dbService) {
        var _this = this;
        this._dbService = _dbService;
        this._dbService.getData("users")
            .valueChanges()
            .subscribe(function (data) { return _this.users = data; });
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/admin/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/admin/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        if (JSON.parse(localStorage.getItem('session')) === null) {
            localStorage.setItem('session', JSON.stringify({
                session: false,
                rememberMe: false
            }));
        }
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/pages.module */ "./src/app/pages/pages.module.ts");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _register_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/login.component */ "./src/app/register/login.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// RUTAS

// MODULOS


// COMPONENTES




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _register_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_9__["PagenotfoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _pages_pages_module__WEBPACK_IMPORTED_MODULE_4__["PagesModule"],
                _admin_admin_module__WEBPACK_IMPORTED_MODULE_5__["AdminModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_3__["APP_ROUTES"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTES", function() { return APP_ROUTES; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register/login.component */ "./src/app/register/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");

// Componentes



var appRoutes = [
    { path: 'login', component: _register_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: '**', component: _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_3__["PagenotfoundComponent"] }
];
var APP_ROUTES = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { useHash: true });


/***/ }),

/***/ "./src/app/components/card-book/card-book.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/card-book/card-book.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================================== -->\r\n<!-- Loader \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n<!-- ============================================================================== -->\r\n<div *ngIf=\"loading\" class=\"loader-contenedor\">\r\n\t<app-loading></app-loading>\r\n\t<p> Buscando libros... </p>\r\n</div>\r\n<!-- ============================================================================== -->\r\n<!-- End loader \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n<!-- ============================================================================== -->\r\n\r\n<!-- ============================================================================== -->\r\n<!-- Card book \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n<!-- ============================================================================== -->\r\n<div class=\"container-fluid\">\r\n\t<div class=\"row\">\r\n\t\t\t<div *ngIf=\"!loading\" class=\"card-columns\">\r\n\t\t\t\t<div class=\"card\" style=\"max-width:18rem;\" *ngFor=\"let book of books; let index = index;\">\r\n\t\t\t\t\t<!-- CARROUSEL BOOK IMAGES -->\r\n\t\t\t\t\t<div id=\"carouselExampleFade-{{index}}\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">\r\n\t\t\t\t\t\t<div class=\"carousel-inner\">\r\n\t\t\t\t\t\t\t<div class=\"carousel-item\" *ngFor=\"let img of book.images; let i=index;\" [ngClass]=\"{'active': i===0}\" >\r\n\t\t\t\t\t\t\t <img class=\"d-block img-carousel\" [src]=\"img\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t<a class=\"carousel-control-prev\" href=\"#carouselExampleFade-{{index}}\" role=\"button\" data-slide=\"prev\">\r\n\t\t\t\t\t\t\t<span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<a class=\"carousel-control-next\" href=\"#carouselExampleFade-{{index}}\" role=\"button\" data-slide=\"next\">\r\n\t\t\t\t\t\t\t<span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t<!-- END CARROUSEL BOOK IMAGES -->\r\n\t\t\t\r\n\t\t\t\t\t<!-- TEXT CARD -->\r\n\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t<h5 class=\"card-title\">Título: {{ book.title | titlecase }}</h5>\r\n\t\t\t\t\t\t<p class=\"card-text\">Autor/a: {{ book.author | titlecase }}</p>\r\n\t\t\t\t\t\t<p class=\"card-text\">Editorial: {{ book.editorial | titlecase }}</p>\r\n\t\t\t\t\t\t<p class=\"card-text\">Fecha publicación: {{ book.date }}</p>\r\n\t\t\t\t\t\t<p class=\"card-text\" *ngIf=\"book.transaction == 'Ambos' || book.transaction == 'Venta'\">Price: ${{ book.price | thousands }}</p>\r\n\t\t\t\t\t\t<p class=\"card-text\">Dueño: {{book.user.name | titlecase }} {{book.user.last_name1 | titlecase }} {{book.user.last_name2 | titlecase }}</p>\r\n\t\t\t\t\t\t<button *ngIf=\"book.uid === actual_user.uid\" class=\"btn btn-outline-info col-md-12\" data-toggle=\"modal\" \r\n\t\t\t\t\t\t\t\tdata-target=\"#showBook\" type=\"button\" (click)=\"book_modal=book\">Ver libro</button>\r\n\t\t\t\t\t\t<button *ngIf=\"book.uid !== actual_user.uid\" class=\"btn btn-outline-info col-md-6\" data-toggle=\"modal\" \r\n\t\t\t\t\t\t\t\tdata-target=\"#showBook\" type=\"button\" (click)=\"book_modal=book\">Ver libro</button>\r\n\t\t\t\t\t\t<button *ngIf=\"book.uid !== actual_user.uid\" \r\n\t\t\t\t\t\t\t\tclass=\"btn btn-outline-info col-md-6\" data-toggle=\"modal\" \r\n\t\t\t\t\t\t\t\tdata-target=\"#contactOwner\" type=\"button\" (click)=\"book_modal=book\">Contactar</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- END TEXT CARD -->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<!-- ============================================================================================================== -->\r\n<!-- Modal show book\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n<!-- ============================================================================================================== -->\r\n<div \tclass=\"modal fade bs-example-modal-lg\" tabindex=\"-1\" role=\"dialog\" id=\"showBook\"\t\t\t\t\r\n\t\t\taria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\" style=\"display: none;\">\r\n\t<div class=\"modal-dialog modal-lg\">\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<h4 class=\"modal-title\" id=\"myLargeModalLabel\"> {{ book_modal.title | titlecase }}</h4>\r\n\t\t\t\t<div class=\"other-header\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<button  type=\"button\" aria-expanded=\"false\" aria-haspopup=\"true\" class=\"close waves-effect\" data-toggle=\"dropdown\">\r\n\t\t\t\t\t\t<i class=\"fa fa-angle-down\"></i>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<!-- FIXME: Mover eso para que quede debajo del angle-down -->\r\n\t\t\t\t\t<!-- ====================================================================== -->\r\n\t\t\t\t\t<!-- Little modal to report\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n\t\t\t\t\t<!-- ====================================================================== -->\r\n\t\t\t\t\t<div class=\"dropdown-menu dropdown-menu-right mailbox animated bounceInDown\">\r\n\t\t\t\t\t\t<ul style=\"padding: 0%!important;\">\r\n\t\t\t\t\t\t\t<div class=\"message-center\">\r\n\t\t\t\t\t\t\t\t<a (click)=reportUser(book_modal)>\r\n\t\t\t\t\t\t\t\t\t<div class=\"btn btn-danger btn-circle\"><i class=\"ti-user\"></i></div>\r\n\t\t\t\t\t\t\t\t\t<h5 style=\"display: inline; margin-left: 20px;\">Reportar usuario</h5>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<a (click)=reportImage(book_modal)>\r\n\t\t\t\t\t\t\t\t\t<div class=\"btn btn-danger btn-circle\"><i class=\"fa fa-file-image-o\"></i></div>\r\n\t\t\t\t\t\t\t\t\t<h5 style=\"display: inline; margin-left: 20px;\">Reportar imagen</h5>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- FIXME: Porfi porfi amorcito -->\r\n\t\t\t\t<!-- ====================================================================== -->\r\n\t\t\t\t<!-- End little modal to report\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n\t\t\t\t<!-- ====================================================================== -->\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<app-one-book [book]=\"book_modal\"></app-one-book>\r\n\t\t\t</div>\r\n\t\t\t<!-- ====================================================================== -->\r\n\t\t\t<!-- Profile collapse\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n\t\t\t<!-- ====================================================================== -->\r\n\t\t\t<div id=\"accordion\">\r\n\t\t\t\t<div class=\"card\">\r\n\t\t\t\t  \t<div class=\"card-header\" id=\"headingOne\">\r\n\t\t\t\t\t\t<h5 class=\"mb-0\">\r\n\t\t\t\t\t  \t<button class=\"btn btn-link\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n\t\t\t\t\t\t\tVer perfil del dueño\r\n\t\t\t\t\t  \t</button>\r\n\t\t\t\t\t\t</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"collapseOne\" class=\"collapse \" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\r\n\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t<!-- ====================================================================== -->\r\n\t\t\t\t\t\t\t<!-- Show profile\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n\t\t\t\t\t\t\t<!-- ====================================================================== -->\r\n\t\t\t\t\t\t\t<div class=\"col-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card-body row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\" align=\"center\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"book_modal.user.img\" class=\"img-circle\" width=\"150\" />\r\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{ book_modal.user.name | titlecase }} {{ book_modal.user.last_name1 | titlecase }} {{ book_modal.user.last_name2 | titlecase }} </h4>\r\n\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-subtitle\">Accoubts Manager Amix corp</h6>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row text-center justify-content-md-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-book\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <font class=\"font-medium\"> {{ count_book }}</font> -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<small class=\"text-muted\">Correo electrónico</small>\r\n\t\t\t\t\t\t\t\t\t\t\t<h6> {{ book_modal.user.email }} </h6>\r\n\t\t\t\t\t\t\t\t\t\t\t<small class=\"text-muted p-t-30 db\">Teléfono de contacto</small>\r\n\t\t\t\t\t\t\t\t\t\t\t<h6> {{ book_modal.user.phone }} </h6>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<!-- TODO: Revisar que esté aparezcan todas las cat. Copiar en modal de cardbook -->\r\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t\t<small class=\"text-muted\">Categorías favoritas:</small>\r\n\t\t\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h6>{{ book_modal.user.categories }}</h6>\r\n\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"dropdown-divider\"></div>\r\n\t\t\t\t\t\t\t\t\t\t<small class=\"text-muted p-t-30 db\">Redes sociales</small><br/>\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-circle btn-secondary\"><i class=\"fa fa-facebook\"></i></button>\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-circle btn-secondary\"><i class=\"fa fa-twitter\"></i></button>\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-circle btn-secondary\"><i class=\"fa fa-youtube\"></i></button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- ====================================================================== -->\r\n\t\t\t\t\t\t\t<!-- End show profile\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n\t\t\t\t\t\t\t<!-- ====================================================================== -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- ====================================================================== -->\r\n\t\t\t<!-- End profile collapse\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n\t\t\t<!-- ====================================================================== -->\r\n\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-danger waves-effect text-left\" data-dismiss=\"modal\">Close</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- ====================================================================== -->\r\n<!-- End modal show book\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n<!-- ====================================================================== -->\r\n\r\n\r\n<!-- ====================================================================== -->\r\n<!-- Modal contact owner\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n<!-- ====================================================================== -->\r\n<div \tclass=\"modal fade bs-example-modal-lg\" tabindex=\"-1\" role=\"dialog\" id=\"contactOwner\"\r\n\t\t\taria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\" style=\"display: none;\">\r\n\t<div class=\"modal-dialog modal-lg\">\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<h4 class=\"modal-title\" id=\"myLargeModalLabel\"> Contactar dueño/a </h4>\r\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\r\n\t\t\t</div>\r\n\t\t\t<form [formGroup]=\"form\" (ngSubmit)=\"sendMessage()\">\r\n\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t<!-- Transaction -- Ambos -->\r\n\t\t\t\t\t<div *ngIf=\"book_modal.transaction == 'Ambos'\" >\r\n\t\t\t\t\t\t<label>Elija el tipo de transacción que desea</label>\r\n\t\t\t\t\t\t<select class=\"form-control\" formControlName=\"transaction\">\r\n\t\t\t\t\t\t\t<option value=\"Intercambio\">Deseo intercambiar el libro</option>\r\n\t\t\t\t\t\t\t<option value=\"Venta\">Deseo comprar el libro</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div><br>\r\n\r\n\t\t\t\t\t<!-- Preferences -->\r\n\t\t\t\t\t<!-- FIXME: Esto tiene que ser una tabla u otra cosa, no un select -->\r\n\t\t\t\t\t<!-- https://www.lawebdelprogramador.com/foros/JavaScript/1495600-seleccionar-una-o-varias-filas-de-una-tabla-y-marcar-o-desmarcar-el-check-de-la-fila-correspondiente.html -->\r\n\t\t\t\t\t<label>Seleccione la preferencia que más le acomode</label>\r\n\t\t\t\t\t<select class=\"form-control\" formControlName=\"pref\">\r\n\t\t\t\t\t\t<option value=\"{{ p.subway_station }}-{{ p.day }}-{{ p.hour }}\" *ngFor=\"let p of book_modal.user.preferences\">{{ p.subway_station }} - {{ p.day }} - {{ p.hour  }}</option>\r\n\t\t\t\t\t\t<option value=\"dislike_preferences\">Ninguna me acomoda</option>\r\n\t\t\t\t\t</select><br>\r\n\t\t\t\t\t<!-- <div class=\"table-responsive\">\r\n\t\t\t\t\t\t<table class=\"table color-table info-table\">\r\n\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<th>Selección</th>\r\n\t\t\t\t\t\t\t\t\t<th>Estación de metro</th>\r\n\t\t\t\t\t\t\t\t\t<th>Día</th>\r\n\t\t\t\t\t\t\t\t\t<th>Horario</th>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let p of book_modal.user.preferences\">\r\n\t\t\t\t\t\t\t\t\t<td class=\"controls\">\r\n\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control custom-checkbox\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\" value=\"p\"> \r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"custom-control-indicator\"></span>  \r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td> {{ p.subway_station }} </td>\r\n\t\t\t\t\t\t\t\t\t<td> {{ p.day }} </td>\r\n\t\t\t\t\t\t\t\t\t<td> {{ p.hour }} </td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div> -->\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<!-- Custom preferences -->\r\n\t\t\t\t\t<div *ngIf=\"form.value.pref === 'dislike_preferences'\">\r\n\t\t\t\t\t\t<label>Seleccione el horario que desea proponer</label>\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<!-- Station -->\r\n\t\t\t\t\t\t\t<div class=\"form-group col-4\">\r\n\t\t\t\t\t\t\t\t<label>Estación de metro</label>\r\n\t\t\t\t\t\t\t\t<!-- TODO: Arreglar esa huea rancia fjdksljfklsdjglksjgks -->\r\n\t\t\t\t\t\t\t\t<select formControlName=\"station\" id=\"subway_station\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t\t<optgroup label=\"Línea 1\">\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"República\">República</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"Los Héroes\">Los Héroes</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"La Moneda\">La Moneda</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"Universidad de Chile\">Universidad de Chile</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"Santa Lucía\">Santa Lucía</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"Universidad Católica\">Universidad Católica</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"Baquedano\">Baquedano</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"Salvador\">Salvador</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"Manuel Montt\">Manuel Montt</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"Pedro de Valdivia\">Pedro de Valdivia</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"Los Leones\">Los Leones</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"Tobalaba\">Tobalaba</option>\r\n\t\t\t\t\t\t\t\t\t</optgroup>\r\n\t\t\t\t\t\t\t\t\t<optgroup label=\"Línea 5\">\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"Quinta Normal\">Quinta Normal</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"Cumming\">Cumming</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"Santa Ana\">Santa Ana</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"Plaza de Armas\">Plaza de Armas</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"Bellas Artes\">Bellas Artes</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"Baquedano\">Baquedano</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"Parque Bustamante\">Parque Bustamante</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"Santa Isabel\">Santa Isabel</option>\r\n\t\t\t\t\t\t\t\t\t</optgroup>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- Day -->\r\n\t\t\t\t\t\t\t<div class=\"form-group col-md-4\">\r\n\t\t\t\t\t\t\t\t\t<label>Tipo de elemento</label>\r\n\t\t\t\t\t\t\t\t\t<select formControlName=\"day\" id=\"day\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"Lunes\">Lunes</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"Martes\">Martes</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"Miércoles\">Miércoles</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"Jueves\">Jueves</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"Viernes\">Viernes</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"Sábado\">Sábado</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"Domingo\">Domingo</option>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- Hour -->\r\n\t\t\t\t\t\t\t<div class=\"form-group col-md-4\">\r\n\t\t\t\t\t\t\t\t<label>Hora</label>\r\n\t\t\t\t\t\t\t\t<input formControlName=\"hour\" class=\"form-control\" type=\"time\" value=\"12:00\" id=\"hour\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<!-- Message -->\r\n\t\t\t\t\t<div >\r\n\t\t\t\t\t\t<label>Seleccione el mensaje a enviar</label>\r\n\t\t\t\t\t\t<select class=\"form-control\" formControlName=\"text\">\r\n\t\t\t\t\t\t\t<option value=\"Deseo establecer la transacción\">Deseo establecer la transacción</option>\r\n\t\t\t\t\t\t\t<option *ngIf=\"book_modal.transaction == 'Venta' || form.value.transaction == 'Venta'\" \r\n\t\t\t\t\t\t\t\tvalue=\"dislike-price\">No me acomoda el precio</option>\r\n\t\t\t\t\t\t\t<option value=\"new_text\">Deseo escribirle un mensajes personalmente</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div><br>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<!-- Custom price -->\r\n\t\t\t\t\t<div *ngIf=\"form.value.text == 'dislike-price'\">\r\n\t\t\t\t\t\t<label>Ingrese el precio que desea proponer</label>\r\n\t\t\t\t\t\t<input \ttype=\"text\" formControlName=\"new_price\" \r\n\t\t\t\t\t\t\tclass=\"form-control form-control-line border-input-custom\" placeholder=\"Ej.: 2000\">\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<!-- Custom message -->\r\n\t\t\t\t\t<div *ngIf=\"form.value.text == 'new_text'\">\r\n\t\t\t\t\t\t<label>Mensaje</label>\r\n\t\t\t\t\t\t<input \ttype=\"text\" formControlName=\"new_text\" \r\n\t\t\t\t\t\t\tclass=\"form-control form-control-line border-input-custom\" placeholder=\"Hola, me gustaría establecer la transacción del libro...\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-outline-info waves-effect text-left\">Enviar</button>\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger waves-effect text-left\" data-dismiss=\"modal\">Close</button>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- ====================================================================== -->\r\n<!-- End modal contact owner\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n<!-- ====================================================================== -->\r\n"

/***/ }),

/***/ "./src/app/components/card-book/card-book.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/card-book/card-book.component.ts ***!
  \*************************************************************/
/*! exports provided: CardBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardBookComponent", function() { return CardBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/date.service */ "./src/app/services/date.service.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// SERVICIOS



var CardBookComponent = /** @class */ (function () {
    function CardBookComponent(_date, _dbService) {
        this._date = _date;
        this._dbService = _dbService;
        this.loading = true; // muestra y esconde un loading
        this.book_modal = {
            author: '',
            title: '',
            editorial: '',
            type: '',
            categories: [],
            language: '',
            num_page: 0,
            original: false,
            transaction: '',
            user: '',
            id: '',
            comment: '',
            price: 0,
            images: [],
            date: ''
        };
        this.actual_user = JSON.parse(localStorage.getItem('user'));
    }
    CardBookComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.type === 'all') {
                _this.loading = false;
                _this.books = _this.booksHome;
            }
            else {
                var aux = [];
                for (var _i = 0, _a = _this.booksHome; _i < _a.length; _i++) {
                    var book = _a[_i];
                    if (book.transaction === _this.type)
                        aux.push(book);
                }
                _this.loading = false;
                _this.books = aux;
            }
        }, 2000);
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            text: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            transaction: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            pref: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            // new_preference: 	new FormControl(''),
            station: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            hour: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            day: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            new_price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            new_text: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    };
    // Envía el mensaje desde el usuario actual hacia el usuario dueño del libro
    CardBookComponent.prototype.sendMessage = function () {
        var predet_Message = {
            transaction: this.form.value.transaction,
            pref: this.form.value.pref,
            text: [(_a = {},
                    _a[this.actual_user.uid] = this.form.value.text,
                    _a.date = this._date.actual_date(),
                    _a)],
            date: this._date.actual_date(),
            book: this.book_modal,
            user_owner: this.book_modal.user.uid,
            uid_interested: this.actual_user,
            status: false,
            price: this.book_modal.price
        };
        console.log(predet_Message.pref);
        if (this.form.value.transaction == undefined || this.form.value.transaction === null) {
            predet_Message.transaction = this.book_modal.transaction;
        }
        if (this.form.value.pref === 'dislike_preferences') {
            var new_preferences = this.form.value.station + ' - ' + this.form.value.day + ' - ' + this.form.value.hour;
            predet_Message.pref = new_preferences;
        }
        if (this.form.value.text === 'dislike-price') {
            predet_Message.price = this.form.value.price;
        }
        if (this.form.value.text === 'new_text') {
            predet_Message.text = [(_b = {},
                    _b[this.actual_user.uid] = this.form.value.new_text,
                    _b.date = this._date.actual_date(),
                    _b)];
        }
        console.log(predet_Message.pref);
        // Envía el mensaje a la DB.
        this._dbService.addData('messages-transaction', predet_Message)
            .then(function () { return sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('Mensaje enviado', 'Su mensaje ha sido enviado con éxito', 'success'); })
            .catch(function () { return sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('Error', 'Su mensaje no ha podido enviarse, vuelva a intentarlo', 'error'); });
        var _a, _b;
    };
    // Envía el mensaje de reporte del usuario al admin
    CardBookComponent.prototype.reportUser = function (book_m) {
        var report = {
            id: this.actual_user.uid + "-" + new Date().valueOf(),
            day: this._date.actual_day(),
            hour: this._date.actual_hour(),
            user: this.actual_user,
            user_reported: book_m.user,
            type: "Reporte de usuario",
            status: "No revisado"
        };
        console.log(report);
        // Envía el mensaje a la DB.
        this._dbService.addData('reports', report)
            .then(function () { return sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('Reporte enviado', 'Muchas gracias por reportar, lo revisaremos en seguida', 'success'); })
            .catch(function () { return sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('Error', 'Su reporte no ha podido enviarse', 'error'); });
    };
    // Envía el mensaje de reporte de imagen al admin
    CardBookComponent.prototype.reportImage = function (book_m) {
        var report = {
            id: this.actual_user.uid + "-" + new Date().valueOf(),
            day: this._date.actual_day(),
            hour: this._date.actual_hour(),
            user: this.actual_user,
            img: book_m.images,
            type: "Reporte de imagen",
            status: "No revisado"
        };
        console.log(report);
        // Envía el mensaje a la DB.
        this._dbService.addData('reports', report)
            .then(function () { return sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('Reporte enviado', 'Muchas gracias por reportar, lo revisaremos en seguida', 'success'); })
            .catch(function () { return sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('Error', 'Su reporte no ha podido enviarse', 'error'); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CardBookComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CardBookComponent.prototype, "booksHome", void 0);
    CardBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card-book',
            template: __webpack_require__(/*! ./card-book.component.html */ "./src/app/components/card-book/card-book.component.html")
        }),
        __metadata("design:paramtypes", [_services_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"],
            _services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]])
    ], CardBookComponent);
    return CardBookComponent;
}());



/***/ }),

/***/ "./src/app/components/loading/loading.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/loading/loading.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner {\r\n  width: 70px;\r\n  text-align: center;\r\n  -webkit-transform:scale(50%);\r\n          transform:scale(50%);\r\n}\r\n\r\n.spinner > div {\r\n  width: 18px;\r\n  height: 18px;\r\n  background-color: #333;\r\n\r\n  border-radius: 100%;\r\n  display: inline-block;\r\n  -webkit-animation: bouncedelay 1.4s infinite ease-in-out;\r\n  animation: bouncedelay 1.4s infinite ease-in-out;\r\n  /* Prevent first frame from flickering when animation starts */\r\n  -webkit-animation-fill-mode: both;\r\n  animation-fill-mode: both;\r\n}\r\n\r\n.spinner .bounce1 {\r\n  -webkit-animation-delay: -0.32s;\r\n  animation-delay: -0.32s;\r\n}\r\n\r\n.spinner .bounce2 {\r\n  -webkit-animation-delay: -0.16s;\r\n  animation-delay: -0.16s;\r\n}\r\n\r\n@-webkit-keyframes bouncedelay {\r\n  0%, 80%, 100% { -webkit-transform: scale(0.0) }\r\n  40% { -webkit-transform: scale(1.0) }\r\n}\r\n\r\n@keyframes bouncedelay {\r\n  0%, 80%, 100% {\r\n    transform: scale(0.0);\r\n    -webkit-transform: scale(0.0);\r\n  } 40% {\r\n    transform: scale(1.0);\r\n    -webkit-transform: scale(1.0);\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/components/loading/loading.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/loading/loading.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\">\r\n  <div class=\"bounce1\"></div>\r\n  <div class=\"bounce2\"></div>\r\n  <div class=\"bounce3\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/loading/loading.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/loading/loading.component.ts ***!
  \*********************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/components/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.css */ "./src/app/components/loading/loading.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/components/one-book/one-book.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/one-book/one-book.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"card-body\" style=\"background-color: #FFFFFF;\">\r\n\t<!-- Row -->\r\n\t<div class=\"row\">\r\n\t   <div class=\"col-lg-12\">\r\n\t\t<div class=\"card\">\r\n\t\t   <form class=\"form-horizontal\" role=\"form\">\r\n\t\t\t<div class=\"form-body\">\r\n\t\t\t   <div class=\"row\">\r\n\t\t\t\t\r\n\t\t\t\t<!-- CARROUSEL IMAGES -->\r\n\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t<div id=\"carouselExampleFade\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">\r\n\t\t\t\t\t\t<div class=\"carousel-inner\">\r\n\t\t\t\t\t\t\t<div class=\"carousel-item\" *ngFor=\"let img of book.images; let i=index;\" [ngClass]=\"{'active': i===0}\" >\r\n\t\t\t\t\t\t\t\t<img class=\"d-block img-carousel\" [src]=\"img\">\r\n\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<a class=\"carousel-control-prev\" href=\"#carouselExampleFade\" role=\"button\" data-slide=\"prev\">\r\n\t\t\t\t\t\t\t<span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<a class=\"carousel-control-next\" href=\"#carouselExampleFade\" role=\"button\" data-slide=\"next\">\r\n\t\t\t\t\t\t\t<span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- CARROUSEL IMAGES -->\r\n   \r\n\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t<!-- TITLE -->\r\n\t\t\t\t   <div class=\"form-group row\">\r\n\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Título:</label>\r\n\t\t\t\t\t   <div class=\"col-md-6\">\r\n\t\t\t\t\t\t<p class=\"form-control-static\"> {{ book.title }} </p>\r\n\t\t\t\t\t   </div>\r\n\t\t\t\t   </div>\r\n\t\t\t\t   \r\n\t\t\t\t   <!-- AUTHOR -->\r\n\t\t\t\t   <div class=\"form-group row\">\r\n\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Autor/a:</label>\r\n\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t   <p class=\"form-control-static\"> {{ book.author }} </p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t   </div>\r\n   \r\n\t\t\t\t   <!-- TRANSACTION TYPE -->\r\n\t\t\t\t   <div class=\"form-group row\">\r\n\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Tipo de transacción:</label>\r\n\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t   <p class=\"form-control-static\"> {{ book.transaction }} </p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t   </div>\r\n   \r\n\t\t\t\t   <!-- PRICE -->\r\n\t\t\t\t   <div class=\"form-group row\" *ngIf=\"book.transaction == 'Venta' || book.transaction == 'Both'\">\r\n\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Precio:</label>\r\n\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t   <p class=\"form-control-static\"> {{ book.price | thousands }} </p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t   </div>\r\n\r\n\t\t\t\t   <!-- PUBLICATION DATE -->\r\n\t\t\t\t   <div class=\"form-group row\" *ngIf=\"book.transaction == 'Venta' || book.transaction == 'Both'\">\r\n\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Fecha de publicación:</label>\r\n\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t   <p class=\"form-control-static\"> {{ book.date }} </p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t   </div>\r\n\r\n\t\t\t\t   \t<div class=\"form-group row\">\r\n\t\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Dueño:</label>\r\n\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t   <p class=\"form-control-static\"> \r\n\t\t\t\t\t\t\t\t{{ book.user.name | titlecase }} \r\n\t\t\t\t\t\t\t\t{{ book.user.last_name1 | titlecase }}\r\n\t\t\t\t\t\t\t\t{{ book.user.last_name2 | titlecase }}\r\n\t\t\t\t\t\t\t</p>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t   </div>\r\n   \r\n\t\t\t   <!-- ROW DETALLES -->\r\n\t\t\t   <h3 class=\"box-title\">Detalles</h3>\r\n\t\t\t   <hr class=\"m-t-0 m-b-40\">\r\n\t\t\t   <div class=\"row\">\r\n   \r\n\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t   <!-- TIPO DE ELEMENTO -->\r\n\t\t\t\t   <div class=\"form-group row\">\r\n\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Elemento:</label>\r\n\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t   <p class=\"form-control-static\"> {{ book.type }} </p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t   </div>\r\n   \r\n\t\t\t\t   <!-- GÉNERO -->\r\n\t\t\t\t   <div class=\"form-group row\">\r\n\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Género:</label>\r\n\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t   <p class=\"form-control-static\"> {{ book.genres }} </p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t   </div>\r\n   \r\n\t\t\t\t   <!-- EDITORIAL -->\r\n\t\t\t\t   <div class=\"form-group row\">\r\n\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Editorial:</label>\r\n\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t   <p class=\"form-control-static\"> {{ book.editorial }} </p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t   </div>\r\n   \r\n\t\t\t\t   <!-- IDIOMA -->\r\n\t\t\t\t   <div class=\"form-group row\">\r\n\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Idioma:</label>\r\n\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t   <p class=\"form-control-static\"> {{ book.language }} </p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t   </div>\r\n\t\t\t\t</div>\r\n   \r\n\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t   <!-- ORIGINAL -->\r\n\t\t\t\t   <div class=\"form-group row\">\r\n\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Original:</label>\r\n\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t   <p class=\"form-control-static\"> {{ book.original }} </p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t   </div>\r\n   \r\n\t\t\t\t   <!-- NÚMERO DE PÁGINAS -->\r\n\t\t\t\t   <div class=\"form-group row\">\r\n\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Número de páginas:</label>\r\n\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t   <p class=\"form-control-static\"> {{ book.num_page }} </p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t   </div>\r\n   \r\n\t\t\t\t   <!-- COMENTARIOS -->\r\n\t\t\t\t   <div class=\"form-group row\">\r\n\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Comentario:</label>\r\n\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t   <p class=\"form-control-static\"> {{ book.comment }} </p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t   </div>\r\n\t\t\t\t</div>\r\n\t\t\t   </div>\r\n\t\t\t</div>\r\n\t\t   </form>\r\n\t\t</div>\r\n\t   </div>\r\n\t</div>\r\n\t<!-- Row -->\r\n   </div>\r\n   "

/***/ }),

/***/ "./src/app/components/one-book/one-book.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/one-book/one-book.component.ts ***!
  \***********************************************************/
/*! exports provided: OneBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneBookComponent", function() { return OneBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OneBookComponent = /** @class */ (function () {
    function OneBookComponent(formBuilder, _dbService) {
        this.formBuilder = formBuilder;
        this._dbService = _dbService;
        var user = JSON.parse(localStorage.getItem("user"));
    }
    OneBookComponent.prototype.ngOnInit = function () {
        // TODO: Ver si eso servía o no fdjlksf
        // this.editForm = new FormGroup({
        // 	title: 			new FormControl(this.book.title)
        // });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OneBookComponent.prototype, "book", void 0);
    OneBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-one-book',
            template: __webpack_require__(/*! ./one-book.component.html */ "./src/app/components/one-book/one-book.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]])
    ], OneBookComponent);
    return OneBookComponent;
}());



/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n#notfound {\r\n  position: relative;\r\n  height: 100vh;\r\n}\r\n\r\n#notfound .notfound {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\n\r\n.notfound {\r\n  max-width: 520px;\r\n  width: 100%;\r\n  line-height: 1.4;\r\n  text-align: center;\r\n}\r\n\r\n.notfound .notfound-404 {\r\n  position: relative;\r\n  height: 240px;\r\n}\r\n\r\n.notfound .notfound-404 h1 {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  font-size: 252px;\r\n  font-weight: 900;\r\n  margin: 0px;\r\n  color: #262626;\r\n  text-transform: uppercase;\r\n  letter-spacing: -40px;\r\n  margin-left: -20px;\r\n}\r\n\r\n.notfound .notfound-404 h1>span {\r\n  text-shadow: -8px 0px 0px #fff;\r\n}\r\n\r\n.notfound .notfound-404 h3 {\r\n  position: relative;\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n  color: #262626;\r\n  margin: 0px;\r\n  letter-spacing: 3px;\r\n  padding-left: 6px;\r\n}\r\n\r\n.notfound h2 {\r\n    font-size: 20px;\r\n    font-weight: 400;\r\n    color: #000;\r\n    padding-top: 187px;\r\n}\r\n\r\n.background {\r\n  height: 158%;\r\n  width: 100%;\r\n  background-image: url('Pagenotfound.jpeg');\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  background-size: fixed;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n  .notfound .notfound-404 {\r\n    height: 200px;\r\n  }\r\n  .notfound .notfound-404 h1 {\r\n    font-size: 200px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n  .notfound .notfound-404 {\r\n    height: 162px;\r\n  }\r\n  .notfound .notfound-404 h1 {\r\n    font-size: 162px;\r\n    height: 150px;\r\n    line-height: 162px;\r\n  }\r\n  .notfound h2 {\r\n    font-size: 16px;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"notfound\">\n  <div class=\"notfound\">\n    <div class=\"notfound-404\">\n      <h3>Oops! Página no encontrada</h3>\n      <!-- <h1><span>4</span><span>0</span><span>4</span></h1> -->\n      <div class=\"background\"></div>\n    </div>\n    <h2>Lo sentimos, pero no hemos podido encontrar la página solicitada</h2>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
  \********************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagenotfound',
            template: __webpack_require__(/*! ./pagenotfound.component.html */ "./src/app/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__(/*! ./pagenotfound.component.css */ "./src/app/pagenotfound/pagenotfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/add-book/add-book.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/add-book/add-book.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"background-color: #ffffff;\">\r\n\t<h1 style=\"padding-top:30px;\">Agregar libro</h1>\r\n\t<form class=\"form-material m-t-40\" [formGroup]=\"form\" (ngSubmit)=\"saveBook()\" novalidate=\"novalidate\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<!-- Inicio col 1 -->\r\n\t\t\t<div class=\"col-6\">\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label>Título del texto</label>\r\n\t\t\t\t\t<input type=\"text\" formControlName=\"title\" \r\n\t\t\t\t\t\t\tclass=\"form-control form-control-line border-input-custom\" placeholder=\"Ej.: Harry Potter\">\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label>Autor del texto</label>\r\n\t\t\t\t\t<input type=\"text\" formControlName=\"author\"\r\n\t\t\t\t\t\t\tclass=\"form-control form-control-line border-input-custom\" placeholder=\"Ej.: J. K. Rowling\">\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label>Editorial del texto</label>\r\n\t\t\t\t\t<input type=\"text\" formControlName=\"editorial\"\r\n\t\t\t\t\t\t\tclass=\"form-control form-control-line border-input-custom\" placeholder=\"Ej.: Salamandra\">\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group border-input-custom\">\r\n\t\t\t\t\t<label>Tipo de elemento</label>\r\n\t\t\t\t\t<select class=\"form-control\" formControlName=\"type\">\r\n\t\t\t\t\t\t<option value=\"Libro\">Libro</option>\r\n\t\t\t\t\t\t<option value=\"Cómic\">Cómic</option>\r\n\t\t\t\t\t\t<option value=\"Lectura especializada\">Lectura especializada</option>\r\n\t\t\t\t\t\t<option value=\"Literatura infantil\">Literatura infantil</option>\r\n\t\t\t\t\t\t<option value=\"Otro\">Otro</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<!-- TODO: Dejar esto más bonito -->\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<input id=\"file\" type=\"file\" style=\"padding-top: 25px;\" (change)=\"uploadFile($event)\" multiple>\r\n\t\t\t\t</div>\r\n\t\t\r\n\t\t\t</div>\r\n\t\t\t<!-- Fin col 1  -->\r\n\t\t\t\t\r\n\t\t\t<!-- Inicio col 2  -->\r\n\t\t\t<div class=\"col-6\">\r\n\t\t\t\t<div class=\"form-group border-input-custom\">\r\n\t\t\t\t\t<label>Tipo de transacción</label>\r\n\t\t\t\t\t<select class=\"form-control\" formControlName=\"transaction\">\r\n\t\t\t\t\t\t<option value=\"Intercambio\">Intercambio</option>\r\n\t\t\t\t\t\t<option value=\"Venta\">Venta</option>\r\n\t\t\t\t\t\t<option value=\"Ambos\">Ambos</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group\" *ngIf=\"form.value.transaction === 'Venta'\">\r\n\t\t\t\t\t<label>Precio</label>\r\n\t\t\t\t\t<input \tformControlName=\"price\" onlynumber=\"true\" minlength=\"3\" maxlength=\"6\" \r\n\t\t\t\t\t\t\tclass=\"form-control form-control-line border-input-custom\" placeholder=\"Ej.: 5000\">\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group\" *ngIf=\"form.value.transaction === 'Ambos'\">\r\n\t\t\t\t\t<label>Precio</label>\r\n\t\t\t\t\t<input \tformControlName=\"price\" onlynumber=\"true\" minlength=\"3\" maxlength=\"6\" \r\n\t\t\t\t\t\t\tclass=\"form-control form-control-line border-input-custom\" placeholder=\"Ej.: 5000\">\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group border-input-custom\">\r\n\t\t\t\t\t<label>Idioma</label>\r\n\t\t\t\t\t<select class=\"form-control\" \r\n\t\t\t\t\t\t\tformControlName=\"language\">\r\n\t\t\t\t\t\t<option value=\"Español\">Español</option>\r\n\t\t\t\t\t\t<option value=\"Inglés\">Inglés</option>\r\n\t\t\t\t\t\t<option value=\"Otro\">Otro</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group border-input-custom\" \r\n\t\t\t\t\t name=\"original\">\r\n\t\t\t\t\t<label>Texto original</label>\r\n\t\t\t\t\t<select class=\"form-control\" formControlName=\"original\">\r\n\t\t\t\t\t\t<option value=\"Sí\">Sí</option>\r\n\t\t\t\t\t\t<option value=\"No\">No</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label>Cantidad de páginas</label>\r\n\t\t\t\t\t<input \tformControlName=\"num_page\" onlynumber=\"true\" minlength=\"2\" maxlength=\"5\" \r\n\t\t\t\t\t\t\tclass=\"form-control form-control-line border-input-custom\" placeholder=\"Ej.: 324\">\r\n\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label>Comentario</label>\r\n\t\t\t\t\t<textarea class=\"form-control border-input-custom\" formControlName=\"comment\" rows=\"2\" \r\n\t\t\t\t\t\t\t\tplaceholder=\"Ej.: El libro se encuentra en buen estado, leído solo una vez.\">\r\n\t\t\t\t\t</textarea>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- Fin col 2  -->\r\n\t\t</div>\r\n\r\n\t\t<div class=\"form-group border-input-custom\">\r\n\t\t\t<label>Categoría a la que pertenece</label>\r\n\t\t\t<!-- FIXME: Revisar po jjj -->\r\n\t\t\t<div class=\"ms-container\" id=\"ms-pre-selected-options\">\r\n\t\t\t\t<div class=\"ms-selectable\">\r\n\t\t\t\t\t<select class=\"ms-list contenedor\" multiple='multiple'>\r\n\t\t\t\t\t\t<option [value]='c' class=\"ms-elem-selectable\" *ngFor=\"let c of categories; let i = index;\"\r\n\t\t\t\t\t\t\t(click)=\"addCategory(i)\"> {{ c }} </option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ms-selection\">\r\n\t\t\t\t\t<select class=\"ms-list contenedor\" multiple='multiple' formControlName=\"genres\" style=\"margin-left: 35px;\">\r\n\t\t\t\t\t\t<option [value]='sc' class=\"ms-elem-selection\" *ngFor=\"let sc of selected_categories; let i = index;\"\r\n\t\t\t\t\t\t\t(click)=\"removeCategory(i)\"> {{ sc }} </option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\t\t\t\t\t\t\t\t\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t\r\n\t\t<div class=\"row justify-content-md-center\">\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<button type=\"submit\" class=\"btn btn-outline-info\">Guardar</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\t\t\t"

/***/ }),

/***/ "./src/app/pages/add-book/add-book.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/add-book/add-book.component.ts ***!
  \******************************************************/
/*! exports provided: AddBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBookComponent", function() { return AddBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var src_app_services_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/date.service */ "./src/app/services/date.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// SERVICE


// ANGULARFIRE2

// SWEET ALERT

var AddBookComponent = /** @class */ (function () {
    function AddBookComponent(_dbService, _date, router) {
        this._dbService = _dbService;
        this._date = _date;
        this.router = router;
        this.categories = ["Antiguedades y Coleccionables", "Arquitectura", "Arte", "Artes Escénicas", "Biografía y Autobiografía", "Casa y Hogar", "Ciencia", "Ciencias Políticas", "Ciencias Sociales", "Cocina", "Comida y Bebestibles", "Colecciones Literarias", "Cómics y Novelas Gráficas", "Computación e Internet", "Crímenes", "Crítica Literaria", "Cuerpo", "Mente y Espíritu", "Deportes y Recreación", "Drama", "Educación", "Estudio de Lenguas Extranjeras", "Ensayos Académicos", "Familia y Relaciones", "Ficción", "Ficción Adolescente", "Ficción para Niños", "Filosofía", "Fotografía", "Historia y Geografía", "Humor", "Jardinería", "Juegos", "Lectura escolar", "Lengua y Literatura", "Leyes", "Manualidades y Hobbies", "Mascotas y Animales", "Matemáticas", "Medicina", "Música", "Naturaleza y Aire libre", "Negocios y Economía", "Niños y Jóvenes", "Papelería", "Poesía", "Psicología", "Religión y Espiritualidad", "Salud y Bienestar", "Tecnología", "Transporte", "Viajes"];
        this.selected_categories = [];
    }
    AddBookComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            author: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            editorial: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            genres: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selected_categories),
            transaction: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined),
            language: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            original: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            num_page: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined),
            images: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this._date.actual_date())
        });
        this.uid = JSON.parse(localStorage.getItem('user')).uid;
    };
    // Guarda un libro nuevo en la DB
    AddBookComponent.prototype.saveBook = function () {
        var _this = this;
        if (this.form.invalid) {
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()('Debe completar el formulario', 'Debe ingresar todos los campos de este formulario', 'warning');
            return;
        }
        // Carga las imagenes en el formulario para luego subirlas
        this.form.patchValue({
            images: this.urlImgs
        });
        var book = this.form.value; // Guarda el formulario para validar
        // Agrega la referencia al usuario propietario del libro
        var user = JSON.parse(localStorage.getItem("user"));
        book.user = this._dbService.afs.collection('users').doc(user.uid).ref;
        // Convierte el id de Firebase en uid + fechahora 
        book.id = user.uid + "-" + new Date().valueOf();
        book.uid = user.uid;
        // Guarda el libro
        this._dbService.addData('books', book)
            .then(function () {
            console.log("se guardó el libro");
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()('Libro registrado con éxito', book.title, 'success');
            _this.router.navigate(['/home']);
        })
            .catch(function (err) {
            console.log("error al guardar libros", err);
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Error", "No se ha podido guardar el nuevo libro", "warning");
        });
    };
    // Carga las imagenes al storage de Firebase
    AddBookComponent.prototype.uploadFile = function (event) {
        var files = event.target.files;
        var url = []; // Guarda las imagenes correctas para luego subirlas
        var aux = false; // Sirve para que no se cargen imagenes si existe aunque sea una incorrecta
        for (var i = 0; i < files.length; i++) {
            var separatedFile = files[i].name.split('.');
            var extension = separatedFile[separatedFile.length - 1];
            // Tipos de archivo válidos para las imagenes
            var typeValid = ['jpg', 'jpeg', 'png'];
            // si las imagenes no son validas se termina el proceso
            if (typeValid.indexOf(extension) <= -1) {
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()('Error al ingresar imagen', 'Extensiones válidas (png, jpg, jpeg), vuelva a intentarlo', 'error');
                aux = true;
                return;
            }
        }
        if (!aux) {
            var storageRef = firebase__WEBPACK_IMPORTED_MODULE_5__["storage"]().ref();
            var upload = false;
            var _loop_1 = function (i) {
                var filePath = this_1.uid + "-" + new Date().valueOf();
                console.log(filePath);
                var uploadTask = storageRef.child("images/" + filePath)
                    .put(files[i]);
                uploadTask.on('state_changed', function () { }, // Manejo de carga
                function (error) {
                    console.log('Error al cargar imagen', error);
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()('Error al cargar imagenes', 'Por favor, vueva a intentarlo', 'error');
                }, function () {
                    uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                        url.push(downloadURL);
                        if (i === files.length - 1) {
                            console.log("Imagenes cargadas");
                            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()('Éxito', 'Imagenes cargadas con exito', 'success');
                        }
                    });
                });
            };
            var this_1 = this;
            for (var i = 0; i < files.length; i++) {
                _loop_1(i);
            }
            this.urlImgs = url;
        }
    };
    // Agrega una categoría al cuadro de categorías del libro
    AddBookComponent.prototype.addCategory = function (index) {
        this.selected_categories.push(this.categories[index]);
        this.categories.splice(index, 1);
        // TODO: Ordenar por index
    };
    // Remueve una categoría del cuadro de categorías del libro
    AddBookComponent.prototype.removeCategory = function (index) {
        this.categories.push(this.selected_categories[index]);
        this.selected_categories.splice(index, 1);
        console.log(this.selected_categories);
    };
    AddBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-book',
            template: __webpack_require__(/*! ./add-book.component.html */ "./src/app/pages/add-book/add-book.component.html")
        }),
        __metadata("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"],
            src_app_services_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AddBookComponent);
    return AddBookComponent;
}());



/***/ }),

/***/ "./src/app/pages/chats/chats.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/chats/chats.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\nTemplate Name: Admin pro Admin\r\nAuthor: Wrappixel\r\nEmail: niravjoshi87@gmail.com\r\nFile: scss\r\n*/\r\n/*\r\nTemplate Name: Admin Pro Admin\r\nAuthor: Wrappixel\r\nEmail: niravjoshi87@gmail.com\r\nFile: scss\r\n*/\r\n/*Theme Colors*/\r\n/*bootstrap Color*/\r\n/*Light colors*/\r\n/*Normal Color*/\r\n/*Extra Variable*/\r\n/*******************\r\nchat application Page\r\n******************/\r\n.chat-main-box {\r\n  position: relative;\r\n  overflow: hidden; }\r\n.chat-main-box .chat-left-aside {\r\n    position: relative;\r\n    width: 250px;\r\n    float: left;\r\n    z-index: 9;\r\n    top: 0px;\r\n    border-right: 1px solid rgba(120, 130, 140, 0.13); }\r\n.chat-main-box .chat-left-aside .open-panel {\r\n      display: none;\r\n      cursor: pointer;\r\n      position: absolute;\r\n      left: -webkit-calc(100% - 1px);\r\n      top: 50%;\r\n      z-index: 100;\r\n      background-color: #fff;\r\n      box-shadow: 1px 0 3px rgba(0, 0, 0, 0.2);\r\n      border-radius: 0 100px 100px 0;\r\n      line-height: 1;\r\n      padding: 15px 8px 15px 4px; }\r\n.chat-main-box .chat-left-aside .chat-left-inner {\r\n      position: relative; }\r\n.chat-main-box .chat-left-aside .chat-left-inner .chatonline {\r\n        position: relative;\r\n        height: 90%; }\r\n.chat-main-box .chat-left-aside .chat-left-inner .form-control {\r\n        height: 60px;\r\n        padding: 15px;\r\n        background-image: linear-gradient(#398bf7, #398bf7), linear-gradient(rgba(120, 130, 140, 0.13), rgba(120, 130, 140, 0.13)); }\r\n.chat-main-box .chat-left-aside .chat-left-inner .style-none {\r\n        padding: 0px; }\r\n.chat-main-box .chat-left-aside .chat-left-inner .style-none li {\r\n          list-style: none;\r\n          overflow: hidden; }\r\n.chat-main-box .chat-left-aside .chat-left-inner .style-none li a {\r\n            padding: 20px; }\r\n.chat-main-box .chat-left-aside .chat-left-inner .style-none li a:hover, .chat-main-box .chat-left-aside .chat-left-inner .style-none li a.active {\r\n              background: #ebf3f5; }\r\n.chat-main-box .chat-right-aside {\r\n    width: calc(100% - 250px);\r\n    float: left; }\r\n.chat-main-box .chat-right-aside .chat-rbox {\r\n      height: auto;\r\n      position: relative; }\r\n.chat-main-box .chat-right-aside .chat-list {\r\n      max-height: none;\r\n      height: 100%;\r\n      padding-top: 40px; }\r\n.chat-main-box .chat-right-aside .chat-list .chat-text {\r\n        border-radius: 6px; }\r\n.chat-main-box .chat-right-aside .send-chat-box {\r\n      position: relative; }\r\n.chat-main-box .chat-right-aside .send-chat-box .form-control {\r\n        border: none;\r\n        border-top: 1px solid rgba(120, 130, 140, 0.13);\r\n        resize: none;\r\n        height: 80px;\r\n        padding-right: 180px; }\r\n.chat-main-box .chat-right-aside .send-chat-box .form-control:focus {\r\n          border-color: rgba(120, 130, 140, 0.13); }\r\n.chat-main-box .chat-right-aside .send-chat-box .custom-send {\r\n        position: absolute;\r\n        right: 20px;\r\n        bottom: 10px; }\r\n.chat-main-box .chat-right-aside .send-chat-box .custom-send .cst-icon {\r\n          color: #67757c;\r\n          margin-right: 10px; }\r\n"

/***/ }),

/***/ "./src/app/pages/chats/chats.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/chats/chats.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- ============================================================== -->\r\n<!-- Start Page Content -->\r\n<!-- ============================================================== -->\r\n<div class=\"row\">\r\n\t<div class=\"col-12\">\r\n\t\t<div class=\"card m-b-0\">\r\n\t\t\t<div class=\"chat-main-box\">\r\n\t\t\t\t<!-- =============================================================== -->\r\n\t\t\t\t<!-- Left panel\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t -->\r\n\t\t\t\t<!-- =============================================================== -->\r\n\t\t\t\t<!-- TODO: Hacer que el panel izq se vea mas grande jiji -->\r\n\t\t\t\t<div class=\"chat-left-aside\">\r\n\t\t\t\t\t<div class=\"open-panel\">\r\n\t\t\t\t\t\t<i class=\"ti-angle-right\"></i>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"chat-left-inner\">\r\n\t\t\t\t\t\t<div class=\"form-material\">\r\n\t\t\t\t\t\t\t<input class=\"form-control p-20\" type=\"text\" placeholder=\"Buscar Chat\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<ul class=\"chatonline style-none\">\r\n\t\t\t\t\t\t\t<li *ngFor=\"let c of chats | async\" (click)=\"showMessages(c.key)\">\r\n\t\t\t\t\t\t\t\t<!-- INTERESADO -->\r\n\t\t\t\t\t\t\t\t<a *ngIf=\"c !== undefined && uid !== c.uid_interested.uid\">\r\n\t\t\t\t\t\t\t\t\t<img [src]=\"c.uid_interested.img\" alt=\"user-img\" class=\"img-circle img-circle-30\"> \r\n\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\t{{ c.uid_interested.name | titlecase }} \r\n\t\t\t\t\t\t\t\t\t\t{{ c.uid_interested.last_name1 | titlecase }} \r\n\t\t\t\t\t\t\t\t\t\t{{ c.uid_interested.last_name2 | titlecase }}\r\n\t\t\t\t\t\t\t\t\t\t<small class=\"text-muted\">{{ c.book.title | titlecase }}</small>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t\t<!-- DUENO -->\r\n\t\t\t\t\t\t\t\t<a *ngIf=\"c !== undefined && uid !== c.user_owner\">\r\n\t\t\t\t\t\t\t\t\t<img [src]=\"c.book.user.img\" alt=\"user-img\" class=\"img-circle img-circle-30\"> \r\n\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\t{{ c.book.user.name | titlecase }} \r\n\t\t\t\t\t\t\t\t\t\t{{ c.book.user.last_name1 | titlecase }} \r\n\t\t\t\t\t\t\t\t\t\t{{ c.book.user.last_name2 | titlecase }}\r\n\t\t\t\t\t\t\t\t\t\t<small class=\"text-muted\">{{ c.book.title | titlecase }}</small>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- =============================================================== -->\r\n\t\t\t\t<!-- End left panel\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t -->\r\n\t\t\t\t<!-- =============================================================== -->\r\n\r\n\t\t\t\t<!-- =============================================================== -->\r\n\t\t\t\t<!-- Right panel\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t -->\r\n\t\t\t\t<!-- =============================================================== -->\r\n\t\t\t\t<div class=\"chat-right-aside\">\r\n\t\t\t\t\t<div class=\"chat-main-header\">\r\n\t\t\t\t\t\t<div class=\"p-20 b-b\">\r\n\t\t\t\t\t\t\t<h3 class=\"box-title\">Chat Message</h3>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t<div class=\"chat-rbox\">\r\n\t\t\t\t\t<ul class=\"chat-list p-20\">\r\n\t\t\t\t\t\t<!--chat Row -->\r\n\t\t\t\t\t\t<div *ngFor=\"let text of message.text; let i = index;\">\r\n\r\n\t\t\t\t\t\t\t<!-- DERECHA USUARIO ACTIVO -->\r\n\t\t\t\t\t\t\t<li class=\"reverse\">\r\n\t\t\t\t\t\t\t\t<!-- DUEÑO -->\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"message.user_owner === uid && text[message.user_owner] !== undefined\"> \r\n\t\t\t\t\t\t\t\t\t<div class=\"chat-time\">{{ message.date }}</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"chat-content\">\r\n\t\t\t\t\t\t\t\t\t\t<h5>\r\n\t\t\t\t\t\t\t\t\t\t\t{{ message.book.user.name | titlecase }} \r\n\t\t\t\t\t\t\t\t\t\t\t{{ message.book.user.last_name1 | titlecase }} \r\n\t\t\t\t\t\t\t\t\t\t\t{{ message.book.user.last_name2 | titlecase }}\r\n\t\t\t\t\t\t\t\t\t\t</h5>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"box bg-light-inverse\">{{ text[message.user_owner] }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"chat-img\">\r\n\t\t\t\t\t\t\t\t\t\t<img [src]=\"message.book.user.img\" class=\"img-circle-40\"/>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<!-- INTERESADO -->\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"message.uid_interested.uid === uid && text[message.uid_interested.uid] !== undefined\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"chat-time\">{{ message.date }}</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"chat-content\">\r\n\t\t\t\t\t\t\t\t\t\t<h5>\r\n\t\t\t\t\t\t\t\t\t\t\t{{ message.uid_interested.name | titlecase }} \r\n\t\t\t\t\t\t\t\t\t\t\t{{ message.uid_interested.last_name1 | titlecase }} \r\n\t\t\t\t\t\t\t\t\t\t\t{{ message.uid_interested.last_name2 | titlecase }}\r\n\t\t\t\t\t\t\t\t\t\t</h5>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"box bg-light-inverse\" *ngIf=\"i === 0; else answer;\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{ text[message.uid_interested.uid] }} <br>\r\n\t\t\t\t\t\t\t\t\t\t\tLibro: {{  message.book.title }} <br>\r\n\t\t\t\t\t\t\t\t\t\t\tTransacción: {{ message.transaction }} <br>\r\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"message.transaction === 'Venta'\">Valor: {{ message.price }} <br></span>\r\n\t\t\t\t\t\t\t\t\t\t\tLugar y horario: {{ message.pref }} <br>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<ng-template #answer> \r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box bg-light-info\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t {{ text[message.uid_interested.uid] }} </div>\t\r\n\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"chat-img\">\r\n\t\t\t\t\t\t\t\t\t\t<img [src]=\"message.uid_interested.img\" class=\"img-circle-40\"/>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\r\n\t\t\t\t\t\t\t<!-- IZQUIERDA -->\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<!-- INTERESADO -->\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"message.uid_interested.uid !== uid && text[message.uid_interested.uid] !== undefined\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"chat-img\">\r\n\t\t\t\t\t\t\t\t\t\t<img [src]=\"message.uid_interested.img\" class=\"img-circle-40\"/>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"chat-content\">\r\n\t\t\t\t\t\t\t\t\t\t<h5> \r\n\t\t\t\t\t\t\t\t\t\t\t{{ message.uid_interested.name | titlecase }} \r\n\t\t\t\t\t\t\t\t\t\t\t{{ message.uid_interested.last_name1 | titlecase }} \r\n\t\t\t\t\t\t\t\t\t\t\t{{ message.uid_interested.last_name2 | titlecase }}\r\n\t\t\t\t\t\t\t\t\t\t</h5>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"box bg-light-info\" *ngIf=\"i === 0; else answer;\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{ text[message.uid_interested.uid] }} <br>\r\n\t\t\t\t\t\t\t\t\t\t\tLibro: {{  message.book.title }} <br>\r\n\t\t\t\t\t\t\t\t\t\t\tTransacción: {{ message.transaction }} <br>\r\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"message.transaction === 'Venta'\">Valor: {{ message.price }} <br></span>\r\n\t\t\t\t\t\t\t\t\t\t\tLugar y horario: {{ message.pref }} <br>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<ng-template #answer> \r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box bg-light-info\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t {{ text[message.uid_interested.uid] }} </div>\t\r\n\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"chat-time\">{{ message.date }}</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<!-- DUEÑO -->\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"message.user_owner !== uid && text[message.user_owner] !== undefined\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"chat-img\">\r\n\t\t\t\t\t\t\t\t\t\t<img [src]=\"message.book.user.img\" class=\"img-circle-40\"/>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"chat-content\">\r\n\t\t\t\t\t\t\t\t\t\t<h5> \r\n\t\t\t\t\t\t\t\t\t\t\t{{ message.book.user.name | titlecase }} \r\n\t\t\t\t\t\t\t\t\t\t\t{{ message.book.user.last_name1 | titlecase }} \r\n\t\t\t\t\t\t\t\t\t\t\t{{ message.book.user.last_name2 | titlecase }}\r\n\t\t\t\t\t\t\t\t\t\t</h5>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"box bg-light-info\">{{ text[message.user_owner] }} </div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"chat-time\">{{ message.date }}</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-body b-t\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-8\">\r\n\t\t\t\t\t\t\t<textarea [(ngModel)]=\"text_answer\" name=\"text_answer\" placeholder=\"Escribe tu respuesta aquí...\" class=\"form-control b-0\"></textarea>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-4 text-right\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-info btn-circle btn-lg\" (click)=\"sendMessage(message, text_answer)\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-paper-plane-o\"></i> \r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- =============================================================== -->\r\n\t\t\t\t<!-- End right panel\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t -->\r\n\t\t\t\t<!-- =============================================================== -->\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n<div>\r\n<!-- ============================================================== -->\r\n<!-- End PAge Content -->\r\n<!-- ============================================================== -->"

/***/ }),

/***/ "./src/app/pages/chats/chats.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/chats/chats.component.ts ***!
  \************************************************/
/*! exports provided: ChatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsComponent", function() { return ChatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/date.service */ "./src/app/services/date.service.ts");
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// ANGULARFIRE2

// SERVICES



var ChatsComponent = /** @class */ (function () {
    function ChatsComponent(_dbService, afs, _date, route) {
        var _this = this;
        this._dbService = _dbService;
        this.afs = afs;
        this._date = _date;
        this.route = route;
        this.message = {
            uid_interested: ''
        };
        this.route.params
            .subscribe(function (params) {
            _this.uid = JSON.parse(localStorage.getItem('user')).uid;
            _this.actual_user = JSON.parse(localStorage.getItem('user'));
            // Si es que viene un mensaje en la ruta lo abrimos
            if (params['key'] !== undefined && params['key'] !== null) {
                _this.showMessages(params['key']);
            }
            _this.chatsCollection = afs.collection('messages-transaction');
            _this.chats = _this.chatsCollection.snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) { return actions.map(function (a) {
                var data = a.payload.doc.data();
                var key = a.payload.doc.id;
                // Filtro los datos para obtener solo en los que aparezco
                if (data.user_owner === _this.uid || data.uid_interested.uid === _this.uid) {
                    return __assign({ key: key }, data);
                }
            }); }));
        });
    }
    ChatsComponent.prototype.showMessages = function (key) {
        var _this = this;
        this.key = key; // Para que se pueda ver desde el otro método
        this.selected_chat = this.afs.collection('messages-transaction').doc(key);
        this.selected_chat
            .valueChanges()
            .subscribe(function (data) {
            _this.message = data;
            // Actualiza que el mensaje está leído
            _this.message.status = true;
            _this._dbService.updateData('messages-transaction', key, _this.message);
        });
    };
    // Envía el mensaje desde el usuario actual hacia la DB
    ChatsComponent.prototype.sendMessage = function (message, text_answer) {
        if (this.text_answer === undefined || this.text_answer === null || this.text_answer === "") {
            swal('Debe ingresar un texto para responder', '', 'warning');
            return;
        }
        var answer = (_a = {},
            _a[this.uid] = text_answer,
            _a.date = this._date.actual_date(),
            _a);
        this.message.text.push(answer);
        this.message.status = false;
        this._dbService.updateData('messages-transaction', this.key, this.message);
        this.text_answer = undefined;
        var _a;
    };
    ChatsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chats',
            template: __webpack_require__(/*! ./chats.component.html */ "./src/app/pages/chats/chats.component.html"),
            styles: [__webpack_require__(/*! ./chats.component.css */ "./src/app/pages/chats/chats.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _services_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], ChatsComponent);
    return ChatsComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================================== -->\r\n<!-- Options view bar\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n<!-- ============================================================================== -->\r\n<div class=\"container mb-3\">\r\n\t<div class=\"row text-center\">\r\n\t\t<div class=\"col-12\">\r\n\t\t\t<div class=\"btn-group mr-2\" role=\"group\">\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" \r\n\t\t\t\t\t\t\t\t[ngClass]=\"{'active': view_bar === 'all'}\"\r\n\t\t\t\t\t\t\t\t(click)=\"view_bar = 'all'\">\r\n\t\t\t    \tTodos\r\n\t\t\t\t</button>\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" \r\n\t\t\t\t\t\t\t\t[ngClass]=\"{'active': view_bar === 'exchange'}\"\r\n\t\t\t\t\t\t\t\t(click)=\"view_bar = 'exchange'\">\r\n\t\t\t    \tIntercambio\r\n\t\t\t\t</button>\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" \r\n\t\t\t\t\t\t\t\t[ngClass]=\"{'active': view_bar === 'sales'}\"\r\n\t\t\t\t\t\t\t\t(click)=\"view_bar = 'sales'\">\r\n\t\t\t    \tVentas\r\n\t\t\t\t</button>\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" \r\n\t\t\t\t\t\t\t\t[ngClass]=\"{'active': view_bar === 'both'}\"\r\n\t\t\t\t\t\t\t\t(click)=\"view_bar = 'both'\">\r\n\t\t\t\t\tAmbos\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- ============================================================================== -->\r\n<!-- End options view bar\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n<!-- ============================================================================== -->\r\n\r\n<!-- ============================================================================== -->\r\n<!-- Cards according to view bar\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n<!-- ============================================================================== -->\r\n<div [ngSwitch]=\"view_bar\">\r\n\t<div *ngSwitchCase=\"'all'\">\r\n\t\t<app-card-book type=\"all\" [booksHome]=\"books\"></app-card-book>\r\n\t</div>\r\n\t<div *ngSwitchCase=\"'exchange'\">\r\n\t\t<app-card-book type=\"Intercambio\" [booksHome]=\"books\"></app-card-book>\r\n\t</div>\r\n\t<div *ngSwitchCase=\"'sales'\">\r\n\t\t<app-card-book type=\"Venta\" [booksHome]=\"books\"></app-card-book>\r\n\t</div>\r\n\t<div *ngSwitchCase=\"'both'\">\r\n\t\t<app-card-book type=\"Ambos\" [booksHome]=\"books\"></app-card-book>\r\n\t</div>\r\n</div>\r\n<!-- ============================================================================== -->\r\n<!-- End cards according to view bar\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n<!-- ============================================================================== -->\r\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(_dbService) {
        var _this = this;
        this._dbService = _dbService;
        this.view_bar = 'all';
        this.books = [];
        this._dbService.getData('books')
            .valueChanges()
            .subscribe(function (data) {
            _this.books = [];
            _this.books = data;
            var _loop_1 = function (i) {
                _this._dbService.afs.doc(data[i].user)
                    .valueChanges()
                    .subscribe(function (resp) { return _this.books[i].user = resp; });
            };
            // Cambia la referencia del user por el objeto del usuario
            for (var i = 0; i < _this.books.length; i++) {
                _loop_1(i);
            }
        });
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html")
        }),
        __metadata("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/library/library.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/library/library.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\t<div class=\"row\">\r\n\t\t<!-- ============================================================================================== -->\r\n\t\t<!-- Column left: List of books\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n\t\t<!-- ============================================================================================== -->\r\n\t\t<div class=\"col-4\">\r\n\t\t\t<h3>Mis libros</h3>\r\n\t\t\t<ul class=\"list-group\">\r\n\t\t\t\t<li class=\"list-group-item\" style=\"cursor: pointer;\" \r\n\t\t\t\t\t*ngFor=\"let book of books\"\r\n\t\t\t\t\t[ngClass]=\"{'active': book.id === book_modal.id}\"\r\n\t\t\t\t\t(click)=\"book_modal = book\">\r\n\t\t\t\t\t{{ book.title | titlecase }}\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t\t<!-- ============================================================================================== -->\r\n\t\t<!-- End column left: List of books\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n\t\t<!-- ============================================================================================== -->\r\n\r\n\t\t<!-- ============================================================================================== -->\r\n\t\t<!-- Column right: Selected book details\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n\t\t<!-- ============================================================================================== -->\r\n\t\t<div class=\"col-8\">\r\n\t\t\t<div class=\"card-body\" style=\"background-color: #FFFFFF;\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t<div class=\"card\" *ngIf=\"book_modal.title !== ''; else other\">\r\n\t\t\t\t\t\t\t<form class=\"form-horizontal\" role=\"form\">\r\n\t\t\t\t\t\t\t\t<!-- ROW PRINCIPAL -->\r\n\t\t\t\t\t\t\t\t<div class=\"form-body\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<!-- CARROUSEL BOOK IMAGES -->\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"carouselExampleFade\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"carousel-inner\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"carousel-item\" *ngFor=\"let img of book_modal.images; let i=index;\" [ngClass]=\"{'active': i===0}\" >\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"d-block img-carousel\" [src]=\"img\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"carousel-control-prev\" href=\"#carouselExampleFade\" role=\"button\" data-slide=\"prev\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"carousel-control-next\" href=\"#carouselExampleFade\" role=\"button\" data-slide=\"next\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- CARROUSEL BOOK IMAGES -->\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- TÍTULO LIBRO -->\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Título:</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"form-control-static\"> {{ book_modal.title | titlecase }} </p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- AUTOR/A LIBRO -->\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Autor/a:</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"form-control-static\"> {{ book_modal.author | titlecase }} </p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- TIPO DE TRANSACCIÓN -->\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Tipo de transacción:</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"form-control-static\"> {{ book_modal.transaction }} </p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- PRECIO LIBRO -->\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"book_modal.transaction === 'Venta' || book_modal.transaction === 'Ambos'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Precio:</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"form-control-static\"> ${{ book_modal.price | thousands }} </p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<!-- ROW DETALLES -->\r\n\t\t\t\t\t\t\t\t<h3 class=\"box-title\">Detalles</h3>\r\n\t\t\t\t\t\t\t\t<hr class=\"m-t-0 m-b-40\">\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t<!-- TIPO DE ELEMENTO -->\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Elemento:</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"form-control-static\"> {{ book_modal.type }} </p>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<!-- GÉNERO -->\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Género:</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"form-control-static\"> {{ book_modal.genres }} </p>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<!-- EDITORIAL -->\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Editorial:</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"form-control-static\"> {{ book_modal.editorial | titlecase }} </p>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<!-- IDIOMA -->\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Idioma:</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"form-control-static\"> {{ book_modal.language }} </p>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t<!-- ORIGINAL -->\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Original:</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"form-control-static\"> {{ book_modal.original }} </p>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<!-- NÚMERO DE PÁGINAS -->\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Número de páginas:</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"form-control-static\"> {{ book_modal.num_page }} </p>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<!-- COMENTARIOS -->\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Comentario:</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"form-control-static\"> {{ book_modal.comment }} </p>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"form-actions\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row justify-content-md-center\">\r\n\t\t\t\t\t\t\t\t\t\t<!-- BOTÓN EDITAR -->\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-outline-info model_img img-responsive\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\tdata-toggle=\"modal\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\tdata-target=\".bs-example-modal-lg\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"button\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-pencil\"></i> Editar</button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<!-- BOTÓN ELIMINAR -->\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-danger img-responsive\" type=\"button\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"deleteBook()\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-trash-o\"></i> Eliminar</button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\"> </div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<ng-template #other>\r\n\t\t\t\t\t\t<div class=\"alert alert-primary\" role=\"alert\">\r\n\t\t\t\t\t\t\tDebe seleccionar un libro\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- ============================================================================================== -->\r\n\t\t<!-- End column right: Selected book details\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n\t\t<!-- ============================================================================================== -->\r\n\t</div>\r\n</div>\r\n\r\n<!-- ================================================================================================== -->\r\n<!-- Modal edit/delete book\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n<!-- ================================================================================================== -->\r\n<div id=\"openModal\" class=\"modal fade bs-example-modal-lg\">\r\n\t<div class=\"modal-dialog modal-lg\">\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<h4 class=\"modal-title\" id=\"myLargeModalLabel\"> {{ book_modal.title | titlecase }} </h4>\r\n\t\t\t\t<!-- Botón para cerrar el modal -->\r\n\t\t\t\t<button _ngcontent-c0=\"\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n\t\t\t\t\t<span _ngcontent-c0=\"\" aria-hidden=\"true\">×</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<form class=\"form-material m-t-40\" >\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<!-- Inicio col 1 -->\r\n\t\t\t\t\t\t<div class=\"col-6\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label>Título</label>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"book_modal.title\" name=\"title\" \r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control form-control-line border-input-custom\" placeholder=\"Ej.: Harry Potter\">\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label>Autor/a</label>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"book_modal.author\" name=\"author\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control form-control-line border-input-custom\" placeholder=\"Ej.: J. K. Rowling\">\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label>Editorial</label>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"book_modal.editorial\" name=\"editorial\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control form-control-line border-input-custom\" placeholder=\"Ej.: Salamandra\">\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"form-group border-input-custom\">\r\n\t\t\t\t\t\t\t\t<label>Tipo de transacción</label>\r\n\t\t\t\t\t\t\t\t<select class=\"form-control\" [(ngModel)]=\"book_modal.transaction\"\tname=\"transaction\">\r\n\t\t\t\t\t\t\t\t\t<option value=\"Intercambio\">Intercambio</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Venta\">Venta</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Ambos\">Ambos</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"form-group\" \r\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"book_modal.transaction === 'Venta' || book_modal.transaction === 'Ambos'\">\r\n\t\t\t\t\t\t\t\t<label>Precio</label>\r\n\t\t\t\t\t\t\t\t<input [(ngModel)]=\"book_modal.price\" name=\"price\" onlynumber=\"true\" minlength=\"3\" maxlength=\"6\" \r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control form-control-line border-input-custom\" placeholder=\"Ej.: 5000\" required>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"form-group border-input-custom\">\r\n\t\t\t\t\t\t\t\t<label>Tipo de elemento</label>\r\n\t\t\t\t\t\t\t\t<select class=\"form-control\" [(ngModel)]=\"book_modal.type\" name=\"type\">\r\n\t\t\t\t\t\t\t\t\t<option value=\"Libro\">Libro</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Cómic\">Cómic</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Lectura especializada\">Lectura especializada</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Literatura infantil\">Literatura infantil</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Otro\">Otro</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<!-- Inicio col 2 -->\r\n\t\t\t\t\t\t<div class=\"col-6\">\r\n\t\t\t\t\t\t\t<div class=\"form-group border-input-custom\">\r\n\t\t\t\t\t\t\t\t<label>Género al que pertenece</label>\r\n\t\t\t\t\t\t\t\t<select class=\"form-control\" [(ngModel)]=\"book_modal.genres\" name=\"genres\" multiple>\r\n\t\t\t\t\t\t\t\t\t<option value=\"1\">1</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"2\">2</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Lectura especializada\">Lectura especializada</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Literatura infantil\">Literatura infantil</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Otro\">Otro</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"form-group border-input-custom\">\r\n\t\t\t\t\t\t\t\t<label>Idioma</label>\r\n\t\t\t\t\t\t\t\t<select class=\"form-control\" [(ngModel)]=\"book_modal.language\" name=\"language\">\r\n\t\t\t\t\t\t\t\t\t<option value=\"Español\">Español</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Inglés\">Inglés</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Otro\">Otro</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"form-group border-input-custom\">\r\n\t\t\t\t\t\t\t\t<label>Texto original</label>\r\n\t\t\t\t\t\t\t\t<select class=\"form-control\" [(ngModel)]=\"book_modal.original\" name=\"original\">\r\n\t\t\t\t\t\t\t\t\t<option value=\"Sí\">Sí</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"No\">No</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label>Cantidad de páginas</label>\r\n\t\t\t\t\t\t\t\t<input \t[(ngModel)]=\"book_modal.num_page\"\tname=\"num_pages\" onlynumber=\"true\" minlength=\"2\" maxlength=\"5\" \r\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control form-control-line border-input-custom\" placeholder=\"Ej.: 324\"\trequired>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label>Comentario</label>\r\n\t\t\t\t\t\t\t\t<textarea class=\"form-control border-input-custom\" [(ngModel)]=\"book_modal.comment\" name=\"comment\" rows=\"2\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Ej.: El libro se encuentra en buen estado, leído solo una vez.\">\r\n\t\t\t\t\t\t\t\t</textarea>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<!-- TODO: Agregar el editar las categorías -->\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-outline-info\" (click)=\"updateBook()\">Editar</button>\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-danger waves-effect text-left\" data-dismiss=\"modal\">Close</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- ================================================================================================== -->\r\n<!-- End modal edit/delete book\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n<!-- ================================================================================================== -->"

/***/ }),

/***/ "./src/app/pages/library/library.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/library/library.component.ts ***!
  \****************************************************/
/*! exports provided: LibraryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryComponent", function() { return LibraryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_3__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// SERVICE

// SWEET ALERT

var LibraryComponent = /** @class */ (function () {
    function LibraryComponent(_dbService) {
        var _this = this;
        this._dbService = _dbService;
        this.books = [];
        var user = JSON.parse(localStorage.getItem("user"));
        this._dbService.getDataQuery("books", "uid", "==", user.uid)
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var key = a.payload.doc.id;
            return __assign({ key: key }, data);
        }); })).subscribe(function (data) {
            _this.books = [];
            _this.books = data;
        });
    }
    LibraryComponent.prototype.ngOnInit = function () {
        this.resetBook();
    };
    // Actualiza el libro en la DB
    LibraryComponent.prototype.updateBook = function () {
        this._dbService.updateData("books", this.book_modal.key, this.book_modal)
            .then(function () {
            sweetalert__WEBPACK_IMPORTED_MODULE_3___default()('Cambios guardados', 'Sus cambios han sidos guardados con éxito', 'success');
        })
            .catch(function () {
            sweetalert__WEBPACK_IMPORTED_MODULE_3___default()('Error al editar', 'Por favor, vuelva a intentarlo', 'error');
        });
    };
    // Elimina un libro de la DB
    LibraryComponent.prototype.deleteBook = function () {
        var _this = this;
        this._dbService.deleteData("books", this.book_modal.key)
            .then(function () {
            sweetalert__WEBPACK_IMPORTED_MODULE_3___default()('Libro eliminado', 'El libro seleccionado ha sido eliminado', 'success');
            _this.resetBook();
        })
            .catch(function () {
            sweetalert__WEBPACK_IMPORTED_MODULE_3___default()('Error al eliminar', 'Por favor, vuelva a intentarlo', 'error');
        });
    };
    // Deja los campos de libro en blanco al borrar uno o entrar en Mi Biblioteca
    LibraryComponent.prototype.resetBook = function () {
        this.book_modal = {
            author: '',
            title: '',
            editorial: '',
            type: '',
            genres: [],
            language: '',
            num_page: '',
            original: false,
            transaction: '',
            user: '',
            id: '',
            comment: '',
            price: 0,
            images: []
        };
    };
    LibraryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-library',
            template: __webpack_require__(/*! ./library.component.html */ "./src/app/pages/library/library.component.html")
        }),
        __metadata("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]])
    ], LibraryComponent);
    return LibraryComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.component.html":
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"main-wrapper\">\r\n\t<app-header></app-header>\r\n\t<app-sidebar></app-sidebar>\r\n\r\n\t<!-- ============================================================== -->\r\n\t<!-- Page wrapper  -->\r\n\t<!-- ============================================================== -->\r\n\t<div class=\"page-wrapper\">\r\n\t\t<!-- ============================================================== -->\r\n\t\t<!-- Container fluid  -->\r\n\t\t<!-- ============================================================== -->\r\n\t\t<div class=\"container-fluid\">\r\n\r\n\t\t\t<!-- ============================================================== -->\r\n\t\t\t<!-- Start Page Content -->\r\n\t\t\t<!-- ============================================================== -->\r\n\t\t\t<router-outlet></router-outlet>\r\n\t\t\t<!-- ============================================================== -->\r\n\t\t\t<!-- End Page Content -->\r\n\t\t\t<!-- ============================================================== -->\r\n\t\t</div>\r\n\t\t<!-- ============================================================== -->\r\n\t\t<!-- END Container fluid  -->\r\n\t\t<!-- ============================================================== -->\r\n\t</div>\r\n\t<!-- ============================================================== -->\r\n\t<!-- END Page wrapper  -->\r\n\t<!-- ============================================================== -->\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- Barra de opción de vistas -->\r\n<!-- <div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-4\"></div>\r\n\t\t<div class=\"col-4\">\r\n\t\t\t<div class=\"btn-group btn-group-toggle\">\r\n\t\t\t\t<label class=\"btn btn-secondary active\">\r\n\t\t\t\t\t\t<a href=\"#\" class=\"\">Todos</a>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<label class=\"btn btn-secondary\">\r\n\t\t\t\t\t\t<a href=\"#\" class=\"\">Intercambio</a>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t<label class=\"btn btn-secondary\">\r\n\t\t\t\t\t\t<a href=\"#\" class=\"\">Ventas</a>\r\n\t\t\t\t</label>\r\n\t\t\t\t<label class=\"btn btn-secondary\">\r\n\t\t\t\t\t\t<a href=\"#\" class=\"\">Ambos</a>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-4\"></div>\r\n\t</div>\r\n</div>\r\n -->\r\n\r\n\r\n<!-- <app-card-book></app-card-book> -->\r\n\r\n<!-- <app-add-book></app-add-book> -->\r\n\r\n\r\n<!-- [heroe] es el nombre de la propiedad y \"heroe\" es el nombre de la variable local -->\r\n<!-- <app-books-card [book]=\"heroe\" [index]=\"i\" *ngFor=\"let book of books; let i = index\"></app-books-card> -->\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagesComponent = /** @class */ (function () {
    function PagesComponent() {
    }
    PagesComponent.prototype.ngOnInit = function () {
    };
    PagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pages',
            template: __webpack_require__(/*! ./pages.component.html */ "./src/app/pages/pages.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pipes_thousands_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pipes/thousands.pipe */ "./src/app/pipes/thousands.pipe.ts");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../services/date.service */ "./src/app/services/date.service.ts");
/* harmony import */ var _pages_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages.routes */ "./src/app/pages/pages.routes.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _add_book_add_book_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./add-book/add-book.component */ "./src/app/pages/add-book/add-book.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/pages/profile/profile.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _library_library_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./library/library.component */ "./src/app/pages/library/library.component.ts");
/* harmony import */ var _chats_chats_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./chats/chats.component */ "./src/app/pages/chats/chats.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./search/search.component */ "./src/app/pages/search/search.component.ts");
/* harmony import */ var _components_card_book_card_book_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/card-book/card-book.component */ "./src/app/components/card-book/card-book.component.ts");
/* harmony import */ var _components_one_book_one_book_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/one-book/one-book.component */ "./src/app/components/one-book/one-book.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// MODULES

// PIPES

// SERVICES


// ROUTES

// ANGULARFIRE2




// ENVIRONMENT

// PAGES-COMPONENTS







// COMPONENTS


var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _add_book_add_book_component__WEBPACK_IMPORTED_MODULE_14__["AddBookComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
                _library_library_component__WEBPACK_IMPORTED_MODULE_17__["LibraryComponent"],
                _components_one_book_one_book_component__WEBPACK_IMPORTED_MODULE_21__["OneBookComponent"],
                _pages_component__WEBPACK_IMPORTED_MODULE_13__["PagesComponent"],
                _components_card_book_card_book_component__WEBPACK_IMPORTED_MODULE_20__["CardBookComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_19__["SearchComponent"],
                _pipes_thousands_pipe__WEBPACK_IMPORTED_MODULE_4__["ThousandsPipe"],
                _chats_chats_component__WEBPACK_IMPORTED_MODULE_18__["ChatsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _pages_routes__WEBPACK_IMPORTED_MODULE_7__["PAGES_ROUTES"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebase),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"],
                angularfire2_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorageModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_11__["AngularFireAuthModule"]
            ],
            providers: [
                _services_database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"],
                _services_date_service__WEBPACK_IMPORTED_MODULE_6__["DateService"]
            ],
            exports: [
                _pipes_thousands_pipe__WEBPACK_IMPORTED_MODULE_4__["ThousandsPipe"]
            ],
            bootstrap: [_pages_component__WEBPACK_IMPORTED_MODULE_13__["PagesComponent"]]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.routes.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.routes.ts ***!
  \***************************************/
/*! exports provided: PAGES_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGES_ROUTES", function() { return PAGES_ROUTES; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _add_book_add_book_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-book/add-book.component */ "./src/app/pages/add-book/add-book.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/pages/profile/profile.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _library_library_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./library/library.component */ "./src/app/pages/library/library.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search/search.component */ "./src/app/pages/search/search.component.ts");
/* harmony import */ var _services_guards_login_guard_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/guards/login-guard.guard */ "./src/app/services/guards/login-guard.guard.ts");
/* harmony import */ var _chats_chats_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chats/chats.component */ "./src/app/pages/chats/chats.component.ts");

// PAGES






// GUARD


var PAGES_ROUTE = [
    {
        path: '',
        component: _pages_component__WEBPACK_IMPORTED_MODULE_1__["PagesComponent"],
        canActivate: [_services_guards_login_guard_guard__WEBPACK_IMPORTED_MODULE_7__["LoginGuardGuard"]],
        children: [
            { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
            { path: 'addBook', component: _add_book_add_book_component__WEBPACK_IMPORTED_MODULE_2__["AddBookComponent"] },
            { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"] },
            { path: 'library', component: _library_library_component__WEBPACK_IMPORTED_MODULE_5__["LibraryComponent"] },
            { path: 'search/:input', component: _search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"] },
            { path: 'messages', component: _chats_chats_component__WEBPACK_IMPORTED_MODULE_8__["ChatsComponent"] },
            { path: 'messages/:key', component: _chats_chats_component__WEBPACK_IMPORTED_MODULE_8__["ChatsComponent"] },
            { path: '', pathMatch: 'full', redirectTo: 'home' }
        ]
    }
];
var PAGES_ROUTES = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(PAGES_ROUTE);


/***/ }),

/***/ "./src/app/pages/profile/profile.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/profile/profile.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<div class=\"row card\">\r\n\t\t<!-- ================================================================================================== -->\r\n\t\t<!-- Profile options\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n\t\t<!-- ================================================================================================== -->\r\n\t\t<ul class=\"nav nav-tabs customtab\" role=\"tablist\">\r\n\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t<a \tclass=\"nav-link\" data-toggle=\"tab\" role=\"tab\" aria-expanded=\"true\"\r\n\t\t\t\t\t[ngClass]=\"{'active': profile_options === 'my_profile'}\"\r\n\t\t\t\t\t(click)=\"profile_options = 'my_profile'\">\r\n\t\t\t\t\t<span class=\"hidden-xs-down\">Mi perfil</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t<a \tclass=\"nav-link\" data-toggle=\"tab\" role=\"tab\" aria-expanded=\"true\"\r\n\t\t\t\t\t[ngClass]=\"{'active': profile_options === 'edit_profile'}\"\r\n\t\t\t\t\t(click)=\"profile_options = 'edit_profile'\">\r\n\t\t\t\t\t<span class=\"hidden-xs-down\">Editar perfil</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t<a \tclass=\"nav-link\" data-toggle=\"tab\" role=\"tab\" aria-expanded=\"true\"\r\n\t\t\t\t\t[ngClass]=\"{'active': profile_options === 'preference_profile'}\"\r\n\t\t\t\t\t(click)=\"profile_options = 'preference_profile'\">\r\n\t\t\t\t\t<span class=\"hidden-xs-down\">Preferencias de entrega</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t<a \tclass=\"nav-link\" data-toggle=\"tab\" role=\"tab\" aria-expanded=\"true\"\r\n\t\t\t\t\t[ngClass]=\"{'active': profile_options === 'delete_profile'}\"\r\n\t\t\t\t\t(click)=\"profile_options = 'delete_profile'\">\r\n\t\t\t\t\t<span class=\"hidden-xs-down\">Eliminar cuenta</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t\t<!-- ================================================================================================== -->\r\n\t\t<!-- End profile options\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n\t\t<!-- ================================================================================================== -->\r\n\r\n\r\n\t\t<div [ngSwitch]=\"profile_options\">\r\n\t\t\t<!-- ============================================================================================== -->\r\n\t\t\t<!-- Show profile\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n\t\t\t<!-- ============================================================================================== -->\r\n\t\t\t<div *ngSwitchCase=\"'my_profile'\">\r\n\t\t\t\t<div class=\"col-12\">\r\n\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t<div class=\"card-body row\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\" align=\"center\">\r\n\t\t\t\t\t\t\t\t<img [src]=\"profile.img\" class=\"img-circle\" width=\"300\" />\r\n\t\t\t\t\t\t\t\t<h4 class=\"card-title\">\r\n\t\t\t\t\t\t\t\t\t{{ profile.name | titlecase }} {{ profile.last_name1 | titlecase }} {{ profile.last_name2 | titlecase }} </h4>\r\n\t\t\t\t\t\t\t\t<h6 class=\"card-subtitle\">Accoubts Manager Amix corp</h6>\r\n\t\t\t\t\t\t\t\t<div class=\"row text-center justify-content-md-center\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-4\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-book\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<font class=\"font-medium\"> {{ count_book }}</font>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t<small class=\"text-muted\">Correo electrónico</small>\r\n\t\t\t\t\t\t\t\t<h6>{{ profile.email }}</h6>\r\n\t\t\t\t\t\t\t\t<small class=\"text-muted p-t-30 db\">Teléfono de contacto</small>\r\n\t\t\t\t\t\t\t\t<h6>{{ profile.phone }}</h6>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!-- TODO: Revisar que esté aparezcan todas las cat. Copiar en modal de cardbook -->\r\n\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t<small class=\"text-muted\">Categorías favoritas:</small>\r\n\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<h6>{{ profile.categories }}</h6>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t<div class=\"dropdown-divider\"></div>\r\n\r\n\t\t\t\t\t\t\t<small class=\"text-muted p-t-30 db\">Redes sociales</small><br/>\r\n\t\t\t\t\t\t\t<button class=\"btn btn-circle btn-secondary\"><i class=\"fa fa-facebook\"></i></button>\r\n\t\t\t\t\t\t\t<button class=\"btn btn-circle btn-secondary\"><i class=\"fa fa-twitter\"></i></button>\r\n\t\t\t\t\t\t\t<button class=\"btn btn-circle btn-secondary\"><i class=\"fa fa-youtube\"></i></button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- ============================================================================================== -->\r\n\t\t\t<!-- End show profile\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n\t\t\t<!-- ============================================================================================== -->\r\n\r\n\t\t\t<!-- ============================================================================================== -->\r\n\t\t\t<!-- Edit profile\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n\t\t\t<!-- ============================================================================================== -->\r\n\t\t\t<div *ngSwitchCase=\"'edit_profile'\">\r\n\t\t\t\t<div style=\"background-color: #FFFFFF;\" class=\"tab-pane active\" role=\"tabpanel\" aria-expanded=\"true\">\r\n\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t<form class=\"form-horizontal form-material\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label class=\"col-md-12\">Nombres</label>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"profile.name\" name=\"name\" class=\"form-control form-control-line\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label class=\"col-md-12\">Apellido Paterno</label>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"profile.last_name1\" name=\"last_name1\" class=\"form-control form-control-line\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label class=\"col-md-12\">Apellido Materno</label>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"profile.last_name2\" name=\"last_name2\" class=\"form-control form-control-line\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label for=\"example-email\" class=\"col-md-12\">Correo electrónico</label>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"email\" [(ngModel)]=\"profile.email\" name=\"email\" class=\"form-control form-control-line\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label class=\"col-md-12\">Teléfono de contacto</label>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"profile.phone\" name=\"phone\" class=\"form-control form-control-line\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div class=\"form-group col-md-12\">\r\n\t\t\t\t\t\t\t\t<input type=\"file\" (change)=\"uploadFile($event)\" id=\"file\">\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-info btn-block\" (click)=\"updateProfile()\">Editar</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- ============================================================================================== -->\r\n\t\t\t<!-- End edit profile\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n\t\t\t<!-- ============================================================================================== -->\r\n\r\n\t\t\t<!-- ============================================================================================== -->\r\n\t\t\t<!-- User preferences\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n\t\t\t<!-- ============================================================================================== -->\r\n\t\t\t<div *ngSwitchCase=\"'preference_profile'\">\r\n\t\t\t\t<div style=\"background-color: #FFFFFF;\" class=\"tab-pane active\" id=\"settings\" role=\"tabpanel\" aria-expanded=\"true\">\r\n\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t\t\t<table class=\"table color-table info-table\">\r\n\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<th>Estación de metro</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Día</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Horario</th>\r\n\t\t\t\t\t\t\t\t\t\t<th class=\"text-nowrap\">Acción</th>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let p of preferences; let i = index;\">\r\n\t\t\t\t\t\t\t\t\t\t<td> {{ p.subway_station }} </td>\r\n\t\t\t\t\t\t\t\t\t\t<td> {{ p.day }} </td>\r\n\t\t\t\t\t\t\t\t\t\t<td> {{ p.hour }} </td>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-nowrap\">\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- TODO: Falta hacer que esto funcione -->\r\n\t\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"modal\" data-target=\"#editPreferences\" (click)=\"preferences_modal = p\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-pencil text-inverse m-r-10\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"modal\" data-target=\"#deletePreferences\" (click)=\"deletePreference(i)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-close text-danger\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<button type=\"button\"\r\n\t\t\t\t\t\t\t\tclass=\"btn btn-outline-info\"\r\n\t\t\t\t\t\t\t\tdata-toggle=\"modal\"\r\n\t\t\t\t\t\t\t\tdata-target=\"#addPreferences\">Agregar nueva preferencia</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- ============================================================================================== -->\r\n\t\t\t<!-- End user preferences\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n\t\t\t<!-- ============================================================================================== -->\r\n\r\n\t\t\t<!-- ============================================================================================== -->\r\n\t\t\t<!-- Delete user account\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n\t\t\t<!-- ============================================================================================== -->\r\n\t\t\t<div *ngSwitchCase=\"'delete_profile'\">\r\n\t\t\t\t<div style=\"background-color: #FFFFFF;\" class=\"tab-pane active\" id=\"settings\" role=\"tabpanel\" aria-expanded=\"true\">\r\n\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t<p>Estás por eliminar tu cuenta de BOOKscalo. Tus datos, tu perfil público y las publicaciones que realizaste ya no podrán ser vistas por ti, ni por ningún otro usuario.\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<p>Además debes considerar:</p>\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li type=\"circle\">Si solo quieres cambiar tus datos, no es necesario que desactives tu cuenta; modifícala en \"Editar perfil\".</li>\r\n\t\t\t\t\t\t\t<li type=\"circle\">Si solo quieres eliminar o editar una o todas tus publicaciones, no es necesario que desactives tu cuenta; elimínalos o edítalos en \"Mi Biblioteca\".</li>\r\n\t\t\t\t\t\t\t<li type=\"circle\">No podrás crear otra cuenta con el mismo correo con que iniciaste esta cuenta.</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn waves-effect waves-light btn-block btn-danger\" (click)=\"deleteAccount()\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-warning\"></i> Eliminar cuenta</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- ============================================================================================== -->\r\n\t\t\t<!-- End delete user account\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n\t\t\t<!-- ============================================================================================== -->\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<!-- ================================================================================================== -->\r\n<!-- Modal add preferences\t\t\t\t\t\t\t\t\t\t                                      \t\t\t\t\t\t\t\t\t\t-->\r\n<!-- ================================================================================================== -->\r\n<div id=\"addPreferences\" class=\"modal fade bs-example-modal-lg\">\r\n\t<div class=\"modal-dialog modal-lg\">\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<h4 class=\"modal-title\" id=\"myLargeModalLabel\"> Agregar nueva preferencia de transacción </h4>\r\n\t\t\t\t<button _ngcontent-c0=\"\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n\t\t\t\t\t<span _ngcontent-c0=\"\" aria-hidden=\"true\">×</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<form class=\"form-material m-t-40\" [formGroup]=\"form\" (ngSubmit)=\"addPreference()\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<!-- Inicio col 1 -->\r\n\t\t\t\t\t\t<div class=\"form-group col-12\">\r\n\t\t\t\t\t\t\t<label>Estación de metro</label>\r\n\t\t\t\t\t\t\t<select formControlName=\"subway_station\" id=\"subway_station\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t<optgroup label=\"Línea 1\">\r\n\t\t\t\t\t\t\t\t\t<option value=\"República\">República</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Los Héroes\">Los Héroes</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"La Moneda\">La Moneda</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Universidad de Chile\">Universidad de Chile</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Santa Lucía\">Santa Lucía</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Universidad Católica\">Universidad Católica</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Baquedano\">Baquedano</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Salvador\">Salvador</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Manuel Montt\">Manuel Montt</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Pedro de Valdivia\">Pedro de Valdivia</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Los Leones\">Los Leones</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Tobalaba\">Tobalaba</option>\r\n\t\t\t\t\t\t\t\t</optgroup>\r\n\t\t\t\t\t\t\t\t<optgroup label=\"Línea 5\">\r\n\t\t\t\t\t\t\t\t\t<option value=\"Quinta Normal\">Quinta Normal</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Cumming\">Cumming</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Santa Ana\">Santa Ana</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Plaza de Armas\">Plaza de Armas</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Bellas Artes\">Bellas Artes</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Baquedano\">Baquedano</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Parque Bustamante\">Parque Bustamante</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Santa Isabel\">Santa Isabel</option>\r\n\t\t\t\t\t\t\t\t</optgroup>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t\t\t\t<label>Tipo de elemento</label>\r\n\t\t\t\t\t\t\t<select formControlName=\"day\" id=\"day\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t<option value=\"Lunes\">Lunes</option>\r\n\t\t\t\t\t\t\t\t<option value=\"Martes\">Martes</option>\r\n\t\t\t\t\t\t\t\t<option value=\"Miércoles\">Miércoles</option>\r\n\t\t\t\t\t\t\t\t<option value=\"Jueves\">Jueves</option>\r\n\t\t\t\t\t\t\t\t<option value=\"Viernes\">Viernes</option>\r\n\t\t\t\t\t\t\t\t<option value=\"Sábado\">Sábado</option>\r\n\t\t\t\t\t\t\t\t<option value=\"Domingo\">Domingo</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t\t\t\t<label>Hora</label>\r\n\t\t\t\t\t\t\t<input formControlName=\"hour\" class=\"form-control\" type=\"time\" value=\"12:00\" id=\"hour\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-outline-info\" data-dismiss=\"modal\" (click)=\"addPreference()\">Agregar</button>\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-danger waves-effect text-left\" data-dismiss=\"modal\">Cerrar</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- ================================================================================================== -->\r\n<!-- End modal add preferences\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n<!-- ================================================================================================== -->\r\n\r\n\r\n<!-- ================================================================================================== -->\r\n<!-- Modal edit preferences\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n<!-- ================================================================================================== -->\r\n<div id=\"editPreferences\" class=\"modal fade bs-example-modal-lg\">\r\n\t\t<div class=\"modal-dialog modal-lg\">\r\n\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t\t<h4 class=\"modal-title\" id=\"myLargeModalLabel\"> Editar preferencia de transacción </h4>\r\n\t\t\t\t\t<button _ngcontent-c0=\"\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\r\n\t\t\t\t\t\t<span _ngcontent-c0=\"\" aria-hidden=\"true\">×</span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t<form class=\"form-material m-t-40\" >\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<!-- Inicio col 1 -->\r\n\t\t\t\t\t\t\t<div class=\"form-group col-12\">\r\n\t\t\t\t\t\t\t\t<label>Estación de metro</label>\r\n\t\t\t\t\t\t\t\t<select name=\"subway_station\" [(ngModel)]=\"preferences_modal.subway_station\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t\t<optgroup label=\"Línea 1\">\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"República\">República</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"Los Héroes\">Los Héroes</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"La Moneda\">La Moneda</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"Universidad de Chile\">Universidad de Chile</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"Santa Lucía\">Santa Lucía</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"Universidad Católica\">Universidad Católica</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"Baquedano\">Baquedano</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"Salvador\">Salvador</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"Manuel Montt\">Manuel Montt</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"Pedro de Valdivia\">Pedro de Valdivia</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"Los Leones\">Los Leones</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"Tobalaba\">Tobalaba</option>\r\n\t\t\t\t\t\t\t\t\t</optgroup>\r\n\t\t\t\t\t\t\t\t\t<optgroup label=\"Línea 5\">\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"Quinta Normal\">Quinta Normal</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"Cumming\">Cumming</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"Santa Ana\">Santa Ana</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"Plaza de Armas\">Plaza de Armas</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"Bellas Artes\">Bellas Artes</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"Baquedano\">Baquedano</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"Parque Bustamante\">Parque Bustamante</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"Santa Isabel\">Santa Isabel</option>\r\n\t\t\t\t\t\t\t\t\t</optgroup>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t\t\t\t\t<label>Tipo de elemento</label>\r\n\t\t\t\t\t\t\t\t<select name=\"day\" [(ngModel)]=\"preferences_modal.day\"  class=\"form-control\">\r\n\t\t\t\t\t\t\t\t\t<option value=\"Lunes\">Lunes</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Martes\">Martes</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Miércoles\">Miércoles</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Jueves\">Jueves</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Viernes\">Viernes</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Sábado\">Sábado</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Domingo\">Domingo</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t\t\t\t\t<label>Hora</label>\r\n\t\t\t\t\t\t\t\t<input type=\"email\" name=\"hour\" [(ngModel)]=\"preferences_modal.hour\" class=\"form-control form-control-line\" type=\"time\" value=\"12:00\" id=\"hour\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-info\" (click)=\"updateProfile()\">Editar</button>\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger waves-effect text-left\" data-dismiss=\"modal\">Cerrar</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n<!-- ================================================================================================== -->\r\n<!-- End modal edit preferences\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n<!-- ================================================================================================== -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// SERVICE

// ANGULARFIRE2

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(_dbService) {
        var _this = this;
        this._dbService = _dbService;
        this.profile_options = 'my_profile'; // Controla las opciones en Mi Perfil
        this.preferences_modal = {
            hour: '',
            day: '',
            subway_station: ''
        };
        var actual_user = JSON.parse(localStorage.getItem("user"));
        this._dbService.getDataQuery("users", "uid", "==", actual_user.uid)
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var key = a.payload.doc.id;
            return __assign({ key: key }, data);
        }); })).subscribe(function (data) {
            _this.profile = data[0];
            _this.preferences = _this.profile.preferences;
        });
        this._dbService.getDataQuery("books", "uid", "==", actual_user.uid)
            .valueChanges()
            .subscribe(function (data) { return _this.count_book = data.length; });
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.resetUser();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            subway_station: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            day: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            hour: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.uid = JSON.parse(localStorage.getItem('user')).uid;
    };
    // Actualiza los datos de perfil del usuario en la DB
    ProfileComponent.prototype.updateProfile = function () {
        this.profile.img = this.urlImgs;
        this._dbService.updateData("users", this.profile.key, this.profile)
            .then(function () {
            swal('Cambios guardados', 'Sus cambios han sidos guardados con éxito', 'success');
        })
            .catch(function () {
            swal('Error al editar', 'Por favor, vuelva a intentarlo', 'error');
        });
    };
    // TODO: Falta revisar si la nueva preferencia ya existe.
    // Agrega la nueva preferencia a la DB 
    ProfileComponent.prototype.addPreference = function () {
        if (this.form.invalid) {
            swal('Debe completar el formulario', 'Debe ingresar todos los campos de este formulario', 'warning');
            return;
        }
        var pref = this.form.value; // Asigna la nueva preferencia a la variable a actualizar
        if (this.profile.preferences === undefined) {
            this.profile.preferences = [pref];
        }
        else {
            this.profile.preferences.push(pref);
        }
        this._dbService.updateData("users", this.profile.key, this.profile)
            .then(function () {
            swal('Preferencia agregada', 'Su preferencia ha sido agregada con éxito', 'success');
        })
            .catch(function () {
            swal('Error al agregar su preferencia', 'Por favor, vuelva a intentarlo', 'error');
        });
    };
    // Invalida la cuenta del usuario, no la borra, solo le cambia el estado
    ProfileComponent.prototype.deleteAccount = function () {
        this.profile.status = false;
        this._dbService.updateData("users", this.profile.key, this.profile)
            .then(function () {
            swal('Cuenta eliminada', 'Su cuenta ha sido eliminada con éxito', 'success');
            // TODO: Hacer que esto funcione
            // swal({
            // 	title: "Está seguro que desea eliminar su cuenta?",
            // 	text: "Si luego desea volver a restaurar su cuenta, debe enviar un correo a JavieraOrmeno.L@gmail.com",
            // 	icon: "warning",
            // 	buttons: true,
            // 	dangerMode: true,
            //   })
            //   .then((willDelete) => {
            // 	if (willDelete) {
            // 	  swal("Su cuenta ha sido eliminada con éxito", {
            // 		icon: "success",
            // 	  });
            // 	} else {
            // 	  swal("Su cuenta sigue activa");
            // 	}
            //   });
        })
            .catch(function () {
            swal('Error al elminar su cuenta', 'Por favor, vuelva a intentarlo', 'error');
        });
    };
    // Elimina la preferencia seleccionada del usuario
    ProfileComponent.prototype.deletePreference = function (index) {
        this.profile.preferences.splice(index, 1);
        this._dbService.updateData("users", this.profile.key, this.profile)
            .then(function () {
            swal('Preferencia eliminada', 'La preferencia seleccionada ha sido eliminada con éxito', 'success');
        })
            .catch(function () {
            swal('Error al eliminar', 'Por favor, vuelva a intentarlo', 'error');
        });
    };
    // Carga las imagenes al storage de Firebase
    ProfileComponent.prototype.uploadFile = function (event) {
        var _this = this;
        var file = event.target.files;
        var url; // guarda las imagenes correctas para luego subirlas
        var aux = false; // para que no se cargen imagenes si existe aunque sea 1 mala
        var separatedFile = file[0].name.split('.');
        var extension = separatedFile[separatedFile.length - 1];
        var typeValid = ['jpg', 'jpeg', 'png'];
        // Valida las extensiones de las imagenes
        if (typeValid.indexOf(extension) <= -1) {
            swal('Error al ingresar imagen', 'Extensiones válidas (png, jpg, jpeg), vuelva a intentarlo', 'error');
            aux = true;
            return;
        }
        if (!aux) {
            var storageRef = firebase__WEBPACK_IMPORTED_MODULE_4__["storage"]().ref();
            var filePath = this.uid;
            var uploadTask_1 = storageRef.child("profile_img/" + filePath)
                .put(file[0]);
            uploadTask_1.on('state_changed', function () { }, // Manejo de carga
            function (error) {
                console.log('Error al cargar imagen', error);
                swal('Error al cargar imagenes', 'Por favor, vueva a intentarlo', 'error');
            }, function () {
                uploadTask_1.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                    url = downloadURL;
                    console.log("Imagenes cargadas");
                    swal('Éxito', 'Imagenes cargadas con exito', 'success');
                    _this.urlImgs = url;
                });
            });
        }
    };
    // Deja los campos de usuario en blanco
    ProfileComponent.prototype.resetUser = function () {
        this.profile = {
            uid: '',
            rut: '',
            name: '',
            last_name1: '',
            last_name2: '',
            email: [],
            phone: '',
            categories: [],
            commune: '',
            status: true,
            img: ''
        };
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/pages/profile/profile.component.html")
        }),
        __metadata("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/pages/search/search.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/search/search.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"typeInput[0] !== 'sidebar'; else Sidebar\">\r\n  <div class=\"card col-12 col-lg-4\">\r\n    <div class=\"card-body\">\r\n      <h4 class=\"card-title\">Libros</h4>\r\n      <ul class=\"list-unstyled\" *ngIf=\"books.length > 0; else noBooks;\">\r\n        <li class=\"media border p-1\" *ngFor=\"let book of books\">\r\n          <img class=\"d-flex mr-3\"\r\n               [src]=\"book.images[0]\"\r\n               width=\"60\">\r\n          <div class=\"media-body\">\r\n            <h5 class=\"mt-0 mb-2\"> {{ book.title }} </h5>\r\n            <h5 class=\"mt-0 mb-2\">{{ book.author }}</h5>\r\n            <h5 class=\"mt-0 mb-2\">{{ book.language }}</h5>\r\n            <h5 class=\"mt-0 mb-2\" *ngIf=\"book.transaction === 'Ambos'\"> Venta-Intercambio </h5>\r\n            <h5 class=\"mt-0 mb-2\" *ngIf=\"book.transaction !== 'Ambos'\"> {{ book.transaction }}</h5>\r\n            <h5 class=\"mt-0 mb-2 text-success\" *ngIf=\"book.transaction === 'Ambos'\"> ${{ book.price }} </h5>\r\n            <h5 class=\"mt-0 mb-2 text-success\" *ngIf=\"book.transaction === 'Venta'\"> ${{ book.price }} </h5>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n\r\n      <ng-template #noBooks>\r\n        <div class=\"alert alert-primary\" role=\"alert\">\r\n          No se encontraron coincidencias\r\n        </div>\r\n      </ng-template>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"card col-12 col-lg-4\">\r\n    <div class=\"card-body\">\r\n      <h4 class=\"card-title\">Autores</h4>\r\n      <ul class=\"list-unstyled\" *ngIf=\"authors.length > 0; else noAuth;\">\r\n        <li class=\"media media border p-1\" *ngFor=\"let auth of authors\">\r\n          <img class=\"d-flex mr-3\"\r\n               [src]=\"auth.images[0]\"\r\n               width=\"60\">\r\n          <div class=\"media-body\">\r\n            <h5 class=\"mt-0 mb-2\"> {{ auth.author }} </h5>\r\n            <h5 class=\"mt-0 mb-2\"> {{ auth.title }} </h5>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n\r\n      <ng-template #noAuth>\r\n        <div class=\"alert alert-primary\" role=\"alert\">\r\n            No se encontraron coincidencias\r\n        </div>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card col-12 col-lg-4\">\r\n    <div class=\"card-body\">\r\n      <h4 class=\"card-title\">Dueños</h4>\r\n      <ul class=\"list-unstyled\" *ngIf=\"owners.length > 0; else noOwner\">\r\n        <li class=\"media media border p-1\" *ngFor=\"let cat of sidebar\">\r\n          <img class=\"d-flex mr-3\"\r\n               [src]=\"cat.img\"\r\n               width=\"60\">\r\n        <div class=\"media-body\">\r\n            <h5 class=\"mt-0 mb-2\">{{ cat.name }}</h5>\r\n            <h5 class=\"mt-0 mb-2\"> {{ cat.last_name1 }} {{ cat.last_name2 }} </h5>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n\r\n      <ng-template #noOwner>\r\n        <div class=\"alert alert-primary\" role=\"alert\">\r\n          No se encontraron coincidencias\r\n        </div>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<ng-template #Sidebar>\r\n  <div class=\"card col-12\">\r\n    <div class=\"card-body\">\r\n      <h4 class=\"card-title\">Búsqueda por categoría: {{ typeInput[1] }}</h4>\r\n      <ul class=\"list-unstyled\" *ngIf=\"sidebar.length > 0; else noSidebar\">\r\n        <li class=\"media media border p-1\" *ngFor=\"let cat of sidebar\">\r\n          <img class=\"d-flex mr-3\"\r\n              [src]=\"cat.images[0]\"\r\n              width=\"60\">\r\n          <div class=\"media-body\">\r\n            <h5 class=\"mt-0 mb-2\"> {{ cat.title }} </h5>\r\n            <h5 class=\"mt-0 mb-2\">{{ cat.author }}</h5>\r\n            <h5 class=\"mt-0 mb-2\">{{ cat.language }}</h5>\r\n            <h5 class=\"mt-0 mb-2\" *ngIf=\"cat.transaction === 'Ambos'\"> Venta-Intercambio </h5>\r\n            <h5 class=\"mt-0 mb-2\" *ngIf=\"cat.transaction !== 'Ambos'\"> {{ cat.transaction }}</h5>\r\n            <h5 class=\"mt-0 mb-2 text-success\" *ngIf=\"cat.transaction === 'Ambos'\"> ${{ cat.price }} </h5>\r\n            <h5 class=\"mt-0 mb-2 text-success\" *ngIf=\"cat.transaction === 'Venta'\"> ${{ cat.price }} </h5>\r\n            <hr>\r\n            <h5 class=\"mt-0 mb-2\"> Otras categorías a las que pertenece </h5>\r\n            <h6 class=\"mt-0 mb-2\" *ngFor=\"let genres of cat.genres\"> {{ genres }} </h6>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n\r\n      <ng-template #noSidebar>\r\n        <div class=\"alert alert-primary\" role=\"alert\">\r\n          no se encontraron coincidencias\r\n        </div>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/search/search.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/search/search.component.ts ***!
  \**************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// SERVICES 

var SearchComponent = /** @class */ (function () {
    function SearchComponent(activatedRoute, _dbService) {
        this.activatedRoute = activatedRoute;
        this._dbService = _dbService;
        this.books = [];
        this.authors = [];
        this.owners = [];
        this.sidebar = [];
        this.typeInput = [];
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            var input = params['input'];
            _this.typeInput = input.split('.');
            console.log(input);
            _this._dbService.getData('books')
                .valueChanges()
                .subscribe(function (resp) {
                if (_this.typeInput[0] === 'sidebar') {
                    _this.sidebar = _this.searchSidebar(resp, _this.typeInput[1]);
                }
                else {
                    _this.books = _this.searchBook(resp, input);
                    _this.authors = _this.searchAuthor(resp, input);
                }
            });
            _this._dbService.getData('users')
                .valueChanges()
                .subscribe(function (users) { return _this.owners = _this.searchOwner(users, input); });
        });
    };
    SearchComponent.prototype.searchBook = function (books, search) {
        var searchBook = [];
        for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
            var book = books_1[_i];
            var title = book.title.toLowerCase();
            if (title.indexOf(search.toLowerCase()) >= 0) {
                searchBook.push(book);
            }
        }
        return searchBook;
    };
    SearchComponent.prototype.searchAuthor = function (books, search) {
        var searchAuthor = [];
        for (var _i = 0, books_2 = books; _i < books_2.length; _i++) {
            var book = books_2[_i];
            var author = book.author.toLowerCase();
            if (author.indexOf(search.toLowerCase()) >= 0) {
                searchAuthor.push(book);
            }
        }
        return searchAuthor;
    };
    SearchComponent.prototype.searchOwner = function (users, search) {
        var owners = [];
        for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
            var user = users_1[_i];
            var owner = user.name;
            if (owner.indexOf(search.toLowerCase()) >= 0) {
                owners.push(user);
            }
        }
        return owners;
    };
    SearchComponent.prototype.searchSidebar = function (books, input) {
        var searchCategories = [];
        for (var _i = 0, books_3 = books; _i < books_3.length; _i++) {
            var book = books_3[_i];
            var categories = book.genres;
            var flag = false; // con esto valido que se agregue solo 1 vez el mismo libro
            for (var _a = 0, categories_1 = categories; _a < categories_1.length; _a++) {
                var category = categories_1[_a];
                var cat = category.toLowerCase();
                if (cat.indexOf(input.toLowerCase()) >= 0 && !flag) {
                    flag = true;
                    searchCategories.push(book);
                }
            }
        }
        console.log(searchCategories);
        return searchCategories;
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/pages/search/search.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/pipes/thousands.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/thousands.pipe.ts ***!
  \*****************************************/
/*! exports provided: ThousandsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThousandsPipe", function() { return ThousandsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ThousandsPipe = /** @class */ (function () {
    function ThousandsPipe() {
    }
    ThousandsPipe.prototype.transform = function (value) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        ;
    };
    ThousandsPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'thousands'
        })
    ], ThousandsPipe);
    return ThousandsPipe;
}());



/***/ }),

/***/ "./src/app/register/login.component.html":
/*!***********************************************!*\
  !*** ./src/app/register/login.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"wrapper\">\r\n\t<div class=\"login-register\" style=\"background-image:url(../../assets/images/background/book-2.jpg);\">\r\n\t\t<div class=\"login-box card\">\r\n\t\t  <div class=\"card-body\">\r\n\r\n\t\t  \t<!-- ============================================================================== -->\r\n\t\t\t<!-- Login\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n\t\t\t<!-- ============================================================================== -->\r\n\t\t\t<form class=\"form-horizontal form-material\" \r\n\t\t\t\t[formGroup]=\"form\" \r\n\t\t\t\t(ngSubmit)=\"loginUser()\" \r\n\t\t\t\tnovalidate=\"novalidate\" \r\n\t\t\t\taction=\"index.html\">    \r\n\r\n\t\t\t\t<h3 class=\"box-title m-b-20\">Sign In</h3>\r\n\t\t\t\t\t<div class=\"form-group \">\r\n\t\t\t\t\t\t<div class=\"col-xs-12\">\r\n\t\t\t\t\t\t\t<input  formControlName=\"email\"\r\n\t\t\t\t\t\t\t\t\tclass=\"form-control\" \r\n\t\t\t\t\t\t\t\t\ttype=\"text\" \r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Correo electrónico\"> \r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t  \r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<div class=\"col-xs-12\">\r\n\t\t\t\t\t\t\t  <input \tformControlName=\"password\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" \r\n\t\t\t\t\t\t\t\t\t\ttype=\"password\" \r\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"Password\"> \r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t  \r\n\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t<div class=\"checkbox checkbox-info pull-left p-t-0\">\r\n\t\t\t\t\t\t\t\t<input \tformControlName=\"rememberMe\"\r\n\t\t\t\t\t\t\t\t\t\tid=\"checkbox-signup\" \r\n\t\t\t\t\t\t\t\t\t\ttype=\"checkbox\" \r\n\t\t\t\t\t\t\t\t\t\tclass=\"filled-in chk-col-light-blue\">\r\n\t\t\t\t\t\t\t\t<label for=\"checkbox-signup\"> Recuérdame </label>\r\n\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" id=\"to-recover\" class=\"text-dark pull-right\" (click)=\"forgotPassword()\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-lock m-r-5\"></i> Olvidó su contraseña? \r\n\t\t\t\t\t\t\t</a> \r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"form-group text-center\">\r\n\t\t\t\t\t\t<div class=\"col-xs-12 p-b-20\">\r\n\t\t\t\t\t\t\t<button class=\"btn btn-block btn-lg btn-info btn-rounded\" type=\"submit\">Ingresar</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<!-- Login with Google button -->\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-12 m-t-10 text-center\">\r\n\t\t\t\t\t\t\t<div class=\"social\">\r\n\t\t\t\t\t\t\t\t<button (click)=\"loginGoogle()\" \r\n\t\t\t\t\t\t\t\t\t\ttype=\"button\" \r\n\t\t\t\t\t\t\t\t\t\tid=\"btnGoogle\" \r\n\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-googleplus\" \r\n\t\t\t\t\t\t\t\t\t\tdata-toggle=\"tooltip\" \r\n\t\t\t\t\t\t\t\t\t\ttitle=\"Iniciar sesión con Google\"> \r\n\t\t\t\t\t\t\t\t\t<i aria-hidden=\"true\" class=\"fa fa-google-plus\"></i> \r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t  \r\n\t\t\t\t\t<!-- Register me -->\r\n\t\t\t\t\t<div class=\"form-group m-b-0\">\r\n\t\t\t\t\t\t<div class=\"col-sm-12 text-center\">No tienes una cuenta?\r\n\t\t\t\t\t\t\t<a [routerLink]=\"['/register']\" class=\"text-info m-l-5\">\r\n\t\t\t\t\t\t\t\t<b>Registrarme</b>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t\t<!-- ============================================================================== -->\r\n\t\t\t\t<!-- End Login\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n\t\t\t\t<!-- ============================================================================== -->\r\n\t\t\t\t\t\r\n\t\t\t\t  \r\n\t\t\t\t<!-- ============================================================================== -->\r\n\t\t\t\t<!-- Recovery password\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n\t\t\t\t<!-- ============================================================================== -->\r\n\t\t\t\t<form class=\"form-horizontal\" id=\"recoverform\" action=\"index.html\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<div class=\"col-xs-12\">\r\n\t\t\t\t\t\t\t<h3>Recuperar contraseña</h3>\r\n\t\t\t\t\t\t\t<p class=\"text-muted\">Ingresa tu correo electrónico y te enviaremos las instrucciones</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t  \r\n\t\t\t\t\t<div class=\"form-group \">\r\n\t\t\t\t\t\t<div class=\"col-xs-12\">\r\n\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" required=\"\" placeholder=\"Email\"> </div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group text-center m-t-20\">\r\n\t\t\t\t\t\t<div class=\"col-xs-12\">\r\n\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light\" type=\"submit\">Reset</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t\t<!-- ============================================================================== -->\r\n\t\t\t\t<!-- End recovery password\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n\t\t\t\t<!-- ============================================================================== -->\r\n\t\t\t\t\t\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</section>"

/***/ }),

/***/ "./src/app/register/login.component.ts":
/*!*********************************************!*\
  !*** ./src/app/register/login.component.ts ***!
  \*********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// SERVICES

// ANGULARFIRE2


// PLUGINS


var LoginComponent = /** @class */ (function () {
    function LoginComponent(afAuth, router, _db) {
        var _this = this;
        this.afAuth = afAuth;
        this.router = router;
        this._db = _db;
        this.user = {};
        this.afAuth.authState.subscribe(function (user) {
            console.log('Estado del usuario', user);
            if (!user) {
                return;
            }
            _this.user.name = user.displayName;
            _this.user.uid = user.uid;
            _this.user.email = user.email;
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](localStorage.getItem('email') || undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]),
            rememberMe: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](JSON.parse(localStorage.getItem('session')).rememberMe)
        });
    };
    LoginComponent.prototype.loginGoogle = function () {
        this.afAuth.auth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_5__["auth"].GoogleAuthProvider())
            .then(function (data) {
            console.log(data);
        })
            .catch(function (e) { return console.log('error', e); });
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        if (this.form.valid) {
            this.afAuth.auth.signInWithEmailAndPassword(this.form.value['email'], this.form.value['password'])
                .then(function (resp) {
                var USER = resp.user;
                _this._db.getDataQuery('users', 'uid', '==', USER.uid)
                    .valueChanges()
                    .subscribe(function (resp) {
                    if (!resp[0].status) {
                        _this.afAuth.auth.signOut();
                        sweetalert__WEBPACK_IMPORTED_MODULE_6___default()('Su cuenta no se encuentra activa', 'Si desea activar su cuenta comunicarse con la administradora al siguiente email: JavieraOrmeno.L@gmail.com', 'warning');
                    }
                    else {
                        var userStorage = {
                            uid: USER.uid,
                            email: USER.email,
                            name: resp[0].name,
                            last_name1: resp[0].last_name1,
                            last_name2: resp[0].last_name2,
                            role: resp[0].role,
                            img: resp[0].img
                        };
                        if (_this.form.value['rememberMe']) {
                            localStorage.setItem('email', USER.email);
                        }
                        else {
                            localStorage.removeItem('email');
                        }
                        localStorage.setItem('user', JSON.stringify(userStorage));
                        localStorage.setItem('session', JSON.stringify({
                            rememberMe: _this.form.value['rememberMe'],
                            session: true
                        }));
                        // Redirige a dashboard o home según el rol del usuario
                        if (userStorage.role == 'admin') {
                            _this.router.navigate(['/admin']);
                        }
                        else if (userStorage.role == 'normal') {
                            _this.router.navigate(['/home']);
                        }
                    }
                });
            })
                .catch(function () { return console.log('error'); });
        }
    };
    // Envía un correo desde Firebase para restaurar la contraseña
    LoginComponent.prototype.forgotPassword = function () {
        var auth = firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]();
        auth.sendPasswordResetEmail(this.form.value['email'])
            .then(function () {
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()('Correo enviado', 'Se ha enviado un correo para restaurar la contraseña', 'success');
        })
            .catch(function () {
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()('Error al enviar correo', 'Por favor, vuelva a intentarlo', 'error');
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/register/login.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\nTemplate Name: Admin pro Admin\r\nAuthor: Wrappixel\r\nEmail: niravjoshi87@gmail.com\r\nFile: scss\r\n*/\r\n/*\r\nTemplate Name: Admin Pro Admin\r\nAuthor: Wrappixel\r\nEmail: niravjoshi87@gmail.com\r\nFile: scss\r\n*/\r\n/*Theme Colors*/\r\n/*bootstrap Color*/\r\n/*Light colors*/\r\n/*Normal Color*/\r\n/*Extra Variable*/\r\n/*******************\r\nLogin register and recover password Page\r\n******************/\r\n.login-register {\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 10% 0;\r\n  position: fixed; }\r\n.login-box {\r\n  width: 400px;\r\n  margin: 0 auto; }\r\n.login-box .footer {\r\n    width: 100%;\r\n    left: 0px;\r\n    right: 0px; }\r\n.login-box .social {\r\n    display: block;\r\n    margin-bottom: 30px; }\r\n#recoverform {\r\n  display: none; }\r\n.login-sidebar {\r\n  padding: 0px;\r\n  margin-top: 0px; }\r\n.login-sidebar .login-box {\r\n    right: 0px;\r\n    position: absolute;\r\n    height: 100%; }\r\n.contenedor {\r\n  max-width: 220px !important;\r\n  min-width: 220px !important;\r\n}\r\n.ms-container {\r\n  width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"wrapper\">\r\n\t<div class=\"login-register\" [ngStyle]=\"{'background-image':getBackground(register_pages)}\" >\r\n\t\t<div class=\"login-box card\">\r\n\t\t\t<div class=\"card-body\" >\r\n\t\t\t\t<form class=\"form-horizontal form-material\" novalidate=\"novalidate\" action=\"index.html\"\r\n\t\t\t\t\t\t[formGroup]=\"form\" (ngSubmit)=\"saveUser()\" >\r\n\r\n\t\t\t\t\t<div [ngSwitch]=\"register_pages\">\r\n\t\t\t\t\t\t<!-- ================================================================== -->\r\n\t\t\t\t\t\t<!-- PAGE 1\t\t\t\t\t\t\t\t\t\t\t\t\t                      \t\t\t\t\t\t\t-->\r\n\t\t\t\t\t\t<!-- ================================================================== -->\r\n\t\t\t\t\t\t<div *ngSwitchCase=\"'page_1'\">\r\n\t\t\t\t\t\t\t<h3 class=\"box-title m-t-40 m-b-0\">Datos de perfil</h3>\r\n\t\t\t\t\t\t\t<small>Crea tu cuenta para ingresar</small>\r\n\r\n\t\t\t\t\t\t\t<div class=\"form-group m-t-20\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-xs-12\">\r\n\t\t\t\t\t\t\t\t\t<input formControlName=\"name\" class=\"form-control\" type=\"text\" placeholder=\"Nombre\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"form.controls['name'].errors?.required\"><p class=\"text-danger\">El nombre es requerido</p></div>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"form.controls['name'].errors?.pattern\"><p class=\"text-danger\">El nombre ingresado no es válido</p></div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"form-group m-t-10 row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t<input formControlName=\"last_name1\" class=\"form-control\" type=\"text\" placeholder=\"Apellido paterno\">\r\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"form.controls['last_name1'].errors?.required\"><p class=\"text-danger\">El apellido es requerido</p></div>\r\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"form.controls['last_name1'].errors?.pattern\"><p class=\"text-danger\">El apellido ingresado no es válido</p></div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t<input formControlName=\"last_name2\" class=\"form-control\" type=\"text\" placeholder=\"Apellido materno\">\r\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"form.controls['last_name1'].errors?.required\"><p class=\"text-danger\">El apellido es requerido</p></div>\r\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"form.controls['last_name1'].errors?.pattern\"><p class=\"text-danger\">El apellido ingresado no es válido</p></div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"form-group m-t-20\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-xs-12\">\r\n\t\t\t\t\t\t\t\t\t<input formControlName=\"rut\" class=\"form-control\"\ttype=\"text\" placeholder=\"RUT\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"form.controls['rut'].errors?.required\"><p class=\"text-danger\">El RUT es requerido</p></div>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"form.controls['rut'].errors?.pattern\"><p class=\"text-danger\">El RUT ingresado no es válido</p></div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"form-group m-t-20\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-xs-12\">\r\n\t\t\t\t\t\t\t\t\t<input formControlName=\"phone\" class=\"form-control\" type=\"text\" placeholder=\"Teléfono opcional\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"form.controls['phone'].errors?.required\"><p class=\"text-danger\">El teléfono es requerido</p></div>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"form.controls['phone'].errors?.pattern\"><p class=\"text-danger\">El teléfono ingresado no es válido</p></div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"form-group text-center m-t-20\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-xs-12\">\r\n\t\t\t\t\t\t\t\t\t<button (click)=\"register_pages='page_2'\" class=\"btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light\">Continuar\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"form-group m-b-0\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 \">\r\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-circle btn-info\" style=\"margin-right: 80px;\" [routerLink]=\"['/login']\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-arrow-left\"></i>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t<p class=\"text-center\" style=\"display: contents;\">Ya tienes una cuenta?\r\n\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/login']\" class=\"text-info m-l-5\">\r\n\t\t\t\t\t\t\t\t\t\t\t<b>Ingresar</b>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<!-- ================================================================================== -->\r\n\t\t\t\t\t\t<!-- PAGE 2\t\t\t\t\t\t\t\t\t\t\t\t\t                                      \t\t\t\t\t\t\t-->\r\n\t\t\t\t\t\t<!-- ================================================================================== -->\r\n\t\t\t\t\t\t<div *ngSwitchCase=\"'page_2'\">\r\n\r\n\t\t\t\t\t\t\t<h3 class=\"box-title m-t-40 m-b-0\">Categorías de interés</h3>\r\n\t\t\t\t\t\t\t<div class=\"ms-container\" id=\"ms-pre-selected-options\">\r\n\t\t\t\t\t\t\t\t<div class=\"ms-selectable\">\r\n\t\t\t\t\t\t\t\t\t<select class=\"ms-list contenedor\" multiple='multiple' formControlName=\"categories\">\r\n\t\t\t\t\t\t\t\t\t\t<option [value]='c' class=\"ms-elem-selectable\" \r\n\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let c of categories; let i = index;\"\r\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"addCategory(i)\"> {{ c }} </option>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"ms-selection\">\r\n\t\t\t\t\t\t\t\t\t<select class=\"ms-list contenedor\" multiple='multiple' formControlName=\"categories\">\r\n\t\t\t\t\t\t\t\t\t\t<option [value]='sc' class=\"ms-elem-selection\" \r\n\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let sc of selected_categories; let i = index;\"\r\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"removeCategory(i)\"> {{ sc }} </option>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"form-group text-center m-t-20\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-xs-12\">\r\n\t\t\t\t\t\t\t\t\t<button (click)=\"register_pages='page_3'\" class=\"btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light\">Continuar</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"form-group m-b-0\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 \">\r\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-circle btn-info\" style=\"margin-right: 80px;\" (click)=\"register_pages='page_1'\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-arrow-left\"></i>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t<p class=\"text-center\" style=\"display: contents;\">Ya tienes una cuenta?\r\n\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/login']\" class=\"text-info m-l-5\">\r\n\t\t\t\t\t\t\t\t\t\t\t<b>Ingresar</b>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<!-- ================================================================================== -->\r\n\t\t\t\t\t\t<!-- PAGE 3\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n\t\t\t\t\t\t<!-- ================================================================================== -->\r\n\t\t\t\t\t\t<div *ngSwitchCase=\"'page_3'\">\r\n\r\n\t\t\t\t\t\t\t<h3 class=\"box-title m-t-40 m-b-0\">Datos de la cuenta</h3>\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-xs-12\">\r\n\t\t\t\t\t\t\t\t\t<input formControlName=\"email\" class=\"form-control\" type=\"text\" placeholder=\"Correo electrónico\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"form.controls['email'].errors?.required\"><p class=\"text-danger\">El email es requerido</p></div>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"form.controls['email'].errors?.email\"><p class=\"text-danger\">El email ingresado no es válido</p></div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"form-group \">\r\n\t\t\t\t\t\t\t\t<div class=\"col-xs-12\">\r\n\t\t\t\t\t\t\t\t\t<input formControlName=\"password\" class=\"form-control\" type=\"password\" placeholder=\"Contraseña\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12\">\r\n\t\t\t\t\t\t\t\t\t<input formControlName=\"password2\" class=\"form-control\" type=\"password\" placeholder=\"Confirme su contraseña\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"form-group\" *ngIf=\"form['errors']?.areEquals && !form.pristine\">\r\n\t\t\t\t\t\t\t\t<p class=\"text-danger\">\tLas contraseñas deben ser iguales </p>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t \t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"checkbox checkbox-primary p-t-0\">\r\n\t\t\t\t\t\t\t\t\t \t<input \tformControlName=\"conditions\" id=\"checkbox-signup\" type=\"checkbox\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"checkbox-signup\"> Acepto los\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Términos y condiciones</a>\r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"form-group text-center m-t-20\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-xs-12\">\r\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light\" type=\"submit\">Registrarme</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"form-group m-b-0\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 \">\r\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-circle btn-info\" style=\"margin-right: 80px;\" (click)=\"register_pages='page_2'\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-arrow-left\"></i>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t<p class=\"text-center\" style=\"display: contents;\">Ya tienes una cuenta?\r\n\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/login']\" class=\"text-info m-l-5\">\r\n\t\t\t\t\t\t\t\t\t\t\t<b>Ingresar</b>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</section>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/date.service */ "./src/app/services/date.service.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// SERVICES



// Sweet Alert

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_dbService, _dateService, afAuth, router) {
        this._dbService = _dbService;
        this._dateService = _dateService;
        this.afAuth = afAuth;
        this.router = router;
        this.register_pages = "page_1"; //Muestra la primera página del registro por defecto
        this.categories = ["Antiguedades y Coleccionables", "Arquitectura", "Arte", "Artes Escénicas", "Biografía y Autobiografía", "Casa y Hogar", "Ciencia", "Ciencias Políticas", "Ciencias Sociales", "Cocina", "Comida y Bebestibles", "Colecciones Literarias", "Cómics y Novelas Gráficas", "Computación e Internet", "Crímenes", "Crítica Literaria", "Cuerpo", "Mente y Espíritu", "Deportes y Recreación", "Drama", "Educación", "Estudio de Lenguas Extranjeras", "Ensayos Académicos", "Familia y Relaciones", "Ficción", "Ficción Adolescente", "Ficción para Niños", "Filosofía", "Fotografía", "Historia y Geografía", "Humor", "Jardinería", "Juegos", "Lectura escolar", "Lengua y Literatura", "Leyes", "Manualidades y Hobbies", "Mascotas y Animales", "Matemáticas", "Medicina", "Música", "Naturaleza y Aire libre", "Negocios y Economía", "Niños y Jóvenes", "Papelería", "Poesía", "Psicología", "Religión y Espiritualidad", "Salud y Bienestar", "Tecnología", "Transporte", "Viajes"];
        this.selected_categories = [];
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^([A-Za-z ,.'ñáéíóú]{2,20})$"), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]),
            last_name1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^([A-Za-z ,.'ñáéíóú]{2,20})$"), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]),
            last_name2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^([A-Za-z ,.'ñáéíóú]{2,20})$"), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]),
            rut: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[.0-9]{6,11}\-?[kK0-9]{1}$')]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]{8}$'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(8)]),
            // TODO: Validar los géneros 
            categories: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            conditions: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        }, { validators: this.areEquals('password', 'password2') });
    };
    // Verifica que ambas contraseñas ingresadas sean iguales
    RegisterComponent.prototype.areEquals = function (input1, input2) {
        return function (group) {
            var pass1 = group.controls[input1].value;
            var pass2 = group.controls[input2].value;
            if (pass1 === pass2) {
                return null;
            }
            return {
                areEquals: true
            };
        };
    };
    // Guarda un usuario nuevo, en DB
    RegisterComponent.prototype.saveUser = function () {
        var _this = this;
        if (this.form.valid) {
            var form_1 = this.form.value;
            this.afAuth.auth.createUserWithEmailAndPassword(form_1.email, form_1.password)
                .then(function (resp) {
                // Guarda el form para validarlo
                var USER = {
                    uid: resp.user.uid,
                    rut: form_1.rut,
                    name: form_1.name.toLowerCase(),
                    last_name1: form_1.last_name1.toLowerCase(),
                    last_name2: form_1.last_name2.toLowerCase(),
                    email: form_1.email.toLowerCase(),
                    categories: _this.selected_categories,
                    phone: form_1.phone,
                    google: false,
                    status: true,
                    role: 'normal',
                    created_date: _this._dateService.actual_date()
                };
                if (!_this.form.value.conditions) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Importante", "Debe aceptar los términos y condiciones", "warning");
                    return;
                }
                // Guarda al usuario en DB
                _this._dbService.addDataIdCustom('users', USER.uid, USER)
                    .then(function () {
                    console.log("Se guardó el usuario");
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()('Cuenta creada con éxito', USER.email, 'success');
                    _this.afAuth.auth.signOut();
                    _this.router.navigate(['/login']);
                })
                    .catch(function (err) {
                    console.log("Error al guardar al usuario", err);
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Error", "No se ha podido guardar el nuevo usuario", "warning");
                });
            })
                .catch(function (err) { return console.error('ERROR: Crear usuario en firebase', err); });
        }
        else {
            console.log("No funcionó");
        }
    };
    // Agrega una categoría al cuadro de categorías favoritas del usuario
    RegisterComponent.prototype.addCategory = function (index) {
        this.selected_categories.push(this.categories[index]);
        this.categories.splice(index, 1);
        // TODO: Ordenar por index
    };
    // Remueve una categoría del cuadro de categorías favoritas del usuario
    RegisterComponent.prototype.removeCategory = function (index) {
        this.categories.push(this.selected_categories[index]);
        this.selected_categories.splice(index, 1);
    };
    // Cambia el fondo del register dependiendo de en qué etapa se encuentre
    RegisterComponent.prototype.getBackground = function (page) {
        switch (page) {
            case 'page_1':
                return 'url(../../assets/images/background/book-5.jpg)';
            case 'page_2':
                return 'url(../../assets/images/background/book-3.jpg)';
            case 'page_3':
                return 'url(../../assets/images/background/book-1.jpg)';
        }
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"],
            _services_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/database.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/database.service.ts ***!
  \**********************************************/
/*! exports provided: DatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseService", function() { return DatabaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Angularfire2

var DatabaseService = /** @class */ (function () {
    function DatabaseService(afs) {
        this.afs = afs;
        this.books = [];
    }
    // Retorna Observable
    // Trae toda la data de una colección específica.
    DatabaseService.prototype.getData = function (collection) {
        return this.afs.collection(collection);
    };
    // Retorna Observable
    // Trae la data que se especifica en la query, de una colección específica.
    DatabaseService.prototype.getDataQuery = function (collection, query, operator, value) {
        return this.afs.collection(collection, function (ref) { return ref.where(query, operator, value); });
    };
    // Retorna Promesa
    // Agrega data con identificador específico.
    DatabaseService.prototype.addDataIdCustom = function (collection, id, document) {
        return this.afs.collection(collection).doc(id).set(document);
    };
    // Retorna Promesa
    // Agrega data sin identificador específico
    DatabaseService.prototype.addData = function (collection, document) {
        return this.afs.collection(collection).add(document);
    };
    // Retorna Promesa
    // Actualiza la data según el id y el documento a modificar
    DatabaseService.prototype.updateData = function (collection, id, document) {
        return this.afs.collection(collection).doc(id).update(document);
    };
    // Retorna Promesa
    // Borra la data según el id especificado
    DatabaseService.prototype.deleteData = function (collection, id) {
        return this.afs.collection(collection).doc(id).delete();
    };
    DatabaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], DatabaseService);
    return DatabaseService;
}());



/***/ }),

/***/ "./src/app/services/date.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/date.service.ts ***!
  \******************************************/
/*! exports provided: DateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateService", function() { return DateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DateService = /** @class */ (function () {
    function DateService() {
    }
    // FIXME: Limpiar esto
    // Extrae y retorna la fecha actual con un formato correcto
    DateService.prototype.actual_date = function () {
        var date = new Date();
        var dd, mm, hh, m;
        var day = date.getDate();
        var month = (date.getMonth().valueOf() + 1);
        var year = date.getFullYear();
        var hour = date.getHours();
        var min = date.getMinutes();
        if (day < 10) {
            dd = '0' + day;
        }
        else {
            dd = day;
        }
        if (month < 10) {
            mm = '0' + month;
        }
        else {
            mm = month;
        }
        if (hour < 10) {
            hh = '0' + hour;
        }
        else {
            hh = hour;
        }
        if (min < 10) {
            m = '0' + min;
        }
        else {
            m = min;
        }
        return dd + "-" + mm + "-" + year + " " + hh + ":" + m;
    };
    // Extrae y retorna el día actual
    DateService.prototype.actual_day = function () {
        var date = new Date();
        var dd, mm;
        var day = date.getDate();
        var month = (date.getMonth().valueOf() + 1);
        var year = date.getFullYear();
        if (day < 10) {
            dd = '0' + day;
        }
        else {
            dd = day;
        }
        if (month < 10) {
            mm = '0' + month;
        }
        else {
            mm = month;
        }
        return dd + "-" + mm + "-" + year;
    };
    // Extrae y retorna la hora actual
    DateService.prototype.actual_hour = function () {
        var date = new Date();
        var hh, m;
        var hour = date.getHours();
        var min = date.getMinutes();
        if (hour < 10) {
            hh = '0' + hour;
        }
        else {
            hh = hour;
        }
        if (min < 10) {
            m = '0' + min;
        }
        else {
            m = min;
        }
        return hh + ":" + m;
    };
    DateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DateService);
    return DateService;
}());



/***/ }),

/***/ "./src/app/services/guards/admin.guard.ts":
/*!************************************************!*\
  !*** ./src/app/services/guards/admin.guard.ts ***!
  \************************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminGuard = /** @class */ (function () {
    function AdminGuard(router) {
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function () {
        var admin = JSON.parse(localStorage.getItem('user')).role;
        if (admin === 'admin') {
            return true;
        }
        else {
            // TODO: Mostrar un 403
            console.error('Bloqueado por el AdminGuard');
            this.router.navigate(['/']);
            return false;
        }
    };
    AdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/services/guards/login-guard.guard.ts":
/*!******************************************************!*\
  !*** ./src/app/services/guards/login-guard.guard.ts ***!
  \******************************************************/
/*! exports provided: LoginGuardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuardGuard", function() { return LoginGuardGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginGuardGuard = /** @class */ (function () {
    function LoginGuardGuard(router) {
        this.router = router;
    }
    LoginGuardGuard.prototype.canActivate = function () {
        var session = JSON.parse(localStorage.getItem('session')).session;
        if (session) {
            return true;
        }
        else {
            console.error('Bloqueado por el Guard');
            this.router.navigate(['/login']);
            return false;
        }
    };
    LoginGuardGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginGuardGuard);
    return LoginGuardGuard;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"topbar\">\r\n\t<nav class=\"navbar top-navbar navbar-expand-md navbar-light\">\r\n\t\t<!-- ============================================================== -->\r\n\t\t<!-- Logo \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n\t\t<!-- ============================================================== -->\r\n\t\t<div class=\"navbar-header\">\r\n\t\t\t<a class=\"navbar-brand\" [routerLink]=\"['/home']\">\r\n\t\t\t\t<b>\r\n\t\t\t\t\t<!-- Logo icon -->\r\n\t\t\t\t\t<img src=\"assets/images/logo-icon.png\" style=\"max-width: 60px; max-height: 60px\" alt=\"homepage\" class=\"dark-logo\" />\r\n\t\t\t\t</b>\r\n\t\t\t\t<span>\r\n\t\t\t\t\t<!-- Logo text -->\r\n\t\t\t\t\t<img src=\"assets/images/logo-text.png\" alt=\"homepage\" class=\"dark-logo\" />\r\n\t\t\t\t</span>\r\n\t\t\t</a>\r\n\t\t</div>\r\n\t\t<!-- ============================================================== -->\r\n\t\t<!-- End Logo \t\t\t\t\t\t\t\t\t                           \t\t\t\t\t-->\r\n\t\t<!-- ============================================================== -->\r\n\t\t<div class=\"navbar-collapse\">\r\n\t\t\t<!-- ============================================================== -->\r\n\t\t\t<!-- Toggle and nav items \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n\t\t\t<!-- ============================================================== -->\r\n\t\t\t<ul class=\"navbar-nav mr-auto\">\r\n\t\t\t\t<!-- This is  -->\r\n\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t\t<a class=\"nav-link nav-toggler hidden-md-up waves-effect waves-dark\" href=\"javascript:void(0)\">\r\n\t\t\t\t\t\t<i class=\"ti-menu\"></i>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t\t<a class=\"nav-link sidebartoggler hidden-sm-down waves-effect waves-dark\" href=\"javascript:void(0)\">\r\n\t\t\t\t\t\t<i class=\"ti-menu\"></i>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"nav-item\"></li>\r\n\t\t\t</ul>\r\n\t\t\t<!-- ============================================================== -->\r\n\t\t\t<!-- User profile, notifications, add book and search \t\t\t\t\t\t\t-->\r\n\t\t\t<!-- ============================================================== -->\r\n\t\t\t<ul class=\"navbar-nav my-lg-0\">\r\n\t\t\t\t<!-- ============================================================== -->\r\n\t\t\t\t<!-- Search \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n\t\t\t\t<!-- ============================================================== -->\r\n\t\t\t\t<li class=\"nav-item search-box\">\r\n\t\t\t\t\t<a class=\"nav-link waves-effect waves-dark\" href=\"javascript:void(0)\">\r\n\t\t\t\t\t\t<i class=\"ti-search\"></i>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<div class=\"app-search\">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Buscar...\" (keyup.enter)=\"searchBook(Search.value)\" #Search>\r\n\t\t\t\t\t\t<a class=\"srh-btn\" >\r\n\t\t\t\t\t\t\t<i class=\"ti-close\"></i>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\t\t\t\t<!-- ============================================================== -->\r\n\t\t\t\t<!-- End search \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n\t\t\t\t<!-- ============================================================== -->\r\n\r\n\t\t\t\t<!-- ============================================================== -->\r\n\t\t\t\t<!-- Notifications \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n\t\t\t\t<!-- ============================================================== -->\r\n\t\t\t\t<li class=\"nav-item dropdown\">\r\n\t\t\t\t\t\t<a class=\"nav-link dropdown-toggle waves-effect waves-dark\" href=\"\" data-toggle=\"dropdown\" \r\n\t\t\t\t\t\t\t\taria-haspopup=\"true\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t<i class=\"mdi mdi-message\"></i>\r\n\t\t\t\t\t\t<div class=\"notify\">\r\n\t\t\t\t\t\t\t<span class=\"point\"></span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<div class=\"dropdown-menu dropdown-menu-right mailbox animated bounceInDown\">\r\n\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"drop-title\">Notifications</div>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<div class=\"message-center ps ps--theme_default\" data-ps-id=\"25e64876-6300-b616-4d99-8cc55be034ec\">\r\n\t\t\t\t\t\t\t\t\t<!-- Message -->\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn btn-danger btn-circle\"><i class=\"fa fa-link\"></i></div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"mail-contnet\">\r\n\t\t\t\t\t\t\t\t\t\t<h5>Luanch Admin</h5>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"mail-desc\">Just see the my new admin!</span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"time\">9:30 AM</span> </div>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t<!-- Message -->\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn btn-success btn-circle\"><i class=\"ti-calendar\"></i></div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"mail-contnet\">\r\n\t\t\t\t\t\t\t\t\t\t<h5>Event today</h5>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"mail-desc\">Just a reminder that you have event</span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"time\">9:10 AM</span> </div>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t<!-- Message -->\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn btn-info btn-circle\"><i class=\"ti-settings\"></i></div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"mail-contnet\">\r\n\t\t\t\t\t\t\t\t\t\t<h5>Settings</h5>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"mail-desc\">You can customize this template as you want</span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"time\">9:08 AM</span> </div>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t<!-- Message -->\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn btn-primary btn-circle\"><i class=\"ti-user\"></i></div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"mail-contnet\">\r\n\t\t\t\t\t\t\t\t\t\t<h5>Pavan kumar</h5>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"mail-desc\">Just see the my admin!</span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"time\">9:02 AM</span> </div>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t<div class=\"ps__scrollbar-x-rail\" style=\"left: 0px; bottom: 0px;\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"ps__scrollbar-x\" tabindex=\"0\" style=\"left: 0px; width: 0px;\"></div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"ps__scrollbar-y-rail\" style=\"top: 0px; right: 0px;\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"ps__scrollbar-y\" tabindex=\"0\" style=\"top: 0px; height: 0px;\"></div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a class=\"nav-link text-center\" href=\"javascript:void(0);\"> <strong>Check all notifications</strong> <i class=\"fa fa-angle-right\"></i> </a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\t\t\t\t<!-- ============================================================== -->\r\n\t\t\t\t<!-- End Notifications \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n\t\t\t\t<!-- ============================================================== -->\r\n\r\n\t\t\t\t<!-- ============================================================== -->\r\n\t\t\t\t<!-- Messages\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n\t\t\t\t<!-- ============================================================== -->\r\n\t\t\t\t<li class=\"nav-item dropdown\">\r\n\t\t\t\t\t\t<a aria-expanded=\"false\" aria-haspopup=\"true\" class=\"nav-link dropdown-toggle waves-effect waves-dark\" \r\n\t\t\t\t\t\t\t\tdata-toggle=\"dropdown\" href=\"\" id=\"2\">\r\n\t\t\t\t\t\t\t<i class=\"mdi mdi-email\"></i>\r\n\t\t\t\t\t\t\t<div class=\"notify\">\r\n\t\t\t\t\t\t\t\t<span class=\"point\"></span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<app-messages></app-messages>\r\n\t\t\t\t</li>\r\n\t\t\t\t<!-- ============================================================== -->\r\n\t\t\t\t<!-- End messages \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n\t\t\t\t<!-- ============================================================== -->\r\n\r\n\t\t\t\t<!-- ============================================================== -->\r\n\t\t\t\t<!-- Add book \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n\t\t\t\t<!-- ============================================================== -->\r\n\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t\t<a [routerLink]=\"['/addBook']\" class=\"nav-link waves-effect waves-dark\">\r\n\t\t\t\t\t\t<img src=\"assets/images/add.png\" alt=\"add_book\" style=\"width: 25px;\" />\r\n\t\t\t\t\t</a>\r\n\r\n\t\t\t\t</li>\r\n\t\t\t\t<!-- ============================================================== -->\r\n\t\t\t\t<!-- End Add book \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n\t\t\t\t<!-- ============================================================== -->\r\n\r\n\t\t\t\t<!-- ============================================================== -->\r\n\t\t\t\t<!-- Profile \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n\t\t\t\t<!-- ============================================================== -->\r\n\t\t\t\t<li class=\"nav-item dropdown\">\r\n\t\t\t\t\t<a aria-expanded=\"false\" aria-haspopup=\"true\" class=\"nav-link dropdown-toggle waves-effect waves-dark\" \r\n\t\t\t\t\tdata-toggle=\"dropdown\" href=\"\">\r\n\t\t\t\t\t\t<img [src]=\"profile.img\" alt=\"user\" class=\"img-circle-50\" *ngIf=\"!loading; else loadingElse\"/>\r\n\t\t\t\t\t\t<ng-template #loadingElse>\r\n\t\t\t\t\t\t\t\t<app-loading></app-loading>\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<div class=\"dropdown-menu dropdown-menu-right mailbox animated bounceInDown\">\r\n\t\t\t\t\t\t<ul class=\"dropdown-user\">\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<div class=\"dw-user-box\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"u-img\">\r\n\t\t\t\t\t\t\t\t\t\t<img [src]=\"profile.img\" alt=\"user\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"u-text\">\r\n\t\t\t\t\t\t\t\t\t\t<h4>{{ profile.name | titlecase }} {{ profile.last_name1 | titlecase }} {{ profile.last_name2 | titlecase }}</h4>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"text-muted\">{{ profile.email }}</p>\r\n\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/profile']\"\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-rounded btn-danger btn-sm\">\r\n\t\t\t\t\t\t\t\t\t\t\tVer perfil\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li role=\"separator\" class=\"divider\"></li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a [routerLink]=\"['/profile']\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"ti-user\"></i> &nbsp; Mi perfil\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a [routerLink]=\"['/library']\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"ti-wallet\"></i> &nbsp; Mi biblioteca\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a [routerLink]=\"['/messages']\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"ti-email\"></i> &nbsp; Mis mensajes\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li role=\"separator\" class=\"divider\"></li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a (click)=\"logout()\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-power-off\"></i> &nbsp; Cerrar sesión\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\t\t\t\t<!-- ============================================================== -->\r\n\t\t\t\t<!-- End Profile \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n\t\t\t\t<!-- ============================================================== -->\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</nav>\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// ANGULARFIRE2

// SERVICE

// PLUGINS

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, auth, _dbService) {
        var _this = this;
        this.router = router;
        this.auth = auth;
        this._dbService = _dbService;
        this.loading = true;
        var actual_user = JSON.parse(localStorage.getItem("user"));
        this._dbService.getDataQuery("users", "uid", "==", actual_user.uid)
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var key = a.payload.doc.id;
            return __assign({ key: key }, data);
        }); })).subscribe(function (data) {
            _this.profile = [];
            _this.profile = data[0];
            _this.loading = false;
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.resetProfile();
    };
    // Busca un libro según el texto de entrada
    HeaderComponent.prototype.searchBook = function (input) {
        this.router.navigate(['/search', input]);
    };
    // Cierra la sesión del usuario actual
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this.auth.auth.signOut()
            .then(function () {
            localStorage.removeItem('user');
            var rememberMe = JSON.parse(localStorage.getItem('session')).rememberMe;
            localStorage.setItem('session', JSON.stringify({
                session: false,
                rememberMe: rememberMe
            }));
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()('Adiós', 'Vuelva pronto', 'success');
            _this.router.navigate(['/login']);
        })
            .catch(function () { return sweetalert__WEBPACK_IMPORTED_MODULE_5___default()('Error al cerrar sesión', 'Vuelva a intentarlo', 'error'); });
    };
    HeaderComponent.prototype.resetProfile = function () {
        this.profile = {
            uid: '',
            rut: '',
            name: '',
            last_name1: '',
            last_name2: '',
            email: [],
            phone: '',
            ranking: 0,
            favs_genres: [],
            commune: ''
        };
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/messages/messages.component.html":
/*!*********************************************************!*\
  !*** ./src/app/shared/messages/messages.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div aria-labelledby=\"2\" class=\"dropdown-menu mailbox dropdown-menu-right animated bounceInDown\">\r\n\t<ul>\r\n\t\t<li>\r\n  \t\t<div class=\"drop-title\">Tienes {{ new_messages }} mensaje/s</div>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<div class=\"message-center ps ps--theme_default ps--active-y\" data-ps-id=\"5d9236dd-5d99-76c4-56fe-c7629b8cdc1b\"\r\n\t\t\t\t\t*ngFor=\"let m of messages; let i = index;\">\r\n\t\t\t\t<a class=\"pointer\" (click)=\"showMessage(m.key)\">\r\n\t\t\t\t\t<div class=\"user-img\">\r\n\t\t\t\t\t\t<img *ngIf=\"m.uid_interested.uid !== uid\" class=\"img-circle img-circle-40\" [src]=\"m.uid_interested.img\">\r\n\t\t\t\t\t\t<img *ngIf=\"m.user_owner !== uid\" class=\"img-circle img-circle-40\" [src]=\"m.book.user.img\">\r\n\t\t\t\t\t\t<span [ngClass]=\"{'online': m.status, 'busy': !m.status}\" class=\"profile-status pull-right\"></span>\r\n\t\t\t\t\t\t<!-- TODO: Estado del mensaje -->\r\n\t\t\t\t\t\t<!-- online es verde, busy es rojo, away es naranjo, offline es naranjo -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"mail-contnet\">\r\n\t\t\t\t\t\t<h5 *ngIf=\"m.uid_interested.uid !== uid\"> {{ m.uid_interested.name | titlecase }} {{ m.uid_interested.last_name1 | titlecase }} {{ m.uid_interested.last_name2 | titlecase }} </h5>\r\n\t\t\t\t\t\t<h5 *ngIf=\"m.user_owner !== uid\"> {{ m.book.user.name | titlecase }} {{ m.book.user.last_name1 | titlecase }} {{ m.book.user.last_name2 | titlecase }} </h5>\r\n\t\t\t\t\t\t<span class=\"mail-desc\"> {{ m.text[m.text.length-1][m.user_owner] }} {{ m.text[m.text.length-1][m.uid_interested.uid] }} </span>\r\n\t\t\t\t\t\t<span class=\"time\"> {{ m.date }} </span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</a>\r\n\t\t\t</div>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<a class=\"nav-link text-center\" [routerLink]=\"['/messages']\">\r\n\t\t\t\t<strong>Ver todos los mensajes</strong>\r\n\t\t\t\t<i class=\"fa fa-angle-right\"></i>\r\n\t\t\t</a>\r\n\t\t</li>\r\n\t</ul>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/messages/messages.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/messages/messages.component.ts ***!
  \*******************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// SERVICIOS


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(_dbService, router) {
        var _this = this;
        this._dbService = _dbService;
        this.router = router;
        this.messages = [];
        this.new_messages = 0;
        this.uid = JSON.parse(localStorage.getItem('user')).uid;
        this._dbService.getData('messages-transaction')
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var key = a.payload.doc.id;
            return __assign({ key: key }, data);
        }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            var arr = [];
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var r = res_1[_i];
                if (r.user_owner === _this.uid || r.uid_interested.uid === _this.uid)
                    arr.push(r);
            }
            return arr;
        }))
            .subscribe(function (data) {
            _this.messages = [];
            _this.messages = data;
        });
        // Obtener la cantidad de mensajes no leidos
        this._dbService.getDataQuery('messages-transaction', 'status', '==', false)
            .valueChanges()
            .subscribe(function (data) { return _this.new_messages = data.length; });
    }
    MessagesComponent.prototype.showMessage = function ($key) {
        this.router.navigate(['/messages', $key]);
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/shared/messages/messages.component.html")
        }),
        __metadata("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/shared/messages/messages.component.ts");
/* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/loading/loading.component */ "./src/app/components/loading/loading.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Componentes




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ],
            declarations: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_5__["MessagesComponent"],
                _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"]
            ],
            exports: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_5__["MessagesComponent"],
                _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"left-sidebar\">\r\n\t<div class=\"scroll-sidebar\">\r\n\t\t<nav class=\"sidebar-nav\">\r\n\t\t\t<ul id=\"sidebarnav\">\r\n\t\t\t \t<li class=\"nav-small-cap\">CATEGORÍAS</li>\r\n\t\t\t\t <li class=\"nav-devider\"></li>\r\n\t\t\t\t <!-- TODO: ponerle estilos -->\r\n\t\t\t\t<li class=\"nav-small-cap\" \r\n\t\t\t\t\t\trouterLinkActive=\"active\"\r\n\t\t\t\t\t\tstyle=\"cursor: pointer;\" \r\n\t\t\t\t\t\t*ngFor=\"let c of categories\">\r\n\t\t\t\t\t<a [routerLink]=\"['/search', 'sidebar.'+c]\"> {{ c }} </a>\r\n\t\t\t\t</li>               \r\n\t\t\t</ul>\r\n\t\t</nav>\r\n\t</div>\r\n</aside>"

/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// SERVICES

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(_dbService, router) {
        this._dbService = _dbService;
        this.router = router;
        // TODO: FIXME: hay que crear estas datas en archivos aparte para mantener el orden.
        this.categories = ["Antiguedades y Coleccionables", "Arquitectura", "Arte", "Artes Escénicas", "Biografía y Autobiografía", "Casa y Hogar", "Ciencia", "Ciencias Políticas", "Ciencias Sociales", "Cocina", "Comida y Bebestibles", "Colecciones Literarias", "Cómics y Novelas Gráficas", "Computación e Internet", "Crímenes", "Crítica Literaria", "Cuerpo", "Mente y Espíritu", "Deportes y Recreación", "Drama", "Educación", "Estudio de Lenguas Extranjeras", "Ensayos Académicos", "Familia y Relaciones", "Ficción", "Ficción Adolescente", "Ficción para Niños", "Filosofía", "Fotografía", "Historia y Geografía", "Humor", "Jardinería", "Juegos", "Lectura escolar", "Lengua y Literatura", "Leyes", "Manualidades y Hobbies", "Mascotas y Animales", "Matemáticas", "Medicina", "Música", "Naturaleza y Aire libre", "Negocios y Economía", "Niños y Jóvenes", "Papelería", "Poesía", "Psicología", "Religión y Espiritualidad", "Salud y Bienestar", "Tecnología", "Transporte", "Viajes"];
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dbService.getData('books')
            .valueChanges()
            .subscribe(function (data) { return _this.books = data; });
    };
    // Busca los libros según el search, que es la categoría.
    SidebarComponent.prototype.searchCategory = function (search) {
        var searchCategories = [];
        for (var _i = 0, _a = this.books; _i < _a.length; _i++) {
            var book = _a[_i];
            var categories = book.genres;
            var flag = false; // con esto valido que se agregue solo 1 vez el mismo libro
            for (var _b = 0, categories_1 = categories; _b < categories_1.length; _b++) {
                var category = categories_1[_b];
                var cat = category.toLowerCase();
                if (cat.indexOf(search.toLowerCase()) >= 0 && !flag) {
                    flag = true;
                    searchCategories.push(book);
                }
            }
        }
        this.router.navigate(['/search', search]);
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/shared/sidebar/sidebar.component.html")
        }),
        __metadata("design:paramtypes", [src_app_services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBxspKKccHy_9WBI5Q1xEnbpZcxLdvMI0w",
        authDomain: "booksapp-chile.firebaseapp.com",
        databaseURL: "https://booksapp-chile.firebaseio.com",
        projectId: "booksapp-chile",
        storageBucket: "booksapp-chile.appspot.com",
        messagingSenderId: "748589695279"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Jabiera\Desktop\T\BOOKscalo_Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
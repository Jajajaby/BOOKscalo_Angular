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

module.exports = "<div id=\"main-wrapper\">\n  <app-header></app-header>\n  <app-sidebar></app-sidebar>\n\n  <!-- ============================================================== -->\n  <!-- Page wrapper  -->\n  <!-- ============================================================== -->\n  <div class=\"page-wrapper\">\n    <!-- ============================================================== -->\n    <!-- Container fluid  -->\n    <!-- ============================================================== -->\n    <div class=\"container-fluid\">\n\n      <!-- ============================================================== -->\n      <!-- Start Page Content -->\n      <!-- ============================================================== -->\n      <router-outlet></router-outlet>\n      <!-- ============================================================== -->\n      <!-- End Page Content -->\n      <!-- ============================================================== -->\n    </div>\n    <!-- ============================================================== -->\n    <!-- END Container fluid  -->\n    <!-- ============================================================== -->\n  </div>\n  <!-- ============================================================== -->\n  <!-- END Page wrapper  -->\n  <!-- ============================================================== -->\n</div>"

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

module.exports = "<div class=\"container-dashboard\">\n\t<!-- =============================================================== -->\n\t<!-- Report boxes\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t -->\n\t<!-- =============================================================== -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-4\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<div class=\"d-flex no-block\">\n\t\t\t\t\t\t<div class=\"m-r-20 align-self-center\">\n\t\t\t\t\t\t\t<span class=\"lstick m-r-20\"></span>\n\t\t\t\t\t\t\t<img src=\"../assets/images/icon/staff.png\" alt=\"Income\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"align-self-center\">\n\t\t\t\t\t\t\t<h6 class=\"text-muted m-t-10 m-b-0\">Total de usuarios</h6>\n\t\t\t\t\t\t\t<h2 class=\"m-t-0\">{{ count_users }}</h2>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-lg-4\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<div class=\"d-flex no-block\">\n\t\t\t\t\t\t<div class=\"m-r-20 align-self-center\">\n\t\t\t\t\t\t\t<span class=\"lstick m-r-20\"></span>\n\t\t\t\t\t\t\t<img src=\"../assets/images/icon/expense.png\" alt=\"Income\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"align-self-center\">\n\t\t\t\t\t\t\t<h6 class=\"text-muted m-t-10 m-b-0\">Total de libros</h6>\n\t\t\t\t\t\t\t<h2 class=\"m-t-0\">{{ count_books }}</h2>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-lg-4\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<div class=\"d-flex no-block\">\n\t\t\t\t\t\t<div class=\"m-r-20 align-self-center\">\n\t\t\t\t\t\t\t<span class=\"lstick m-r-20\"></span>\n\t\t\t\t\t\t\t<img src=\"../assets/images/icon/assets.png\" alt=\"Income\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"align-self-center\">\n\t\t\t\t\t\t\t<h6 class=\"text-muted m-t-10 m-b-0\">Mensajes enviados</h6>\n\t\t\t\t\t\t\t<h2 class=\"m-t-0\">{{ count_messages }}</h2>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- =============================================================== -->\n\t<!-- End report boxes\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t -->\n\t<!-- =============================================================== -->\n\n\t<!-- =============================================================== -->\n\t<!-- Users status\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t -->\n\t<!-- =============================================================== -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12 col-md-12\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<h4 class=\"card-title\"><span class=\"lstick\"></span>Estado de usuarios</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- TODO: ??? Agregar admin -->\n\t\t\t\t\t\t<!-- <div class=\"ml-auto\">\n\t\t\t\t\t\t\t<button class=\"pull-right btn btn-circle btn-info\" data-toggle=\"modal\" data-target=\"#addAdmin\">\n\t\t\t\t\t\t\t\t<i class=\"ti-plus\"></i>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div> -->\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"table-responsive m-t-20\">\n\t\t\t\t\t\t<table class=\"table vm no-th-brd no-wrap pro-of-month\">\n\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th colspan=\"2\">Usuario</th>\n\t\t\t\t\t\t\t\t\t<th>Tipo de usuario</th>\n\t\t\t\t\t\t\t\t\t<th>Estado</th>\n\t\t\t\t\t\t\t\t\t<th>Cambiar estado</th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let u of users\">\n\t\t\t\t\t\t\t\t\t<td style=\"width:50px;\"><span class=\"round\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/users/1.jpg\" alt=\"user\" width=\"50\"></span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<h6>{{ u.name | titlecase }} {{ u.last_name1 | titlecase }} {{ u.last_name2 | titlecase }}</h6>\n\t\t\t\t\t\t\t\t\t\t<small class=\"text-muted\">Creado el: {{ u.created_date }}</small>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>{{ u.role | titlecase }}</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"[u.status] == 'true'\" class=\"label label-success label-rounded\">Activo</span>\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"[u.status] == 'false'\" class=\"label label-danger label-rounded\">Inactivo</span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<!-- TODO: Hacer algo con esto -->\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\tCambiar jjj\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- =============================================================== -->\n\t<!-- End users status\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t -->\n\t<!-- =============================================================== -->\n\n\n\t<!-- ============================================================== -->\n\t<!-- Reports\t\t\t              \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t<!-- ============================================================== -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12 col-md-12\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<h3 class=\"card-title m-b-5\">\n\t\t\t\t\t\t\t<span class=\"lstick\"></span>Reportes \n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"ml-auto\">\n\t\t\t\t\t\t\t<!-- FIXME: -->\n\t\t\t\t\t\t\t<!-- TODO: Hacer que funcione por fechas -->\n\t\t\t\t\t\t\t<label>Fecha</label>\n\t\t\t\t\t\t\t<select class=\"custom-select b-0\" formControlName=\"date\">Fecha\n\t\t\t\t\t\t\t\t<option value=\"all\" selected>Todas</option>\n\t\t\t\t\t\t\t\t<option *ngFor=\"let r of reports\">{{ r.day }}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<table class=\"table vm no-th-brd no-wrap pro-of-month\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>ID</th>\n\t\t\t\t\t\t\t<th>Usuario que reporta</th>\n\t\t\t\t\t\t\t<th>Tipo de reporte</th>\n\t\t\t\t\t\t\t<th>Fecha</th>\n\t\t\t\t\t\t\t<th>Hora</th>\n\t\t\t\t\t\t\t<th>Reporte</th>\n\t\t\t\t\t\t\t<th>Estado</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr *ngFor=\"let r of reports\">\n\t\t\t\t\t\t\t<!-- TODO: Revisar visualmente y borrar referencis sin ID -->\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<h6>{{ r.id }}</h6>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<h6>{{ r.user.name | titlecase }} {{ r.user.last_name1 | titlecase }} {{ r.user.last_name2 | titlecase }}</h6>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<h6>{{ r.type }}</h6>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<h6>{{ r.day }}</h6>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<h6>{{ r.hour }}</h6>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<!-- FIXME: Alinear el link de la img para que quede justificado o algo así, a la columna -->\n\t\t\t\t\t\t\t\t<!-- <h6 *ngIf=\"r.type == 'Reporte de imagen'\">Se reportan las imagenes contenidas en el siguiente link {{ r.img }}</h6> -->\n\t\t\t\t\t\t\t\t<h6 *ngIf=\"r.type == 'Reporte de usuario'\">Se reporta al usuario {{ r.user_reported.name | titlecase }} {{ r.user_reported.last_name1 | titlecase }} {{ r.user_reported.last_name2 | titlecase }}</h6>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<span *ngIf=\"[r.status] == 'Revisado'\" class=\"label label-success label-rounded\">Revisado</span>\n\t\t\t\t\t\t\t\t<span *ngIf=\"[r.status] == 'No revisado'\" class=\"label label-danger label-rounded\">No revisado</span>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n  </div>\n  <!-- ============================================================== -->\n\t<!-- End reports\t\t\t              \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t<!-- ============================================================== -->\n\n\t<!-- ============================================================== -->\n\t<!-- Todo list \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t<!-- ============================================================== -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-6 col-xlg-8\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<h4 class=\"card-title\"><span class=\"lstick\"></span>To Do list</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"ml-auto\">\n\t\t\t\t\t\t\t<button class=\"pull-right btn btn-circle btn-success\" data-toggle=\"modal\" data-target=\"#myModal\">\n\t\t\t\t\t\t\t\t<i class=\"ti-plus\"></i>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"to-do-widget m-t-20\">\n\t\t\t\t\t\t<!-- ============================================================== -->\n\t\t\t\t\t\t<!-- Modal for add tasks   \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  -->\n\t\t\t\t\t\t<!-- ============================================================== -->\n\t\t\t\t\t\t<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n\t\t\t\t\t\t\t<div class=\"modal-dialog\" role=\"document\">\n\t\t\t\t\t\t\t\t<div class=\"modal-content\">\n\t\t\t\t\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"modal-title\">Agregar tarea</h4>\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"> <span aria-hidden=\"true\">&times;</span> </button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t\t\t\t<form>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Nombre de la tarea</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input formControlName=\"task\" type=\"text\" class=\"form-control\" placeholder=\"Revisar mensajes\"> \n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Descripción de la tarea</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input formControlName=\"description\" type=\"text\" class=\"form-control\" placeholder=\"Revisar la lista de mensajes que están pendientes\"> \n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Prioridad</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<select formControlName=\"priority\" class=\"custom-select form-control pull-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"high\">Alta</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"medium\">Media</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"low\">Baja</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"addTask()\">Agregar</button>\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- ============================================================== -->\n\t\t\t\t\t\t<!-- End modal for add tasks   \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  -->\n\t\t\t\t\t\t<!-- ============================================================== -->\n\t\t\t\t\t\t<ul class=\"list-task todo-list list-group m-b-0\" data-role=\"tasklist\">\n\t\t\t\t\t\t\t<li class=\"list-group-item\" data-role=\"task\" *ngFor=\"let t of tasks\">\n\t\t\t\t\t\t\t\t<div class=\"checkbox checkbox-info m-b-10\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"inputSchedule\" name=\"inputCheckboxesSchedule\">\n\t\t\t\t\t\t\t\t\t<label for=\"inputSchedule\" class=\"\"> \n\t\t\t\t\t\t\t\t\t\t<span>{{ t.task }}</span> \n\t\t\t\t\t\t\t\t\t\t<span class=\"label label-rounded label-danger pull-right\">{{ t.description }}</span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\" data-role=\"task\">\n\t\t\t\t\t\t\t\t<div class=\"checkbox checkbox-info\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"inputBook\" name=\"inputCheckboxesBook\">\n\t\t\t\t\t\t\t\t\t<label for=\"inputBook\" class=\"\"> \n\t\t\t\t\t\t\t\t\t\t<span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"label label-primary label-rounded pull-right\">{{ t.priority }}</span> \n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"item-date\"> 26 jun 2017</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\" data-role=\"task\">\n\t\t\t\t\t\t\t\t<div class=\"checkbox checkbox-info\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"inputCall\" name=\"inputCheckboxesCall\">\n\t\t\t\t\t\t\t\t\t<label for=\"inputCall\" class=\"\"> \n\t\t\t\t\t\t\t\t\t\t<span>Give Purchase report to</span> \n\t\t\t\t\t\t\t\t\t\t<span class=\"label label-info label-rounded pull-right\">Yesterday</span> \n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\" data-role=\"task\">\n\t\t\t\t\t\t\t\t<div class=\"checkbox checkbox-info\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"inputForward\" name=\"inputCheckboxesForward\">\n\t\t\t\t\t\t\t\t\t<label for=\"inputForward\" class=\"\"> \n\t\t\t\t\t\t\t\t\t\t<span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</span> \n\t\t\t\t\t\t\t\t\t\t<span class=\"label label-warning label-rounded pull-right\">2 weeks</span> \n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"item-date\">{{ actual_day }}</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- ============================================================== -->\n\t\t<!-- My contact and feed \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\t\t\t\t\n\t\t<!-- ============================================================== -->\n\t\t<div class=\"col-lg-6\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<h4 class=\"card-title\"><span class=\"lstick\"></span> Feeds</h4>\n\t\t\t\t\t<ul class=\"feeds\">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<div class=\"bg-light-info\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-bell-o\"></i>\n\t\t\t\t\t\t\t</div> You have 4 pending tasks. \n\t\t\t\t\t\t\t<span class=\"text-muted\">Just Now</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<div class=\"bg-light-success\">\n\t\t\t\t\t\t\t\t<i class=\"ti-server\"></i>\n\t\t\t\t\t\t\t</div> Server #1 overloaded.\n\t\t\t\t\t\t\t<span class=\"text-muted\">2 Hours ago</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<div class=\"bg-light-warning\">\n\t\t\t\t\t\t\t\t<i class=\"ti-shopping-cart\"></i>\n\t\t\t\t\t\t\t</div> New order received.\n\t\t\t\t\t\t\t<span class=\"text-muted\">31 May</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<div class=\"bg-light-danger\">\n\t\t\t\t\t\t\t\t<i class=\"ti-user\"></i>\n\t\t\t\t\t\t\t</div> New user registered.\n\t\t\t\t\t\t\t\t<span class=\"text-muted\">30 May</span>\n\t\t\t\t\t\t\t\t/li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<div class=\"bg-light-inverse\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-bell-o\"></i>\n\t\t\t\t\t\t\t</div> New Version just arrived. \n\t\t\t\t\t\t\t<span class=\"text-muted\">27 May</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<div class=\"bg-light-danger\">\n\t\t\t\t\t\t\t\t<i class=\"ti-user\"></i>\n\t\t\t\t\t\t\t</div> New user registered.\n\t\t\t\t\t\t\t<span class=\"text-muted\">30 May</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<div class=\"bg-light-primary\">\n\t\t\t\t\t\t\t\t<i class=\"ti-settings\"></i>\n\t\t\t\t\t\t\t</div> You have 4 pending tasks. \n\t\t\t\t\t\t\t<span class=\"text-muted\">27 May</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- ============================================================== -->\n\t<!-- Comment and chat -->\n\t<!-- ============================================================== -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-6\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<h4 class=\"card-title\"><span class=\"lstick\"></span>Recent Comments</h4>\n\t\t\t\t</div>\n\t\t\t\t<!-- ============================================================== -->\n\t\t\t\t<!-- Comment widgets -->\n\t\t\t\t<!-- ============================================================== -->\n\t\t\t\t<div class=\"comment-widgets\">\n\t\t\t\t\t<!-- Comment Row -->\n\t\t\t\t\t<div class=\"d-flex flex-row comment-row\">\n\t\t\t\t\t\t<div class=\"p-2\">\n\t\t\t\t\t\t\t<span class=\"round\">\n\t\t\t\t\t\t\t\t<img src=\"../assets/images/users/1.jpg\" alt=\"user\" width=\"50\">\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"comment-text w-100\">\n\t\t\t\t\t\t\t<h5>James Anderson</h5>\n\t\t\t\t\t\t\t<p class=\"m-b-5\">Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.</p>\n\t\t\t\t\t\t\t<div class=\"comment-footer\"> \n\t\t\t\t\t\t\t\t<span class=\"text-muted pull-right\">April 14, 2016</span> \n\t\t\t\t\t\t\t\t<span class=\"label label-rounded label-info\">Pending</span> \n\t\t\t\t\t\t\t\t<span class=\"action-icons\">\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i class=\"ti-pencil-alt\"></i></a>\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i class=\"ti-check\"></i></a>\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i class=\"ti-heart\"></i></a>    \n\t\t\t\t\t\t\t\t</span> \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- Comment Row -->\n\t\t\t\t\t<div class=\"d-flex flex-row comment-row active\">\n\t\t\t\t\t\t<div class=\"p-2\">\n\t\t\t\t\t\t\t<span class=\"round\">\n\t\t\t\t\t\t\t\t<img src=\"../assets/images/users/2.jpg\" alt=\"user\" width=\"50\">\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"comment-text active w-100\">\n\t\t\t\t\t\t\t<h5>Michael Jorden</h5>\n\t\t\t\t\t\t\t<p class=\"m-b-5\">Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry..</p>\n\t\t\t\t\t\t\t<div class=\"comment-footer \"> \n\t\t\t\t\t\t\t\t<span class=\"text-muted pull-right\">April 14, 2016</span> \n\t\t\t\t\t\t\t\t<span class=\"label label-success label-rounded\">Approved</span> \n\t\t\t\t\t\t\t\t<span class=\"action-icons active\">\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i class=\"ti-pencil-alt\"></i></a>\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i class=\"icon-close\"></i></a>\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i class=\"ti-heart text-danger\"></i></a>    \n\t\t\t\t\t\t\t\t</span> \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- Comment Row -->\n\t\t\t\t\t<div class=\"d-flex flex-row comment-row\">\n\t\t\t\t\t\t<div class=\"p-2\">\n\t\t\t\t\t\t\t<span class=\"round\">\n\t\t\t\t\t\t\t\t<img src=\"../assets/images/users/3.jpg\" alt=\"user\" width=\"50\">\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"comment-text w-100\">\n\t\t\t\t\t\t\t<h5>Johnathan Doeting</h5>\n\t\t\t\t\t\t\t<p class=\"m-b-5\">Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.</p>\n\t\t\t\t\t\t\t<div class=\"comment-footer\"> \n\t\t\t\t\t\t\t\t<span class=\"text-muted pull-right\">April 14, 2016</span> \n\t\t\t\t\t\t\t\t<span class=\"label label-rounded label-danger\">Rejected</span> \n\t\t\t\t\t\t\t\t<span class=\"action-icons\">\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i class=\"ti-pencil-alt\"></i></a>\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i class=\"ti-check\"></i></a>\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i class=\"ti-heart\"></i></a>    \n\t\t\t\t\t\t\t\t</span> \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- ============================================================== -->\n\t<!-- End Right panel -->\n\t<!-- ============================================================== -->\n</div>\n<!-- ============================================================== -->\n<!-- End Container fluid  -->\n<!-- ============================================================== -->\n\t\t\t\t\t"

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

module.exports = "<h1>Usuarios</h1>\n<div class=\"row\">\n\t<div class=\"col-md-6 col-lg-6 col-xlg-4\" *ngFor=\"let u of users\">\n\t\t<div class=\"card card-body\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-4 col-lg-3 text-center\">\n\t\t\t\t\t<img [src]=\"u.img\" alt=\"user\" class=\"img-circle img-responsive\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-8 col-lg-9\">\n\t\t\t\t\t<h3 class=\"box-title m-b-0\">{{ u.name | titlecase }} {{ u.last_name1 | titlecase }} {{ u.last_name2 | titlecase }}</h3> \n\t\t\t\t\t<small>{{ u.rut }}</small>\n\t\t\t\t\t<br/>\n\t\t\t\t\t<address>\n\t\t\t\t\t\t{{ u.email }}\n\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t<abbr title=\"Phone\">P:</abbr> (+56 9) {{ u.phone }}\n\t\t\t\t\t</address>\n\t\t\t\t\t<small class=\"text-muted\">Creado el: {{ u.created_date }}</small>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

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

module.exports = "<!-- ============================================================================== -->\n<!-- Loader \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n<!-- ============================================================================== -->\n<div *ngIf=\"loading\" class=\"loader-contenedor\">\n\t<app-loading></app-loading>\n\t<p> Buscando libros... </p>\n</div>\n<!-- ============================================================================== -->\n<!-- End loader \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n<!-- ============================================================================== -->\n\n<!-- ============================================================================== -->\n<!-- Card book \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n<!-- ============================================================================== -->\n<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t\t<div *ngIf=\"!loading\" class=\"card-columns\">\n\t\t\t\t<div class=\"card\" style=\"max-width:18rem;\" *ngFor=\"let book of books; let index = index;\">\n\t\t\t\t\t<!-- CARROUSEL BOOK IMAGES -->\n\t\t\t\t\t<div id=\"carouselExampleFade-{{index}}\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">\n\t\t\t\t\t\t<div class=\"carousel-inner\">\n\t\t\t\t\t\t\t<div class=\"carousel-item\" *ngFor=\"let img of book.images; let i=index;\" [ngClass]=\"{'active': i===0}\" >\n\t\t\t\t\t\t\t <img class=\"d-block img-carousel\" [src]=\"img\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div> \n\t\t\t\t\t\t<a class=\"carousel-control-prev\" href=\"#carouselExampleFade-{{index}}\" role=\"button\" data-slide=\"prev\">\n\t\t\t\t\t\t\t<span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a class=\"carousel-control-next\" href=\"#carouselExampleFade-{{index}}\" role=\"button\" data-slide=\"next\">\n\t\t\t\t\t\t\t<span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t </div>\n\t\t\t\t\t<!-- END CARROUSEL BOOK IMAGES -->\n\t\t\t\n\t\t\t\t\t<!-- TEXT CARD -->\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<h5 class=\"card-title\">Título: {{ book.title | titlecase }}</h5>\n\t\t\t\t\t\t<p class=\"card-text\">Autor/a: {{ book.author | titlecase }}</p>\n\t\t\t\t\t\t<p class=\"card-text\">Editorial: {{ book.editorial | titlecase }}</p>\n\t\t\t\t\t\t<p class=\"card-text\">Fecha publicación: {{ book.date }}</p>\n\t\t\t\t\t\t<p class=\"card-text\" *ngIf=\"book.transaction == 'Ambos' || book.transaction == 'Venta'\">Price: ${{ book.price | thousands }}</p>\n\t\t\t\t\t\t<p class=\"card-text\">Dueño: {{book.user.name | titlecase }} {{book.user.last_name1 | titlecase }} {{book.user.last_name2 | titlecase }}</p>\n\t\t\t\t\t\t<button *ngIf=\"book.uid === actual_user.uid\" class=\"btn btn-outline-info col-md-12\" data-toggle=\"modal\" \n\t\t\t\t\t\t\t\tdata-target=\"#showBook\" type=\"button\" (click)=\"book_modal=book\">Ver libro</button>\n\t\t\t\t\t\t<button *ngIf=\"book.uid !== actual_user.uid\" class=\"btn btn-outline-info col-md-6\" data-toggle=\"modal\" \n\t\t\t\t\t\t\t\tdata-target=\"#showBook\" type=\"button\" (click)=\"book_modal=book\">Ver libro</button>\n\t\t\t\t\t\t<button *ngIf=\"book.uid !== actual_user.uid\" \n\t\t\t\t\t\t\t\tclass=\"btn btn-outline-info col-md-6\" data-toggle=\"modal\" \n\t\t\t\t\t\t\t\tdata-target=\"#contactOwner\" type=\"button\" (click)=\"book_modal=book\">Contactar</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- END TEXT CARD -->\n\t\t\t\t</div>\n\t\t\t</div>\n\t</div>\n</div>\n\n<!-- ============================================================================================================== -->\n<!-- Modal show book\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n<!-- ============================================================================================================== -->\n<div \tclass=\"modal fade bs-example-modal-lg\" tabindex=\"-1\" role=\"dialog\" id=\"showBook\"\t\t\t\t\n\t\t\taria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\" style=\"display: none;\">\n\t<div class=\"modal-dialog modal-lg\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h4 class=\"modal-title\" id=\"myLargeModalLabel\"> {{ book_modal.title | titlecase }}</h4>\n\t\t\t\t<div class=\"other-header\">\n\t\t\t\t\t\n\t\t\t\t\t<button  type=\"button\" aria-expanded=\"false\" aria-haspopup=\"true\" class=\"close waves-effect\" data-toggle=\"dropdown\">\n\t\t\t\t\t\t<i class=\"fa fa-angle-down\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t\t<!-- FIXME: Mover eso para que quede debajo del angle-down -->\n\t\t\t\t\t<!-- ====================================================================== -->\n\t\t\t\t\t<!-- Little modal to report\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t\t\t<!-- ====================================================================== -->\n\t\t\t\t\t<div class=\"dropdown-menu dropdown-menu-right mailbox animated bounceInDown\">\n\t\t\t\t\t\t<ul style=\"padding: 0%!important;\">\n\t\t\t\t\t\t\t<div class=\"message-center\">\n\t\t\t\t\t\t\t\t<a (click)=reportUser(book_modal)>\n\t\t\t\t\t\t\t\t\t<div class=\"btn btn-danger btn-circle\"><i class=\"ti-user\"></i></div>\n\t\t\t\t\t\t\t\t\t<h5 style=\"display: inline; margin-left: 20px;\">Reportar usuario</h5>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<a (click)=reportImage(book_modal)>\n\t\t\t\t\t\t\t\t\t<div class=\"btn btn-danger btn-circle\"><i class=\"fa fa-file-image-o\"></i></div>\n\t\t\t\t\t\t\t\t\t<h5 style=\"display: inline; margin-left: 20px;\">Reportar imagen</h5>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n\t\t\t\t</div>\n\t\t\t\t<!-- FIXME: Porfi porfi amorcito -->\n\t\t\t\t<!-- ====================================================================== -->\n\t\t\t\t<!-- End little modal to report\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t\t<!-- ====================================================================== -->\n\t\t\t\t\n\t\t\t</div>\n\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<app-one-book [book]=\"book_modal\"></app-one-book>\n\t\t\t</div>\n\t\t\t<!-- ====================================================================== -->\n\t\t\t<!-- Profile collapse\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t<!-- ====================================================================== -->\n\t\t\t<div id=\"accordion\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t  \t<div class=\"card-header\" id=\"headingOne\">\n\t\t\t\t\t\t<h5 class=\"mb-0\">\n\t\t\t\t\t  \t<button class=\"btn btn-link\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n\t\t\t\t\t\t\tVer perfil del dueño\n\t\t\t\t\t  \t</button>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id=\"collapseOne\" class=\"collapse \" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<!-- ====================================================================== -->\n\t\t\t\t\t\t\t<!-- Show profile\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t\t\t\t\t<!-- ====================================================================== -->\n\t\t\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-body row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\" align=\"center\">\n\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"book_modal.user.img\" class=\"img-circle\" width=\"150\" />\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{ book_modal.user.name | titlecase }} {{ book_modal.user.last_name1 | titlecase }} {{ book_modal.user.last_name2 | titlecase }} </h4>\n\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-subtitle\">Accoubts Manager Amix corp</h6>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row text-center justify-content-md-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-book\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <font class=\"font-medium\"> {{ count_book }}</font> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t<small class=\"text-muted\">Correo electrónico</small>\n\t\t\t\t\t\t\t\t\t\t\t<h6> {{ book_modal.user.email }} </h6>\n\t\t\t\t\t\t\t\t\t\t\t<small class=\"text-muted p-t-30 db\">Teléfono de contacto</small>\n\t\t\t\t\t\t\t\t\t\t\t<h6> {{ book_modal.user.phone }} </h6>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- TODO: Revisar que esté aparezcan todas las cat. Copiar en modal de cardbook -->\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<small class=\"text-muted\">Categorías favoritas:</small>\n\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<h6>{{ book_modal.user.categories }}</h6>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"dropdown-divider\"></div>\n\t\t\t\t\t\t\t\t\t\t<small class=\"text-muted p-t-30 db\">Redes sociales</small><br/>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-circle btn-secondary\"><i class=\"fa fa-facebook\"></i></button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-circle btn-secondary\"><i class=\"fa fa-twitter\"></i></button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-circle btn-secondary\"><i class=\"fa fa-youtube\"></i></button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- ====================================================================== -->\n\t\t\t\t\t\t\t<!-- End show profile\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t\t\t\t\t<!-- ====================================================================== -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- ====================================================================== -->\n\t\t\t<!-- End profile collapse\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t<!-- ====================================================================== -->\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-danger waves-effect text-left\" data-dismiss=\"modal\">Close</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- ====================================================================== -->\n<!-- End modal show book\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n<!-- ====================================================================== -->\n\n\n<!-- ====================================================================== -->\n<!-- Modal contact owner\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n<!-- ====================================================================== -->\n<div \tclass=\"modal fade bs-example-modal-lg\" tabindex=\"-1\" role=\"dialog\" id=\"contactOwner\"\n\t\t\taria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\" style=\"display: none;\">\n\t<div class=\"modal-dialog modal-lg\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h4 class=\"modal-title\" id=\"myLargeModalLabel\"> Contactar dueño/a </h4>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n\t\t\t</div>\n\t\t\t<form [formGroup]=\"form\" (ngSubmit)=\"sendMessage()\">\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t<!-- Transaction -- Ambos -->\n\t\t\t\t\t<div *ngIf=\"book_modal.transaction == 'Ambos'\" >\n\t\t\t\t\t\t<label>Elija el tipo de transacción que desea</label>\n\t\t\t\t\t\t<select class=\"form-control\" formControlName=\"transaction\">\n\t\t\t\t\t\t\t<option value=\"Intercambio\">Deseo intercambiar el libro</option>\n\t\t\t\t\t\t\t<option value=\"Venta\">Deseo comprar el libro</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div><br>\n\n\t\t\t\t\t<!-- Preferences -->\n\t\t\t\t\t<!-- FIXME: Esto tiene que ser una tabla u otra cosa, no un select -->\n\t\t\t\t\t<!-- https://www.lawebdelprogramador.com/foros/JavaScript/1495600-seleccionar-una-o-varias-filas-de-una-tabla-y-marcar-o-desmarcar-el-check-de-la-fila-correspondiente.html -->\n\t\t\t\t\t<label>Seleccione la preferencia que más le acomode</label>\n\t\t\t\t\t<select class=\"form-control\" formControlName=\"pref\">\n\t\t\t\t\t\t<option value=\"{{ p.subway_station }}-{{ p.day }}-{{ p.hour }}\" *ngFor=\"let p of book_modal.user.preferences\">{{ p.subway_station }} - {{ p.day }} - {{ p.hour  }}</option>\n\t\t\t\t\t\t<option value=\"dislike_preferences\">Ninguna me acomoda</option>\n\t\t\t\t\t</select><br>\n\t\t\t\t\t<!-- <div class=\"table-responsive\">\n\t\t\t\t\t\t<table class=\"table color-table info-table\">\n\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th>Selección</th>\n\t\t\t\t\t\t\t\t\t<th>Estación de metro</th>\n\t\t\t\t\t\t\t\t\t<th>Día</th>\n\t\t\t\t\t\t\t\t\t<th>Horario</th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let p of book_modal.user.preferences\">\n\t\t\t\t\t\t\t\t\t<td class=\"controls\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\" value=\"p\"> \n\t\t\t\t\t\t\t\t\t\t\t<span class=\"custom-control-indicator\"></span>  \n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td> {{ p.subway_station }} </td>\n\t\t\t\t\t\t\t\t\t<td> {{ p.day }} </td>\n\t\t\t\t\t\t\t\t\t<td> {{ p.hour }} </td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div> -->\n\t\t\t\t\t<br>\n\t\t\t\t\t\n\t\t\t\t\t<!-- Custom preferences -->\n\t\t\t\t\t<div *ngIf=\"form.value.pref === 'dislike_preferences'\">\n\t\t\t\t\t\t<label>Seleccione el horario que desea proponer</label>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<!-- Station -->\n\t\t\t\t\t\t\t<div class=\"form-group col-4\">\n\t\t\t\t\t\t\t\t<label>Estación de metro</label>\n\t\t\t\t\t\t\t\t<!-- TODO: Arreglar esa huea rancia fjdksljfklsdjglksjgks -->\n\t\t\t\t\t\t\t\t<select formControlName=\"station\" id=\"subway_station\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t<optgroup label=\"Línea 1\">\n\t\t\t\t\t\t\t\t\t\t<option value=\"República\">República</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Los Héroes\">Los Héroes</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"La Moneda\">La Moneda</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Universidad de Chile\">Universidad de Chile</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Santa Lucía\">Santa Lucía</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Universidad Católica\">Universidad Católica</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Baquedano\">Baquedano</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Salvador\">Salvador</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Manuel Montt\">Manuel Montt</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Pedro de Valdivia\">Pedro de Valdivia</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Los Leones\">Los Leones</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Tobalaba\">Tobalaba</option>\n\t\t\t\t\t\t\t\t\t</optgroup>\n\t\t\t\t\t\t\t\t\t<optgroup label=\"Línea 5\">\n\t\t\t\t\t\t\t\t\t\t<option value=\"Quinta Normal\">Quinta Normal</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Cumming\">Cumming</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Santa Ana\">Santa Ana</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Plaza de Armas\">Plaza de Armas</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Bellas Artes\">Bellas Artes</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Baquedano\">Baquedano</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Parque Bustamante\">Parque Bustamante</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Santa Isabel\">Santa Isabel</option>\n\t\t\t\t\t\t\t\t\t</optgroup>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- Day -->\n\t\t\t\t\t\t\t<div class=\"form-group col-md-4\">\n\t\t\t\t\t\t\t\t\t<label>Tipo de elemento</label>\n\t\t\t\t\t\t\t\t\t<select formControlName=\"day\" id=\"day\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t<option value=\"Lunes\">Lunes</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Martes\">Martes</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Miércoles\">Miércoles</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Jueves\">Jueves</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Viernes\">Viernes</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Sábado\">Sábado</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Domingo\">Domingo</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- Hour -->\n\t\t\t\t\t\t\t<div class=\"form-group col-md-4\">\n\t\t\t\t\t\t\t\t<label>Hora</label>\n\t\t\t\t\t\t\t\t<input formControlName=\"hour\" class=\"form-control\" type=\"time\" value=\"12:00\" id=\"hour\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<!-- Message -->\n\t\t\t\t\t<div >\n\t\t\t\t\t\t<label>Seleccione el mensaje a enviar</label>\n\t\t\t\t\t\t<select class=\"form-control\" formControlName=\"text\">\n\t\t\t\t\t\t\t<option value=\"Deseo establecer la transacción\">Deseo establecer la transacción</option>\n\t\t\t\t\t\t\t<option *ngIf=\"book_modal.transaction == 'Venta' || form.value.transaction == 'Venta'\" \n\t\t\t\t\t\t\t\tvalue=\"dislike-price\">No me acomoda el precio</option>\n\t\t\t\t\t\t\t<option value=\"new_text\">Deseo escribirle un mensajes personalmente</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div><br>\n\t\t\t\t\t\n\t\t\t\t\t<!-- Custom price -->\n\t\t\t\t\t<div *ngIf=\"form.value.text == 'dislike-price'\">\n\t\t\t\t\t\t<label>Ingrese el precio que desea proponer</label>\n\t\t\t\t\t\t<input \ttype=\"text\" formControlName=\"new_price\" \n\t\t\t\t\t\t\tclass=\"form-control form-control-line border-input-custom\" placeholder=\"Ej.: 2000\">\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<!-- Custom message -->\n\t\t\t\t\t<div *ngIf=\"form.value.text == 'new_text'\">\n\t\t\t\t\t\t<label>Mensaje</label>\n\t\t\t\t\t\t<input \ttype=\"text\" formControlName=\"new_text\" \n\t\t\t\t\t\t\tclass=\"form-control form-control-line border-input-custom\" placeholder=\"Hola, me gustaría establecer la transacción del libro...\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-outline-info waves-effect text-left\">Enviar</button>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger waves-effect text-left\" data-dismiss=\"modal\">Close</button>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>\n<!-- ====================================================================== -->\n<!-- End modal contact owner\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n<!-- ====================================================================== -->\n"

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

module.exports = ".spinner {\n  width: 70px;\n  text-align: center;\n  -webkit-transform:scale(50%);\n          transform:scale(50%);\n}\n\n.spinner > div {\n  width: 18px;\n  height: 18px;\n  background-color: #333;\n\n  border-radius: 100%;\n  display: inline-block;\n  -webkit-animation: bouncedelay 1.4s infinite ease-in-out;\n  animation: bouncedelay 1.4s infinite ease-in-out;\n  /* Prevent first frame from flickering when animation starts */\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n.spinner .bounce1 {\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n\n.spinner .bounce2 {\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n\n@-webkit-keyframes bouncedelay {\n  0%, 80%, 100% { -webkit-transform: scale(0.0) }\n  40% { -webkit-transform: scale(1.0) }\n}\n\n@keyframes bouncedelay {\n  0%, 80%, 100% {\n    transform: scale(0.0);\n    -webkit-transform: scale(0.0);\n  } 40% {\n    transform: scale(1.0);\n    -webkit-transform: scale(1.0);\n  }\n}"

/***/ }),

/***/ "./src/app/components/loading/loading.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/loading/loading.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\">\n  <div class=\"bounce1\"></div>\n  <div class=\"bounce2\"></div>\n  <div class=\"bounce3\"></div>\n</div>\n"

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

module.exports = "\n<div class=\"card-body\" style=\"background-color: #FFFFFF;\">\n\t<!-- Row -->\n\t<div class=\"row\">\n\t   <div class=\"col-lg-12\">\n\t\t<div class=\"card\">\n\t\t   <form class=\"form-horizontal\" role=\"form\">\n\t\t\t<div class=\"form-body\">\n\t\t\t   <div class=\"row\">\n\t\t\t\t\n\t\t\t\t<!-- CARROUSEL IMAGES -->\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div id=\"carouselExampleFade\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">\n\t\t\t\t\t\t<div class=\"carousel-inner\">\n\t\t\t\t\t\t\t<div class=\"carousel-item\" *ngFor=\"let img of book.images; let i=index;\" [ngClass]=\"{'active': i===0}\" >\n\t\t\t\t\t\t\t\t<img class=\"d-block img-carousel\" [src]=\"img\">\n\t\t\t\t\t\t\t</div> \n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<a class=\"carousel-control-prev\" href=\"#carouselExampleFade\" role=\"button\" data-slide=\"prev\">\n\t\t\t\t\t\t\t<span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a class=\"carousel-control-next\" href=\"#carouselExampleFade\" role=\"button\" data-slide=\"next\">\n\t\t\t\t\t\t\t<span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- CARROUSEL IMAGES -->\n   \n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<!-- TITLE -->\n\t\t\t\t   <div class=\"form-group row\">\n\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Título:</label>\n\t\t\t\t\t   <div class=\"col-md-6\">\n\t\t\t\t\t\t<p class=\"form-control-static\"> {{ book.title }} </p>\n\t\t\t\t\t   </div>\n\t\t\t\t   </div>\n\t\t\t\t   \n\t\t\t\t   <!-- AUTHOR -->\n\t\t\t\t   <div class=\"form-group row\">\n\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Autor/a:</label>\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t   <p class=\"form-control-static\"> {{ book.author }} </p>\n\t\t\t\t\t</div>\n\t\t\t\t   </div>\n   \n\t\t\t\t   <!-- TRANSACTION TYPE -->\n\t\t\t\t   <div class=\"form-group row\">\n\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Tipo de transacción:</label>\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t   <p class=\"form-control-static\"> {{ book.transaction }} </p>\n\t\t\t\t\t</div>\n\t\t\t\t   </div>\n   \n\t\t\t\t   <!-- PRICE -->\n\t\t\t\t   <div class=\"form-group row\" *ngIf=\"book.transaction == 'Venta' || book.transaction == 'Both'\">\n\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Precio:</label>\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t   <p class=\"form-control-static\"> {{ book.price | thousands }} </p>\n\t\t\t\t\t</div>\n\t\t\t\t   </div>\n\n\t\t\t\t   <!-- PUBLICATION DATE -->\n\t\t\t\t   <div class=\"form-group row\" *ngIf=\"book.transaction == 'Venta' || book.transaction == 'Both'\">\n\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Fecha de publicación:</label>\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t   <p class=\"form-control-static\"> {{ book.date }} </p>\n\t\t\t\t\t</div>\n\t\t\t\t   </div>\n\n\t\t\t\t   \t<div class=\"form-group row\">\n\t\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Dueño:</label>\n\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t   <p class=\"form-control-static\"> \n\t\t\t\t\t\t\t\t{{ book.user.name | titlecase }} \n\t\t\t\t\t\t\t\t{{ book.user.last_name1 | titlecase }}\n\t\t\t\t\t\t\t\t{{ book.user.last_name2 | titlecase }}\n\t\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t   </div>\n   \n\t\t\t   <!-- ROW DETALLES -->\n\t\t\t   <h3 class=\"box-title\">Detalles</h3>\n\t\t\t   <hr class=\"m-t-0 m-b-40\">\n\t\t\t   <div class=\"row\">\n   \n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t   <!-- TIPO DE ELEMENTO -->\n\t\t\t\t   <div class=\"form-group row\">\n\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Elemento:</label>\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t   <p class=\"form-control-static\"> {{ book.type }} </p>\n\t\t\t\t\t</div>\n\t\t\t\t   </div>\n   \n\t\t\t\t   <!-- GÉNERO -->\n\t\t\t\t   <div class=\"form-group row\">\n\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Género:</label>\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t   <p class=\"form-control-static\"> {{ book.genres }} </p>\n\t\t\t\t\t</div>\n\t\t\t\t   </div>\n   \n\t\t\t\t   <!-- EDITORIAL -->\n\t\t\t\t   <div class=\"form-group row\">\n\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Editorial:</label>\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t   <p class=\"form-control-static\"> {{ book.editorial }} </p>\n\t\t\t\t\t</div>\n\t\t\t\t   </div>\n   \n\t\t\t\t   <!-- IDIOMA -->\n\t\t\t\t   <div class=\"form-group row\">\n\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Idioma:</label>\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t   <p class=\"form-control-static\"> {{ book.language }} </p>\n\t\t\t\t\t</div>\n\t\t\t\t   </div>\n\t\t\t\t</div>\n   \n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t   <!-- ORIGINAL -->\n\t\t\t\t   <div class=\"form-group row\">\n\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Original:</label>\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t   <p class=\"form-control-static\"> {{ book.original }} </p>\n\t\t\t\t\t</div>\n\t\t\t\t   </div>\n   \n\t\t\t\t   <!-- NÚMERO DE PÁGINAS -->\n\t\t\t\t   <div class=\"form-group row\">\n\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Número de páginas:</label>\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t   <p class=\"form-control-static\"> {{ book.num_page }} </p>\n\t\t\t\t\t</div>\n\t\t\t\t   </div>\n   \n\t\t\t\t   <!-- COMENTARIOS -->\n\t\t\t\t   <div class=\"form-group row\">\n\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Comentario:</label>\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t   <p class=\"form-control-static\"> {{ book.comment }} </p>\n\t\t\t\t\t</div>\n\t\t\t\t   </div>\n\t\t\t\t</div>\n\t\t\t   </div>\n\t\t\t</div>\n\t\t   </form>\n\t\t</div>\n\t   </div>\n\t</div>\n\t<!-- Row -->\n   </div>\n   "

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

module.exports = "* {\n  box-sizing: border-box;\n}\n\nbody {\n  padding: 0;\n  margin: 0;\n}\n\n#notfound {\n  position: relative;\n  height: 100vh;\n}\n\n#notfound .notfound {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.notfound {\n  max-width: 520px;\n  width: 100%;\n  line-height: 1.4;\n  text-align: center;\n}\n\n.notfound .notfound-404 {\n  position: relative;\n  height: 240px;\n}\n\n.notfound .notfound-404 h1 {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  font-size: 252px;\n  font-weight: 900;\n  margin: 0px;\n  color: #262626;\n  text-transform: uppercase;\n  letter-spacing: -40px;\n  margin-left: -20px;\n}\n\n.notfound .notfound-404 h1>span {\n  text-shadow: -8px 0px 0px #fff;\n}\n\n.notfound .notfound-404 h3 {\n  position: relative;\n  font-size: 16px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #262626;\n  margin: 0px;\n  letter-spacing: 3px;\n  padding-left: 6px;\n}\n\n.notfound h2 {\n    font-size: 20px;\n    font-weight: 400;\n    color: #000;\n    padding-top: 187px;\n}\n\n.background {\n  height: 158%;\n  width: 100%;\n  background-image: url('Pagenotfound.jpeg');\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: fixed;\n}\n\n@media only screen and (max-width: 767px) {\n  .notfound .notfound-404 {\n    height: 200px;\n  }\n  .notfound .notfound-404 h1 {\n    font-size: 200px;\n  }\n}\n\n@media only screen and (max-width: 480px) {\n  .notfound .notfound-404 {\n    height: 162px;\n  }\n  .notfound .notfound-404 h1 {\n    font-size: 162px;\n    height: 150px;\n    line-height: 162px;\n  }\n  .notfound h2 {\n    font-size: 16px;\n  }\n}\n"

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

module.exports = "<div class=\"container\" style=\"background-color: #ffffff;\">\n\t<h1 style=\"padding-top:30px;\">Agregar libro</h1>\n\t<form class=\"form-material m-t-40\" [formGroup]=\"form\" (ngSubmit)=\"saveBook()\" novalidate=\"novalidate\">\n\t\t<div class=\"row\">\n\t\t\t<!-- Inicio col 1 -->\n\t\t\t<div class=\"col-6\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Título del texto</label>\n\t\t\t\t\t<input type=\"text\" formControlName=\"title\" \n\t\t\t\t\t\t\tclass=\"form-control form-control-line border-input-custom\" placeholder=\"Ej.: Harry Potter\">\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Autor del texto</label>\n\t\t\t\t\t<input type=\"text\" formControlName=\"author\"\n\t\t\t\t\t\t\tclass=\"form-control form-control-line border-input-custom\" placeholder=\"Ej.: J. K. Rowling\">\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Editorial del texto</label>\n\t\t\t\t\t<input type=\"text\" formControlName=\"editorial\"\n\t\t\t\t\t\t\tclass=\"form-control form-control-line border-input-custom\" placeholder=\"Ej.: Salamandra\">\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group border-input-custom\">\n\t\t\t\t\t<label>Tipo de elemento</label>\n\t\t\t\t\t<select class=\"form-control\" formControlName=\"type\">\n\t\t\t\t\t\t<option value=\"Libro\">Libro</option>\n\t\t\t\t\t\t<option value=\"Cómic\">Cómic</option>\n\t\t\t\t\t\t<option value=\"Lectura especializada\">Lectura especializada</option>\n\t\t\t\t\t\t<option value=\"Literatura infantil\">Literatura infantil</option>\n\t\t\t\t\t\t<option value=\"Otro\">Otro</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\n\t\t\t\t<!-- TODO: Dejar esto más bonito -->\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input id=\"file\" type=\"file\" style=\"padding-top: 25px;\" (change)=\"uploadFile($event)\" multiple>\n\t\t\t\t</div>\n\t\t\n\t\t\t</div>\n\t\t\t<!-- Fin col 1  -->\n\t\t\t\t\n\t\t\t<!-- Inicio col 2  -->\n\t\t\t<div class=\"col-6\">\n\t\t\t\t<div class=\"form-group border-input-custom\">\n\t\t\t\t\t<label>Tipo de transacción</label>\n\t\t\t\t\t<select class=\"form-control\" formControlName=\"transaction\">\n\t\t\t\t\t\t<option value=\"Intercambio\">Intercambio</option>\n\t\t\t\t\t\t<option value=\"Venta\">Venta</option>\n\t\t\t\t\t\t<option value=\"Ambos\">Ambos</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group\" *ngIf=\"form.value.transaction === 'Venta'\">\n\t\t\t\t\t<label>Precio</label>\n\t\t\t\t\t<input \tformControlName=\"price\" onlynumber=\"true\" minlength=\"3\" maxlength=\"6\" \n\t\t\t\t\t\t\tclass=\"form-control form-control-line border-input-custom\" placeholder=\"Ej.: 5000\">\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group\" *ngIf=\"form.value.transaction === 'Ambos'\">\n\t\t\t\t\t<label>Precio</label>\n\t\t\t\t\t<input \tformControlName=\"price\" onlynumber=\"true\" minlength=\"3\" maxlength=\"6\" \n\t\t\t\t\t\t\tclass=\"form-control form-control-line border-input-custom\" placeholder=\"Ej.: 5000\">\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group border-input-custom\">\n\t\t\t\t\t<label>Idioma</label>\n\t\t\t\t\t<select class=\"form-control\" \n\t\t\t\t\t\t\tformControlName=\"language\">\n\t\t\t\t\t\t<option value=\"Español\">Español</option>\n\t\t\t\t\t\t<option value=\"Inglés\">Inglés</option>\n\t\t\t\t\t\t<option value=\"Otro\">Otro</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group border-input-custom\" \n\t\t\t\t\t name=\"original\">\n\t\t\t\t\t<label>Texto original</label>\n\t\t\t\t\t<select class=\"form-control\" formControlName=\"original\">\n\t\t\t\t\t\t<option value=\"Sí\">Sí</option>\n\t\t\t\t\t\t<option value=\"No\">No</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Cantidad de páginas</label>\n\t\t\t\t\t<input \tformControlName=\"num_page\" onlynumber=\"true\" minlength=\"2\" maxlength=\"5\" \n\t\t\t\t\t\t\tclass=\"form-control form-control-line border-input-custom\" placeholder=\"Ej.: 324\">\n\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Comentario</label>\n\t\t\t\t\t<textarea class=\"form-control border-input-custom\" formControlName=\"comment\" rows=\"2\" \n\t\t\t\t\t\t\t\tplaceholder=\"Ej.: El libro se encuentra en buen estado, leído solo una vez.\">\n\t\t\t\t\t</textarea>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- Fin col 2  -->\n\t\t</div>\n\n\t\t<div class=\"form-group border-input-custom\">\n\t\t\t<label>Categoría a la que pertenece</label>\n\t\t\t<!-- FIXME: Revisar po jjj -->\n\t\t\t<div class=\"ms-container\" id=\"ms-pre-selected-options\">\n\t\t\t\t<div class=\"ms-selectable\">\n\t\t\t\t\t<select class=\"ms-list contenedor\" multiple='multiple'>\n\t\t\t\t\t\t<option [value]='c' class=\"ms-elem-selectable\" *ngFor=\"let c of categories; let i = index;\"\n\t\t\t\t\t\t\t(click)=\"addCategory(i)\"> {{ c }} </option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ms-selection\">\n\t\t\t\t\t<select class=\"ms-list contenedor\" multiple='multiple' formControlName=\"genres\" style=\"margin-left: 35px;\">\n\t\t\t\t\t\t<option [value]='sc' class=\"ms-elem-selection\" *ngFor=\"let sc of selected_categories; let i = index;\"\n\t\t\t\t\t\t\t(click)=\"removeCategory(i)\"> {{ sc }} </option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\t\t\t\t\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class=\"row justify-content-md-center\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<button type=\"submit\" class=\"btn btn-outline-info\">Guardar</button>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n</div>\n\n\n\n\n\n\t\t\t"

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

module.exports = "/*\nTemplate Name: Admin pro Admin\nAuthor: Wrappixel\nEmail: niravjoshi87@gmail.com\nFile: scss\n*/\n/*\nTemplate Name: Admin Pro Admin\nAuthor: Wrappixel\nEmail: niravjoshi87@gmail.com\nFile: scss\n*/\n/*Theme Colors*/\n/*bootstrap Color*/\n/*Light colors*/\n/*Normal Color*/\n/*Extra Variable*/\n/*******************\nchat application Page\n******************/\n.chat-main-box {\n  position: relative;\n  overflow: hidden; }\n.chat-main-box .chat-left-aside {\n    position: relative;\n    width: 250px;\n    float: left;\n    z-index: 9;\n    top: 0px;\n    border-right: 1px solid rgba(120, 130, 140, 0.13); }\n.chat-main-box .chat-left-aside .open-panel {\n      display: none;\n      cursor: pointer;\n      position: absolute;\n      left: -webkit-calc(100% - 1px);\n      top: 50%;\n      z-index: 100;\n      background-color: #fff;\n      box-shadow: 1px 0 3px rgba(0, 0, 0, 0.2);\n      border-radius: 0 100px 100px 0;\n      line-height: 1;\n      padding: 15px 8px 15px 4px; }\n.chat-main-box .chat-left-aside .chat-left-inner {\n      position: relative; }\n.chat-main-box .chat-left-aside .chat-left-inner .chatonline {\n        position: relative;\n        height: 90%; }\n.chat-main-box .chat-left-aside .chat-left-inner .form-control {\n        height: 60px;\n        padding: 15px;\n        background-image: linear-gradient(#398bf7, #398bf7), linear-gradient(rgba(120, 130, 140, 0.13), rgba(120, 130, 140, 0.13)); }\n.chat-main-box .chat-left-aside .chat-left-inner .style-none {\n        padding: 0px; }\n.chat-main-box .chat-left-aside .chat-left-inner .style-none li {\n          list-style: none;\n          overflow: hidden; }\n.chat-main-box .chat-left-aside .chat-left-inner .style-none li a {\n            padding: 20px; }\n.chat-main-box .chat-left-aside .chat-left-inner .style-none li a:hover, .chat-main-box .chat-left-aside .chat-left-inner .style-none li a.active {\n              background: #ebf3f5; }\n.chat-main-box .chat-right-aside {\n    width: calc(100% - 250px);\n    float: left; }\n.chat-main-box .chat-right-aside .chat-rbox {\n      height: auto;\n      position: relative; }\n.chat-main-box .chat-right-aside .chat-list {\n      max-height: none;\n      height: 100%;\n      padding-top: 40px; }\n.chat-main-box .chat-right-aside .chat-list .chat-text {\n        border-radius: 6px; }\n.chat-main-box .chat-right-aside .send-chat-box {\n      position: relative; }\n.chat-main-box .chat-right-aside .send-chat-box .form-control {\n        border: none;\n        border-top: 1px solid rgba(120, 130, 140, 0.13);\n        resize: none;\n        height: 80px;\n        padding-right: 180px; }\n.chat-main-box .chat-right-aside .send-chat-box .form-control:focus {\n          border-color: rgba(120, 130, 140, 0.13); }\n.chat-main-box .chat-right-aside .send-chat-box .custom-send {\n        position: absolute;\n        right: 20px;\n        bottom: 10px; }\n.chat-main-box .chat-right-aside .send-chat-box .custom-send .cst-icon {\n          color: #67757c;\n          margin-right: 10px; }\n"

/***/ }),

/***/ "./src/app/pages/chats/chats.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/chats/chats.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- ============================================================== -->\n<!-- Start Page Content -->\n<!-- ============================================================== -->\n<div class=\"row\">\n\t<div class=\"col-12\">\n\t\t<div class=\"card m-b-0\">\n\t\t\t<div class=\"chat-main-box\">\n\t\t\t\t<!-- =============================================================== -->\n\t\t\t\t<!-- Left panel\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t -->\n\t\t\t\t<!-- =============================================================== -->\n\t\t\t\t<!-- TODO: Hacer que el panel izq se vea mas grande jiji -->\n\t\t\t\t<div class=\"chat-left-aside\">\n\t\t\t\t\t<div class=\"open-panel\">\n\t\t\t\t\t\t<i class=\"ti-angle-right\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"chat-left-inner\">\n\t\t\t\t\t\t<div class=\"form-material\">\n\t\t\t\t\t\t\t<input class=\"form-control p-20\" type=\"text\" placeholder=\"Buscar Chat\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<ul class=\"chatonline style-none\">\n\t\t\t\t\t\t\t<li *ngFor=\"let c of chats | async\" (click)=\"showMessages(c.key)\">\n\t\t\t\t\t\t\t\t<!-- INTERESADO -->\n\t\t\t\t\t\t\t\t<a *ngIf=\"c !== undefined && uid !== c.uid_interested.uid\">\n\t\t\t\t\t\t\t\t\t<img [src]=\"c.uid_interested.img\" alt=\"user-img\" class=\"img-circle img-circle-30\"> \n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t{{ c.uid_interested.name | titlecase }} \n\t\t\t\t\t\t\t\t\t\t{{ c.uid_interested.last_name1 | titlecase }} \n\t\t\t\t\t\t\t\t\t\t{{ c.uid_interested.last_name2 | titlecase }}\n\t\t\t\t\t\t\t\t\t\t<small class=\"text-muted\">{{ c.book.title | titlecase }}</small>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t\t\t<!-- DUENO -->\n\t\t\t\t\t\t\t\t<a *ngIf=\"c !== undefined && uid !== c.user_owner\">\n\t\t\t\t\t\t\t\t\t<img [src]=\"c.book.user.img\" alt=\"user-img\" class=\"img-circle img-circle-30\"> \n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t{{ c.book.user.name | titlecase }} \n\t\t\t\t\t\t\t\t\t\t{{ c.book.user.last_name1 | titlecase }} \n\t\t\t\t\t\t\t\t\t\t{{ c.book.user.last_name2 | titlecase }}\n\t\t\t\t\t\t\t\t\t\t<small class=\"text-muted\">{{ c.book.title | titlecase }}</small>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- =============================================================== -->\n\t\t\t\t<!-- End left panel\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t -->\n\t\t\t\t<!-- =============================================================== -->\n\n\t\t\t\t<!-- =============================================================== -->\n\t\t\t\t<!-- Right panel\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t -->\n\t\t\t\t<!-- =============================================================== -->\n\t\t\t\t<div class=\"chat-right-aside\">\n\t\t\t\t\t<div class=\"chat-main-header\">\n\t\t\t\t\t\t<div class=\"p-20 b-b\">\n\t\t\t\t\t\t\t<h3 class=\"box-title\">Chat Message</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t<div class=\"chat-rbox\">\n\t\t\t\t\t<ul class=\"chat-list p-20\">\n\t\t\t\t\t\t<!--chat Row -->\n\t\t\t\t\t\t<div *ngFor=\"let text of message.text; let i = index;\">\n\n\t\t\t\t\t\t\t<!-- DERECHA USUARIO ACTIVO -->\n\t\t\t\t\t\t\t<li class=\"reverse\">\n\t\t\t\t\t\t\t\t<!-- DUEÑO -->\n\t\t\t\t\t\t\t\t<div *ngIf=\"message.user_owner === uid && text[message.user_owner] !== undefined\"> \n\t\t\t\t\t\t\t\t\t<div class=\"chat-time\">{{ message.date }}</div>\n\t\t\t\t\t\t\t\t\t<div class=\"chat-content\">\n\t\t\t\t\t\t\t\t\t\t<h5>\n\t\t\t\t\t\t\t\t\t\t\t{{ message.book.user.name | titlecase }} \n\t\t\t\t\t\t\t\t\t\t\t{{ message.book.user.last_name1 | titlecase }} \n\t\t\t\t\t\t\t\t\t\t\t{{ message.book.user.last_name2 | titlecase }}\n\t\t\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"box bg-light-inverse\">{{ text[message.user_owner] }}\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"chat-img\">\n\t\t\t\t\t\t\t\t\t\t<img [src]=\"message.book.user.img\" class=\"img-circle-40\"/>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<!-- INTERESADO -->\n\t\t\t\t\t\t\t\t<div *ngIf=\"message.uid_interested.uid === uid && text[message.uid_interested.uid] !== undefined\">\n\t\t\t\t\t\t\t\t\t<div class=\"chat-time\">{{ message.date }}</div>\n\t\t\t\t\t\t\t\t\t<div class=\"chat-content\">\n\t\t\t\t\t\t\t\t\t\t<h5>\n\t\t\t\t\t\t\t\t\t\t\t{{ message.uid_interested.name | titlecase }} \n\t\t\t\t\t\t\t\t\t\t\t{{ message.uid_interested.last_name1 | titlecase }} \n\t\t\t\t\t\t\t\t\t\t\t{{ message.uid_interested.last_name2 | titlecase }}\n\t\t\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t\t\t<div class=\"box bg-light-inverse\" *ngIf=\"i === 0; else answer;\">\n\t\t\t\t\t\t\t\t\t\t\t{{ text[message.uid_interested.uid] }} <br>\n\t\t\t\t\t\t\t\t\t\t\tLibro: {{  message.book.title }} <br>\n\t\t\t\t\t\t\t\t\t\t\tTransacción: {{ message.transaction }} <br>\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"message.transaction === 'Venta'\">Valor: {{ message.price }} <br></span>\n\t\t\t\t\t\t\t\t\t\t\tLugar y horario: {{ message.pref }} <br>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<ng-template #answer> \n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box bg-light-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t {{ text[message.uid_interested.uid] }} </div>\t\n\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"chat-img\">\n\t\t\t\t\t\t\t\t\t\t<img [src]=\"message.uid_interested.img\" class=\"img-circle-40\"/>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\n\t\t\t\t\t\t\t<!-- IZQUIERDA -->\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<!-- INTERESADO -->\n\t\t\t\t\t\t\t\t<div *ngIf=\"message.uid_interested.uid !== uid && text[message.uid_interested.uid] !== undefined\">\n\t\t\t\t\t\t\t\t\t<div class=\"chat-img\">\n\t\t\t\t\t\t\t\t\t\t<img [src]=\"message.uid_interested.img\" class=\"img-circle-40\"/>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"chat-content\">\n\t\t\t\t\t\t\t\t\t\t<h5> \n\t\t\t\t\t\t\t\t\t\t\t{{ message.uid_interested.name | titlecase }} \n\t\t\t\t\t\t\t\t\t\t\t{{ message.uid_interested.last_name1 | titlecase }} \n\t\t\t\t\t\t\t\t\t\t\t{{ message.uid_interested.last_name2 | titlecase }}\n\t\t\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t\t\t<div class=\"box bg-light-info\" *ngIf=\"i === 0; else answer;\">\n\t\t\t\t\t\t\t\t\t\t\t{{ text[message.uid_interested.uid] }} <br>\n\t\t\t\t\t\t\t\t\t\t\tLibro: {{  message.book.title }} <br>\n\t\t\t\t\t\t\t\t\t\t\tTransacción: {{ message.transaction }} <br>\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"message.transaction === 'Venta'\">Valor: {{ message.price }} <br></span>\n\t\t\t\t\t\t\t\t\t\t\tLugar y horario: {{ message.pref }} <br>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<ng-template #answer> \n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box bg-light-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t {{ text[message.uid_interested.uid] }} </div>\t\n\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"chat-time\">{{ message.date }}</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<!-- DUEÑO -->\n\t\t\t\t\t\t\t\t<div *ngIf=\"message.user_owner !== uid && text[message.user_owner] !== undefined\">\n\t\t\t\t\t\t\t\t\t<div class=\"chat-img\">\n\t\t\t\t\t\t\t\t\t\t<img [src]=\"message.book.user.img\" class=\"img-circle-40\"/>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"chat-content\">\n\t\t\t\t\t\t\t\t\t\t<h5> \n\t\t\t\t\t\t\t\t\t\t\t{{ message.book.user.name | titlecase }} \n\t\t\t\t\t\t\t\t\t\t\t{{ message.book.user.last_name1 | titlecase }} \n\t\t\t\t\t\t\t\t\t\t\t{{ message.book.user.last_name2 | titlecase }}\n\t\t\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t\t\t<div class=\"box bg-light-info\">{{ text[message.user_owner] }} </div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"chat-time\">{{ message.date }}</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-body b-t\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-8\">\n\t\t\t\t\t\t\t<textarea [(ngModel)]=\"text_answer\" name=\"text_answer\" placeholder=\"Escribe tu respuesta aquí...\" class=\"form-control b-0\"></textarea>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-4 text-right\">\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-info btn-circle btn-lg\" (click)=\"sendMessage(message, text_answer)\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-paper-plane-o\"></i> \n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- =============================================================== -->\n\t\t\t\t<!-- End right panel\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t -->\n\t\t\t\t<!-- =============================================================== -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n<div>\n<!-- ============================================================== -->\n<!-- End PAge Content -->\n<!-- ============================================================== -->"

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

module.exports = "<!-- ============================================================================== -->\n<!-- Options view bar\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n<!-- ============================================================================== -->\n<div class=\"container mb-3\">\n\t<div class=\"row text-center\">\n\t\t<div class=\"col-12\">\n\t\t\t<div class=\"btn-group mr-2\" role=\"group\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" \n\t\t\t\t\t\t\t\t[ngClass]=\"{'active': view_bar === 'all'}\"\n\t\t\t\t\t\t\t\t(click)=\"view_bar = 'all'\">\n\t\t\t    \tTodos\n\t\t\t\t</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" \n\t\t\t\t\t\t\t\t[ngClass]=\"{'active': view_bar === 'exchange'}\"\n\t\t\t\t\t\t\t\t(click)=\"view_bar = 'exchange'\">\n\t\t\t    \tIntercambio\n\t\t\t\t</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" \n\t\t\t\t\t\t\t\t[ngClass]=\"{'active': view_bar === 'sales'}\"\n\t\t\t\t\t\t\t\t(click)=\"view_bar = 'sales'\">\n\t\t\t    \tVentas\n\t\t\t\t</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" \n\t\t\t\t\t\t\t\t[ngClass]=\"{'active': view_bar === 'both'}\"\n\t\t\t\t\t\t\t\t(click)=\"view_bar = 'both'\">\n\t\t\t\t\tAmbos\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- ============================================================================== -->\n<!-- End options view bar\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n<!-- ============================================================================== -->\n\n<!-- ============================================================================== -->\n<!-- Cards according to view bar\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n<!-- ============================================================================== -->\n<div [ngSwitch]=\"view_bar\">\n\t<div *ngSwitchCase=\"'all'\">\n\t\t<app-card-book type=\"all\" [booksHome]=\"books\"></app-card-book>\n\t</div>\n\t<div *ngSwitchCase=\"'exchange'\">\n\t\t<app-card-book type=\"Intercambio\" [booksHome]=\"books\"></app-card-book>\n\t</div>\n\t<div *ngSwitchCase=\"'sales'\">\n\t\t<app-card-book type=\"Venta\" [booksHome]=\"books\"></app-card-book>\n\t</div>\n\t<div *ngSwitchCase=\"'both'\">\n\t\t<app-card-book type=\"Ambos\" [booksHome]=\"books\"></app-card-book>\n\t</div>\n</div>\n<!-- ============================================================================== -->\n<!-- End cards according to view bar\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n<!-- ============================================================================== -->\n"

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

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<!-- ============================================================================================== -->\n\t\t<!-- Column left: List of books\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t<!-- ============================================================================================== -->\n\t\t<div class=\"col-4\">\n\t\t\t<h3>Mis libros</h3>\n\t\t\t<ul class=\"list-group\">\n\t\t\t\t<li class=\"list-group-item\" style=\"cursor: pointer;\" \n\t\t\t\t\t*ngFor=\"let book of books\"\n\t\t\t\t\t[ngClass]=\"{'active': book.id === book_modal.id}\"\n\t\t\t\t\t(click)=\"book_modal = book\">\n\t\t\t\t\t{{ book.title | titlecase }}\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<!-- ============================================================================================== -->\n\t\t<!-- End column left: List of books\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t<!-- ============================================================================================== -->\n\n\t\t<!-- ============================================================================================== -->\n\t\t<!-- Column right: Selected book details\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t<!-- ============================================================================================== -->\n\t\t<div class=\"col-8\">\n\t\t\t<div class=\"card-body\" style=\"background-color: #FFFFFF;\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t<div class=\"card\" *ngIf=\"book_modal.title !== ''; else other\">\n\t\t\t\t\t\t\t<form class=\"form-horizontal\" role=\"form\">\n\t\t\t\t\t\t\t\t<!-- ROW PRINCIPAL -->\n\t\t\t\t\t\t\t\t<div class=\"form-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<!-- CARROUSEL BOOK IMAGES -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"carouselExampleFade\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"carousel-inner\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"carousel-item\" *ngFor=\"let img of book_modal.images; let i=index;\" [ngClass]=\"{'active': i===0}\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"d-block img-carousel\" [src]=\"img\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> \n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"carousel-control-prev\" href=\"#carouselExampleFade\" role=\"button\" data-slide=\"prev\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"carousel-control-next\" href=\"#carouselExampleFade\" role=\"button\" data-slide=\"next\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- CARROUSEL BOOK IMAGES -->\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t<!-- TÍTULO LIBRO -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Título:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"form-control-static\"> {{ book_modal.title | titlecase }} </p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- AUTOR/A LIBRO -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Autor/a:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"form-control-static\"> {{ book_modal.author | titlecase }} </p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- TIPO DE TRANSACCIÓN -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Tipo de transacción:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"form-control-static\"> {{ book_modal.transaction }} </p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- PRECIO LIBRO -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"book_modal.transaction === 'Venta' || book_modal.transaction === 'Ambos'\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Precio:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"form-control-static\"> ${{ book_modal.price | thousands }} </p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<!-- ROW DETALLES -->\n\t\t\t\t\t\t\t\t<h3 class=\"box-title\">Detalles</h3>\n\t\t\t\t\t\t\t\t<hr class=\"m-t-0 m-b-40\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<!-- TIPO DE ELEMENTO -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Elemento:</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"form-control-static\"> {{ book_modal.type }} </p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- GÉNERO -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Género:</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"form-control-static\"> {{ book_modal.genres }} </p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- EDITORIAL -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Editorial:</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"form-control-static\"> {{ book_modal.editorial | titlecase }} </p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- IDIOMA -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Idioma:</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"form-control-static\"> {{ book_modal.language }} </p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<!-- ORIGINAL -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Original:</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"form-control-static\"> {{ book_modal.original }} </p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- NÚMERO DE PÁGINAS -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Número de páginas:</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"form-control-static\"> {{ book_modal.num_page }} </p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- COMENTARIOS -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label text-left col-md-6\">Comentario:</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"form-control-static\"> {{ book_modal.comment }} </p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"form-actions\">\n\t\t\t\t\t\t\t\t\t<div class=\"row justify-content-md-center\">\n\t\t\t\t\t\t\t\t\t\t<!-- BOTÓN EDITAR -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 text-center\">\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-outline-info model_img img-responsive\" \n\t\t\t\t\t\t\t\t\t\t\t\t\tdata-toggle=\"modal\" \n\t\t\t\t\t\t\t\t\t\t\t\t\tdata-target=\".bs-example-modal-lg\" \n\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"button\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-pencil\"></i> Editar</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- BOTÓN ELIMINAR -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 text-center\">\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-danger img-responsive\" type=\"button\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"deleteBook()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-trash-o\"></i> Eliminar</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\"> </div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ng-template #other>\n\t\t\t\t\t\t<div class=\"alert alert-primary\" role=\"alert\">\n\t\t\t\t\t\t\tDebe seleccionar un libro\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- ============================================================================================== -->\n\t\t<!-- End column right: Selected book details\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t<!-- ============================================================================================== -->\n\t</div>\n</div>\n\n<!-- ================================================================================================== -->\n<!-- Modal edit/delete book\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n<!-- ================================================================================================== -->\n<div id=\"openModal\" class=\"modal fade bs-example-modal-lg\">\n\t<div class=\"modal-dialog modal-lg\">\n\t\t<div class=\"modal-content\">\n\t\t\t\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h4 class=\"modal-title\" id=\"myLargeModalLabel\"> {{ book_modal.title | titlecase }} </h4>\n\t\t\t\t<!-- Botón para cerrar el modal -->\n\t\t\t\t<button _ngcontent-c0=\"\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\n\t\t\t\t\t<span _ngcontent-c0=\"\" aria-hidden=\"true\">×</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<form class=\"form-material m-t-40\" >\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<!-- Inicio col 1 -->\n\t\t\t\t\t\t<div class=\"col-6\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label>Título</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"book_modal.title\" name=\"title\" \n\t\t\t\t\t\t\t\t\t\tclass=\"form-control form-control-line border-input-custom\" placeholder=\"Ej.: Harry Potter\">\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label>Autor/a</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"book_modal.author\" name=\"author\"\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control form-control-line border-input-custom\" placeholder=\"Ej.: J. K. Rowling\">\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label>Editorial</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"book_modal.editorial\" name=\"editorial\"\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control form-control-line border-input-custom\" placeholder=\"Ej.: Salamandra\">\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"form-group border-input-custom\">\n\t\t\t\t\t\t\t\t<label>Tipo de transacción</label>\n\t\t\t\t\t\t\t\t<select class=\"form-control\" [(ngModel)]=\"book_modal.transaction\"\tname=\"transaction\">\n\t\t\t\t\t\t\t\t\t<option value=\"Intercambio\">Intercambio</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Venta\">Venta</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Ambos\">Ambos</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"form-group\" \n\t\t\t\t\t\t\t\t\t\t*ngIf=\"book_modal.transaction === 'Venta' || book_modal.transaction === 'Ambos'\">\n\t\t\t\t\t\t\t\t<label>Precio</label>\n\t\t\t\t\t\t\t\t<input [(ngModel)]=\"book_modal.price\" name=\"price\" onlynumber=\"true\" minlength=\"3\" maxlength=\"6\" \n\t\t\t\t\t\t\t\t\t\tclass=\"form-control form-control-line border-input-custom\" placeholder=\"Ej.: 5000\" required>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"form-group border-input-custom\">\n\t\t\t\t\t\t\t\t<label>Tipo de elemento</label>\n\t\t\t\t\t\t\t\t<select class=\"form-control\" [(ngModel)]=\"book_modal.type\" name=\"type\">\n\t\t\t\t\t\t\t\t\t<option value=\"Libro\">Libro</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Cómic\">Cómic</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Lectura especializada\">Lectura especializada</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Literatura infantil\">Literatura infantil</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Otro\">Otro</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<!-- Inicio col 2 -->\n\t\t\t\t\t\t<div class=\"col-6\">\n\t\t\t\t\t\t\t<div class=\"form-group border-input-custom\">\n\t\t\t\t\t\t\t\t<label>Género al que pertenece</label>\n\t\t\t\t\t\t\t\t<select class=\"form-control\" [(ngModel)]=\"book_modal.genres\" name=\"genres\" multiple>\n\t\t\t\t\t\t\t\t\t<option value=\"1\">1</option>\n\t\t\t\t\t\t\t\t\t<option value=\"2\">2</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Lectura especializada\">Lectura especializada</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Literatura infantil\">Literatura infantil</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Otro\">Otro</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"form-group border-input-custom\">\n\t\t\t\t\t\t\t\t<label>Idioma</label>\n\t\t\t\t\t\t\t\t<select class=\"form-control\" [(ngModel)]=\"book_modal.language\" name=\"language\">\n\t\t\t\t\t\t\t\t\t<option value=\"Español\">Español</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Inglés\">Inglés</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Otro\">Otro</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"form-group border-input-custom\">\n\t\t\t\t\t\t\t\t<label>Texto original</label>\n\t\t\t\t\t\t\t\t<select class=\"form-control\" [(ngModel)]=\"book_modal.original\" name=\"original\">\n\t\t\t\t\t\t\t\t\t<option value=\"Sí\">Sí</option>\n\t\t\t\t\t\t\t\t\t<option value=\"No\">No</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label>Cantidad de páginas</label>\n\t\t\t\t\t\t\t\t<input \t[(ngModel)]=\"book_modal.num_page\"\tname=\"num_pages\" onlynumber=\"true\" minlength=\"2\" maxlength=\"5\" \n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control form-control-line border-input-custom\" placeholder=\"Ej.: 324\"\trequired>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label>Comentario</label>\n\t\t\t\t\t\t\t\t<textarea class=\"form-control border-input-custom\" [(ngModel)]=\"book_modal.comment\" name=\"comment\" rows=\"2\" \n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Ej.: El libro se encuentra en buen estado, leído solo una vez.\">\n\t\t\t\t\t\t\t\t</textarea>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<!-- TODO: Agregar el editar las categorías -->\n\t\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-outline-info\" (click)=\"updateBook()\">Editar</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-danger waves-effect text-left\" data-dismiss=\"modal\">Close</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- ================================================================================================== -->\n<!-- End modal edit/delete book\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n<!-- ================================================================================================== -->"

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

module.exports = "\n<div id=\"main-wrapper\">\n\t<app-header></app-header>\n\t<app-sidebar></app-sidebar>\n\n\t<!-- ============================================================== -->\n\t<!-- Page wrapper  -->\n\t<!-- ============================================================== -->\n\t<div class=\"page-wrapper\">\n\t\t<!-- ============================================================== -->\n\t\t<!-- Container fluid  -->\n\t\t<!-- ============================================================== -->\n\t\t<div class=\"container-fluid\">\n\n\t\t\t<!-- ============================================================== -->\n\t\t\t<!-- Start Page Content -->\n\t\t\t<!-- ============================================================== -->\n\t\t\t<router-outlet></router-outlet>\n\t\t\t<!-- ============================================================== -->\n\t\t\t<!-- End Page Content -->\n\t\t\t<!-- ============================================================== -->\n\t\t</div>\n\t\t<!-- ============================================================== -->\n\t\t<!-- END Container fluid  -->\n\t\t<!-- ============================================================== -->\n\t</div>\n\t<!-- ============================================================== -->\n\t<!-- END Page wrapper  -->\n\t<!-- ============================================================== -->\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- Barra de opción de vistas -->\n<!-- <div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-4\"></div>\n\t\t<div class=\"col-4\">\n\t\t\t<div class=\"btn-group btn-group-toggle\">\n\t\t\t\t<label class=\"btn btn-secondary active\">\n\t\t\t\t\t\t<a href=\"#\" class=\"\">Todos</a>\n\t\t\t\t\t</label>\n\t\t\t\t\t<label class=\"btn btn-secondary\">\n\t\t\t\t\t\t<a href=\"#\" class=\"\">Intercambio</a>\n\t\t\t\t\t</label>\n\t\t\t\t<label class=\"btn btn-secondary\">\n\t\t\t\t\t\t<a href=\"#\" class=\"\">Ventas</a>\n\t\t\t\t</label>\n\t\t\t\t<label class=\"btn btn-secondary\">\n\t\t\t\t\t\t<a href=\"#\" class=\"\">Ambos</a>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-4\"></div>\n\t</div>\n</div>\n -->\n\n\n<!-- <app-card-book></app-card-book> -->\n\n<!-- <app-add-book></app-add-book> -->\n\n\n<!-- [heroe] es el nombre de la propiedad y \"heroe\" es el nombre de la variable local -->\n<!-- <app-books-card [book]=\"heroe\" [index]=\"i\" *ngFor=\"let book of books; let i = index\"></app-books-card> -->\n\n\n"

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

module.exports = "<div class=\"container\">\n\t<div class=\"row card\">\n\t\t<!-- ================================================================================================== -->\n\t\t<!-- Profile options\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t<!-- ================================================================================================== -->\n\t\t<ul class=\"nav nav-tabs customtab\" role=\"tablist\">\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a \tclass=\"nav-link\" data-toggle=\"tab\" role=\"tab\" aria-expanded=\"true\"\n\t\t\t\t\t[ngClass]=\"{'active': profile_options === 'my_profile'}\"\n\t\t\t\t\t(click)=\"profile_options = 'my_profile'\">\n\t\t\t\t\t<span class=\"hidden-xs-down\">Mi perfil</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a \tclass=\"nav-link\" data-toggle=\"tab\" role=\"tab\" aria-expanded=\"true\"\n\t\t\t\t\t[ngClass]=\"{'active': profile_options === 'edit_profile'}\"\n\t\t\t\t\t(click)=\"profile_options = 'edit_profile'\">\n\t\t\t\t\t<span class=\"hidden-xs-down\">Editar perfil</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a \tclass=\"nav-link\" data-toggle=\"tab\" role=\"tab\" aria-expanded=\"true\"\n\t\t\t\t\t[ngClass]=\"{'active': profile_options === 'preference_profile'}\"\n\t\t\t\t\t(click)=\"profile_options = 'preference_profile'\">\n\t\t\t\t\t<span class=\"hidden-xs-down\">Preferencias de entrega</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a \tclass=\"nav-link\" data-toggle=\"tab\" role=\"tab\" aria-expanded=\"true\"\n\t\t\t\t\t[ngClass]=\"{'active': profile_options === 'delete_profile'}\"\n\t\t\t\t\t(click)=\"profile_options = 'delete_profile'\">\n\t\t\t\t\t<span class=\"hidden-xs-down\">Eliminar cuenta</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t</ul>\n\t\t<!-- ================================================================================================== -->\n\t\t<!-- End profile options\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t<!-- ================================================================================================== -->\n\n\n\t\t<div [ngSwitch]=\"profile_options\">\n\t\t\t<!-- ============================================================================================== -->\n\t\t\t<!-- Show profile\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t<!-- ============================================================================================== -->\n\t\t\t<div *ngSwitchCase=\"'my_profile'\">\n\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6\" align=\"center\">\n\t\t\t\t\t\t\t\t<img [src]=\"profile.img\" class=\"img-circle\" width=\"300\" />\n\t\t\t\t\t\t\t\t<h4 class=\"card-title\">\n\t\t\t\t\t\t\t\t\t{{ profile.name | titlecase }} {{ profile.last_name1 | titlecase }} {{ profile.last_name2 | titlecase }} </h4>\n\t\t\t\t\t\t\t\t<h6 class=\"card-subtitle\">Accoubts Manager Amix corp</h6>\n\t\t\t\t\t\t\t\t<div class=\"row text-center justify-content-md-center\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-book\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<font class=\"font-medium\"> {{ count_book }}</font>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t<small class=\"text-muted\">Correo electrónico</small>\n\t\t\t\t\t\t\t\t<h6>{{ profile.email }}</h6>\n\t\t\t\t\t\t\t\t<small class=\"text-muted p-t-30 db\">Teléfono de contacto</small>\n\t\t\t\t\t\t\t\t<h6>{{ profile.phone }}</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- TODO: Revisar que esté aparezcan todas las cat. Copiar en modal de cardbook -->\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<small class=\"text-muted\">Categorías favoritas:</small>\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<h6>{{ profile.categories }}</h6>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"dropdown-divider\"></div>\n\n\t\t\t\t\t\t\t<small class=\"text-muted p-t-30 db\">Redes sociales</small><br/>\n\t\t\t\t\t\t\t<button class=\"btn btn-circle btn-secondary\"><i class=\"fa fa-facebook\"></i></button>\n\t\t\t\t\t\t\t<button class=\"btn btn-circle btn-secondary\"><i class=\"fa fa-twitter\"></i></button>\n\t\t\t\t\t\t\t<button class=\"btn btn-circle btn-secondary\"><i class=\"fa fa-youtube\"></i></button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- ============================================================================================== -->\n\t\t\t<!-- End show profile\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t<!-- ============================================================================================== -->\n\n\t\t\t<!-- ============================================================================================== -->\n\t\t\t<!-- Edit profile\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t<!-- ============================================================================================== -->\n\t\t\t<div *ngSwitchCase=\"'edit_profile'\">\n\t\t\t\t<div style=\"background-color: #FFFFFF;\" class=\"tab-pane active\" role=\"tabpanel\" aria-expanded=\"true\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<form class=\"form-horizontal form-material\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"col-md-12\">Nombres</label>\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"profile.name\" name=\"name\" class=\"form-control form-control-line\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"col-md-12\">Apellido Paterno</label>\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"profile.last_name1\" name=\"last_name1\" class=\"form-control form-control-line\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"col-md-12\">Apellido Materno</label>\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"profile.last_name2\" name=\"last_name2\" class=\"form-control form-control-line\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"example-email\" class=\"col-md-12\">Correo electrónico</label>\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t<input type=\"email\" [(ngModel)]=\"profile.email\" name=\"email\" class=\"form-control form-control-line\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"col-md-12\">Teléfono de contacto</label>\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"profile.phone\" name=\"phone\" class=\"form-control form-control-line\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"form-group col-md-12\">\n\t\t\t\t\t\t\t\t<input type=\"file\" (change)=\"uploadFile($event)\" id=\"file\">\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-info btn-block\" (click)=\"updateProfile()\">Editar</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- ============================================================================================== -->\n\t\t\t<!-- End edit profile\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t<!-- ============================================================================================== -->\n\n\t\t\t<!-- ============================================================================================== -->\n\t\t\t<!-- User preferences\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t<!-- ============================================================================================== -->\n\t\t\t<div *ngSwitchCase=\"'preference_profile'\">\n\t\t\t\t<div style=\"background-color: #FFFFFF;\" class=\"tab-pane active\" id=\"settings\" role=\"tabpanel\" aria-expanded=\"true\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t\t\t<table class=\"table color-table info-table\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Estación de metro</th>\n\t\t\t\t\t\t\t\t\t\t<th>Día</th>\n\t\t\t\t\t\t\t\t\t\t<th>Horario</th>\n\t\t\t\t\t\t\t\t\t\t<th class=\"text-nowrap\">Acción</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let p of preferences; let i = index;\">\n\t\t\t\t\t\t\t\t\t\t<td> {{ p.subway_station }} </td>\n\t\t\t\t\t\t\t\t\t\t<td> {{ p.day }} </td>\n\t\t\t\t\t\t\t\t\t\t<td> {{ p.hour }} </td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-nowrap\">\n\t\t\t\t\t\t\t\t\t\t\t<!-- TODO: Falta hacer que esto funcione -->\n\t\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"modal\" data-target=\"#editPreferences\" (click)=\"preferences_modal = p\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-pencil text-inverse m-r-10\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"modal\" data-target=\"#deletePreferences\" (click)=\"deletePreference(i)\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-close text-danger\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<button type=\"button\"\n\t\t\t\t\t\t\t\tclass=\"btn btn-outline-info\"\n\t\t\t\t\t\t\t\tdata-toggle=\"modal\"\n\t\t\t\t\t\t\t\tdata-target=\"#addPreferences\">Agregar nueva preferencia</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- ============================================================================================== -->\n\t\t\t<!-- End user preferences\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t<!-- ============================================================================================== -->\n\n\t\t\t<!-- ============================================================================================== -->\n\t\t\t<!-- Delete user account\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t<!-- ============================================================================================== -->\n\t\t\t<div *ngSwitchCase=\"'delete_profile'\">\n\t\t\t\t<div style=\"background-color: #FFFFFF;\" class=\"tab-pane active\" id=\"settings\" role=\"tabpanel\" aria-expanded=\"true\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<p>Estás por eliminar tu cuenta de BOOKscalo. Tus datos, tu perfil público y las publicaciones que realizaste ya no podrán ser vistas por ti, ni por ningún otro usuario.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>Además debes considerar:</p>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li type=\"circle\">Si solo quieres cambiar tus datos, no es necesario que desactives tu cuenta; modifícala en \"Editar perfil\".</li>\n\t\t\t\t\t\t\t<li type=\"circle\">Si solo quieres eliminar o editar una o todas tus publicaciones, no es necesario que desactives tu cuenta; elimínalos o edítalos en \"Mi Biblioteca\".</li>\n\t\t\t\t\t\t\t<li type=\"circle\">No podrás crear otra cuenta con el mismo correo con que iniciaste esta cuenta.</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn waves-effect waves-light btn-block btn-danger\" (click)=\"deleteAccount()\">\n\t\t\t\t\t\t\t<i class=\"fa fa-warning\"></i> Eliminar cuenta</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- ============================================================================================== -->\n\t\t\t<!-- End delete user account\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t<!-- ============================================================================================== -->\n\t\t</div>\n\t</div>\n</div>\n\n<!-- ================================================================================================== -->\n<!-- Modal add preferences\t\t\t\t\t\t\t\t\t\t                                      \t\t\t\t\t\t\t\t\t\t-->\n<!-- ================================================================================================== -->\n<div id=\"addPreferences\" class=\"modal fade bs-example-modal-lg\">\n\t<div class=\"modal-dialog modal-lg\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h4 class=\"modal-title\" id=\"myLargeModalLabel\"> Agregar nueva preferencia de transacción </h4>\n\t\t\t\t<button _ngcontent-c0=\"\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\n\t\t\t\t\t<span _ngcontent-c0=\"\" aria-hidden=\"true\">×</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<form class=\"form-material m-t-40\" [formGroup]=\"form\" (ngSubmit)=\"addPreference()\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<!-- Inicio col 1 -->\n\t\t\t\t\t\t<div class=\"form-group col-12\">\n\t\t\t\t\t\t\t<label>Estación de metro</label>\n\t\t\t\t\t\t\t<select formControlName=\"subway_station\" id=\"subway_station\" class=\"form-control\">\n\t\t\t\t\t\t\t\t<optgroup label=\"Línea 1\">\n\t\t\t\t\t\t\t\t\t<option value=\"República\">República</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Los Héroes\">Los Héroes</option>\n\t\t\t\t\t\t\t\t\t<option value=\"La Moneda\">La Moneda</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Universidad de Chile\">Universidad de Chile</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Santa Lucía\">Santa Lucía</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Universidad Católica\">Universidad Católica</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Baquedano\">Baquedano</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Salvador\">Salvador</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Manuel Montt\">Manuel Montt</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Pedro de Valdivia\">Pedro de Valdivia</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Los Leones\">Los Leones</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Tobalaba\">Tobalaba</option>\n\t\t\t\t\t\t\t\t</optgroup>\n\t\t\t\t\t\t\t\t<optgroup label=\"Línea 5\">\n\t\t\t\t\t\t\t\t\t<option value=\"Quinta Normal\">Quinta Normal</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Cumming\">Cumming</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Santa Ana\">Santa Ana</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Plaza de Armas\">Plaza de Armas</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Bellas Artes\">Bellas Artes</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Baquedano\">Baquedano</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Parque Bustamante\">Parque Bustamante</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Santa Isabel\">Santa Isabel</option>\n\t\t\t\t\t\t\t\t</optgroup>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t\t\t<label>Tipo de elemento</label>\n\t\t\t\t\t\t\t<select formControlName=\"day\" id=\"day\" class=\"form-control\">\n\t\t\t\t\t\t\t\t<option value=\"Lunes\">Lunes</option>\n\t\t\t\t\t\t\t\t<option value=\"Martes\">Martes</option>\n\t\t\t\t\t\t\t\t<option value=\"Miércoles\">Miércoles</option>\n\t\t\t\t\t\t\t\t<option value=\"Jueves\">Jueves</option>\n\t\t\t\t\t\t\t\t<option value=\"Viernes\">Viernes</option>\n\t\t\t\t\t\t\t\t<option value=\"Sábado\">Sábado</option>\n\t\t\t\t\t\t\t\t<option value=\"Domingo\">Domingo</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t\t\t<label>Hora</label>\n\t\t\t\t\t\t\t<input formControlName=\"hour\" class=\"form-control\" type=\"time\" value=\"12:00\" id=\"hour\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-outline-info\" data-dismiss=\"modal\" (click)=\"addPreference()\">Agregar</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-danger waves-effect text-left\" data-dismiss=\"modal\">Cerrar</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- ================================================================================================== -->\n<!-- End modal add preferences\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n<!-- ================================================================================================== -->\n\n\n<!-- ================================================================================================== -->\n<!-- Modal edit preferences\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n<!-- ================================================================================================== -->\n<div id=\"editPreferences\" class=\"modal fade bs-example-modal-lg\">\n\t\t<div class=\"modal-dialog modal-lg\">\n\t\t\t<div class=\"modal-content\">\n\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t<h4 class=\"modal-title\" id=\"myLargeModalLabel\"> Editar preferencia de transacción </h4>\n\t\t\t\t\t<button _ngcontent-c0=\"\" aria-label=\"Close\" class=\"close\" data-dismiss=\"modal\" type=\"button\">\n\t\t\t\t\t\t<span _ngcontent-c0=\"\" aria-hidden=\"true\">×</span>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t<form class=\"form-material m-t-40\" >\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<!-- Inicio col 1 -->\n\t\t\t\t\t\t\t<div class=\"form-group col-12\">\n\t\t\t\t\t\t\t\t<label>Estación de metro</label>\n\t\t\t\t\t\t\t\t<select name=\"subway_station\" [(ngModel)]=\"preferences_modal.subway_station\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t<optgroup label=\"Línea 1\">\n\t\t\t\t\t\t\t\t\t\t<option value=\"República\">República</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Los Héroes\">Los Héroes</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"La Moneda\">La Moneda</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Universidad de Chile\">Universidad de Chile</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Santa Lucía\">Santa Lucía</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Universidad Católica\">Universidad Católica</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Baquedano\">Baquedano</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Salvador\">Salvador</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Manuel Montt\">Manuel Montt</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Pedro de Valdivia\">Pedro de Valdivia</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Los Leones\">Los Leones</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Tobalaba\">Tobalaba</option>\n\t\t\t\t\t\t\t\t\t</optgroup>\n\t\t\t\t\t\t\t\t\t<optgroup label=\"Línea 5\">\n\t\t\t\t\t\t\t\t\t\t<option value=\"Quinta Normal\">Quinta Normal</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Cumming\">Cumming</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Santa Ana\">Santa Ana</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Plaza de Armas\">Plaza de Armas</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Bellas Artes\">Bellas Artes</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Baquedano\">Baquedano</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Parque Bustamante\">Parque Bustamante</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"Santa Isabel\">Santa Isabel</option>\n\t\t\t\t\t\t\t\t\t</optgroup>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t\t\t\t<label>Tipo de elemento</label>\n\t\t\t\t\t\t\t\t<select name=\"day\" [(ngModel)]=\"preferences_modal.day\"  class=\"form-control\">\n\t\t\t\t\t\t\t\t\t<option value=\"Lunes\">Lunes</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Martes\">Martes</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Miércoles\">Miércoles</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Jueves\">Jueves</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Viernes\">Viernes</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Sábado\">Sábado</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Domingo\">Domingo</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t\t\t\t<label>Hora</label>\n\t\t\t\t\t\t\t\t<input type=\"email\" name=\"hour\" [(ngModel)]=\"preferences_modal.hour\" class=\"form-control form-control-line\" type=\"time\" value=\"12:00\" id=\"hour\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-info\" (click)=\"updateProfile()\">Editar</button>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger waves-effect text-left\" data-dismiss=\"modal\">Cerrar</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n<!-- ================================================================================================== -->\n<!-- End modal edit preferences\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n<!-- ================================================================================================== -->\n\n\n\n\n\n\n\n"

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

module.exports = "<div class=\"row\" *ngIf=\"typeInput[0] !== 'sidebar'; else Sidebar\">\n  <div class=\"card col-12 col-lg-4\">\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">Libros</h4>\n      <ul class=\"list-unstyled\" *ngIf=\"books.length > 0; else noBooks;\">\n        <li class=\"media border p-1\" *ngFor=\"let book of books\">\n          <img class=\"d-flex mr-3\"\n               [src]=\"book.images[0]\"\n               width=\"60\">\n          <div class=\"media-body\">\n            <h5 class=\"mt-0 mb-2\"> {{ book.title }} </h5>\n            <h5 class=\"mt-0 mb-2\">{{ book.author }}</h5>\n            <h5 class=\"mt-0 mb-2\">{{ book.language }}</h5>\n            <h5 class=\"mt-0 mb-2\" *ngIf=\"book.transaction === 'Ambos'\"> Venta-Intercambio </h5>\n            <h5 class=\"mt-0 mb-2\" *ngIf=\"book.transaction !== 'Ambos'\"> {{ book.transaction }}</h5>\n            <h5 class=\"mt-0 mb-2 text-success\" *ngIf=\"book.transaction === 'Ambos'\"> ${{ book.price }} </h5>\n            <h5 class=\"mt-0 mb-2 text-success\" *ngIf=\"book.transaction === 'Venta'\"> ${{ book.price }} </h5>\n          </div>\n        </li>\n      </ul>\n\n      <ng-template #noBooks>\n        <div class=\"alert alert-primary\" role=\"alert\">\n          No se encontraron coincidencias\n        </div>\n      </ng-template>\n\n    </div>\n  </div>\n  <div class=\"card col-12 col-lg-4\">\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">Autores</h4>\n      <ul class=\"list-unstyled\" *ngIf=\"authors.length > 0; else noAuth;\">\n        <li class=\"media media border p-1\" *ngFor=\"let auth of authors\">\n          <img class=\"d-flex mr-3\"\n               [src]=\"auth.images[0]\"\n               width=\"60\">\n          <div class=\"media-body\">\n            <h5 class=\"mt-0 mb-2\"> {{ auth.author }} </h5>\n            <h5 class=\"mt-0 mb-2\"> {{ auth.title }} </h5>\n          </div>\n        </li>\n      </ul>\n\n      <ng-template #noAuth>\n        <div class=\"alert alert-primary\" role=\"alert\">\n            No se encontraron coincidencias\n        </div>\n      </ng-template>\n    </div>\n  </div>\n\n  <div class=\"card col-12 col-lg-4\">\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">Dueños</h4>\n      <ul class=\"list-unstyled\" *ngIf=\"owners.length > 0; else noOwner\">\n        <li class=\"media media border p-1\" *ngFor=\"let cat of sidebar\">\n          <img class=\"d-flex mr-3\"\n               [src]=\"cat.img\"\n               width=\"60\">\n        <div class=\"media-body\">\n            <h5 class=\"mt-0 mb-2\">{{ cat.name }}</h5>\n            <h5 class=\"mt-0 mb-2\"> {{ cat.last_name1 }} {{ cat.last_name2 }} </h5>\n          </div>\n        </li>\n      </ul>\n\n      <ng-template #noOwner>\n        <div class=\"alert alert-primary\" role=\"alert\">\n          No se encontraron coincidencias\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n\n<ng-template #Sidebar>\n  <div class=\"card col-12\">\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">Búsqueda por categoría: {{ typeInput[1] }}</h4>\n      <ul class=\"list-unstyled\" *ngIf=\"sidebar.length > 0; else noSidebar\">\n        <li class=\"media media border p-1\" *ngFor=\"let cat of sidebar\">\n          <img class=\"d-flex mr-3\"\n              [src]=\"cat.images[0]\"\n              width=\"60\">\n          <div class=\"media-body\">\n            <h5 class=\"mt-0 mb-2\"> {{ cat.title }} </h5>\n            <h5 class=\"mt-0 mb-2\">{{ cat.author }}</h5>\n            <h5 class=\"mt-0 mb-2\">{{ cat.language }}</h5>\n            <h5 class=\"mt-0 mb-2\" *ngIf=\"cat.transaction === 'Ambos'\"> Venta-Intercambio </h5>\n            <h5 class=\"mt-0 mb-2\" *ngIf=\"cat.transaction !== 'Ambos'\"> {{ cat.transaction }}</h5>\n            <h5 class=\"mt-0 mb-2 text-success\" *ngIf=\"cat.transaction === 'Ambos'\"> ${{ cat.price }} </h5>\n            <h5 class=\"mt-0 mb-2 text-success\" *ngIf=\"cat.transaction === 'Venta'\"> ${{ cat.price }} </h5>\n            <hr>\n            <h5 class=\"mt-0 mb-2\"> Otras categorías a las que pertenece </h5>\n            <h6 class=\"mt-0 mb-2\" *ngFor=\"let genres of cat.genres\"> {{ genres }} </h6>\n          </div>\n        </li>\n      </ul>\n\n      <ng-template #noSidebar>\n        <div class=\"alert alert-primary\" role=\"alert\">\n          no se encontraron coincidencias\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</ng-template>"

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

module.exports = "<section id=\"wrapper\">\n\t<div class=\"login-register\" style=\"background-image:url(../../assets/images/background/book-2.jpg);\">\n\t\t<div class=\"login-box card\">\n\t\t  <div class=\"card-body\">\n\n\t\t  \t<!-- ============================================================================== -->\n\t\t\t<!-- Login\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t<!-- ============================================================================== -->\n\t\t\t<form class=\"form-horizontal form-material\" \n\t\t\t\t[formGroup]=\"form\" \n\t\t\t\t(ngSubmit)=\"loginUser()\" \n\t\t\t\tnovalidate=\"novalidate\" \n\t\t\t\taction=\"index.html\">    \n\n\t\t\t\t<h3 class=\"box-title m-b-20\">Sign In</h3>\n\t\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t\t<input  formControlName=\"email\"\n\t\t\t\t\t\t\t\t\tclass=\"form-control\" \n\t\t\t\t\t\t\t\t\ttype=\"text\" \n\t\t\t\t\t\t\t\t\tplaceholder=\"Correo electrónico\"> \n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t  \n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t\t  <input \tformControlName=\"password\"\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" \n\t\t\t\t\t\t\t\t\t\ttype=\"password\" \n\t\t\t\t\t\t\t\t\t\tplaceholder=\"Password\"> \n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t  \n\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"checkbox checkbox-info pull-left p-t-0\">\n\t\t\t\t\t\t\t\t<input \tformControlName=\"rememberMe\"\n\t\t\t\t\t\t\t\t\t\tid=\"checkbox-signup\" \n\t\t\t\t\t\t\t\t\t\ttype=\"checkbox\" \n\t\t\t\t\t\t\t\t\t\tclass=\"filled-in chk-col-light-blue\">\n\t\t\t\t\t\t\t\t<label for=\"checkbox-signup\"> Recuérdame </label>\n\t\t\t\t\t\t\t</div> \n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" id=\"to-recover\" class=\"text-dark pull-right\" (click)=\"forgotPassword()\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-lock m-r-5\"></i> Olvidó su contraseña? \n\t\t\t\t\t\t\t</a> \n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"form-group text-center\">\n\t\t\t\t\t\t<div class=\"col-xs-12 p-b-20\">\n\t\t\t\t\t\t\t<button class=\"btn btn-block btn-lg btn-info btn-rounded\" type=\"submit\">Ingresar</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<!-- Login with Google button -->\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-12 m-t-10 text-center\">\n\t\t\t\t\t\t\t<div class=\"social\">\n\t\t\t\t\t\t\t\t<button (click)=\"loginGoogle()\" \n\t\t\t\t\t\t\t\t\t\ttype=\"button\" \n\t\t\t\t\t\t\t\t\t\tid=\"btnGoogle\" \n\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-googleplus\" \n\t\t\t\t\t\t\t\t\t\tdata-toggle=\"tooltip\" \n\t\t\t\t\t\t\t\t\t\ttitle=\"Iniciar sesión con Google\"> \n\t\t\t\t\t\t\t\t\t<i aria-hidden=\"true\" class=\"fa fa-google-plus\"></i> \n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </div>\n\t\t\t\t\t  \n\t\t\t\t\t<!-- Register me -->\n\t\t\t\t\t<div class=\"form-group m-b-0\">\n\t\t\t\t\t\t<div class=\"col-sm-12 text-center\">No tienes una cuenta?\n\t\t\t\t\t\t\t<a [routerLink]=\"['/register']\" class=\"text-info m-l-5\">\n\t\t\t\t\t\t\t\t<b>Registrarme</b>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t\t<!-- ============================================================================== -->\n\t\t\t\t<!-- End Login\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t\t<!-- ============================================================================== -->\n\t\t\t\t\t\n\t\t\t\t  \n\t\t\t\t<!-- ============================================================================== -->\n\t\t\t\t<!-- Recovery password\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t\t<!-- ============================================================================== -->\n\t\t\t\t<form class=\"form-horizontal\" id=\"recoverform\" action=\"index.html\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t\t<h3>Recuperar contraseña</h3>\n\t\t\t\t\t\t\t<p class=\"text-muted\">Ingresa tu correo electrónico y te enviaremos las instrucciones</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t  \n\t\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" required=\"\" placeholder=\"Email\"> </div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group text-center m-t-20\">\n\t\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light\" type=\"submit\">Reset</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t\t<!-- ============================================================================== -->\n\t\t\t\t<!-- End recovery password\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t\t<!-- ============================================================================== -->\n\t\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>"

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

module.exports = "/*\nTemplate Name: Admin pro Admin\nAuthor: Wrappixel\nEmail: niravjoshi87@gmail.com\nFile: scss\n*/\n/*\nTemplate Name: Admin Pro Admin\nAuthor: Wrappixel\nEmail: niravjoshi87@gmail.com\nFile: scss\n*/\n/*Theme Colors*/\n/*bootstrap Color*/\n/*Light colors*/\n/*Normal Color*/\n/*Extra Variable*/\n/*******************\nLogin register and recover password Page\n******************/\n.login-register {\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  height: 100%;\n  width: 100%;\n  padding: 10% 0;\n  position: fixed; }\n.login-box {\n  width: 400px;\n  margin: 0 auto; }\n.login-box .footer {\n    width: 100%;\n    left: 0px;\n    right: 0px; }\n.login-box .social {\n    display: block;\n    margin-bottom: 30px; }\n#recoverform {\n  display: none; }\n.login-sidebar {\n  padding: 0px;\n  margin-top: 0px; }\n.login-sidebar .login-box {\n    right: 0px;\n    position: absolute;\n    height: 100%; }\n.contenedor {\n  max-width: 220px !important;\n  min-width: 220px !important;\n}\n.ms-container {\n  width: 100%;\n}"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"wrapper\">\n\t<div class=\"login-register\" [ngStyle]=\"{'background-image':getBackground(register_pages)}\" >\n\t\t<div class=\"login-box card\">\n\t\t\t<div class=\"card-body\" >\n\t\t\t\t<form class=\"form-horizontal form-material\" novalidate=\"novalidate\" action=\"index.html\"\n\t\t\t\t\t\t[formGroup]=\"form\" (ngSubmit)=\"saveUser()\" >\n\n\t\t\t\t\t<div [ngSwitch]=\"register_pages\">\n\t\t\t\t\t\t<!-- ================================================================== -->\n\t\t\t\t\t\t<!-- PAGE 1\t\t\t\t\t\t\t\t\t\t\t\t\t                      \t\t\t\t\t\t\t-->\n\t\t\t\t\t\t<!-- ================================================================== -->\n\t\t\t\t\t\t<div *ngSwitchCase=\"'page_1'\">\n\t\t\t\t\t\t\t<h3 class=\"box-title m-t-40 m-b-0\">Datos de perfil</h3>\n\t\t\t\t\t\t\t<small>Crea tu cuenta para ingresar</small>\n\n\t\t\t\t\t\t\t<div class=\"form-group m-t-20\">\n\t\t\t\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t\t\t\t<input formControlName=\"name\" class=\"form-control\" type=\"text\" placeholder=\"Nombre\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div *ngIf=\"form.controls['name'].errors?.required\"><p class=\"text-danger\">El nombre es requerido</p></div>\n\t\t\t\t\t\t\t\t<div *ngIf=\"form.controls['name'].errors?.pattern\"><p class=\"text-danger\">El nombre ingresado no es válido</p></div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"form-group m-t-10 row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<input formControlName=\"last_name1\" class=\"form-control\" type=\"text\" placeholder=\"Apellido paterno\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"form.controls['last_name1'].errors?.required\"><p class=\"text-danger\">El apellido es requerido</p></div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"form.controls['last_name1'].errors?.pattern\"><p class=\"text-danger\">El apellido ingresado no es válido</p></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<input formControlName=\"last_name2\" class=\"form-control\" type=\"text\" placeholder=\"Apellido materno\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"form.controls['last_name1'].errors?.required\"><p class=\"text-danger\">El apellido es requerido</p></div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"form.controls['last_name1'].errors?.pattern\"><p class=\"text-danger\">El apellido ingresado no es válido</p></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"form-group m-t-20\">\n\t\t\t\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t\t\t\t<input formControlName=\"rut\" class=\"form-control\"\ttype=\"text\" placeholder=\"RUT\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div *ngIf=\"form.controls['rut'].errors?.required\"><p class=\"text-danger\">El RUT es requerido</p></div>\n\t\t\t\t\t\t\t\t<div *ngIf=\"form.controls['rut'].errors?.pattern\"><p class=\"text-danger\">El RUT ingresado no es válido</p></div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"form-group m-t-20\">\n\t\t\t\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t\t\t\t<input formControlName=\"phone\" class=\"form-control\" type=\"text\" placeholder=\"Teléfono opcional\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div *ngIf=\"form.controls['phone'].errors?.required\"><p class=\"text-danger\">El teléfono es requerido</p></div>\n\t\t\t\t\t\t\t\t<div *ngIf=\"form.controls['phone'].errors?.pattern\"><p class=\"text-danger\">El teléfono ingresado no es válido</p></div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"form-group text-center m-t-20\">\n\t\t\t\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t\t\t\t<button (click)=\"register_pages='page_2'\" class=\"btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light\">Continuar\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"form-group m-b-0\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 \">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-circle btn-info\" style=\"margin-right: 80px;\" [routerLink]=\"['/login']\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-arrow-left\"></i>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<p class=\"text-center\" style=\"display: contents;\">Ya tienes una cuenta?\n\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/login']\" class=\"text-info m-l-5\">\n\t\t\t\t\t\t\t\t\t\t\t<b>Ingresar</b>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<!-- ================================================================================== -->\n\t\t\t\t\t\t<!-- PAGE 2\t\t\t\t\t\t\t\t\t\t\t\t\t                                      \t\t\t\t\t\t\t-->\n\t\t\t\t\t\t<!-- ================================================================================== -->\n\t\t\t\t\t\t<div *ngSwitchCase=\"'page_2'\">\n\n\t\t\t\t\t\t\t<h3 class=\"box-title m-t-40 m-b-0\">Categorías de interés</h3>\n\t\t\t\t\t\t\t<div class=\"ms-container\" id=\"ms-pre-selected-options\">\n\t\t\t\t\t\t\t\t<div class=\"ms-selectable\">\n\t\t\t\t\t\t\t\t\t<select class=\"ms-list contenedor\" multiple='multiple' formControlName=\"categories\">\n\t\t\t\t\t\t\t\t\t\t<option [value]='c' class=\"ms-elem-selectable\" \n\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let c of categories; let i = index;\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"addCategory(i)\"> {{ c }} </option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"ms-selection\">\n\t\t\t\t\t\t\t\t\t<select class=\"ms-list contenedor\" multiple='multiple' formControlName=\"categories\">\n\t\t\t\t\t\t\t\t\t\t<option [value]='sc' class=\"ms-elem-selection\" \n\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let sc of selected_categories; let i = index;\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"removeCategory(i)\"> {{ sc }} </option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"form-group text-center m-t-20\">\n\t\t\t\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t\t\t\t<button (click)=\"register_pages='page_3'\" class=\"btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light\">Continuar</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"form-group m-b-0\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 \">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-circle btn-info\" style=\"margin-right: 80px;\" (click)=\"register_pages='page_1'\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-arrow-left\"></i>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<p class=\"text-center\" style=\"display: contents;\">Ya tienes una cuenta?\n\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/login']\" class=\"text-info m-l-5\">\n\t\t\t\t\t\t\t\t\t\t\t<b>Ingresar</b>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<!-- ================================================================================== -->\n\t\t\t\t\t\t<!-- PAGE 3\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t\t\t\t<!-- ================================================================================== -->\n\t\t\t\t\t\t<div *ngSwitchCase=\"'page_3'\">\n\n\t\t\t\t\t\t\t<h3 class=\"box-title m-t-40 m-b-0\">Datos de la cuenta</h3>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t\t\t\t<input formControlName=\"email\" class=\"form-control\" type=\"text\" placeholder=\"Correo electrónico\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div *ngIf=\"form.controls['email'].errors?.required\"><p class=\"text-danger\">El email es requerido</p></div>\n\t\t\t\t\t\t\t\t<div *ngIf=\"form.controls['email'].errors?.email\"><p class=\"text-danger\">El email ingresado no es válido</p></div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t\t\t\t<input formControlName=\"password\" class=\"form-control\" type=\"password\" placeholder=\"Contraseña\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t\t\t\t<input formControlName=\"password2\" class=\"form-control\" type=\"password\" placeholder=\"Confirme su contraseña\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"form-group\" *ngIf=\"form['errors']?.areEquals && !form.pristine\">\n\t\t\t\t\t\t\t\t<p class=\"text-danger\">\tLas contraseñas deben ser iguales </p>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t \t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"checkbox checkbox-primary p-t-0\">\n\t\t\t\t\t\t\t\t\t \t<input \tformControlName=\"conditions\" id=\"checkbox-signup\" type=\"checkbox\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"checkbox-signup\"> Acepto los\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Términos y condiciones</a>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"form-group text-center m-t-20\">\n\t\t\t\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light\" type=\"submit\">Registrarme</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"form-group m-b-0\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 \">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-circle btn-info\" style=\"margin-right: 80px;\" (click)=\"register_pages='page_2'\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-arrow-left\"></i>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<p class=\"text-center\" style=\"display: contents;\">Ya tienes una cuenta?\n\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/login']\" class=\"text-info m-l-5\">\n\t\t\t\t\t\t\t\t\t\t\t<b>Ingresar</b>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>"

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

module.exports = "<header class=\"topbar\">\n\t<nav class=\"navbar top-navbar navbar-expand-md navbar-light\">\n\t\t<!-- ============================================================== -->\n\t\t<!-- Logo \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t<!-- ============================================================== -->\n\t\t<div class=\"navbar-header\">\n\t\t\t<a class=\"navbar-brand\" [routerLink]=\"['/home']\">\n\t\t\t\t<b>\n\t\t\t\t\t<!-- Logo icon -->\n\t\t\t\t\t<img src=\"assets/images/logo-icon.png\" style=\"max-width: 60px; max-height: 60px\" alt=\"homepage\" class=\"dark-logo\" />\n\t\t\t\t</b>\n\t\t\t\t<span>\n\t\t\t\t\t<!-- Logo text -->\n\t\t\t\t\t<img src=\"assets/images/logo-text.png\" alt=\"homepage\" class=\"dark-logo\" />\n\t\t\t\t</span>\n\t\t\t</a>\n\t\t</div>\n\t\t<!-- ============================================================== -->\n\t\t<!-- End Logo \t\t\t\t\t\t\t\t\t                           \t\t\t\t\t-->\n\t\t<!-- ============================================================== -->\n\t\t<div class=\"navbar-collapse\">\n\t\t\t<!-- ============================================================== -->\n\t\t\t<!-- Toggle and nav items \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t<!-- ============================================================== -->\n\t\t\t<ul class=\"navbar-nav mr-auto\">\n\t\t\t\t<!-- This is  -->\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t<a class=\"nav-link nav-toggler hidden-md-up waves-effect waves-dark\" href=\"javascript:void(0)\">\n\t\t\t\t\t\t<i class=\"ti-menu\"></i>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t<a class=\"nav-link sidebartoggler hidden-sm-down waves-effect waves-dark\" href=\"javascript:void(0)\">\n\t\t\t\t\t\t<i class=\"ti-menu\"></i>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\"></li>\n\t\t\t</ul>\n\t\t\t<!-- ============================================================== -->\n\t\t\t<!-- User profile, notifications, add book and search \t\t\t\t\t\t\t-->\n\t\t\t<!-- ============================================================== -->\n\t\t\t<ul class=\"navbar-nav my-lg-0\">\n\t\t\t\t<!-- ============================================================== -->\n\t\t\t\t<!-- Search \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t\t<!-- ============================================================== -->\n\t\t\t\t<li class=\"nav-item search-box\">\n\t\t\t\t\t<a class=\"nav-link waves-effect waves-dark\" href=\"javascript:void(0)\">\n\t\t\t\t\t\t<i class=\"ti-search\"></i>\n\t\t\t\t\t</a>\n\t\t\t\t\t<div class=\"app-search\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Buscar...\" (keyup.enter)=\"searchBook(Search.value)\" #Search>\n\t\t\t\t\t\t<a class=\"srh-btn\" >\n\t\t\t\t\t\t\t<i class=\"ti-close\"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<!-- ============================================================== -->\n\t\t\t\t<!-- End search \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t\t<!-- ============================================================== -->\n\n\t\t\t\t<!-- ============================================================== -->\n\t\t\t\t<!-- Notifications \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t\t<!-- ============================================================== -->\n\t\t\t\t<li class=\"nav-item dropdown\">\n\t\t\t\t\t\t<a class=\"nav-link dropdown-toggle waves-effect waves-dark\" href=\"\" data-toggle=\"dropdown\" \n\t\t\t\t\t\t\t\taria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t\t<i class=\"mdi mdi-message\"></i>\n\t\t\t\t\t\t<div class=\"notify\">\n\t\t\t\t\t\t\t<span class=\"point\"></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div class=\"dropdown-menu dropdown-menu-right mailbox animated bounceInDown\">\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<div class=\"drop-title\">Notifications</div>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<div class=\"message-center ps ps--theme_default\" data-ps-id=\"25e64876-6300-b616-4d99-8cc55be034ec\">\n\t\t\t\t\t\t\t\t\t<!-- Message -->\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn btn-danger btn-circle\"><i class=\"fa fa-link\"></i></div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"mail-contnet\">\n\t\t\t\t\t\t\t\t\t\t<h5>Luanch Admin</h5>\n\t\t\t\t\t\t\t\t\t\t<span class=\"mail-desc\">Just see the my new admin!</span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"time\">9:30 AM</span> </div>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<!-- Message -->\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn btn-success btn-circle\"><i class=\"ti-calendar\"></i></div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"mail-contnet\">\n\t\t\t\t\t\t\t\t\t\t<h5>Event today</h5>\n\t\t\t\t\t\t\t\t\t\t<span class=\"mail-desc\">Just a reminder that you have event</span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"time\">9:10 AM</span> </div>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<!-- Message -->\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn btn-info btn-circle\"><i class=\"ti-settings\"></i></div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"mail-contnet\">\n\t\t\t\t\t\t\t\t\t\t<h5>Settings</h5>\n\t\t\t\t\t\t\t\t\t\t<span class=\"mail-desc\">You can customize this template as you want</span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"time\">9:08 AM</span> </div>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<!-- Message -->\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn btn-primary btn-circle\"><i class=\"ti-user\"></i></div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"mail-contnet\">\n\t\t\t\t\t\t\t\t\t\t<h5>Pavan kumar</h5>\n\t\t\t\t\t\t\t\t\t\t<span class=\"mail-desc\">Just see the my admin!</span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"time\">9:02 AM</span> </div>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<div class=\"ps__scrollbar-x-rail\" style=\"left: 0px; bottom: 0px;\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"ps__scrollbar-x\" tabindex=\"0\" style=\"left: 0px; width: 0px;\"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"ps__scrollbar-y-rail\" style=\"top: 0px; right: 0px;\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"ps__scrollbar-y\" tabindex=\"0\" style=\"top: 0px; height: 0px;\"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a class=\"nav-link text-center\" href=\"javascript:void(0);\"> <strong>Check all notifications</strong> <i class=\"fa fa-angle-right\"></i> </a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<!-- ============================================================== -->\n\t\t\t\t<!-- End Notifications \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t\t<!-- ============================================================== -->\n\n\t\t\t\t<!-- ============================================================== -->\n\t\t\t\t<!-- Messages\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t\t<!-- ============================================================== -->\n\t\t\t\t<li class=\"nav-item dropdown\">\n\t\t\t\t\t\t<a aria-expanded=\"false\" aria-haspopup=\"true\" class=\"nav-link dropdown-toggle waves-effect waves-dark\" \n\t\t\t\t\t\t\t\tdata-toggle=\"dropdown\" href=\"\" id=\"2\">\n\t\t\t\t\t\t\t<i class=\"mdi mdi-email\"></i>\n\t\t\t\t\t\t\t<div class=\"notify\">\n\t\t\t\t\t\t\t\t<span class=\"point\"></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<app-messages></app-messages>\n\t\t\t\t</li>\n\t\t\t\t<!-- ============================================================== -->\n\t\t\t\t<!-- End messages \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t\t<!-- ============================================================== -->\n\n\t\t\t\t<!-- ============================================================== -->\n\t\t\t\t<!-- Add book \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t\t<!-- ============================================================== -->\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t<a [routerLink]=\"['/addBook']\" class=\"nav-link waves-effect waves-dark\">\n\t\t\t\t\t\t<img src=\"assets/images/add.png\" alt=\"add_book\" style=\"width: 25px;\" />\n\t\t\t\t\t</a>\n\n\t\t\t\t</li>\n\t\t\t\t<!-- ============================================================== -->\n\t\t\t\t<!-- End Add book \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t\t<!-- ============================================================== -->\n\n\t\t\t\t<!-- ============================================================== -->\n\t\t\t\t<!-- Profile \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t\t<!-- ============================================================== -->\n\t\t\t\t<li class=\"nav-item dropdown\">\n\t\t\t\t\t<a aria-expanded=\"false\" aria-haspopup=\"true\" class=\"nav-link dropdown-toggle waves-effect waves-dark\" \n\t\t\t\t\tdata-toggle=\"dropdown\" href=\"\">\n\t\t\t\t\t\t<img [src]=\"profile.img\" alt=\"user\" class=\"img-circle-50\" *ngIf=\"!loading; else loadingElse\"/>\n\t\t\t\t\t\t<ng-template #loadingElse>\n\t\t\t\t\t\t\t\t<app-loading></app-loading>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t</a>\n\t\t\t\t\t<div class=\"dropdown-menu dropdown-menu-right mailbox animated bounceInDown\">\n\t\t\t\t\t\t<ul class=\"dropdown-user\">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<div class=\"dw-user-box\">\n\t\t\t\t\t\t\t\t\t<div class=\"u-img\">\n\t\t\t\t\t\t\t\t\t\t<img [src]=\"profile.img\" alt=\"user\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"u-text\">\n\t\t\t\t\t\t\t\t\t\t<h4>{{ profile.name | titlecase }} {{ profile.last_name1 | titlecase }} {{ profile.last_name2 | titlecase }}</h4>\n\t\t\t\t\t\t\t\t\t\t<p class=\"text-muted\">{{ profile.email }}</p>\n\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/profile']\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-rounded btn-danger btn-sm\">\n\t\t\t\t\t\t\t\t\t\t\tVer perfil\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li role=\"separator\" class=\"divider\"></li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"['/profile']\">\n\t\t\t\t\t\t\t\t\t<i class=\"ti-user\"></i> &nbsp; Mi perfil\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"['/library']\">\n\t\t\t\t\t\t\t\t\t<i class=\"ti-wallet\"></i> &nbsp; Mi biblioteca\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"['/messages']\">\n\t\t\t\t\t\t\t\t\t<i class=\"ti-email\"></i> &nbsp; Mis mensajes\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li role=\"separator\" class=\"divider\"></li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a (click)=\"logout()\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-power-off\"></i> &nbsp; Cerrar sesión\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<!-- ============================================================== -->\n\t\t\t\t<!-- End Profile \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t\t<!-- ============================================================== -->\n\t\t\t</ul>\n\t\t</div>\n\t</nav>\n</header>\n"

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

module.exports = "<div aria-labelledby=\"2\" class=\"dropdown-menu mailbox dropdown-menu-right animated bounceInDown\">\n\t<ul>\n\t\t<li>\n  \t\t<div class=\"drop-title\">Tienes {{ new_messages }} mensaje/s</div>\n\t\t</li>\n\t\t<li>\n\t\t\t<div class=\"message-center ps ps--theme_default ps--active-y\" data-ps-id=\"5d9236dd-5d99-76c4-56fe-c7629b8cdc1b\"\n\t\t\t\t\t*ngFor=\"let m of messages; let i = index;\">\n\t\t\t\t<a class=\"pointer\" (click)=\"showMessage(m.key)\">\n\t\t\t\t\t<div class=\"user-img\">\n\t\t\t\t\t\t<img *ngIf=\"m.uid_interested.uid !== uid\" class=\"img-circle img-circle-40\" [src]=\"m.uid_interested.img\">\n\t\t\t\t\t\t<img *ngIf=\"m.user_owner !== uid\" class=\"img-circle img-circle-40\" [src]=\"m.book.user.img\">\n\t\t\t\t\t\t<span [ngClass]=\"{'online': m.status, 'busy': !m.status}\" class=\"profile-status pull-right\"></span>\n\t\t\t\t\t\t<!-- TODO: Estado del mensaje -->\n\t\t\t\t\t\t<!-- online es verde, busy es rojo, away es naranjo, offline es naranjo -->\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mail-contnet\">\n\t\t\t\t\t\t<h5 *ngIf=\"m.uid_interested.uid !== uid\"> {{ m.uid_interested.name | titlecase }} {{ m.uid_interested.last_name1 | titlecase }} {{ m.uid_interested.last_name2 | titlecase }} </h5>\n\t\t\t\t\t\t<h5 *ngIf=\"m.user_owner !== uid\"> {{ m.book.user.name | titlecase }} {{ m.book.user.last_name1 | titlecase }} {{ m.book.user.last_name2 | titlecase }} </h5>\n\t\t\t\t\t\t<span class=\"mail-desc\"> {{ m.text[m.text.length-1][m.user_owner] }} {{ m.text[m.text.length-1][m.uid_interested.uid] }} </span>\n\t\t\t\t\t\t<span class=\"time\"> {{ m.date }} </span>\n\t\t\t\t\t</div>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</li>\n\t\t<li>\n\t\t\t<a class=\"nav-link text-center\" [routerLink]=\"['/messages']\">\n\t\t\t\t<strong>Ver todos los mensajes</strong>\n\t\t\t\t<i class=\"fa fa-angle-right\"></i>\n\t\t\t</a>\n\t\t</li>\n\t</ul>\n</div>"

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

module.exports = "<aside class=\"left-sidebar\">\n\t<div class=\"scroll-sidebar\">\n\t\t<nav class=\"sidebar-nav\">\n\t\t\t<ul id=\"sidebarnav\">\n\t\t\t \t<li class=\"nav-small-cap\">CATEGORÍAS</li>\n\t\t\t\t <li class=\"nav-devider\"></li>\n\t\t\t\t <!-- TODO: ponerle estilos -->\n\t\t\t\t<li class=\"nav-small-cap\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\tstyle=\"cursor: pointer;\" \n\t\t\t\t\t\t*ngFor=\"let c of categories\">\n\t\t\t\t\t<a [routerLink]=\"['/search', 'sidebar.'+c]\"> {{ c }} </a>\n\t\t\t\t</li>               \n\t\t\t</ul>\n\t\t</nav>\n\t</div>\n</aside>"

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

module.exports = __webpack_require__(/*! /Users/matiasespinozaherrera/Documents/Jabiera/BOOKscalo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
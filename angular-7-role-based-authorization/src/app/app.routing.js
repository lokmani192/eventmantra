"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_1 = require("./home");
var admin_1 = require("./admin");
var login_1 = require("./login");
var _guards_1 = require("./_guards");
var _models_1 = require("./_models");
var appRoutes = [
    {
        path: '',
        component: home_1.HomeComponent,
        canActivate: [_guards_1.AuthGuard]
    },
    {
        path: 'admin',
        component: admin_1.AdminComponent,
        canActivate: [_guards_1.AuthGuard],
        data: { roles: [_models_1.Role.Admin] }
    },
    {
        path: 'login',
        component: login_1.LoginComponent
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
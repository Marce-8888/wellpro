"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var animations_1 = require("@angular/platform-browser/animations");
var slide_toggle_1 = require("@angular/material/slide-toggle");
var datepicker_1 = require("@angular/material/datepicker");
var core_2 = require("@angular/material/core");
var input_1 = require("@angular/material/input");
var list_1 = require("@angular/material/list");
var app_component_1 = require("./app.component");
var home_component_1 = require("./components/home/home.component");
var login_component_1 = require("./components/login/login.component");
var register_component_1 = require("./components/register/register.component");
var perfil_component_1 = require("./components/perfil/perfil.component");
var todo_component_1 = require("./components/todo/todo.component");
var navbar_component_1 = require("./components/navbar/navbar.component");
var leader_home_component_1 = require("./components/leader-home/leader-home.component");
var leader_plan_component_1 = require("./components/leader-plan/leader-plan.component");
var route = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'register',
        component: register_component_1.RegisterComponent
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'planification',
        component: todo_component_1.TodoComponent
    },
    {
        path: 'navbar',
        component: navbar_component_1.NavbarComponent
    },
    {
        path: 'leader-home',
        component: leader_home_component_1.LeaderHomeComponent
    },
    {
        path: 'leader-plan',
        component: leader_plan_component_1.LeaderPlanComponent
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                perfil_component_1.PerfilComponent,
                todo_component_1.TodoComponent,
                navbar_component_1.NavbarComponent,
                leader_home_component_1.LeaderHomeComponent,
                leader_plan_component_1.LeaderPlanComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(route),
                animations_1.BrowserAnimationsModule,
                slide_toggle_1.MatSlideToggleModule,
                datepicker_1.MatDatepickerModule,
                core_2.MatNativeDateModule,
                input_1.MatInputModule,
                list_1.MatListModule
            ],
            providers: [
                datepicker_1.MatDatepickerModule,
                core_2.MatNativeDateModule
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

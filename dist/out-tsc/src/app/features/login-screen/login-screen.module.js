var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginScreenComponent } from './container/login-screen.component';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { LoginScreenEffects } from './effects/login-screen.effects';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
var routes = [
    {
        path: 'login', component: LoginScreenComponent
    }
];
var LoginScreenModule = /** @class */ (function () {
    function LoginScreenModule() {
    }
    LoginScreenModule = __decorate([
        NgModule({
            declarations: [
                LoginScreenComponent
            ],
            imports: [
                CommonModule,
                FormsModule,
                RouterModule.forChild(routes),
                EffectsModule.forFeature([LoginScreenEffects]),
                MatCardModule,
                MatInputModule,
                MatButtonModule,
            ],
            exports: [
                LoginScreenComponent
            ]
        })
    ], LoginScreenModule);
    return LoginScreenModule;
}());
export { LoginScreenModule };
//# sourceMappingURL=login-screen.module.js.map
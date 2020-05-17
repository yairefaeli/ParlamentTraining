import { async, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Store, StoreModule } from "@ngrx/store";
import { LoginScreenComponent } from './login-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ExecuteLogin } from '../login-screen.actions';
describe('LoginScreenComponent', function () {
    var component;
    var fixture;
    var store;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [
                BrowserAnimationsModule,
                FormsModule,
                StoreModule.forRoot({})
            ],
            declarations: [LoginScreenComponent]
        })
            .compileComponents();
    }));
    beforeEach(fakeAsync(function () {
        store = TestBed.get(Store);
        fixture = TestBed.createComponent(LoginScreenComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        tick();
    }));
    it('should create', function () {
        expect(component).toBeTruthy();
    });
    it('login should dispatch executeLogin action', function () {
        spyOn(store, 'dispatch');
        spyOn(component, 'executeLogin').and.callThrough();
        var playerNameInput = fixture.debugElement.query(By.css('input[name=playerName]')).nativeElement;
        playerNameInput.value = 'DanishGod';
        playerNameInput.dispatchEvent(new Event('input'));
        var loginButton = fixture.debugElement.query(By.css('button[name=loginButton]'));
        loginButton.triggerEventHandler('click', {});
        fixture.detectChanges();
        expect(component.executeLogin).toHaveBeenCalled();
        expect(store.dispatch).toHaveBeenCalled();
        expect(store.dispatch).toHaveBeenCalledWith(new ExecuteLogin('DanishGod'));
    });
});
//# sourceMappingURL=login-screen.component.spec.js.map
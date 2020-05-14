import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Store, StoreModule } from "@ngrx/store";
import { LoginScreenComponent } from './login-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ExecuteLogin } from '../login-screen.actions';

describe('LoginScreenComponent', () => {
  let component: LoginScreenComponent;
  let fixture: ComponentFixture<LoginScreenComponent>;
  let store: Store<any>;

  beforeEach(async(() => {
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

  beforeEach(fakeAsync(() => {
    store = TestBed.get(Store);
    fixture = TestBed.createComponent(LoginScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    tick();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('login should dispatch executeLogin action', () => {
    spyOn(store, 'dispatch');

    spyOn(component, 'executeLogin').and.callThrough();

    const playerNameInput = fixture.debugElement.query(By.css('input[name=playerName]')).nativeElement;
    playerNameInput.value = 'DanishGod';
    playerNameInput.dispatchEvent(new Event('input'));

    const loginButton = fixture.debugElement.query(By.css('button[name=loginButton]'));
    loginButton.triggerEventHandler('click', {});

    fixture.detectChanges();

    expect(component.executeLogin).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(new ExecuteLogin('DanishGod'));

  })
});

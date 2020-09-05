import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCredentialComponent } from './set-credential.component';

describe('SetCredentialComponent', () => {
  let component: SetCredentialComponent;
  let fixture: ComponentFixture<SetCredentialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetCredentialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetCredentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

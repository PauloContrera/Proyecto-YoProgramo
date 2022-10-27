import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoCursosComponent } from './nuevo-cursos.component';

describe('NuevoCursosComponent', () => {
  let component: NuevoCursosComponent;
  let fixture: ComponentFixture<NuevoCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoCursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

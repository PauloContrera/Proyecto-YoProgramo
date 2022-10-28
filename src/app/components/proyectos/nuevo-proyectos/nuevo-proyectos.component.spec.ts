import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoProyectosComponent } from './nuevo-proyectos.component';

describe('NuevoProyectosComponent', () => {
  let component: NuevoProyectosComponent;
  let fixture: ComponentFixture<NuevoProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoProyectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

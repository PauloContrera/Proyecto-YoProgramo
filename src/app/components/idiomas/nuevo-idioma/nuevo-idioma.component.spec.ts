import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoIdiomaComponent } from './nuevo-idioma.component';

describe('NuevoIdiomaComponent', () => {
  let component: NuevoIdiomaComponent;
  let fixture: ComponentFixture<NuevoIdiomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoIdiomaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoIdiomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

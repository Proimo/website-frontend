import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentialsComponent } from './residentials.component';

describe('ResidentialsComponent', () => {
  let component: ResidentialsComponent;
  let fixture: ComponentFixture<ResidentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlueComponent } from './glue.component';

describe('GlueComponent', () => {
  let component: GlueComponent;
  let fixture: ComponentFixture<GlueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

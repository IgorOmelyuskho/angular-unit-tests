import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGuardsComponent } from './test-guards.component';

describe('TestGuardsComponent', () => {
  let component: TestGuardsComponent;
  let fixture: ComponentFixture<TestGuardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestGuardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestGuardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

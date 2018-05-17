import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesViewerComponent } from './issues-viewer.component';

describe('IssuesViewerComponent', () => {
  let component: IssuesViewerComponent;
  let fixture: ComponentFixture<IssuesViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuesViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

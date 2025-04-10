import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnivercityComponent } from './univercity.component';

describe('UnivercityComponent', () => {
  let component: UnivercityComponent;
  let fixture: ComponentFixture<UnivercityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnivercityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnivercityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

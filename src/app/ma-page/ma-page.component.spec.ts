import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaPageComponent } from './ma-page.component';

describe('MaPageComponent', () => {
  let component: MaPageComponent;
  let fixture: ComponentFixture<MaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

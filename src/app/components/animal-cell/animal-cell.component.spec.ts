import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalCellComponent } from './animal-cell.component';

describe('AnimalCellComponent', () => {
  let component: AnimalCellComponent;
  let fixture: ComponentFixture<AnimalCellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalCellComponent]
    });
    fixture = TestBed.createComponent(AnimalCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Animal } from 'src/app/models/animal';
import { AnimalService } from 'src/app/services/animal.service';


@Component({
  selector: 'app-animal-cell',
  templateUrl: './animal-cell.component.html',
  styleUrls: ['./animal-cell.component.css']
})
export class AnimalCellComponent {
  @Input() animal? : Animal;
  @Input() edit? : any;
  @Output() animalsUpdated = new EventEmitter<Animal[]>();
  constructor(private animalService: AnimalService ) {}

  deleteAnimal(animal: Animal) {
    this.animalService
      .deleteAnimal(animal)
      .subscribe((animals : Animal[]) => this.animalsUpdated.emit(animals));
  }

  upDateAnimal(animal: Animal) {
    this.animalService
    .updateAnimal(animal)
    .subscribe((animals : Animal[]) => {
      this.animalsUpdated.emit(animals);
    });
  }
}

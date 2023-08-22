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
  @Output() animalsUpdated = new EventEmitter<Animal[]>();
  animalToEdit?: Animal;
  constructor(private animalService: AnimalService ) {}

  editAnimalEvent(animal: Animal) {
    this.animalToEdit = animal;
  }

  deleteAnimal(animal: Animal) {
    this.animalService
      .deleteAnimal(animal)
      .subscribe((animals : Animal[]) => this.animalsUpdated.emit(animals));
  }
}

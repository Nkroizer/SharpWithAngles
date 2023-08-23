import { Component } from '@angular/core';
import { Animal } from './models/animal';
import { AnimalService } from './services/animal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SharpWithAngles';
  animals: Animal[] = [];
  animalToEdit?: Animal;
  edit = false;

  constructor(private animalService: AnimalService) {}

  ngOnInit() : void {
    this.animalService
      .getAnimal()
      .subscribe((result : Animal[]) => {
        this.animals = result
      });
  }

  updateAnimalList(animals: Animal[]) {
    this.animals = animals;
    this.animalToEdit = undefined;
  }

  initNewAnimal() {
    this.animalToEdit = new Animal();
  }

  editAnimal(animal: Animal) {
    this.animalToEdit = animal;
  }

  goToView() {
    this.edit = false;
  }

  goToedit() {
    this.edit = true;
  }
}

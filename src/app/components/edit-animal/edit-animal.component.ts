import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Animal } from 'src/app/models/animal';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-edit-animal',
  templateUrl: './edit-animal.component.html',
  styleUrls: ['./edit-animal.component.css']
})
export class EditAnimalComponent implements OnInit {
  @Input() animal? : Animal;
  @Output() animalsUpdated = new EventEmitter<Animal[]>();
  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    
  }

  crateAnimal(animal: Animal) {
    this.animalService
    .createAnimal(animal)
    .subscribe((animals : Animal[]) => this.animalsUpdated.emit(animals));
  }
}

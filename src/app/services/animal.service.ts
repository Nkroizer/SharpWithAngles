import { Injectable } from '@angular/core';
import { Animal } from '../models/animal';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { enviroment } from 'src/envieroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private url = "Animal";
  constructor(private http: HttpClient) { }

  public createAnimal(animal: Animal) : Observable<Animal[]> {
    return this.http.post<Animal[]>(
      `${enviroment.apiUrl}/${this.url}`,
      animal
      );
  }

  public getAnimal() : Observable<Animal[]> {
    return this.http.get<Animal[]>(`${enviroment.apiUrl}/${this.url}`);
  }

  public updateAnimal(animal: Animal) : Observable<Animal[]> {
    return this.http.put<Animal[]>(
      `${enviroment.apiUrl}/${this.url}`,
      animal
      );
  }

  public deleteAnimal(animal: Animal) : Observable<Animal[]> {
    return this.http.delete<Animal[]>(
      `${enviroment.apiUrl}/${this.url}/${animal.id}`
      );
  }
}

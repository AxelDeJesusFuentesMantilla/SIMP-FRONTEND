import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private elementsSource = new BehaviorSubject<string[]>(['Elemento 1', 'Elemento 2', 'Elemento 3']);
  elements$ = this.elementsSource.asObservable();

  constructor() { }

  addElement(newElement: string) {
    const currentItems = this.elementsSource.value;
    this.elementsSource.next([...currentItems, newElement]);
  }
}

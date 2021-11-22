import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private selectedCardSubject: BehaviorSubject<any>;

  constructor() {
    this.selectedCardSubject = new BehaviorSubject<any>('');
  }

  public get selectedCardValue(): any{
    return this.selectedCardSubject.value;
  }

  salvaCard(card: any){
    this.selectedCardSubject.next(card)
  }
}

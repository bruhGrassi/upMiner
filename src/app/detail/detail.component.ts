import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  card: any = []

  constructor(
    private cardService: CardService
  ) { }

  ngOnInit(): void {
    this.getCard();
    console.log("card", this.card)
  }

  getCard(){
    this.card = this.cardService.selectedCardValue
  }

  //avança para o proximo slide
  slideNext(index:number){
    if(index == 1){
      const slide1 = document.getElementById('slide-1') as HTMLElement
      const slide2 = document.getElementById('slide-2') as HTMLElement
      slide1.style.transform = "translateX(-100%)"
      slide2.style.transform = "translateX(-100%)"
      console.log(index)
    } 
  }

  //retorna para o slide anterior
  slidePrev(index:number){
    if(index == 2){
      const slide1 = document.getElementById('slide-1') as HTMLElement
      const slide2 = document.getElementById('slide-2') as HTMLElement
      slide1.style.transform = "translateX(0)"
      slide2.style.transform = "translateX(0)"
      console.log(index)
    }
  }


}

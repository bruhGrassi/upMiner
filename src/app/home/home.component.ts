import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tempCards: any = [];
  auxiliarCards: any = [];
  catActive: any;
  selectValue: any;

  cards: any = [
    {id: 1, lancamento: true, preco: 29.99, categoria: "Profissional", icon: "case", texto: ""},
    {id: 2, lancamento: true, preco: 49.99,  categoria: "Reguladores", icon: "bank", texto: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A. de capital aberto e limitadas (LTDA) de grande porte."},
    {id: 3, lancamento: false, preco: 29.99,  categoria: "Sócio Ambiental", icon: "tree",texto: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A. de capital aberto e limitadas (LTDA) de grande porte."},
    {id: 4, lancamento: true, preco: 29.99, categoria: "Jurídico", icon: "hammer", texto: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A. de capital aberto e limitadas (LTDA) de grande porte."},
    {id: 5, lancamento: false, preco: 49.99,categoria: "Listas Restritivas", icon: "stop", texto: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A. de capital aberto e limitadas (LTDA) de grande porte."},
    {id: 6, lancamento: true, preco: 49.99,categoria: "Mídia / Internet", icon: "globe-map", texto: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A. de capital aberto e limitadas (LTDA) de grande porte."},
    {id: 7, lancamento: false,preco: 9.99, categoria: "Bens e Imóveis", icon: "diamond", texto: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A. de capital aberto e limitadas (LTDA) de grande porte."},
    {id: 8, lancamento: true, preco: 19.99,categoria: "Cadastro", icon: "avatar", texto: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A. de capital aberto e limitadas (LTDA) de grande porte."},
    {id: 9, lancamento: false,preco: 59.99, categoria: "Financeiro", icon: "money", texto: "TESTE O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A. de capital aberto e limitadas (LTDA) de grande porte."},
    {id: 10, lancamento: true,preco: 19.99, categoria: "Financeiro", icon: "money", texto: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A. de capital aberto e limitadas (LTDA) de grande porte."},
    {id: 11, lancamento: true,preco: 39.99, categoria: "Sócio Ambiental", icon: "tree", texto: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A. de capital aberto e limitadas (LTDA) de grande porte."},
    {id: 12, lancamento: false,preco: 19.99, categoria: "Jurídico", icon: "hammer", texto: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A. de capital aberto e limitadas (LTDA) de grande porte."},
  ]

  constructor(
    private cardService: CardService, private router: Router
  ) { }

  ngOnInit(): void {
    this.catActive = 'Todos';
    this.tempCards = this.cards;
    this.auxiliarCards = this.tempCards;
  }

  //filtra os cards por categoria
  filterCat(categoria:string){
    this.catActive = categoria;
    let novaListaCards: any = []

    if(categoria == 'Todos'){
      this.tempCards = this.cards
    }

    else {
      const cardsCopia = this.cards;
      cardsCopia.map((card:any) => 
        {
          if(card.categoria == categoria){
            novaListaCards.push(card);
          }
        })

        this.tempCards = novaListaCards;
    }
      this.auxiliarCards = this.tempCards;
      this.selectOrd();
  }

   //ordena os card por lançamento
  ordenarPorLancamento(){
    let novaListaCards: any = [];
    const cardsCopia = this.auxiliarCards;
    cardsCopia.map((card:any) => 
    {
      if(card.lancamento){
        novaListaCards.push(card);
      }
    })
    this.tempCards = novaListaCards;
  }

  //ordena os card por preço
  ordenarPorPreco(){
    this.tempCards = this.auxiliarCards;
    this.tempCards.sort((a: any, b:any) =>{
      return a.preco - b.preco;
    })
  }

 //condição das opções do select
  selectOrd(){
    if(this.selectValue == 'lancamento'){
      this.ordenarPorLancamento();
    }
    else if(this.selectValue == 'preco'){
      this.ordenarPorPreco();
    }

  }

  //direciona para tela details, com detalhes do card
  openCard(card:any){
    this.cardService.salvaCard(card);
    this.router.navigate(['/details'])
  }

}

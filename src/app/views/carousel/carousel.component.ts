import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  index = 0;
  imgs = [
    {url: './assets/images/others/banner-1-1.png'},
    {url: './assets/images/others/banner-2-1.png'},
  ]

  constructor() { }

  ngOnInit(): void {
    this.slide();
  }

  slide(){
    setInterval(() => {
      this.index ++ 
      this.changeslide()
    }, 2000);
  }


  changeslide(){
    const img = document.querySelectorAll('#mainBanner img')

    img.forEach((x, index)=> {
      const y = x as HTMLElement
      y.style.transform = `translateX(${-this.index * 100}%)`
    })

    if(this.index >= img.length - 1){
      this.index = 0
    } else if(this.index <= 0){
      this.index = img.length - 1
    }
  }

}

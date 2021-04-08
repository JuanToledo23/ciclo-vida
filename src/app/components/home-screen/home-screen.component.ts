import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html'
})
export class HomeScreenComponent implements OnInit {

  isLeftVisible=true;
  showSplashScreen=true;
  registerScreen=false;

  constructor(public headerService: HeaderService) {
  
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.headerService.headerElements = {headerVisibility: false, title: 'Registro', showDriverIcon: false, showHelp: false}
    }, 1);
    setTimeout(() => {
      this.showSplashScreen=false;
      this.registerScreen=true;
    }, 3000);
  }

  public optionsCaminar: AnimationOptions = {
    path: 'assets/animations/splash.json',
  };


  animationCreated(animationItem: AnimationItem): void {
  }

  

}

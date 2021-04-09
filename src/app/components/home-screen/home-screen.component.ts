import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { HeaderFooterService } from 'src/app/shared/services/headerFooterService.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html'
})
export class HomeScreenComponent implements OnInit {

  isLeftVisible=true;
  showSplashScreen=true;
  registerScreen=false;

  numEmpleado: string = '';
  llave: string = '';

  constructor(public _HeaderFooterService: HeaderFooterService, private router: Router) {
    this._HeaderFooterService.construirHeader('', '', false, false, false);
    this._HeaderFooterService.mostrarHeader = false;
  }

  ngOnInit(): void {
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

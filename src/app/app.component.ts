import { Component } from '@angular/core';
import { HeaderFooterService } from './shared/services/headerFooterService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'ciclo-vida';
  constructor(public _HeaderFooterService: HeaderFooterService) {}
}

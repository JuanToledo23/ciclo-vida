import { Component, OnInit } from '@angular/core';
import { HeaderFooterService } from '../../services/headerFooterService.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(public _HeaderFooterService: HeaderFooterService) { }

  ngOnInit(): void {
  }

}

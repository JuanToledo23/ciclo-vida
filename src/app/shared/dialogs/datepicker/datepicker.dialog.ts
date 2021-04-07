import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InventarioService } from '../../services/inventarioService.service';
import { TerritoriosService } from '../../services/territotiosService.service';

@Component({
  selector: 'app-datepicker-dialog',
  templateUrl: './datepicker.dialog.html'
})
export class DatepickerDialog implements OnInit {

  selectedDate: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public _TerritoriosService: TerritoriosService, public _InventarioService: InventarioService) {

  } 

  ngOnInit(): void {
  }

  onSelect(event){
    console.log(event);
    this.selectedDate= event;
  }

}
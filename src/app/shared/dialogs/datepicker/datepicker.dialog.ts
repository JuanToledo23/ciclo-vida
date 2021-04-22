import { Component, Inject, OnInit, Pipe, PipeTransform } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InventarioService } from '../../services/inventarioService.service';
import { TerritoriosService } from '../../services/territotiosService.service';
import { DateAdapter } from 'saturn-datepicker';

@Component({
  selector: 'app-datepicker-dialog',
  templateUrl: './datepicker.dialog.html'
})
export class DatepickerDialog implements OnInit {

  selectedDate: any = null;


  days: any = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"];
  month: number = 0;
  dias: any;
  startDate = new Date(2021, 1, 1);

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public _TerritoriosService: TerritoriosService, public _InventarioService: InventarioService, private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('mx');
    this.dateAdapter.getFirstDayOfWeek = () => { return 1; }
    this.dateAdapter.getDayOfWeekNames = () => ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"];
    this.month = new Date().getMonth();
    this.startDate = new Date();
  } 

  ngOnInit(): void {
  }

  onSelect(event){
    console.log(event.getDay());
    this.selectedDate= event;
    let aux = this.getFecha(event);
    console.log(aux);
    this._InventarioService.fechaSeleccionada = this.getFecha(event);
  }

  getFecha(date) {
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    if(month < 10){
      return `${day}-0${month}-${year}`;
    }else{
      return `${day}-${month}-${year}`;}
  }

  ngAfterViewInit(){
    document.getElementsByClassName('mat-calendar-next-button')[0].addEventListener('click', () => {
      if(this.month === 11) {
        this.month = 0;
      } else {
        this.month++;
      }
    });

    document.getElementsByClassName('mat-calendar-previous-button')[0].addEventListener('click', () => {
      if (this.month === 0) {
        this.month = 11
      } else {
        this.month--;
      }
    });
  }

}

@Pipe({
  name: 'nombreMes',  
  pure: false  
})  
export class NombreMesPipe implements PipeTransform {  
  meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  transform(date: any): any {
    return this.meses[date]
  }  
}  
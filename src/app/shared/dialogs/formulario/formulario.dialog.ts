import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-formulario-dialog',
  templateUrl: './formulario.dialog.html'
})
export class FormularioDialog implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(this.data);
  }

  ngOnInit(): void {
  }

}

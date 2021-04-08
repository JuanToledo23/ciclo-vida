import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DatepickerDialog } from 'src/app/shared/dialogs/datepicker/datepicker.dialog';
import { FormularioDialog } from 'src/app/shared/dialogs/formulario/formulario.dialog';
import { HeaderFooterService } from 'src/app/shared/services/headerFooterService.service';
import { InventarioService } from 'src/app/shared/services/inventarioService.service';

@Component({
  selector: 'app-envio-destruccion',
  templateUrl: './envio-destruccion.component.html'
})
export class EnvioDestruccionComponent implements OnInit {

  constructor(public _HeaderFooterService: HeaderFooterService, public dialog: MatDialog, public _InventarioService: InventarioService, private router: Router) {
    this._HeaderFooterService.construirHeader('', 'Devolución a proveedor', true, false, false);
  }

  ngOnInit(): void {
  }

  abrirDialog() {
    const dialogRef = this.dialog.open(DatepickerDialog, {
      disableClose: true,
    });

  }
  continuar() {
        const dialogRef = this.dialog.open(FormularioDialog, {
          disableClose: true,
          data: {
              tipo: 2,
          },
        });
        dialogRef.afterClosed().subscribe(result => {
          if(result) {
            this.router.navigate(['/acciones-cedis']);
          }
        });

  }
}

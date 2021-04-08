import { Component, OnInit } from '@angular/core';
import { HeaderFooterService } from 'src/app/shared/services/headerFooterService.service';
import { DatepickerDialog } from 'src/app/shared/dialogs/datepicker/datepicker.dialog';
import { MatDialog } from '@angular/material/dialog';
import { InventarioService } from 'src/app/shared/services/inventarioService.service';
import { Router } from '@angular/router';
import { FormularioDialog } from 'src/app/shared/dialogs/formulario/formulario.dialog';

@Component({
  selector: 'app-devolucion-proveedor',
  templateUrl: './devolucion-proveedor.component.html'
})
export class DevolucionProveedorComponent implements OnInit {
  
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

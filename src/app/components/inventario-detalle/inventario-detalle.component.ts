import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EChartsOption } from 'echarts';
import { HeaderFooterService } from 'src/app/shared/services/headerFooterService.service';
import { InventarioService } from 'src/app/shared/services/inventarioService.service';

@Component({
  selector: 'app-inventario-detalle',
  templateUrl: './inventario-detalle.component.html'
})
export class InventarioDetalleComponent implements OnInit {

  inventario: any = [];
  articuloMostrado: any;

xAxisData = [];
data1 = [];
data2 = [];
data3 = [];
data4 = [];
data5 = [];
data6 = [];
data7 = [];
data8 = [];
data9 = [];
data10 = [];
data11 = [];
data12 = [];
data13 = [];
data14 = [];
data15 = [];
data16 = [];
data17 = [];
data18 = [];
data19 = [];
data20 = [];
data21 = [];

linea1 = [];
linea2 = [];
linea3 = [];


colorAzul: string = '#476DC5';
colorVerde: string = '#3FAE2B';
colorAmarillo: string = '#FFCC00';

precios: boolean = false;
botonesGrafica: boolean = false;

chartOption: any = {};

newChartOption: any = {};

  constructor(public _HeaderFooterService: HeaderFooterService, private route: ActivatedRoute, public _InventarioService: InventarioService, private router: Router) {

    this.inventario = this._InventarioService.getInventario();

    const routeParams = this.route.snapshot.paramMap;
    const idFromRoute = Number(routeParams.get('id'));
    this.articuloMostrado = this.inventario.find((video: { id: number; }) => video.id === idFromRoute);


    this._HeaderFooterService.construirHeader('', 'Inventario', true, false, true); 
    this.generarDatos(1000000);
  }

  generarDatos(max) {
    for (var i = 0; i < 57; i++) {
      this.data1.push(Math.floor(Math.random() * max) + 500000);
      this.data2.push(Math.floor(Math.random() * max) + 500000);
      this.data3.push(Math.floor(Math.random() * max) + 500000);
      this.data4.push(Math.floor(Math.random() * max) + 500000);
      this.data5.push(Math.floor(Math.random() * max) + 500000);
      this.data6.push(Math.floor(Math.random() * max) + 500000);
      this.data7.push(Math.floor(Math.random() * max) + 500000);
      this.data8.push(Math.floor(Math.random() * max) + 500000);
      this.data9.push(Math.floor(Math.random() * max) + 500000);
      this.data10.push(Math.floor(Math.random() * max) + 500000);
      this.data11.push(Math.floor(Math.random() * max) + 500000);
      this.data12.push(Math.floor(Math.random() * max) + 500000);
      this.data13.push(Math.floor(Math.random() * max) + 500000);
      this.data14.push(Math.floor(Math.random() * max) + 500000);
      this.data15.push(Math.floor(Math.random() * max) + 500000);
      this.data16.push(Math.floor(Math.random() * max) + 500000);
      this.data17.push(Math.floor(Math.random() * max) + 500000);
      this.data18.push(Math.floor(Math.random() * max) + 500000);
      this.data19.push(Math.floor(Math.random() * max) + 500000);
      this.data20.push(Math.floor(Math.random() * max) + 500000);
      this.data21.push(Math.floor(Math.random() * max) + 500000);
      this.linea1.push(Math.floor(Math.random() * max));
      this.linea2.push(Math.floor(Math.random() * max));
      this.linea3.push(Math.floor(0));
    }

  for (let index = 7; index <= 52; index++) {
    this.xAxisData.push('Sem ' + index);
  }

  for (let index = 1; index <= 52; index++) {
      this.xAxisData.push('Sem ' + index);
      this.linea2.push(140000);
      this.linea3.push(Math.floor(Math.random() * max));
    }
  }

  limpiarData() {
    this.xAxisData = [];
    this.data1 = [];
    this.data2 = [];
    this.data3 = [];
    this.data4 = [];
    this.data5 = [];
    this.data6 = [];
    this.data7 = [];
    this.data8 = [];
    this.data9 = [];
    this.data10 = [];
    this.data11 = [];
    this.data12 = [];
    this.data13 = [];
    this.data14 = [];
    this.data15 = [];
    this.data16 = [];
    this.data17 = [];
    this.data18 = [];
    this.data19 = [];
    this.data20 = [];
    this.data21 = [];

    this.linea1 = [];
    this.linea2 = [];
    this.linea3 = [];
  }

  getInfo() {
    return {
      tooltip: {},
      xAxis: {
        data: this.xAxisData,
        name: '',
      },
      yAxis: [
        {
          id:   'AvgAxis',
          type: 'value',
          name: 'Inventario',
          axisLabel: { 
            formatter: function (value, index) {
                      let aux = value/1000000;
                      return aux + 'M';
                  }
            },
            nameTextStyle: {
              padding: [5, 0, 15, 0]
            }
        },
        {
            id:   'MaxAxis',
            type: 'value',
            name: 'Venta',
            axisLabel: { 
              formatter: function (value, index){
                let aux = value/1000;
                return aux + 'K';
              }
            },
            nameTextStyle: {
              padding: [5, 0, 15, 60]
            }
        }
      ],
      grid: {
        left: 25,
        top: 40,
        right: 46,
        bottom: 40
      },
      dataZoom: [
        {
          type: 'inside',
          xAxisIndex: 0,
          minSpan: 5,
          startValue: 0,
          endValue: 21
        }, 
        {
            type: 'slider',
            xAxisIndex: 0,
            minSpan: 5,
            bottom: 50
        }
      ],
      
      series: [
        {
          name: 'bar',
          type: 'bar',
          stack: 'uno',
          data: this.data1,
          barGap: '50%',
          barCategoryGap: '3%',
          color: this.colorAzul,
          
        },
        {
          name: 'bar2',
          type: 'bar',
          stack: 'uno',
          data: this.data2,
          barGap: '50%',
          barCategoryGap: '3%',
          color: this.colorVerde
        },
        {
          name: 'bar3',
          type: 'bar',
          stack: 'uno',
          data: this.data3,
          barGap: '50%',
          barCategoryGap: '3%',
          color: this.colorAmarillo
        },
        {
          name: 'bar4',
          type: 'bar',
          stack: 'dos',
          data: this.data4,
          barGap: '50%',
          barCategoryGap: '3%',
          color: this.colorAzul
        },
        {
          name: 'bar5',
          type: 'bar',
          stack: 'dos',
          data: this.data5,
          barGap: '50%',
          barCategoryGap: '3%',
          color: this.colorVerde
        },
        {
          name: 'bar6',
          type: 'bar',
          stack: 'dos',
          data: this.data6,
          barGap: '50%',
          barCategoryGap: '3%',
          color: this.colorAmarillo
        },
        {
          name: 'bar7',
          type: 'bar',
          stack: 'tres',
          data: this.data7,
          barGap: '50%',
          barCategoryGap: '3%',
          color: this.colorAzul
        },
        {
          name: 'bar8',
          type: 'bar',
          stack: 'tres',
          data: this.data8,
          barGap: '50%',
          barCategoryGap: '3%',
          color: this.colorVerde
        },
        {
          name: 'bar9',
          type: 'bar',
          stack: 'tres',
          data: this.data9,
          barGap: '50%',
          barCategoryGap: '3%',
          color: this.colorAmarillo
        },
        {
          name: 'bar10',
          type: 'bar',
          stack: 'cuatro',
          data: this.data10,
          barGap: '50%',
          barCategoryGap: '3%',
          color: this.colorAzul
        },
        {
          name: 'bar11',
          type: 'bar',
          stack: 'cuatro',
          data: this.data11,
          barGap: '50%',
          barCategoryGap: '3%',
          color: this.colorVerde
        },
        {
          name: 'bar12',
          type: 'bar',
          stack: 'cuatro',
          data: this.data12,
          barGap: '50%',
          barCategoryGap: '3%',
          color: this.colorAmarillo
        },
        {
          name: 'bar13',
          type: 'bar',
          stack: 'cinco',
          data: this.data13,
          barGap: '50%',
          barCategoryGap: '3%',
          color: this.colorAzul
        },
        {
          name: 'bar14',
          type: 'bar',
          stack: 'cinco',
          data: this.data14,
          barGap: '50%',
          barCategoryGap: '3%',
          color: this.colorVerde
        },
        {
          name: 'bar15',
          type: 'bar',
          stack: 'cinco',
          data: this.data15,
          barGap: '50%',
          barCategoryGap: '3%',
          color: this.colorAmarillo
        },
        {
          name: 'bar16',
          type: 'bar',
          stack: 'seis',
          data: this.data16,
          barGap: '50%',
          barCategoryGap: '3%',
          color: this.colorAzul
        },
        {
          name: 'bar17',
          type: 'bar',
          stack: 'seis',
          data: this.data17,
          barGap: '50%',
          barCategoryGap: '3%',
          color: this.colorVerde
        },
        {
          name: 'bar18',
          type: 'bar',
          stack: 'seis',
          data: this.data18,
          barGap: '50%',
          barCategoryGap: '3%',
          color: this.colorAmarillo
        },
        {
          name: 'bar19',
          type: 'bar',
          stack: 'siete',
          data: this.data19,
          barGap: '50%',
          barCategoryGap: '3%',
          color: this.colorAzul
        },
        {
          name: 'bar20',
          type: 'bar',
          stack: 'siete',
          data: this.data20,
          barGap: '50%',
          barCategoryGap: '3%',
          color: this.colorVerde
        },
        {
          name: 'bar21',
          type: 'bar',
          stack: 'siete',
          data: this.data21,
          barGap: '50%',
          barCategoryGap: '3%',
          color: this.colorAmarillo
        },
    
        {
          type: 'line',
          data: this.linea1,
          yAxisIndex: 1,
          color: '#FF9F17',
          showAllSymbol: 'auto',
          symbol: 'circle',
          symbolSize: 7,
          lineStyle: {
            width: 2
          },
        },
        {
          type: 'line',
          data: this.linea2,
          yAxisIndex: 1,
          color: '#15b5f7',
          showAllSymbol: 'auto',
          symbol: 'circle',
          symbolSize: 7,
          lineStyle: {
            color: '#15b5f7',
            width: 2
          },
          itemStyle: {
            color: "#4078ca",
            borderColor: "#15b5f7",
            borderWidth: 1,
          },
        },
        {
          data: this.linea3,
          yAxisIndex: 1,
          type: 'line',
          areaStyle: {
            color: '#dddee0'
          },
          lineStyle: {
            opacity: 0
          },
          itemStyle: {
            opacity: 0
          }
        } 
      ]
    }
  }

  ngOnInit(): void {
    this.chartOption = this.getInfo();
  }

  descuentoProceso(articuloMostrado) {
    this.router.navigate(['/acciones-tienda', articuloMostrado.id]);
  }

  cambioGrafica(tipo) {
    this.limpiarData();
    if(tipo === 'pieza'){
      this.botonesGrafica = false;
      this.generarDatos(1000000);
      this.newChartOption = this.getInfo();
    } else if (tipo === 'monto') {
      this.botonesGrafica = true;
      this.generarDatos(22000000);
      this.newChartOption = this.getInfo();
    }
  }

}

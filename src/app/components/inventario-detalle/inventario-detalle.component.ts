import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { HeaderFooterService } from 'src/app/shared/services/headerFooterService.service';

@Component({
  selector: 'app-inventario-detalle',
  templateUrl: './inventario-detalle.component.html'
})
export class InventarioDetalleComponent implements OnInit {

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

link = [];

colorAzul: string = '#476DC5';
colorVerde: string = '#3FAE2B';
colorAmarillo: string = '#FFCC00';


emphasisStyle = {
    itemStyle: {
        shadowBlur: 10,
        shadowColor: 'rgba(0,0,0,0.3)',
        gapWidth: 5
    }
};

chartOption: EChartsOption = {
  /* legend: {
    data: ['bar', 'bar2', 'bar3', 'bar4'],
  }, */
  tooltip: {},
  xAxis: {
    data: this.xAxisData,
    name: '',
    // axisLine: {onZero: false},
    // splitLine: {show: false},
    // splitArea: {show: false}
    // axisTick: {
    //   alignWithLabel: true
    // }
  },
  yAxis: [
    {
      id:   'AvgAxis',
      type: 'value',
      name: 'Inventario',
      // min: 0,
      // max: 30,
      // interval: 5,
      axisLabel: { 
        formatter: function (value, index) {
                  let aux = value/1000000;
                  return aux + 'M';
              }
        }
    },
  {
      id:   'MaxAxis',
      type: 'value',
      name: 'Venta',
      min: 0,
      max: 1000,
      interval: 100,
      axisLabel: { formatter: '{value} K' }
  }
  ],
  // yAxis: [
  //   {
  //     axisLabel: {
  //       formatter: function (value, index) {
  //         let aux = value/1000000;
  //         return aux + 'M';
  //     },
  //     fontSize: '12'
  //     }
  //   },
  //   {
  //     type: 'value',
  //     name: "Wi-Fi\nUsers",
  //     min: 0,
  //     max: 500,
  //     position: 'right',
  //     offset:90,
  //     splitLine: {
  //         show: true
  //     },
  //   }
  // ],
  // grid: {
  //   bottom: 100
  // },
  grid: {
    left: 30,
    top: 40,
    right: 50,
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
      emphasis: this.emphasisStyle,
      data: this.data1,
      color: this.colorAzul,
    },
    {
      name: 'bar2',
      type: 'bar',
      stack: 'uno',
      emphasis: this.emphasisStyle,
      data: this.data2,
      color: this.colorVerde
    },
    {
      name: 'bar3',
      type: 'bar',
      stack: 'uno',
      emphasis: this.emphasisStyle,
      data: this.data3,
      color: this.colorAmarillo
    },
    {
      name: 'bar4',
      type: 'bar',
      stack: 'dos',
      emphasis: this.emphasisStyle,
      data: this.data4,
      color: this.colorAzul
    },
    {
      name: 'bar5',
      type: 'bar',
      stack: 'dos',
      emphasis: this.emphasisStyle,
      data: this.data5,
      color: this.colorVerde
    },
    {
      name: 'bar6',
      type: 'bar',
      stack: 'dos',
      emphasis: this.emphasisStyle,
      data: this.data6,
      color: this.colorAmarillo
    },
    {
      name: 'bar7',
      type: 'bar',
      stack: 'tres',
      emphasis: this.emphasisStyle,
      data: this.data7,
      color: this.colorAzul
    },
    {
      name: 'bar8',
      type: 'bar',
      stack: 'tres',
      emphasis: this.emphasisStyle,
      data: this.data8,
      color: this.colorVerde
    },
    {
      name: 'bar9',
      type: 'bar',
      stack: 'tres',
      emphasis: this.emphasisStyle,
      data: this.data9,
      color: this.colorAmarillo
    },
    {
      name: 'bar10',
      type: 'bar',
      stack: 'cuatro',
      emphasis: this.emphasisStyle,
      data: this.data10,
      color: this.colorAzul
    },
    {
      name: 'bar11',
      type: 'bar',
      stack: 'cuatro',
      emphasis: this.emphasisStyle,
      data: this.data11,
      color: this.colorVerde
    },
    {
      name: 'bar12',
      type: 'bar',
      stack: 'cuatro',
      emphasis: this.emphasisStyle,
      data: this.data12,
      color: this.colorAmarillo
    },
    {
      name: 'bar13',
      type: 'bar',
      stack: 'cinco',
      emphasis: this.emphasisStyle,
      data: this.data13,
      color: this.colorAzul
    },
    {
      name: 'bar14',
      type: 'bar',
      stack: 'cinco',
      emphasis: this.emphasisStyle,
      data: this.data14,
      color: this.colorVerde
    },
    {
      name: 'bar15',
      type: 'bar',
      stack: 'cinco',
      emphasis: this.emphasisStyle,
      data: this.data15,
      color: this.colorAmarillo
    },
    {
      name: 'bar16',
      type: 'bar',
      stack: 'seis',
      emphasis: this.emphasisStyle,
      data: this.data16,
      color: this.colorAzul
    },
    {
      name: 'bar17',
      type: 'bar',
      stack: 'seis',
      emphasis: this.emphasisStyle,
      data: this.data17,
      color: this.colorVerde
    },
    {
      name: 'bar18',
      type: 'bar',
      stack: 'seis',
      emphasis: this.emphasisStyle,
      data: this.data18,
      color: this.colorAmarillo
    },
    {
      name: 'bar19',
      type: 'bar',
      stack: 'siete',
      emphasis: this.emphasisStyle,
      data: this.data19,
      color: this.colorAzul
    },
    {
      name: 'bar20',
      type: 'bar',
      stack: 'siete',
      emphasis: this.emphasisStyle,
      data: this.data20,
      color: this.colorVerde
    },
    {
      name: 'bar21',
      type: 'bar',
      stack: 'siete',
      emphasis: this.emphasisStyle,
      data: this.data21,
      color: this.colorAmarillo
    },

    {
      type: 'line',
      data: this.linea1,
      yAxisIndex: 1,
      color: '#FF9F17'
    },
    {
      type: 'line',
      data: this.linea2,
      yAxisIndex: 1,
      color: '#15b5f7'
    }
/*     {
      type: 'graph',
      layout: 'none',
      coordinateSystem: 'cartesian2d',
      symbolSize: 5,
      edgeSymbol: ['circle'],
      edgeSymbolSize: [0, 0],
      data: this.linea1,
      links: this.link,
      lineStyle: {
              color: '#ffa015',
              width:1,
              opacity: 1

      },
      label: {
          formatter: function(){
              return '';
          }
      },
      color: '#ffa015',
    } */

  ]
}



  constructor(public _HeaderFooterService: HeaderFooterService) {
    this._HeaderFooterService.construirHeader('', 'Inventario', true, false); 
  for (var i = 0; i < 57; i++) {
    this.data1.push(Math.floor(Math.random() * 1000000) + 500000);
    this.data2.push(Math.floor(Math.random() * 1000000) + 500000);
    this.data3.push(Math.floor(Math.random() * 1000000) + 500000);
    this.data4.push(Math.floor(Math.random() * 1000000) + 500000);
    this.data5.push(Math.floor(Math.random() * 1000000) + 500000);
    this.data6.push(Math.floor(Math.random() * 1000000) + 500000);
    this.data7.push(Math.floor(Math.random() * 1000000) + 500000);
    this.data8.push(Math.floor(Math.random() * 1000000) + 500000);
    this.data9.push(Math.floor(Math.random() * 1000000) + 500000);
    this.data10.push(Math.floor(Math.random() * 1000000) + 500000);
    this.data11.push(Math.floor(Math.random() * 1000000) + 500000);
    this.data12.push(Math.floor(Math.random() * 1000000) + 500000);
    this.data13.push(Math.floor(Math.random() * 1000000) + 500000);
    this.data14.push(Math.floor(Math.random() * 1000000) + 500000);
    this.data15.push(Math.floor(Math.random() * 1000000) + 500000);
    this.data16.push(Math.floor(Math.random() * 1000000) + 500000);
    this.data17.push(Math.floor(Math.random() * 1000000) + 500000);
    this.data18.push(Math.floor(Math.random() * 1000000) + 500000);
    this.data19.push(Math.floor(Math.random() * 1000000) + 500000);
    this.data20.push(Math.floor(Math.random() * 1000000) + 500000);
    this.data21.push(Math.floor(Math.random() * 1000000) + 500000);
    this.linea1.push(Math.floor(Math.random() * 1000));
    this.linea2.push(Math.floor(Math.random() * 1000));
  }

  // for (let index = 0; index < 40; index++) {
  //   const element = array[index];
    
  // }

  for (let index = 7; index < 53; index++) {
    this.xAxisData.push('Sem ' + index);
  }
/* 
  this.link = this.linea1.map(function (item, i) {
    return {
        source: i,
        target: i + 1
    };
  }); */

  
  }

  ngOnInit(): void {
  }

}

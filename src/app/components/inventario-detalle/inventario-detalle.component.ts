import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

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

emphasisStyle = {
    itemStyle: {
        shadowBlur: 10,
        shadowColor: 'rgba(0,0,0,0.3)'
    }
};

chartOption: EChartsOption = {
  legend: {
    data: ['bar', 'bar2', 'bar3', 'bar4'],
    left: '10%'
  },
  brush: {
    toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
    xAxisIndex: 0
  },
  tooltip: {},
  xAxis: {
    data: this.xAxisData,
    name: 'X Axis',
    axisLine: {onZero: true},
    splitLine: {show: false},
    splitArea: {show: false}
  },
  yAxis: {},
  grid: {
    bottom: 100
  },
  series: [
    {
      name: 'bar',
      type: 'bar',
      stack: 'one',
      emphasis: this.emphasisStyle,
      data: this.data1
    },
    {
      name: 'bar2',
      type: 'bar',
      stack: 'one',
      emphasis: this.emphasisStyle,
      data: this.data2
    },
    {
      name: 'bar3',
      type: 'bar',
      stack: 'two',
      emphasis: this.emphasisStyle,
      data: this.data3
    },
    {
      name: 'bar4',
      type: 'bar',
      stack: 'two',
      emphasis: this.emphasisStyle,
      data: this.data4
    }
  ]
}

  constructor() { 
  for (var i = 0; i < 10; i++) {
    this.xAxisData.push('Class' + i);
    this.data1.push((Math.random() * 2).toFixed(2));
    this.data2.push((Math.random() * 5).toFixed(2));
    this.data3.push((Math.random() + 0.3).toFixed(2));
    this.data4.push(-Math.random().toFixed(2));
  }
  
  }

  ngOnInit(): void {
  }

}

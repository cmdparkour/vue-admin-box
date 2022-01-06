import * as echarts from 'echarts/core';
const dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'];
const data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
const yMax = 500;
const dataShadow = [];

for (let i = 0; i < data.length; i++) {
  dataShadow.push(yMax);
}
const options = {
  title: {
    text: '特性示例：渐变色 阴影 点击 缩放',
    subtext: 'Feature Sample: Gradient Color, Shadow, Click, Zoom',
  },
  xAxis: {
    data: dataAxis,
    axisLabel: {
      inside: true,
    },
    textStyle: {
      color: '#fff',
    },
    axisTick: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    z: 10,
  },
  yAxis: {
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLabel: {},
    textStyle: {
      color: '#999',
    },
  },
  dataZoom: [
    {
      type: 'inside',
    },
  ],
  series: [
    {
      type: 'bar',
      showBackground: true,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#83bff6' },
          { offset: 0.5, color: '#188df0' },
          { offset: 1, color: '#188df0' },
        ]),
      },
      emphasis: {
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#2378f7' },
            { offset: 0.7, color: '#2378f7' },
            { offset: 1, color: '#83bff6' },
          ]),
        },
      },
      data: data,
    },
  ],
};

export default options;

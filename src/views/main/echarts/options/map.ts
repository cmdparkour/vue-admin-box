import gdMap from './mapData.json'
import * as echarts from 'echarts/core'
var nameMap = 'china';
// 0表示未开发，1表示开发中
var data = [
  { name: '北京', value: 1290 },
  { name: '天津', value: 42 },
  { name: '河北', value: 1 },
  { name: '山西', value: 0 },
  { name: '内蒙古', value: 0 },
  { name: '辽宁', value: 0 },
  { name: '吉林', value: 0 },
  { name: '黑龙江', value: 0 },
  { name: '上海', value: 1129 },
  { name: '江苏', value: 399 },
  { name: '浙江', value: 102 },
  { name: '安徽', value: 1 },
  { name: '福建', value: 299 },
  { name: '江西', value: 302 },
  { name: '山东', value: 1 },
  { name: '河南', value: 1 },
  { name: '湖北', value: 998 },
  { name: '湖南', value: 480 },
  { name: '重庆', value: 1580 },
  { name: '四川', value: 372 },
  { name: '贵州', value: 69 },
  { name: '云南', value: 695 },
  { name: '西藏', value: 0 },
  { name: '陕西', value: 1 },
  { name: '甘肃', value: 56 },
  { name: '青海', value: 10 },
  { name: '宁夏', value: 1 },
  { name: '新疆', value: 0 },
  { name: '广东', value: 1988 },
  { name: '广西', value: 1860 },
  { name: '海南', value: 14 },
  { name: '香港', value: 879 },
  { name: '澳门', value: 209 },
  { name: '台湾', value: 0 },
];

var geoCoordMap: any = {};
var convertData = function (data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name];
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value),
      });
    }
  }
  return res;
};

echarts.registerMap(nameMap, gdMap);
/*获取地图数据*/
var mapFeatures = echarts.getMap(nameMap).geoJson.features;
mapFeatures.forEach(function (v) {
  // 地区名称
  var name = v.properties.name;
  // 地区经纬度
  geoCoordMap[name] = v.properties.center;
});
const options = {
  backgroundColor: '#0F1C3C',
  title: [
    {
      top: '31.5%',
      text: '月规模',
      // subtext: '虚拟数据',
      left: '105',
      show: true,
      textStyle: {
        color: '#fff',
      },
    },
  ],
  tooltip: {
    position: function (p) {
      //其中p为当前鼠标的位置
      return [p[0] + 10, p[1] - 10];
    },
    extraCssText: 'max-height:40px;',
    triggerOn: 'mousemove|click',
    formatter: function (e, t, n) {
      if (typeof e.value[2] == 'undefined') {
        if (e.value == '0') {
          return e.name + "：<span style='color: #999;'>未开发</span>";
        } else if (e.value == '1') {
          return e.name + "：<span style='color: blue;'>开发中</span>";
        } else {
          return e.name + "：<span style='color: red;'>" + e.value + '</span> 万';
        }
      }
      //有数量时，显示城市和当前城市所做项目数
      else {
        return e.name + "：<span style='color: red;'>" + e.value[2] + '</span> 万'; //params.value[2]  取出value值中的第三个值  前两个值是经纬度，第三个值是数量
      }
    },
  },
  visualMap: [
    {
      left: 90,
      bottom: '20%',
      min: 0,
      max: 1000,
      show: true,
      //   text: ['High', 'Low'],
      realtime: false,
      calculable: false,
      seriesIndex: [0],
      orient: 'horizontal',
      textStyle: {
        color: 'rgba(175,224,254,.9)',
      },
      pieces: [
        {
          gt: 3,
          label: '已开发',
          color: '#134B1C',
        },
        {
          gte: 1,
          lte: 1,
          label: '开发中',
          color: '#4A4003',
        },
        {
          gte: 0,
          lte: 0,
          label: '未开发',
          color: '#00336C',
        },
      ],
    },
    {
      left: 90,
      // top: this.chinaBox / 2 + 52,
      top: '30%',
      min: 0,
      max: 1000,
      seriesIndex: 1,
      show: true,
      splitNumber: 4,
      padding: [50, 20, 20, 20],
      backgroundColor: 'rgba(255,255,255,.2)',
      textStyle: {
        color: 'rgba(175,224,254,.9)',
      },
      inRange: {
        // color: ['#8B77FF', '#4FCCFF', '#6FE621', '#FFC760', '#FB497C'].reverse(),
        symbolSize: [8, 15],
        symbol: 'circle',
      },
      formatter: function (value) {
        return '';
      },
      pieces: [
        {
          gt: 1000,
          label: '1000万以上',
          color: '#FB497C',
        },
        {
          gte: 500,
          lte: 1000,
          label: '500-1000万',
          color: '#FFC760',
        },
        {
          gte: 300,
          lt: 500,
          label: '300-500万',
          color: '#6FE621',
        },
        {
          gt: 100,
          lt: 300,
          label: '100-300万',
          color: '#4FCCFF',
        },
        {
          lt: 100,
          gt: 3,
          label: '100万以下',
          color: '#DAB2FF',
        },
      ],
    },
  ],
  geo: {
    // 背景地图
    map: nameMap,
    zoom: 1.2,
    show: false, // 是否显示背景地图
    roam: true,
    label: {
      show: false
    },
    emphasis: {
      label: {
        show: false
      }
    }
  },
  series: [
    {
      // 地图块的相关信息
      type: 'map',
      map: nameMap,
      zoom: 1.2,
      label: {
        show: true,
      },
      textStyle: {
        fontSize: 12,
        fontWeight: 400,
        color: 'rgb(255,255,255)',
      },
      itemStyle: {
        // 地图边框设置
        borderColor: 'rgba(175,224,254,.4)',
        fontWeightL: 700,
        borderWidth: 0.5,
      },
      // hover效果
      emphasis: {
        label: {// 文字hover颜色
          show: true, //是否在高亮状态下显示标签。
        },
        textStyle: {
          color: '#ff0',
        }, //高亮状态下的标签文本样式。
        itemStyle: {
          areaColor: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#00499B', // 0% 处的颜色
              },
              {
                offset: 1,
                color: '#00499B', // 100% 处的颜色
              },
            ],
            globalCoord: false, // 缺省为 false
          }
        }
      },
      // 点击效果
      select: {
        itemStyle: {
          areaColor: '#ccb32c',
        },
      },
      data: data,
    },
    {
      // 水波纹
      type: 'effectScatter',
      coordinateSystem: 'geo',
      data: convertData(
        data
          .sort(function (a, b) {
            return b.value - a.value;
          })
          .slice(0, 50)
      ),
      showEffectOn: 'render',
      // symbolOffset: [-10, 10], //偏移
      rippleEffect: {
        period: 10, // 动画时间，值越小速度越快
        scale: 4, // 波纹圆环最大限制，值越大波纹越大
        brushType: 'fill', // 波纹绘制方式 stroke, fill
      },
      zlevel: 2,
    },
  ],
};

export default options

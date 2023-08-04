var xAxis_data = ["01月", "02月", "03月", "04月", "05月", "06月", "07月", "08月", "09月", "10月", "11月", "12月"]
var data_A = [820, 932, 901, 934, 1290, 1330, 1320, 720, 832, 501, 334, 990]
var data_B = [720, 832, 501, 334, 990, 830, 720, 620, 732, 801, 1134, 908]
var data_C = [620, 732, 801, 1134, 908, 930, 920, 820, 932, 901, 934, 1290]
var names = ['2018年实际管理费用', '2019年预算费用', '2020年实际使用预算']
var color = ['#4D8EFF', '#84BFFF', '#FE9D9A']

const option = {
  tooltip: {
    trigger: 'axis',
    // formatter: '{b}<br />{a2}:{c2}%<br />{a1}:{c1}%<br />{a0}:{c0}%'
    formatter: function (params, ticket, callback) {
      var htmlStr = '';
      for (var i = 0; i < params.length; i++) {
        var param = params[i];
        var xName = param.name;//x轴的名称
        var seriesName = param.seriesName;//图例名称
        var value = param.value;//y轴值
        var color = param.color;//图例颜色
        if (i === 0) {
          htmlStr += xName + '<br/>';//x轴的名称
        }
        htmlStr += '<div>';
        htmlStr += '<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:' + color + ';"></span>';//一个点
        htmlStr += seriesName + '：' + value + '万元';//圆点后面显示的文本
        htmlStr += '</div>';
      }
      return htmlStr;
    }
  },
  grid: {       //页边距
    top: '20%',
    left: '1%',
    right: '1%',
    bottom: '1%',
    containLabel: true
  },
  legend: {      // 图例
    top: '5%',
    // right:'20%',
    data: names
  },

  xAxis: {
    type: 'category',
    data: xAxis_data,
    axisLine: {//坐标线
      lineStyle: {
        type: 'solid',
        color: '#E3E3E3', //轴线的颜色
        width: '2' //坐标线的宽度
      }
    },
    axisLabel: {
      formatter: '{value}',
    },
    textStyle: {
      fontSize: 12,
      fontFamily: 'PingFang SC',
      fontWeight: 400,
      lineHeight: 17,
      color: '#646464', //坐标值的具体的颜色
      opacity: 1,
    },
    axisTick: {
      show: false
    }
  },
  yAxis: {
    type: 'value',
    axisLine: {//线
      show: false
    },
    axisTick: {//刻度
      show: false
    },
    axisLabel: {
      formatter: '{value}',
    },
    textStyle: {
      fontSize: 12,
      fontFamily: 'PingFang SC',
      fontWeight: 400,
      lineHeight: 17,
      color: '#979A9F', //坐标值的具体的颜色
      opacity: 1,
    },
    splitLine: {
      lineStyle: {
        type: 'dashed',
        width: 2,
        color: ['#E3E3E3'] //分割线的颜色
        // color: ['#5d5d5d'] //分割线的颜色
      }
    }
  },
  series: [
    {
      type: 'bar',
      name: names[1],
      data: data_A,
      symbolSize: 9, //设置拐点大小
      itemStyle: {
        color: color[0]
      },
      lineStyle: {
        width: 2,
        type: 'solid'  //'dotted'虚线 'solid'实线
      }
    }, {
      type: 'bar',
      name: names[2],
      data: data_B,
      symbolSize: 9, //设置拐点大小
      itemStyle: {
        color: color[1]
      },
      lineStyle: {
        width: 2,
        type: 'solid'  //'dotted'虚线 'solid'实线
      }
    }, {
      type: 'line',
      name: names[0],
      data: data_C,
      symbolSize: 9, //设置拐点大小
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0, color: '#fe9d9a66' // 0% 处的颜色
          }, {
            offset: 1, color: '#fe9d9a00' // 100% 处的颜色
          }],
          global: false // 缺省为 false
        }
      },
      color: color[2], //设置颜色
      lineStyle: {
        width: 2,
        type: 'solid'  //'dotted'虚线 'solid'实线
      }
    },
  ]
}

export default option
const options = {
  title: {
    text: '南丁格尔玫瑰图',
    subtext: '纯属虚构',
    left: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    left: 'center',
    top: 'bottom',
    data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: '半径模式',
      type: 'pie',
      radius: [20, 140],
      center: ['25%', '50%'],
      roseType: 'radius',
      itemStyle: {
        borderRadius: 5
      },
      label: {
        show: false
      },
      emphasis: {
        label: {
          show: true
        }
      },
      data: [
        { value: 40, name: 'rose1' },
        { value: 33, name: 'rose2' },
        { value: 28, name: 'rose3' },
        { value: 22, name: 'rose4' },
        { value: 20, name: 'rose5' },
        { value: 15, name: 'rose6' },
        { value: 12, name: 'rose7' },
        { value: 10, name: 'rose8' }
      ]
    },
    {
      name: '面积模式',
      type: 'pie',
      radius: [20, 140],
      center: ['75%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 5
      },
      data: [
        { value: 30, name: 'rose1' },
        { value: 28, name: 'rose2' },
        { value: 26, name: 'rose3' },
        { value: 24, name: 'rose4' },
        { value: 22, name: 'rose5' },
        { value: 20, name: 'rose6' },
        { value: 18, name: 'rose7' },
        { value: 16, name: 'rose8' }
      ]
    }
  ]
}

export default options
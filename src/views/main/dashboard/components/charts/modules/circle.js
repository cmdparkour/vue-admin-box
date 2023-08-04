const option = {
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 10
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '26',
          fontWeight: 'bold',
          formatter: (p) => {
            let dom = `<div backgroundColor="red">1</div>`
            return p.name + '\n' + p.value
          }
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: '搜索引擎' },
        { value: 735, name: '直接访问' },
        { value: 580, name: '邮件营销' },
        { value: 484, name: '联盟广告' },
        { value: 300, name: '视频广告' }
      ]
    }
  ]
};

export default option
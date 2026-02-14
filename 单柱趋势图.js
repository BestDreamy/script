// X 轴
const xAxisData = ['1KiB', '1MiB', '32MiB', '64MiB'];

const Data = [24.313, 228, 6993, 14014];

const emphasisStyle = {
  itemStyle: {
    shadowBlur: 10,
    shadowColor: 'rgba(0,0,0,0.3)'
  }
};

// Colors for the stacked min, avg, max bars
const colorScheme = {
  nbi: ['#5070dd', '#b6d634', '#505372'], // Red, Yellow, Green
  blocking: ['#ff994d', '#0ca8df', '#ffd10a'], // Blue, Pink, Light Yellow
  c2c: ['#fb628b', '#785db0', '#3fbe95'] // Red, Blue, Green
};

option = {
  textStyle: {
    fontFamily: 'Times New Roman', // Academic Font
    fontSize: 16
  },
  legend: [
    // 第一行：pccl
    {
      data: ['putmem_nbi_signal'],
      left: '83%',
      top: '1%',
      textStyle: {
        fontFamily: 'Times New Roman',
        fontWeight: 'bold',
        // color: '#000'
      }
    },
  
  ],

  tooltip: {},
  xAxis: {
    data: xAxisData,
    // name: 'Data Size',

    axisLabel: {
      fontFamily: 'Times New Roman',
      fontWeight: 'bold',
      color: '#000',
      fontSize: 18
    }
  },
  yAxis: {
    type: 'log',
    logBase: 10, 
    
    name: 'Per-iter Time (us)',
     nameTextStyle: {
      fontFamily: 'Times New Roman',
      fontWeight: 'bold',
      fontSize: 20,
      color: '#000'
    },
    axisLabel: {
      fontFamily: 'Times New Roman',
      fontWeight: 'bold',
      color: '#000',
      fontSize: 18
    }
  },
  series: [
    {
      name: 'putmem_nbi_signal',
      type: 'bar',
      data: Data,
      emphasis: emphasisStyle,
      itemStyle: {
        color: '#000111' // Color for pccl bar
      },
    },
  
  ]
};
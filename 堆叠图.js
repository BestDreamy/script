// X 轴
const xAxisData = ['1KiB', '16KiB', '64KiB', '1MiB'];

// 示例数据：每个 [min, avg, max]
const nbiPutTimeData = [
  [2.22, 6.19, 25.21],   // 1KB
  [2.36, 5.15, 15.06],   // 16KB
  [3.62, 7.23, 15.92],   // 64KB
  [42.92, 62.70, 166.20] // 1MB
];
const nbiGetTimeData = [
  [2.64, 6.42, 25.09],
  [2.71, 7.06, 25.17],
  [4.23, 9.35, 25.22],
  [59.85, 110.42, 377.92]
];
const nbiPutGbpsData = [
  [0.04, 0.32, 0.50],
  [1.18, 4.85, 7.69],
  [4.67, 12.97, 21.84],
  [6.92, 22.62, 27.85]
];
const nbiGetGbpsData = [
  [0.04, 0.28, 0.42],
  [0.70, 3.78, 6.60],
  [2.81, 10.27, 18.34],
  [3.03, 14.73, 19.67]
];

// =============== BLOCKING ===============
const blockingPutTimeData = [
  [2.44, 6.63, 25.32],
  [2.53, 6.65, 25.39],
  [3.71, 7.51, 26.22],
  [42.97, 62.36, 166.06]
];
const blockingGetTimeData = [
  [2.92, 6.72, 25.46],
  [3.04, 7.41, 25.52],
  [4.31, 9.43, 25.60],
  [59.12, 109.38, 374.84]
];
const blockingPutGbpsData = [
  [0.04, 0.29, 0.45],
  [0.70, 4.25, 7.03],
  [2.78, 13.00, 20.15],
  [6.91, 22.85, 27.82]
];
const blockingGetGbpsData = [
  [0.04, 0.26, 0.38],
  [0.69, 3.48, 5.92],
  [2.77, 10.36, 18.24],
  [3.02, 14.81, 19.90]
];

// =============== C2C ===============
const c2cPutTimeData = [
  [0.44, 0.54, 0.91],
  [0.77, 1.06, 2.69],
  [2.88, 3.96, 10.44],
  [46.53, 62.98, 164.50]
];
const c2cGetTimeData = [
  [0.87, 1.20, 2.35],
  [0.98, 1.78, 5.98],
  [3.69, 6.81, 23.31],
  [59.76, 108.18, 374.97]
];
const c2cPutGbpsData = [
  [1.46, 2.31, 2.56],
  [6.67, 20.81, 25.22],
  [6.92, 22.84, 28.14],
  [7.00, 22.65, 28.05]
];
const c2cGetGbpsData = [
  [0.50, 1.08, 1.28],
  [2.97, 14.37, 19.73],
  [3.02, 14.99, 20.02],
  [3.04, 15.09, 20.02]
];

const pcclTimeData = [24.38, 31.5, 34.87, 228.3];
const pcclGbpsData = [0.04, 0.52, 1.88, 4.59];

// const nbiData = nbiPutTimeData;
// const blockingData = blockingPutTimeData;
// const c2cData = c2cPutTimeData;
const nbiData = nbiGetTimeData;
const blockingData = blockingGetTimeData;
const c2cData = c2cGetTimeData;
// const nbiData = nbiGetGbpsData;
// const blockingData = blockingGetGbpsData;
// const c2cData = c2cGetGbpsData;
// const nbiData = nbiPutGbpsData;
// const blockingData = blockingPutGbpsData;
// const c2cData = c2cPutGbpsData;

const pcclData = pcclGbpsData;

// 提取 min/avg/max 列（按 X 轴顺序）
const nbiMin = nbiData.map(d => d[0]);
const nbiAvg = nbiData.map(d => d[1]);
const nbiMax = nbiData.map(d => d[2]);

const blockingMin = blockingData.map(d => d[0]);
const blockingAvg = blockingData.map(d => d[1]);
const blockingMax = blockingData.map(d => d[2]);

const c2cMin = c2cData.map(d => d[0]);
const c2cAvg = c2cData.map(d => d[1]);
const c2cMax = c2cData.map(d => d[2]);

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
      data: ['pccl'],
      left: '90%',
      top: '1%',
      textStyle: {
        fontFamily: 'Times New Roman',
        fontWeight: 'bold',
        // color: '#000'
      }
    },
  
    // 第二行：nbi
    {
      data: ['nbi (Min)', 'nbi (Avg)', 'nbi (Max)'],
      left: '73%',
      top: '3%',
      textStyle: {
        fontFamily: 'Times New Roman',
        fontWeight: 'bold',
        // color: '#000'
      }
    },
  
    // 第三行：blocking
    {
      data: ['blocking (Min)', 'blocking (Avg)', 'blocking (Max)'],
      left: '65%',
      top: '5%',
      textStyle: {
        fontFamily: 'Times New Roman',
        fontWeight: 'bold',
        // color: '#000'
      }
    },
  
    // 第四行：c2c
    {
      data: ['c2c (Min)', 'c2c (Avg)', 'c2c (Max)'],
      left: '73%',
      top: '7%',
      textStyle: {
        fontFamily: 'Times New Roman',
        fontWeight: 'bold',
        // color: '#000'
      }
    }
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
    name: 'Total Time (us)',
    // name: 'Bandwidth (GB/s)',
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
    // pccl - Single bar
    {
      name: 'pccl',
      type: 'bar',
      data: pcclData,
      emphasis: emphasisStyle,
      itemStyle: {
        color: '#000111' // Color for pccl bar
      }
    },
    // nbi - Stacked bars with different colors
    {
      name: 'nbi (Min)',
      type: 'bar',
      stack: 'nbi',
      data: nbiMin,
      emphasis: emphasisStyle,
      itemStyle: {
        color: colorScheme.nbi[0] // Red for nbi Min
      }
    },
    {
      name: 'nbi (Avg)',
      type: 'bar',
      stack: 'nbi',
      data: nbiAvg,
      emphasis: emphasisStyle,
      itemStyle: {
        color: colorScheme.nbi[1] // Yellow for nbi Avg
      }
    },
    {
      name: 'nbi (Max)',
      type: 'bar',
      stack: 'nbi',
      data: nbiMax,
      emphasis: emphasisStyle,
      itemStyle: {
        color: colorScheme.nbi[2] // Green for nbi Max
      }
    },
    
    // blocking - Stacked with different colors
    {
      name: 'blocking (Min)',
      type: 'bar',
      stack: 'blocking',
      data: blockingMin,
      emphasis: emphasisStyle,
      itemStyle: {
        color: colorScheme.blocking[0] // Blue for blocking Min
      }
    },
    {
      name: 'blocking (Avg)',
      type: 'bar',
      stack: 'blocking',
      data: blockingAvg,
      emphasis: emphasisStyle,
      itemStyle: {
        color: colorScheme.blocking[1] // Pink for blocking Avg
      }
    },
    {
      name: 'blocking (Max)',
      type: 'bar',
      stack: 'blocking',
      data: blockingMax,
      emphasis: emphasisStyle,
      itemStyle: {
        color: colorScheme.blocking[2] // Light Yellow for blocking Max
      }
    },
    
    // c2c - Stacked with different colors
    {
      name: 'c2c (Min)',
      type: 'bar',
      stack: 'c2c',
      data: c2cMin,
      emphasis: emphasisStyle,
      itemStyle: {
        color: colorScheme.c2c[0] // Red for c2c Min
      }
    },
    {
      name: 'c2c (Avg)',
      type: 'bar',
      stack: 'c2c',
      data: c2cAvg,
      emphasis: emphasisStyle,
      itemStyle: {
        color: colorScheme.c2c[1] // Blue for c2c Avg
      }
    },
    {
      name: 'c2c (Max)',
      type: 'bar',
      stack: 'c2c',
      data: c2cMax,
      emphasis: emphasisStyle,
      itemStyle: {
        color: colorScheme.c2c[2] // Green for c2c Max
      }
    }
  ]
};
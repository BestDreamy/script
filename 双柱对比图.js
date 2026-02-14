// =======================
// X 轴
// =======================
const xAxisData = ['1KiB', '1MiB', '32MiB', '64MiB'];

const pcclData = [158.94, 341.93, 11966.53, 22485];
const ptshmemData = [4.35, 40.6, 1191.5, 2429.8];

// Speedup = pccl / ptshmem
const speedupData = pcclData.map((v, i) => v / ptshmemData[i]);

const emphasisStyle = {
  itemStyle: {
    shadowBlur: 10,
    shadowColor: 'rgba(0,0,0,0.3)'
  }
};

option = {
  // =======================
  // Global text style
  // =======================
  textStyle: {
    fontFamily: 'Times New Roman',
    fontSize: 16
  },

  // =======================
  // Legend (stacked vertically)
  // =======================
  legend: [
    {
      data: ['pccl'],
      left: '43%',
      top: '1%',
      textStyle: {
        fontFamily: 'Times New Roman',
        fontWeight: 'bold'
      }
    },
    {
      data: ['ptshmem'],
      left: '53%',
      top: '1%',
      textStyle: {
        fontFamily: 'Times New Roman',
        fontWeight: 'bold'
      }
    },
    {
      data: ['Speedup'],
      left: '47%',
      top: '4%',
      textStyle: {
        fontFamily: 'Times New Roman',
        fontWeight: 'bold'
      }
    }
  ],

  tooltip: {
    trigger: 'axis'
  },

  // =======================
  // X Axis
  // =======================
  xAxis: {
    type: 'category',
    data: xAxisData,
    axisLabel: {
      fontFamily: 'Times New Roman',
      fontWeight: 'bold',
      color: '#000',
      fontSize: 18
    }
  },

  // =======================
  // Y Axes
  // =======================
  yAxis: [
    {
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
    {
      type: 'value',
      name: 'Speedup',
      position: 'right',
      nameTextStyle: {
        fontFamily: 'Times New Roman',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#000'
      },
      axisLabel: {
        fontFamily: 'Times New Roman',
        fontWeight: 'bold',
        fontSize: 18,
        formatter: '{value}×'
      },
      splitLine: {
        show: false
      }
    }
  ],

  // =======================
  // Series
  // =======================
  series: [
    {
      name: 'pccl',
      type: 'bar',
      data: pcclData,
      emphasis: emphasisStyle,
      itemStyle: {
        color: '#000111'
      }
    },
    {
      name: 'ptshmem',
      type: 'bar',
      data: ptshmemData,
      emphasis: emphasisStyle,
      itemStyle: {
        color: '#5070dd'
      }
    },
    {
      name: 'Speedup',
      type: 'line',
      yAxisIndex: 1,   // Bind to right Y-axis
      data: speedupData,
      symbol: 'circle',
      symbolSize: 10,
      lineStyle: {
        width: 3,
        type: 'dashed'
      },
      itemStyle: {
        color: '#d62728'
      },
      emphasis: {
        focus: 'series'
      }
    }
  ]
};

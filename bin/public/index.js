/**
 * Created by yuyuanlin on 2017/11/23.
 */

function newDailyUserChart(list){
    var json2 = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            marginLeft: '80'
        },
        title: {
            text: '<div style="font-size: 40px;text-align: center">100<div style="font-size: 10px;margin-top:-10px ">所占比例</div></div>',
            floating: true,
            fontSize: '10',
            useHTML:true,
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    enabled: false,
                },
                showInLegend: true,
                size: '150',
                innerSize: '110'
            }
        },
        credits: {
            enabled: false //去除水印
        },
        colors: ['#ff8c5e', '#6890fa', '#fed05e'],
        series: [{
            name: '占比',
            colorByPoint: true,
            data:list
        }],
        legend: {
            align: 'right', //水平方向位置
            verticalAlign: 'bottom', //垂直方向位置
            x: -20, //距离x轴的距离
            y: 0, //距离Y轴的距离
            layout: 'vertical',
            itemStyle: {
                'fontSize': '10px',
                'color': '#ababab',
                'fontWeight': 'normal'
            }
        }
    };
    Highcharts.chart('app1',json2, function(c) {
        // 环形图圆心
        var centerX = c.series[0].center[0];
        var centerY = c.series[0].center[1];
        // 设置图表偏移
        c.setTitle({
            y: centerY-15,//titleHeight/2,
            x:-20
        });
    });
}
function newDailyDown(list){
    var json ={
        chart: {
            type: 'bar',
        },
        title:{
            text:null
        },
        tooltip: {
            enabled :false
        },
        xAxis: {
            categories: ['图标下载', '其他资源下载', '视觉规范下载', '前端框架下载'],
            tickLength:0, //轴变成一条线
        },
        yAxis:{
            gridLineColor:'#ffffff',
            title:{
                text:null
            },
            labels:{
                enabled:false,
            }
        },
        plotOptions: {
            series: {
                allowPointSelect: false
            },
            bar:{
                dataLabels:{
                    enabled :true,
                    allowOverlap:false
                }
            }
        },
        credits: {
            enabled: false //去除水印
        },
        series: [{
            showInLegend: false,
            data: list
        }]
    };
    Highcharts.chart('app2',json);
}
function historyStatus(month){
    //发请求获取需要的数据
    var json1 ={
        chart: {
            type: 'area'
        },
        title: {
            text: null //不要标题
        },
        subtitle: {
            text: null //不要副标题
        },
        xAxis: {
            allowDecimals: false,
            labels: {
                formatter: function(){
                    return  month +'月'+this.value+'日'; // clean, unformatted number for year
                },
            },
        },
        yAxis: {
            title: {
                text: null,
            },
            labels: {
                formatter: function () {
                    if(this.isLast){
                        return '枚';
                    }else{
                        return this.value;// + '枚';
                    }
                }
            },
            tickInterval: 50,
            lineWidth:1,
        },
        tooltip: {
            headerFormat: '<span style="font-size: 10px">'+month+'月{point.key}日</span><br/>',
            pointFormat: '新增图标 <b>{point.y:,.0f}</b>枚'
        },
        credits: {
            enabled: false //去除水印
        },
        plotOptions: {
            area: {
                pointStart:1,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            showInLegend: false,
            data: [0,0,0,0, 0, 6, 11, 32, 110, 23, 36, 64,
                10, 14, 20, 30, 46, 64, 98, 15, 20, 24,
                173, 29, 31, 3, 32, 31, 29, 27]
        }]
    };
    Highcharts.chart('app3',json1);

    var  json2 ={
        chart: {
            type: 'area'
        },
        title: {
            text: null //不要标题
        },
        subtitle: {
            text: null //不要副标题
        },
        xAxis: {
            allowDecimals: false,
            labels: {
                formatter: function(){
                    return  month +'月'+this.value+'日'; // clean, unformatted number for year
                },
            },
        },
        yAxis: {
            title: {
                text: null,
            },
            labels: {
                formatter: function () {
                    if(this.isLast){
                        return '枚';
                    }else{
                        return this.value;// + '枚';
                    }
                }
            },
            tickInterval: 50,
            lineWidth:1,
            description:'枚'
        },
        tooltip: {
            headerFormat: '<span style="font-size: 10px">'+month+'月{point.key}日</span><br/>',
            pointFormat: '新增图标 <b>{point.y:,.0f}</b>枚'
        },
        credits: {
            enabled: false //去除水印
        },
        plotOptions: {
            area: {
                pointStart:1,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            showInLegend: false,
            data: [0,0,0,0, 0, 6, 11, 32, 20, 23, 36, 64,
                10, 14, 20, 30, 46, 64, 98, 15, 20, 24,
                73, 29, 31, 3, 32, 31, 29, 27],
            color:'#ff8c5e'
        }]
    };
    Highcharts.chart('app4',json2);

    var  json3 ={
        title: {
            text: null //不要标题
        },
        xAxis: {
            labels: {
                formatter: function(){
                    return  month +'月'+this.value+'日'; // clean, unformatted number for year
                },
            },
        },
        yAxis:{
            title:{
                text:null
            },
            labels: {
                formatter: function () {
                    if(this.isLast){
                        return '人';
                    }else{
                        return this.value;// + '枚';
                    }
                }
            },
            tickInterval: 10,
            lineWidth:1,
        },
        plotOptions:{
            line:{
                pointStart:1,
            }
        },
        credits: {
            enabled: false //去除水印
        },
        tooltip: {
            headerFormat: '<span style="font-size: 10px">'+month+'月{point.key}日</span><br/>',
            pointFormat: '访问量<b>{point.y:,.0f}</b>枚'
        },
        series: [{
            showInLegend: false,
            data: [29, 71, 10, 12, 14, 17, 13, 14, 21, 19, 9, 54,34,23,12,34,56,54,34,78,67,77,88,67,78,89,56,78,34,67],
            color: '#ff8c5e',
            marker: {
                fillColor: '#ffffff',
                lineWidth: 2,
                lineColor: null ,// inherit from series
                radius:2
            }
        }]
    };
    Highcharts.chart('app5',json3);

    var json4 ={
        chart: {
            type: 'column'
        },
        title: {
            text: null //不要标题
        },
        xAxis: {
            categories: ['图标','其他资源','视觉规范','前端框架'],
            tickLength:0, //轴变成一条线
        },
        yAxis: {
            title: {
                text: null,
            },
            labels: {
                formatter: function () {
                    if(this.isLast){
                        return '次';
                    }else{
                        return this.value;// + '枚';
                    }
                }
            },
            tickInterval: 10,
            lineWidth:1,
        },
        plotOptions: {
            series: {
                allowPointSelect: true
            }
        },
        credits: {
            enabled: false //去除水印
        },
        series: [{
            showInLegend: false,
            data: [29.9, 71.5, 106.4, 129.2]
        }]
    };
    Highcharts.chart('app6',json4);
}

window.onload  = function(){
    console.log("==============")
    var dailyUserList =  [{name: '普通用户', y: 56},
        {name: '管理员', y: 24,},
        {name: 'UI用户', y: 20}];
    var downloadList =[{color:"#ff8c5e", y:29},
        {color:"#6890fa",y:71} ,
        {color:'#fed05e',y:34},
        {color:'#dddddd',y:129}];
     newDailyUserChart(dailyUserList);
     newDailyDown(downloadList);
     historyStatus(9)
}


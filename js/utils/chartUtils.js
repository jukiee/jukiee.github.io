import{statisticsService}from"../services/dataService.js";export function initCharts(){if("undefined"==typeof Chart)return void console.error("Chart.js not loaded");function e(e,t,r,a){e&&(e.chart&&e.chart.destroy(),e.chart=new Chart(e,{type:t,data:r,options:a}))}const t=document.getElementById("movieRevenueChart");if(t){const r=statisticsService.getMovieRevenue();e(t,"bar",{labels:r.map((e=>e.title)),datasets:[{label:"Doanh thu (triệu đồng)",data:r.map((e=>e.totalRevenue/1e6)),backgroundColor:"rgba(54, 162, 235, 0.5)",borderColor:"rgb(54, 162, 235)",borderWidth:1}]},{responsive:!0,scales:{y:{beginAtZero:!0}}})}const r=document.getElementById("customerTypeChart");if(r){const t=statisticsService.getCustomerTypeStats();e(r,"pie",{labels:t.map((e=>e.label)),datasets:[{data:t.map((e=>e.percentage)),backgroundColor:["rgba(54, 162, 235, 0.5)","rgba(255, 206, 86, 0.5)","rgba(75, 192, 192, 0.5)"],borderColor:["rgb(54, 162, 235)","rgb(255, 206, 86)","rgb(75, 192, 192)"],borderWidth:1}]},{responsive:!0})}const a=document.getElementById("serviceRevenueChart");if(a){const t=statisticsService.getServiceRevenue(),r=t.reduce(((e,t)=>e+t.revenue),0),o=t.map((e=>(e.revenue/r*100).toFixed(1)));e(a,"pie",{labels:t.map((e=>e.name)),datasets:[{data:o,backgroundColor:["rgba(255, 99, 132, 0.5)","rgba(54, 162, 235, 0.5)","rgba(255, 206, 86, 0.5)"],borderColor:["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 206, 86)"],borderWidth:1}]},{responsive:!0})}const o=document.getElementById("ticketTrendChart");if(o){const t=statisticsService.getDailyHistory(),r=[],a=[],s=[];for(let e of t){const t=new Date(e.date);r.push(t.toLocaleDateString("vi-VN"));const o=e.ticketsSold>0?1:0;a.push(Math.round(e.ticketsSold*o)),s.push(Math.round(e.revenue/1e6))}e(o,"line",{labels:r,datasets:[{label:"Số vé bán ra",data:a,fill:!1,borderColor:"rgb(75, 192, 192)",tension:.1}]},{responsive:!0,scales:{y:{beginAtZero:!0,ticks:{stepSize:50}}}})}}
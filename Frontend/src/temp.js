// <Chart
// dataSet={DM.DataSource}
// chartType={'bar'}
// dataOptions={{
//   category: [DM.Commerce.AgeRange],
//   value: [measures.sum(DM.Commerce.Revenue)],
//   breakBy: [],
// }}
// styleOptions={{
//   legend: {
//     enabled: true,
//     position: 'bottom',
//   },
// }}
// onDataPointClick={(point, nativeEvent) => {
//   console.log('clicked', point, nativeEvent);
// }}
// />

{/* <Chart
chartType={'pie'}
dataSet={DM.DataSource}
dataOptions={{
  category: [DM.Commerce.AgeRange],
  value: [measures.sum(DM.Commerce.Revenue)],
  breakBy: [DM.Commerce.Gender],
}}
onDataPointClick={(point, nativeEvent) => { console.log('clicked', point, nativeEvent); }}
/> */}

// <AreaChart
// dataSet={DM.DataSource}
// dataOptions={{
//   category: [DM.Commerce.Date.Years],
//   value: [measures.sum(DM.Commerce.Revenue)],
//   breakBy: [DM.Commerce.Gender],
// }}
// styleOptions={{ subtype: 'area/stacked' }}
// filters={[filters.members(DM.Commerce.Gender, ['Female', 'Male'])]}
// onDataPointClick={(point, nativeEvent) => {
//   console.log('clicked', point, nativeEvent);
// }}
// />

// <BarChart
// dataSet={DM.DataSource}
// dataOptions={{
//   category: [DM.Commerce.AgeRange],
//   value: [measures.sum(DM.Commerce.Revenue)],
//   breakBy: [DM.Commerce.Gender],
// }}
// filters={[filters.greaterThan(DM.Commerce.Revenue, 1000)]}
// onDataPointClick={(point, nativeEvent) => {
//   console.log('clicked', point, nativeEvent);
// }}
// />

// <ChartWidget
// dataSource={DM.DataSource}
// chartType="bar"
// dataOptions={{
//   category: [DM.Category.Category],
//   value: [measures.sum(DM.Commerce.Revenue)],
//   breakBy: [],
// }}
// drilldownOptions={{
//   drilldownCategories: [DM.Commerce.AgeRange, DM.Commerce.Gender, DM.Commerce.Condition],
// }}
// />

// <DashboardWidget
// widgetOid={'6512d17782d27d7c24a13872'}
// dashboardOid={'6512d07782d27d7c24a1386d'}
// />

// <ExecuteQuery
// dataSource={DM.DataSource}
// dimensions={[DM.Commerce.CategoryID]}
// measures={[measures.sum(DM.Commerce.Revenue)]}
// filters={[filters.greaterThan(DM.Commerce.Revenue, 1000)]}
// >
// {
//   (data) => {
//     if (data) {
//       console.log(data);
//       return <div>{`Total Rows: ${data.rows.length}`}</div>;
//     }
//   }
// }
// </ExecuteQuery>

// <ExecuteQueryByWidgetId
// widgetOid={'6512d17782d27d7c24a13872'}
// dashboardOid={'6512d07782d27d7c24a1386d'}
// >
// {
//   (data) => {
//     if (data) {
//       return <div>{`Total Rows: ${data.rows.length}`}</div>;
//     }
//   }
// }
// </ExecuteQueryByWidgetId>


// <FunnelChart
// dataSet={{
//   columns: [
//     { name: 'Stage', type: 'string' },
//     { name: 'Unique Users', type: 'number' },
//   ],
//   rows: [
//     ['Website visits', 15654],
//     ['Downloads', 4064],
//     ['Requested price list', 1987],
//     ['Invoice sent', 976],
//     ['Finalized', 846],
//   ],
// }}
// dataOptions={{
//   category: [
//     {
//       name: 'Stage',
//       type: 'string',
//     },
//   ],
//   value: [
//     {
//       name: 'Unique Users',
//       aggregation: 'sum',
//     },
//   ],
// }}
// />

// <IndicatorChart
// dataSet={DM.DataSource}
// dataOptions={{
//   value: [
//     {
//       column: measures.sum(DM.Commerce.Revenue),
//       numberFormatConfig: {
//         name: 'Numbers',
//         decimalScale: 2,
//         trillion: true,
//         billion: true,
//         million: true,
//         kilo: true,
//         thousandSeparator: true,
//         prefix: false,
//         symbol: '$',
//       },
//     },
//   ],
//   secondary: [],
//   min: [measures.constant(0)],
//   max: [measures.constant(125000000)],
// }}
// filters={[filters.greaterThan(DM.Commerce.Revenue, 1000)]}
// styleOptions={{
//   indicatorComponents: {
//     title: {
//       shouldBeShown: true,
//       text: 'Total Revenue',
//     },
//     secondaryTitle: {
//       text: '',
//     },
//     ticks: {
//       shouldBeShown: true,
//     },
//     labels: {
//       shouldBeShown: true,
//     },
//   },
//   subtype: 'indicator/gauge',
//   skin: 1,
// }}
// />


// <LineChart
// dataSet={DM.DataSource}
// dataOptions={{
//   category: [DM.Commerce.Date.Years],
//   value: [measures.sum(DM.Commerce.Revenue)],
//   breakBy: [DM.Commerce.Gender],
// }}
// filters={[filters.greaterThan(DM.Commerce.Revenue, 1000)]}
// onDataPointClick={(point, nativeEvent) => {
//   console.log('clicked', point, nativeEvent);
// }}
// />

// <PieChart
// dataSet={DM.DataSource}
// dataOptions={{
//   category: [DM.Commerce.AgeRange],
//   value: [measures.sum(DM.Commerce.Revenue)],
// }}
// filters={[filters.greaterThan(DM.Commerce.Revenue, 1000)]}
// onDataPointClick={(point, nativeEvent) => {
//   console.log('clicked', point, nativeEvent);
// }}
// />
// <PolarChart
// dataSet={DM.DataSource}
// dataOptions={{
//   category: [DM.Commerce.AgeRange],
//   value: [measures.sum(DM.Commerce.Revenue)],
//   breakBy: [DM.Commerce.Gender],
// }}
// filters={[filters.greaterThan(DM.Commerce.Revenue, 1000)]}
// onDataPointClick={(point, nativeEvent) => {
//   console.log('clicked', point, nativeEvent);
// }}
// />


// <PolarChart
// dataSet={DM.DataSource}
// dataOptions={{
//   category: [DM.Commerce.AgeRange],
//   value: [measures.sum(DM.Commerce.Revenue)],
//   breakBy: [DM.Commerce.Gender],
// }}
// filters={[filters.greaterThan(DM.Commerce.Revenue, 1000)]}
// onDataPointClick={(point, nativeEvent) => {
//   console.log('clicked', point, nativeEvent);
// }}
// />

// <ScatterChart
// dataSet={DM.DataSource}
// filters={[filters.greaterThan(DM.Commerce.Revenue, 10)]}
// dataOptions={{
//   x: measures.sum(DM.Commerce.Revenue),
//   y: measures.sum(DM.Commerce.Quantity),
//   breakByPoint: DM.Category.Category,
//   breakByColor: DM.Commerce.Gender,
//   size: measures.sum(DM.Commerce.Cost),
// }}
// styleOptions={{
//   xAxis: {
//     enabled: true,
//     gridLines: true,
//     isIntervalEnabled: false,
//     labels: {
//       enabled: true,
//     },
//     logarithmic: true,
//     title: {
//       enabled: true,
//       text: 'Total Revenue',
//     },
//   },
//   yAxis: {
//     enabled: true,
//     gridLines: true,
//     isIntervalEnabled: false,
//     labels: {
//       enabled: true,
//     },
//     logarithmic: true,
//     title: {
//       enabled: true,
//       text: 'Total Quantity',
//     },
//   },
// }}
// onDataPointClick={(point, nativeEvent) => {
//   console.log('clicked', point, nativeEvent);
// }}
// />

// <ThemeProvider
// theme={{
//   chart: {
//     backgroundColor: '#333333',
//     textColor: 'orange',
//     secondaryTextColor: 'purple',
//   },
//   typography: {
//     fontFamily: 'impact',
//   },
// }}
// >

// </ThemeProvider>

// <ExecuteQuery
// dataSource={DM.DataSource}
// dimensions={[DM.Commerce.AgeRange]}
// measures={[measures.sum(DM.Commerce.Revenue)]}
// filters={[filters.greaterThan(DM.Commerce.Revenue, 1000)]}
// >
// {
//   (data) => {
//     if (data) {
//       console.log(data);
//       return <div>{`Total Rows: ${data.rows.length}`}</div>;
//     }
//   }
// }
// </ExecuteQuery>

// <Chart
// dataSet={DM.DataSource}
// chartType={'line'}
// dataOptions={{
//   category: [
//     {
//       column: DM.Commerce.Date.Months,
//       dateFormat: 'yy-MM',
//     },
//   ],
//   value: [
//     measures.sum(DM.Commerce.Revenue),
//     {
//       column: measures.sum(DM.Commerce.Quantity),
//       showOnRightAxis: true,
//       chartType: 'column',
//     },
//   ],
//   breakBy: [],
// }}
// />


// <Chart
// dataSet={DM.DataSource}
// chartType={'line'}
// dataOptions={{
//   category: [
//     {
//       column: DM.Commerce.Date.Months,
//       dateFormat: 'yy-MM',
//     },
//   ],
//   value: [
//     measures.sum(DM.Commerce.Revenue),
//     {
//       column: measures.sum(DM.Commerce.Quantity),
//       showOnRightAxis: true,
//       chartType: 'column',
//     },
//   ],
//   breakBy: [],
// }}
// />


// import { Chart, LineChart, Table, ThemeProvider, ScatterChart, PolarChart, PieChart, AreaChart, BarChart, IndicatorChart, FunnelChart, ChartWidget, DashboardWidget, ExecuteQuery, ExecuteQueryByWidgetId, SisenseContextProvider } from '@sisense/sdk-ui';
// import * as DM from './sample-ecommerce';
// import { measures, filters, Filter } from '@sisense/sdk-data';




// function App() {
//   return (
//     <>
//       <SisenseContextProvider
//         url="http://localhost:8081" // replace with the URL of your Sisense instance
//         token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjUxMjg0OGQyMDI4MDc2ZTEyYzU0MDJkIiwiYXBpU2VjcmV0IjoiYmFmMmUxNjktNGJhYi04ZjUwLTcwNmUtOTYxNTA0YTIwYzRiIiwiaWF0IjoxNjk1NzE2Mzc1fQ.2UzWrSK2zZ3KgqO6o2efLkcayQ7SzdbBUmyVZeGJr9w" // replace with the API token of your user account
//       >
//         <Table
//           dataSet={DM.DataSource}
//           dataOptions={{
//             columns: [
//               DM.Commerce.AgeRange,
//               DM.Commerce.Revenue,
//               DM.Commerce.Cost,
//               DM.Commerce.Quantity,
//             ],
//           }}
//           styleOptions={{ width: 600, height: 750 }}
//         />
//         <Chart
//           chartType={'pie'}
//           dataSet={DM.DataSource}
//           dataOptions={{
//             category: [DM.Commerce.AgeRange],
//             value: [measures.sum(DM.Commerce.Revenue)],
//             breakBy: [DM.Commerce.Gender],
//           }}
//           onDataPointClick={(point, nativeEvent) => { console.log('clicked', point, nativeEvent); }}
//         />

//       </SisenseContextProvider>
//     </>
//   );
// }

// export default App;




// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// import React, { useEffect, useState } from "react";
// import { GridStack } from 'gridstack';
// import 'gridstack/dist/gridstack.css';
// import './App.css';
// import {
//   Chart,
//   SisenseContextProvider,
// } from '@sisense/sdk-ui';
// import * as DM from './sample-ecommerce';
// import { measures, filters } from '@sisense/sdk-data';

// function App() {
//   const [isResized, setResized] = useState(false);

//   useEffect(() => {
//     const grid = GridStack.init({
//       resizable: {
//         handles: 'e,se,s,sw,w',
//       },
//       margin: 5,
      
//     });
    

//     grid.on('resizestop', () => {
//       console.log("resizestop called");
//       setResized(prevState => !prevState); 
//     });

//     return () => {
//       grid.off('resizestop');
//     };
//   }, []);


//   const gridStackContainerStyle = {
//     width: '200vw', 
//     height: '200vh' 
    
//   };

//   return (
//     <SisenseContextProvider
//       url="http://localhost:8081"
//       token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjUxMjg0OGQyMDI4MDc2ZTEyYzU0MDJkIiwiYXBpU2VjcmV0IjoiYmFmMmUxNjktNGJhYi04ZjUwLTcwNmUtOTYxNTA0YTIwYzRiIiwiaWF0IjoxNjk1NzE2Mzc1fQ.2UzWrSK2zZ3KgqO6o2efLkcayQ7SzdbBUmyVZeGJr9w"
//     >
//       <div className="App">
//         <div className="grid-stack" style={gridStackContainerStyle} >
//           <div className="grid-stack-item border-dark column-chart">
//             <div className="grid-stack-item-content">
//               <Chart
//                 key={isResized.toString()} 
//                 chartType={'column'}
//                 dataSet={DM.DataSource}
//                 dataOptions={{
//                   category: [DM.Commerce.AgeRange],
//                   value: [measures.sum(DM.Commerce.Revenue)],
//                   breakBy: [DM.Commerce.Gender],
//                 }}
//                 filters={[filters.members(DM.Commerce.Gender, ['Female', 'Male'])]}
//                 onDataPointClick={(point, nativeEvent) => {
//                   console.log('clicked', point, nativeEvent);
//                 }}
//               />
//             </div>
//           </div>
//           <div className="grid-stack-item border-dark column-chart">
//             <div className="grid-stack-item-content">
//               <Chart
//                 key={isResized.toString()} 
//                 chartType={'column'}
//                 dataSet={DM.DataSource}
//                 dataOptions={{
//                   category: [DM.Commerce.AgeRange],
//                   value: [measures.sum(DM.Commerce.Revenue)],
//                   breakBy: [DM.Commerce.Gender],
//                 }}
//                 filters={[filters.members(DM.Commerce.Gender, ['Female', 'Male'])]}
//                 onDataPointClick={(point, nativeEvent) => {
//                   console.log('clicked', point, nativeEvent);
//                 }}
//               />
//             </div>
//           </div>
//           <div className="grid-stack-item border-dark column-chart">
//             <div className="grid-stack-item-content">
//               <Chart
//                 key={isResized.toString()} 
//                 chartType={'column'}
//                 dataSet={DM.DataSource}
//                 dataOptions={{
//                   category: [DM.Commerce.AgeRange],
//                   value: [measures.sum(DM.Commerce.Revenue)],
//                   breakBy: [DM.Commerce.Gender],
//                 }}
//                 filters={[filters.members(DM.Commerce.Gender, ['Female', 'Male'])]}
//                 onDataPointClick={(point, nativeEvent) => {
//                   console.log('clicked', point, nativeEvent);
//                 }}
//               />
//             </div>
//           </div>
//           <div className="grid-stack-item border-dark column-chart">
//             <div className="grid-stack-item-content">
//               <Chart
//                 key={isResized.toString()} 
//                 chartType={'column'}
//                 dataSet={DM.DataSource}
//                 dataOptions={{
//                   category: [DM.Commerce.AgeRange],
//                   value: [measures.sum(DM.Commerce.Revenue)],
//                   breakBy: [DM.Commerce.Gender],
//                 }}
//                 filters={[filters.members(DM.Commerce.Gender, ['Female', 'Male'])]}
//                 onDataPointClick={(point, nativeEvent) => {
//                   console.log('clicked', point, nativeEvent);
//                 }}
//               />
//             </div>
//           </div>
//           <div className="grid-stack-item border-dark column-chart">
//             <div className="grid-stack-item-content">
//               <Chart
//                 key={isResized.toString()} 
//                 chartType={'column'}
//                 dataSet={DM.DataSource}
//                 dataOptions={{
//                   category: [DM.Commerce.AgeRange],
//                   value: [measures.sum(DM.Commerce.Revenue)],
//                   breakBy: [DM.Commerce.Gender],
//                 }}
//                 filters={[filters.members(DM.Commerce.Gender, ['Female', 'Male'])]}
//                 onDataPointClick={(point, nativeEvent) => {
//                   console.log('clicked', point, nativeEvent);
//                 }}
//               />
//             </div>
//           </div>
//           <div className="grid-stack-item border-dark column-chart">
//             <div className="grid-stack-item-content">
//               <Chart
//                 key={isResized.toString()} 
//                 chartType={'column'}
//                 dataSet={DM.DataSource}
//                 dataOptions={{
//                   category: [DM.Commerce.AgeRange],
//                   value: [measures.sum(DM.Commerce.Revenue)],
//                   breakBy: [DM.Commerce.Gender],
//                 }}
//                 filters={[filters.members(DM.Commerce.Gender, ['Female', 'Male'])]}
//                 onDataPointClick={(point, nativeEvent) => {
//                   console.log('clicked', point, nativeEvent);
//                 }}
//               />
//             </div>
//           </div>
//           <div className="grid-stack-item border-dark column-chart">
//             <div className="grid-stack-item-content">
//               <Chart
//                 key={isResized.toString()} 
//                 chartType={'column'}
//                 dataSet={DM.DataSource}
//                 dataOptions={{
//                   category: [DM.Commerce.AgeRange],
//                   value: [measures.sum(DM.Commerce.Revenue)],
//                   breakBy: [DM.Commerce.Gender],
//                 }}
//                 filters={[filters.members(DM.Commerce.Gender, ['Female', 'Male'])]}
//                 onDataPointClick={(point, nativeEvent) => {
//                   console.log('clicked', point, nativeEvent);
//                 }}
//               />
//             </div>
//           </div>
//           <div className="grid-stack-item border-dark column-chart">
//             <div className="grid-stack-item-content">
//               <Chart
//                 key={isResized.toString()} 
//                 chartType={'column'}
//                 dataSet={DM.DataSource}
//                 dataOptions={{
//                   category: [DM.Commerce.AgeRange],
//                   value: [measures.sum(DM.Commerce.Revenue)],
//                   breakBy: [DM.Commerce.Gender],
//                 }}
//                 filters={[filters.members(DM.Commerce.Gender, ['Female', 'Male'])]}
//                 onDataPointClick={(point, nativeEvent) => {
//                   console.log('clicked', point, nativeEvent);
//                 }}
//               />
//             </div>
//           </div>
//           <div className="grid-stack-item border-dark column-chart">
//             <div className="grid-stack-item-content">
//               <Chart
//                 key={isResized.toString()} 
//                 chartType={'column'}
//                 dataSet={DM.DataSource}
//                 dataOptions={{
//                   category: [DM.Commerce.AgeRange],
//                   value: [measures.sum(DM.Commerce.Revenue)],
//                   breakBy: [DM.Commerce.Gender],
//                 }}
//                 filters={[filters.members(DM.Commerce.Gender, ['Female', 'Male'])]}
//                 onDataPointClick={(point, nativeEvent) => {
//                   console.log('clicked', point, nativeEvent);
//                 }}
//               />
//             </div>
//           </div>
//           <div className="grid-stack-item border-dark column-chart">
//             <div className="grid-stack-item-content">
//               <Chart
//                 key={isResized.toString()} 
//                 chartType={'column'}
//                 dataSet={DM.DataSource}
//                 dataOptions={{
//                   category: [DM.Commerce.AgeRange],
//                   value: [measures.sum(DM.Commerce.Revenue)],
//                   breakBy: [DM.Commerce.Gender],
//                 }}
//                 filters={[filters.members(DM.Commerce.Gender, ['Female', 'Male'])]}
//                 onDataPointClick={(point, nativeEvent) => {
//                   console.log('clicked', point, nativeEvent);
//                 }}
//               />
//             </div>
//           </div>

//         </div>
//       </div>
//     </SisenseContextProvider>

//   );
// }

// export default App;


{/* //create a html Table manually using query component response
                  //add hover over, hover out ,onmouseover and onmouseout events for first td elements
                  //change visibility of chart and update  the filter and position the chart accodingly  */}


//onclick instead of onmouseenter
//how to set filter of include all
//rest api schema ,datasources check 
//create tables from sample healthcare ,they are around 10 tables
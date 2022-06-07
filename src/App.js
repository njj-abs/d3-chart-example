import { React } from 'react';
import './App.scss';
import BarChart from './components/bar/barChart';
import BarAndLineChart from './components/bar/barAndLineChart';
import ChartManager from './services/chartManager';
import HorizontalBar from './components/bar/HorizontalBar';
import RadarChart from './components/radar';
import ReChartBar from './components/bar/reChartBar';
import ReChartRadar from './components/radar/reChartRadar';
import ReChartPie from './components/pie/reChartPie';

// eslint-disable-next-line max-lines-per-function
const App = (context) => {
	const { config, state: { region }} = context;
	const {
		productBarChartData,
		populationBarChartData,
		productRechartBarData,
		regionRechartPieData,
	} = ChartManager;

	// eslint-disable-next-line no-console
	console.log(region);
	// eslint-disable-next-line no-console
	console.log(regionRechartPieData(region));
	return (
		<div className="App" role="App">
			<BarChart { ...{ ...context,
				data: productBarChartData(context) } }
			/>
			<BarAndLineChart { ...{ ...context,
				data: populationBarChartData(context) } }
			/>
			<HorizontalBar { ...{ ...context,
				data: populationBarChartData(context) } }
			/>
			<RadarChart { ...{ ...context, data: config.smartPhones } }/>
			<ReChartBar { ...{ ...context,
				data: productRechartBarData(context) } }
			/>
			<ReChartRadar { ...{ ...context,
				data: productRechartBarData(context) } }
			/>
			<ReChartPie
				{ ...{ ...context,
					data: regionRechartPieData(region) } }
			/>

		</div>);
};

export default App;

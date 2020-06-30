import React from 'react';
import {Line, Bar} from 'react-chartjs-2'
import styles from './Chart.module.css'

const Chart = (props) => {
    const {data , dailyData, selectedCountry} = props;
    const {confirmed, recovered,deaths,lastUpdate} = data;

    const lineChart = (
          <Line
            data={{
              labels: dailyData.map(({ date }) => date),
              datasets: [{
                data: dailyData.map((data) => data.confirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true,
              }, {
                data: dailyData.map((data) => data.deaths),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill: true,
              },
              ],
            }}
          />
       
        );
        

        const barChart = (
            <Bar
              data={{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [
                  {
                    label: 'People',
                    backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                    data: [confirmed.value, recovered.value, deaths.value],
                  },
                ],
              }}
              options={{
                legend: { display: false },
                title: { display: true, text: `Current state in ${selectedCountry}` },
              }}
            />
        );
    
    return (
        <div className={styles.container}>
            {selectedCountry ? barChart : lineChart}
        </div>
    )
}

export default Chart;
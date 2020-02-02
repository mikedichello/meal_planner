import React, { Component } from 'react';
import Chart from 'chart.js'

class PieChart extends Component {
   

    componentDidMount() {
        this.getData();
    }  

    getData = () =>{
        fetch(`http://localhost:3000/meals/1}`)
            .then(response => response.json())
            .then(json => this.prepareData(json))
            .then(data => this.createChart(data))
    }

    prepareData = (meal) => {
        const chartData = {
            labels: ["Carbs (g)", "Fat (g)", "Protein (g)"],
            datasets: [
                {
                    data: [],
                    backgroundColor: [
                        'rgba(255, 0, 0, .2)',
                        'rgba(255, 255, 0, .2)',
                        'rgba(0, 0, 255, .2)'
                    ],
                    borderColor: [
                        'rgba(255, 0, 0, 1)',
                        'rgba(255, 255, 0, 1)',
                        'rgba(0, 0, 255, 1)'
                    ],
                    borderWidth: 5
                }
            ]
        }
        
            chartData.datasets[0].data.push(meal.carbs_g)
            chartData.datasets[0].data.push(meal.fat_g)
            chartData.datasets[0].data.push(meal.protein_g)
  
      
      console.log(chartData)
        return chartData
    }

    createChart = (data) => {
        const ctx = document.querySelector('#meals');
        const mealsChart = new Chart(ctx, {
            type: 'pie',
            data: data
        })
    }

    render () {
    return (
        <>
        <h1>meals</h1>
        <canvas id="meals" width="300" height="100"></canvas>
        </>
    )
    }
}
export default PieChart
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { decade, rating, genre } from '../data/chartInfo'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const Info = () => {
    const options ={
        plugins:{
            legend: {
                labels:{
                    boxWidth: 0,
                    color: 'rgb(255, 8, 8)',
                    font: {
                        size:16
                    }
                }
            }
        },
        scales: {
            y: {
                ticks: {
                    color: 'rgb(255, 8, 8)',
                    font: {
                        size:22
                    },
                    setpSize: 1,
                    beginAtZero: true
                }
            },
            x: {
                ticks: {
                    color: 'rgb(255, 8, 8)',
                    font: {
                        size: 14
                    },
                    setpSize: 1,
                    beginAtZero: true
                }
            }

        }
       
    }
    
    return(
        <div className = 'flex flex-col items-center space-y-6 mt-2 '>
            <Bar options = {options} data= {decade} />
         
            
            <Bar options = {options} data = {rating} />
          
            <Bar options = {options} data = {genre} />
          
        </div>
    )
}

export default Info;
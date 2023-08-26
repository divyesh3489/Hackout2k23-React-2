import React from 'react'
import { Line } from 'react-chartjs-2'
function Linechart(p) {
    return (
        <div>
            <Line
                data={{
                    labels: ['Jan','Feb',"Mar","Apr","May",'Jun',"July","Aug","Sep",'Oct','Nov','Dec'],
                    datasets: [{
                        label: p.label,
                        data: [65, 59, 80, 81, 56, 55, 40],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 205, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(201, 203, 207, 0.2)'
                        ],
                        borderColor: [
                            'rgb(255, 99, 132)',
                            'rgb(255, 159, 64)',
                            'rgb(255, 205, 86)',
                            'rgb(75, 192, 192)',
                            'rgb(54, 162, 235)',
                            'rgb(153, 102, 255)',
                            'rgb(201, 203, 207)'
                        ],
                        borderWidth: 1
                    }]
                }}
                height={"50%"}
                width={"100%"} />
        </div>
    )
}

export default Linechart
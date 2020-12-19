import React from 'react';

import { VictoryPie, VictoryChart, VictoryBar } from  'victory';

const UserStatsGraph = ({ data }) => {
    const [graph, setGraph] = React.useState([]);
    const [total, setTotal] = React.useState(0);

    const graphData = data.map((item) => {
        return {
            x: item.title,
            y: Number(item.acessos)
        }
    });

    React.useEffect(() => {
        setTotal(data.map(({acessos}) => {
            return Number(acessos);
        }).reduce((a, b) => {
            return a + b;
        }));

        setGraph(graphData);
    }, [data])

    return <section className="user__status-graph animleft">
        <div className="user__status-graph-total user__status-graph-item">
            <p>Acessos: {total}</p>
        </div>
        <div className="user__status-graph-item">
            <VictoryPie 
                data={graph}
                innerRadius={50}
                padding={{
                    top: 20,
                    bottom: 20,
                    left: 80,
                    right: 80
                }}
                style={{
                    data: {
                        fillOpacity: .9,
                        stroke: '#fff',
                        strokeWidth: 2
                    }, 
                    labels: {
                        fontSize: 14,
                        fill: '#333'
                    }
                }}
            />
        </div>
        <div className="user__status-graph-item">
            <VictoryChart>
                <VictoryBar data={graph} alignment="start" />
            </VictoryChart>
        </div>
    </section>;
}

export default UserStatsGraph;
import React, { useState, useEffect } from 'react';
import { VictoryBar, VictoryPie, VictoryChart, Bar } from 'victory';
import { Graph, GraficContainer } from './styles';



const UserStatGrafic = ({ data }) => {

    const [graph, setGraph] = useState([]);
    const [total, setTotal] = useState(0);


    useEffect(() => {

        if (data && data.length === 0) return;

        const tots = data.map(x => x.acessos)
            .reduce((a, b) => a + b);
        setTotal(tots);

        const graphs = data.map(item => {
            return {
                x: item.nome,
                y: item.acessos,
            }
        });

        setGraph(graphs);

    }, [data]);


    return (

        <Graph className="animeLeft">

            <GraficContainer>
                <p>Acessos: {total}</p>
            </GraficContainer>

            <GraficContainer>
                <VictoryPie

                    innerRadius={50}
                    colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
                    data={graph} >

                </VictoryPie>
            </GraficContainer>

            <GraficContainer>
                <VictoryChart>
                    <VictoryBar alignment="start" data={graph}>

                    </VictoryBar>
                </VictoryChart>
            </GraficContainer>


        </Graph>

    )

}

export default UserStatGrafic;


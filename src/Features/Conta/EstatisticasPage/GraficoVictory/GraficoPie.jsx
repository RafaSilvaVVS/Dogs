import React from 'react';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';
import useFetch from '../../../../hooks/useFetch';
import './GraficoPie.css';

const GraficoPie = () => {
  const { data, loading, error, request } = useFetch();
  const [somarAcessos, setSomarAcessos] = React.useState();
  React.useEffect(() => {
    request('/api/stats', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    });
  }, [request]);

  React.useEffect(() => {
    const acessosTotal = data?.map((item) => ({
      X: item.title,
      Y: item.acessos,
    }));
    setSomarAcessos(acessosTotal);
  }, [data]);
  if ((data, somarAcessos))
    return (
      <div className="container-char">
        <VictoryPie
          data={somarAcessos.map(({ X, Y }) => ({
            x: X,
            y: Y,
          }))}
        />

        <VictoryChart
          data={somarAcessos.map(({ X, Y }) => ({
            x: X,
            y: Y,
          }))}
        >
          <VictoryBar alignment="start" />
        </VictoryChart>
      </div>
    );
};

export default GraficoPie;

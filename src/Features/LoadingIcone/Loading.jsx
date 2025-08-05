import React from 'react';
import LoadingSvg from '../../components/SvgsIcones/LoadingSvg';
import './Loading.css';

const Loading = ({ loading }) => {
  return (
    <div className="container-carregando">
      <div className="carregando-item">
        <LoadingSvg loading={loading} />
      </div>
    </div>
  );
};

export default Loading;

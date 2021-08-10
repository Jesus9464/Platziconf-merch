import React from 'react';
import '../styles/components/Success.scss';

const Success = () => {
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>Jesus, Gracias por tu compra</h2>
        <span>Tu pedido llegara en tres dias a tu direccion:</span>
        <div className="Success-map">Google Maps</div>
      </div>
    </div>
  );
};

export default Success;

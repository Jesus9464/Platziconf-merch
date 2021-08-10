import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Information.scss';

export const Information = () => {
  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto</h2>
        </div>
        <div className="Information-form">
          <form action="">
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="email" placeholder="Correo Electronico" name="email" />
            <input type="text" placeholder="Direccion" name="address" />
            <input type="text" placeholder="Apto" name="apto" />
            <input type="text" placeholder="Ciuda" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Codigo Postal" name="cp" />
            <input type="text" placeholder="Telefono" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <Link to="/checkout">
            <div className="Information-back">Regresar</div>
          </Link>
          <Link to="/checkout/payment">
            <div className="Information-next">Pagar</div>
          </Link>
        </div>
      </div>
      <div className="Informaion-siedbar">
        <h3>Pedido</h3>
        <div className="Information-item">
          <div className="Information-elemet">
            <h4>ITEM name</h4>
            <span>$10</span>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Information.scss';
import { AppContext } from '../Context/AppContex';
import { Helmet } from 'react-helmet';

export const Information = ({ history }) => {
  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);
  const { cart } = state;

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      apto: formData.get('apto'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
      phone: formData.get('phone'),
    };
    addToBuyer(buyer);
    history.push('/checkout/payment');
  };

  return (
    <>
      <Helmet>
        <title>Platzi Conf Merch -Informacion</title>
      </Helmet>
      <div className="Information">
        <div className="Information-content">
          <div className="Information-head">
            <h2>Informacion de contacto</h2>
          </div>
          <div className="Information-form">
            <form ref={form}>
              <input type="text" placeholder="Nombre completo" name="name" />
              <input
                type="email"
                placeholder="Correo Electronico"
                name="email"
              />
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
            <button type="button" onClick={handleSubmit}>
              Pagar
            </button>
          </div>
        </div>
        <div className="Informaion-siedbar">
          <h3>Pedido:</h3>
          {cart.map((item) => (
            <div className="Information-item" key={item.title}>
              <div className="Information-element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

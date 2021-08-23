import React, { useContext } from 'react';
import '../styles/components/Success.scss';
import { AppContext } from '../Context/AppContex';
import Maps from '../components/Maps';
import useGoogleAddress from '../Hooks/useGoogleAddress';
import { Helmet } from 'react-helmet';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const location = useGoogleAddress(
    `${buyer[0]?.city} ${buyer[0]?.country} ${buyer[0]?.state}`
  );

  return (
    <>
      <Helmet>
        <title>Platzi Conf Merch -Pago exitoso</title>
      </Helmet>
      <div className="Success">
        <div className="Success-content">
          <h2>{`${buyer[0]?.name}, Gracias por tu compra`}</h2>
          <span>Tu pedido llegara en tres dias a tu direccion:</span>
          <div className="Success-map">{<Maps data={location} />}</div>
        </div>
      </div>
    </>
  );
};

export default Success;

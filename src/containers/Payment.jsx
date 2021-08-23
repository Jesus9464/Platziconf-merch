import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContex';
import { PayPalButton } from 'react-paypal-button';
import '../styles/components/Payment.scss';
import { handleSumTotal } from '../utils/HandleSumtotal';
import { Helmet } from 'react-helmet';

const Payment = ({ history }) => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const paypalOption = {
    clientId:
      'ASKaGrzSwoM-0V_2r1K07VH7XCfwxnxvg8NE7madHpBtA0be2YIcK8j2u_mQtAC66HzTbnGUjakjRvxE',
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyle = {
    layaut: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };

      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  };

  return (
    <>
      <Helmet>
        <title>Platzi Conf Merch - Pagar</title>
      </Helmet>
      <div className="Payment">
        <div className="Payment-content">
          <h3>Resumen del pedido:</h3>
          {cart.map((item) => (
            <div className="Payment-item" key={item.title}>
              <div className="Payment-element">
                <h4>{item.title}</h4>
                <span> {item.price}</span>
              </div>
            </div>
          ))}

          <h3 className="Payment-title-total">Total a pagar</h3>
          <h3 className="Payment-title-price">$ {handleSumTotal(cart)} </h3>
          <div className="Payment-button">
            <PayPalButton
              paypalOptions={paypalOption}
              buttonStyles={buttonStyle}
              amount={handleSumTotal(cart)}
              onPaymentStart={() => console.log('Start Payment')}
              onPaymentSuccess={(data) => handlePaymentSuccess(data)}
              onPaymentError={(error) => console.log('error', error)}
              onPaymentCancel={(data) => console.log('data', data)}
            />
          </div>
        </div>
        <div />
      </div>
    </>
  );
};

export default Payment;

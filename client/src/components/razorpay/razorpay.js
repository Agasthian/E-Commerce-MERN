import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartTotal } from '../../redux/cart/cart.selector';
import Button from '../../components/button/button';
import { isAuthenticated } from '../../auth';
import { RAZOR_KEY } from '../../config';
import { RazorWrapper } from './razorpay.styles';

const PayByRazorPay = ({ total }) => {
  //Destructring from cookie to get user info
  const {
    user: { name, email }
  } = isAuthenticated();

  const options = {
    key: RAZOR_KEY,
    amount: total * 100, //  = INR 1
    name: 'Civil Box',
    description: 'Building made easy',
    image: 'https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png',
    handler: function(response) {
      alert(response.razorpay_payment_id);
    },
    prefill: {
      name: { name },
      contact: '9999999999',
      email: `${email}`
    },
    notes: {
      address: 'some address'
    },
    theme: {
      color: '#263238',
      hide_topbar: false
    }
  };

  const openPayModal = () => {
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <RazorWrapper>
      <Button onClick={openPayModal} solid={'solid'} title='Place Order' />
    </RazorWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  total: selectCartTotal
});

export default connect(mapStateToProps)(PayByRazorPay);

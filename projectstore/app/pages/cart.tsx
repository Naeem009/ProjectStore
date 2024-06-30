import React from 'react';
import Layout from './components/Layout';

const CartPage: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <p>Your cart is empty.</p>
    </Layout>
  );
};

export default CartPage;

import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { fetchCartData, sendCartData } from './Store/cart-actions';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cartVisible = useSelector(state => state.ui.cartIsVisible)
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification)

  useEffect(() => {
    dispatch(fetchCartData())
  }, [dispatch]);

  useEffect(() => {

    // const sendCartData = async () => {
    //     // dispatch(uiActions.showNotification({
    //     //   status: 'pending',
    //     //   title: 'Sending...',
    //     //   message: 'Cart is sending...'
    //     // }))
       
       
    //     // const response = await fetch('https://food-app-24a38-default-rtdb.firebaseio.com/cart.json', {
    //     //   method: 'PUT',
    //     //   body: JSON.stringify(cart),
    //     // })
       
       
    //     // if(!response.ok){
    //     //   throw new Error('Sending Cart Data Failed')
    //     // }

    //     // dispatch(uiActions.showNotification({
    //     //   status: 'success',
    //     //   title: 'Success...',
    //     //   message: 'Sent cart data successfully...'
    //     // }))
    // }

    if(isInitial){
      isInitial = false;
      return;
    }
    if(cart.changed){
      dispatch(sendCartData(cart))
    }

    // sendCartData().catch((e) => {
    //   dispatch(uiActions.showNotification({
    //     status: 'error',
    //     title: 'Failed...',
    //     message: 'Cart is sending failed...'
    //   }))
    //  }) 
    
  }, [cart, dispatch]);

  return (
    <Fragment>
    {notification && <Notification 
      status={notification.status}
      title={notification.title}
      message={notification.message}
    />}
    <Layout>
      {cartVisible && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;

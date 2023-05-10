import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NavBar from './components/NavBar';
import CartContainer from './components/cartContainer';
import { calculateTotals, getCartItems } from './features/cart/cartSlice';
import Modal from './components/Modal';

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Modal />}
      <NavBar />
      <CartContainer />
    </main>
  );
}

export default App;

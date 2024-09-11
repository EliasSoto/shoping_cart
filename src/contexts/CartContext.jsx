import { createContext, useState } from 'react';


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  //nuevp
  const [contador, setContador] = useState(0);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);

    contarProduct();
    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      
      return setCart(updatedCart);
    }
    // Recalcula la cantidad total de productos directamente
    
    return setCart([...cart, { ...product, quantity: 1 }]);
  }
  
  const contarProduct = (product) => { 
    {setContador (contador => contador+1)};
  }


  const removeFromCart = (product) => {

    setCart(cart.filter((item) => item.id !== product.id));
    {setContador (contador => contador - product.quantity)};
  }

  const clearCart = () => {
    setCart([]);
    {setContador (contador => contador = 0)};
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, removeFromCart, contador}}>
      {children}
    </CartContext.Provider>
  );
}

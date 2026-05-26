import { createContext, useContext, useReducer, useEffect, useState, useCallback } from 'react';

const CartContext = createContext(null);

const STORAGE_KEY = 'technova_cart';

function cartReducer(state, action) {
  switch (action.type) {
    case 'LOAD_CART':
      return { ...state, items: action.payload };

    case 'ADD_TO_CART': {
      const { product, quantity, selectedSpec } = action.payload;
      const specKey = selectedSpec
        ? Object.values(selectedSpec).join('-')
        : 'default';
      const cartKey = `${product.id}-${specKey}`;
      const existing = state.items.find((item) => item.cartKey === cartKey);

      if (existing) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.cartKey === cartKey
              ? { ...item, quantity: Math.min(item.quantity + quantity, 10) }
              : item
          ),
        };
      }

      return {
        ...state,
        items: [
          ...state.items,
          {
            cartKey,
            id: product.id,
            name: product.name,
            image: product.images[0],
            price: product.price,
            quantity,
            selectedSpec: selectedSpec || {},
            maxQuantity: 10,
          },
        ],
      };
    }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter((item) => item.cartKey !== action.payload),
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map((item) =>
          item.cartKey === action.payload.cartKey
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    case 'CLEAR_CART':
      return { ...state, items: [] };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const [lastAdded, setLastAdded] = useState(null);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const items = JSON.parse(saved);
        dispatch({ type: 'LOAD_CART', payload: items });
      }
    } catch {
      // corrupted data, ignore
    }
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    }
  }, [state.items, initialized]);

  const addToCart = useCallback((product, quantity = 1, selectedSpec = {}) => {
    dispatch({ type: 'ADD_TO_CART', payload: { product, quantity, selectedSpec } });
    setLastAdded({ name: product.name, image: product.images[0] });
    setTimeout(() => setLastAdded(null), 2800);
  }, []);

  const removeFromCart = useCallback((cartKey) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: cartKey });
  }, []);

  const updateQuantity = useCallback((cartKey, quantity) => {
    if (quantity < 1 || quantity > 10) return;
    dispatch({ type: 'UPDATE_QUANTITY', payload: { cartKey, quantity } });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, []);

  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const value = {
    items: state.items,
    itemCount,
    subtotal,
    lastAdded,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}

'use client';

import { createContext, useContext, useState } from 'react';

// Create the context
const DeliveryContext = createContext();


// Provider component
export const DeliveryContextProvider = ({ children }) => {
  const [deliveryInfo, setDeliveryInfo] = useState(null);
  const [deliveries, setDeliveries] = useState([]);

  return (
    <DeliveryContext.Provider value={{deliveryInfo, setDeliveryInfo, deliveries, setDeliveries}}>
      {children}
    </DeliveryContext.Provider>
  )
  };

  
// Custom hook to use the delivery context
export const useDeliveryContext = () => {
  const context = useContext(DeliveryContext);
  
  if (!context) {
    throw new Error('useDeliveryContext must be used within a DeliveryContextProvider');
  }
  
  return context;
};

'use client';

import React, { createContext, useContext, useState, useMemo } from 'react';

/* ---- basic setup ------------------------------------------------------- */

const CurrencyContext = createContext(null);   // ↙ safely assume provider exists
export const useCurrency = () => {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error('useCurrency must be inside <CurrencyProvider>');
  return ctx;
};

/* ---- “database” : FX rates + symbols – update however you like ---------- */

const FX_RATES = {
  TRY: 1,
  USD: 0.031,
  EUR: 0.029,
  GBP: 0.026,
};

const SYMBOLS = {
  TRY: <i className="fa fa-try" />,
  USD: '$',
  EUR: '€',
  GBP: '£',
};

/* ---- provider ---------------------------------------------------------- */

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState('TRY');     // default

  const value = useMemo(
    () => ({
      currency,
      setCurrency,
      rate: FX_RATES[currency],
      symbol: SYMBOLS[currency],
    }),
    [currency]
  );

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
}

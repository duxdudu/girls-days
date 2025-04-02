"use client"

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type CalculatorContextType = {
  showCalculator: boolean;
  setShowCalculator: (show: boolean) => void;
  pageTitle: string;
  setPageTitle: (title: string) => void;
};

const CalculatorContext = createContext<CalculatorContextType>({
  showCalculator: false,
  setShowCalculator: () => {},
  pageTitle: 'woomanly.blog',
  setPageTitle: () => {},
});

export const useCalculator = () => {
  const context = useContext(CalculatorContext);
  if (!context) {
    throw new Error('useCalculator must be used within a CalculatorProvider');
  }
  return context;
};

type CalculatorProviderProps = {
  children: ReactNode;
};

export function CalculatorProvider({ children }: CalculatorProviderProps) {
  const [showCalculator, setShowCalculator] = useState(false);
  const [pageTitle, setPageTitle] = useState('woomanly.blog');

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <CalculatorContext.Provider value={{ showCalculator, setShowCalculator, pageTitle, setPageTitle }}>
      {children}
    </CalculatorContext.Provider>
  );
}
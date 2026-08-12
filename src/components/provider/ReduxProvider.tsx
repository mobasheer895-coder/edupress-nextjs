// src/components/Providers.tsx
'use client'; // هذا السطر هو الأهم!

import store from '@/redux/store/store';
import { Provider } from 'react-redux';

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
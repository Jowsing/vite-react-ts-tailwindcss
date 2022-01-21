import React from 'react';

import { HookContext } from '@/types/hooks';

export function createHookContext<T>(defaultValue: T): HookContext<T> {
  const Context = React.createContext(defaultValue);

  return {
    Provider: Context.Provider,
    useContext: () => React.useContext(Context),
  };
}

import React from 'react';

export interface HookContext<T> {
  useContext: () => T;
  Provider: React.Provider<T>;
}

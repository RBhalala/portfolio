// src/utils/themeRegistry.tsx
'use client';

import * as React from 'react';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from './createEmotionCache';

export function ThemeRegistry({ children }: { children: React.ReactNode }) {
  const [emotionCache] = React.useState(() => createEmotionCache());

  return <CacheProvider value={emotionCache}>{children}</CacheProvider>;
}

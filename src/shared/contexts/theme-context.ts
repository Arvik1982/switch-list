import React from 'react';
import type { ITheme } from '@/shared/types/theme';
import { ThemeLight } from '@/shared/themes/theme-light';

const ThemeContext = React.createContext<ITheme>(ThemeLight);

export default ThemeContext;

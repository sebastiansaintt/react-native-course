import { StyleSheet } from 'react-native';

export const colors = {
  accent: '#007AFF',         
  accentHover: '#0062CC',
  accentSubtle: 'rgba(0, 122, 255, 0.12)', 
  inactive: '#a9a9a9ff',

  
  background: '#F2F2F7',      
  surface: '#FFFFFF',         
  surfaceSecondary: '#F9F9FB',

  
  text: '#000000',            
  secondaryText: 'rgba(60, 60, 67, 0.60)', 
  tertiaryText: 'rgba(60, 60, 67, 0.30)',  

  
  separator: 'rgba(60, 60, 67, 0.29)',
  fill: 'rgba(118, 118, 128, 0.12)',       
  fillTertiary: 'rgba(118, 118, 128, 0.08)',

 
  danger: '#FF3B30',          
  dangerSubtle: 'rgba(255, 59, 48, 0.12)',
  success: '#34C759',
  warning: '#FF9500',
};

export const spacing = {
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
};

export const radius = {
  xs: 6,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 24,
  pill: 999,
};

export const typography = {
  largeTitle: {
    fontSize: 34,
    fontFamily: 'Inter_700Bold',
    letterSpacing: -0.8,
    color: colors.text,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Inter_700Bold',
    letterSpacing: -0.4,
    color: colors.text,
  },
  headline: {
    fontSize: 17,
    fontFamily: 'Inter_500Medium',
    letterSpacing: -0.6,
    color: colors.text,
  },
  body: {
    fontSize: 17,
    fontFamily: 'Inter_400Regular',
    letterSpacing: -0.4,
    color: colors.text,
  },
  subhead: {
    fontSize: 15,
    fontFamily: 'Inter_400Regular',
    letterSpacing: -0.2,
    color: colors.secondaryText,
  },
  caption: {
    fontSize: 13,
    fontFamily: 'Inter_400Regular',
    letterSpacing: -0.1,
    color: colors.secondaryText,
  },
  price: {
    fontSize: 17,
    fontFamily: 'Inter_700Bold',
    letterSpacing: -0.3,
    fontVariant: ['tabular-nums'],
    color: colors.text,
  },
};

export const shadows = {
  soft: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06,
    shadowRadius: 16,
    elevation: 3, 
  },
  accentGlow: {
    shadowColor: colors.accent,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 14,
    elevation: 6,
  },
};

export const borders = {
  hairline: StyleSheet.hairlineWidth,
};

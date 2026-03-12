import { StyleSheet } from 'react-native';
import type { Theme } from '../../global/themes';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    headerTitle: {
      fontSize: 28,
      fontWeight: 'bold',
      paddingHorizontal: 24,
      paddingTop: 60,
      paddingBottom: 16,
      color: theme.colors.text,
    },
    listContent: {
      paddingHorizontal: 24,
      paddingBottom: 24,
      gap: 12,
    },
    card: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: theme.colors.surface,
      borderRadius: 16,
      padding: 16,
      marginBottom: 12,
      shadowColor: theme.colors.shadow,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 2,
    },
    cardLeft: {
      flex: 1,
      marginRight: 12,
    },
    cardName: {
      fontSize: 18,
      fontWeight: '700',
      textTransform: 'capitalize',
      marginBottom: 8,
      color: theme.colors.text,
    },
    typeContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 6,
    },
    typeBadge: {
      backgroundColor: theme.colors.accent,
      borderRadius: 999,
      paddingHorizontal: 10,
      paddingVertical: 4,
    },
    typeText: {
      fontSize: 12,
      textTransform: 'capitalize',
      color: theme.colors.text,
    },
    cardImage: {
      width: 72,
      height: 72,
    },
    boxBottom: {
      backgroundColor: theme.colors.background,
      padding: 24,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row', 
      paddingHorizontal: 24,
      paddingTop: 9,
      paddingBottom: 16,
      width: '100%',
    },  
    buttonEntrar: {
      width: 80,
      marginTop: 20,
      backgroundColor: theme.colors.primary,
      paddingVertical: 12,
      borderRadius: 40,
      alignItems: 'center',
    },
    buttonEntrarText: {
      color: theme.colors.surface,
      fontSize: 16,
      fontWeight: '600',
    },
  });


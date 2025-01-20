import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../styles/colors';

type SectionProps = {
  title: string;
  children: React.ReactNode;
  isDarkMode: boolean;
};

export const Section = ({title, children, isDarkMode}: SectionProps) => {
  const themeColors = isDarkMode ? COLORS.dark : COLORS.light;

  return (
    <View
      style={[
        styles.section,
        {
          backgroundColor: themeColors.sectionBackground,
          shadowColor: themeColors.sectionShadow,
        },
      ]}>
      <Text style={[styles.sectionTitle, {color: themeColors.text}]}>
        {title}
      </Text>
      <Text style={[styles.sectionDescription, {color: themeColors.text}]}>
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollViewContent: {
    padding: 16,
  },
  section: {
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: 16,
    fontWeight: '400',
  },
});

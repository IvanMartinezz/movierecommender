import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {COLORS} from './src/styles/colors';
import {Section} from './src/components/section';

const App = (): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  const themeColors = isDarkMode ? COLORS.dark : COLORS.light;

  return (
    <SafeAreaView
      style={[styles.safeArea, {backgroundColor: themeColors.background}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={themeColors.background}
      />
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}>
        <Section title="Introducción" isDarkMode={isDarkMode}>
          Esta es una introducción al diseño de una app profesional.
        </Section>
        <Section title="Sección 1" isDarkMode={isDarkMode}>
          Contenido dinámico de la sección 1.
        </Section>
        <Section title="Sección 2" isDarkMode={isDarkMode}>
          Contenido dinámico de la sección 2.
        </Section>
        <Section title="Sección 3" isDarkMode={isDarkMode}>
          Contenido dinámico de la sección 3.
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollViewContent: {
    padding: 16,
  },
});

export default App;

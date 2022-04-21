import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PressMe from './components/PressMe';

export default function App() {
  return (
    <View style={styles.view}>
      <PressMe />
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#091D82',
    alignItems: 'center',
    justifyContent: 'top',
  }
});

import { StyleSheet, Text, View } from 'react-native';
import One from './components/One';
import Two from './components/Three';
import Three from './components/Two';

export default function App() {
  return (
    <View style={styles.container}>
     <One/>
     <Two/>
     <Three/>
    </View>   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

import react from "react";
import { StyleSheet, Text, View } from "react-native";


export default function() {
    return(
        <View style={styles.Three}>
            <Text style={styles.Text}>
                 teste!
            </Text>
        </View>
        
    );
}

const styles = StyleSheet.create({
    Three: {
        backgroundColor: 'brown',
        width:'60px',
        height: '60px',
        position: 'relative',
        right: '25%',
        bottom: '10%'
    },
    Text: {
       color: '#fff',
       textAlign: 'center',
       marginTop: '30%'      
    },
})
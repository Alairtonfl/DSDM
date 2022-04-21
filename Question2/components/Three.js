import react from "react";
import { StyleSheet, Text, View } from "react-native";


export default function() {
    return(
        <View style={styles.squareTwo}>
            <Text style={styles.squareText}>
                teste!
            </Text>
        </View>
        
    );
}

const styles = StyleSheet.create({
    squareTwo: {
        backgroundColor: 'blue',
        width:'60px',
        height: '60px',
        marginLeft: '5%',
        marginTop: '-16%' 
    },
    squareText: {
       color: '#fff',
       textAlign: 'center',
       marginTop: '35%'      
    },
})
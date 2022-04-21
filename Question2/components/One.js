import react from "react";
import { StyleSheet, Text, View } from "react-native";


export default function() {
    return(
        <View style={styles.One}>
            <Text style={styles.Text}>
                teste!
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    One: {
        backgroundColor: 'green',
        width:'60px',
        height: '60px',
        marginLeft: '60%'
    },
    Text: {
       color: '#black',
       textAlign: 'center',
       marginTop: '30%'
    },
})
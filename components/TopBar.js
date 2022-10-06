import { Image, StyleSheet, Text, View } from "react-native";

const imageBack = require('../assets/back.png');
const imageCart = require('../assets/cart.png');

export default function TopBar() {

    return (
        <View style={stypes.container}>
            <Image
                source={ imageBack }
            />
            <Text stype={stypes.title}>Chat</Text>
            <Image
                source={ imageCart }
            />
        </View>
    )
}

const stypes = StyleSheet.create({
    container: {
        
        backgroundColor: "#1BA9FF",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    title: {
        color: "#000000"
    }
})
import { Button, Image, StyleSheet, Text, View } from "react-native"

export default function Item(props) {
    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image source={ props.item.image } />
            </View>
            <View style={styles.content}>
                <Text style={styles.content_name}>{props.item.name}</Text>
                <Text style={styles.content_shop}>{props.item.shop}</Text>
            </View>
           <View style={styles.button}>
                <Button
                        title="Chat"
                        color="#FF0000"
                />
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignSelf: 'stretch',
        borderWidth: 1,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        padding: 5,
        borderColor: "#C4C4C4",
        backgroundColor: "#E5E5E5"
    },
    image: {
        width: 100
    },
    content: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly"
    },
    content_name: {
        fontSize: 16,
        fontWeight: '400'
    },
    content_shop: {
        color: "#FF0000"
    },
    button: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: 20
    }
})
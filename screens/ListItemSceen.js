import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
import Item from "../components/Item";
const IMAGECaLau = require('../assets/ca_nau_lau.png');
const IMAGEKhoGa = require('../assets/ga_bo_toi.png');
const IMAGEXeCanCau = require('../assets/xa_can_cau.png');

const DATA = [
    {
        id: '1',
        name: "Ca nau lau mini",
        shop: "Devang",
        image: IMAGECaLau
    },
    {
        id: '2',
        name: "1KG Kho Ga tuoi",
        shop: "The gioi do choi",
        image: IMAGEKhoGa
    },
    {
        id:'3',
        name: "Xe can cau da nang",
        shop: "the gioi do choi",
        image: IMAGEXeCanCau
    }
]

export default function ListItemScreen() {
    const renderItem = ({item}) => {
        return (
            <Item item={item}></Item>
        )
    }
    return (
        <SafeAreaView style={styles.container}>

            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}    
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
    },
})
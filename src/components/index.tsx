import { AntDesign } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';

const FoodListItem = ({ item }) => {
    return (
        <View style={{
            backgroundColor: "#dfdfdf",
            padding: 10,
            borderRadius: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',

        }}>
            <View style={{ flex: 1, gap: 5, }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}> {item.lable}</Text>
                <Text style={{ color: 'dimgray' }}>{item.cal} cal, {item.brand}</Text>
            </View>
            <View style={{ marginRight: 10, }}>
                <TouchableOpacity>
                    <AntDesign name="pluscircleo" size={24} color="royalblue" />
                </TouchableOpacity>

            </View>
        </View>
    )

}
export default FoodListItem
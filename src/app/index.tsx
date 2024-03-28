import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const FoodListItem = ({ item }) => {
  return (
    <View style={{
      backgroundColor: "gainsboro",
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

export default function App() {
  return (
    <View style={styles.container}>
      {/* Food Item View */}
      <FoodListItem item={{ lable: 'Pizza', cal: 50, brand: "Binh Phuoc" }} />
      <FoodListItem item={{ lable: 'Chicken', cal: 200, brand: "USA" }} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    justifyContent: 'center',
  },
});

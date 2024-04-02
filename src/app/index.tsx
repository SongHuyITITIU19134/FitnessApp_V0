import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, TextInput, View } from 'react-native';
import FoodListItem from '../components';


const FoodItem = [
  { lable: 'Apple', cal: 50, brand: "Binh Phuoc" },
  { lable: 'Chicken', cal: 150, brand: "USA" },
  { lable: 'Pizza', cal: 370, brand: "Italy" }
]
export default function App() {

  const [search, setSearch] = useState('');
  const performSearch = () => {
    console.warn("Searching...", search)
    setSearch(search);
  }

  return (
    <View style={styles.container}>
      {/* Food Item View */}
      <TextInput value={search} onChangeText={setSearch} placeholder='Searching...' style={styles.input} />

      {search && <Button title='Searching' onPress={performSearch} />}
      <FlatList
        data={FoodItem}
        renderItem={({ item }) => <FoodListItem item={item} />}
        contentContainerStyle={{ gap: 5 }}
      />


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
    gap: 15
  },
  input: {
    backgroundColor: '#e2e2e2',
    padding: 10,
    borderRadius: 5,
  }
});

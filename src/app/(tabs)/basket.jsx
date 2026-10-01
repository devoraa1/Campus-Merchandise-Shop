import { ScrollView, View, Text, StyleSheet } from 'react-native'
import { useBasket } from '../../context/BasketContext'

export default function Basket() {
  const { basketItems } = useBasket()

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Basket</Text>

      {basketItems.length === 0 ? (
        <Text style={styles.emptyText}>
          Your basket is empty.
        </Text>
      ) : (
        basketItems.map((item) => (
          <View key={item.id} style={styles.row}>
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>
                {item.name}
              </Text>

              <Text style={styles.quantity}>
                Quantity: {item.qty}
              </Text>
            </View>

            <Text style={styles.price}>
              {item.price}
            </Text>
          </View>
        ))
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#ffffff',
    flexGrow: 1,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },

  emptyText: {
    fontSize: 15,
    color: '#777',
    textAlign: 'center',
    marginTop: 30,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
  },

  itemInfo: {
    flex: 1,
    paddingRight: 10,
  },

  itemName: {
    fontSize: 15,
    fontWeight: 'bold',
  },

  quantity: {
    fontSize: 13,
    color: '#777',
    marginTop: 4,
  },

  price: {
    fontSize: 14,
    color: '#555',
  },
})

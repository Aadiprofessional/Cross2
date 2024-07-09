import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../styles/color';
import { useFonts, Outfit_600SemiBold } from '@expo-google-fonts/outfit';

const CartScreen = ({ cartItems = [], totalAmount = 0 }) => {
  let [fontsLoaded] = useFonts({
    Outfit_600SemiBold,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.cartText}>Cart :</Text>
          <View style={styles.cartItemCountContainer}>
            <Text style={styles.cartItemCount}>{cartItems.length}</Text>
          </View>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.subtotalText}>Subtotal: </Text>
          <Text style={styles.totalAmountText}>${totalAmount.toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.content}>
        {cartItems.map(item => (
          <Text key={item.id} style={styles.itemText}>{item.name} - ${item.price}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.main, // Replace with your main color
    padding: 15,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartText: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Outfit_600SemiBold',
  },
  cartItemCountContainer: {
    marginLeft: 10,
    backgroundColor: colors.second, // Replace with your second color
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartItemCount: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Outfit_600SemiBold',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subtotalText: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Outfit_600SemiBold',
  },
  totalAmountText: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Outfit_600SemiBold',
    marginLeft: 5,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 18,
    fontFamily: 'Outfit_600SemiBold',
    marginVertical: 5,
  },
});

export default CartScreen;

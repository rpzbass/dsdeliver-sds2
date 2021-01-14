import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Alert, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fechOrders } from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../types';
import { useIsFocused, useNavigation } from '@react-navigation/native';



function Orders() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoading, setIsloading] = useState(false);
    const navigation = useNavigation();
    const isFocused = useIsFocused();




    const fetchData = () => {
        setIsloading(true);
        fechOrders()
            .then(response => setOrders(response.data))
            .catch(() => Alert.alert('Houve um erro ao buscar os pedidos'))
            .finally(() => setIsloading(false));

    }
    useEffect(() => {
        if (isFocused) {
            fetchData();
        }

    }, [isFocused]);

    const handlerOnPress = (order: Order) => {

        
        navigation.navigate('OrderDetails', { order });

    }


    return (
        <>
            <Header />
            <ScrollView style={styles.container}>
                {isLoading ? (
                    <Text>Buscando pedidos...</Text>
                ) : (
                        orders.map(order => (
                            <TouchableWithoutFeedback key={order.id} onPress={() => handlerOnPress(order)}>
                                <OrderCard order={order} />
                            </TouchableWithoutFeedback>
                        ))

                    )}
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({

    container: {

        paddingLeft: '2%',
        paddingRight: '2%'
    }

});

export default Orders;
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text, Alert, Linking } from 'react-native';
import { Order } from '../types';
import OrderCard from '../OrderCard';
import Header from '../Header';
import { RectButton } from 'react-native-gesture-handler';
import { confirmDelivery } from '../api';



type Props = {

    route: {
        params: {

            order: Order;
       
        }
    }
}


function OrderDetails({ route }: Props) {

    const order = route.params.order;
    const navigation = useNavigation();


    const handleOnCancel = () => {

           navigation.navigate('Orders'); 

    }
    const handleOnConfirmDelivery = () => {

            confirmDelivery(order.id)
            .then(() => {
                Alert.alert(`Pedido Nº ${order.id} entregue com sucesso! `)
                navigation.navigate('Orders');
            })
            .catch(() => {
                Alert.alert(`Houve um erro ao confirmar o pedido do pedido ${order.id}`)
            })
        }

    const handleStartNavigation = () => {

            Linking.openURL(`https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${order.latitude},${order.longitude}`);

    }

    return (
        <>
            <Header />
            <View style={styles.container}>
                <OrderCard order={order} />
                <RectButton style={styles.button} onPress={handleStartNavigation}>
                        <Text style={styles.buttonText}>INICIAR NAVEGAÇÃO</Text>
                </RectButton>
                <RectButton style={styles.button} onPress={handleOnConfirmDelivery}>
                <Text style={styles.buttonText}>CONFIRMAR ENTREGA</Text>
                </RectButton>
                <RectButton style={styles.button} onPress={handleOnCancel}>
                        <Text style={styles.buttonText} >CANCELAR</Text>
                </RectButton>
            </View>
        </>


    );
}

const styles = StyleSheet.create({


    container: {
        paddingRight: '2%',
        paddingLeft: '2%'
    },
    button: {
        backgroundColor: '#DA5C5C',
        flexDirection: 'row',
        borderRadius: 10,
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '5%',
        marginRight: '5%'
    },
    buttonText: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: '5%',
        paddingRight: '5%',
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFF',
        letterSpacing: -0.24,
        fontFamily: 'OpenSans_700Bold'
    }


});

export default OrderDetails;
import React, { useEffect } from "react";
import { StyleSheet, Image, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { earn, selectCookie } from "../redux/money/moneySlice";

export const CookieScreen: React.FC = () => {
    const dispatch = useDispatch()
    const cookie = useSelector(selectCookie)

    useEffect(() => {
        const id = setInterval(() => {
            dispatch(earn(1))
        }, 1000)
        return () => clearInterval(id)
    })

    return (
        <View style={styles.container}>
            <Text
                style={styles.cookieText}
            >🍪 {cookie}</Text>
            <TouchableOpacity
                style={styles.cookieContainer}
                onPress={() => {
                    dispatch(earn(2))
                }}
            >
                <Image
                    source={require('../assets/cookie.png')}
                    resizeMode='contain'
                    style={styles.cookie}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=> {
                    console.log('clicked')
                }}
            >
                <Text style={styles.shopButton}>
                    SHOP
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cookieContainer: {
        height: '70%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5%'
    },
    cookie: {
        width: '100%',
        height: '100%',
    },
    cookieText: {
        fontSize: 30
    },
    shopButton: {
        fontSize: 30,
        backgroundColor: "black",
        color: "white",
        width: "80%"
    }
});

import React, { useEffect } from "react";
import { StyleSheet, Image, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { earn, selectCookie } from "../redux/money/moneySlice";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { selectClickLevel, selectSecLevel } from "../redux/levelSlice";

type RootStackParamList = {
    CookieScreen: undefined;
    ShopScreen: undefined
}

type Props = NativeStackScreenProps<RootStackParamList, 'CookieScreen'>;

const calcClick = (lv: number[]) : number => {
    return lv[0]*1+lv[1]*10+lv[2]*100+lv[3]*1000
}

const calcSec = (lv: number[]) : number => {
    return lv[0]*1+lv[1]*5+lv[2]*10+lv[3]*50+lv[4]*100+lv[5]*500+lv[6]*1000+lv[7]*10000
}

export const CookieScreen: React.FC<Props> = ({ navigation }: Props) => {
    const dispatch = useDispatch()
    const cookie = useSelector(selectCookie)
    const clickLevel = useSelector(selectClickLevel)
    const secLevel = useSelector(selectSecLevel)

    useEffect(() => {
        const id = setInterval(() => {
            dispatch(earn(calcSec(secLevel)))
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
                    dispatch(earn(calcClick(clickLevel)))
                }}
            >
                <Image
                    source={require('../assets/cookie.png')}
                    resizeMode='contain'
                    style={styles.cookie}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('ShopScreen')
                }}
                style={styles.shopButtonContainer}
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
    shopButtonContainer: {
        width: "100%",
        alignItems: 'center',
    },
    shopButton: {
        fontSize: 30,
        backgroundColor: "black",
        color: "white",
        width: "80%",
        textAlign: 'center',
        padding: 5,
        borderRadius: 10
    },
});

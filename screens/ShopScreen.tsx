import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { SectionList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { clickLevelUp, secLevelUp, selectClickLevel, selectSecLevel } from "../redux/levelSlice";
import { earn, selectCookie } from "../redux/money/moneySlice";

type RootStackParamList = {
    CookieScreen: undefined;
    ShopScreen: undefined
}

type Props = NativeStackScreenProps<RootStackParamList, 'CookieScreen'>;

const SectionData = [
    {
        title: "🍪/click",
        data: [
            {
                name: '🍫',
                index: 0,
                value: 1
            },
            {
                name: '🥤',
                index: 1,
                value: 10
            },
            {
                name: '🥠',
                index: 2,
                value: 100
            },
            {
                name: '🍪',
                index: 3,
                value: 1000
            },
        ]
    },
    {
        title: "🍪/sec",
        data: [
            {
                name: '🙍',
                index: 0,
                value: 1
            },
            {
                name: '👷‍♂️',
                index: 1,
                value: 5
            },
            {
                name: '👷‍♀️',
                index: 2,
                value: 10
            },
            {
                name: '👨🏻‍💼',
                index: 3,
                value: 50
            },
            {
                name: '👩🏻‍💼',
                index: 4,
                value: 100
            },
            {
                name: '🧑‍🏭',
                index: 5,
                value: 500
            },
            {
                name: '👩‍🏭',
                index: 6,
                value: 1000
            },
            {
                name: '🏭',
                index: 7,
                value: 10000
            },
        ]
    }
]

const CalcPrice = (isSec: boolean, value: number, level: number): number => {
    if (isSec)
        return Math.floor(value * 6000 * (Math.pow(1.1, level)))
    return Math.floor(value * 100 * (Math.pow(1.1, level)))
}

export const ShopScreen: React.FC<Props> = ({ navigation }: Props) => {
    const cookie = //Select?
    const clickLevel = //Select?
    const secLevel = //Select?

    const dispatch = // Dispatch?

    return (
        <View style={ShopScreenStyles.container}>
            <View style={ShopScreenStyles.goBackContainer}>
                <TouchableOpacity style={ShopScreenStyles.goBackButtonContainer}
                    onPress={() => {
                        //What to Do?
                    }}
                >
                    <Text style={ShopScreenStyles.goBack}>Go Back</Text>
                </TouchableOpacity>
                <Text
                    style={ShopScreenStyles.cookieText}
                >🍪 {cookie}</Text>
            </View>

            <SectionList
                sections={SectionData}
                renderItem={({ section, item }) => {
                    const lv = // Level
                    const price = // Price
                    return (
                        <>
                            <View style={ShopScreenStyles.itemContainer} >
                                <Text style={ShopScreenStyles.item}>{item.name}(+{
                                    lv
                                })</Text>
                                <Text style={ShopScreenStyles.item}>{item.value}</Text>
                                <View style={ShopScreenStyles.buyButtonContainer}>
                                    <TouchableOpacity style={ShopScreenStyles.buyButtonRound}
                                        onPress={() => {
                                            if (price > cookie) {
                                                alert("You don't have enough cookie!")
                                                return
                                            }
                                            if (section.title === '🍪/sec') //What to do?
                                            else //What to do?
                                            //What to do?
                                        }}
                                    >
                                        <Text style={ShopScreenStyles.buyButton}>
                                            🍪 {price}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={ShopScreenStyles.divider} />
                        </>
                    )
                }}
                renderSectionHeader={({ section }) => <Text style={ShopScreenStyles.sectionHeader}>{section.title}</Text>}
            />
        </View>
    )
}

const ShopScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: "10%"
    },
    itemContainer: {
        flexDirection: 'row'
    },
    buyButton: {
        fontSize: 18,
    },
    buyButtonRound: {
        borderColor: "black",
    },
    buyButtonContainer: {
        flexDirection: "row-reverse",
        width: "40%",
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderColor: "black"
    },
    item: {
        paddingLeft: 30,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 20,
        width: '30%'
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: 'rgba(200,200,200,1.0)',
    },
    divider: {
        height: 2,
        backgroundColor: 'rgba(200,200,200,1.0)',
        width: '100%'
    },
    goBackContainer: {
        height: '5%',
        width: '100%',
        flexDirection: 'row'
    },
    goBackButtonContainer: {
        marginLeft: 15,
        backgroundColor: 'black',
        width: '20%',
        height: '80%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    goBack: {
        color: "white",
        fontSize: 15,
    },
    cookieText: {
        fontSize: 25,
        paddingLeft: 20
    },
})
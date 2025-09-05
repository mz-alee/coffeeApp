import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { LinearGradient } from 'expo-linear-gradient';

const FavItemCard = () => {

    const sizes = [250, 500, 1000];

    return (
        <View style={styles.main}>
            <ImageBackground
                source={require('../assets/bg1.jpeg')}
                style={styles.topContainer}>
                <View style={styles.bottomBox}>
                    <View style={styles.leftSide}>
                        <Text style={styles.coffeName}>Coffe Name</Text>
                        <Text style={styles.location}>from africa</Text>
                        <View style={styles.ratingContainer}>
                            <MaterialIcons name="star" size={20} color="#D17842" />
                            <Text style={styles.ratingText}>4.5</Text>
                            <Text style={styles.ratingTotal}>(6,444)</Text>
                        </View>
                    </View>
                    <View style={styles.rightSide}>
                        <View style={styles.btnContainer}></View>
                        <View style={styles.btnContainer}></View>
                        <View style={styles.btnContainer}></View>
                    </View>
                </View>
            </ImageBackground>
            <LinearGradient
                colors={['#262B33', 'rgba(38, 43, 51, 0)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 3, y: 3 }}
                style={styles.bottomContainer}
            >
                {/* <View style={styles.bottomContainer}> */}
                    <Text style={styles.DescriptionTitle}>Description</Text>
                    <View style={styles.DescriptionBox}>
                        <Text style={styles.DescriptionText}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error dolorem neque, facere possimus placeat iure, voluptates optio nihil cumque commodi nemo? Nam hic magnam tenetur reiciendis repudiandae laudantium atque perferendis.
                        </Text>
                    </View>
                {/* </View> */}
            </LinearGradient>
        </View>
    )
}

export default FavItemCard;

const styles = StyleSheet.create({
    main: {
        height: 470,
        width: "90%",
        borderRadius: 20,
        position: "relative",
        overflow: "hidden"
    },
    topContainer: {
        height: 300,
        borderRadius: 20,
    },
    bottomBox: {
        height: 120,
        width: '100%',
        backgroundColor: '#05050584',
        borderTopStartRadius: 25,
        borderTopEndRadius: 25,
        bottom: 0,
        position: 'absolute',
        padding: 12,
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    leftSide: {
        width: '60%',
    },
    rightSide: {
        width: "40%",
        gap: 13,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    coffeName: { fontSize: 20, fontWeight: "700", color: 'white' },
    location: { color: "#AEAEAE", fontSize: 10, textTransform: 'capitalize' },
    ratingContainer: {
        height: 20,
        width: 100,
        marginTop: 23,
        flexDirection: 'row',
        gap: 4,
        alignItems: 'center'
    },
    ratingText: { fontSize: 14, fontWeight: "900", color: 'white' },
    ratingTotal: { color: '#AEAEAE', fontSize: 9 },
    btnContainer: {
        backgroundColor: '#141921',
        padding: 10,
        width: 40,
        height: 40,
        borderRadius: 8,
    },
    bottomContainer: {
        // flex: 0.4,
        height:170,
    },
    DescriptionTitle: {
        color: '#AEAEAE',
        fontSize: 16,
        fontWeight: '700',
        margin: 15,
    },
    DescriptionBox: {
        height: 120,
        // backgroundColor:"red"
    },
    DescriptionText: {
        color: '#AEAEAE',
        fontSize: 12,
        fontWeight: '300',
        marginHorizontal: 15,
        marginBottom: 10
    },

})

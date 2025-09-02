import React from 'react'
import Items from './Items'
import { ScrollView, StyleSheet, View } from 'react-native'

const ScrollRow = () => {
    return (
        <>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
                <Items />
                <Items />
                <Items />
                <Items />
                <Items />
                <Items />
                <Items />
                <Items />
            </ScrollView>
        </>
    )
}

export default ScrollRow
const styles = StyleSheet.create({
    scrollContainer: {
        // backgroundColor: 'red',
        borderStartColor: 'red',
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        marginTop: 10,
        // paddingHorizontal: 30,
        width: "85%",
    }

});
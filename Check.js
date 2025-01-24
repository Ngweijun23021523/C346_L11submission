import React, { useState, useEffect } from "react";
import { StatusBar, Button, FlatList, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9f9f9",
        padding: 10,
    },
    listStyle: {
        backgroundColor: "#ffffff",
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
    },
    itemText: {
        fontSize: 16,
        color: "#333",
        marginBottom: 5,
    },
    buttonStyle: {
        backgroundColor: "yellow",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        marginVertical: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

const Check = ({ navigation }) => {
    const [myData, setMyData] = useState([]);

    const renderItem = ({ item }) => {
        return (
            <View style={styles.listStyle}>
                <Text style={styles.itemText}>Name: {item.name}</Text>
                <Text style={styles.itemText}>Email: {item.Email}</Text>
                <Text style={styles.itemText}>PhoneNumber: {item.phoneNumber}</Text>
            </View>
        );
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://jsonhost.com/json/b2dd09424dffefa21e4b786a02e31823");
            const data = await response.json();
            setMyData(data);
        };
        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.buttonStyle}>
                <Button title= 'Home' onPress={() => {navigation.navigate("Home")}}/>
            </View>
            <FlatList
                data={myData}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

export default Check;




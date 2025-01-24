import React, { useState } from 'react';
import { StatusBar, View, Button, Text, TextInput, Alert, StyleSheet } from 'react-native';

const Add = () => {
    const [name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [mydata, setMydata] = useState([]);

    const handleSubmit = () => {
        const item = { name, Email, phoneNumber };
        const updatedData = [...mydata, item];

        setMydata(updatedData);


        fetch("https://jsonhost.com/json/b2dd09424dffefa21e4b786a02e31823", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "uvzqcjhp5igwfpr7snrj4enqmukvvjmn",
            },
            body: JSON.stringify(updatedData),
        })
            .then((response) => {
                if (response.ok) {
                    Alert.alert("Success", "Data has been submitted successfully.");

                    setName("");
                    setEmail("");
                    setPhoneNumber("");
                } else {
                    Alert.alert("Error", "Failed to submit data.");
                }
            })

    };

    return (
        <View style={styles.container}>
            <StatusBar />
            <Text style={styles.label}>Name:</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Enter name"
            />

            <Text style={styles.label}>Email:</Text>
            <TextInput
                style={styles.input}
                value={Email}
                onChangeText={setEmail}
                placeholder="Enter Email"
            />

            <Text style={styles.label}>Phone Number:</Text>
            <TextInput
                style={styles.input}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                placeholder="Enter phone number"
            />

            <Button title="Submit" onPress={handleSubmit} />



        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f8f8f8",
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: "bold",
        color: "#333",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
        backgroundColor: "#fff",
    },
    buttonContainer: {
        marginTop: 20,
    },
});

export default Add;

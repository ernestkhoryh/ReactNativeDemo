import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  KeyboardAvoidingView, 
  Button
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useState } from "react";
import { RadioButton, Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [likesCoffee, setLikesCoffee] = useState('');

  return (
    <PaperProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{flex:1}}>
          <KeyboardAvoidingView behavior="padding" style={styles.keyboardView}>
            <ScrollView contentContainerStyle={styles.scrollView}>  
              <View style={styles.container}>
                <Text style={styles.header}>Sign Up Form</Text>
                
                {/* Name Field */}
                <View style={styles.formRow}>
                  <Text style={styles.label}>Your Name:</Text>
                  <TextInput 
                    style={styles.textInput} 
                    placeholder="Enter your name" 
                    value={name} 
                    onChangeText={setName} 
                  />
                </View>
                
                {/* Email Field */}
                <View style={styles.formRow}>
                  <Text style={styles.label}>Your Email:</Text>
                  <TextInput 
                    style={styles.textInput} 
                    placeholder="Enter your email" 
                    value={email} 
                    onChangeText={setEmail} 
                    keyboardType="email-address"
                  />
                </View>

                {/* Coffee Preference */}
                <View style={styles.formRow}>
                  <Text style={styles.label}>Like Coffee?</Text>
                  <View style={styles.radioContainer}>
                    <RadioButton.Group 
                      onValueChange={value => setLikesCoffee(value)} 
                      value={likesCoffee}
                    >
                      <View style={styles.radioOptionsRow}>
                        <View style={styles.radioOption}>
                          <RadioButton value="yes" />
                          <Text style={styles.radioLabel}>Yes</Text>
                        </View>
                        <View style={styles.radioOption}>
                          <RadioButton value="no" />
                          <Text style={styles.radioLabel}>No</Text>
                        </View>
                      </View>
                    </RadioButton.Group>
                  </View>
                </View>
                
                {/* Submit Button */}
                <View style={styles.buttonContainer}>
                  <Button title="Submit" onPress={() => {
                    alert(`Name: ${name}, Email: ${email}, Likes Coffee: ${likesCoffee || 'Not specified'}`);
                  }} />
                </View>
                
                <StatusBar style="dark" />
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    padding: 16,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    color: "black",
    textAlign: "center",
  },
  formRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    width: "30%",
    textAlign: "right",
    marginRight: 15,
  },
  textInput: {
    height: 40,
    width: "65%",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ccc",
    padding: 10,
  },
  radioContainer: {
    width: "65%",
  },
  radioOptionsRow: {
    flexDirection: "row",
  },
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  radioLabel: {
    marginLeft: 5,
  },
  buttonContainer: {
    marginTop: 30,
    alignItems: "center",
  },
});
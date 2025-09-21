import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  KeyboardAvoidingView, 
  Button,
  TouchableOpacity
} from "react-native";
// import Header from "./components/Header";
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import { useState } from "react";
import RadioGroup from 'react-native-radio-buttons-group';

// RadioButton Component
// const RadioButton = ({ selected, onPress, label }) => {
//   return (
//     <TouchableOpacity style={styles.radioButton} onPress={onPress}>
//       <View style={styles.radioCircle}>
//         {selected && <View style={styles.radioSelected} />}
//       </View>
//       <Text style={styles.radioLabel}>{label}</Text>
//     </TouchableOpacity>
//   );
// };



export default function App() {
  const[name, setName]=useState('');
  const[email, setEmail]=useState('');
  const[likesCoffee, setLikesCoffee]=useState(false);

// ...

const [radioButtons, setRadioButtons] = useState([
  {
    id: '1', // acts as primary key, should be unique
    label: 'Yes',
    value: 'yes'
  },
  {
    id: '2',
    label: 'No',
    value: 'no'
  }
]);

function onPressRadioButton(radioButtonsArray) {
  setRadioButtons(radioButtonsArray);
      const selectedOption = radioButtonsArray.find(button => button.selected);
    if (selectedOption) {
      setLikesCoffee(selectedOption.value === 'yes');
    }
}

// // In your JSX
// <RadioGroup 
//   radioButtons={radioButtons} 
//   onPress={onPressRadioButton} 
// />
  return (
    <SafeAreaProvider>
    <SafeAreaView style={{flex:1}}>
    <KeyboardAvoidingView behavior="padding" style={styles.keyboardView}>
    <ScrollView contentContainerStyle={styles.ScrollView}>  
    <View style={styles.container}>
      {/* <Image
        source={require("./assets/images/mode3_w430-1612692838321-noname.webp")}
        style={styles.bannerImg}
      />
      <Header title="Software Engineering Course" color="darkblue" />
      {/* <Image
        source={{ uri: "https://i.imgur.com/9wvRTDo.png" }}
        style={styles.image}   resizeMode="contain"
      /> */}
      {/*<Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={styles.image}   resizeMode="contain"
      /> */}

      <Text style={styles.Header}>Sign Up Form</Text>

      <TextInput style={styles.textInput} placeholder="Enter your name" value={name} onChangeText={setName} />
      <TextInput style={styles.textInput} placeholder="Enter your email" value={email} onChangeText={setEmail} />

      <View style={styles.spacing} />
      <View style={styles.formRow}>
        <Text style={styles.label}>Like coffee?</Text>
          <View style={styles.radioGroup}>
                  {/* <RadioButton
                    selected={likesCoffee === true}
                    onPress={() => setLikesCoffee(true)}
                    label="Yes"
                  />
                  <RadioButton
                    selected={likesCoffee === false}
                    onPress={() => setLikesCoffee(false)}
                    label="No"
                  /> */
                /* </View> */}
                      <View style={styles.radioContainer}>
        <RadioGroup 
          radioButtons={radioButtons} 
          onPress={onPressRadioButton}
          layout="row"
        />
      </View>
      </View>
      
      
      <View style={styles.buttonContainer}>
      <Button title="Submit" onPress={() => {
                    alert(`Name: ${name}, Email: ${email}, Likes Coffee: ${likesCoffee === null ? 'Not specified' : likesCoffee ? 'Yes' : 'No'}`);
      }} />
      </View>
      <StatusBar style="dark" />
      </View>
      </View>

    </ScrollView>
    </KeyboardAvoidingView>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
    keyboardView: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
  bannerImg: {
    width: "90%",
    resizeMode: "contain",
  },
  image: {
    width: 350,
    height: 350,
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "tomato",
  },
  subHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  textInput: {
    height: 40,
    margin: 12,
    width: "70%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#333",
    padding: 10,
  },
    radioGroup: {
    flexDirection: "row",
    width: "65%",
    justifyContent: "space-between",
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#666",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  radioSelected: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "darkblue",
  },
  radioLabel: {
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 30,
    width: "50%",
  },
});

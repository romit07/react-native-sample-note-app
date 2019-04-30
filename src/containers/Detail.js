import React, { Component } from "react";
import {
  View,
  ImageBackground,
  SafeAreaView,
  Text,
  Keyboard,
  Image
} from "react-native";
import styles from "./styles";
import images from "../assets/Images";
import {
  TextInput,
  ScrollView,
  TouchableOpacity
} from "react-native-gesture-handler";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { saveNote, deleteNote } from "../actions/ActionsTypes";
import { withNavigation } from "react-navigation";

class Detail extends Component {
  constructor(props) {
    super(props);
    const { navigation } = props;
    this.id =
      navigation.getParam("id") === undefined ||
      navigation.getParam("id") === ""
        ? Date.now()
        : navigation.getParam("id");
    this.state = {
      text:
        navigation.getParam("description") === undefined
          ? ""
          : navigation.getParam("description"),
      title:
        navigation.getParam("title") === undefined
          ? ""
          : navigation.getParam("title"),
      latitude: "",
      longitude: ""
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  textChanged = text => {
    this.setState({ text });
  };

  titleChanged = text => {
    this.setState({ title: text });
  };

  save = () => {
    Keyboard.dismiss();
    const { saveNote } = this.props;
    const data = {
      title:
        this.state.title === ""
          ? this.state.text.split(" ")[0]
          : this.state.title,
      description: this.state.text,
      geolocation: "geo",
      id: this.id,
      lat: this.state.latitude,
      long: this.state.longitude
    };
    saveNote(data);
    this.props.navigation.goBack();
  };
  delete = () => {
    Keyboard.dismiss();
    const { deleteNote } = this.props;
    const data = {
      id: this.id
    };
    deleteNote(data);
    this.props.navigation.goBack();
  };

  goBack = () => {
    this.save();
  };

  render() {
    return (
      <ImageBackground source={images.background} style={styles.container}>
        <View style={styles.navigationHeader}>
          <View style={styles.backButton}>
            <TouchableOpacity onPress={this.delete}>
              <Image source={images.leftArrow} style={styles.backButtonImage} />
            </TouchableOpacity>
          </View>
          <View style={styles.trashButton}>
            <TouchableOpacity onPress={this.delete}>
              <Image source={images.trash} style={styles.backButtonImage} />
            </TouchableOpacity>
          </View>
        </View>
        <SafeAreaView>
          <Text style={styles.mainHeading}>Notes</Text>
          <View style={styles.doneContainer}>
            <TouchableOpacity onPress={this.save}>
              <Text style={styles.doneText}>Done</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.titleView}>
            <Text>Title: </Text>
            <TextInput
              autoCorrect={false}
              placeholder={"title"}
              onChangeText={text => this.titleChanged(text)}
              value={this.state.title}
              multiline={false}
              autoFocus
            />
          </View>
          <ScrollView>
            <TextInput
              autoCorrect={false}
              placeholder={"Write here.."}
              onChangeText={text => this.textChanged(text)}
              value={this.state.text}
              multiline={true}
              style={{ margin: 16 }}
            />
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({ saveNote, deleteNote }, dispatch)
  };
}

export default withNavigation(
  connect(
    null,
    mapDispatchToProps
  )(Detail)
);

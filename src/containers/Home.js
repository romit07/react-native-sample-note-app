import React, { Component } from "react";
import { View, ImageBackground, Text, FlatList, Image } from "react-native";
import styles from "./styles";
import images from "../assets/Images";
import { SafeAreaView } from "react-navigation";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { saveNote } from "../actions/ActionsTypes";

class Home extends Component {
  openNote = item => {
    const { navigation } = this.props;
    navigation.navigate("Detail", {
      id: item.data.id || "",
      title: item.data.title || "",
      description: item.data.description || "",
      item: item || ""
    });
  };

  createNewNote = () => {
    const { navigation } = this.props;
    navigation.navigate("Detail", {});
  };
  getComponent = item => {
    if (item.data.id === undefined || item.data.title === undefined) {
      return null;
    }
    return (
      <>
        <TouchableOpacity
          onPress={() => this.openNote(item)}
          style={styles.noteComponent}
        >
          <Text numberOfLines={1} style={styles.title}>
            {item.data.title}
          </Text>
          <Text numberOfLines={1} style={styles.subHeading}>
            {item.data.description.replace(item.data.title, "")}
          </Text>
          <Text numberOfLines={1} style={styles.geolocation}>
            {`lat: ${item.data.lat} long: ${item.data.long}`}
          </Text>
        </TouchableOpacity>
        <View style={styles.divider} />
      </>
    );
  };
  render() {
    const { notes } = this.props;
    let noteArray = [];
    if (notes !== undefined) {
      noteArray = Object.keys(notes).map(key => ({
        id: key,
        data: notes[key]
      }));
    }
    return (
      <>
        <ImageBackground source={images.background} style={styles.container}>
          <View style={styles.navigationHeader} />
          <SafeAreaView>
            <Text style={styles.mainHeading}>Notes</Text>
            <FlatList
              data={noteArray}
              renderItem={({ item }) => this.getComponent(item)}
              keyExtractor={item => `${item.id}_${item.data.title}`}
              style={{ marginLeft: 16, marginRight: 16, overflow: "hidden" }}
              showsVerticalScrollIndicator={false}
            />
          </SafeAreaView>
        </ImageBackground>
        <View style={styles.createNoteBotton}>
          <TouchableOpacity onPress={this.createNewNote}>
            <Image style={styles.newNoteImage} source={images.createNewNote} />
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const mapStateToProps = (store, ownProps) => {
  return {
    notes: store.note
  };
};
function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({ saveNote }, dispatch)
  };
}

export default withNavigation(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);

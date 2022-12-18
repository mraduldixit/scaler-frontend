import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Header = () => {
  const scheduleInterview = () => {
    navigation.navigate("Scheduled");
    console.log("Interview schedule btn is clicked!!");
  };

  return (
    <View style={styles.container}>
      <Button
        onPress={scheduleInterview}
        style={styles.item}
        title="scheduled Interviews"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
  },
});

export default Header;

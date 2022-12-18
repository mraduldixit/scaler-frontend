import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Button,
  SafeAreaView,
} from "react-native";
import Candidate from "./Candidate";
import { data } from "../utils/data";
import DateTimePickerModal from "react-native-modal-datetime-picker";
const Main = () => {
  // states
  const [candidates, setCandidates] = useState([]);
  const [date, setDate] = useState("");
  const [validDate, setValidDate] = useState(false);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const [validStartTime, setValidStartTime] = useState(true);
  const [validEndTime, setValidEndTime] = useState(true);

  const [showDate, setShowDate] = useState(false);
  const [showStartTime, setShowStartTime] = useState(false);
  const [showEndTime, setShowEndTime] = useState(false);

  // const [isDatePickerVisible, setDatePickerVisibility] = useState(true);

  const showDatePicker = () => {
    setShowDate(true);
  };
  const showStartTimePicker = () => {
    setShowStartTime(true);
  };

  const showEndTimePicker = () => {
    setShowEndTime(true);
  };

  const hideDatePicker = () => {
    setShowDate(false);
  };

  const hideStartTimePicker = () => {
    setShowStartTime(false);
  };

  const hideEndTimePicker = () => {
    setShowEndTime(false);
  };

  const dateHandler = (date) => {
    console.log(date);
    setDate(date);
    hideDatePicker();
  };
  const startTimeHandler = (time) => {
    console.log(new Date(time));
    setStartTime(time);
    hideStartTimePicker();
  };
  const endTimeHandler = (time) => {
    // console.log(format(time, "HH mm"));
    console.log(new Date(time));
    setEndTime(time);
    hideEndTimePicker();
  };

  const addCandidate = (candidate) => {
    // console.log("HEKKKO");
    // ToastAndroid.show(
    //   "All Your Base Are Belong To Us",
    //   ToastAndroid.SHORT,
    //   ToastAndroid.CENTER
    // );
    if (!validEndTime || !validStartTime) {
      return;
    }
    // // checkAvailability()
    // candidate.slots.forEach((slot) => {
    //   const check = startTime > slot.endTime || endTime < slot.startTime;
    //   if (!check) {
    //     // Alert
    //     return;
    //   }
    // });

    setCandidates((prev) => {
      return [...prev, candidate];
    });
  };

  const removeCandidate = (candidate) => {
    console.log(candidate);
    setCandidates((prev) => {
      return prev.filter((c) => {
        return c.id !== candidate.id;
      });
    });
  };

  const scheduleInterview = () => {
    navigation.navigate("Scheduled");
    console.log("Interview schedule btn is clicked!!");
  };

  return (
    <SafeAreaView>
      <Button
        onPress={scheduleInterview}
        style={styles.item}
        title="scheduled Interviews"
      />
      <View>
        {/* <Button title="Show Date Picker" onPress={showDatePicker} /> */}
        <Button title="Show Start Time Picker" onPress={showStartTimePicker} />
        <Button title="Show End Time Picker" onPress={showEndTimePicker} />
        <DateTimePickerModal
          isVisible={showDate}
          mode="date"
          onConfirm={dateHandler}
          onCancel={hideDatePicker}
        />

        <DateTimePickerModal
          isVisible={showStartTime}
          mode="time"
          onConfirm={startTimeHandler}
          onCancel={hideDatePicker}
        />
        <DateTimePickerModal
          isVisible={showEndTime}
          mode="time"
          onConfirm={endTimeHandler}
          onCancel={hideDatePicker}
        />
      </View>
      <ScrollView>
        {data.map((itemData, ind) => {
          return (
            <Candidate
              key={ind}
              onAdd={addCandidate}
              onRemove={removeCandidate}
              candidate={itemData}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  item: {
    color: "#FFFFFF",
    width: 50,
  },
});

export default Main;

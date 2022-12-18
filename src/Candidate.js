import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
function Candidate({ candidate, onAdd, onRemove }) {
  const [selected, setSelected] = useState(false);
  const selectCandidateHandler = (candidate) => {
    // console.log(candidate)
    setSelected(!selected);
    if (!selected) onAdd(candidate);
    else onRemove(candidate);
  };
  return (
    <TouchableOpacity
      style={[
        styles.candidateContainer,
        selected ? styles.selected : styles.notSelected,
      ]}
      onPress={() => {
        selectCandidateHandler(candidate);
      }}
    >
      <Text style={styles.candidateAttributes}>{candidate.name}</Text>
      <Text style={styles.candidateAttributes}>{candidate.email}</Text>
      <Text style={styles.candidateAttributes}>{candidate.phoneNo}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  candidateContainer: {
    flex: 1,
    width: 350,
    height: 60,
    flexDirection: "row",
    margin: 10,
    borderRadius: 5,
  },
  selected: {
    backgroundColor: "green",
  },
  notSelected: {
    backgroundColor: "#9f1239",
  },
  candidateAttributes: {
    size: 15,
    margin: 10,
    color: "#FFFFFF",
  },
});

export default Candidate;

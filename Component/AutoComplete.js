import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Touchable,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Dimensions,
} from "react-native";

import React, { useEffect, useState } from "react";

export default function AutoComplete(prop) {
  const [attResonId, setAttResonId] = useState();
  const [arr, setArr] = useState(null);
  const [empty, setEmpty] = useState(false);
  let leaveType;
  const arryFilter = (str) => {
    if (arr == null || !str) {
      setArr(prop && prop.data);
    } else {
      leaveType =
        prop &&
        prop.data.filter((leaveType) => {
          if (!leaveType.title.toUpperCase().indexOf(str.toUpperCase())) {
            return true;
          }
        });
      setArr(leaveType);
    }
  };
  const [leaveVal, setLeaveVal] = useState("");
  const [leaveFlag, setLeaveFlag] = useState(false);
  const [attTypeId, setAttTypeId] = useState();
  const [absenceTypeBorderBottomColor, setAbsenceTypeBorderBottomColor] =
    useState("black");
  const onTrigger = (attTypeId) => {
    prop.parentCallback(attTypeId);
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          alignSelf: "center",
          alignContent: "center",
          // position: "absolute",
        }}
      >
        <TextInput
          editable
          value={leaveVal}
          placeholderTextColor={prop.placeholderTextColor}
          style={{
            width:
              prop.widthBySide &&
              Dimensions.get("screen").width - prop.widthBySide,
            height: 50,
            borderWidth: 0.5,
            borderColor: "black",
            borderBottomColor: absenceTypeBorderBottomColor,

            borderBottomWidth: prop.borderBottomWidth,
            borderRadius: prop.borderRadius,
            paddingHorizontal: 10,
          }}
          selectionColor={"#006e51"}
          placeholder={prop.placeholder}
          onChangeText={(text) => {
            setLeaveVal(text);
            setLeaveFlag(true);
            arryFilter(text);
          }}
          onFocus={() => {
            setLeaveFlag(true);
            arryFilter();
            setAbsenceTypeBorderBottomColor(prop.onFocusBottomColor);
          }}
          onBlur={() => {
            setLeaveFlag(false);
            prop &&
              prop.data.map((item, index) => {
                if (leaveVal.toUpperCase() == item.title.toUpperCase()) {
                  setAttTypeId(item.id);
                  onTrigger(item);
                }
              });
            setAbsenceTypeBorderBottomColor(prop.absenceTypeBorderBottomColor);
          }}
        />

        <View
          style={{
            position: "absolute",
            top: 50,
            height: 135,
            elevation: 2,
            zIndex: 1000,
          }}
        >
          <ScrollView
            style={{}}
            keyboardShouldPersistTaps={"always"}
            nestedScrollEnabled={true}
          >
            {/* {console.log(arr && arr.length)} */}
            {leaveFlag
              ? arr.map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={{
                        width:
                          prop.widthBySide &&
                          Dimensions.get("screen").width - prop.widthBySide,
                        height: 40,
                        borderRadius: prop.borderRadiusList,
                        marginTop: prop.listMarginTop,
                        padding: 7,
                        elevation: 10,
                        borderBottomWidth: 0.5,
                        backgroundColor: prop.listBackgroundColor,
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => {
                          setLeaveVal(item.title);
                          setAttTypeId(item.id);
                          setLeaveFlag(false);
                          onTrigger(item);
                        }}
                      >
                        <View>
                          <Text
                            key={index}
                            style={{
                              color: prop.listTextColor,
                            }}
                          >
                            {item.title}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  );
                })
              : null}
            {arr && arr.length == 0 ? (
              <Text
                style={{
                  width:
                    prop.widthBySide &&
                    Dimensions.get("screen").width - prop.widthBySide,
                  height: 40,
                  borderRadius: 1,
                  padding: 7,
                  elevation: 2,
                  backgroundColor: "white",
                  textAlign: "center",
                }}
              >
                Not Found
              </Text>
            ) : null}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

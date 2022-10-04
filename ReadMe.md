# React-Native-AutoComplete-DropDown

Dropdown Item picker with search and autocomplete (typeahead) functionality for react native

## Demo

<a  href="https://snack.expo.dev/@umairhussain/e0b11a">

Example on Expo snacks

</a>
<p style="text-align: center;" align="center">
    <img src="https://i.ibb.co/fCYwqcJ/image-Example.jpg" width="300" height="450"/>
</p>

## Installation

Run: `npm install --save react-native-expo-autocomplete-dropdown` or `yarn add react-native-expo-autocomplete-dropdown`

## Platform

IOS and android

## Usage

```js
import AutoComplete from "react-native-expo-autocomplete-dropdown";
```

## DateSet

`dataSet` property must be an **array of objects** or **null**. Object required keys are:

```js
{
    id: 'some uniq string id',
    title: 'list item title'
}
```

### Example with local Dataset

```js
import { StyleSheet, Text, View } from "react-native";
import AutoComplete from "react-native-expo-autocomplete-dropdown";

export default function App() {
  const handleCallback = (childData) => {
    console.log("child", childData);
  };
  return (
    <View style={styles.container}>
      <AutoComplete
        data={[
          { id: "1", title: "Apple" },
          { id: "2", title: "banana" },
          { id: "3", title: "Amrod" },
          { id: "4", title: "pear" },
          { id: "5", title: "pine Apple" },
          { id: "6", title: "orange" },
        ]}
        widthBySide={30}
        placeholder={"select fruit"}
        placeholderTextColor={"green"}
        borderBottomColor={"green"}
        onFocusBottomColor={"black"}
        borderRadius={7}
        borderBottomWidth={2}
        borderRadiusList={10}
        listElevation={7}
        listBackgroundColor={"white"}
        listTextColor={"black"}
        parentCallback={handleCallback}
      ></AutoComplete>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
});
```

## Options

| **Option**                        | **Description**                      | **Type** | **Default** |
| --------------------------------- | ------------------------------------ | -------- | ----------- |
| `data`                            | set of list items                    | array    | null        |
| `widthBySide`                     | give Margin left Right               | int      | null        |
| `placeholder`                     | placeholder value                    | string   | null        |
| `parentCallback={handleCallback}` | return object                        | object   |             |
| `placeholderTextColor`            | placeholder Text Color               | string   | null        |
| `borderBottomColor`               | border Bottom Color                  | string   | null        |
| `onFocusBottomColor`              | onFocus border Bottom Color          | string   | null        |
| `borderRadius`                    | border radius of input field         | int      | null        |
| `borderBottomWidth`               | border Bottom Width                  | int      | false       |
| `borderRadiusList`                | menu dropdown list item radius       | int      | null        |
| `listElevation`                   | Elevation prop for Elevation of item | int      | null        |
| `listBackgroundColor`             | menu item background color           | string   | null        |
| `listTextColor`                   | menu item text color                 | string   | null        |

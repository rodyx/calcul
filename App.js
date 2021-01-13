import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { solveMath, intArr, arr } from './model';
import { styles } from './styles';

export default function App() {
  const [display, setDisplayValue] = useState('');
  const [temp, setTemp] = useState({
    first: null,
    operand: null,
    second: null,
  })

  function addNum(value) {
    if (value === '.' && display.includes('.')) return;
    setDisplayValue(display + value);
  }

  function addOperand(value) {
    switch (value) {
      case 'C':
        setDisplayValue('');
        setTemp({
          first: null,
          operand: null,
          second: null,
        })
        break;
      default:
        if (value !== '=') {
          setTemp(temp => ({
            first: display,
            operand: value,
            second: null
          }));
          setDisplayValue('');
        } else {
          setDisplayValue(solveMath(+temp.first, temp.operand, +display));

          setTemp({
            first: null,
            operand: null,
            second: null,
          })
        }
        break;
    }
  }

  return (
    <View style={styles.appWrapper}>
      <View style={styles.displayWrapper}>
        <Text style={styles.displayText}>{display}</Text>
      </View>
      <View style={styles.buttonsList}>

        {arr.map(item => {
          return intArr.includes(item) ? (
            <TouchableOpacity
              onPress={() => addNum(item)}
              style={styles.buttonNum}
              key={item}
            >
              <Text style={styles.buttonText}>{item}</Text>

            </TouchableOpacity>
          ) : (
              <TouchableOpacity
                onPress={() => addOperand(item)}
                style={styles.buttonSpec}
                key={item}
              >
                <Text style={styles.buttonText}>{item}</Text>

              </TouchableOpacity>
            )
        })}

      </View>
      <StatusBar style="auto" />
    </View>
  );
}




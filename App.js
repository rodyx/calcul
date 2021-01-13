import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const arr = ['%','^','sqrt‎','C','7','8','9','/','4','5','6','X','1','2','3','-','0','.','+','=']
  const intArr = ['1','2','3','4','5','6','7','8','9','0','.']
  
  const [display, setDisplayValue] = useState('');
  const [temp, setTemp] = useState({
    first: null,
    operand: null,
    second: null,
  })

//   setState(prevState => ({
//     ...prevState,
//     [name]: value
// }));

  function addNum(value) {
    if (value === '.' && display.includes('.')) return;
    setDisplayValue(display + value);
    // alert(JSON.stringify(temp))
  }

  function removeZeros(number) {
    if (`${number}`.includes('.')) {
      let [numb,frac] = `${number}`.split('.');
      if (numb.length > 11) return (+numb).toPrecision(7); 

      let fracarr = frac.split('');
      
      for (let i = fracarr.length-1; i >= 0; i--) {
        if (i === 0) {
          return fracarr[0] === '0' ? numb : numb + '.' + fracarr[0];
        } else {
          if (fracarr[i] === '0') continue;
          return numb + '.' + fracarr.slice(0,i+1).join('')
        }
      }
      
    }
  }
  
  function solveMath(value) {
    if (value === 'C') {
        setDisplayValue('');
        setTemp({
          first: null,
          operand: null,
          second: null,
        })
       return;
    } else if (value !== '=') {
        setTemp(temp => ({
            first: display,
            operand: value,
            second: null
         }));
        setDisplayValue('');
        
        return;
    } 

    let [a,b,res] = [+temp.first,+display,0]
    
    switch (temp.operand) {
      case '+':
        res = a + b;
        break;
      case '-':
        res = a - b;
        break;
      case 'X':
        res = a * b;
        break;
      case '/':
        res = a / b;
        break;
      case '^':
        res = Math.pow(a,b);
        break; 
      case 'sqrt‎':
        res = a * Math.sqrt(b); 
        break;  
    }

    setDisplayValue(removeZeros(res.toFixed(4)));
    

    setTemp({
      first: null,
      operand: null,
      second: null,
    })
  }


  return (
    <View style={styles.container}>
      <View style={styles.container2}>
          <Text style={styles.display}>{display}</Text>
      </View>
      <View style={styles.container3}>
        
        {arr.map(item => {
          return intArr.includes(item) ?  (
            <TouchableOpacity
              onPress={() => addNum(item)}
              style={styles.buttonInt}
              key={item}
              >
              <Text style={styles.buttonText}>{item}</Text>
              
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => solveMath(item)}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'green',
  },
  container2: {
    paddingHorizontal: 25,
    height: '30%',
    width: '100%',
    justifyContent: 'flex-end',
  },
  display: {
    marginLeft: 'auto',
    marginRight: '0',
    fontSize: 55,
  },
  container3: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white'
  },
  buttonInt: {
    width: 90,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: 'white',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  buttonSpec: {
    width: 90,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
    borderRadius: 50,
    borderWidth: 0.5,
    backgroundColor: '#f4a9a9',
    borderColor: 'white',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  buttonText: {
    fontSize: 35,
    color: '#000',
    shadowColor: 'transparent',
    shadowOpacity: 0,
    shadowRadius: 0,
  }, 
});


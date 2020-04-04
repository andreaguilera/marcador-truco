import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { reset } from 'expo/build/AR';
import { AdMobBanner, setTestDeviceIDAsync } from 'expo-ads-admob'

export default function App() {
  const [wePoints, setWePoints] = useState(0)
  const [theyPoints, setTheyPoints] = useState(0)
  const [weTotal, setWeTotal] = useState(0)
  const [theyTotal, setTheyTotal] = useState(0)

  if ( wePoints >= 12 ){
    setWeTotal(weTotal + 1)
    setWePoints(0)
  }

  if ( theyPoints >= 12 ){
    setTheyTotal(theyTotal + 1)
    setTheyPoints(0)
  }

  function resetAll(){
    setTheyPoints(0)
    setTheyTotal(0)
    setWePoints(0)
    setWeTotal(0)
  }


  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.sides}>
          <Text style={styles.team}>NÓS</Text>
          <Text style={styles.points}>{wePoints}</Text>
          <Text style={styles.team}>TOTAL</Text>
          <Text style={styles.points}>{weTotal}</Text>
          <TouchableOpacity style={styles.button} onPress={ ()=> {setWePoints(wePoints + 1)} }>
            <Text style={styles.btnText}>+1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>{ setWePoints(wePoints + 3) }}>
            <Text style={styles.btnText}>+3</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.sides}>
          <Text style={styles.team}>ELES</Text>
          <Text style={styles.points}>{theyPoints}</Text>
          <Text style={styles.team}>TOTAL</Text>
          <Text style={styles.points}>{theyTotal}</Text>
          <TouchableOpacity style={styles.button} onPress={ () => { setTheyPoints(theyPoints + 1)} }>
            <Text style={styles.btnText}>+1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>{ setTheyPoints(theyPoints + 3) }}>
            <Text style={styles.btnText}>+3</Text>
            </TouchableOpacity>         
        </View>
      </View>

      <TouchableOpacity style={styles.resetBtn} onPress={()=>{ resetAll() }}>
            <Text style={styles.btnText}>RESET</Text>
            </TouchableOpacity> 

            <AdMobBanner
              style={styles.banner}
              bannerSize="fullBanner"
              adUnitID="ca-app-pub-3940256099942544/6300978111"
              setTestDeviceIDAsync
              servePersonalizedAds // true or false
              onDidFailToReceiveAdWithError={ err => console.log( err ) }
            />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#363636',
  },
  container2: {
    backgroundColor: '#363636',
    flexDirection: 'row',
  },
  sides: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    padding: 20,
    marginTop: 10
  },
  team: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 15,
    color: '#808080'
  },
  points: {
    fontSize: 60,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#808080',
    borderRadius: 8,
    height: 50,
    width: 150,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
	  width: 10,
    height: 7,    
    },
    shadowRadius: 9.11,
    elevation: 14,
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: 25
  },
  resetBtn: {
    backgroundColor: '#808080',
    borderRadius: 8,
    height: 50,
    maxWidth: 330,
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
	  width: 10,
    height: 7,    
    },
    shadowRadius: 9.11,
    elevation: 14,
  },
  banner: {
    marginTop: 40
  }
});

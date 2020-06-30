import React, { useState } from 'react'
import { TextInput, Text, SafeAreaView, View } from 'react-native'
import ContainerScreen from 'App/Containers/ContainerScreen/ContainerScreen'
import { Header, InputField, Button } from 'App/Components'
import { searchLabel } from 'App/Assets/Strings'
import { Colors, Images } from 'App/Theme'
import styles from './VisitListScreenStyle'
import { vh } from 'App/Helpers/DimensionsHelper'

import mock from 'App/Assets/peopleMock.js'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'

const VisitListScreen = (props) => {
  const [searchFilter, setSearchFilter] = useState('')
  const [selectedItem, setSelectedItem] = useState(-1)
  const [data, setData] = useState(mock)
  const renderHeader = () => (
    <View style={styles.row}>
      <View style={styles.column_1}>
        <Text style={styles.headerText}>Nombre</Text>
      </View>
      <View style={styles.column_2}>
        <Text style={styles.headerText}>Teléfono</Text>
      </View>
      <View style={styles.column_3}>
        <Text style={styles.headerText}>Lote</Text>
      </View>
    </View>
  )
  const renderItem = ({ item, index }) => (
    <TouchableOpacity>
      <View
        key={item}
        style={{
          ...styles.row,
          backgroundColor: index % 2 === 1 ? Colors.white : index == 4 ? 'rgba(255,0, 0, 0.6)' : Colors.resaltedRow,
        }}
      >
        <View style={styles.column_1}>
          <Text style={styles.cellText}>{item.name}</Text>
        </View>
        <View style={styles.column_2}>
          <Text style={styles.cellText}>{item.phone}</Text>
        </View>
        <View style={styles.column_3}>
          <Text style={styles.cellText}>{item.allotment}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView>
      <Header icon={Images.visitHeader} text={'Visitas'} />
      <View style={{ padding: 20, height: vh(70) }}>
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Button textStyle={{ fontSize: 38, marginTop: 5, marginBottom: 10 }}>+</Button>
            <View style={{ width: 50 }} />
            <Button
              style={{ backgroundColor: Colors.error }}
              textStyle={{ fontSize: 38, marginTop: 5, marginBottom: 10 }}
            >
              -
            </Button>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <FlatList
              data={data}
              ListHeaderComponent={renderHeader}
              stickyHeaderIndices={[0]}
              renderItem={renderItem}
              keyExtractor={(item) => item.allotment}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
export default VisitListScreen

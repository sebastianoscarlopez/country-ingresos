import React, { useState, useEffect } from 'react'
import { TextInput, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import ContainerScreen from 'App/Containers/ContainerScreen/ContainerScreen'
import { Header, InputField } from 'App/Components'
import { searchLabel } from 'App/Assets/Strings'
import { Colors, Images } from 'App/Theme'
import styles from './SearchScreenStyle'
import { vh } from 'App/Helpers/DimensionsHelper'
import GlobalActions from 'App/Stores/Global/Actions'
import { FlatList } from 'react-native-gesture-handler'

const SearchScreen = (props) => {
  const [searchFilter, setSearchFilter] = useState('')
  const ownersData = useSelector(({global: { ownersData }}) => ownersData)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GlobalActions.searchOwners(searchFilter))
  }, [searchFilter, dispatch])
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
    <View key={item} style={{...styles.row, backgroundColor: index%2===0 ? Colors.white : Colors.resaltedRow}}>
      <View style={styles.column_1}>
        <Text style={styles.cellText}>{item.name}</Text>
      </View>
      <View style={styles.column_2}>
        <Text style={styles.cellText}>{item.phone}</Text>
      </View>
      <View style={styles.column_3}>
        <Text style={styles.cellText}>{item.allotment.toString()}</Text>
      </View>
    </View>
  )

  return (
    <View>
      <Header icon={Images.searchHeader} text={'Busqueda de\npropietarios'} />
      <View style={{ padding: 20, height: vh(70) }}>
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <View style={{ flexDirection: 'row' }}>
            <InputField
              label={searchLabel}
              value={searchFilter}
              onChangeText={setSearchFilter}
              rounded
            />
          </View>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <FlatList
              data={ownersData}
              ListHeaderComponent={renderHeader}
              stickyHeaderIndices={[0]}
              renderItem={renderItem}
              keyExtractor={(item) => item.index.toString()}
            />
          </View>
        </View>
      </View>
    </View>
  )
}
export default SearchScreen

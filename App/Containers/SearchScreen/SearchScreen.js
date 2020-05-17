import React, {useState } from 'react'
import { TextInput, Text, View } from 'react-native'
import ContainerScreen from 'App/Containers/ContainerScreen/ContainerScreen'
import { InputField } from 'App/Components'
import { searchTitle, searchLabel } from 'App/Assets/Strings'
import mock from 'App/Assets/peopleMock.js'
import { FlatList } from 'react-native-gesture-handler'

const SearchScreen = (props) => {
    const [searchFilter, setSearchFilter] = useState('')
    const [data, setData] = useState(mock)
    const renderHeader = () => (
        <View style={{flex:1, width: '100%', flexDirection: 'row', fontSize: 38, paddingBottom:5}}>
            <View style={{width: '50%', alignItems:'center'}}>
                <Text style={{fontSize: 18}}>Nombre</Text>
            </View>
            <View style={{width: '25%', alignItems:'center'}}>
                <Text style={{fontSize: 18}}>Teléfono</Text>
            </View>
            <View style={{width: '25%', alignItems:'center'}}>
                <Text style={{fontSize: 18}}>Lote</Text>
            </View>
        </View>
    )
    const renderItem = ({item}) => (
            <View key={item} style={{flex:1, width: '100%',flexDirection: 'column'}}>
                <View style={{flex:1, width: '100%', flexDirection: 'row'}}>
                    <View style={{width: '50%',}}>
                        <Text>{item.name}</Text>
                    </View>
                    <View style={{width: '25%', alignItems:'center'}}>
                        <Text>{item.phone}</Text>
                    </View>
                    <View style={{width: '25%', alignItems:'center'}}>
                        <Text>{item.allotment}</Text>
                    </View>
                </View>
            </View>
        )

    return (
        <ContainerScreen title={searchTitle}>
            <View style={{height:60, marginBottom:10}}>
            <InputField label={searchLabel} value={searchFilter} onChangeText={setSearchFilter} rounded />
            </View>
            <View style={{flex:1, flexDirection: 'column', height: '10%',}}>
            
            <FlatList
                data={data}
                ListHeaderComponent={renderHeader}
                renderItem={renderItem}
                style={{
                    padding:5,
                    backgroundColor: '#ffda15',
       borderColor: 'gray',
       borderWidth: 1,
       borderRadius: 5}}
            />
                
            </View>
        </ContainerScreen> 
    )
}
export default SearchScreen
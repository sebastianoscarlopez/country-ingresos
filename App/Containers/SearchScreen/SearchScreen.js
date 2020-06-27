import React, {useState } from 'react'
import { TextInput, Text, SafeAreaView } from 'react-native'
import ContainerScreen from 'App/Containers/ContainerScreen/ContainerScreen'
import { InputField } from 'App/Components'
import { searchLabel } from 'App/Assets/Strings'
import mock from 'App/Assets/peopleMock.js'
import { FlatList } from 'react-native-gesture-handler'

const SearchScreen = (props) => {
    const [searchFilter, setSearchFilter] = useState('')
    const [data, setData] = useState(mock)
    const renderHeader = () => (
        <SafeAreaView style={{flex:1, width: '100%', flexDirection: 'row', fontSize: 38, paddingBottom:5}}>
            <SafeAreaView style={{width: '50%', alignItems:'center'}}>
                <Text style={{fontSize: 18}}>Nombre</Text>
            </SafeAreaView>
            <SafeAreaView style={{width: '25%', alignItems:'center'}}>
                <Text style={{fontSize: 18}}>Teléfono</Text>
            </SafeAreaView>
            <SafeAreaView style={{width: '25%', alignItems:'center'}}>
                <Text style={{fontSize: 18}}>Lote</Text>
            </SafeAreaView>
        </SafeAreaView>
    )
    const renderItem = ({item}) => (
            <SafeAreaView key={item} style={{flex:1, width: '100%',flexDirection: 'column'}}>
                <SafeAreaView style={{flex:1, width: '100%', flexDirection: 'row'}}>
                    <SafeAreaView style={{width: '50%',}}>
                        <Text>{item.name}</Text>
                    </SafeAreaView>
                    <SafeAreaView style={{width: '25%', alignItems:'center'}}>
                        <Text>{item.phone}</Text>
                    </SafeAreaView>
                    <SafeAreaView style={{width: '25%', alignItems:'center'}}>
                        <Text>{item.allotment}</Text>
                    </SafeAreaView>
                </SafeAreaView>
            </SafeAreaView>
        )

    return (
        <ContainerScreen>
            <SafeAreaView style={{height:60, marginBottom:10}}>
            <InputField placeholder={searchLabel} value={searchFilter} onChangeText={setSearchFilter} rounded />
            </SafeAreaView>
            <SafeAreaView style={{flex:1, flexDirection: 'column', height: '10%',}}>
            
            <FlatList
                data={data}
                ListHeaderComponent={renderHeader}
                renderItem={renderItem}
                style={{
                    padding:5,
                    backgroundColor: '#ffda15',
                    borderColor: 'gray',
                    borderWidth: 1,
                    borderRadius: 5
                }}
                keyExtractor={(item) => item.allotment}
            />
                
            </SafeAreaView>
        </ContainerScreen> 
    )
}
export default SearchScreen
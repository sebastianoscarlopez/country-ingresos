import React, {useState } from 'react'
import { TextInput, Text, View } from 'react-native'
import ContainerScreen from 'App/Containers/ContainerScreen/ContainerScreen'
import { InputField } from 'App/Components'
import { searchTitle, searchLabel } from 'App/Assets/Strings'

const SearchScreen = (props) => {
    const [searchFilter, setSearchFilter] = useState('')
    return (
        <ContainerScreen title={searchTitle}>
            <InputField label={searchLabel} value={searchFilter} onChangeText={setSearchFilter} rounded />
        </ContainerScreen> 
    )
}
export default SearchScreen
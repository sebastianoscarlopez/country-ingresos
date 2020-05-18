import React, {useState, Children } from 'react'
import { View } from 'react-native'
import styles from './ContainerScreenStyle'

const SearchScreen = (props) => {
    const { children } = props
    const [searchFilter, setSearchFilter] = useState('')
    return (
    <View style={styles.screenContainer}>
        <View style={styles.screenInnerContainer}>
            {children}
        </View>
    </View>)
}
export default SearchScreen
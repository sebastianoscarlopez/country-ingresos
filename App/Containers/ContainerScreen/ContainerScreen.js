import React, {useState, Children } from 'react'
import { SafeAreaView } from 'react-native'
import styles from './ContainerScreenStyle'

const SearchScreen = (props) => {
    const { children } = props
    const [searchFilter, setSearchFilter] = useState('')
    return (
    <SafeAreaView style={styles.screenContainer}>
        <SafeAreaView style={styles.screenInnerContainer}>
            {children}
        </SafeAreaView>
    </SafeAreaView>)
}
export default SearchScreen
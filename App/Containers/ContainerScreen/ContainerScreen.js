import React, {useState, Children } from 'react'
import { View } from 'react-native'
import { Title } from 'App/Components'
import styles from './ContainerScreenStyle'

const SearchScreen = (props) => {
    const { children, title } = props
    const [searchFilter, setSearchFilter] = useState('')
    return (
    <View style={styles.screenContainer}>
        { title.length > 0 && <Title>{title}</Title> }
        <View style={styles.screenInnerContainer}>
            {children}
        </View>
    </View>)
}
export default SearchScreen
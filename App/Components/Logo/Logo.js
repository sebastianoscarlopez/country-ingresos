import React, { useState, useEffect } from 'react'
import { Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Images } from 'App/Theme'
import styles from './LogoStyle'
import { TouchableOpacity } from 'react-native-gesture-handler'
import GlobalActions from 'App/Stores/Global/Actions'

export default () => {
    const dispatch = useDispatch()
    const idApp = useSelector(({ user: { idApp } }) => idApp)
    const [count, setCount] = useState(0)
    const [lastTouch, setLastTouch] = useState(0)
    const handleTouch = () => {
        const now = Date.now()
        setCount(now - lastTouch < 500
            ? count + 1
            : 1)
        setLastTouch(now)
    }
    useEffect(() => {
        if(count === 10){
            dispatch(GlobalActions.setMessage(idApp, false))
        }
    }, [count])
    return (<TouchableOpacity onPress={handleTouch}>
        <Image source={Images.logo} resizeMode="contain" style={styles.logo} />
    </TouchableOpacity>)
}

import React, { useState } from 'react'
import { TouchableOpacity, Modal, Text, SafeAreaView } from 'react-native'
import Label from '../Label/Label'
import styles from './ModalStyle.js'

export default (props) => {
  const { children, visible, onRequestClose } = props
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: 'rgba(255, 200, 10,0.4)',
          }}
          onPress={onRequestClose}
        >
          {children}
        </TouchableOpacity>
      </SafeAreaView>
    </Modal>
  )
}

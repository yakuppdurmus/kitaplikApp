import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import { SelectableText } from "@astrocoders/react-native-selectable-text";
import Swiper from 'react-native-swiper'
import {Icon} from 'native-base'
import { observer } from 'mobx-react';
import MyStore from '../services/MyStore';


export const BookBody = observer(({ settings, textProps, swiperOnIndexChanged, onSelection, menuItems,initialPageIndex }) => {
  const { swiperStyle, selectableTextStyle, textContentContainerStyle, textSubContainerStyle } = settings;
  textProps = Array.isArray(textProps) ? textProps : [];
  return (

    <Swiper
      loop={false}
      style={{ ...swiperStyle }}
      index={initialPageIndex}
      showsPagination={false}
      showsButtons
      onIndexChanged={swiperOnIndexChanged}
      nextButton={<Icon style={{color:'white'}} name="ios-arrow-forward"/>}
      prevButton={<Icon style={{color:'white'}} name="ios-arrow-back"/>}
    >
      {textProps.map((item, index) => {
        const { value, highlights } = item ? item : []
        return (
          <BookPage
            selectableTextStyle={selectableTextStyle}
            textContentContainerStyle={textContentContainerStyle}
            textSubContainerStyle={textSubContainerStyle}
            value={value} // lorem
            onSelection={onSelection}
            highlights={highlights} // [{ id: "test", start: 20, end: 50, backgroundColor: '#a0a' }]
            menuItems={menuItems}
          />
        )

      })}
    </Swiper>
  )
})

// const Timer = observer(({ timerData }) =>
const BookPage = observer(({ textContentContainerStyle, textSubContainerStyle, value, onSelection, highlights, menuItems }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingLeft: 30,
        paddingRight: 30,
        ...textContentContainerStyle
      }}
      style={{
        ...textSubContainerStyle
      }}>
      <SelectableText
        value={value ? value : "Metin yükleniyor..."}
        onSelection={onSelection}
        menuItems={menuItems ? menuItems : ["İşaretle", "Not Al"]}
        style={{
          color: '#ddd',
          flex: 1,
          fontWeight:'200',
          lineHeight:26,
          fontSize: 20,
          ...MyStore.selectableTextStyle
        }}
        highlights={highlights}
      >
      </SelectableText>
    </ScrollView>
  )
})
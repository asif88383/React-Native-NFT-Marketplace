import { View, Text, Image} from 'react-native'
import React from 'react'

import { SIZES, SHADOWS, FONTS, assets, COLORS } from "../constants";
import { EthPrice } from './SubInfo';


const DetailsBid = ({bid}) => {
  return (
    <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: SIZES.base,
        paddingHorizontal: SIZES.base * 2,
        backgroundColor: "#EAE1DF",
        borderRadius: SIZES.base,
        marginBottom: SIZES.base,
        marginHorizontal: 5
    }}>
      <Image 
        source={bid.image}
        resizeMode="contain"
        style={{width: 48, height: 48,}}
      />

      <View>
          <Text style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.small,
            color: COLORS.primary,
          }}>
              Bid Placed by: {bid.name}
          </Text>
          <Text style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small - 2,
            color: COLORS.secondary,
            marginTop: 3,
            marginBottom: 5
          }}>
              {bid.date}
          </Text>
      </View>

      <EthPrice price={bid.price} />
    </View>
  )
}

export default DetailsBid
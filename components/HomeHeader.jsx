import { View, Text, Image, TextInput } from "react-native";

import { SIZES, SHADOWS, FONTS, assets, COLORS } from "../constants";

const HomeHeader = ({onSearch}) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{
            width: 90,
            height: 25,
          }}
        />
        <View style={{ width: 45, height: 45 }}>
          <Image // profile image
            source={assets.person01}
            resmeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
          <Image // badge on top of person profile picture
            source={assets.badge}
            resizeMode="contain"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: 15,
              hei: 15,
            }}
          />
        </View>
      </View>

      <View style={{ marginVertical: SIZES.font }}>
        <Text   // Salutation text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.white,
          }}
        >
          Hello Victoria 👋
        </Text>

        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          Let's find a masterpiece
        </Text>
      </View>

      <View style={{ marginTop: SIZES.font }}>
        <View style={{
          width: "100%",
          flexDirection: "row",
          borderRadius: SIZES.font,
          backgroundColor: COLORS.gray,
          alignItems: "center",
          paddingHorizontal: SIZES.font,
          paddingVertical: SIZES.base - 2,
        }}>
          <Image    // Search icon
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />

          <TextInput
            placeholder="Search NFTs"
            style={{flex: 1}}
            onChangeText={() => {onSearch}}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;

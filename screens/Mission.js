//galio
import { Block, Text, theme } from "galio-framework";
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
//argon
import { Images, argonTheme, articles } from "../constants/";

import { Card } from "../components/";
import React from "react";

const { width } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;
const categories = [
  {
    title: "HackViolet (2/4 - 2/5)",
    description:
      "Participate in a weekend of innovation and fun!",
    image:
      "https://th.bing.com/th/id/OIP.IKRzVu5lc777Ju3qntVm1AHaHa?pid=ImgDet&rs=1",
    price: "Virginia Tech",
  },
  {
    title: "Women's March (March 22)",
    description:
      "Unifying & empowering everyone who stands for human rights, civil liberties, and social justice for all. ",
    image:
      "https://images.squarespace-cdn.com/content/v1/5d7d24ab72b4b36eda4974e8/1569956902113-SI8FGG21AQL33G3K17ME/WMF+-+Rebrand+_+Logo+Only-05.png",
    price: "San Francisco",
  },
];

class Articles extends React.Component {
  renderProduct = (item, index) => {
    const { navigation } = this.props;

    return (
      <TouchableWithoutFeedback
        style={{ zIndex: 3 }}
        key={`product-${item.title}`}
      >
        <Block center style={styles.productItem}>
          <Image
            resizeMode="cover"
            style={styles.productImage}
            source={{ uri: item.image }}
          />
          <Block center style={{ paddingHorizontal: theme.SIZES.BASE }}>
            <Text
              center
              size={16}
              color={theme.COLORS.MUTED}
              style={styles.productPrice}
            >
              {item.price}
            </Text>
            <Text center size={34}>
              {item.title}
            </Text>
            <Text
              center
              size={16}
              color={theme.COLORS.MUTED}
              style={styles.productDescription}
            >
              {item.description}
            </Text>
          </Block>
        </Block>
      </TouchableWithoutFeedback>
    );
  };

  renderCards = () => {
    return (
      <Block flex style={styles.group}>
        <Text center size={30} style={styles.title}>
         	Mission Statement
        </Text>
        <Text center size={20} style={styles.productDescription} color={theme.COLORS.MUTED}>
             Our mission is to empower women to prioritize their health and wellness by providing them with the tools, resources, and support they need to advocate for their bodies. We believe that every woman deserves to feel confident and in control of her physical and mental well-being. Through our app, we strive to create a community where women can connect, share their experiences, and inspire each other to live healthier, happier lives.
        </Text>
        <Text center size={30} style={styles.title}>
		Extra Resources
        </Text>
        <Block flex>
          <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
            <Card item={articles[0]} horizontal />
            <Block flex row>
              <Card
                item={articles[1]}
                style={{ marginRight: theme.SIZES.BASE }}
              />
              <Card item={articles[2]} />
            </Block>
		<Card item={articles[3]} horizontal />
            <Card item={articles[4]} full />
            <Block flex card shadow style={styles.category}>
             
            </Block>
          </Block>
        <Text center size={30} style={styles.title}>
		Women Empowerment Events
        </Text>
          <Block flex style={{ marginTop: theme.SIZES.BASE / 2 }}>
            <ScrollView
              horizontal={true}
              pagingEnabled={true}
              decelerationRate={0}
              scrollEventThrottle={16}
              snapToAlignment="center"
              showsHorizontalScrollIndicator={false}
              snapToInterval={cardWidth + theme.SIZES.BASE * 0.375}
              contentContainerStyle={{
                paddingHorizontal: theme.SIZES.BASE / 2,
              }}
            >
              {categories &&
                categories.map((item, index) =>
                  this.renderProduct(item, index)
                )}
            </ScrollView>
          </Block>
        </Block>
      </Block>
    );
  };

  renderAlbum = () => {
    const { navigation } = this.props;

    return (
      <Block
        flex
        style={[styles.group, { paddingBottom: theme.SIZES.BASE * 5 }]}
      >
        <Text bold size={20} style={styles.title}>
          Disclaimer
        </Text>
        <Text size={16} style={styles.productDescription} color={theme.COLORS.MUTED}>
         This app is not a replacement for a diagnosis from a licensed professional physician.
The information provided by our health and wellness app is intended for educational and informational purposes only. It is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of a licensed healthcare provider with any questions you may have regarding your health and wellness. The app and its content should not be used for diagnosing or treating a medical or health condition. If you have or suspect that you have a medical or health problem, contact your healthcare provider promptly. The app does not endorse any specific tests, products, procedures, opinions, or other information that may be mentioned on the app. Reliance on any information provided by the app, its content, or other users is solely at your own risk.

        </Text>
        <Text bold size={20} style={styles.title}>
          Credits
        </Text>
        <Text size={16} style={styles.productDescription} color={theme.COLORS.MUTED}>
         Argon (https://demos.creative-tim.com/argon-react-native/docs/#/)
         Expo
        </Text>
        <Text center size={16} style={styles.productDescription} color={theme.COLORS.MUTED}>
		Authors: Kavya S, Kanykei K, Alaa, Nora K
        </Text>
      </Block>
    );
  };

  render() {
    return (
      <Block flex center>
        <ScrollView showsVerticalScrollIndicator={false}>
          {this.renderCards()}
          {this.renderAlbum()}
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 22,
    color: argonTheme.COLORS.HEADER,
  },
  group: {
    paddingTop: theme.SIZES.BASE,
  },
  albumThumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure,
  },
  category: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE / 2,
    borderWidth: 0,
  },
  categoryTitle: {
    height: "100%",
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  imageBlock: {
    overflow: "hidden",
    borderRadius: 4,
  },
  productItem: {
    width: cardWidth - theme.SIZES.BASE * 2,
    marginHorizontal: theme.SIZES.BASE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 7 },
    shadowRadius: 10,
    shadowOpacity: 0.2,
  },
  productImage: {
    width: cardWidth - theme.SIZES.BASE,
    height: cardWidth - theme.SIZES.BASE,
    borderRadius: 3,
  },
  productPrice: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE / 2,
  },
  productDescription: {
    paddingTop: theme.SIZES.BASE,
    // paddingBottom: theme.SIZES.BASE * 2,
  },
});

export default Articles;

import React from 'react';
import {Image, Page, View, StyleSheet} from "@react-pdf/renderer";

function PageOne() {
  const styles = StyleSheet.create({
    mainView: {
      flexDirection: 'row',
      backgroundColor: '#f5f4f4',
      paddingLeft: 55,
    },
    defaultPageImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      overflow: 'hidden',
    },
  });
  const defaultPages = {
    1: '/images/proposals/0.png',
  }
  return (
    <Page size="A4" orientation={'landscape'}>
      <View >
        <Image src={defaultPages[1]} style={styles.defaultPageImage} />
      </View>
    </Page>
  );
}

export default PageOne;

import React from 'react';
import {Image, Page, View, StyleSheet, Text, Font} from "@react-pdf/renderer";


Font.register({
  family: 'PoppinsBold',
  src: '/fonts/PoppinsBold.ttf'
});

function ClientsPage() {

  const styles = StyleSheet.create({
    page: {
      backgroundColor: "#fff",
      color: '#29499b',
      flexDirection: 'row',
      paddingLeft: 55,
    },
    mainView: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      color: '#29499b',
      height: '100%',
      position: 'relative',
    },

    leftBlock: {
      width: '60%',
      height: '100%',
      paddingLeft: 20,
      flexDirection: 'column',
      justifyContent: 'center',
    },

    rightBlock: {
      width: '40%',
      height: '100%',
      paddingLeft: 30,
      flexDirection: 'column',
      justifyContent: 'center',
    },


    leftRibbonBlock: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: 100,
      height: '100%',
    },

    leftRibbon: {
      width: '50px',
      height: '100%',
      objectFit: 'cover',
      overflow: 'hidden',
    },

    rightSection: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },

    clientsImages: {
      width: '100%',
      height: '78%',
      marginTop:'10%'
    },

    moreClients: {
      position: 'absolute',
      top: 0,
      left: 0,
    },

    clientImage: {
      height: 40
    }

  });


  return (


    <Page size="A4" style={styles.page} orientation={'landscape'}>
      <View style={styles.leftRibbonBlock}>
        <Image src={'/images/proposals/left_ribbon.png'} style={styles.leftRibbon}/>
      </View>

      <View style={styles.mainView}>
            <Image src={'/images/proposals/clients.png'} style={styles.clientsImages} />
      </View>
    </Page>
  );
}

export default ClientsPage;

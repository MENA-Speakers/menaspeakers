import React from 'react';
import {Image, Page, View, StyleSheet, Text, Font} from "@react-pdf/renderer";


Font.register({
  family: 'PoppinsBold',
  src: '/fonts/PoppinsBold.ttf'
});

function PageFive() {

  const styles = StyleSheet.create({
    page: {
      backgroundColor: "#f5f4f4",
      color: '#29499b',
      flexDirection: 'row',
      paddingLeft: 55,
    },
    mainView: {
      flexDirection: 'row',
      backgroundColor: '#f5f4f4',
      color: '#29499b',
      height: '100%',
      position: 'relative',
    },
    contentArea: {
      width: '100%',
      height: '100%',
      display: 'flex',
    },

    leftBlock: {
      width: '50%',
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'center',
    },

    rightBlock: {
      width: '50%',
      height: '100%',
      paddingLeft: 30,
      flexDirection: 'column',
      justifyContent: 'center',
    },

    thankYou: {
      fontSize: 40,
      fontFamily: 'Montserrat',
      color: '#29499b',
    },

    tagLine: {
      fontSize: 12,
      fontFamily: 'Poppins',
      marginTop: 8,
    },

    contactText: {
      fontSize: 24,
      fontFamily: 'Montserrat',
      marginTop: 30,
    },

    contactName: {
      fontSize: 12,
      fontFamily: 'Montserrat',
      marginTop: 14,
    },

    contactDetails: {
      fontSize: 10,
      fontFamily: 'Poppins',
      marginTop: 4,
    },

    heroImage: {
      position: 'absolute',
      top: '20%',
      right: 5,
      width: '100%',
    },

    logoImage: {
      width: 60
    },

    textBlock: {
      flexDirection: 'row',
      fontSize: 10,
      marginTop: 5
    },

    span: {
      fontFamily: 'PoppinsBold',
      marginLeft: -3
    },

    textSection: {
      marginTop: 10
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

    card: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '50%',
      padding: 20,
    },

    cardImage: {
      width: 60,
      height: 60,
    },

    cardTitle: {
      fontSize: 14,
      fontFamily: 'PoppinsBold',
      textAlign: 'center',
      marginTop: 5,
    },

    cardText: {
      fontSize: 11,
      fontFamily: 'Poppins',
      textAlign: 'center',
      color: '#000',
      marginTop: 5,
    },

    cardRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },

    cardColumn: {
      flexDirection: 'column',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
    }

  });


  return (


    <Page size="A4" style={styles.page} orientation={'landscape'}>
      <View style={styles.leftRibbonBlock}>
        <Image src={'/images/proposals/left_ribbon.png'} style={styles.leftRibbon}/>
      </View>

      <View style={styles.mainView}>
        <View style={styles.leftBlock}>

          <View style={styles.cardRow}>
            <View style={styles.card}>
              <Image style={styles.cardImage} src={'/images/proposals/diamond.png'} />
              <Text style={styles.cardTitle}>
                QUALITY
              </Text>

              <Text style={styles.cardText}>
                With over 100 celebrities and professional speakers, we have MENA’s largest pool of speakers.
              </Text>
            </View>
            <View style={styles.card}>
              <Image style={styles.cardImage} src={'/images/proposals/briefcase.png'} />
              <Text style={styles.cardTitle}>
                EXCLUSIVITY
              </Text>

              <Text style={styles.cardText}>
                Many of our speakers are exclusive to our brand and can’t be booked anywhere for the MENA region.

              </Text>
            </View>

          </View>


          <View style={styles.cardRow}>
            <View style={styles.card}>
              <Image style={styles.cardImage} src={'/images/proposals/empowerment.png'} />
              <Text style={styles.cardTitle}>
                EMPOWERING
              </Text>

              <Text style={styles.cardText}>
                Our speakers are masters of their craft – making any event a resounding, memorable success.

              </Text>
            </View>
            <View style={styles.card}>
              <Image style={styles.cardImage} src={'/images/proposals/trusthworthy.png'} />
              <Text style={styles.cardTitle}>
                TRUSTWORTHY
              </Text>

              <Text style={styles.cardText}>
                We believe in building long-lasting, mutually beneficial partnership across the MENA region.
              </Text>
            </View>

          </View>


        </View>

        <View style={styles.rightBlock}>
          <Image src={'/images/proposals/page5.png'} style={styles.heroImage} />
        </View>

      </View>
    </Page>
  );
}

export default PageFive;

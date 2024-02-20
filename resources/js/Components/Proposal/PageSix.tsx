import React from 'react';
import {Image, Page, View, StyleSheet, Text, Font} from "@react-pdf/renderer";

Font.register({
  family: 'PoppinsBold',
  src: '/fonts/PoppinsBold.ttf'
});

function PageSix() {

  const styles = StyleSheet.create({
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
      top: '13%',
      right: 0,
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
    }

  });
  const defaultPages = {
    1: '/images/proposals/0.png',
  }
  return (
    <Page size="A4" orientation={'landscape'}>
      <View style={styles.mainView} >

        <View style={styles.rightBlock}>
          <Text style={styles.thankYou}>Need help with
            Event Protocol?
          </Text>
          <Text style={styles.tagLine}>
            Elevate your events to the next level with our specialized service: Event Management Protocol. We excel in ensuring that every aspect of your event follows international protocol, guaranteeing a seamless and professional experience for your guests.
          </Text>
          <View>

           <View style={styles.textSection}>
             <View style={styles.textBlock}>
               <Text style={styles.textBlock}> <Text style={styles.span}>Running Orders:</Text>
                 {' '}We create comprehensive running orders that outline the sequence and timing of each event element, ensuring a smooth flow and seamless transitions throughout the event.
               </Text>
             </View>

             <View style={styles.textBlock}>
               <Text style={styles.textBlock}> <Text style={styles.span}>Correct Titles: </Text>
                 {' '}Our protocol experts ensure that all speakers, dignitaries, and guests are addressed using the appropriate titles and honorifics, adhering to international protocol standards.
               </Text>
             </View>

             <View style={styles.textBlock}>
               <Text style={styles.textBlock}> <Text style={styles.span}>MC Script:  </Text>
                 {' '}Leave the script editing to us! Our experienced writers edit MC scripts that follow international protocol, providing a polished and professional narrative for your event.
               </Text>
             </View>

             <View style={styles.textBlock}>
               <Text style={styles.textBlock}> <Text style={styles.span}>Seating Arrangement:  </Text>
                 {' '}We meticulously plan and arrange seating to optimize guest comfort and facilitate networking opportunities, taking into account protocol considerations such as VIP placements and table etiquettes.
               </Text>
             </View>

             <View style={styles.textBlock}>
               <Text style={styles.textBlock}> <Text style={styles.span}>Other Considerations:  </Text>
                 {' '}From flag placement and entrance protocols to gift exchanges and cultural sensitivities, our team pays close attention to every detail to ensure that your event meets international
                 protocol expectations.
               </Text>
             </View>

           </View>
          </View>


        </View>

        <View style={styles.leftBlock}>
          <Image src={'/images/proposals/6picture.png'} style={styles.heroImage} />
        </View>

      </View>
    </Page>
  );
}

export default PageSix;

import React from 'react';
import {Image, Page, View, StyleSheet, Text, Font} from "@react-pdf/renderer";


Font.register({
  family: 'PoppinsBold',
  src: '/fonts/PoppinsBold.ttf'
});

function AboutPage() {

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
    contentArea: {
      width: '100%',
      height: '100%',
      display: 'flex',
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

    thankYou: {
      fontSize: 40,
      fontFamily: 'Montserrat',
      color: '#29499b',
    },

    heroImage: {
      position: 'absolute',
      top: '15%',
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

    cardText: {
      fontSize: 11,
      fontFamily: 'Poppins',
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
          <Text style={styles.thankYou}>About Us</Text>
          <View style={styles.textSection}>
            <Text style={styles.cardText}>
              MENA Speakers is a highly acclaimed agency offering customized solutions for various
            </Text>
          </View>
          <View style={styles.textSection}>
            <Text style={styles.cardText}>
              speaking engagements. Established in 2016, we have become the foremost speakers' agency  in the Middle East, offering services that can compete with international agencies. Our exceptional track record is a testament to our unwavering commitment to delivering top notch speakers who constantly raise the bar.
            </Text>
          </View>
          <View style={styles.textSection}>
            <Text style={styles.cardText}>
              Our expert orators can innovate, facilitate, moderate, and motivate audiences across different events, including keynote speeches, educational seminars, and one-on-one meetings. Under the leadership of Saana Azzam, an award-winning economist, MENA Speakers represents the best and brightest in the region, including VIPs such as Prince Salman from Saudi Arabia, Mohammed Qahtani, world champion in public speaking, and Muna AbuSulayman.
            </Text>
          </View>
          <View style={styles.textSection}>
            <Text style={styles.cardText}>
              We have also brought in renowned international speakers such as Fed Reserve Chairman Ben Bernanke, Janet Yellen, and David Meltzer. Our exclusive speaker roster includes Mathew Knowles, the father and agent of Beyoncé, Joe Foster, the founder of Reebok, and Hala Gorani, a CNN anchor. We have an impressive client base, which includes Gulf Ministries, Kellogg's Company, Standard Chartered Bank, NEOM, Misk, Al Ula, and many more.
            </Text>
          </View>
          <View style={styles.textSection}>
            <Text style={styles.cardText}>
              In short, MENA Speakers is a trusted and reliable agency that provides exceptional speakers and services to meet the diverse needs of our clients.

            </Text>
          </View>

        </View>

        <View style={styles.rightBlock}>
          <Image src={'/images/proposals/aboutImage.jpeg'} style={styles.heroImage} />
        </View>

      </View>
    </Page>
  );
}

export default AboutPage;

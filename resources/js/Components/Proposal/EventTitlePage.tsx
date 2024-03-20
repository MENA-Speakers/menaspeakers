import React from 'react';
import {Image, Page, View, StyleSheet, Text, Font} from "@react-pdf/renderer";
import {ProposalType} from "@/types/proposal-type";


Font.register({
  family: 'PoppinsBold',
  src: '/fonts/PoppinsBold.ttf'
});

interface EventTitlePageProps {
  proposal: ProposalType
}

function EventTitlePage({proposal} : EventTitlePageProps) {

  const styles = StyleSheet.create({
    page: {
      backgroundColor: "#fff",
      color: '#29499b',
      flexDirection: 'row',
      paddingLeft: 55,
    },

    textTitle: {
      fontSize: 40,
      fontFamily: 'PoppinsBold',
      color: '#29499b',
    },

    mainView: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      color: '#29499b',
      height: '100%',
    },

    leftBlock: {
      width: '50%',
      height: '100%',
      paddingLeft: 20,
      flexDirection: 'column',
      justifyContent: 'center',
    },

    rightBlock: {
      width: '50%',
      height: '100%',
      paddingLeft: 30,
      paddingRight: 30,
      flexDirection: 'column',
      justifyContent: 'center',
    },



    heroImage: {
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

    subTitleSection: {
      marginTop: '15%'
    },

     miniTitle: {
      fontSize: 20,
      fontFamily: 'PoppinsBold',
      color: '#29499b',
     },

    dateSection: {
      marginTop: '15%'
    },

    dateText: {
      fontSize: 12,
      fontFamily: 'PoppinsBold',
      color: '#29499b',
    },


  });


  return (


    <Page size="A4" style={styles.page} orientation={'landscape'}>
      <View style={styles.leftRibbonBlock}>
        <Image src={'/images/proposals/left_ribbon.png'} style={styles.leftRibbon}/>
      </View>

      <View style={styles.mainView}>
        <View style={styles.leftBlock}>
          <Text style={styles.textTitle}>Proposal</Text>
          <View style={styles.subTitleSection}>
            <Text style={styles.miniTitle}>{proposal.title}</Text>
          </View>

          {
            proposal.event_date &&

            <View style={styles.dateSection}>
              <Text style={styles.dateText}>Date: {proposal.event_date}</Text>
            </View>
          }
        </View>

        <View style={styles.rightBlock}>
          <Image src={'/images/proposals/proposal_title.png'} style={styles.heroImage} />
        </View>

      </View>
    </Page>
  );
}

export default EventTitlePage;

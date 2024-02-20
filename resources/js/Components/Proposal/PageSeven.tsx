import React from 'react';
import {Image, Page, View, StyleSheet, Text} from "@react-pdf/renderer";

type AgentType = {
  name: string;
  email: string;
  phone: string;
}

interface pageSevenProps {
  agent: AgentType;
}
function PageSeven({agent}: pageSevenProps) {

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
      paddingLeft: 10,
      flexDirection: 'column',
      justifyContent: 'center',
    },

    rightBlock: {
      width: '50%',
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'center',
    },

    thankYou: {
      fontSize: 36,
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
      left: 0,
      width: '100%',
    },

    logoImage: {
      width: 60
    },

    socialIcons: {
      flexDirection: 'row',
      marginTop: 3,
      width: 60
    }

  });
  const defaultPages = {
    1: '/images/proposals/0.png',
  }
  return (
    <Page size="A4" orientation={'landscape'}>
      <View style={styles.mainView} >

        <View style={styles.leftBlock}>
          <Image src={'/images/proposals/tinylogo.png'} style={styles.logoImage} />
          <View style={styles.socialIcons}>
            <Image src={'/images/proposals/socialIcons.png'} style={styles.socialIcons} />
          </View>
          <Image src={'/images/proposals/7picture.png'} style={styles.heroImage} />

        </View>

        <View style={styles.rightBlock}>
          <Text style={styles.thankYou}>Thank you</Text>
          <Text style={styles.tagLine}>Book professional speakers, MC , moderators</Text>
          <Text style={styles.contactText}>Contact</Text>
          <View>
            <Text style={styles.contactName}>{agent.name}</Text>
            <Text style={styles.contactDetails}>Email: {agent.email}</Text>
            <Text style={styles.contactDetails}>Phone: {agent.phone}</Text>
            <Text style={styles.contactDetails}>Website: www.mena-speakers.com</Text>
          </View>
        </View>

      </View>
    </Page>
  );
}

export default PageSeven;

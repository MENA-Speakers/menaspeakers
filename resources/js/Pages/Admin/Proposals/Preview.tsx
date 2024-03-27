import React from 'react';
import {Head, Link} from "@inertiajs/react";
import {ProposalType} from "@/types/proposal-type";
import {RateCardType} from "@/types/rate-card";
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  PDFViewer, Font,
} from "@react-pdf/renderer";
import ApplicationLogo from "@/Components/ApplicationLogo";
import {Button} from "@/Components/ui/button";
import useMoneyValue from "@/Hooks/useMoneyValue";
import PageSeven from "@/Components/Proposal/PageSeven";
import PageSix from "@/Components/Proposal/PageSix";
import PageFive from "@/Components/Proposal/PageFive";
import AboutPage from "@/Components/Proposal/AboutPage";
import ClientsPage from "@/Components/Proposal/ClientsPage";
import IntroPage from "@/Components/Proposal/IntroPage";
import EventTitlePage from "@/Components/Proposal/EventTitlePage";

interface PreviewProposalProps {
  data: {
    proposal: ProposalType,
    rateCards: RateCardType[],
    defaultPages: any[],
    agent: any
  }
}

Font.register({
  family: 'Poppins',
  src: 'https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJfedw.ttf'
});

Font.register({
  family: 'Montserrat',
  src: '/fonts/Montserrat.ttf'
})


// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#f5f4f4",
    color: '#29499b',
    flexDirection: 'row',
    paddingLeft: 55,
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


  headerSubText: {
    fontSize: 10,
    color: '#29499b',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
  },

  detailsBlock: {
    flexDirection: 'row',
    color: '#29499b',
    fontFamily: 'Poppins',
    flexGrow: 1,
  },

  detailsBlockLeft: {
    width: '65%',
    color: '#29499b',
    paddingLeft: 20,
    height: '100%',
    paddingRight: 20,
    fontSize: 12,
  },
  detailsBlockRight: {
    width: '35%',
    height: '100%',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
  },

  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
    objectFit: 'cover',
    overflow: 'hidden',
    marginTop: 10,
  },

  galleryItem: {
    height: '30%',
    width: '100%',
    padding: 3,
  },

  galleryImage: {
    height: '100%',
    objectFit: 'cover',
  },
  header: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 15,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  headerText: {
    fontSize: 32,
    color: '#29499b',
    fontFamily: "Montserrat",
    fontWeight: 'semibold',

  },

  headerTextBlock: {
    flexDirection: 'column',
  },

  heading: {
    color: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },

  defaultPage: {
    width: '100%',
    height: '100%',
  },

  defaultPageImage: {
    width: '100%',
    objectFit: 'cover',
  },

  footer: {
    paddingTop: 4,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 10,
    marginTop: -20,
    fontSize: 12,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },

  summary: {
    marginTop: 12,
  },

  videoLinks: {
    paddingLeft: 4,
    paddingRight: 4,
  },

  videoLinkItem: {
    marginRight: 4,
  }
});


function PreviewProposal( {data} : PreviewProposalProps ) {

  const proposal = data.proposal
  const rateCards = data.rateCards

  console.log(rateCards)

  const agent = data.agent

  return (

    <div>
      <Head title="Preview Proposal" />
      <div className={'max-w-7xl mx-auto flex justify-between py-4'}>
        <ApplicationLogo />
        <div className={'flex space-x-6'}>
          <Link href={route('admin.proposals.show', proposal.hash_id)}  >
            <Button variant={'outline'}>
              Back
            </Button>
          </Link>

          <Link href={route('admin.proposals.index')}  >
            <Button variant={'outline'}>
              Proposals
            </Button>
          </Link>
        </div>
      </div>
      <PDFViewer style={styles.viewer}>
        <Document
          title={proposal.title}
          author={'MENA Speakers'}
          producer={'MENA Tech Team'}
          creator={'Joshua Fomubod'}
          subject={'Proposal'}
        >

          <IntroPage />
          <ClientsPage />

          <AboutPage />

          <EventTitlePage proposal={proposal} />
          <PageFive />

          {
            rateCards.map((rateCard: RateCardType, index: number) => {
              return (
                <Page size="A4" style={styles.page} key={index} orientation={'landscape'}>
                  <View style={styles.leftRibbonBlock}>
                    <Image src={'/images/proposals/left_ribbon.png'} style={styles.leftRibbon} />
                  </View>
                  <View>
                    <View style={styles.header}>

                      <Image src={'/images/proposals/square_logo.jpeg'} style={styles.profileImage} />
                    </View>

                    <View style={styles.detailsBlock}>
                      <View style={styles.detailsBlockLeft}>
                        <View style={styles.headerTextBlock}>
                          <Text style={styles.headerText}>{rateCard.profile?.full_name}</Text>
                          <Text style={styles.headerSubText}>{rateCard.title}</Text>
                          <View>
                            <Text style={styles.headerSubText}>
                              Residing in UAE | {useMoneyValue(rateCard.fee, rateCard.currency)} + UAE VAT
                            </Text>
                          </View>
                        </View>
                        <Text style={styles.summary}>{rateCard.summary}</Text>
                      </View>
                      <View style={styles.detailsBlockRight}>

                        {
                          rateCard.gallery?.map((image: string, index: number) => {
                            return (
                              <View style={styles.galleryItem} key={index}>
                                <Image style={styles.galleryImage} src={image.url} />
                              </View>
                            )
                          })
                        }
                      </View>

                    </View>
                    <View style={styles.footer}>
                      <View style={styles.videoLinks}>
                        <Text >
                          Videos: {" "}{rateCard.videos?.map((video, index) => {
                          return (
                            <Link href={video.link}  key={index} style={{color: '#29499b'}}>
                              <Text style={styles.videoLinkItem}>
                                Link {index} {" "}
                              </Text>
                            </Link>
                          )
                        })}
                        </Text>
                      </View>
                    </View>
                  </View>
                </Page>
              )
            })
          }

          <PageSix />
          <PageSeven agent={agent} />
        </Document>
      </PDFViewer>
    </div>
  );
}

export default PreviewProposal;

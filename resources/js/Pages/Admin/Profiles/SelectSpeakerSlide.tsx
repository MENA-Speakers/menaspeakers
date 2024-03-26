import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from '@/Components/ui/sheet';
import React, {useEffect, useState} from 'react';
import {ScrollArea} from "@/Components/ui/scroll-area";
import axios from "axios";
import {Send, UserPlus} from "lucide-react";
import {PortfolioType} from "@/types/portfolio-type";
import {cn} from "@/lib/utils";
import {Input} from "@/Components/ui/input";
import {Button} from "@/Components/ui/button";
import {Textarea} from "@/Components/ui/textarea";
import {ProposalType} from "@/types/proposal-type";
import truncateText from "@/Utils/truncateText";
import {useFormik} from "formik";
import {router} from "@inertiajs/react";

interface SelectSpeakerSlideProps {
  isOpen: boolean,
  setIsOpen: (isOpen: boolean) => void,
  updatedSelectedSpeakers: (selectedSpeakers: any) => void,
  params?: any
  proposal: ProposalType
}

function SelectSpeakerSlide({isOpen, setIsOpen, params, updatedSelectedSpeakers, proposal}: SelectSpeakerSlideProps) {

  const [portfolios, setPortfolios] = useState<PortfolioType[]>([])
  const [selectedPortfolios, setSelectedPortfolios] = useState<PortfolioType[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [noResults, setNoResults] = useState(false)


  const getPortfolios = () => {
    axios.post(route('admin.proposals.portfolios.suggest'))
      .then( response => {
        setPortfolios(response.data)
        formik.setSubmitting(false)
      })
    formik.setSubmitting(false)
  }



  const formik = useFormik( {
    initialValues: {
      query: '',
    },
    onSubmit: values => {
      setNoResults(false)
      axios.post(route('admin.proposals.portfolios.suggest'), values).then(response => {
        setPortfolios(response.data)
        formik.setSubmitting(false)

        if (response.data.length === 0) {
          setNoResults(true)
        }
      }).catch(error => {
        formik.setSubmitting(false)
      })
     },

  } );

  //

  useEffect(() => {
    getPortfolios()
  }, [])



  //Adding speaker to the list
  const addSpeaker = (portfolio: PortfolioType) => {
    setSelectedPortfolios([...selectedPortfolios, portfolio])
  }

  //Removing speaker from the list
  const removeSpeaker = (portfolio: PortfolioType) => {
    setSelectedPortfolios(selectedPortfolios.filter((selectedPortfolio: PortfolioType) => selectedPortfolio.id !== portfolio.id))
  }

  //Check if speaker is already in the list return true else false
  const isSpeakerSelected = (portfolio: PortfolioType) => {
    return selectedPortfolios.some((selectedPortfolio: PortfolioType) => selectedPortfolio.id === portfolio.id)
  }

  //Create rate card for the selected speakers
  const createRateCard = () => {

    //if there are no selected speakers return
    if (selectedPortfolios.length === 0) {
      return
    }

    setIsSubmitting(true)
    axios.post(route('admin.proposals.rate-cards.store', proposal.hash_id), {
      rates: selectedPortfolios,
      proposal_id: proposal.id
    })
      .then( response => {
        updatedSelectedSpeakers(response.data)
        setIsSubmitting(false)
      }).catch( error => {
      setIsSubmitting(false)
    })
  }

  return (
    <div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Button variant={'outline'} size={'sm'} className={'text-sm'}> Add Rate Cards</Button>
        </SheetTrigger>
        <SheetContent className={'md:w-[50%] h-screen flex pb-6 flex-col'}>
          <div className="flex px-6 justify-between items-center">
            <form onSubmit={formik.handleSubmit} className="py-4 flex-grow flex items-center">
                  <Input name={'query'} value={formik.values.query} onChange={formik.handleChange} type={'text'} placeholder={'Search for speaker'} className={'w-1/3 mr-4'}/>
              <Button type={'submit'} disabled={formik.isSubmitting}>Search</Button>
            </form>
            <div className="pr-4">
              <Button onClick={() => createRateCard()} disabled={isSubmitting} className={'flex items-center'}>
                <span className="text-sm">Add to Proposal</span>
              </Button>
            </div>
          </div>
          <ScrollArea>
            <div className="px-6 space-y-4 pb 6">
              {
                noResults && (
                  <div className={'flex justify-center items-center h-24'}>
                    <p className={'text-gray-500'}>No results found for <span className={'italic text-mena-300'}>{ formik.values.query}</span></p>
                  </div>
                )
              }
              {
                portfolios.map((portfolio: any, index: number) => {
                  return (
                    <div key={index}
                         className={cn('grid grid-cols-7 gap-2 border rounded-lg overflow-hidden', isSpeakerSelected(portfolio) && 'border-green-700 bg-blue-50')}>
                      <div className={'col-span-2'}>
                        <img
                          className={'w-full h-56 object-cover'}
                          src={portfolio.profile.image}
                          alt=""/>
                      </div>
                      <div className={'col-span-5 p-2 flex flex-col justify-between'}>
                        <div className={'flex-1'}>
                          <h3 className={' font-semibold'}>{portfolio.profile.full_name}</h3>
                          <h4 className={'text-sm italic text-neutral-500'}>{portfolio.title}</h4>
                          <p className={'text-gray-500 mt-2 text-sm'}>
                            {truncateText(portfolio.summary, 180)}
                          </p>
                        </div>

                        <div className={'flex justify-between items-center'}>

                          <div className="flex items-center">
                            <p className="text-sm">
                              Fee: ${portfolio.fee}
                            </p>
                          </div>

                          <button onClick={() => {
                            if (isSpeakerSelected(portfolio)) {
                              removeSpeaker(portfolio)
                            } else {
                              addSpeaker(portfolio)
                            }
                          }} className="flex items-center justify-center ">
                            <UserPlus className={'w-5 h-5 mr-2'}/>
                            <span className="text-sm">Add to list</span>
                          </button>
                        </div>

                      </div>
                    </div>
                  )
                })
              }
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default SelectSpeakerSlide;

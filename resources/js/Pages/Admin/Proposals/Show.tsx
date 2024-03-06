import React from 'react';
import {Head, Link} from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout"
import {ProposalType} from "@/types/proposal-type";
import SelectSpeakerSlide from "@/Pages/Admin/Profiles/SelectSpeakerSlide";
import {RateCardType} from "@/types/rate-card";
import ProposalRateCard from "@/Components/Admin/ProposalRateCard";
import axios from "axios";
import {Button} from "@/Components/ui/button";
import {FileText, Link2, Pencil} from "lucide-react";
import {DragDropContext, Droppable} from "@hello-pangea/dnd";
import EditProposal from "@/Pages/Admin/Proposals/EditProposal";


interface ShowProposalProps {
  data: {
    proposal: ProposalType,
    rateCards: RateCardType[]
  }
}

function ShowProposal( {data} : ShowProposalProps ) {

  const [openSelectSpeaker, setOpenSelectSpeaker] = React.useState(false)
  const [proposal, setProposal] = React.useState(data.proposal)
  const [rateCards, setRateCards] = React.useState(data.rateCards)


  const updatedSelectedSpeakers = (selectedSpeakers: any) => {
    setRateCards(selectedSpeakers)
    setOpenSelectSpeaker(false)
  }

  //Get Rate Cards
  const getRateCards = () => {
    axios.get(route('admin.proposals.rate-cards', proposal.id))
      .then( response => {
        setRateCards(response.data)
      })
  }

  //Remove rate card from the list
  const removeRateCard = (rateCard: RateCardType) => {
    let newRateCards = rateCards.filter((rc: RateCardType) => rc.id !== rateCard.id)
    setRateCards(newRateCards)
  }

  const updateCard = (updatedRateCard: RateCardType) => {
    setRateCards(prevRateCards => {
      return prevRateCards.map((rateCard: RateCardType) => {
        if (rateCard.id === updatedRateCard.id) {
          return updatedRateCard;
        }
        return rateCard;
      });
    });
  };

  const sendProposal = () => {

  }

  const DownloadProposal = () => {

  }

  const onDragEnd = (result: any) => {
    const {destination, source, draggableId, type} = result

    if (!destination) {
      return
    }

    // If the user drops the item back to the same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    // If the user drops the item in the same column
    if (type === 'column') {
      const newRateCards = Array.from(rateCards)
      const [removed] = newRateCards.splice(source.index, 1)
      newRateCards.splice(destination.index, 0, removed)

      setRateCards(newRateCards)
    }


  }


  return (

    <AdminLayout>
      <Head title="Speaker" />

      <div className="">
        <div className="sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl text-gray-900">{proposal.title}</h2>

            <div className="flex space-x-4 items-center">

              <EditProposal
                proposal={proposal}
                setProposal={setProposal}
              />

              <SelectSpeakerSlide
                isOpen={openSelectSpeaker}
                setIsOpen={setOpenSelectSpeaker}
                updatedSelectedSpeakers={updatedSelectedSpeakers}
                proposal={proposal}
              />

            </div>

          </div>

          <div className="overflow-hidden sm:rounded-lg">

          {/*  if rate card is empty display black state */}

            {
              rateCards.length === 0 ? (
                <div className={'flex flex-col justify-center items-center mt-24 w-full bg-slate-50 h-72'}>
                  <p className={'text-gray-500'}>No rate card has been added to this proposal</p>

                  <Button variant={'outline'} onClick={() => setOpenSelectSpeaker(true)} className={'mt-12'}>Add Rate Card</Button>
                </div>
              ) : null
            }

          {/*  Loop through rate cards */}
            <div className="space-y-8 mt-12">

              <DragDropContext
                onDragEnd={onDragEnd}
              >
                <div className={'h-full space-x-2 w-full'}>
                  <Droppable
                    droppableId={'columns'}
                    type={'column'}
                    direction={'vertical'}
                  >
                    {
                      (provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                          className={'h-full w-full space-y-8'}
                        >
                          {
                            rateCards.map((rateCard: RateCardType, index: number) => {
                              return (
                                <ProposalRateCard
                                  key={index}
                                  rateCard={rateCard}
                                  removeRateCard={removeRateCard}
                                />
                              )
                            })
                          }
                          {provided.placeholder}
                        </div>
                      )
                    }
                  </Droppable>
                </div>
              </DragDropContext>

              <div className="flex justify-end space-x-4 items-center">
                <Link href={route('admin.proposals.preview', proposal.hash_id)}  >
                  <Button variant={'outline'}>
                    <FileText size={16} className={'mr-2'}/>
                    Preview
                  </Button>
                </Link>
              </div>

            </div>

          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default ShowProposal;

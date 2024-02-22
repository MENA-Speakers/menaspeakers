import React from 'react';
import {RateCardType} from "@/types/rate-card";
import EditRateCardSlider from "@/Components/EditRateCardSlider";
import {Button} from "@/Components/ui/button";
import axios from "axios";


interface ProposalRateCardProps {
  rateCard: RateCardType
  removeRateCard: (rateCard: RateCardType) => void
}

function ProposalRateCard({rateCard, removeRateCard}: ProposalRateCardProps) {

  const [isOpen, setIsOpen] = React.useState(false)
  const [cardData, setCardData] = React.useState(rateCard)

  // Delete rate card
  const deleteRateCard = () => {
    axios.delete(route('admin.proposals.rate-cards.delete', cardData.hash_id))
      .then( response => {
        removeRateCard(cardData)
      })
  }

  const updateCard = (updatedRateCard: RateCardType) => {
    setCardData(updatedRateCard)
  }

  return (
    <div className={'border p-4 rounded-md'}>
      <div className={'flex'}>
        <img src={cardData.profile?.image} className={'object-cover w-52 h-64 rounded-md'} alt=""/>
        <div className={'px-4'}>
         <div className={'flex justify-between items-start'}>
           <div>
             <h3 className={'font-semibold text-lg'}>{cardData.profile?.full_name}</h3>
             <h4 className={'italic'}>{cardData.title}</h4>
             <p className="text-sm">Fee: <span className="font-semibold">${cardData.fee}</span></p>
           </div>

           <div className="flex items-center">
             <EditRateCardSlider
               isOpen={isOpen}
               setIsOpen={setIsOpen}
               rateCard={cardData}
                updateCard={updateCard}
             />

             <Button onClick={() => deleteRateCard()} variant={'destructive'} size={'sm'} className={'text-sm ml-3'}>Delete</Button>

           </div>


         </div>
          <div className="mt-4">
            <p className="">{cardData.summary}</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default ProposalRateCard;

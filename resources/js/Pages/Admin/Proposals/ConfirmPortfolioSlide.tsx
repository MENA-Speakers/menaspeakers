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
import {RateCardType} from "@/types/rate-card";

interface ConformPortfolioSlideProps {
  isOpen: boolean,
  setIsOpen: (isOpen: boolean) => void,
  updatedSelectedPortfolio: (selectedPortfolio: RateCardType) => void,
  portfolios?: RateCardType[]
}

function ConformPortfolioSlide({isOpen, setIsOpen, updatedSelectedPortfolio, portfolios}: ConformPortfolioSlideProps) {

  const [selectedPortfolios, setSelectedPortfolios] = useState<RateCardType[]>([])

  const isSpeakerSelected = (portfolio: RateCardType) => {
    return selectedPortfolios.find((selectedPortfolio) => selectedPortfolio.id === portfolio.id)
  }

  const confirmPortfolio = (portfolio: RateCardType) => {
    updatedSelectedPortfolio(portfolio)
  }



  return (
    <div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className={'md:w-[60%] h-screen flex pb-6 flex-col'}>

          <div className="py-6 px-6">
            <SheetHeader>
              <SheetTitle>Confirm Speaker</SheetTitle>

            </SheetHeader>
          </div>
          <ScrollArea>
            <div className="px-6 py-6 gap-4 space-y-4 ">
              {
                portfolios?.map((portfolio: RateCardType, index: number) => {
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
                            confirmPortfolio(portfolio)
                          }} className="flex items-center border rounded-lg py-1.5 px-4 hover:bg-teal-100 justify-center ">
                            <UserPlus className={'w-5 h-5 mr-2'}/>
                            <span className="text-sm">Confirm {portfolio.profile.first_name}</span>
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

export default ConformPortfolioSlide;

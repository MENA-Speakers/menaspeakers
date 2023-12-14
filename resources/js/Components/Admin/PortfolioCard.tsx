import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/Components/ui/dropdown-menu";
import {MoreVertical} from "lucide-react";
import {PortfolioType} from "@/types/portfolio-type";

export function PortfolioCard({portfolio}: { portfolio: PortfolioType}) {
  return (
    <div className={'grid grid-cols-5 gap-2 border rounded-lg overflow-hidden'}>
      <div className={'col-span-2'}>
        <img
          className={'w-full h-56 object-cover'}
          src={portfolio.profile.image}
          alt=""/>
      </div>
      <div className={'col-span-3 p-2 flex flex-col justify-between'}>
        <div className={'flex-1'}>
          <h3 className={' font-semibold'}>{portfolio.profile.full_name}</h3>
          <h4 className={'text-sm italic text-neutral-500'}>{portfolio.title}</h4>
          <p className={'text-gray-500 mt-2 text-sm'}>
            {portfolio.summary}
          </p>
        </div>

        <div className={'flex justify-between items-center'}>
          <p className="text-sm">
            Fee: ${portfolio.fee}
          </p>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MoreVertical className={'w-5 h-5 text-gray-500'}/>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>View</DropdownMenuItem>
              <DropdownMenuItem onClick={() => console.log('edit mode')}>Edit</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

        </div>

      </div>
    </div>
  );
}

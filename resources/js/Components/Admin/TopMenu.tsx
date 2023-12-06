import React from 'react';
import ApplicationLogo from "@/Components/ApplicationLogo";
import {Avatar, AvatarFallback, AvatarImage} from "@/Components/ui/avatar";

function TopMenu() {
  return (
   <div className="w-full shadow-lg border-b">
     <div className={'px-8 py-2 h-14 flex flex-row justify-between'}>
       <ApplicationLogo />
       <div className={'flex items-center space-x-2'}>
         <span>
           Admin
         </span>
         <Avatar>
           <AvatarImage src="https://github.com/shadcn.png" />
           <AvatarFallback>MS</AvatarFallback>
         </Avatar>

       </div>
     </div>
   </div>
  );
}

export default TopMenu;

import { cn } from "@/lib/utils"
import {Button} from "@/Components/ui/button";
import {

  CircleUser,
  Contact,
  DollarSign,
  File, Files,
  FolderDot,
  FolderKanban,
  Image,
  Mic2,
  RadioTower
} from "lucide-react";
import {Link} from "@inertiajs/react";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {

}

export function SideBar({ className }: SidebarProps) {
  return (
    <div className={cn("-mt-18 h-screen", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-2">
            <Link href={route('admin.speakers.index')} className={ cn("w-full flex justify-start items-center px-3 py-2 text-gray-600 hover:bg-slate-100 hover:text-gray-900 rounded-lg",
              route().current('admin.speakers.*') && 'bg-slate-100 rounded-lg text-gray-900'
            )}>
              <Mic2 className="mr-2 h-5 w-5" />
              Speakers
            </Link>
            <Link href={route('admin.profiles.index')} className={ cn("w-full flex justify-start items-center px-3 py-2 text-gray-600 hover:bg-slate-100 hover:text-gray-900 rounded-lg",
              route().current('admin.profiles.*') && 'bg-slate-100 rounded-lg text-gray-900'
            )}>
              <CircleUser className="mr-2 h-5 w-5" />
              Profiles
            </Link>

            <Link href={route('admin.speakers.index')} className={ cn("w-full flex justify-start items-center px-3 py-2 text-gray-600 hover:bg-slate-100 hover:text-gray-900 rounded-lg",
              route().current('admin.speakers.*') && 'bg-slate-100 rounded-lg text-gray-900'
            )}>
              <Mic2 className="mr-2 h-5 w-5" />
              Speakers
            </Link>
             <Link href={route('admin.gallery.index')} className={ cn("w-full flex justify-start items-center px-3 py-2 text-gray-600 hover:bg-slate-100 hover:text-gray-900 rounded-lg",
              route().current('admin.gallery.*') && 'bg-slate-100 rounded-lg text-gray-900'
            )}>
              <Image className="mr-2 h-5 w-5" />
              Gallery
             </Link>
             <Link href={route('admin.blogs.index')} className={ cn("w-full flex justify-start items-center px-3 py-2 text-gray-600 hover:bg-slate-100 hover:text-gray-900 rounded-lg",
              route().current('admin.blogs.*') && 'bg-slate-100 rounded-lg text-gray-900'
            )}>
              <File className="mr-2 h-5 w-5" />
              Blogs
             </Link>

             <Link href={route('admin.categories.index')} className={ cn("w-full flex justify-start items-center px-3 py-2 text-gray-600 hover:bg-slate-100 hover:text-gray-900 rounded-lg",
              route().current('admin.categories.*') && 'bg-slate-100 rounded-lg text-gray-900'
            )}>
              <FolderKanban className="mr-2 h-5 w-5" />
              Categories / Topics
             </Link>

            <Link href={route('admin.faqs.index')} className={ cn("w-full flex justify-start items-center px-3 py-2 text-gray-600 hover:bg-slate-100 hover:text-gray-900 rounded-lg",
              route().current('admin.faqs.*') && 'bg-slate-100 rounded-lg text-gray-900'
            )}>
              <Contact className="mr-2 h-5 w-5" />
              FAQs
            </Link>

          </div>
        </div>
      </div>
    </div>
  )
}

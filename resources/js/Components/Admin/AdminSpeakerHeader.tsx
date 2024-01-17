import React from 'react';
import {Link} from "@inertiajs/react";
import {ProfileType} from "@/types/admin-profiles";
import {cn} from "@/lib/utils";

function AdminSpeakerHeader({profile}: { profile: ProfileType}) {
  return (
    <div className="flex justify-between items-center">
      <h2 className="font-semibold text-xl text-gray-800 leading-tight">{profile.full_name}</h2>
      <div>
        <nav className={'flex border-b border-t'}>
          <Link href={route('admin.profiles.proposals', profile.id)}
                className={cn(
                  'flex px-4 py-2 text-sm border-b-2 border-t-2 border-transparent hover:border-mena-300 hover:bg-slate-50',
                  route().current('admin.profiles.proposals', profile.id) && 'border-mena-300 bg-slate-50'
                )}>
              <span>
                Proposals
              </span>
          </Link>

          <Link href={route('admin.profiles.rate-cards', profile.id)}
                className={cn(
                  'flex px-4 py-2 text-sm border-b-2 border-t-2 border-transparent hover:border-mena-300 hover:bg-slate-50',
                  route().current('admin.profiles.rate-cards', profile.id) && 'border-mena-300 bg-slate-50'
                )}>
              <span>
               Rate Cards
              </span>
          </Link>

          <Link href={route('admin.profiles.media', profile.id)}
                className={cn(
                  'flex px-4 py-2 text-sm border-b-2 border-t-2 border-transparent hover:border-mena-300 hover:bg-slate-50',
                  route().current('admin.profiles.media', profile.id) && 'border-mena-300 bg-slate-50'
                )}>
              <span>
                Media
              </span>
          </Link>

          {/*<Link href={route('admin.profiles.rate-cards', profile.id)}*/}
          {/*      className={cn(*/}
          {/*        'flex px-4 py-2 text-sm border-b-2 border-t-2 border-transparent hover:border-mena-300 hover:bg-slate-50',*/}
          {/*        route().current('admin.profiles.rate-cards') && 'border-mena-300 bg-slate-50'*/}
          {/*      )}>*/}
          {/*    <span>*/}
          {/*      Files*/}
          {/*    </span>*/}
          {/*</Link>*/}

          <Link href={route('admin.profiles.portfolios', profile.id)}
                className={cn(
                  'flex px-4 py-2 text-sm border-b-2 border-t-2 border-transparent hover:border-mena-300 hover:bg-slate-50',
                  route().current('admin.profiles.portfolios', profile.id) && 'border-mena-300 bg-slate-50'
                )}>
              <span>
                Portfolios
              </span>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default AdminSpeakerHeader;

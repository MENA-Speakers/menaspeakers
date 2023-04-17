import {ArrowLongLeftIcon, ArrowLongRightIcon} from '@heroicons/react/20/solid';
import {Link} from "@inertiajs/react";


export default function Pagination( {links, metaLinks} ) {
  return (
    metaLinks?.last_page > 1 && (
      // Mobile Pagination
      <div className={'mx-auto flex items-center justify-center lg:max-w-6xl'}>
        <nav className={'flex w-full items-center justify-between px-12 lg:hidden '}>
          <div className='flex w-0 md:hidden'>
            {links.previous === null ? (
              <span
                className='inline-flex items-center border-t-2 border-transparent px-4 py-4 text-sm font-medium text-gray-500'>
                                Previous
                            </span>
            ) : (
              <Link
                href={links.previous}
                className='inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'>
                <ArrowLongLeftIcon className='mr-3 h-5 w-5 text-gray-400' aria-hidden='true'/>
                Previous
              </Link>
            )}
          </div>
          <div className={'hidden'}>...</div>
          <div className='-mt-px flex md:hidden'>
            {links.next === null ? (
              <span
                className='inline-flex items-center border-t-2 border-transparent px-4 py-4 text-sm font-medium text-gray-500'>
                                Next
                            </span>
            ) : (
              <Link
                href={links.next}
                className='inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'>
                Next
                <ArrowLongRightIcon className='ml-3 h-5 w-5 text-gray-400' aria-hidden='true'/>
              </Link>
            )}
          </div>
        </nav>

        {/* Desktop Pagination */}
        <nav className='hidden border-t border-gray-200 px-4 sm:px-0 lg:flex'>
          <div className='flex'>
            {metaLinks.links?.map( ( link, index ) => (
              <div key={index}>
                {link.url === null ? (
                  <span
                    className='inline-flex items-center border-t-2 border-transparent px-4 py-4 text-sm font-medium text-gray-500'>
                                        <span dangerouslySetInnerHTML={{__html: link.label}}></span>
                                    </span>
                ) : (
                  <Link
                    href={link.url}
                    className={`inline-flex items-center border-t-2  px-4 py-4 text-sm font-medium text-gray-500 hover:border-mena-200 hover:text-gray-700 ${
                      link.active ? 'border-t-mena-200 text-mena-200' : ''
                    }`}>
                    <span dangerouslySetInnerHTML={{__html: link.label}}></span>
                  </Link>
                )}
              </div>
            ) )}
          </div>
        </nav>
      </div>
    )
  );
}

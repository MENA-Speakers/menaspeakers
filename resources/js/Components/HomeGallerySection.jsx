import React from 'react';

function HomeGallerySection( {gallery} ) {
  return (
    <section className={'py-12 lg:py-12 p-6 lg:px-0'}>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
        {gallery.map( ( image, index ) => (
            <img className={'w-full h-full object-cover'} key={index} src={image.url} alt=""/>
          )
        )}
      </div>
    </section>
  );
}

export default HomeGallerySection;

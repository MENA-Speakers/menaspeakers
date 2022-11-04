<x-app-layout>
  <x-slot name="header">
    <div class="flex justify-between">
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">
        {{ __('Speakers') }}
      </h2>
      <a href="{{ route('admin.speakers.create') }}" class="inline-flex px-4 items-center rounded border border-gray-300 bg-white  py-2 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"> Add Speaker</a>

    </div>
  </x-slot>

  <div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="overflow-hidden shadow-sm sm:rounded-lg">
        <div  class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">

           @foreach($speakers as $speaker)
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="rounded-t-lg h-60 object-cover" src="{{ $speaker->getFirstMediaUrl('avatar') }}" alt="">
              </a>
              <div class="p-5">
                <a href="{{ route('speakers.show', 'speaker->slug') }}">
                  <h5 class=" font-semibold tracking-tight text-gray-900 dark:text-white">{{ $speaker->name }}</h5>
                </a>
              </div>
            </div>
           @endforeach

        </div>
      </div>
    </div>
  </div>
</x-app-layout>

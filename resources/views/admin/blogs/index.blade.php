<x-app-layout>
  <x-slot name="header">
    <div class="flex justify-between">
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">
        {{ __('Blogs') }}
      </h2>
      <a href="{{ route('admin.blogs.create') }}" class="inline-flex px-4 items-center rounded border border-gray-300 bg-white  py-2 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"> New Post</a>

    </div>
  </x-slot>

  <div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
          @foreach($blogs as $blog)
            <div class="w-full p-2">
              <a class="group" href="#">
                <div class="group flex flex-col mb-2 overflow-hidden rounded-xl">
                  <img class="transform group-hover:scale-110 transition h-72 object-cover ease-out duration-500" src="{{ $blog->getFirstMediaUrl('image') }}" alt="">
                </div>
                <h2 class="font-heading font-medium text-gray-900 group-hover:underline px-2">{{ $blog->title }}</h2>
              </a>
            </div>
          @endforeach
        </div>
      </div>
    </div>
  </div>
</x-app-layout>

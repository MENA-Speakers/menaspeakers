<x-app-layout>

  <x-slot name="header">
    <div class="flex justify-between">
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">
        {{ __('Add Speaker') }}
      </h2>
      <a href="{{ route('admin.speakers.index') }}" class="inline-flex px-4 items-center rounded border border-gray-300 bg-white  py-2 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"> All Speakers</a>

    </div>
  </x-slot>

  <div class="py-12">
    <div class="max-w-7xl mx-auto sm:p-6 lg:p-4 bg-white overflow-hidden shadow-sm sm:rounded-lg">
      <form enctype="multipart/form-data" method="post" action="{{route('admin.speakers.update', $speaker->slug)}}" class=" max-w-4xl space-y-8 mx-auto py-8 px-8">
        @csrf
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
          <div class="mt-1">
            <input type="text" name="name" value="{{ $speaker->name }}" id="name" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Speaker Name">
          </div>
        </div>

        <div>
          <label for="excerpt" class="block text-sm font-medium text-gray-700">Except</label>
          <div class="mt-1">
            <textarea  rows="2" name="excerpt" id="excerpt" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
              {{ $speaker->excerpt }}
            </textarea>
          </div>
        </div>

        <div>
          <label for="bio" class="block text-sm font-medium text-gray-700">Bio</label>
          <div class="mt-1" >
            <textarea rows="2"  name="bio" id="bio" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
               {!! $speaker->bio !!}
            </textarea>

          </div>
        </div>

        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">Profile Picture</label>
          <div class="mt-1">
            <input type="file" name="image" id="name" accept="image/*" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
          </div>
        </div>
        <div class="relative flex items-start">
          <div class="flex h-5 items-center">
            <input id="featured"  aria-describedby="featured" name="featured" value="1" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
          </div>
          <div class="ml-3 text-sm">
            <label for="featured" class="font-medium text-gray-700">Featured</label>
          </div>
        </div>


        <div>
          <div class="mt-1 flex justify-end">
            <x-primary-button type="submit">Update Speaker</x-primary-button>
          </div>
        </div>
      </form>
    </div>
  </div>
  @push('body-script')
    <script src="https://cdn.ckeditor.com/ckeditor5/35.2.1/classic/ckeditor.js"></script>

    <script>
      ClassicEditor
        .create( document.querySelector( '#bio' ) )
        .catch( error => {
          console.error( error );
        } );
    </script>

  @endpush
</x-app-layout>

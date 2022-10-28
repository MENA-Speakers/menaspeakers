<?php

    use App\Http\Controllers\BlogsController;
    use App\Http\Controllers\HomeController;
    use App\Http\Controllers\SpeakersController;
    use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, 'index'])->name('index');
Route::get('/speakers', [SpeakersController::class, 'index'])->name('index');
Route::get('/speakers/{speaker}', [SpeakersController::class, 'show'])->name('speakers.show');
Route::get('/blogs', [BlogsController::class, 'index'])->name('blogs.index');
Route::get('/blogs/{blog}', [BlogsController::class, 'show'])->name('blogs.show');

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';

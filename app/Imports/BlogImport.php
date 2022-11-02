<?php

  namespace App\Imports;

  use App\Models\Blog;
  use Carbon\Carbon;
  use Illuminate\Support\Collection;
  use Maatwebsite\Excel\Concerns\ToCollection;
  use Maatwebsite\Excel\Concerns\WithBatchInserts;
  use Maatwebsite\Excel\Concerns\WithHeadingRow;
  use Maatwebsite\Excel\Concerns\WithUpserts;

  class BlogImport implements ToCollection, WithHeadingRow, WithBatchInserts, WithUpserts
  {
    public function collection(Collection $rows)
    {

      dd($rows->first());
      foreach ($rows as $row)
      {
        dd($row);
        $blog = Blog::create([
          'title' => $row['title'],
          'content' => $row['content'],
          'meta_title' =>  $row['title'],
          'excerpt' => $row['excerpt'],
          'created_at' => Carbon::parse($row['date']),
        ]);
      }

      if($row['image']){
        try {
          $blog->addMediaFromUrl($row['image'])
            ->toMediaCollection('image');
        } catch(\Throwable $e) {
          report($e);
          return false;
        };
      }
    }

    public function batchSize(): int
    {
      return 100;
    }

    public function uniqueBy(): string
    {
      return 'id';
    }
  }

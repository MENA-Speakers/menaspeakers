<?php

  namespace App\Imports;

  use App\Models\Profile;
  use Illuminate\Support\Collection;
  use Maatwebsite\Excel\Concerns\ToCollection;
  use Maatwebsite\Excel\Concerns\WithBatchInserts;
  use Maatwebsite\Excel\Concerns\WithHeadingRow;
  use Maatwebsite\Excel\Concerns\WithUpserts;

  class SpeakerImport implements ToCollection, WithHeadingRow, WithBatchInserts, WithUpserts
  {
    public function collection(Collection $rows)
    {

      foreach ($rows as $row)
      {

        $speaker = Profile::create([
          'name' => $row['name'],
          'bio' => $row['bio'],
          'meta_title' =>  $row['name'],
          'excerpt' => $row['excerpt'],
        ]);
      }

      if($row['image']){
        try {
          $speaker->addMediaFromUrl($row['image'])
            ->toMediaCollection('avatar');
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

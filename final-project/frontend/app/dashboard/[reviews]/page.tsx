'use client';

import { lusitana } from '@/app/ui/fonts';
import '@fontsource/inter';
import ReviewTable from '@/app/ui/reviews/review-table';

export default function Page({ params }: { params: any }) {
  const path = decodeURIComponent(params.reviews);
  const [hotelName, cityName] = path.split('_');

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Reviews for {hotelName}
      </h1>
      <ReviewTable hotelName={hotelName} cityName={cityName} />
    </main>
  );
}
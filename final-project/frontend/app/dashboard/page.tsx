import { lusitana } from '@/app/ui/fonts';
import '@fontsource/inter';
import DataTable from '@/app/ui/dashboard/datatable';

export default async function Page() {

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Accom-Seek Dashboard
      </h1>
      <DataTable />
    </main>
  );
}
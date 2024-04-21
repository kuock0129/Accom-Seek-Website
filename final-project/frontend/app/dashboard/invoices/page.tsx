import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import '@fontsource/inter';
import { fetchRevenue, fetchLatestInvoices } from '@/app/lib/data';
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import ReviewTable from '@/app/ui/invoices/ReviewTable';
import Filter from '@/app/ui/dashboard/SearchBar';
import Search from '@/app/ui/search';




export default async function Page() {
  // const revenue = await fetchRevenue();
  // const latestInvoices = await fetchLatestInvoices();
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Reviews
      </h1>
      {/* <Search placeholder="seach hotel" />


      <div style={{ height: '40px' }} /> */}
      <ReviewTable />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/*頁面是一個非同步元件。這允許您使用await來獲取數據。 */}
        {/* <Card title="Collected" value={totalPaidInvoices} type="collected" /> */}
        {/* <Card title="Pending" value={totalPendingInvoices} type="pending" /> */}
        {/* <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> */}
        {/* <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> */}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {/* <RevenueChart revenue={revenue}  /> */}
        {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
      </div>
    </main>
  );
}
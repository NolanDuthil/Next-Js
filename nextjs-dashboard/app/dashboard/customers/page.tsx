import { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import Table from '@/app/ui/customers/table';
import { fetchCustomers } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Customers',
};
export default function Page() {
  const totalPages = fetchCustomers();
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Table />
      </Suspense>
    </div>
  );
}
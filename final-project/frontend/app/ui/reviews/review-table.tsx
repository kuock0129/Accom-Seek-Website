'use client';

import { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { getReviewData } from '@/client/api';

const columns: GridColDef[] = [
  { field: 'UserName', headerName: 'User Name', width: 200 },
  { field: 'Title', headerName: 'Title', width: 200 },
  { field: 'Text', headerName: 'Text', width: 500 },
  { field: 'Rating', headerName: 'Rating', width: 100, type: 'number' },
  { field: 'Date', headerName: 'Date', width: 150 },
  { field: 'HotelName', headerName: 'Hotel Name', width: 200 },
  { field: 'CityName', headerName: 'City Name', width: 150 },
];

interface ReviewTableProps {
  hotelName: string;
  cityName: string;
}

export default function ReviewTable({ hotelName, cityName }: ReviewTableProps) {
  const [rows, setRows] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!hotelName || !cityName) return;
    const fetchData = async () => {
      try {
        const data = await getReviewData(hotelName, cityName);
        if (data) {
          setRows(data);
        }
      } catch (err) {
        setError('Failed to fetch data');
        console.error(err);
      }
    };

    fetchData();
  }, [hotelName, cityName]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => `${row.UserName}-${row.HotelName}-${row.CityName}`}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}
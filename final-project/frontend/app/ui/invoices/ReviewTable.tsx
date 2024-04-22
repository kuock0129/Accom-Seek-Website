'use client';

import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Search from '@/app/ui/search';
import { getHotelData, searchHotelData, getReviewData} from '../../api'; // 


const columns: GridColDef[] = [
  { field: 'UserName', headerName: 'User Name', width: 200 },
  { field: 'Title', headerName: 'Title', width: 200 },
  { field: 'Text', headerName: 'Text', width: 500 },
  { field: 'Rating', headerName: 'Rating', width: 100, type: 'number' },
  { field: 'Date', headerName: 'Date', width: 150},
  { field: 'HotelName', headerName: 'Hotel Name', width: 200 },
  { field: 'CityName', headerName: 'City Name', width: 150 },
];

export default function DataTable({ hotelName, cityName }) {
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    getReviewData(hotelName, cityName).then(data => {
      if (data) {
        setRows(data);
      }
    });
  }, [hotelName, cityName]);


  // 0420 kuock0129// Update the search term when the user types in the search box
  // Update the search term when the user types in the search box

  return (
    <div style={{width: '100%' }}>
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
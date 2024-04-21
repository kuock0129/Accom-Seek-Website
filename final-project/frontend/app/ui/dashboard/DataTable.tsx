'use client';

import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Search from '@/app/ui/search';
import { getHotelData, searchHotelData } from '../../api'; // 


const columns: GridColDef[] = [
  { field: 'Name', headerName: 'Name', width: 200},
  { field: 'Address', headerName: 'Address', width: 200 },
  { field: 'CityName', headerName: 'City Name', width: 150 },
];

export default function DataTable() {
  const [rows, setRows] = React.useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  React.useEffect(() => {
    getHotelData().then(data => {
      if (data) {
        setRows(data);
      }
    });
  }, []);


  // 0420 kuock0129// Update the search term when the user types in the search box
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submit action
    searchHotelData(searchTerm).then(data => {
      if (data) {
        setRows(data);
      }
    });
  };
  // Update the search term when the user types in the search box

  return (
    <div style={{ height: 400, width: '100%' }}>
      {/* <DataGrid rows={rows} 
      columns={columns}
      getRowId={(row) => row.Name}/> */}

      <Search
        placeholder="Search hotels..."
        value={searchTerm}
        onChange={handleSearchChange}
        onSubmit={handleSearch}
      />


      <div style={{ height: '40px' }} />
{/* 
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search hotels..."
        />
        <button type="submit">Search</button>
      </form> */}

      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => `${row.Name}-${row.CityName}`}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
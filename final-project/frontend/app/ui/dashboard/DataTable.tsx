'use client';
import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Search from '@/app/ui/search';
import { getHotelData, searchHotelData } from '../../api'; // 
import Select from 'react-select';
const columns: GridColDef[] = [
  { field: 'Name', headerName: 'Name', width: 200},
  { field: 'Address', headerName: 'Address', width: 200 },
  { field: 'CityName', headerName: 'City Name', width: 150 },
];

const crimeRateOption = [
  { value: 1, label: 'Default' },
  { value: 2, label: 'Safe' },
  { value: 3, label: 'Very Safe' },
];

const livingWageOption = [
  { value: 1, label: 'Default' },
  { value: 2, label: 'Medium' },
  { value: 3, label: 'High' },
];

export default function DataTable() {
  const [rows, setRows] = React.useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLivingWageOption, setSelectedLivingWageOption] = React.useState(null);
  const [selectedCrimeRateOption, setSelectedCrimeRateOption] = React.useState(null);

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

  const handleLivingWageChange = (selectedOption) => {
    setSelectedLivingWageOption(selectedOption);
  };

  const handleCrimeRateChange = (selectedOption) => {
    setSelectedCrimeRateOption(selectedOption);
  };

  const handleRowClick = (params) => {
    const hotelName = encodeURIComponent(params.row.Name);
    const cityName = encodeURIComponent(params.row.CityName);
    const path = `/dashboard/${hotelName}_${cityName}`;
    window.location.href = path;
  };

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


      <div style={{ height: '10px' }} />

      <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
      <Select 
        options={livingWageOption} 
        value={selectedLivingWageOption} 
        onChange={handleLivingWageChange} 
        style={{ width: '100px' }} 
        isSearchable={false}
        isClearable={false}
        instanceId="living-wage-select"
      />
      <Select 
        options={crimeRateOption} 
        value={selectedCrimeRateOption} 
        onChange={handleCrimeRateChange} 
        style={{ width: '100px' }} 
        isSearchable={false}
        isClearable={false}
        instanceId="crime-rate-select"
      />
      <input 
        type="number" 
        placeholder="Enter an integer" 
        style={{ width: '100px', margin: '0 10px' }} 
      />
      </div>

      <DataGrid
        className="cursor-pointer"
        rows={rows}
        columns={columns}
        getRowId={(row) => `${row.Name}-${row.CityName}`}
        onRowClick={handleRowClick}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}
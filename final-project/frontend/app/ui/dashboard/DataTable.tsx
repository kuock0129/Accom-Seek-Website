'use client';

import { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Search from '@/app/ui/dashboard/search';
import { getHotelData, searchHotelData } from '@/client/api';
import Select from 'react-select';

const columns: GridColDef[] = [
  { field: 'Name', headerName: 'Name', width: 200 },
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
  const [rows, setRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLivingWageOption, setSelectedLivingWageOption] = useState(null);
  const [selectedCrimeRateOption, setSelectedCrimeRateOption] = useState(null);


  useEffect(() => {
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
    searchHotelData(searchTerm, {}).then(data => {
      if (data) {
        setRows(data);
      }
    });
  };
  // Update the search term when the user types in the search box

  const handleLivingWageChange = (selectedOption: any) => {
    setSelectedLivingWageOption(selectedOption);
  };

  const handleCrimeRateChange = (selectedOption: any) => {
    setSelectedCrimeRateOption(selectedOption);
  };

  const handleRowClick = (params: { row: { Name: string | number | boolean; CityName: string | number | boolean; }; }) => {
    const hotelName = encodeURIComponent(params.row.Name);
    const cityName = encodeURIComponent(params.row.CityName);
    const path = `/dashboard/${hotelName}_${cityName}`;
    window.location.href = path;
  };


  return (
    <div style={{ width: '100%' }}>

      <Search
        placeholder="Search hotels..."
        value={searchTerm}
        onChange={handleSearchChange}
        onSubmit={handleSearch}
      />


      <div style={{ height: '10px' }} />

      <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
        <div style={{ width: '100px' }}>
          <Select
            options={livingWageOption}
            value={selectedLivingWageOption}
            onChange={handleLivingWageChange}
            isSearchable={false}
            isClearable={false}
            instanceId="living-wage-select"
          />
        </div>
        <div style={{ width: '100px' }}>
          <Select
            options={crimeRateOption}
            value={selectedCrimeRateOption}
            onChange={handleCrimeRateChange}
            isSearchable={false}
            isClearable={false}
            instanceId="crime-rate-select"
          />
        </div>
      </div>
      <DataGrid
        className="cursor-pointer"
        rows={rows}
        columns={columns}
        getRowId={(row) => `${row.Name}-${row.CityName}`}
        onRowClick={handleRowClick}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 3 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}
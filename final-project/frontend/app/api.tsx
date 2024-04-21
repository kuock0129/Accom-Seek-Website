

const getHotelData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/get_hotel_data/');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.data; // assuming the JSON has a 'data' property
    } catch (error) {
      console.error("Could not fetch hotel data", error);
    }
  }
  
  export { getHotelData };
  
  
  

// services/hotelService.js

const searchHotelData = async (searchQuery: any) => {
  const url = 'http://127.0.0.1:8000/search_hotel_data/';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ search: searchQuery }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Could not fetch hotel data", error);
  }
};

export { searchHotelData };
  
  
  
  
  
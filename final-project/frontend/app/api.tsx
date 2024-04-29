const getReviewData = async (hotelName: any, cityName: any) => {
  const url = `http://${process.env.NEXT_PUBLIC_API_URL}/get_review_data/`;
  // console.log(hotelName)
  // console.log(cityName)
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({hotelName: hotelName, cityName: cityName}),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Could not fetch review data", error);
  }
}

export { getReviewData };

const getHotelData = async () => {
    try {
      const response = await fetch(`http://${process.env.NEXT_PUBLIC_API_URL}/get_hotel_data/`);
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

const searchHotelData = async (searchQuery: any, searchFilters: any) => {
  const url = `http://${process.env.NEXT_PUBLIC_API_URL}/search_hotel_data/`;
  console.log(searchQuery);
  console.log(searchFilters);
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
  
  
  
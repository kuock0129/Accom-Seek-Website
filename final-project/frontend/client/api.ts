import axios from 'axios';

// Create an axios instance configured with a base URL and default headers.
const apiClient = axios.create({
  baseURL: `http://${process.env.NEXT_PUBLIC_API_URL}/`,
  headers: {
    'Content-Type': 'application/json'
  }
});



export const getReviewData = async (hotelName: any, cityName: any) => {
  try {
    const response = await apiClient.post('get_review_data/', { hotelName, cityName });
    return response.data.data;
  } catch (error) {
    console.error("Could not fetch review data", error);
  }
};


export const getHotelData = async () => {
  try {
    const response = await apiClient.get('get_hotel_data/');
    return response.data.data;
  } catch (error) {
    console.error("Could not fetch hotel data", error);
  }
};

export const searchHotelData = async (searchQuery: any, selectedLivingWageOption: any, selectedCrimeRateOption: any, selectedPrecipitationOption: any) => {
  console.log(searchQuery);
  console.log(selectedLivingWageOption);
  console.log(selectedCrimeRateOption);
  console.log(selectedPrecipitationOption);
  try {
    const response = await apiClient.post('search_hotel_data/', { search: searchQuery, livingWage: selectedLivingWageOption.value, crimeRate: selectedCrimeRateOption.value, precipitation: selectedPrecipitationOption.value});
    return response.data.data;
  } catch (error) {
    console.error("Could not fetch hotel data", error);
  }
};
import axios from 'axios';

// const API_KEY = '24763200-978795bf266706bc8b4393fbd';
// axios.defaults.baseURL = 'pixabay.com/api/';
// axios.defaults.headers.common['Authorization'] = API_KEY;
// axios.defaults.params = {
//  image_type: 'photo',
//   orientation: 'horizontal',
//   // editors_choice: true,
//   per_page: 12,
// };

// export const getImages = async (query, page) => {
//   console.log(page, query);
//   const { data } = await axios.get(`?q=${query}&page=${page}`);
//   console.log(data);
//   return data;
// };

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '24763200-978795bf266706bc8b4393fbd';
const PARAMS = 'image_type=photo&orientation=horizontal&safesearch=true';
const per_page = 12;

export const getImages = async (query, page) => {
  const url = `${BASE_URL}?key=${API_KEY}&q=${query}&${PARAMS}&page=${page}&per_page=${per_page}`;
  const {data} = await axios.get(url);
  console.log(data);
  // return data;

  const images = data.hits;
  let result = null;

  if (images.length === 0) {
    return Promise.reject(
      'На жаль, немає зображень, які відповідають вашому пошуковому запиту. Будь ласка спробуйте ще раз.'
    );
  } else {
    result = {
      images: images,
      total: Math.ceil(data.totalHits / per_page),
    };
    return result;
  }
}

// export const getImages = async (query, page) => {
//   console.log(page, query);
 
// };

// getImages('cat', 1)

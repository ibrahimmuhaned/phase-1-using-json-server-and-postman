const axios = require('axios');

const postData = {
  title: 'New Article',
  content: 'This is a new article.'
};

axios.post('http://localhost:3000/articles', postData)
  .then(response => {
    console.log('Data added successfully:');
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error adding data:');
    console.error(error);
  });

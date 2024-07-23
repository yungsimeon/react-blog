fetch('http://localhost:1337/api/blogs')
  .then(response => response.json())
  .then(data => {
    console.log('Data:', data);
    
  })
  .catch(error => console.error('Error:', error));
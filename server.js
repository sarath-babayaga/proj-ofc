const axios = require('axios');

async function login() {
  const apiUrl = 'https://petals.ath.cx/test/login.jsp?username=test&password=test'; 
  const username = 'sarath_blu'; 
  const password = 'Sarath1996'; 

  try {
    const response = await axios.get(apiUrl, {
      params: {
        username: username,
        password: password
      }
    });

    const data = response.data;

    if (data.ok) {
      console.log('Login successful!');

      console.log('Response:', data);
    } else {
      console.log('Login failed. Error:', data.error);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

login();

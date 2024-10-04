const fetchCountry = async () => {
    const country = await fetchCountry('https://jsonplaceholder.typicode.com/users');

    console.log(country);
};

fetchCountry();
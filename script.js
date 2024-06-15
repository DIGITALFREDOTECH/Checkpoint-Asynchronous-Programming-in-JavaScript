async function iterateWithAsyncAwait(values) {
    for (const value of values) {
      console.log(value);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Delay for 1 second
    }
  }
  
  // Example usage
  const myValues = ["apple", "banana", "orange"];
  iterateWithAsyncAwait(myValues)
    .then(() => console.log("All values iterated"))
    .catch(error => console.error(error));


    async function awaitCall(url) {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(HTTP error! status: ${response.status});
          }
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      
      // Example usage with JSONPlaceholder API
      const url = 'https://jsonplaceholder.typicode.com/posts/1';
      awaitCall(url);


      async function parallelCalls(urls) {
        try {
          const promises = urls.map(async (url) => {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error(HTTP error! status: ${response.status});
            }
            return await response.json();
          });
      
          const results = await Promise.all(promises);
          console.log(results); // Log all fetched data as an array
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      
      // Example usage
      const urls = [
        'https://jsonplaceholder.typicode.com/posts/1',
        'https://jsonplaceholder.typicode.com/posts/2',
        'https://jsonplaceholder.typicode.com/posts/3',
      ];
      parallelCalls(urls);
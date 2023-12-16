//API calling from frontend
async function getApiData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
  }
  
  const LearnDataFetch = async () => {
    const data = await getApiData();
    //   console.log("API2:", data);
  
    return (
      <>
        {data.map((post) => (
          <div key={post.id}>
            <h1>{post.userId}</h1>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </>
    );
  };
  
  export default LearnDataFetch;
  
import React, {useState, useEffect} from 'react'

function MovieTaskUseEffect() {
 const [response, setResponse] = useState([]);

  useEffect(() => {
    fetch("https://feecq.github.io/api/movies.json")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setResponse(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div style={{
        display: "flex",
        height: "100dvh",
        justifyContent: "center",
        flexWrap: "wrap"
    }}>
        {response.map(movie =>{
            return (
                <div style={{
                    height: "300px",
                    width: "250px",
                    border: "1px solid black",
                    margin: "10px",
                    textAlign: "center",
                    paddingTop: "5px"
                }}>
                    <img src={movie.image} 
                        style={{
                            height: "170px",
                            width: "240px",
                        }}
                    />
                    <h4>{movie.movie}</h4>
                    <h6>Rating {movie.rating}</h6>

                </div>
            )
        })}
    </div>
  );
}

export default MovieTaskUseEffect




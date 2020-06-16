import React from 'react';

// 음식 리스트
const foodILike = [
  {
    id : 1,
    name : "A",
    image : "https://cdn.pixabay.com/photo/2020/06/06/14/36/ice-5266805__340.jpg"
  },
  {
    id : 2,
    name : "B",
    image : "https://cdn.pixabay.com/photo/2020/06/10/14/15/landscape-5282895__340.jpg"
  },
  {
    id : 3,
    name : "C",
    image : "https://cdn.pixabay.com/photo/2020/06/11/09/26/snail-5285922__340.jpg"
  },
  {
    id : 4,
    name : "D",
    image : "https://cdn.pixabay.com/photo/2020/06/11/18/18/guinea-pig-5287749__340.jpg"
  },
];

// 음식 Component
function Food({name, image}) {
  return (
    <div>
      <h3>I love {name}</h3>
      <img src={image} alt={name}/>
    </div>
  )
}

// App Component
function App() {
  return (
    <div className="App">
      { foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} image={dish.image} />
      ))}
    </div>
  );
}

export default App;

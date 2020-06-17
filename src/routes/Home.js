import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

// import propTypes from 'prop-types';

/*
  // props 의 type 과 required 를 체크한다 (무조건 propTypes 로 다른 이름 불가능)
  Food.propTypes = {
    name: propTypes.string.isRequired,
    image: propTypes.string.isRequired,
    rating: propTypes.number.isRequired
  }

  // Mounting - 새로 생기는 것
  // Updating

  // Unmounting


  // component 가 마운트 된 후 발생
  componentDidMount() {
    console.log(1);
  }

  // component 가 업데이트 된 후 발생
  componentDidUpdate() {
    console.log(3);
  }

  // component 가 떠날 때(다른페이지로 이동 할 때) 발생
  componentWillUnmount() {
    console.log(4);
  }
*/

class Home extends React.Component {
  state = {
    isLoading : true,
    movies : []
  };

  // async, await : 비동기
  // 접근이 완료 될 때 까지 기다려준다.
  getMovies = async () => {
    // 일반적으로 javascript에서 data를 fetch 하는데, fetch를 사용한다
    // axios는 fetch 위에 있는 작은 layer 정도로 생각 (더 편하다)
    const { data: { data : { movies }}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false});
  }
  
  componentDidMount() {
    this.getMovies();
  /*
    setTimeout(() => {
      this.setState({ isLoading : false });
    }, 5000)
  */    
  }
  
  render() {
    // 이렇게 사용하면, this.state 생략 가능
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        { isLoading ? (
          <div className="loader">
            <span className="loader__text">
              "Loading..."
            </span>
          </div> 
          ) : (
            <div className="movies">
              { movies.map(movie => (
                <Movie
                  key={movie.id} 
                  id={movie.id} 
                  year={movie.year} 
                  title={movie.title} 
                  summary={movie.summary} 
                  poster={movie.medium_cover_image} 
                  genres={movie.genres}
                />
              ))}
            </div>
          )
        }
      </section>
    );
  }
}

export default Home;

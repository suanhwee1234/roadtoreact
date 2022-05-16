import logo from './logo.svg';
import './App.css';
import React from 'react';


function App() {
  // console.log('App renders')
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];
  //A
  const [searchTerm, setSearchTerm] = React.useState(localStorage.getItem('search') || 'React');

  React.useEffect(() => {
    localStorage.setItem('search', searchTerm);
  }, [searchTerm]);
  const handleSearch = (event) => {

    setSearchTerm(event.target.value);

  }

  const searchedStories = stories.filter(function (story) {
    return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
  console.log(searchedStories)
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search search={searchTerm} onSearch={handleSearch} />
      <hr />
      <List list={searchedStories} />
    </div>
  );
}

const List = ({ list }) => {
  // console.log("list renders")
  return (
    <ul>
      {list.map(({ objectID, ...item }) => (
        <Item key={item.objectID} {...item} />
      ))}


    </ul>
  );

}

const Item = ({ title, url, author, num_comments, points }) => {
  // console.log("item renders")
  return (
    <li>
      <span>
        <a href={url}>{title}</a>
      </span>
      <span>{author}</span>
      <span>{num_comments}</span>
      <span>{points}</span>
    </li>
  )
}


function Search(props) {
  // console.log("search renders");
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search"
        type="text"
        value={props.search}
        onChange={props.onSearch} />

    </div>
  );
}
export default App;

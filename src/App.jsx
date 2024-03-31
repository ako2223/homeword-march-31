import axios from "axios";
import { useEffect, useState } from "react";
import PostList from "./components/PostList/PostList";
import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";
import { Route, Routes } from "react-router";
import { Link, NavLink } from "react-router-dom";
import "./App.css";
import DetailPost from "./components/DetailPost/DetailPost";

export const BASE_URL = "http://localhost:8000";

function App() {
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);
  const [favoritePosts, setFavoritePosts] = useState(0)

  const getPosts = async () => {
    const responce = await axios.get(`${BASE_URL}/posts`);
    const data = await responce.data;
    const favoritesCount = data.filter(post => post.isFavorite === true).length;
    setPosts(data);
    setFavoritePosts(favoritesCount)
  };

  const getTodos = async () => {
    const responce = await axios.get(`${BASE_URL}/todos`);
    const data = await responce.data;
    setTodos(data);
  };

  useEffect(() => {
    getPosts();
    getTodos();
  }, []);

  const addOrDeleteFavorite = async (post) => {
    if (post.isFavorite === true) {
      await axios.put(`${BASE_URL}/posts/${post.id}`, {
        ...post,
        isFavorite: false,
      });
      getPosts()
    } else {
      await axios.put(`${BASE_URL}/posts/${post.id}`, {
        ...post,
        isFavorite: true,
      });
      getPosts()
    }
  };

  return (
    <>
      <header className="header">
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/posts'}>Posts</NavLink>
        <NavLink to={'/todos'}>Todos</NavLink>
        <NavLink to={'/likes'}>Likes Posts - {favoritePosts}</NavLink>
      </header>
      <Routes>
        <Route path="/" element={<div>Hello!</div>}/>
        <Route exact path="/posts" element={<PostList addOrDeleteFavorite={addOrDeleteFavorite} postsProps={posts} />} />
        <Route exact path="/posts/:id" element={<DetailPost/>}/>
        <Route path="/todos" element={<TodoList todoProps={todos}/>} />
        <Route path="/likes" element={ <div>likes</div> } />
      </Routes>
    </>
  );
}

export default App;

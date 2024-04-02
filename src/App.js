import React, { useEffect, useState } from 'react';
import axios from "axios";
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes';

function App() {

  const [posts, setPosts] = useState([])
  const fetchPosts = () => {
    axios
      .get("http://localhost/live-events/wp-json/wp/v2/pages")
      .then((res) => {
        const posts = res.data
        setPosts(posts);
      });
  }
  // Calling the function on page load
  useEffect(() => {
    fetchPosts()
  }, [])
  console.log(posts);

  return (
    < div >
      <BrowserRouter>
        <Header posts={posts} />
        <AppRoutes posts={posts} />
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;

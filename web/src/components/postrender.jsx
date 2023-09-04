import axios from "axios";
import { useEffect, useState } from "react";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let fetchPosts = async ()=> {
      try {
        const response = await axios.get(`/api/v1/posts`);
        console.log(response.data);
        setPosts(response.data);
        // setPosts(posts.reverse());
        console.log(posts);
      } catch (error) {
        console.error(error);
        if (error.response && error.response.status === 401) {
          console.log(error.response.status);
        }
      }
    }

    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((data, index) => (
        <div key={index} className="postCard">
          <div className="postTitle">{data.title}</div>
          <div className="postText">{data.text}</div>
        </div>
      ))}
    </div>
  );
};

export {AllPosts};

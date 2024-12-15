import axios from "axios";

const API_URL = "http://localhost:1337/api";
// process.env.REACT_APP_API_URL || "http://localhost:1337";
const API_TOKEN =
  "da965f1fbd471d87ccad9fa920c33d06a1edac3d36643ad6c28af2f275394d41b1a1714f3e13172fc0c69823de55dab8fa663e76215ed4364b5948e5a3fc55820ad10b1e6b9ec42ca31cf96189fa955a3c986f90e86825cb1569bacfd5b045150282cdfa9c79f239fbdc3be048aa76d9090c6097f431a1a2403110672fab464f";
//process.env.REACT_APP_API_TOKEN;

// Create an Axios instance with default configurations
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_TOKEN}`, // Add the token to the headers
  },
});

// Function to fetch all blog posts
export const fetchAllBlogPosts = () => {
  return api
    .get(
      "/blogs?&populate[blogImage][fields]=url&populate[comments][fields]=*&populate[blogIconImg][fields]=url"
    )
    .then((response) => {
      console.log(response);
      return response.data.data;
    })
    .catch((error) => {
      console.error("Error fetching all blog posts:", error);
      throw error;
    });
};

// Function to fetch a single blog post by ID
export const fetchBlogPostById = (id) => {
  return api
    .get(
      `/blogs/${id}?&populate[blogImage][fields]=url&populate[blogTag][fields]=*&populate[comments][fields]=*&populate[blogIconImg][fields]=url]
      `
    )
    .then((response) => {
      console.log(response);
      return response.data.data;
    })
    .catch((error) => {
      console.error(`Error fetching blog post with ID ${id}:`, error);
      throw error;
    });
};

// Function to create a new comment
export const createComment = (commentData) => {
  console.log(commentData);
  return api
    .post(`/comments`, {
      ...commentData,
    })
    .then((response) => {
      console.log(response);
      return response.data.data;
    })
    .catch((error) => {
      console.error("Error creating comment:", error);
      throw error;
    });
};

// Get the like count for a specific blog post
export const getLikeCount = (blogId) => {
  return api
    .get(`/blogs/${blogId}`)
    .then((response) => {
      console.log(response.data.likes);
      return response.data.data.attributes.likes;
    })
    .catch((error) => {
      console.error("Error fetching like count:", error);
      throw error;
    });
};

// Update the like count for a specific blog post
export const updateLikeCount = (blogId, likes) => {
  return api
    .put(`/blogs/${blogId}`, { data: { likes } })
    .then((response) => {
      return response.data.data.attributes.likes;
    })
    .catch((error) => {
      console.error("Error updating like count:", error);
      throw error;
    });
};

export { api, API_URL };

import axios from "axios";

const API_URL = "http://localhost:1337/api";
// process.env.REACT_APP_API_URL || "http://localhost:1337";
const API_TOKEN =
  "e1e034a372bca5fea8ed2d3382b2573a4d2cef5983c61d975542486c78fc6bd20b03ab4e818c75c8996233dcde9153c39a18bb6e4d8988cd872da54312b27a05e4642d1a4cf5c63db9970bab909a87f3da8eb8d0d72ebc790d6635f8a177b72c651368d06849e1c8e2bcc63d1df07d83e559e65d68f4fad2751a866d2b77b173";
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
    .get("/blogs?&populate[blogImage][fields]&populate[comment][fields]")
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
      `/blogs/${id}?&populate[blogImage][fields]&populate[blogTag][fields]&populate[comment][fields]]
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

// Function to create a new blog post
export const createBlogPost = (newPost) => {
  return api
    .post("/blogs", newPost)
    .then((response) => response.data.data)
    .catch((error) => {
      console.error("Error creating blog post:", error);
      throw error;
    });
};

// Function to update a blog post
export const updateBlogPost = (id, updatedPost) => {
  return api
    .put(`/blogs/${id}`, updatedPost)
    .then((response) => response.data.data)
    .catch((error) => {
      console.error(`Error updating blog post with ID ${id}:`, error);
      throw error;
    });
};

// Function to delete a blog post
export const deleteBlogPost = (id) => {
  return api
    .delete(`/blogs/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(`Error deleting blog post with ID ${id}:`, error);
      throw error;
    });
};

// Function to create a new comment
export const createComment = (blogId, commentData) => {
  return api
    .post(`/comments`, {
      ...commentData,
      blog: blogId, // Assuming the backend expects a blog reference
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

export { api, API_URL };

import axios from "axios";

const BASE_URL = "http://localhost:5001/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzJjMTZlZGU1YTEyYzM5NjlhNTYwNiIsImlzQWRtaW4iOiJ0cnVlIiwiaWF0IjoxNjY1MDQ4OTkxLCJleHAiOjE2NjUzMDgxOTF9.zSH6IdEDdI8-Xd0uWHelkohdOCZq55UZOl082abPNZ8";

export const publicRequest = axios.create({ baseURL: BASE_URL });

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: "Bearer " + TOKEN },
});

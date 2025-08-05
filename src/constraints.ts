import type { AuthorType } from "./types/author";
export const BASE_URL = "https://react-blog-app-backend-production.up.railway.app/"
export const  LOGOUT_REDIRECT_URL="/"
export const BLOG_POST_SUCCESS_REDIRECT_URL="/blogs"
export const defaultAuthor: AuthorType = {
  author_id: "",
  name: "",
  profile: "",
  email: "",
  details: {
    username: "",

    bio: "",
    location: "",
    education: "",
    profession: "",
    website: "",
    social: {},
    experience: [],
    skills: [],
    hobbies: [],
    languages: [],
  }
};

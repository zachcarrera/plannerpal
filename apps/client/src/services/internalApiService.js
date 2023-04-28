import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:8080/api",
});

export const getAllCourses = async () => {
    const res = await http.get("/courses");
    return res.data;
};

export const getOneCourse = async (id) => {
    const res = await http.get(`/courses/${id}`);
    return res.data;
};

export const createCourse = async (newCourse) => {
    const res = await http.post("/courses", newCourse);
    return res.data;
};

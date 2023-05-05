import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-Type": "application/json",
    },
});

// ----- auth api -----
export const loginUser = async (loginRequest) => {
    const res = await http.post("/auth/login", loginRequest);
    return res.data;
};

// ----- courses api -----

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

// ----- assingments api -----

export const getAllAssignments = async () => {
    const res = await http.get("/assignments");
    return res.data;
};

export const getOneAssignment = async (id) => {
    const res = await http.get(`/assignments/${id}`);
    return res.data;
};

export const createAssignment = async (newAssignment) => {
    const res = await http.post("/assignments", newAssignment);
    return res.data;
};

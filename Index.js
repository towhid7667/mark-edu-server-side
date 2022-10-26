const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
app.use(cors());

const categories = require("./data/Categories.json");
const courses = require("./data/Courses.json");

app.get("/", (req, res) => {
  res.send("Course API Running...");
});

app.get("/course-categories", (req, res) => {
  res.send(categories);
});
// All courses here
app.get("/courses", (req, res) => {
  res.send(courses);
});

// categories here
app.get("/category/:id", (req, res) => {
  const id = req.params.id;
    const category_courses = courses.filter((n) => n.category_id === id);
    res.send(category_courses);

});
// courses here
app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const allCourses = courses.find((n) => n.id === id);
  res.send(allCourses);
});

app.listen(port, () => {
  console.log("The running Port", port);
});

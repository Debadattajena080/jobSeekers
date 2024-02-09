const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({
    JobDetails: [
      {
        title: "Software Developer",
        description:
          "Join our dynamic team of developers to work on cutting-edge projects.",
        postedAgo: "2 days ago",
        applicants: 15,
      },
      {
        title: "Data Analyst",
        description:
          "Exciting opportunity for a data enthusiast to analyze and interpret complex datasets.",
        postedAgo: "1 day ago",
        applicants: 8,
      },
      {
        title: "UX/UI Designer",
        description:
          "Design user-friendly interfaces and create engaging user experiences.",
        postedAgo: "3 days ago",
        applicants: 12,
      },
    ],
  });
});

app.listen(5000, () => console.log("server started on  5000"));

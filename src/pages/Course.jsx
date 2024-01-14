import React from "react";
import CourseCard from "../CourseCard";

const Course = () => {
  const courseList = [
    {
    title: "Basic React Native",
    duration: "5",
    price : "7500",
    },
    {
    title: "Power BI Dashboard",
    duration: "4",
    price : "5500",
    },
    {
    title: "UI Design with Figma",
    duration: "3",
    price : "5000",
    },
    {
    title: "Cross Platform with Flutter",
    duration: "5",
    price : "6500",
    },
  ]
  return (
  <>
      <h1>หลักสูตรที่เปิดสอน</h1>
      <hr />
      {
        courseList.map((b) => (
          <CourseCard key={b.title} {...b} />
        ))
      }
    </>
    
  )
}

export default Course

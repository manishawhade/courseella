import { useEffect, useState } from "react";
import axios from "../../services/axios";
import { useParams } from "react-router-dom";
import CourseForm from "./CourseForm";

export default function EditCourse() {
  const [cousedata, setcousedata] = useState(null);
  const { courseId } = useParams();
  useEffect(() => {
    axios
      .get(`/courses/${courseId}`)
      .then((result) => {
        setcousedata(result.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  const edit = (data) => {
    axios
      .put(`/courses/${courseId}`, data)
      .then((result) => {
        alert(result.data.message);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return <CourseForm CourseData={cousedata} handleSubmit={edit} />;
}

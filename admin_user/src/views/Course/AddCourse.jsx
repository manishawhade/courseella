import { useNavigate } from "react-router-dom";
import axios from "../../services/axios";
import CourseForm from "./CourseForm";

export default function AddCourse() {
  const navigate = useNavigate()
  const save = (data) => {
    data.published = Date.now();
    data.image = data.image.toString()
    data.published = data.published.toString()
    axios
      .post("/courses", data)
      .then((result) => {
        alert(result.data.message);
        navigate("/course");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return <CourseForm handleSubmit={save} />;
}

import { useNavigate } from "react-router-dom";
import axios from "../../services/axios";
import CourseForm from "./CourseForm";
import { useSnackbar } from "notistack";

export default function AddCourse() {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const save = (data) => {
    data.published = Date.now();
    data.image = data.image.toString();
    data.published = data.published.toString();
    axios
      .post("/courses", data)
      .then((result) => {
        enqueueSnackbar(result.data.message, { variant: "success" });
        navigate("/course");
      })
      .catch((err) => {
        enqueueSnackbar(err, { variant: "error" });
      });
  };

  return <CourseForm handleSubmit={save} />;
}

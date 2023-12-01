import { useEffect, useState } from "react";
import axios from "../../services/axios";
import { useParams } from "react-router-dom";
import CourseForm from "./CourseForm";
import { useSnackbar } from "notistack";

export default function EditCourse() {
  const { enqueueSnackbar } = useSnackbar();
  const [cousedata, setcousedata] = useState(null);
  const { courseId } = useParams();
  useEffect(() => {
    axios
      .get(`/courses/${courseId}`)
      .then((result) => {
        setcousedata(result.data);
      })
      .catch((err) => {
        enqueueSnackbar(err, { variant: "error" });
      });
  }, []);

  const edit = (data) => {
    axios
      .put(`/courses/${courseId}`, data)
      .then((result) => {
        enqueueSnackbar(result.data.message, { variant: "success" });
      })
      .catch((err) => {
        enqueueSnackbar(err, { variant: "error" });
      });
  };

  return <CourseForm CourseData={cousedata} handleSubmit={edit} />;
}

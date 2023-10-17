import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import { COURSES } from "../../constant";
import CardComponent from "../../components/CardComponent";
import DebounceSeach from "../../components/DebounceSeach";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../services/axios";
import Course1 from "../../assets/course1.jpg";
import Course2 from "../../assets/course2.jpg";

export default function Course() {
  const navigate = useNavigate();
  const [course, setcourse] = useState(null);
  const [coursetemp, setcoursetemp] = useState(null);

  useEffect(() => {
    axios
      .get("/courses")
      .then((result) => {
        setcourse(result.data);
        setcoursetemp(result.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  function searchApi(value) {
    if (value.length > 0) {
      const updatedItems = course.filter(
        (item) =>
          item.title.toLowerCase().includes(value) ||
          item.description.toLowerCase().includes(value) ||
          item.price.toLowerCase().includes(value)
      );
      setcoursetemp(updatedItems);
    }else{
      setcoursetemp([...course])
    }
  }

  const handleEdit = (id) => {
    navigate(`/course/edit/${id}`);
  };

  const handleDelete = (id) => {
    axios
      .delete(`/courses/${id}`)
      .then((result) => {
        const updatedItems = course.filter((item) => item._id !== id);
        setcourse(updatedItems);
        setcoursetemp(updatedItems);
        alert(result.data.message);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <Box sx={{ margin: "5px" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <DebounceSeach
          isDisable={coursetemp ? false : true}
          searchCallback={searchApi}
        />
        <Button
          sx={{ ml: 1 }}
          variant="contained"
          onClick={() => navigate("/course/add")}
        >
          Add Course
        </Button>
      </Box>
      <Typography mt={1} variant="h5">
        {coursetemp ? coursetemp.length : 0} Courses
      </Typography>
      <Grid container spacing={2} mt={2}>
        {coursetemp &&
          coursetemp.map((item) => (
            <Grid item key={item._id}>
              <CardComponent
                {...item}
                handleEdit={handleEdit}
                handleDelete={() => handleDelete(item._id)}
              />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

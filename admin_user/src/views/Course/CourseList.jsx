import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid, useStepContext } from "@mui/material";
import { COURSES } from "../../constant";
import CardComponent from "../../components/CardComponent";
import DebounceSeach from "../../components/DebounceSeach";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../services/axios";
import Course1 from "../../assets/course1.jpg";
import Course2 from "../../assets/course2.jpg";
import { useSnackbar } from "notistack";
import AlertDialog from "../../components/AlertDialog";

export default function Course() {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [course, setcourse] = useState(null);
  const [coursetemp, setcoursetemp] = useState(null);
  const [isOpen, setisOpen] = useState(false);
  const [selected, setselected] = useState(null);

  useEffect(() => {
    axios
      .get("/courses")
      .then((result) => {
        setcourse(result.data);
        setcoursetemp(result.data);
      })
      .catch((err) => {
        enqueueSnackbar(err, { variant: "error" });
      });
  }, []);

  function searchApi(value) {
    if (course === null) {
      return;
    }
    if (value.length > 0) {
      const updatedItems = course.filter(
        (item) =>
          item.title.toLowerCase().includes(value) ||
          item.description.toLowerCase().includes(value) ||
          item.price.toLowerCase().includes(value)
      );
      setcoursetemp(updatedItems);
    } else {
      setcoursetemp([...course]);
    }
  }

  const handleEdit = (id) => {
    navigate(`/course/edit/${id}`);
  };

  const onClickDelete = (item) => {
    setselected(item);
    setisOpen(true);
  };

  const handleDelete = () => {
    axios
      .delete(`/courses/${selected._id}`)
      .then((result) => {
        const updatedItems = course.filter((item) => item._id !== selected._id);
        setcourse(updatedItems);
        setcoursetemp(updatedItems);
        enqueueSnackbar(result.data.message, { variant: "success" });
        setselected(null);
        setisOpen(false);
      })
      .catch((err) => {
        enqueueSnackbar(err, { variant: "error" });
      });
  };

  return (
    <>
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
                  handleDelete={() => onClickDelete(item)}
                />
              </Grid>
            ))}
        </Grid>
      </Box>
      <AlertDialog
        isOpen={isOpen}
        setisOpen={setisOpen}
        title={"Delete"}
        description={"Are you sure?"}
        handleYes={handleDelete}
      />
    </>
  );
}

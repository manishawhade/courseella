import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import Course1 from "../../assets/course1.jpg";
import Course2 from "../../assets/course2.jpg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CourseForm({ CourseData, handleSubmit }) {
  const navigate = useNavigate();
  const [selectedimg, setselectedimg] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    image: null,
  });
  useEffect(() => {
    if (CourseData) {
      setFormData(CourseData);
      setselectedimg(parseInt(CourseData.image));
    }
  }, [CourseData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    formData.image = selectedimg;
    handleSubmit(formData);
  };

  return (
    <Box sx={{ margin: "5px" }}>
      <Typography variant="h5">{CourseData ? "Edit" : "Add"} Course</Typography>
      <Grid container mt={1}>
        <Grid
          item
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <ImageDiv selectedimg={selectedimg} setselectedimg={setselectedimg} />
        </Grid>
        <Grid item md={8}>
          <Box
            sx={{
              mt: 2,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <TextField
              name="title"
              label="Enter title"
              value={formData.title}
              onChange={handleInputChange}
            />
            <TextField
              name="description"
              label="Enter description"
              value={formData.description}
              onChange={handleInputChange}
            />
            <TextField
              name="price"
              type="number"
              label="Enter price"
              value={formData.price}
              onChange={handleInputChange}
            />
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                sx={{ mr: 1, alignSelf: "center" }}
                variant="outlined"
                onClick={() => navigate("/course")}
              >
                Cancel
              </Button>
              <Button
                sx={{ alignSelf: "center" }}
                variant="contained"
                onClick={handleSave}
              >
                {CourseData ? "Update" : "Save"}
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

const ImageDiv = ({ selectedimg, setselectedimg }) => {
  return (
    <Box>
      <img src={selectedimg === 1 ? Course1 : Course2} alt="" />
      <>
        <Button onClick={() => setselectedimg(1)}>
          <img width={100} src={Course1} alt="Course1" />
        </Button>
        <Button onClick={() => setselectedimg(2)}>
          <img width={100} src={Course2} alt="Course2" />
        </Button>
      </>
    </Box>
  );
};

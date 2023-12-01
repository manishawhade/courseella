import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Course1 from "../assets/course1.jpg";
import Course2 from "../assets/course2.jpg";
import { Button } from "@mui/material";
export default function CardComponent({
  _id,
  title,
  description,
  price,
  image,
  published,
  handleEdit,
  handleDelete,
}) {
  return (
    <Card sx={{ width: 245, height: "100%" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image === "1" ? Course1 : Course2}
        title={title}
      />
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography color="text.secondary">
          {new Date(parseInt(published)).toLocaleDateString()}
        </Typography>
        <Typography color="text.secondary">₹{price}</Typography>
      </CardActions>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" onClick={() => handleEdit(_id)}>View</Button>
        <Button variant="outlined" onClick={handleDelete}>Delete</Button>
      </CardActions>
    </Card>
  );
}

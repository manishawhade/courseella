import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function CardComponent({
  title,
  description,
  price,
  image,
  published,
}) {
  return (
    <Card sx={{ maxWidth: 245, height: "100%" }}>
      <CardMedia sx={{ height: 140 }} image={image} title={title} />
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography color="text.secondary">{published}</Typography>
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
    </Card>
  );
}

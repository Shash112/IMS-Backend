import app from "./app";
import connectDB from "./config/db";

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} and PORT: ${PORT}`);
});
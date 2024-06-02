import { connectDB } from "./db/index.js";
import { app } from "./app.js";

const PORT = 8000;

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port : ${PORT}`);
    });
  })
  .catch((err) => console.log("MONGO db connection failed !!!", err));

// app.listen(PORT,()=>{
//     console.log(`Server is running on port ${PORT}`)
// })

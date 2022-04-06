const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const { errorModule } = require("./lib/middlewares/error");

//* Middleware
app.use(cors());
app.use(express.json());
app.use(
  morgan(
    "Method-:method URL-:url Status-:status Len-:res[content-length] - res_time-:response-time ms"
  )
);

//* Routes
app.use("/api/v1/", (req, res, next) => {
  res.json({
    success: true,
    message: "Welcome to the Telegram API",
  });
});
app.use(errorModule);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});

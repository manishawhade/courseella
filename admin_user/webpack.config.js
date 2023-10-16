const webpack = require("webpack");

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      "process.env.BASE_URL": JSON.stringify("http://localhost:3000/admin"),
    }),
  ],
};

const express = require("express")
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Bot is online</h1> <h2>BY REPLIT</h2> <iframe width="560" height="315" src="https://www.youtube.com/embed/XvQxIsz30rE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <br> <iframe width="560" height="315" src="https://www.youtube.com/embed/9tLglpFAyIg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')

})

    app.listen(3000, () => {
  console.log('✅Web is up');
});
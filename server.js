const express = require('express');
const app = express();

const appName = 'target-app';
const outputPath = `${__dirname}/dist/${appName}`;

app.use(express.static(outputPath));
app.get('/*', (req, res) => {
  res.sendFile(`${outputPath}/index.html`);
});
app.listen(process.env.PORT, () => {
    console.log(`${appName} listening on port ${process.env.PORT}`)
});
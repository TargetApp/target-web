const express = require('express');
const app = express();

const appName = 'target-app';
const outputPath = `${__dirname}/dist/${appName}`;
const serverPort = process.env.PORT || 8080;

app.use(express.static(outputPath));
app.get('/*', (req, res) => {
  res.sendFile(`${outputPath}/index.html`);
});
app.listen(serverPort, () => {
    console.log(`${appName} listening on port ${serverPort}`)
});
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hola Mundo desde GitHub Actions + Docker + Render!");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));

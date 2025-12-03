const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hola Mundo desde GitHub UP Here");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));

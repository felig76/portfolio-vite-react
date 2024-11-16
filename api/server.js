const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const projects = [
    {
        id: 1,
        titulo: "Geohistory",
        descripcion: "Mapa interactivo de visualización de eventos históricos.",
        tecnologias: [
            { nombre: "React", color: "#4f92ff" },
            { nombre: "NodeJS", color: "#4fd152" },
            { nombre: "MySQL", color: "#ff724f" },
        ],
        repositorio: "https://github.com/felig76/Geohistory",
    },
    {
        id: 1,
        titulo: "Air Quality ESP32",
        descripcion: "Software controlador de placa Arduino para medir calidad del aire.",
        tecnologias: [
            { nombre: "C++", color: "#ed5aed" },
            { nombre: "PHP", color: "#9754e3" },
            { nombre: "MySQL", color: "#ff724f" },
        ],
        repositorio: "https://github.com/felig76/air-quality-esp32-project",
    },
    {
        id: 1,
        titulo: "Explorador de archivos por consola",
        descripcion: "Explorador y operador de archivos simple manejado por consola y con tokenization y parsing de los comandos.",
        tecnologias: [
            { nombre: "Python", color: "#1f40ad" },
        ],
        repositorio: "https://github.com/felig76/terminal-file-explorer",
    },
];

app.get('/api/proyectos', (req, res) => {
    res.json(projects);
});

app.listen(3000, () => {
    console.log(`Servidor corriendo en http://localhost:3000`);
});
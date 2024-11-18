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
        descripcion: "Explorador y operador de archivos simple manejado por consola con tokenization y parsing de los comandos.",
        tecnologias: [
            { nombre: "Python", color: "#1f40ad" },
        ],
        repositorio: "https://github.com/felig76/terminal-file-explorer",
    },
];

const infoPersonal = {
    "parrafoPresentacion": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore qui, veniam autem ipsum velit laborum officiis suscipit asperiores culpa inventore sed at animi quibusdam aspernatur ratione dolor error praesentium deserunt vero delectus voluptatem molestias mollitia! Doloribus id eaque, eligendi corporis dolorum sequi? Facere autem suscipit magnam deserunt error quaerat quis molestiae expedita? Libero laborum optio quae saepe autem iure aspernatur, ipsa sed dolore velit, explicabo aliquid mollitia laudantium illo sequi obcaecati assumenda sit porro. Odit voluptatum ipsam repellat harum eum iste eius sit autem, earum culpa quidem dolorem fugiat facilis corrupti temporibus vero rerum molestias veritatis reprehenderit aliquam? Neque, commodi."
};

app.get('/proyectos', (req, res) => {
    res.json(projects);
});

app.get('/infoAbout', (req, res) => {
    res.json(infoPersonal)
});

app.listen(3000, () => {
    console.log(`Servidor corriendo en http://localhost:3000`);
});
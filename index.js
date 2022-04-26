require("dotenv").config();

const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

const pokedex = [
  {
    numero: 1,
    nome: "Bulbasauro",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    descricao:
      "Há uma semente de planta nas costas desde o dia em que este Pokémon nasce. A semente cresce lentamente.",
    tipo: "Grama",
    altura: "0,7m",
    peso: "6.9kg",
    categoria: "Semente",
    habilidade: "Superar",
  },
  {
    numero: 2,
    nome: "Charmander",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    descricao:
      "Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta de sua cauda.",
    tipo: "Fogo",
    altura: "0,6m",
    peso: "8,5kg",
    categoria: "Lagarto",
    habilidade: "Chama",
  },
  {
    numero: 3,
    nome: "Squirtle",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    descricao:
      "Quando retrai seu longo pescoço em sua concha, esguicha água com força vigorosa.",
    tipo: "Água",
    altura: "0,5m",
    peso: "9,0kg",
    categoria: "Tartaruga",
    habilidade: "Torrente",
  },
  {
    numero: 4,
    nome: "Caterpie",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
    descricao:
      "Quando retrai seu longo pescoço em sua concha, esguicha água com força vigorosa.",
    tipo: "Inseto",
    altura: "0,3m",
    peso: "2,9kg",
    categoria: "Minhoca",
    habilidade: "Pó de Escudo",
  },
  {
    numero: 5,
    nome: "Cyndaquil",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/155.png",
    descricao:
      "Cyndaquil se protege acendendo as chamas em suas costas. As chamas são vigorosas se o Pokémon estiver com raiva. No entanto, se estiver cansado, as chamas crepitam irregularmente com combustão incompleta.",
    tipo: "Fogo",
    altura: "0,5m",
    peso: "7,9kg",
    categoria: "Rato de Fogo",
    habilidade: "Chama",
  },
];

let pokemon = undefined;
let message = "";
var pok = 1;

// Rotas de acesso.
app.get("/", (req, res) => {
  setTimeout(() => {
    message = "";
  }, 1000);
  res.render("index", { pokedex, pokemon, message });
});

app.get("/cadastrar", (req, res) => {
  res.render("cadastrar", { pokedex, pokemon });
});

app.get("/editar", (req, res) => {
  res.render("editar", { pokedex, pokemon });
});

app.get("/detalhes", (req, res) => {
  res.render("detalhes", { pokedex, pok });
});

app.get("/detalhes/:id", (req, res) => {
    pok = +req.params.id;
    res.redirect("/detalhes");
  });

app.post("/create", (req, res) => {
  const pokemon = req.body;
  pokemon.id = pokedex.length + 1;
  pokedex.push(pokemon);
  message = "Pokémon cadastrado com sucesso!";
  res.redirect("/#cards");
});

app.get("/atualizar/:id", (req, res) => {
  const id = +req.params.id;
  pokemon = pokedex.find((pokemon) => pokemon.id === id);
  res.redirect("/editar");
});

app.post("/update/:id", (req, res) => {
  const id = +req.params.id - 1;
  const newPokemon = req.body;
  newPokemon.id = id + 1;
  pokedex[id] = newPokemon;
  pokemon = undefined;
  message = "Pokémon atualizado com sucesso!";
  res.redirect("/#cards");
});


app.get("/delete/:id", (req, res) => {
  const id = +req.params.id - 1;
  delete pokedex[id];
  res.redirect("/#cards");
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
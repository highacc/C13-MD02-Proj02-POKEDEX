const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
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

app.get("/", (req, res) => {
  res.render("index", { pokedex });
});
app.post("/add", (req, res) => {
  const pokemon = req.body;
  pokedex.push(pokemon);
  res.redirect("/");
});

app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000")
);

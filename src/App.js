import VideoGame from "./VideoGame";

const gamesList = [
  {
    id: 0,
    name: "The Last of Us Part 2",
    rating: null,
    category: "Action-horror",
  },
  {
    id: 1,
    name: "Horizon Forbidden West",
    rating: null,
    category: "Action",
  },
  {
    id: 2,
    name: "Metal Gear Solid V: The Phantom Pain",
    rating: null,
    category: "Action-espionage ",
  },
]

//             Map through gamesList
//             Render a GameCard for each game
//             Pass game data as props

function App() {
  return (
    <div>
      <h1>My Video Games</h1>
      {gamesList.map((g=> (<VideoGame game={g}/>)))}
    </div>
  );
}

export default App;

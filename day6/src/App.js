
import './App.css';
import News from './News';
function App() {
  return (
    <div className="App">
      <News image="https://static.cricbuzz.com/a/img/v1/420x235/i1/c456794/breakdown-to-open-with-kohli.jpg"
       heading="Breakdown: To open with Kohli or not and the Dube flexibility" 
       paragraph="The takeaways from the 15-member India squad announced for the 2024 T20 World Cup"
       link="https://www.cricbuzz.com/cricket-news/130288/samson-chahal-return-rinku-not-picked-for-t20-world-cup"
       linkName="Samson, Chahal return; Rinku not picked for T20 World Cup"
       />
       <News image="https://static.cricbuzz.com/a/img/v1/420x235/i1/c457545/lsg-maximise-a-rare-bowling-da.jpg"
        heading="LSG maximise a rare bowling day"
        paragraph="IPL 2024 has been about pushing the envelope with the bat but LSG defied the trend with smart bowling in favourable conditions, making it more than just another day for batters"
        link="https://www.cricbuzz.com/cricket-news/130296/all-round-stoinis-stars-in-lsgs-fighting-win"
        linkName="All-round Stoinis stars in LSG's fighting win"
        />
    </div>
  );
}

export default App;

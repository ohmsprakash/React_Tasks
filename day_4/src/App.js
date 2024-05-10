import logo from './logo.svg';
import './App.css';
import Header from './Header';
import YoutubeCard from './YoutubeCard';

function App() {
  return (
    <div>
     <Header></Header> 
     <div style={{
            display: "flex",
            flexWrap: "wrap",}}>
   <YoutubeCard></YoutubeCard>
   <YoutubeCard></YoutubeCard>
   <YoutubeCard></YoutubeCard>
   <YoutubeCard></YoutubeCard>
   <YoutubeCard></YoutubeCard>
   <YoutubeCard></YoutubeCard>
   <YoutubeCard></YoutubeCard>
   <YoutubeCard></YoutubeCard>
   </div>
    </div>
  );
}

export default App;

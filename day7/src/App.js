import './App.css';
import Header from './Header';
import YoutubeCard from './YoutubeCard';

function App() {
  return (
    <div>
      <Header/>
      <div style={{
            display: "flex",
            flexWrap: "wrap",
      }}>
      
      <YoutubeCard
      image="https://i.ytimg.com/vi/icsxikOzfVI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAm7h6KHrTloxDzWsToCIXglm_o0w"
      alt="Ashok it"
      heading="DevOps with AWS Cloud | Session - 03 | @ashokit"
      views="780 views"
      days="7 days ago"/>

      <YoutubeCard
      image="https://i.ytimg.com/vi/iw_2j_qbTrk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBYu4BI6_9RxQa9YPJcxud7LFWPdw"
      alt="Ashok it"
      heading="Java Constructors Tutorial with Examples | Java Programming"
      views="620 views"
      days="2 weeks ago"/>

      <YoutubeCard
      image="https://i.ytimg.com/vi/v4nby2BSB20/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAlZ-x_V1AhhMU5-Pu8z7Pgu0GWRQ"
      alt="Ashok it"
      heading="GCP Data Engineer Bootcamp Program"
      views="1.2K views"
      days="4 weeks ago"/>

      <YoutubeCard
      image="https://i.ytimg.com/vi/8w_MuEwqKNg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNvbQqvEwAsVPWccOq1vjpffnKTA"
      alt="Ashok it"
      heading="What is web development | UI Technologies | Ashok IT"
      views="371 views"
      days="1 month ago"/>

      <YoutubeCard
      image="https://i.ytimg.com/vi/FcpV2QS-F9M/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDufsE0Pqt7sQ0enDEQqVcgdlj_nw"
      alt="Ashok it"
      heading="Day - 03 | Angular | Ashok IT"
      views="668 views"
      days="1 month ago"/>

      <YoutubeCard
      image="https://i.ytimg.com/vi/7FBsiR7-e3Q/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAO3Toa-alvBEJfYLenxcybjqRbCw"
      alt="Ashok it"
      heading="Day - 03 | Docker Compose Tutorial | @ashokit"
      views="2.8K views"
      days="2 months ago"/>

      <YoutubeCard
      image="https://i.ytimg.com/vi/RVXBKZDVC9w/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCK72lgQHn499mzrRVZmGbDCRyZPg"
      alt="Ashok it"
      heading="Day - 03 : Java Fullstack | What is Java | Ashok IT"
      views="925 views"
      days="2 months ago"/>

      <YoutubeCard
      image="https://i.ytimg.com/vi/3ccGGyJwWG4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCuvUyfnyOvIbHOIVDCoAUyKEY_AQ"
      alt="Ashok it"
      heading="Day - 03 | Linux Tutorial | Ashok IT"
      views="976 views"
      days="1 month ago"/>
      </div>
    </div>
  );
}

export default App;

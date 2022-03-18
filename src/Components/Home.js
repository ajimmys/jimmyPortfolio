import BiographyContainer from '../Containers/BiographyContainer';
import WorkHistoryContainer from "../Containers/WorkHistoryContainer";
import '../Styles/Home.css'
import projData from "../Content/workHistory.json"

function Home () {
    console.log(projData)

    return(
        <div className="homeLayout">
            <BiographyContainer />
            <WorkHistoryContainer projects={projData["projects"]}/>
        </div>
    );
}

export default Home;
import BiographyContainer from '../Containers/BiographyContainer';
import WorkHistoryContainer from "../Containers/WorkHistoryContainer";
import '../Styles/Home.css'

function Home () {
    return(
        <div className="homeLayout">
            <BiographyContainer />
            <WorkHistoryContainer />
        </div>
    );
}

export default Home;
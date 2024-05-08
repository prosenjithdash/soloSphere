import { useLoaderData } from "react-router-dom";
import Banner from "../../../Components/Banner";
import TabSection from "../../../Components/TabSection";

const Home = () => {
    const jobs = useLoaderData()
    console.log(jobs)
    return (
        <div>
            <Banner />
            <TabSection jobs={jobs} />
        </div>
    );
};

export default Home;
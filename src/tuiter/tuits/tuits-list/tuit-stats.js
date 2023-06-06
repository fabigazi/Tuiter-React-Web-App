import './index.css';
function TuitStats({ tuit }) {
    return (
        <div className="container">
            <div><i class="fa-regular fa-comment"></i> {tuit.replies}</div>
            <div><i class="fa-solid fa-retweet"></i> {tuit.retuits}</div>
            <div><i class="fa-regular fa-heart"></i> {tuit.likes}</div>
            <div><i class="fa-sharp fa-solid fa-arrow-up-from-bracket"></i> </div>
        </div>
    );
};
export default TuitStats;
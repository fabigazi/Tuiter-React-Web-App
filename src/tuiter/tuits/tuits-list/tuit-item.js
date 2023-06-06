import TuitStats from "./tuit-stats";
const TuitItem = (
    {
        tuit 
    }
) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img width={50} className="float-end rounded-circle" src={`${tuit.image}`} />
                </div>
                <div className="col-10">
                    <div><b>{tuit.userName}</b> {tuit.handle} . {tuit.time}</div>
                    <div>{tuit.tuit}</div>
                    <div><TuitStats tuit={tuit}/></div>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;
import TuitStats from "./tuit-stats";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";
import 'bootstrap-icons/font/bootstrap-icons.css';

function TuitItem({ tuit }) {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img width={50} className="float-end rounded-circle" src={`${tuit.image}`} />
                </div>
                <div className="col-10">
                    <div><i className="bi bi-x float-end"
                        onClick={() => deleteTuitHandler(tuit._id)}></i></div>
                    <div>
                        <b>{tuit.userName}</b> {tuit.handle} . {tuit.time}</div>
                    <div>{tuit.tuit}</div>
                    <div><TuitStats tuit={tuit} /></div>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;
import React from "react";
const WhoToFollowListItem = (
  {
    who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTt_o_VaKFc1EPrRoP4uP81ktzVnuwA_n8vA&usqp=CAU' }
  }
) => {
  //https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTt_o_VaKFc1EPrRoP4uP81ktzVnuwA_n8vA&usqp=CAU
  //src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTt_o_VaKFc1EPrRoP4uP81ktzVnuwA_n8vA&usqp=CAU${who.avatarIcon}`} alt="Avatar"/
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-2">
          <img className="rounded-circle" height={48} src={`${who.avatarIcon}`} />
        </div>
        <div className="col-8 d-none d-xxl-block">
          <div className="fw-bold">{who.userName}</div>
          <div>@{who.handle}</div>
        </div>
        <div className="col-2 d-none d-xxl-block">
          <button className="btn btn-primary rounded-pill float-end">Follow</button>
        </div>
        <div className="col-8 d-xxl-none">
          <button className="btn btn-primary rounded-pill float-end">Follow</button>
        </div>
      </div>
    </li>
  );
};
export default WhoToFollowListItem;
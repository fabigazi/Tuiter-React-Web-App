import React from "react";
import { useSelector } from "react-redux";
import WhoToFollowListItem from "./who-to-follow-list-item";
const WhoToFollowList = () => {
  const whoArray = useSelector((state) => state.who);
  // {
  //   whoArray.map(who =>
  //     <div >
  //       <WhoToFollowListItem
  //         key={who._id}
  //         who={who} />

  //     </div>

  //   )
  // }
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <h3>Who to follow</h3>
      </li>
      {
        whoArray.map(who =>
          <div >
            <WhoToFollowListItem
              key={who._id}
              who={who} />

          </div>

        )
      }

    </ul>
  );
};
export default WhoToFollowList;
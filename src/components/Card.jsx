function Card() {
  return ( 
    <>
      <div className="cardContainer">
        <div className="cardTitle">
          Captain License
        </div>
        <hr />
        <div className="cardWrapper">
          <div className="cardInfoWrapper">
            <div className="cardNameWrapper">
              Cap, Funny Beard
            </div>
            <div className="cardDescWrapper">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui error libero nisi assumenda modi possimus, fuga odit laboriosam, nulla odio voluptates blanditiis tempora quod iste molestias, vero esse tenetur reprehenderit.
            </div>
            <button>
              Follow
            </button>
          </div>
          <div className="imgContainer">
            <img src="/captainSpongeBub.png" alt="CapPfp" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
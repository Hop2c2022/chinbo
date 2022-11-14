export const Photo3 = ({ width, name, date }) => {
  return (
    <div className="Photo3">
      <div className="photo-bb">
        <img
          width={width}
          src="https://scontent.fuln1-2.fna.fbcdn.net/v/t39.30808-6/277993800_160763889652449_3931467693324004403_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=e5cQ4uNPPiEAX_DyHcq&_nc_ht=scontent.fuln1-2.fna&oh=00_AfAG17caJG4ET72CWSZGVHcGARvl_VZcwoSuuQd16akXcg&oe=636FA3DA"
          alt=""
        />
      </div>
      <span style={{ fontSize: "20px", marginLeft: "30px" }}>{name}</span>
      <span>|</span>
      <span style={{ fontSize: "20px" }}>{date}</span>
    </div>
  );
};

import "./Header.css";
export const Header = () => {
  return (
    <div>
      <div className="backgoundimg">
        <div
          className="nav2 "
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="nav d-flex flex-row justify-content-between ">
            <div className="login d-flex w-64px h-28px ">Product</div>
            <div className="login d-flex w-64px h-28px">Service</div>
            <div className="login d-flex w-64px h-28px"> Contact</div>
            <div className="login d-flex w-64px h-28px"> Log in</div>
            <button className="get w-84px h-44px color: #FFFFFF ">
              Get access
            </button>
          </div>
        </div>
        <div className="bro w-50 h-100 d-flex justify-content-center">
          <div className="d-flex flex-column justify-content-center">
            <div className="bro1">
              Instant collaborations <br /> for remote teams
            </div>
            <div className="bro2 pt-5 pb-5">
              All in one for your remote team chats, <br /> collaboration and
              track projects
            </div>
            <div className="pt-5">
              <input
                placeholder="  Email"
                className="w-50 border border-0"
                style={{
                  height: "58px",
                  borderRadius: "5.4px",
                }}
                type="text"
              />
              <button className="btn-2 p-3">Get early access</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

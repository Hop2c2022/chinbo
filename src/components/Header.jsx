import "./Header.css"
export const Header = () => {
    return (
        <div>
            <div className="backgoundimg">
                <div className="nav2 d-flex w-100 flex-row justify-content-between text-light" >
                    <div className="nav d-flex flex-row justify-content-between ">
                        <div className="login d-flex w-64px h-28px ">Product</div>
                        <div className="login">Service</div>
                        <div className="login"> Contact</div>
                        <button className="get w-84px h-44px color: #FFFFFF ">Get access</button>
                    </div>
                </div>
                <div className="Second">
                    <div className="P3">
                        <div className="K3">
                            <span className="text1">
                                Instant collaborations   for remote teams
                            </span>{" "}
                            <br />
                            <span className="text2">
                                All in one for your remote team chats, collaboration and track
                                projects
                            </span>
                        </div>
                    </div>
                    <div className="L3">
                        <input type="email" placeholder="Email" className="email" />
                        <button className="butt">Get early access</button>
                    </div>
                </div>
            </div>
        </div>




    )
}
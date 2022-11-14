import { Amy } from "./help/Amy";
import "./Body.css";

export const Body = () => {
  return (
    <div className="Container d-flex flex-column w-100">
      <div
        className="m-meeting d-flex flex-row w-100"
        style={{ height: "100vh" }}
      >
        <div className="m-meeting1-s d-flex flex-row justify-content-between w-100 align-items-center">
          <div
            className="m-meet-1 d-flex flex-column gap-3"
            style={{ marginLeft: "20rem" }}
          >
            <div className="m-title ">Your Hub for teamwork</div>
            <div className="m-text">
              Give everyone you work with—inside and outside your company—a more
              productive way to stay in sync. Respond faster with emoji, keep
              conversations focused in channels, and simplify all your
              communication into one place.
            </div>
            <div className="m-link">
              <a href="">Learn more</a>
            </div>
          </div>
          <img
            className="m-img"
            src="second.svg"
            alt=""
            style={{ width: "40vw" }}
          />
        </div>
      </div>

      <div
        className="b-meeting d-flex flex-row w-100"
        style={{ height: "100vh" }}
      >
        <div className="b-meeting1-s d-flex flex-row justify-content-between w-100 align-items-center">
          <img
            className="b-img"
            src="third.png"
            alt=""
            style={{ width: "40w" }}
          />
          <div
            className="b-meet-1 d-flex flex-column gap-3"
            style={{ marginRight: "20rem" }}
          >
            <div className="b-title">Simple task management</div>
            <div className="b-text">
              Give everyone you work with—inside and outside your company—a more
              productive way to stay in sync. Respond faster with emoji, keep
              conversations focused in channels, and simplify all your
              communication into one place.
            </div>
            <div className="b-link">
              <a href="">Learn more</a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="g-meeting d-flex flex-row w-100"
        style={{ height: "100vh" }}
      >
        <div className="g-meeting1-s d-flex flex-row justify-content-between w-100 align-items-center">
          <div
            className="g-meet-1 d-flex flex-column gap-3"
            style={{ marginLeft: "20rem" }}
          >
            <div className="g-title">Scheduling that actually works</div>
            <div className="g-text">
              Give everyone you work with—inside and outside your company—a more
              productive way to stay in sync. Respond faster with emoji, keep
              conversations focused in channels, and simplify all your
              communication into one place.
            </div>
            <div className="g-link">
              <a href="">Learn more</a>
            </div>
          </div>
          <img
            className="g-img"
            src="fourth.png"
            alt=""
            style={{ width: "40vw" }}
          />
        </div>
      </div>

      <div>
        <div
          style={{
            justifyContent: "center",
            fontWeight: "800",
            fontSize: "48px",
            lineHeight: "60px",
          }}
        >
          What people say about us
        </div>

        <div className="d-flex flex-row w-100 gap-5 overflow-scroll ">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
            <Amy />
          ))}
        </div>
      </div>
    </div>
  );
};

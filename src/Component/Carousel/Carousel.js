import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Avatar } from "antd";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { useSelector } from "react-redux";
import "./Carousel.css";
function CarouselCom() {
  const users = useSelector((state) => state.users.users);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <div className="carousel">
      {users.length > 0 && (
        <div>
          <div className="header">
            <h2>Favorite</h2>
          </div>
          <Carousel responsive={responsive}>
            {users.map((element, i) => (
              <div key={i} className="carousel-item">
                <div className="carousel-header">
                  <Avatar className="avatar" size={50} src={element.avatar} />
                  <div className="header-name">
                    <h3>
                      {element.first_name} {element.last_name}
                    </h3>
                    <p>{element.address.city}</p>
                  </div>
                  <StarRoundedIcon className="icon" />
                </div>

                <div className="carousel-middle">
                  <p>{element.subscription.status}</p>
                  <p>
                    {element.address.state}, {element.address.country}
                  </p>
                </div>

                <div className="carousel-footer">
                  <div>
                    <ChatBubbleOutlineIcon className="icon" />
                    <p>Send Message</p>
                  </div>
                  <div>
                    <PhoneInTalkIcon className="icon" />
                    <p>Call</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      )}
    </div>
  );
}

export default CarouselCom;

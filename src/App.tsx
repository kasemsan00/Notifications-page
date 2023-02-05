import "./App.css";
import NotificationCount from "./Head/NotificationCount";
import MarkRead from "./Head/MarkRead";
import NotificationReact from "./Notification/NotificationReact";
import NotificationFollow from "./Notification/NotificationFollow";
import NotificationJoinGroup from "./Notification/NotificationJoinGroup";
import NotificationPrivateMessage from "./Notification/NotificationPrivateMessage";
import NotificationLeftGroup from "./Notification/NotificationLeftGroup";
import React from "react";
import NotificationComment from "./Notification/NotificationComment";

function App() {
    return (
        <div className="p-4 w-screen h-screen">
            <div className="max-w-[1440px] h-[100px] flex flex-1 top-0 p-2 m-auto">
                <NotificationCount />
                <MarkRead />
            </div>
            <div className="max-w-[1440px] flex flex-1 flex-col gap-2 m-auto">
                <NotificationReact
                    name="Mark Webber"
                    imageName="avatar-mark-webber.webp"
                    dtmPost="1m ago"
                    target="My first tournament today!"
                    isRead={false}
                />
                <NotificationFollow name="Angela Gray" imageName="avatar-angela-gray.webp" dtmPost="5m ago" isRead={false} />
                <NotificationJoinGroup
                    name="Jacob Thompsom"
                    imageName="avatar-jacob-thompson.webp"
                    dtmPost="1day ago"
                    target="Chess Club"
                    message={null}
                    isRead={false}
                />
                <NotificationPrivateMessage
                    name="Rizky Hasanuddin"
                    imageName="avatar-rizky-hasanuddin.webp"
                    dtmPost="5 days ago"
                    message="Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and i'm already having lots of fun and improving my game."
                />
                <NotificationComment
                    name="Kimberly Smith"
                    imageName="avatar-kimberly-smith.webp"
                    dtmPost="1week ago"
                    imageComment="image-chess.webp"
                />
                <NotificationReact
                    name="Nathan Peterson"
                    imageName="avatar-nathan-peterson.webp"
                    dtmPost="2weeks ago"
                    target="5 end-game strategies to increase your win rate"
                    isRead={true}
                />
                <NotificationLeftGroup name="Anna Kim" imageName="avatar-anna-kim.webp" dtmPost="2weeks ago" target="Chess Club" isRead={true} />
            </div>
        </div>
    );
}

export default App;

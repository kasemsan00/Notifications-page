import AvatarImage from "../AvatarImage";

interface Props {
    name: string;
    imageName: string;
    dtmPost: string;
    target: string | null;
    isRead: boolean;
}

export default function NotificationReact({ name, imageName, target, isRead, dtmPost }: Props) {
    return (
        <div className={`w-full ${isRead ? "" : "bg-veryLightGrayishBlue"}  rounded-md flex flex-row py-2 items-center`}>
            <AvatarImage name={name} imageName={imageName} />
            <div className="flex flex-col w-full">
                <div className="block">
                    <label className="cursor-pointer text-black font-bold hover:text-primaryBlue mr-2">{name}</label>
                    <div className="inline-block ">
                        <label className="text-darkGrayishBlue">reacted to your recent post</label>
                    </div>
                    <div className="inline-block">
                        <label className="cursor-pointer text-darkGrayishBlue hover:text-primaryBlue font-bold">{target}</label>
                    </div>
                    {isRead ? null : (
                        <div className="inline-block ">
                            <label className="text-primaryRed mx-1">•</label>
                        </div>
                    )}
                </div>
                <label className="text-grayishBlue">{dtmPost}</label>
            </div>
        </div>
    );
}

import AvatarImage from "../AvatarImage";

interface Props {
    name: string;
    imageName: string;
    dtmPost: string;
    target: string | null;
    message: string | null;
    isRead: boolean;
}
export default function NotificationJoinGroup({ name, imageName, target, message, isRead, dtmPost }: Props) {
    return (
        <div className="w-full bg-veryLightGrayishBlue rounded-md flex flex-row items-center py-2">
            <AvatarImage name={name} imageName={imageName} />
            <div className="flex flex-col w-full">
                <div className="block">
                    <label className="cursor-pointer text-black font-bold mr-2 hover:text-primaryBlue">{name}</label>
                    <div className="inline-block ">
                        <label className="text-darkGrayishBlue">has joined your group</label>
                    </div>
                    <div className="inline-block">
                        <label className="cursor-pointer text-darkGrayishBlue hover:text-primaryBlue font-bold">{target}</label>
                    </div>
                    <div className="inline-block ">
                        <label className="text-primaryRed mx-1">•</label>
                    </div>
                </div>
                <label className="text-grayishBlue">{dtmPost}</label>
                {message !== null ? (
                    <div
                        className="block p-4 border border-lightGrayishBlue2 rounded-md cursor-pointer
                                    hover:bg-lightGrayishBlue2"
                    >
                        {message}
                    </div>
                ) : null}
            </div>
        </div>
    );
}

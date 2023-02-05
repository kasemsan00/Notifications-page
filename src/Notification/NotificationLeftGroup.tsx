import AvatarImage from "../AvatarImage";

interface Props {
    name: string;
    imageName: string;
    dtmPost: string;
    target: string | null;
    isRead: boolean;
}

export default function NotificationItem({ name, imageName, target, isRead, dtmPost }: Props) {
    return (
        <div className={`w-full ${isRead ? "" : "bg-veryLightGrayishBlue"} rounded-md flex flex-row items-center py-2`}>
            <AvatarImage name={name} imageName={imageName} />
            <div className="flex flex-col w-full">
                <div className="block">
                    <label className="cursor-pointer text-black font-bold mr-2 hover:text-primaryBlue">{name}</label>
                    <div className="inline-block ">
                        <label className="text-darkGrayishBlue">left the group</label>
                    </div>
                    <div className="inline-block">
                        <label className="cursor-pointer text-darkGrayishBlue hover:text-primaryBlue font-bold">{target}</label>
                    </div>
                </div>
                <label className="text-grayishBlue">{dtmPost}</label>
            </div>
        </div>
    );
}

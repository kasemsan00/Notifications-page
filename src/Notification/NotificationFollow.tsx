import AvatarImage from "../AvatarImage";

interface Props {
    name: string;
    imageName: string;
    dtmPost: string;
    isRead: boolean;
}

export default function NotificationFollow({ name, imageName, isRead, dtmPost }: Props) {
    return (
        <div className="w-full bg-veryLightGrayishBlue rounded-md flex flex-row items-center py-2">
            <AvatarImage name={name} imageName={imageName} />
            <div className="flex flex-col w-full">
                <div className="block">
                    <label className="cursor-pointer text-black mr-2 font-bold hover:text-primaryBlue">{name}</label>
                    <div className="inline-block">
                        <label className="text-darkGrayishBlue">follow you</label>
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

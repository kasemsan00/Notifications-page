import AvatarImage from "../AvatarImage";

interface Props {
    name: string;
    imageName: string;
    dtmPost: string;
    message: string | null;
}

export default function NotificationItem({ name, imageName, message, dtmPost }: Props) {
    return (
        <div className="w-full rounded-md flex flex-row items-center py-2">
            <AvatarImage name={name} imageName={imageName} />
            <div className="flex flex-col w-full">
                <div className="block">
                    <label className="cursor-pointer text-black font-bold mr-2 hover:text-primaryBlue">{name}</label>
                    <div className="inline-block ">
                        <label className="text-darkGrayishBlue">send you a private message</label>
                    </div>
                </div>
                <label className="text-grayishBlue">{dtmPost}</label>
                <div
                    className="block p-4 border border-lightGrayishBlue2 rounded-md cursor-pointer
                                    hover:bg-lightGrayishBlue2 mt-2"
                >
                    {message}
                </div>
            </div>
        </div>
    );
}

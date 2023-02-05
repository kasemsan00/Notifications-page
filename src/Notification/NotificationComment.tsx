import AvatarImage from "../AvatarImage";

interface Props {
    name: string;
    imageName: string;
    dtmPost: string;
    imageComment: string;
}

export default function NotificationComment({ name, imageName, dtmPost, imageComment }: Props) {
    return (
        <div className="w-full rounded-md flex flex-row items-center">
            <AvatarImage name={name} imageName={imageName} />
            <div className="flex flex-col w-full">
                <div className="block ">
                    <label className="cursor-pointer text-black font-bold mr-2 hover:text-primaryBlue">{name}</label>
                    <div className="inline-block ">
                        <label className="text-darkGrayishBlue break-normal">commented on your picture</label>
                    </div>
                </div>
                <label className="text-grayishBlue">{dtmPost}</label>
            </div>
            <div className="inline-block right-0 pr-4">
                <img className="min-w-[50px] min-h-[50px] w-[50px] h-[50px] cursor-pointer" alt={name} src={"../images/" + imageComment} />
            </div>
        </div>
    );
}

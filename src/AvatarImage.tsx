interface Props {
    name: string;
    imageName: string;
}

export default function AvatarImage({ name, imageName }: Props) {
    return (
        <div className="min-w-[70px] w-[100px] mt-2 flex self-start justify-center">
            <img className="min-w-[50px] min-h-[50px] w-[50px] h-[50px] " alt={name} src={"../images/" + imageName} />
        </div>
    );
}

import Image from "next/image";

export default function MenuItem(props) {
  return (
    <div className="flex p-2 hover:bg-gray-200 cursor-pointer rounded-xl flex-row">
      <div>
        <Image src={props.logo} alt="alt" width="18" height="18" />
      </div>
      <p className="ps-4">{props.name}</p>
    </div>
  );
}

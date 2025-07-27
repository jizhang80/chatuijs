import Image from "next/image";

export default function ButtonLogo(props) {
  return (
    <div className={`p-2 rounded-xl ${props.cursor} hover:bg-gray-200`}>
      <Image src={props.logo} alt="image" width="20" height="20" />
    </div>
  );
}

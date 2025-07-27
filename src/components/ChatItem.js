export default function ChatItem(props) {
  return (
    <div className="p-2 rounded-xl cursor-pointer hover:bg-gray-200">
      <a href={props.url}> {props.name} </a>
      {/*need change href to get the chat from DB*/}
    </div>
  );
}

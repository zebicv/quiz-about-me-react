function Option({ option }) {
  return (
    <li className="text-white bg-zinc-500 rounded-full px-3 py-4 mb-3 cursor-pointer hover:translate-x-2 transition-all hover:ease-out duration-300">
      {option}
    </li>
  );
}

export default Option;

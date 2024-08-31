// // A utility function to concatenate CSS class names with proper spacing
// const classNames = (...className) => {
//   // Filter out any empty class names and join them with a space
//   return className.filter(Boolean).join(" ");
// };

const Typing = () => {
  return (
    <div className="p-5 rounded-3xl bg-secondary w-fit inline-flex gap-1.5">
      <span className="animation1 mx-[0.5px] h-2 w-2 bg-zinc-400 rounded-full"></span>
      <span className="animation2 mx-[0.5px] h-2 w-2 bg-zinc-400 rounded-full"></span>
      <span className="animation3 mx-[0.5px] h-2 w-2 bg-zinc-400 rounded-full"></span>
    </div>
  );
};

export default Typing;

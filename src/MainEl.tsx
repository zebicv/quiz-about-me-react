function MainEl({ children }) {
  return (
    <main className="sm:w-[600px] min-h-screen flex flex-col justify-center items-center w-[90%]">
      {children}
    </main>
  );
}

export default MainEl;

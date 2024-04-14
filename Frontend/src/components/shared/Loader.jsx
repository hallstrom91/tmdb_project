export default function Loader() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-sky-700 border-t-red-700"></div>
        <div className="text-bold text-lg pt-2">Laddar...</div>
      </div>
    </>
  );
}

export default function TestimonyCard({ testimony }) {
  return (
    <div className="flex cursor-default flex-col rounded-3xl border-2 border-sky-600 p-2 shadow-md shadow-slate-700 duration-150 ease-in-out hover:scale-105">
      <h4 className="mb-2 text-lg font-medium">{testimony.name}</h4>
      <h5 className="font-light">{testimony.comment}</h5>
    </div>
  );
}

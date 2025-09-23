type NoteProp = {
  title: string;
  content: string;
};

type PageProps = {
  notes: NoteProp[];
};

const Page = ({ notes }: PageProps) => {
  return (
    <div className="flex items-center justify-center w-full bg-neutral-900 text-white">
      {notes.length < 1 ? (
        <div className="text-neutral-300 text-xl">Nothing yet!</div>
      ) : (
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <input value={notes[0].title} onChange={() => {}} />
            <textarea value={notes[0].content} onChange={() => {}} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;

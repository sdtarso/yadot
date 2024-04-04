const classMap = {
  1: "h-1 w-1",
  2: "h-2 w-2",
  4: "h-4 w-4",
  6: "h-6 w-6",
  8: "h-8 w-8",
  10: "h-10 w-10",
  12: "h-12 w-12",
  16: "h-16 w-16",
};

type ILoading = keyof typeof classMap;

export const Loading = ({ size = 8 }: { size?: ILoading }) => {
  const classSize = classMap[size] || "h-8 w-8";
  return (
    <div
      className={`block mx-auto ${classSize} animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]`}
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
};

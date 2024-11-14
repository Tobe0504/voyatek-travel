type ProgressbarTypes = {
  progress: number;
};

const ProgressBar = ({ progress }: ProgressbarTypes) => {
  const progressvalue = Math.floor((progress / 100) * 12);

  console.log(progressvalue);

  return (
    <div className="bg-blue-200 h-2 rounded-lg w-12/12 flex justify-center items-center">
      <div
        className={`h-full w-${progressvalue}/12 bg-blue-100 rounded-lg transition-all duration-75`}
      ></div>
    </div>
  );
};

export default ProgressBar;

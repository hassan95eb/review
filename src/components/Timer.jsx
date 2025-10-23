import React, {
  useEffect,
  useState,
} from "react";

export default function Timer() {
  const [seconds, setSeconds] =
    useState(0);
  const [minutes, setMinutes] =
    useState(0);
  const [hours, setHours] = useState(0);
  const [isStart, setIsStart] =
    useState(false);

  const date = new Date();

  useEffect(() => {
    let interval;

    if (isStart) {
      interval = setInterval(() => {
        setSeconds((prev) => {
          if (prev + 1 === 60) {
            setMinutes((m) => {
              if (m + 1 === 60) {
                setHours((h) => h + 1);
                return 0;
              }
              return m + 1;
            });
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }

    return () =>
      clearInterval(interval);
  }, [isStart]);

  const handleReset = () => {
    setIsStart(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      {/* بخش تاریخ */}
      <div className="flex w-36 justify-between mb-4">
        <span className="text-white bg-black px-1 rounded text-2xl select-none">
          {date.getFullYear()}
        </span>
        <span className="text-white bg-black px-1 rounded text-2xl select-none">
          {date.getMonth() + 1}
        </span>
        <span className="text-white bg-black px-1 rounded text-2xl select-none">
          {date.getDate()}
        </span>
      </div>

      {/* تایمر */}
      <div className="bg-black h-[250px] w-[250px] my-2 rounded-full flex justify-center items-center text-white text-4xl font-mono hover:bg-gray-900">
        {String(hours).padStart(2, "0")}{" "}
        :
        {String(minutes).padStart(
          2,
          "0"
        )}{" "}
        :
        {String(seconds).padStart(
          2,
          "0"
        )}
      </div>

      {/* دکمه‌ها */}
      <div className="w-64 flex justify-around items-center mt-4">
        <button
          className="bg-green-600 px-3 py-1 text-white rounded cursor-pointer"
          onClick={() =>
            setIsStart(true)
          }
        >
          Start
        </button>
        <button
          className="bg-red-600 px-3 py-1 text-white rounded cursor-pointer"
          onClick={() =>
            setIsStart(false)
          }
        >
          Stop
        </button>
        <button
          className="bg-blue-500 px-3 py-1 text-white rounded cursor-pointer"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

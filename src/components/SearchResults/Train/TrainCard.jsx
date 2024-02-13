import React, { useState } from "react";
import ConnectedCoach from "../Coach/ConnectedCoach";
import TrainHeader from "./Components/TrainHeader";
import TrainMain from "./Components/TrainMain";
import TrainSeats from "./Components/TrainSeats";
import MyButton from "../../UI/MyButton";

export default function TrainCard({ item, final }) {
  // const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  // const [data, loading, callback] = useLazyJsonFetch();
  const [version, setVersion] = useState(false);
  console.log("TrainCard", item.departure.from);

  return (
    <>
      {version ? (
        <>
          <ConnectedCoach item={item} setVersion={setVersion} />
          {/* <div className="flex justify-center gap-[86px] px-[259px] mt-9">
            <Filters setParams={setSearchParams} params={searchParams} />
            {data && (
              <div className="flex flex-col w-full mt-5">
                <h2 className="uppercase text-30 mb-5">Выбор мест</h2>
                {data.map((item) => {
                  return <CoachCard key={item.id} item={item}></CoachCard>;
                })}
              </div>
            )}
            {loading && <Loading />}
          </div> */}
        </>
      ) : (
        <div className="bg-white w-[959px] h-[354px] border-1 border-[#C4C4C4] flex ">
          <TrainHeader item={item} />
          <TrainMain item={item} />
          <div className="flex flex-col w-[350px] px-[20px] justify-between py-[30px]">
            <TrainSeats item={item} />
            {final ? (
              <MyButton
                label="Изменить"
                color="transparent"
                className=" font-bold w-[228px]"
                onClick={() => {
                  setVersion(true);
                  // navigate(`/search/seats?id=${item.arrival._id}`);
                }}
              ></MyButton>
            ) : (
              <MyButton
                label="Выбрать места"
                color="orange"
                className="text-white font-bold w-[228px]"
                onClick={() => {
                  setVersion(true);
                  // navigate(`/search/seats?id=${item.arrival._id}`);
                }}
                // onClick={() => navigate(`/search/seats?id=${item.arrival._id}`)}
                //TODO: не перреход на страницу, а открытие подраздела c запросом
              ></MyButton>
            )}
          </div>
        </div>
      )}
    </>
  );
}

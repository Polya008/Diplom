import React from "react";

import { Outlet, useLocation } from "react-router";

export default function Main() {
  const { pathname } = useLocation();
  console.log("PATH", pathname);

  //TODO перенести полностью логику с запросом и фильтром в компонент Train
  return (
    <div>
      {/* <div className={mainClass}>
        <div className={containerClass} id="container">
          {stepSearch === 0 ? (
            <div className="flex flex-col ">
              <h1 className=" mt-[162px] text-white text-72 font-thin">Вся жизнь -</h1>
              <h1 className="text-white text-72 font-bold">путешествие!</h1>
            </div>
          ) : (
            <></>
          )}
          <SearchMain
            step={stepSearch}
            setStep={setStepSearch}
            setSearchParams={setSearchParams}
            paramSearch={searchParams}
          />
        </div>
      </div> */}
      <Outlet />
      {/* {stepSearch !== 0 ? <SearchProgressBar searchStep={stepSearch} /> : <></>} */}
      {/* <div className="flex justify-center gap-[86px] px-[259px] mt-9">
        <Filters setParams={setSearchParams} params={searchParams} />
        {data ? <SearchResultsTrain data={searchResults.items} /> : <></>}
      </div> */}
      {/* ) : (
        <></>
      )} */}
      {/* {loading ? <Loading /> : <></>} */}
    </div>
  );
}

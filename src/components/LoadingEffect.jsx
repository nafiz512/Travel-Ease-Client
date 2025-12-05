import React from "react";

const LoadingEffect = () => {
    return (
        <div className="w-8/12 flex mt-10 items-center justify-center mx-auto">
            {/* <span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span>
            <span className="loading loading-ring loading-xl"></span> */}
            <div className="space-x-2">
                <span className="loading loading-ring loading-xs"></span>
                <span className="loading loading-ring loading-sm"></span>
                <span className="loading loading-ring loading-md"></span>
                <span className="loading loading-ring loading-lg"></span>
                <span className="loading loading-ring loading-xl"></span>
            </div>
        </div>
    );
};

export default LoadingEffect;

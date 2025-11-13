import React from "react";

export const SkeletonLoader = ({ type = "card", count = 1 }) => {
    const skeletons = Array.from({ length: count }, (_, i) => i);

    const getSkeletonClass = () => {
        switch (type) {
            case "card":
                return "bg-base-300 animate-pulse rounded-lg";
            case "text":
                return "bg-base-300 animate-pulse rounded";
            case "circle":
                return "bg-base-300 animate-pulse rounded-full";
            case "button":
                return "bg-base-300 animate-pulse rounded-full";
            default:
                return "bg-base-300 animate-pulse rounded-lg";
        }
    };

    if (type === "card") {
        return (
            <div className="space-y-4">
                {skeletons.map((item) => (
                    <div
                        key={item}
                        className="border border-base-300 space-y-3 rounded-lg p-4"
                    >
                        <div className="flex space-x-4">
                            <div
                                className={`${getSkeletonClass()} w-16 h-16`}
                            ></div>
                            <div className="flex-1 space-y-3">
                                <div
                                    className={`${getSkeletonClass()} h-4 w-3/4`}
                                ></div>
                                <div
                                    className={`${getSkeletonClass()} h-4 w-1/2`}
                                ></div>
                                <div
                                    className={`${getSkeletonClass()} h-4 w-2/3`}
                                ></div>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <div
                                className={`${getSkeletonClass()} w-16 h-16`}
                            ></div>
                            <div className="flex-1 space-y-3">
                                <div
                                    className={`${getSkeletonClass()} h-4 w-3/4`}
                                ></div>
                                <div
                                    className={`${getSkeletonClass()} h-4 w-1/2`}
                                ></div>
                                <div
                                    className={`${getSkeletonClass()} h-4 w-2/3`}
                                ></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    if (type === "text") {
        return (
            <div className="space-y-2">
                {skeletons.map((item) => (
                    <div
                        key={item}
                        className={`${getSkeletonClass()} h-4`}
                    ></div>
                ))}
            </div>
        );
    }

    return (
        <div
            className={`${getSkeletonClass()} ${
                type === "circle" ? "w-12 h-12" : "w-20 h-10"
            }`}
        ></div>
    );
};

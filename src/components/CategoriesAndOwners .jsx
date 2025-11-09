import React from "react";

const CategoriesAndOwners = () => {
    const categories = [
        {
            id: 1,
            name: "Sedan",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_DIm5JnNsQsaoY_Jt8iYTobykcUR7isQ7HUlppfZI6KwSIGCepfpNXgRfCjV-uX7LiDhMcv-jF7_j5Q6uhGfTVg7gl_appflCGQ9FOQB6WmYFHzoEXrDOHjZb6qf9TOpk1-ISr9t3FIoj5ADOnAkCpEdzDDi5OKa-HmSep_Ix0d81_72QuuVjTH4BtfqsjDj-agLu2eY7_BZT5LdaTE-wBN5VJ3pMKSkQv4GWZ26uozvs4BMiOQusiKJrTz9ZKNlPxtjfEbbkA0Y",
        },
        {
            id: 2,
            name: "SUV",

            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAm7_bClrjl1nBNhRhl5tdQk3XM8RWH9wndXgbDpbo6HfPOz4Wna6ZXXMuu-YA25ItXAH7zlm_TzZU8NdhM-mlgInwrLxc7Az61DR3dObcRAjlDEWuuSjsOjx8P2RLL4hAZ3wobhovJmy9-hqGXfn0m7G71pv_CkoonBMMwp-P5TIiNRyZL7nkQxZTcjrmgAAmKavubHdcy97E3r8rRSqnmSjaKY0CZICvcOb3y13sS9pCd9SfvcFmrnszNcOjy8pbsNbm8vqwV9RE",
        },
        {
            id: 3,
            name: "Electric",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJmbzpQ6xqNIdTONGSSi0S1zsy5nY2r2xwlXe9ckp9IW6mTXG4jf9otSyKhlYuoFudAWiL5xa-NMH0C08w2RAS_0stEBJ3kIvhFzZFFdEOMd6T-lbRpn7J1q4jgkP2DTlLEngBfLY3Jr5wHsigNOuHMzC3KPt6Xp5PucVNKgj1kkmirzFlmLfJP6WY98-A9kh5mTdObUMd6zYyPIWAzda-whyn40YesWATv7J0cEDzYXaaQz5FrUyFvWPSc7IeAiU9SZkqQcc4LYQ",
        },
        {
            id: 4,
            name: "Van",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9c3kkfTxu1O-IGVErSaPTzOLTEpX-XTsLvP-8Vj6bFNYRGcUqUh-OmkG4lLfcPiFJ-hagw_1ElON2xpOo0CXNDQeIMgQ6Lleyr-Jt7uY8sl-G0FBUykaQlwitzj5vDa6ilv5wg1IVZx7tkWushrPxuZQzzGNywJSeoUI3bm9_T_zeK4ETXP_FD6bjeuZoyk0VVRGIH-mtHgK3LWQXpZkSb0MjCqIbUeyjh0alyOwCPc3vYgqfu95WqEDVvu8Pwkn8HTJC4rMxdqU",
        },
    ];

    const owners = [
        {
            id: 1,
            name: "Sophia Carter",
            rating: "4.8 stars",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFLEK9-vMYJOZcYQoriB7HXlElgFWHE9vTReBZVpMIFqREx1hVki7oNNmTPb7V1q4INMtuF7jPbPmstXvIRay9oq_fcOfj8NjkrZqzIu-mt3Eh40i0wsqFfC2jwt5gr2CY1AvZi842En3-4eJL452ymSRoD7NSRcl_Ul8mfrg1JYR0D8rCK1g1GXWYdgBix2bMOqh-bIGXbgX_lP3lWZUUYxsc4jgET_9SOpTyYAw4HFBbYlAIzmO42u-Vhfo_Ksh_5fAZy5Cqeyw",
        },
        {
            id: 2,
            name: "Ethan Bennett",
            rating: "4.9 stars",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjhx2lN1-XwOQH5PZDMgZv7RUSRq89eivW5XSIaPH8FS9LWEajiteOOAlu9tBHnT333kKkmOb_tm1TYPaC997HiB3LZqdcxjazLfCm4hICQsyYEg4PvP-cbl6RglhOoeFQ9GobLbawstqVq5NdlRWbcQiNw7-JV_aNUte-0pI8TRQ4t4kLpGbIDeNtDF47iBBAjeCpZyFCBbfsvfP8YrN0edWUApiA9Vu85RJ6UOpKN_-ECAvyBeMgUTeKTQwQAoJQEWzzABJMLBw",
        },
        {
            id: 3,
            name: "Olivia Hayes",
            rating: "4.7 stars",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCr9tLyuN4O_goXDvfCeEzmosEhV2JCP7OJleZbVhZe_g7F4OBUrMxNJj0GpYbQZJEya_2TZygWHG9EvaJz5NCMkLB3cCeHT-skSn6F4hpjgfCnIgIRJthKl9tfZwlcuGaharmZjs1HgMmNwk18YlaGmPZoYsLoGzmt6AeFXLNBNHWp58sOpOcgfXxXb2or6vFtCxtPDz9K1uElKn2DEZsHdpnlCawNjmf_BwSkf5YzW1foVnwFDeGDDqXZTQ39Vo2-EtLEd52djdE",
        },
    ];

    return (
        <div className="min-h-screen bg-base-100 text-base-content font-sans py-10 px-6 md:px-20">
            {/* Top Categories Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5">
                    Top Categories
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 p-4">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="flex flex-col gap-3 pb-3"
                        >
                            <div
                                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                                style={{
                                    backgroundImage: `url(${category.image})`,
                                }}
                            ></div>
                            <p className="text-base font-medium leading-normal text-base-content">
                                {category.name}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured Owners Section */}
            <section>
                <h2 className="text-2xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5">
                    Featured Owners
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 p-4">
                    {owners.map((owner) => (
                        <div
                            key={owner.id}
                            className="flex flex-col gap-3 text-center items-center pb-3"
                        >
                            <div className="px-4">
                                <div
                                    className="w-[250px] h-[250px] bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                                    style={{
                                        backgroundImage: `url(${owner.image})`,
                                    }}
                                ></div>
                            </div>
                            <div>
                                <p className="text-base font-medium leading-normal text-base-content">
                                    {owner.name}
                                </p>
                                <p className="text-sm font-normal leading-normal text-base-content">
                                    {owner.rating}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default CategoriesAndOwners;

import React from 'react';
import { Link } from 'react-router-dom';

const MyPortfolio = () => {
    return (
        <div className="my-2 ">
            <div className="hero h-screen" style={{ "background-image": "url(https://i.ibb.co/gMS57DP/christin-hume-h-Buw-VLc-YTn-A-unsplash.jpg)" }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there !!</h1>
                        <p className="mb-5">I am Taslima. Passionate about web development. Welcome to my Portfolio</p>

                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 px-12">
                <div class="card max-w-lg bg-base-100 shadow-xl my-2 p-2">
                    <div class="card-body">
                        <h2 class="card-title">Education</h2>
                        <p>Bsc in CSE &#40;Computer Science &#38; Engineering&#41;</p>
                        <small>Year:&#40;2015-2019&#41;</small>
                        <small className="">University of Chittagong</small>
                    </div>
                </div>
                <div class="card max-w-lg bg-base-100 shadow-xl my-2 p-2">
                    <div class="card-body">
                        <h2 class="card-title">Skills</h2>

                        <small><span className="font-semibold">FrontEnd:</span>JavaScript ,ReactJs, HTML, CSS, Bootstrap, Tailwind</small>
                        <small><span className="font-semibold">BackEnd:</span>Java, Nodejs, ExpressJs </small>
                        <small><span className="font-semibold">Database:</span>PostgreSql, Oracle, Mysql, MongoDB </small>
                    </div>
                </div>
                <div class="card max-w-lg bg-base-100 shadow-xl my-2 p-2">
                    <div class="card-body">
                        <h2 class="card-title">Experience</h2>
                        <p>Southern Cross Systems Limited, Miyazaki ,Japan</p>
                        <small>Year:&#40;April,2021-March,2022&#41;</small>
                        <small className="">Worked With Java, VB Script, ASP.Net framework</small>
                    </div>
                </div>
            </div>
            <div className="divider px-12 "></div>
            <div className="px-12 my-8">

                <h2 className="text-center text-3xl"> My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                    <div class="card max-w-lg bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title">Halal Food Japan</h2>
                            <p>This Project is A website of a WareHouse. Where user can register,login .User can see and _items , blogs without Logging in to the site.To Manage Inventory like deleting any items or add new Items user must logged
                                in to his/her account.</p>
                        </div>
                        <div class="card-actions justify-center mb-4">
                            <a href="https://halal-food-japan.web.app/" class="btn bg-zinc-600 text-white">Visit Live Site</a>
                        </div>
                    </div>
                    <div class="card max-w-lg bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title">Decor Canvas</h2>
                            <p>This Project is A website of a Individual Interior Design, where user can register, login to book any services.
                                User can see services , blogs Reviews of Clients without Logging in to the site.</p>
                        </div>
                        <div class="card-actions justify-center mb-4">
                            <a href="https://decor-canvas.netlify.app/" class="btn bg-zinc-600 text-white">Visit Live Site</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;

const menuToggle = document.getElementById("menu-toggle");
const mobileSidebar = document.getElementById("mobile-sidebar");
const menuClosed = document.getElementById("menu-closed")
const modeButton = document.getElementById("modechange-button")
const navigationBar = document.getElementById("navigation-bar")


//  Responsive nav menu
menuToggle.addEventListener("click", () => {
    mobileSidebar.classList.toggle("hidden");
});

menuClosed.addEventListener("click", () => {
    mobileSidebar.classList.toggle("hidden")
})


// Mode change Light Dark

modeButton.addEventListener("click", () => {
    navigationBar.classList.toggle("bg-black" ? "bg-white" : "bg-black")
    // modeButton.classList.toggle("text-white" ? "text-black" : "text-white")
    modeButton.classList.toggle("text-white")
    modeButton.classList.toggle("text-black")
})


// Installation

const sideInstallation = () => {
    const container = document.getElementById('content-section');
    container.innerHTML = `
                        <div class="flex w-full ">
                    <div
                        class="md:w-[70%] w-[75%] flex justify-center overflow-scroll pt-10 border border-gray-700 border-t-0 border-dashed h-screen">
                        <div class="w-[80%] flex flex-col gap-5">
                            <h1 class="text-gray-400 flex gap-4">Docs <p class="text-gray-200">></p>
                                <p class="text-white ">Installation</p>
                            </h1>
                            <div class="flex flex-col gap-2">
                                <h1 class="text-white text-2xl font-bold ">Installation</h1>
                                <p class="text-gray-400">shadcn/ui is a set of beautifully-designed, accessible
                                    components
                                    and a
                                    code distribution platform...</p>
                                <!-- Rest of your content here -->
                            </div>
                        </div>
                    </div>

                    <div
                        class="w-[30%]  px-8 pt-10 flex flex-col gap-5 min-h-screen border border-l-0 border-t-0 border-dashed border-gray-700 ">
                        <div class="">
                            <h1 class="text-white text-sm">On This Page</h1>
                        </div>
                        <div class="flex flex-col gap-2">
                            <p
                                class="text-gray-500 hover:text-white focus:text-white duration-200 w-fit cursor-pointer text-sm">
                                Open Code</p>
                            <p
                                class="text-gray-500 hover:text-white focus:text-white duration-200 w-fit cursor-pointer text-sm">
                                Composition</p>
                            <p
                                class="text-gray-500 hover:text-white focus:text-white duration-200 w-fit cursor-pointer text-sm">
                                Distribution</p>
                            <p
                                class="text-gray-500 hover:text-white focus:text-white duration-200 w-fit cursor-pointer text-sm">
                                Beautiful Defaults</p>
                            <p
                                class="text-gray-500 hover:text-white focus:text-white duration-200 w-fit cursor-pointer text-sm">
                                AI-Ready</p>
                        </div>
                        <div class="border border-gray-700 md:flex hidden flex-col gap-3 w-64 pl-4 py-4 rounded-lg">
                            <h1 class="text-white font-bold text-lg">Deploy your shadcn/ui <br>app on Vercel</h1>
                            <p class="text-white text-sm">Trusted by OpenAI, Sonos, <br>Chick-fil-A, and more.</p>
                            <p class="text-white text-sm">Vercel provides tools and <br>infrastructure to deploy apps
                                <br>and
                                features at scale.
                            </p>
                            <button class="cursor-pointer bg-white w-fit px-3 py-1 rounded-lg text-sm">Deploy
                                Now</button>
                        </div>
                    </div>
                </div>
                    `;
}


// Buttons

const sideButtons = () => {
    const container = document.getElementById('content-section');
    container.innerHTML = `
                <div class="flex w-full ">
                    <div
                        class="w-full flex justify-center overflow-scroll pt-10 border border-gray-700 border-t-0 border-dashed h-screen">
                        <div class="w-[95%]  flex flex-col gap-5">
                            <h1 class="text-gray-400 flex gap-4">Docs <p class="text-gray-200">></p>
                                <p class="text-white ">Buttons</p>
                            </h1>
                            <div class="flex flex-col gap-2">
                                <h1 class="text-white text-2xl font-bold ">Buttons</h1>
                                <p class="text-gray-400">Open-Source buttons made with CSS or Tailwind</p>
                            </div>

                            <div class=" flex items-center gap-5 h-10 w-full">
                                <h1 class="w-[20%] border-r text-white">First Page</h1>
                                <p class="border cursor-pointer text-white px-5 py-1 rounded-lg hover:bg-gray-500">All
                                </p>
                                <p class="border cursor-pointer text-white px-5 py-1 rounded-lg hover:bg-gray-500">
                                    Tailwind</p>
                                <p class="border cursor-pointer text-white px-5 py-1 rounded-lg hover:bg-gray-500">CSS
                                </p>
                                <select
                                    class="border px-5 py-1 rounded-lg hover:bg-gray-500 outline-0 bg-black text-white"
                                    name="Sort" id="Sort">
                                    <option value="Randomized">Randomized</option>
                                    <option value="Favorites">Favorites</option>
                                    <option value="Views">Views</option>
                                    <option value="Recent">Recent</option>
                                </select>
                                <select
                                    class="border px-5 py-1 rounded-lg hover:bg-gray-500 outline-0 bg-black text-white"
                                    name="Sort" id="Sort">
                                    <option value="Randomized">Any Theme</option>
                                    <option value="Favorites">Dark</option>
                                    <option value="Views">Light</option>
                                </select>
                                <!-- <p class="border text-white px-5 py-1 rounded-lg hover:bg-gray-500">Any Theme</p> -->
                                <input type="text"
                                    class="px-2 bg-gray-700 text-white py-1 border rounded-lg focus:border-sky-500 outline-0"
                                    size="28" placeholder="Search tags, usser, post...">

                            </div>

                            <div class="w-full h-full overflow-scroll  bottom-0 ">

                                <div class="gap-2 justify-between w-full h-[35vh] flex ">
                                    <div class=" w-full">
                                        <div class="w-full border h-[85%] flex justify-center items-center">
                                            <button
                                                class="relative bg-[#4b48ff] text-white font-medium text-[17px] px-4 py-[0.35em] pl-5 h-[2.8em] rounded-[0.9em] flex items-center overflow-hidden cursor-pointer shadow-[inset_0_0_1.6em_-0.6em_#714da6] group">
                                                <span class="mr-10">Get started</span>
                                                <div
                                                    class="absolute right-[0.3em] bg-white h-[2.2em] w-[2.2em] rounded-[0.7em] flex items-center justify-center transition-all duration-300 group-hover:w-[calc(100%-0.6em)] shadow-[0.1em_0.1em_0.6em_0.2em_#7b52b9] active:scale-95">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        width="24" height="24"
                                                        class="w-[1.1em] transition-transform duration-300 text-[#7b52b9] group-hover:translate-x-[0.1em]">
                                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                                        <path fill="currentColor"
                                                            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z">
                                                        </path>
                                                    </svg>
                                                </div>
                                            </button>

                                        </div>
                                    </div>
                                    <div class=" w-full">
                                        <div class="w-full border h-[85%] flex justify-center items-center">
                                            <button
                                                class="relative bg-[#4b48ff] text-white font-medium text-[17px] px-4 py-[0.35em] pl-5 h-[2.8em] rounded-[0.9em] flex items-center overflow-hidden cursor-pointer shadow-[inset_0_0_1.6em_-0.6em_#714da6] group">
                                                <span class="mr-10">Get started</span>
                                                <div
                                                    class="absolute right-[0.3em] bg-white h-[2.2em] w-[2.2em] rounded-[0.7em] flex items-center justify-center transition-all duration-300 group-hover:w-[calc(100%-0.6em)] shadow-[0.1em_0.1em_0.6em_0.2em_#7b52b9] active:scale-95">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        width="24" height="24"
                                                        class="w-[1.1em] transition-transform duration-300 text-[#7b52b9] group-hover:translate-x-[0.1em]">
                                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                                        <path fill="currentColor"
                                                            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z">
                                                        </path>
                                                    </svg>
                                                </div>
                                            </button>

                                        </div>
                                    </div>
                                    <div class=" w-full">
                                        <div class="w-full border h-[85%] flex justify-center items-center">
                                            <button
                                                class="relative bg-[#4b48ff] text-white font-medium text-[17px] px-4 py-[0.35em] pl-5 h-[2.8em] rounded-[0.9em] flex items-center overflow-hidden cursor-pointer shadow-[inset_0_0_1.6em_-0.6em_#714da6] group">
                                                <span class="mr-10">Get started</span>
                                                <div
                                                    class="absolute right-[0.3em] bg-white h-[2.2em] w-[2.2em] rounded-[0.7em] flex items-center justify-center transition-all duration-300 group-hover:w-[calc(100%-0.6em)] shadow-[0.1em_0.1em_0.6em_0.2em_#7b52b9] active:scale-95">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        width="24" height="24"
                                                        class="w-[1.1em] transition-transform duration-300 text-[#7b52b9] group-hover:translate-x-[0.1em]">
                                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                                        <path fill="currentColor"
                                                            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z">
                                                        </path>
                                                    </svg>
                                                </div>
                                            </button>

                                        </div>
                                    </div>
                                </div>

                                <div class="gap-2 justify-between w-full h-[35vh] flex ">
                                    <div class=" w-full">
                                        <div class="w-full border h-[85%] flex justify-center items-center">
                                            <button
                                                class="relative bg-[#4b48ff] text-white font-medium text-[17px] px-4 py-[0.35em] pl-5 h-[2.8em] rounded-[0.9em] flex items-center overflow-hidden cursor-pointer shadow-[inset_0_0_1.6em_-0.6em_#714da6] group">
                                                <span class="mr-10">Get started</span>
                                                <div
                                                    class="absolute right-[0.3em] bg-white h-[2.2em] w-[2.2em] rounded-[0.7em] flex items-center justify-center transition-all duration-300 group-hover:w-[calc(100%-0.6em)] shadow-[0.1em_0.1em_0.6em_0.2em_#7b52b9] active:scale-95">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        width="24" height="24"
                                                        class="w-[1.1em] transition-transform duration-300 text-[#7b52b9] group-hover:translate-x-[0.1em]">
                                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                                        <path fill="currentColor"
                                                            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z">
                                                        </path>
                                                    </svg>
                                                </div>
                                            </button>

                                        </div>
                                    </div>
                                    <div class=" w-full">
                                        <div class="w-full border h-[85%] flex justify-center items-center">
                                            <button
                                                class="relative bg-[#4b48ff] text-white font-medium text-[17px] px-4 py-[0.35em] pl-5 h-[2.8em] rounded-[0.9em] flex items-center overflow-hidden cursor-pointer shadow-[inset_0_0_1.6em_-0.6em_#714da6] group">
                                                <span class="mr-10">Get started</span>
                                                <div
                                                    class="absolute right-[0.3em] bg-white h-[2.2em] w-[2.2em] rounded-[0.7em] flex items-center justify-center transition-all duration-300 group-hover:w-[calc(100%-0.6em)] shadow-[0.1em_0.1em_0.6em_0.2em_#7b52b9] active:scale-95">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        width="24" height="24"
                                                        class="w-[1.1em] transition-transform duration-300 text-[#7b52b9] group-hover:translate-x-[0.1em]">
                                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                                        <path fill="currentColor"
                                                            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z">
                                                        </path>
                                                    </svg>
                                                </div>
                                            </button>

                                        </div>
                                    </div>
                                    <div class=" w-full">
                                        <div class="w-full border h-[85%] flex justify-center items-center">
                                            <button
                                                class="relative bg-[#4b48ff] text-white font-medium text-[17px] px-4 py-[0.35em] pl-5 h-[2.8em] rounded-[0.9em] flex items-center overflow-hidden cursor-pointer shadow-[inset_0_0_1.6em_-0.6em_#714da6] group">
                                                <span class="mr-10">Get started</span>
                                                <div
                                                    class="absolute right-[0.3em] bg-white h-[2.2em] w-[2.2em] rounded-[0.7em] flex items-center justify-center transition-all duration-300 group-hover:w-[calc(100%-0.6em)] shadow-[0.1em_0.1em_0.6em_0.2em_#7b52b9] active:scale-95">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        width="24" height="24"
                                                        class="w-[1.1em] transition-transform duration-300 text-[#7b52b9] group-hover:translate-x-[0.1em]">
                                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                                        <path fill="currentColor"
                                                            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z">
                                                        </path>
                                                    </svg>
                                                </div>
                                            </button>

                                        </div>
                                    </div>
                                </div>

                                <div class="gap-2 justify-between w-full h-[35vh] flex ">
                                    <div class=" w-full">
                                        <div class="w-full border h-[85%] flex justify-center items-center">
                                            <button
                                                class="relative bg-[#4b48ff] text-white font-medium text-[17px] px-4 py-[0.35em] pl-5 h-[2.8em] rounded-[0.9em] flex items-center overflow-hidden cursor-pointer shadow-[inset_0_0_1.6em_-0.6em_#714da6] group">
                                                <span class="mr-10">Get started</span>
                                                <div
                                                    class="absolute right-[0.3em] bg-white h-[2.2em] w-[2.2em] rounded-[0.7em] flex items-center justify-center transition-all duration-300 group-hover:w-[calc(100%-0.6em)] shadow-[0.1em_0.1em_0.6em_0.2em_#7b52b9] active:scale-95">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        width="24" height="24"
                                                        class="w-[1.1em] transition-transform duration-300 text-[#7b52b9] group-hover:translate-x-[0.1em]">
                                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                                        <path fill="currentColor"
                                                            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z">
                                                        </path>
                                                    </svg>
                                                </div>
                                            </button>

                                        </div>
                                    </div>
                                    <div class=" w-full">
                                        <div class="w-full border h-[85%] flex justify-center items-center">
                                            <button
                                                class="relative bg-[#4b48ff] text-white font-medium text-[17px] px-4 py-[0.35em] pl-5 h-[2.8em] rounded-[0.9em] flex items-center overflow-hidden cursor-pointer shadow-[inset_0_0_1.6em_-0.6em_#714da6] group">
                                                <span class="mr-10">Get started</span>
                                                <div
                                                    class="absolute right-[0.3em] bg-white h-[2.2em] w-[2.2em] rounded-[0.7em] flex items-center justify-center transition-all duration-300 group-hover:w-[calc(100%-0.6em)] shadow-[0.1em_0.1em_0.6em_0.2em_#7b52b9] active:scale-95">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        width="24" height="24"
                                                        class="w-[1.1em] transition-transform duration-300 text-[#7b52b9] group-hover:translate-x-[0.1em]">
                                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                                        <path fill="currentColor"
                                                            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z">
                                                        </path>
                                                    </svg>
                                                </div>
                                            </button>

                                        </div>
                                    </div>
                                    <div class=" w-full">
                                        <div class="w-full border h-[85%] flex justify-center items-center">
                                            <button
                                                class="relative bg-[#4b48ff] text-white font-medium text-[17px] px-4 py-[0.35em] pl-5 h-[2.8em] rounded-[0.9em] flex items-center overflow-hidden cursor-pointer shadow-[inset_0_0_1.6em_-0.6em_#714da6] group">
                                                <span class="mr-10">Get started</span>
                                                <div
                                                    class="absolute right-[0.3em] bg-white h-[2.2em] w-[2.2em] rounded-[0.7em] flex items-center justify-center transition-all duration-300 group-hover:w-[calc(100%-0.6em)] shadow-[0.1em_0.1em_0.6em_0.2em_#7b52b9] active:scale-95">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        width="24" height="24"
                                                        class="w-[1.1em] transition-transform duration-300 text-[#7b52b9] group-hover:translate-x-[0.1em]">
                                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                                        <path fill="currentColor"
                                                            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z">
                                                        </path>
                                                    </svg>
                                                </div>
                                            </button>

                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
                    `;
}

// CheckBoxes

const sideCheckBoxes = () => {
    const container = document.getElementById('content-section');
    container.innerHTML = `
                 <div class="flex w-full ">
                    <div
                        class="w-full flex justify-center overflow-scroll pt-10 border border-gray-700 border-t-0 border-dashed h-screen">
                        <div class="w-[95%]  flex flex-col gap-5">
                            <h1 class="text-gray-400 flex gap-4">Docs <p class="text-gray-200">></p>
                                <p class="text-white ">CheckBoxes</p>
                            </h1>
                            <div class="flex flex-col gap-2">
                                <h1 class="text-white text-2xl font-bold ">CheckBoxes</h1>
                                <p class="text-gray-400">Open-Source CheckBoxes made with CSS or Tailwind</p>
                            </div>

                            <div class=" flex items-center gap-5 h-10 w-full">
                                <h1 class="w-[20%] border-r text-white">First Page</h1>
                                <p class="border cursor-pointer text-white px-5 py-1 rounded-lg hover:bg-gray-500">All
                                </p>
                                <p class="border cursor-pointer text-white px-5 py-1 rounded-lg hover:bg-gray-500">
                                    Tailwind</p>
                                <p class="border cursor-pointer text-white px-5 py-1 rounded-lg hover:bg-gray-500">CSS
                                </p>
                                <select
                                    class="border px-5 py-1 rounded-lg hover:bg-gray-500 outline-0 bg-black text-white"
                                    name="Sort" id="Sort">
                                    <option value="Randomized">Randomized</option>
                                    <option value="Favorites">Favorites</option>
                                    <option value="Views">Views</option>
                                    <option value="Recent">Recent</option>
                                </select>
                                <select
                                    class="border px-5 py-1 rounded-lg hover:bg-gray-500 outline-0 bg-black text-white"
                                    name="Sort" id="Sort">
                                    <option value="Randomized">Any Theme</option>
                                    <option value="Favorites">Dark</option>
                                    <option value="Views">Light</option>
                                </select>
                                <!-- <p class="border text-white px-5 py-1 rounded-lg hover:bg-gray-500">Any Theme</p> -->
                                <input type="text"
                                    class="px-2 bg-gray-700 text-white py-1 border rounded-lg focus:border-sky-500 outline-0"
                                    size="28" placeholder="Search tags, usser, post...">

                            </div>

                            <div class="w-full h-full overflow-scroll  bottom-0 ">
                                <div class="gap-2 justify-between w-full h-[35vh] flex ">

                                    <div class=" w-full">
                                        <div
                                            class="w-full  border h-[85%] bg-gray-600 flex items-center justify-center ">
                                            <label title="Tap to light"
                                                class="relative flex flex-col items-center justify-center">
                                                <input type="checkbox" class="peer hidden" />
                                                <div
                                                    class="absolute bottom-[55px] mx-auto mt-10 h-[0px] w-[60px] overflow-hidden rounded-2xl bg-gradient-to-t from-[#ffff] duration-500 peer-checked:h-[100px] before:absolute before:h-full before:w-[15px] before:origin-bottom-right before:-rotate-[12deg] before:bg-gray-600 after:absolute after:right-0 after:h-full after:w-[15px] after:origin-bottom-left after:rotate-[12deg] after:bg-gray-600">
                                                </div>
                                                <svg height="50" width="50" class="-rotate-45 cursor-pointer"
                                                    viewBox="0 0 50 50">
                                                    <path fill="#00000"
                                                        d="M31.925 27.325q-.54-.26-.985-.671-3.875-3.596-7.785-7.81-1.215-1.315-1.01-3.079.11-.985 1.125-2.829 4.806-8.74 6.26-11.156.765-1.265 2.385-.575 1.95.829 3.64 2.071.871.635 3.2 2.654 5.8 5.029 9.715 11.1 1.575 2.446-.85 3.835-5.735 3.29-11.54 6.454-1.96 1.065-4.154.004M7.015 33.146q6.685-7.317 13.271-14.481a.27.27 52.1 0 1 .435.054q.904 1.64 2.071 2.8 1.04 1.035 1.065 1.065 3.479 3.704 7.446 6.879a.221.215 43 0 1 .015.329q-9.881 9.144-19.931 18.098-1.01.9-1.785 1.075-1.24.279-2.196-.496-3.965-3.235-6-6-.671-.915-.39-2.05.171-.704 1.004-1.665 2.465-2.835 4.996-5.61m14.448-4.556a1.875 1.875 0 0 0-2.658-.042l-2.219 2.15a1.875 1.875 0 0 0-.042 2.658l.131.135a1.875 1.875 0 0 0 2.658.042l2.219-2.15a1.875 1.875 0 0 0 .042-2.658z">
                                                    </path>
                                                </svg>
                                            </label>
                                        </div>
                                    </div>

                                    <div class=" w-full">
                                        <div
                                            class="w-full  border h-[85%] bg-gray-600 flex items-center justify-center ">
                                            <label title="Tap to light"
                                                class="relative flex flex-col items-center justify-center">
                                                <input type="checkbox" class="peer hidden" />
                                                <div
                                                    class="absolute bottom-[55px] mx-auto mt-10 h-[0px] w-[60px] overflow-hidden rounded-2xl bg-gradient-to-t from-[#ffff] duration-500 peer-checked:h-[100px] before:absolute before:h-full before:w-[15px] before:origin-bottom-right before:-rotate-[12deg] before:bg-gray-600 after:absolute after:right-0 after:h-full after:w-[15px] after:origin-bottom-left after:rotate-[12deg] after:bg-gray-600">
                                                </div>
                                                <svg height="50" width="50" class="-rotate-45 cursor-pointer"
                                                    viewBox="0 0 50 50">
                                                    <path fill="#00000"
                                                        d="M31.925 27.325q-.54-.26-.985-.671-3.875-3.596-7.785-7.81-1.215-1.315-1.01-3.079.11-.985 1.125-2.829 4.806-8.74 6.26-11.156.765-1.265 2.385-.575 1.95.829 3.64 2.071.871.635 3.2 2.654 5.8 5.029 9.715 11.1 1.575 2.446-.85 3.835-5.735 3.29-11.54 6.454-1.96 1.065-4.154.004M7.015 33.146q6.685-7.317 13.271-14.481a.27.27 52.1 0 1 .435.054q.904 1.64 2.071 2.8 1.04 1.035 1.065 1.065 3.479 3.704 7.446 6.879a.221.215 43 0 1 .015.329q-9.881 9.144-19.931 18.098-1.01.9-1.785 1.075-1.24.279-2.196-.496-3.965-3.235-6-6-.671-.915-.39-2.05.171-.704 1.004-1.665 2.465-2.835 4.996-5.61m14.448-4.556a1.875 1.875 0 0 0-2.658-.042l-2.219 2.15a1.875 1.875 0 0 0-.042 2.658l.131.135a1.875 1.875 0 0 0 2.658.042l2.219-2.15a1.875 1.875 0 0 0 .042-2.658z">
                                                    </path>
                                                </svg>
                                            </label>
                                        </div>
                                    </div>
                                    <div class=" w-full">
                                        <div
                                            class="w-full  border h-[85%] bg-gray-600 flex items-center justify-center ">
                                            <label title="Tap to light"
                                                class="relative flex flex-col items-center justify-center">
                                                <input type="checkbox" class="peer hidden" />
                                                <div
                                                    class="absolute bottom-[55px] mx-auto mt-10 h-[0px] w-[60px] overflow-hidden rounded-2xl bg-gradient-to-t from-[#ffff] duration-500 peer-checked:h-[100px] before:absolute before:h-full before:w-[15px] before:origin-bottom-right before:-rotate-[12deg] before:bg-gray-600 after:absolute after:right-0 after:h-full after:w-[15px] after:origin-bottom-left after:rotate-[12deg] after:bg-gray-600">
                                                </div>
                                                <svg height="50" width="50" class="-rotate-45 cursor-pointer"
                                                    viewBox="0 0 50 50">
                                                    <path fill="#00000"
                                                        d="M31.925 27.325q-.54-.26-.985-.671-3.875-3.596-7.785-7.81-1.215-1.315-1.01-3.079.11-.985 1.125-2.829 4.806-8.74 6.26-11.156.765-1.265 2.385-.575 1.95.829 3.64 2.071.871.635 3.2 2.654 5.8 5.029 9.715 11.1 1.575 2.446-.85 3.835-5.735 3.29-11.54 6.454-1.96 1.065-4.154.004M7.015 33.146q6.685-7.317 13.271-14.481a.27.27 52.1 0 1 .435.054q.904 1.64 2.071 2.8 1.04 1.035 1.065 1.065 3.479 3.704 7.446 6.879a.221.215 43 0 1 .015.329q-9.881 9.144-19.931 18.098-1.01.9-1.785 1.075-1.24.279-2.196-.496-3.965-3.235-6-6-.671-.915-.39-2.05.171-.704 1.004-1.665 2.465-2.835 4.996-5.61m14.448-4.556a1.875 1.875 0 0 0-2.658-.042l-2.219 2.15a1.875 1.875 0 0 0-.042 2.658l.131.135a1.875 1.875 0 0 0 2.658.042l2.219-2.15a1.875 1.875 0 0 0 .042-2.658z">
                                                    </path>
                                                </svg>
                                            </label>
                                        </div>
                                    </div>

                                </div>
                                <div class="gap-2 justify-between w-full h-[35vh] flex ">

                                    <div class=" w-full">
                                        <div
                                            class="w-full  border h-[85%] bg-gray-600 flex items-center justify-center ">
                                            <label title="Tap to light"
                                                class="relative flex flex-col items-center justify-center">
                                                <input type="checkbox" class="peer hidden" />
                                                <div
                                                    class="absolute bottom-[55px] mx-auto mt-10 h-[0px] w-[60px] overflow-hidden rounded-2xl bg-gradient-to-t from-[#ffff] duration-500 peer-checked:h-[100px] before:absolute before:h-full before:w-[15px] before:origin-bottom-right before:-rotate-[12deg] before:bg-gray-600 after:absolute after:right-0 after:h-full after:w-[15px] after:origin-bottom-left after:rotate-[12deg] after:bg-gray-600">
                                                </div>
                                                <svg height="50" width="50" class="-rotate-45 cursor-pointer"
                                                    viewBox="0 0 50 50">
                                                    <path fill="#00000"
                                                        d="M31.925 27.325q-.54-.26-.985-.671-3.875-3.596-7.785-7.81-1.215-1.315-1.01-3.079.11-.985 1.125-2.829 4.806-8.74 6.26-11.156.765-1.265 2.385-.575 1.95.829 3.64 2.071.871.635 3.2 2.654 5.8 5.029 9.715 11.1 1.575 2.446-.85 3.835-5.735 3.29-11.54 6.454-1.96 1.065-4.154.004M7.015 33.146q6.685-7.317 13.271-14.481a.27.27 52.1 0 1 .435.054q.904 1.64 2.071 2.8 1.04 1.035 1.065 1.065 3.479 3.704 7.446 6.879a.221.215 43 0 1 .015.329q-9.881 9.144-19.931 18.098-1.01.9-1.785 1.075-1.24.279-2.196-.496-3.965-3.235-6-6-.671-.915-.39-2.05.171-.704 1.004-1.665 2.465-2.835 4.996-5.61m14.448-4.556a1.875 1.875 0 0 0-2.658-.042l-2.219 2.15a1.875 1.875 0 0 0-.042 2.658l.131.135a1.875 1.875 0 0 0 2.658.042l2.219-2.15a1.875 1.875 0 0 0 .042-2.658z">
                                                    </path>
                                                </svg>
                                            </label>
                                        </div>
                                    </div>

                                    <div class=" w-full">
                                        <div
                                            class="w-full  border h-[85%] bg-gray-600 flex items-center justify-center ">
                                            <label title="Tap to light"
                                                class="relative flex flex-col items-center justify-center">
                                                <input type="checkbox" class="peer hidden" />
                                                <div
                                                    class="absolute bottom-[55px] mx-auto mt-10 h-[0px] w-[60px] overflow-hidden rounded-2xl bg-gradient-to-t from-[#ffff] duration-500 peer-checked:h-[100px] before:absolute before:h-full before:w-[15px] before:origin-bottom-right before:-rotate-[12deg] before:bg-gray-600 after:absolute after:right-0 after:h-full after:w-[15px] after:origin-bottom-left after:rotate-[12deg] after:bg-gray-600">
                                                </div>
                                                <svg height="50" width="50" class="-rotate-45 cursor-pointer"
                                                    viewBox="0 0 50 50">
                                                    <path fill="#00000"
                                                        d="M31.925 27.325q-.54-.26-.985-.671-3.875-3.596-7.785-7.81-1.215-1.315-1.01-3.079.11-.985 1.125-2.829 4.806-8.74 6.26-11.156.765-1.265 2.385-.575 1.95.829 3.64 2.071.871.635 3.2 2.654 5.8 5.029 9.715 11.1 1.575 2.446-.85 3.835-5.735 3.29-11.54 6.454-1.96 1.065-4.154.004M7.015 33.146q6.685-7.317 13.271-14.481a.27.27 52.1 0 1 .435.054q.904 1.64 2.071 2.8 1.04 1.035 1.065 1.065 3.479 3.704 7.446 6.879a.221.215 43 0 1 .015.329q-9.881 9.144-19.931 18.098-1.01.9-1.785 1.075-1.24.279-2.196-.496-3.965-3.235-6-6-.671-.915-.39-2.05.171-.704 1.004-1.665 2.465-2.835 4.996-5.61m14.448-4.556a1.875 1.875 0 0 0-2.658-.042l-2.219 2.15a1.875 1.875 0 0 0-.042 2.658l.131.135a1.875 1.875 0 0 0 2.658.042l2.219-2.15a1.875 1.875 0 0 0 .042-2.658z">
                                                    </path>
                                                </svg>
                                            </label>
                                        </div>
                                    </div>
                                    <div class=" w-full">
                                        <div
                                            class="w-full  border h-[85%] bg-gray-600 flex items-center justify-center ">
                                            <label title="Tap to light"
                                                class="relative flex flex-col items-center justify-center">
                                                <input type="checkbox" class="peer hidden" />
                                                <div
                                                    class="absolute bottom-[55px] mx-auto mt-10 h-[0px] w-[60px] overflow-hidden rounded-2xl bg-gradient-to-t from-[#ffff] duration-500 peer-checked:h-[100px] before:absolute before:h-full before:w-[15px] before:origin-bottom-right before:-rotate-[12deg] before:bg-gray-600 after:absolute after:right-0 after:h-full after:w-[15px] after:origin-bottom-left after:rotate-[12deg] after:bg-gray-600">
                                                </div>
                                                <svg height="50" width="50" class="-rotate-45 cursor-pointer"
                                                    viewBox="0 0 50 50">
                                                    <path fill="#00000"
                                                        d="M31.925 27.325q-.54-.26-.985-.671-3.875-3.596-7.785-7.81-1.215-1.315-1.01-3.079.11-.985 1.125-2.829 4.806-8.74 6.26-11.156.765-1.265 2.385-.575 1.95.829 3.64 2.071.871.635 3.2 2.654 5.8 5.029 9.715 11.1 1.575 2.446-.85 3.835-5.735 3.29-11.54 6.454-1.96 1.065-4.154.004M7.015 33.146q6.685-7.317 13.271-14.481a.27.27 52.1 0 1 .435.054q.904 1.64 2.071 2.8 1.04 1.035 1.065 1.065 3.479 3.704 7.446 6.879a.221.215 43 0 1 .015.329q-9.881 9.144-19.931 18.098-1.01.9-1.785 1.075-1.24.279-2.196-.496-3.965-3.235-6-6-.671-.915-.39-2.05.171-.704 1.004-1.665 2.465-2.835 4.996-5.61m14.448-4.556a1.875 1.875 0 0 0-2.658-.042l-2.219 2.15a1.875 1.875 0 0 0-.042 2.658l.131.135a1.875 1.875 0 0 0 2.658.042l2.219-2.15a1.875 1.875 0 0 0 .042-2.658z">
                                                    </path>
                                                </svg>
                                            </label>
                                        </div>
                                    </div>

                                </div>
                                <div class="gap-2 justify-between w-full h-[35vh] flex ">

                                    <div class=" w-full">
                                        <div
                                            class="w-full  border h-[85%] bg-gray-600 flex items-center justify-center ">
                                            <label title="Tap to light"
                                                class="relative flex flex-col items-center justify-center">
                                                <input type="checkbox" class="peer hidden" />
                                                <div
                                                    class="absolute bottom-[55px] mx-auto mt-10 h-[0px] w-[60px] overflow-hidden rounded-2xl bg-gradient-to-t from-[#ffff] duration-500 peer-checked:h-[100px] before:absolute before:h-full before:w-[15px] before:origin-bottom-right before:-rotate-[12deg] before:bg-gray-600 after:absolute after:right-0 after:h-full after:w-[15px] after:origin-bottom-left after:rotate-[12deg] after:bg-gray-600">
                                                </div>
                                                <svg height="50" width="50" class="-rotate-45 cursor-pointer"
                                                    viewBox="0 0 50 50">
                                                    <path fill="#00000"
                                                        d="M31.925 27.325q-.54-.26-.985-.671-3.875-3.596-7.785-7.81-1.215-1.315-1.01-3.079.11-.985 1.125-2.829 4.806-8.74 6.26-11.156.765-1.265 2.385-.575 1.95.829 3.64 2.071.871.635 3.2 2.654 5.8 5.029 9.715 11.1 1.575 2.446-.85 3.835-5.735 3.29-11.54 6.454-1.96 1.065-4.154.004M7.015 33.146q6.685-7.317 13.271-14.481a.27.27 52.1 0 1 .435.054q.904 1.64 2.071 2.8 1.04 1.035 1.065 1.065 3.479 3.704 7.446 6.879a.221.215 43 0 1 .015.329q-9.881 9.144-19.931 18.098-1.01.9-1.785 1.075-1.24.279-2.196-.496-3.965-3.235-6-6-.671-.915-.39-2.05.171-.704 1.004-1.665 2.465-2.835 4.996-5.61m14.448-4.556a1.875 1.875 0 0 0-2.658-.042l-2.219 2.15a1.875 1.875 0 0 0-.042 2.658l.131.135a1.875 1.875 0 0 0 2.658.042l2.219-2.15a1.875 1.875 0 0 0 .042-2.658z">
                                                    </path>
                                                </svg>
                                            </label>
                                        </div>
                                    </div>

                                    <div class=" w-full">
                                        <div
                                            class="w-full  border h-[85%] bg-gray-600 flex items-center justify-center ">
                                            <label title="Tap to light"
                                                class="relative flex flex-col items-center justify-center">
                                                <input type="checkbox" class="peer hidden" />
                                                <div
                                                    class="absolute bottom-[55px] mx-auto mt-10 h-[0px] w-[60px] overflow-hidden rounded-2xl bg-gradient-to-t from-[#ffff] duration-500 peer-checked:h-[100px] before:absolute before:h-full before:w-[15px] before:origin-bottom-right before:-rotate-[12deg] before:bg-gray-600 after:absolute after:right-0 after:h-full after:w-[15px] after:origin-bottom-left after:rotate-[12deg] after:bg-gray-600">
                                                </div>
                                                <svg height="50" width="50" class="-rotate-45 cursor-pointer"
                                                    viewBox="0 0 50 50">
                                                    <path fill="#00000"
                                                        d="M31.925 27.325q-.54-.26-.985-.671-3.875-3.596-7.785-7.81-1.215-1.315-1.01-3.079.11-.985 1.125-2.829 4.806-8.74 6.26-11.156.765-1.265 2.385-.575 1.95.829 3.64 2.071.871.635 3.2 2.654 5.8 5.029 9.715 11.1 1.575 2.446-.85 3.835-5.735 3.29-11.54 6.454-1.96 1.065-4.154.004M7.015 33.146q6.685-7.317 13.271-14.481a.27.27 52.1 0 1 .435.054q.904 1.64 2.071 2.8 1.04 1.035 1.065 1.065 3.479 3.704 7.446 6.879a.221.215 43 0 1 .015.329q-9.881 9.144-19.931 18.098-1.01.9-1.785 1.075-1.24.279-2.196-.496-3.965-3.235-6-6-.671-.915-.39-2.05.171-.704 1.004-1.665 2.465-2.835 4.996-5.61m14.448-4.556a1.875 1.875 0 0 0-2.658-.042l-2.219 2.15a1.875 1.875 0 0 0-.042 2.658l.131.135a1.875 1.875 0 0 0 2.658.042l2.219-2.15a1.875 1.875 0 0 0 .042-2.658z">
                                                    </path>
                                                </svg>
                                            </label>
                                        </div>
                                    </div>
                                    <div class=" w-full">
                                        <div
                                            class="w-full  border h-[85%] bg-gray-600 flex items-center justify-center ">
                                            <label title="Tap to light"
                                                class="relative flex flex-col items-center justify-center">
                                                <input type="checkbox" class="peer hidden" />
                                                <div
                                                    class="absolute bottom-[55px] mx-auto mt-10 h-[0px] w-[60px] overflow-hidden rounded-2xl bg-gradient-to-t from-[#ffff] duration-500 peer-checked:h-[100px] before:absolute before:h-full before:w-[15px] before:origin-bottom-right before:-rotate-[12deg] before:bg-gray-600 after:absolute after:right-0 after:h-full after:w-[15px] after:origin-bottom-left after:rotate-[12deg] after:bg-gray-600">
                                                </div>
                                                <svg height="50" width="50" class="-rotate-45 cursor-pointer"
                                                    viewBox="0 0 50 50">
                                                    <path fill="#00000"
                                                        d="M31.925 27.325q-.54-.26-.985-.671-3.875-3.596-7.785-7.81-1.215-1.315-1.01-3.079.11-.985 1.125-2.829 4.806-8.74 6.26-11.156.765-1.265 2.385-.575 1.95.829 3.64 2.071.871.635 3.2 2.654 5.8 5.029 9.715 11.1 1.575 2.446-.85 3.835-5.735 3.29-11.54 6.454-1.96 1.065-4.154.004M7.015 33.146q6.685-7.317 13.271-14.481a.27.27 52.1 0 1 .435.054q.904 1.64 2.071 2.8 1.04 1.035 1.065 1.065 3.479 3.704 7.446 6.879a.221.215 43 0 1 .015.329q-9.881 9.144-19.931 18.098-1.01.9-1.785 1.075-1.24.279-2.196-.496-3.965-3.235-6-6-.671-.915-.39-2.05.171-.704 1.004-1.665 2.465-2.835 4.996-5.61m14.448-4.556a1.875 1.875 0 0 0-2.658-.042l-2.219 2.15a1.875 1.875 0 0 0-.042 2.658l.131.135a1.875 1.875 0 0 0 2.658.042l2.219-2.15a1.875 1.875 0 0 0 .042-2.658z">
                                                    </path>
                                                </svg>
                                            </label>
                                        </div>
                                    </div>

                                </div>


                            </div>

                        </div>
                    </div>
                </div>
                    `;
}

// Toggle Switches

const sideToggleSwitches = () => {
    const container = document.getElementById('content-section');
    container.innerHTML = `
                  <div class="flex w-full ">
                    <div
                        class="w-full flex justify-center overflow-scroll pt-10 border border-gray-700 border-t-0 border-dashed h-screen">
                        <div class="w-[95%]  flex flex-col gap-5">
                            <h1 class="text-gray-400 flex gap-4">Docs <p class="text-gray-200">></p>
                                <p class="text-white ">Toggle - Switches</p>
                            </h1>
                            <div class="flex flex-col gap-2">
                                <h1 class="text-white text-2xl font-bold ">Toggle - Switches</h1>
                                <p class="text-gray-400">Open-Source Toggle - Switches made with CSS or Tailwind</p>
                            </div>

                            <div class=" flex items-center gap-5 h-10 w-full">
                                <h1 class="w-[20%] border-r text-white">First Page</h1>
                                <p class="border cursor-pointer text-white px-5 py-1 rounded-lg hover:bg-gray-500">All
                                </p>
                                <p class="border cursor-pointer text-white px-5 py-1 rounded-lg hover:bg-gray-500">
                                    Tailwind</p>
                                <p class="border cursor-pointer text-white px-5 py-1 rounded-lg hover:bg-gray-500">CSS
                                </p>
                                <select
                                    class="border px-5 py-1 rounded-lg hover:bg-gray-500 outline-0 bg-black text-white"
                                    name="Sort" id="Sort">
                                    <option value="Randomized">Randomized</option>
                                    <option value="Favorites">Favorites</option>
                                    <option value="Views">Views</option>
                                    <option value="Recent">Recent</option>
                                </select>
                                <select
                                    class="border px-5 py-1 rounded-lg hover:bg-gray-500 outline-0 bg-black text-white"
                                    name="Sort" id="Sort">
                                    <option value="Randomized">Any Theme</option>
                                    <option value="Favorites">Dark</option>
                                    <option value="Views">Light</option>
                                </select>
                                <!-- <p class="border text-white px-5 py-1 rounded-lg hover:bg-gray-500">Any Theme</p> -->
                                <input type="text"
                                    class="px-2 bg-gray-700 text-white py-1 border rounded-lg focus:border-sky-500 outline-0"
                                    size="28" placeholder="Search tags, usser, post...">

                            </div>

                            <div class="w-full h-full overflow-scroll  bottom-0 ">
                                <div class="gap-2 justify-between w-full h-[35vh] flex ">
                                    <div class=" w-full">
                                        <div class="w-full border h-[85%] flex justify-center items-center">

                                            <label
                                                class="cursor-pointer relative h-[3em] w-[6em] rounded-full bg-[hsl(0,0%,7%)] shadow-[0px_2px_4px_0px_rgb(18,18,18,0.25),0px_4px_8px_0px_rgb(18,18,18,0.35)]">
                                                <span
                                                    class="absolute inset-[0.1em] rounded-full border-[1px] border-[hsl(0,0%,25%)]"></span>
                                                <div
                                                    class="absolute left-[0.5em] top-1/2 flex h-[2em] w-[2em] -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[inset_0px_2px_2px_0px_hsl(0,0%,85%)]">
                                                    <div
                                                        class="h-[1.5em] w-[1.5em] rounded-full bg-[hsl(0,0%,7%)] shadow-[0px_2px_2px_0px_hsl(0,0%,85%)]">
                                                    </div>
                                                </div>
                                                <div
                                                    class="absolute right-[0.5em] top-1/2 h-[0.25em] w-[1.5em] -translate-y-1/2 rounded-full bg-[hsl(0,0%,50%)] shadow-[inset_0px_2px_1px_0px_hsl(0,0%,40%)]">
                                                </div>
                                                <input class="peer h-[1em] w-[1em] opacity-0" id="" name=""
                                                    type="checkbox" />
                                                <span
                                                    class="absolute left-[0.25em] top-1/2 flex h-[2.5em] w-[2.5em] -translate-y-1/2 items-center justify-center rounded-full bg-[rgb(26,26,26)] shadow-[inset_4px_4px_4px_0px_rgba(64,64,64,0.25),inset_-4px_-4px_4px_0px_rgba(16,16,16,0.5)] duration-300 peer-checked:left-[calc(100%-2.75em)]">
                                                    <span class="relative h-full w-full rounded-full">
                                                        <span
                                                            class="absolute inset-[0.1em] rounded-full border-[1px] border-[hsl(0,0%,50%)]"></span>
                                                    </span>
                                                </span>
                                            </label>


                                        </div>
                                    </div>
                                    <div class=" w-full">
                                        <div class="w-full border h-[85%] flex justify-center items-center">

                                            <label
                                                class="cursor-pointer relative h-[3em] w-[6em] rounded-full bg-[hsl(0,0%,7%)] shadow-[0px_2px_4px_0px_rgb(18,18,18,0.25),0px_4px_8px_0px_rgb(18,18,18,0.35)]">
                                                <span
                                                    class="absolute inset-[0.1em] rounded-full border-[1px] border-[hsl(0,0%,25%)]"></span>
                                                <div
                                                    class="absolute left-[0.5em] top-1/2 flex h-[2em] w-[2em] -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[inset_0px_2px_2px_0px_hsl(0,0%,85%)]">
                                                    <div
                                                        class="h-[1.5em] w-[1.5em] rounded-full bg-[hsl(0,0%,7%)] shadow-[0px_2px_2px_0px_hsl(0,0%,85%)]">
                                                    </div>
                                                </div>
                                                <div
                                                    class="absolute right-[0.5em] top-1/2 h-[0.25em] w-[1.5em] -translate-y-1/2 rounded-full bg-[hsl(0,0%,50%)] shadow-[inset_0px_2px_1px_0px_hsl(0,0%,40%)]">
                                                </div>
                                                <input class="peer h-[1em] w-[1em] opacity-0" id="" name=""
                                                    type="checkbox" />
                                                <span
                                                    class="absolute left-[0.25em] top-1/2 flex h-[2.5em] w-[2.5em] -translate-y-1/2 items-center justify-center rounded-full bg-[rgb(26,26,26)] shadow-[inset_4px_4px_4px_0px_rgba(64,64,64,0.25),inset_-4px_-4px_4px_0px_rgba(16,16,16,0.5)] duration-300 peer-checked:left-[calc(100%-2.75em)]">
                                                    <span class="relative h-full w-full rounded-full">
                                                        <span
                                                            class="absolute inset-[0.1em] rounded-full border-[1px] border-[hsl(0,0%,50%)]"></span>
                                                    </span>
                                                </span>
                                            </label>


                                        </div>
                                    </div>
                                    <div class=" w-full">
                                        <div class="w-full border h-[85%] flex justify-center items-center">

                                            <label
                                                class="cursor-pointer relative h-[3em] w-[6em] rounded-full bg-[hsl(0,0%,7%)] shadow-[0px_2px_4px_0px_rgb(18,18,18,0.25),0px_4px_8px_0px_rgb(18,18,18,0.35)]">
                                                <span
                                                    class="absolute inset-[0.1em] rounded-full border-[1px] border-[hsl(0,0%,25%)]"></span>
                                                <div
                                                    class="absolute left-[0.5em] top-1/2 flex h-[2em] w-[2em] -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[inset_0px_2px_2px_0px_hsl(0,0%,85%)]">
                                                    <div
                                                        class="h-[1.5em] w-[1.5em] rounded-full bg-[hsl(0,0%,7%)] shadow-[0px_2px_2px_0px_hsl(0,0%,85%)]">
                                                    </div>
                                                </div>
                                                <div
                                                    class="absolute right-[0.5em] top-1/2 h-[0.25em] w-[1.5em] -translate-y-1/2 rounded-full bg-[hsl(0,0%,50%)] shadow-[inset_0px_2px_1px_0px_hsl(0,0%,40%)]">
                                                </div>
                                                <input class="peer h-[1em] w-[1em] opacity-0" id="" name=""
                                                    type="checkbox" />
                                                <span
                                                    class="absolute left-[0.25em] top-1/2 flex h-[2.5em] w-[2.5em] -translate-y-1/2 items-center justify-center rounded-full bg-[rgb(26,26,26)] shadow-[inset_4px_4px_4px_0px_rgba(64,64,64,0.25),inset_-4px_-4px_4px_0px_rgba(16,16,16,0.5)] duration-300 peer-checked:left-[calc(100%-2.75em)]">
                                                    <span class="relative h-full w-full rounded-full">
                                                        <span
                                                            class="absolute inset-[0.1em] rounded-full border-[1px] border-[hsl(0,0%,50%)]"></span>
                                                    </span>
                                                </span>
                                            </label>


                                        </div>
                                    </div>
                                </div>
                                <div class="gap-2 justify-between w-full h-[35vh] flex ">
                                    <div class=" w-full">
                                        <div class="w-full border h-[85%] flex justify-center items-center">

                                            <label
                                                class="cursor-pointer relative h-[3em] w-[6em] rounded-full bg-[hsl(0,0%,7%)] shadow-[0px_2px_4px_0px_rgb(18,18,18,0.25),0px_4px_8px_0px_rgb(18,18,18,0.35)]">
                                                <span
                                                    class="absolute inset-[0.1em] rounded-full border-[1px] border-[hsl(0,0%,25%)]"></span>
                                                <div
                                                    class="absolute left-[0.5em] top-1/2 flex h-[2em] w-[2em] -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[inset_0px_2px_2px_0px_hsl(0,0%,85%)]">
                                                    <div
                                                        class="h-[1.5em] w-[1.5em] rounded-full bg-[hsl(0,0%,7%)] shadow-[0px_2px_2px_0px_hsl(0,0%,85%)]">
                                                    </div>
                                                </div>
                                                <div
                                                    class="absolute right-[0.5em] top-1/2 h-[0.25em] w-[1.5em] -translate-y-1/2 rounded-full bg-[hsl(0,0%,50%)] shadow-[inset_0px_2px_1px_0px_hsl(0,0%,40%)]">
                                                </div>
                                                <input class="peer h-[1em] w-[1em] opacity-0" id="" name=""
                                                    type="checkbox" />
                                                <span
                                                    class="absolute left-[0.25em] top-1/2 flex h-[2.5em] w-[2.5em] -translate-y-1/2 items-center justify-center rounded-full bg-[rgb(26,26,26)] shadow-[inset_4px_4px_4px_0px_rgba(64,64,64,0.25),inset_-4px_-4px_4px_0px_rgba(16,16,16,0.5)] duration-300 peer-checked:left-[calc(100%-2.75em)]">
                                                    <span class="relative h-full w-full rounded-full">
                                                        <span
                                                            class="absolute inset-[0.1em] rounded-full border-[1px] border-[hsl(0,0%,50%)]"></span>
                                                    </span>
                                                </span>
                                            </label>


                                        </div>
                                    </div>
                                    <div class=" w-full">
                                        <div class="w-full border h-[85%] flex justify-center items-center">

                                            <label
                                                class="cursor-pointer relative h-[3em] w-[6em] rounded-full bg-[hsl(0,0%,7%)] shadow-[0px_2px_4px_0px_rgb(18,18,18,0.25),0px_4px_8px_0px_rgb(18,18,18,0.35)]">
                                                <span
                                                    class="absolute inset-[0.1em] rounded-full border-[1px] border-[hsl(0,0%,25%)]"></span>
                                                <div
                                                    class="absolute left-[0.5em] top-1/2 flex h-[2em] w-[2em] -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[inset_0px_2px_2px_0px_hsl(0,0%,85%)]">
                                                    <div
                                                        class="h-[1.5em] w-[1.5em] rounded-full bg-[hsl(0,0%,7%)] shadow-[0px_2px_2px_0px_hsl(0,0%,85%)]">
                                                    </div>
                                                </div>
                                                <div
                                                    class="absolute right-[0.5em] top-1/2 h-[0.25em] w-[1.5em] -translate-y-1/2 rounded-full bg-[hsl(0,0%,50%)] shadow-[inset_0px_2px_1px_0px_hsl(0,0%,40%)]">
                                                </div>
                                                <input class="peer h-[1em] w-[1em] opacity-0" id="" name=""
                                                    type="checkbox" />
                                                <span
                                                    class="absolute left-[0.25em] top-1/2 flex h-[2.5em] w-[2.5em] -translate-y-1/2 items-center justify-center rounded-full bg-[rgb(26,26,26)] shadow-[inset_4px_4px_4px_0px_rgba(64,64,64,0.25),inset_-4px_-4px_4px_0px_rgba(16,16,16,0.5)] duration-300 peer-checked:left-[calc(100%-2.75em)]">
                                                    <span class="relative h-full w-full rounded-full">
                                                        <span
                                                            class="absolute inset-[0.1em] rounded-full border-[1px] border-[hsl(0,0%,50%)]"></span>
                                                    </span>
                                                </span>
                                            </label>


                                        </div>
                                    </div>
                                    <div class=" w-full">
                                        <div class="w-full border h-[85%] flex justify-center items-center">

                                            <label
                                                class="cursor-pointer relative h-[3em] w-[6em] rounded-full bg-[hsl(0,0%,7%)] shadow-[0px_2px_4px_0px_rgb(18,18,18,0.25),0px_4px_8px_0px_rgb(18,18,18,0.35)]">
                                                <span
                                                    class="absolute inset-[0.1em] rounded-full border-[1px] border-[hsl(0,0%,25%)]"></span>
                                                <div
                                                    class="absolute left-[0.5em] top-1/2 flex h-[2em] w-[2em] -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[inset_0px_2px_2px_0px_hsl(0,0%,85%)]">
                                                    <div
                                                        class="h-[1.5em] w-[1.5em] rounded-full bg-[hsl(0,0%,7%)] shadow-[0px_2px_2px_0px_hsl(0,0%,85%)]">
                                                    </div>
                                                </div>
                                                <div
                                                    class="absolute right-[0.5em] top-1/2 h-[0.25em] w-[1.5em] -translate-y-1/2 rounded-full bg-[hsl(0,0%,50%)] shadow-[inset_0px_2px_1px_0px_hsl(0,0%,40%)]">
                                                </div>
                                                <input class="peer h-[1em] w-[1em] opacity-0" id="" name=""
                                                    type="checkbox" />
                                                <span
                                                    class="absolute left-[0.25em] top-1/2 flex h-[2.5em] w-[2.5em] -translate-y-1/2 items-center justify-center rounded-full bg-[rgb(26,26,26)] shadow-[inset_4px_4px_4px_0px_rgba(64,64,64,0.25),inset_-4px_-4px_4px_0px_rgba(16,16,16,0.5)] duration-300 peer-checked:left-[calc(100%-2.75em)]">
                                                    <span class="relative h-full w-full rounded-full">
                                                        <span
                                                            class="absolute inset-[0.1em] rounded-full border-[1px] border-[hsl(0,0%,50%)]"></span>
                                                    </span>
                                                </span>
                                            </label>


                                        </div>
                                    </div>
                                </div>
                                <div class="gap-2 justify-between w-full h-[35vh] flex ">
                                    <div class=" w-full">
                                        <div class="w-full border h-[85%] flex justify-center items-center">

                                            <label
                                                class="cursor-pointer relative h-[3em] w-[6em] rounded-full bg-[hsl(0,0%,7%)] shadow-[0px_2px_4px_0px_rgb(18,18,18,0.25),0px_4px_8px_0px_rgb(18,18,18,0.35)]">
                                                <span
                                                    class="absolute inset-[0.1em] rounded-full border-[1px] border-[hsl(0,0%,25%)]"></span>
                                                <div
                                                    class="absolute left-[0.5em] top-1/2 flex h-[2em] w-[2em] -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[inset_0px_2px_2px_0px_hsl(0,0%,85%)]">
                                                    <div
                                                        class="h-[1.5em] w-[1.5em] rounded-full bg-[hsl(0,0%,7%)] shadow-[0px_2px_2px_0px_hsl(0,0%,85%)]">
                                                    </div>
                                                </div>
                                                <div
                                                    class="absolute right-[0.5em] top-1/2 h-[0.25em] w-[1.5em] -translate-y-1/2 rounded-full bg-[hsl(0,0%,50%)] shadow-[inset_0px_2px_1px_0px_hsl(0,0%,40%)]">
                                                </div>
                                                <input class="peer h-[1em] w-[1em] opacity-0" id="" name=""
                                                    type="checkbox" />
                                                <span
                                                    class="absolute left-[0.25em] top-1/2 flex h-[2.5em] w-[2.5em] -translate-y-1/2 items-center justify-center rounded-full bg-[rgb(26,26,26)] shadow-[inset_4px_4px_4px_0px_rgba(64,64,64,0.25),inset_-4px_-4px_4px_0px_rgba(16,16,16,0.5)] duration-300 peer-checked:left-[calc(100%-2.75em)]">
                                                    <span class="relative h-full w-full rounded-full">
                                                        <span
                                                            class="absolute inset-[0.1em] rounded-full border-[1px] border-[hsl(0,0%,50%)]"></span>
                                                    </span>
                                                </span>
                                            </label>


                                        </div>
                                    </div>
                                    <div class=" w-full">
                                        <div class="w-full border h-[85%] flex justify-center items-center">

                                            <label
                                                class="cursor-pointer relative h-[3em] w-[6em] rounded-full bg-[hsl(0,0%,7%)] shadow-[0px_2px_4px_0px_rgb(18,18,18,0.25),0px_4px_8px_0px_rgb(18,18,18,0.35)]">
                                                <span
                                                    class="absolute inset-[0.1em] rounded-full border-[1px] border-[hsl(0,0%,25%)]"></span>
                                                <div
                                                    class="absolute left-[0.5em] top-1/2 flex h-[2em] w-[2em] -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[inset_0px_2px_2px_0px_hsl(0,0%,85%)]">
                                                    <div
                                                        class="h-[1.5em] w-[1.5em] rounded-full bg-[hsl(0,0%,7%)] shadow-[0px_2px_2px_0px_hsl(0,0%,85%)]">
                                                    </div>
                                                </div>
                                                <div
                                                    class="absolute right-[0.5em] top-1/2 h-[0.25em] w-[1.5em] -translate-y-1/2 rounded-full bg-[hsl(0,0%,50%)] shadow-[inset_0px_2px_1px_0px_hsl(0,0%,40%)]">
                                                </div>
                                                <input class="peer h-[1em] w-[1em] opacity-0" id="" name=""
                                                    type="checkbox" />
                                                <span
                                                    class="absolute left-[0.25em] top-1/2 flex h-[2.5em] w-[2.5em] -translate-y-1/2 items-center justify-center rounded-full bg-[rgb(26,26,26)] shadow-[inset_4px_4px_4px_0px_rgba(64,64,64,0.25),inset_-4px_-4px_4px_0px_rgba(16,16,16,0.5)] duration-300 peer-checked:left-[calc(100%-2.75em)]">
                                                    <span class="relative h-full w-full rounded-full">
                                                        <span
                                                            class="absolute inset-[0.1em] rounded-full border-[1px] border-[hsl(0,0%,50%)]"></span>
                                                    </span>
                                                </span>
                                            </label>


                                        </div>
                                    </div>
                                    <div class=" w-full">
                                        <div class="w-full border h-[85%] flex justify-center items-center">

                                            <label
                                                class="cursor-pointer relative h-[3em] w-[6em] rounded-full bg-[hsl(0,0%,7%)] shadow-[0px_2px_4px_0px_rgb(18,18,18,0.25),0px_4px_8px_0px_rgb(18,18,18,0.35)]">
                                                <span
                                                    class="absolute inset-[0.1em] rounded-full border-[1px] border-[hsl(0,0%,25%)]"></span>
                                                <div
                                                    class="absolute left-[0.5em] top-1/2 flex h-[2em] w-[2em] -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[inset_0px_2px_2px_0px_hsl(0,0%,85%)]">
                                                    <div
                                                        class="h-[1.5em] w-[1.5em] rounded-full bg-[hsl(0,0%,7%)] shadow-[0px_2px_2px_0px_hsl(0,0%,85%)]">
                                                    </div>
                                                </div>
                                                <div
                                                    class="absolute right-[0.5em] top-1/2 h-[0.25em] w-[1.5em] -translate-y-1/2 rounded-full bg-[hsl(0,0%,50%)] shadow-[inset_0px_2px_1px_0px_hsl(0,0%,40%)]">
                                                </div>
                                                <input class="peer h-[1em] w-[1em] opacity-0" id="" name=""
                                                    type="checkbox" />
                                                <span
                                                    class="absolute left-[0.25em] top-1/2 flex h-[2.5em] w-[2.5em] -translate-y-1/2 items-center justify-center rounded-full bg-[rgb(26,26,26)] shadow-[inset_4px_4px_4px_0px_rgba(64,64,64,0.25),inset_-4px_-4px_4px_0px_rgba(16,16,16,0.5)] duration-300 peer-checked:left-[calc(100%-2.75em)]">
                                                    <span class="relative h-full w-full rounded-full">
                                                        <span
                                                            class="absolute inset-[0.1em] rounded-full border-[1px] border-[hsl(0,0%,50%)]"></span>
                                                    </span>
                                                </span>
                                            </label>


                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
                    `;
}

// Cards

const sideCards = () => {
    const container = document.getElementById('content-section');
    container.innerHTML = `
                 <div class="flex w-full ">
                    <div
                        class="w-full flex justify-center overflow-scroll pt-10 border border-gray-700 border-t-0 border-dashed h-screen">
                        <div class="w-[95%]  flex flex-col gap-5">
                            <h1 class="text-gray-400 flex gap-4">Docs <p class="text-gray-200">></p>
                                <p class="text-white ">Cards</p>
                            </h1>
                            <div class="flex flex-col gap-2">
                                <h1 class="text-white text-2xl font-bold ">Cards</h1>
                                <p class="text-gray-400">Open-Source Cards made with CSS or Tailwind</p>
                            </div>

                            <div class=" flex items-center gap-5 h-10 w-full">
                                <h1 class="w-[20%] border-r text-white">First Page</h1>
                                <p class="border cursor-pointer text-white px-5 py-1 rounded-lg hover:bg-gray-500">All
                                </p>
                                <p class="border cursor-pointer text-white px-5 py-1 rounded-lg hover:bg-gray-500">
                                    Tailwind</p>
                                <p class="border cursor-pointer text-white px-5 py-1 rounded-lg hover:bg-gray-500">CSS
                                </p>
                                <select
                                    class="border px-5 py-1 rounded-lg hover:bg-gray-500 outline-0 bg-black text-white"
                                    name="Sort" id="Sort">
                                    <option value="Randomized">Randomized</option>
                                    <option value="Favorites">Favorites</option>
                                    <option value="Views">Views</option>
                                    <option value="Recent">Recent</option>
                                </select>
                                <select
                                    class="border px-5 py-1 rounded-lg hover:bg-gray-500 outline-0 bg-black text-white"
                                    name="Sort" id="Sort">
                                    <option value="Randomized">Any Theme</option>
                                    <option value="Favorites">Dark</option>
                                    <option value="Views">Light</option>
                                </select>
                                <!-- <p class="border text-white px-5 py-1 rounded-lg hover:bg-gray-500">Any Theme</p> -->
                                <input type="text"
                                    class="px-2 bg-gray-700 text-white py-1 border rounded-lg focus:border-sky-500 outline-0"
                                    size="28" placeholder="Search tags, usser, post...">

                            </div>

                            <div class="w-full h-full overflow-scroll  bottom-0 ">
                                <div class="gap-2 justify-between w-full h-[35vh] flex ">
                                    <div class=" w-full">
                                        <div class="w-full border h-[85%] flex justify-center items-center">

                                            <section
                                                class="relative group flex flex-col items-center justify-center">
                                                <div
                                                    class="file relative w-60 h-40 cursor-pointer origin-bottom [perspective:1500px] z-50">
                                                    <div
                                                        class="work-5 bg-amber-600 w-full h-full origin-top rounded-2xl rounded-tl-none group-hover:shadow-[0_20px_40px_rgba(0,0,0,.2)] transition-all ease duration-300 relative after:absolute after:content-[''] after:bottom-[99%] after:left-0 after:w-20 after:h-4 after:bg-amber-600 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[15px] before:left-[75.5px] before:w-4 before:h-4 before:bg-amber-600 before:[clip-path:polygon(0_35%,0%_100%,50%_100%);]">
                                                    </div>
                                                    <div
                                                        class="work-4 absolute inset-1 bg-zinc-400 rounded-2xl transition-all ease duration-300 origin-bottom select-none group-hover:[transform:rotateX(-20deg)]">
                                                    </div>
                                                    <div
                                                        class="work-3 absolute inset-1 bg-zinc-300 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-30deg)]">
                                                    </div>
                                                    <div
                                                        class="work-2 absolute inset-1 bg-zinc-200 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-38deg)]">
                                                    </div>
                                                    <div
                                                        class="work-1 absolute bottom-0 bg-gradient-to-t from-amber-500 to-amber-400 w-full h-[156px] rounded-2xl rounded-tr-none after:absolute after:content-[''] after:bottom-[99%] after:right-0 after:w-[146px] after:h-[16px] after:bg-amber-400 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[10px] before:right-[142px] before:size-3 before:bg-amber-400 before:[clip-path:polygon(100%_14%,50%_100%,100%_100%);] transition-all ease duration-300 origin-bottom flex items-end group-hover:shadow-[inset_0_20px_40px_#fbbf24,_inset_0_-20px_40px_#d97706] group-hover:[transform:rotateX(-46deg)_translateY(1px)]">
                                                    </div>
                                                </div>
                                            </section>

                                        </div>
                                    </div>
                                    <div class=" w-full">
                                        <div class="w-full border h-[85%] flex justify-center items-center">

                                            <section
                                                class="relative group flex flex-col items-center justify-center w-full h-full">
                                                <div
                                                    class="file relative w-60 h-40 cursor-pointer origin-bottom [perspective:1500px] z-50">
                                                    <div
                                                        class="work-5 bg-amber-600 w-full h-full origin-top rounded-2xl rounded-tl-none group-hover:shadow-[0_20px_40px_rgba(0,0,0,.2)] transition-all ease duration-300 relative after:absolute after:content-[''] after:bottom-[99%] after:left-0 after:w-20 after:h-4 after:bg-amber-600 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[15px] before:left-[75.5px] before:w-4 before:h-4 before:bg-amber-600 before:[clip-path:polygon(0_35%,0%_100%,50%_100%);]">
                                                    </div>
                                                    <div
                                                        class="work-4 absolute inset-1 bg-zinc-400 rounded-2xl transition-all ease duration-300 origin-bottom select-none group-hover:[transform:rotateX(-20deg)]">
                                                    </div>
                                                    <div
                                                        class="work-3 absolute inset-1 bg-zinc-300 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-30deg)]">
                                                    </div>
                                                    <div
                                                        class="work-2 absolute inset-1 bg-zinc-200 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-38deg)]">
                                                    </div>
                                                    <div
                                                        class="work-1 absolute bottom-0 bg-gradient-to-t from-amber-500 to-amber-400 w-full h-[156px] rounded-2xl rounded-tr-none after:absolute after:content-[''] after:bottom-[99%] after:right-0 after:w-[146px] after:h-[16px] after:bg-amber-400 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[10px] before:right-[142px] before:size-3 before:bg-amber-400 before:[clip-path:polygon(100%_14%,50%_100%,100%_100%);] transition-all ease duration-300 origin-bottom flex items-end group-hover:shadow-[inset_0_20px_40px_#fbbf24,_inset_0_-20px_40px_#d97706] group-hover:[transform:rotateX(-46deg)_translateY(1px)]">
                                                    </div>
                                                </div>
                                            </section>

                                        </div>
                                    </div>
                                    <div class=" w-full">
                                        <div class="w-full border h-[85%] flex justify-center items-center">

                                            <section
                                                class="relative group flex flex-col items-center justify-center w-full h-full">
                                                <div
                                                    class="file relative w-60 h-40 cursor-pointer origin-bottom [perspective:1500px] z-50">
                                                    <div
                                                        class="work-5 bg-amber-600 w-full h-full origin-top rounded-2xl rounded-tl-none group-hover:shadow-[0_20px_40px_rgba(0,0,0,.2)] transition-all ease duration-300 relative after:absolute after:content-[''] after:bottom-[99%] after:left-0 after:w-20 after:h-4 after:bg-amber-600 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[15px] before:left-[75.5px] before:w-4 before:h-4 before:bg-amber-600 before:[clip-path:polygon(0_35%,0%_100%,50%_100%);]">
                                                    </div>
                                                    <div
                                                        class="work-4 absolute inset-1 bg-zinc-400 rounded-2xl transition-all ease duration-300 origin-bottom select-none group-hover:[transform:rotateX(-20deg)]">
                                                    </div>
                                                    <div
                                                        class="work-3 absolute inset-1 bg-zinc-300 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-30deg)]">
                                                    </div>
                                                    <div
                                                        class="work-2 absolute inset-1 bg-zinc-200 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-38deg)]">
                                                    </div>
                                                    <div
                                                        class="work-1 absolute bottom-0 bg-gradient-to-t from-amber-500 to-amber-400 w-full h-[156px] rounded-2xl rounded-tr-none after:absolute after:content-[''] after:bottom-[99%] after:right-0 after:w-[146px] after:h-[16px] after:bg-amber-400 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[10px] before:right-[142px] before:size-3 before:bg-amber-400 before:[clip-path:polygon(100%_14%,50%_100%,100%_100%);] transition-all ease duration-300 origin-bottom flex items-end group-hover:shadow-[inset_0_20px_40px_#fbbf24,_inset_0_-20px_40px_#d97706] group-hover:[transform:rotateX(-46deg)_translateY(1px)]">
                                                    </div>
                                                </div>
                                            </section>



                                        </div>
                                    </div>
                                </div>

                                <div class="gap-2 justify-between w-full h-[35vh] flex ">
                                    <div class=" w-full">
                                        <div class="w-full border h-[85%] flex justify-center items-center">

                                            <section
                                                class="relative group flex flex-col items-center justify-center">
                                                <div
                                                    class="file relative w-60 h-40 cursor-pointer origin-bottom [perspective:1500px] z-50">
                                                    <div
                                                        class="work-5 bg-amber-600 w-full h-full origin-top rounded-2xl rounded-tl-none group-hover:shadow-[0_20px_40px_rgba(0,0,0,.2)] transition-all ease duration-300 relative after:absolute after:content-[''] after:bottom-[99%] after:left-0 after:w-20 after:h-4 after:bg-amber-600 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[15px] before:left-[75.5px] before:w-4 before:h-4 before:bg-amber-600 before:[clip-path:polygon(0_35%,0%_100%,50%_100%);]">
                                                    </div>
                                                    <div
                                                        class="work-4 absolute inset-1 bg-zinc-400 rounded-2xl transition-all ease duration-300 origin-bottom select-none group-hover:[transform:rotateX(-20deg)]">
                                                    </div>
                                                    <div
                                                        class="work-3 absolute inset-1 bg-zinc-300 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-30deg)]">
                                                    </div>
                                                    <div
                                                        class="work-2 absolute inset-1 bg-zinc-200 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-38deg)]">
                                                    </div>
                                                    <div
                                                        class="work-1 absolute bottom-0 bg-gradient-to-t from-amber-500 to-amber-400 w-full h-[156px] rounded-2xl rounded-tr-none after:absolute after:content-[''] after:bottom-[99%] after:right-0 after:w-[146px] after:h-[16px] after:bg-amber-400 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[10px] before:right-[142px] before:size-3 before:bg-amber-400 before:[clip-path:polygon(100%_14%,50%_100%,100%_100%);] transition-all ease duration-300 origin-bottom flex items-end group-hover:shadow-[inset_0_20px_40px_#fbbf24,_inset_0_-20px_40px_#d97706] group-hover:[transform:rotateX(-46deg)_translateY(1px)]">
                                                    </div>
                                                </div>
                                            </section>

                                        </div>
                                    </div>
                                    <div class=" w-full">
                                        <div class="w-full border h-[85%] flex justify-center items-center">

                                            <section
                                                class="relative group flex flex-col items-center justify-center w-full h-full">
                                                <div
                                                    class="file relative w-60 h-40 cursor-pointer origin-bottom [perspective:1500px] z-50">
                                                    <div
                                                        class="work-5 bg-amber-600 w-full h-full origin-top rounded-2xl rounded-tl-none group-hover:shadow-[0_20px_40px_rgba(0,0,0,.2)] transition-all ease duration-300 relative after:absolute after:content-[''] after:bottom-[99%] after:left-0 after:w-20 after:h-4 after:bg-amber-600 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[15px] before:left-[75.5px] before:w-4 before:h-4 before:bg-amber-600 before:[clip-path:polygon(0_35%,0%_100%,50%_100%);]">
                                                    </div>
                                                    <div
                                                        class="work-4 absolute inset-1 bg-zinc-400 rounded-2xl transition-all ease duration-300 origin-bottom select-none group-hover:[transform:rotateX(-20deg)]">
                                                    </div>
                                                    <div
                                                        class="work-3 absolute inset-1 bg-zinc-300 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-30deg)]">
                                                    </div>
                                                    <div
                                                        class="work-2 absolute inset-1 bg-zinc-200 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-38deg)]">
                                                    </div>
                                                    <div
                                                        class="work-1 absolute bottom-0 bg-gradient-to-t from-amber-500 to-amber-400 w-full h-[156px] rounded-2xl rounded-tr-none after:absolute after:content-[''] after:bottom-[99%] after:right-0 after:w-[146px] after:h-[16px] after:bg-amber-400 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[10px] before:right-[142px] before:size-3 before:bg-amber-400 before:[clip-path:polygon(100%_14%,50%_100%,100%_100%);] transition-all ease duration-300 origin-bottom flex items-end group-hover:shadow-[inset_0_20px_40px_#fbbf24,_inset_0_-20px_40px_#d97706] group-hover:[transform:rotateX(-46deg)_translateY(1px)]">
                                                    </div>
                                                </div>
                                            </section>

                                        </div>
                                    </div>
                                    <div class=" w-full">
                                        <div class="w-full border h-[85%] flex justify-center items-center">

                                            <section
                                                class="relative group flex flex-col items-center justify-center w-full h-full">
                                                <div
                                                    class="file relative w-60 h-40 cursor-pointer origin-bottom [perspective:1500px] z-50">
                                                    <div
                                                        class="work-5 bg-amber-600 w-full h-full origin-top rounded-2xl rounded-tl-none group-hover:shadow-[0_20px_40px_rgba(0,0,0,.2)] transition-all ease duration-300 relative after:absolute after:content-[''] after:bottom-[99%] after:left-0 after:w-20 after:h-4 after:bg-amber-600 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[15px] before:left-[75.5px] before:w-4 before:h-4 before:bg-amber-600 before:[clip-path:polygon(0_35%,0%_100%,50%_100%);]">
                                                    </div>
                                                    <div
                                                        class="work-4 absolute inset-1 bg-zinc-400 rounded-2xl transition-all ease duration-300 origin-bottom select-none group-hover:[transform:rotateX(-20deg)]">
                                                    </div>
                                                    <div
                                                        class="work-3 absolute inset-1 bg-zinc-300 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-30deg)]">
                                                    </div>
                                                    <div
                                                        class="work-2 absolute inset-1 bg-zinc-200 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-38deg)]">
                                                    </div>
                                                    <div
                                                        class="work-1 absolute bottom-0 bg-gradient-to-t from-amber-500 to-amber-400 w-full h-[156px] rounded-2xl rounded-tr-none after:absolute after:content-[''] after:bottom-[99%] after:right-0 after:w-[146px] after:h-[16px] after:bg-amber-400 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[10px] before:right-[142px] before:size-3 before:bg-amber-400 before:[clip-path:polygon(100%_14%,50%_100%,100%_100%);] transition-all ease duration-300 origin-bottom flex items-end group-hover:shadow-[inset_0_20px_40px_#fbbf24,_inset_0_-20px_40px_#d97706] group-hover:[transform:rotateX(-46deg)_translateY(1px)]">
                                                    </div>
                                                </div>
                                            </section>



                                        </div>
                                    </div>
                                </div>

                                <div class="gap-2 justify-between w-full h-[35vh] flex ">
                                    <div class=" w-full">
                                        <div class="w-full border h-[85%] flex justify-center items-center">

                                            <section
                                                class="relative group flex flex-col items-center justify-center">
                                                <div
                                                    class="file relative w-60 h-40 cursor-pointer origin-bottom [perspective:1500px] z-50">
                                                    <div
                                                        class="work-5 bg-amber-600 w-full h-full origin-top rounded-2xl rounded-tl-none group-hover:shadow-[0_20px_40px_rgba(0,0,0,.2)] transition-all ease duration-300 relative after:absolute after:content-[''] after:bottom-[99%] after:left-0 after:w-20 after:h-4 after:bg-amber-600 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[15px] before:left-[75.5px] before:w-4 before:h-4 before:bg-amber-600 before:[clip-path:polygon(0_35%,0%_100%,50%_100%);]">
                                                    </div>
                                                    <div
                                                        class="work-4 absolute inset-1 bg-zinc-400 rounded-2xl transition-all ease duration-300 origin-bottom select-none group-hover:[transform:rotateX(-20deg)]">
                                                    </div>
                                                    <div
                                                        class="work-3 absolute inset-1 bg-zinc-300 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-30deg)]">
                                                    </div>
                                                    <div
                                                        class="work-2 absolute inset-1 bg-zinc-200 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-38deg)]">
                                                    </div>
                                                    <div
                                                        class="work-1 absolute bottom-0 bg-gradient-to-t from-amber-500 to-amber-400 w-full h-[156px] rounded-2xl rounded-tr-none after:absolute after:content-[''] after:bottom-[99%] after:right-0 after:w-[146px] after:h-[16px] after:bg-amber-400 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[10px] before:right-[142px] before:size-3 before:bg-amber-400 before:[clip-path:polygon(100%_14%,50%_100%,100%_100%);] transition-all ease duration-300 origin-bottom flex items-end group-hover:shadow-[inset_0_20px_40px_#fbbf24,_inset_0_-20px_40px_#d97706] group-hover:[transform:rotateX(-46deg)_translateY(1px)]">
                                                    </div>
                                                </div>
                                            </section>

                                        </div>
                                    </div>
                                    <div class=" w-full">
                                        <div class="w-full border h-[85%] flex justify-center items-center">

                                            <section
                                                class="relative group flex flex-col items-center justify-center w-full h-full">
                                                <div
                                                    class="file relative w-60 h-40 cursor-pointer origin-bottom [perspective:1500px] z-50">
                                                    <div
                                                        class="work-5 bg-amber-600 w-full h-full origin-top rounded-2xl rounded-tl-none group-hover:shadow-[0_20px_40px_rgba(0,0,0,.2)] transition-all ease duration-300 relative after:absolute after:content-[''] after:bottom-[99%] after:left-0 after:w-20 after:h-4 after:bg-amber-600 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[15px] before:left-[75.5px] before:w-4 before:h-4 before:bg-amber-600 before:[clip-path:polygon(0_35%,0%_100%,50%_100%);]">
                                                    </div>
                                                    <div
                                                        class="work-4 absolute inset-1 bg-zinc-400 rounded-2xl transition-all ease duration-300 origin-bottom select-none group-hover:[transform:rotateX(-20deg)]">
                                                    </div>
                                                    <div
                                                        class="work-3 absolute inset-1 bg-zinc-300 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-30deg)]">
                                                    </div>
                                                    <div
                                                        class="work-2 absolute inset-1 bg-zinc-200 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-38deg)]">
                                                    </div>
                                                    <div
                                                        class="work-1 absolute bottom-0 bg-gradient-to-t from-amber-500 to-amber-400 w-full h-[156px] rounded-2xl rounded-tr-none after:absolute after:content-[''] after:bottom-[99%] after:right-0 after:w-[146px] after:h-[16px] after:bg-amber-400 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[10px] before:right-[142px] before:size-3 before:bg-amber-400 before:[clip-path:polygon(100%_14%,50%_100%,100%_100%);] transition-all ease duration-300 origin-bottom flex items-end group-hover:shadow-[inset_0_20px_40px_#fbbf24,_inset_0_-20px_40px_#d97706] group-hover:[transform:rotateX(-46deg)_translateY(1px)]">
                                                    </div>
                                                </div>
                                            </section>

                                        </div>
                                    </div>
                                    <div class=" w-full">
                                        <div class="w-full border h-[85%] flex justify-center items-center">

                                            <section
                                                class="relative group flex flex-col items-center justify-center w-full h-full">
                                                <div
                                                    class="file relative w-60 h-40 cursor-pointer origin-bottom [perspective:1500px] z-50">
                                                    <div
                                                        class="work-5 bg-amber-600 w-full h-full origin-top rounded-2xl rounded-tl-none group-hover:shadow-[0_20px_40px_rgba(0,0,0,.2)] transition-all ease duration-300 relative after:absolute after:content-[''] after:bottom-[99%] after:left-0 after:w-20 after:h-4 after:bg-amber-600 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[15px] before:left-[75.5px] before:w-4 before:h-4 before:bg-amber-600 before:[clip-path:polygon(0_35%,0%_100%,50%_100%);]">
                                                    </div>
                                                    <div
                                                        class="work-4 absolute inset-1 bg-zinc-400 rounded-2xl transition-all ease duration-300 origin-bottom select-none group-hover:[transform:rotateX(-20deg)]">
                                                    </div>
                                                    <div
                                                        class="work-3 absolute inset-1 bg-zinc-300 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-30deg)]">
                                                    </div>
                                                    <div
                                                        class="work-2 absolute inset-1 bg-zinc-200 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-38deg)]">
                                                    </div>
                                                    <div
                                                        class="work-1 absolute bottom-0 bg-gradient-to-t from-amber-500 to-amber-400 w-full h-[156px] rounded-2xl rounded-tr-none after:absolute after:content-[''] after:bottom-[99%] after:right-0 after:w-[146px] after:h-[16px] after:bg-amber-400 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[10px] before:right-[142px] before:size-3 before:bg-amber-400 before:[clip-path:polygon(100%_14%,50%_100%,100%_100%);] transition-all ease duration-300 origin-bottom flex items-end group-hover:shadow-[inset_0_20px_40px_#fbbf24,_inset_0_-20px_40px_#d97706] group-hover:[transform:rotateX(-46deg)_translateY(1px)]">
                                                    </div>
                                                </div>
                                            </section>



                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
                    `;
}

// Loaders

const sideLoaders = () => {
    const container = document.getElementById('content-section');
    container.innerHTML = `
                 <div class="flex w-full ">
                    <div
                        class="w-full flex justify-center overflow-scroll pt-10 border border-gray-700 border-t-0 border-dashed h-screen">
                        <div class="w-[95%]  flex flex-col gap-5">
                            <h1 class="text-gray-400 flex gap-4">Docs <p class="text-gray-200">></p>
                                <p class="text-white ">Cards</p>
                            </h1>
                            <div class="flex flex-col gap-2">
                                <h1 class="text-white text-2xl font-bold ">Cards</h1>
                                <p class="text-gray-400">Open-Source Cards made with CSS or Tailwind</p>
                            </div>

                            <div class=" flex items-center gap-5 h-10 w-full">
                                <h1 class="w-[20%] border-r text-white">First Page</h1>
                                <p class="border cursor-pointer text-white px-5 py-1 rounded-lg hover:bg-gray-500">All
                                </p>
                                <p class="border cursor-pointer text-white px-5 py-1 rounded-lg hover:bg-gray-500">
                                    Tailwind</p>
                                <p class="border cursor-pointer text-white px-5 py-1 rounded-lg hover:bg-gray-500">CSS
                                </p>
                                <select
                                    class="border px-5 py-1 rounded-lg hover:bg-gray-500 outline-0 bg-black text-white"
                                    name="Sort" id="Sort">
                                    <option value="Randomized">Randomized</option>
                                    <option value="Favorites">Favorites</option>
                                    <option value="Views">Views</option>
                                    <option value="Recent">Recent</option>
                                </select>
                                <select
                                    class="border px-5 py-1 rounded-lg hover:bg-gray-500 outline-0 bg-black text-white"
                                    name="Sort" id="Sort">
                                    <option value="Randomized">Any Theme</option>
                                    <option value="Favorites">Dark</option>
                                    <option value="Views">Light</option>
                                </select>
                                <!-- <p class="border text-white px-5 py-1 rounded-lg hover:bg-gray-500">Any Theme</p> -->
                                <input type="text"
                                    class="px-2 bg-gray-700 text-white py-1 border rounded-lg focus:border-sky-500 outline-0"
                                    size="28" placeholder="Search tags, usser, post...">

                            </div>

                            <div class="w-full h-full overflow-scroll  bottom-0 ">
                                <div class="gap-2 justify-between w-full h-[35vh] flex ">
                                    <div class=" w-full">
                                        <div class="w-full border h-[85%] flex justify-center items-center">

                                            <div class="flex flex-row gap-2">
                                                <div style="background-image: conic-gradient(from 0deg, violet, indigo 30%, blue 50%, green 60%, yellow 70%, orange 80%, red 100%);"
                                                    class="w-14 h-14 rounded-full bg-radial animate-spin [animation-delay:.7s]">
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class=" w-full">
                                        <div class="w-full border h-[85%] flex justify-center items-center">

                                            <div class="flex flex-row gap-2">
                                                <div style="background-image: conic-gradient(from 0deg, violet, indigo 30%, blue 50%, green 60%, yellow 70%, orange 80%, red 100%);"
                                                    class="w-14 h-14 rounded-full bg-radial animate-spin [animation-delay:.7s]">
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class=" w-full">
                                        <div class="w-full border h-[85%] flex justify-center items-center">


                                            <div class="flex flex-row gap-2">
                                                <div style="background-image: conic-gradient(from 0deg, violet, indigo 30%, blue 50%, green 60%, yellow 70%, orange 80%, red 100%);"
                                                    class="w-14 h-14 rounded-full bg-radial animate-spin [animation-delay:.7s]">
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="gap-2 justify-between w-full h-[35vh] flex ">
                                    <div class=" w-full">
                                        <div class="w-full border h-[85%] flex justify-center items-center">

                                            <div class="flex flex-row gap-2">
                                                <div style="background-image: conic-gradient(from 0deg, violet, indigo 30%, blue 50%, green 60%, yellow 70%, orange 80%, red 100%);"
                                                    class="w-14 h-14 rounded-full bg-radial animate-spin [animation-delay:.7s]">
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class=" w-full">
                                        <div class="w-full border h-[85%] flex justify-center items-center">

                                            <div class="flex flex-row gap-2">
                                                <div style="background-image: conic-gradient(from 0deg, violet, indigo 30%, blue 50%, green 60%, yellow 70%, orange 80%, red 100%);"
                                                    class="w-14 h-14 rounded-full bg-radial animate-spin [animation-delay:.7s]">
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class=" w-full">
                                        <div class="w-full border h-[85%] flex justify-center items-center">


                                            <div class="flex flex-row gap-2">
                                                <div style="background-image: conic-gradient(from 0deg, violet, indigo 30%, blue 50%, green 60%, yellow 70%, orange 80%, red 100%);"
                                                    class="w-14 h-14 rounded-full bg-radial animate-spin [animation-delay:.7s]">
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="gap-2 justify-between w-full h-[35vh] flex ">
                                    <div class=" w-full">
                                        <div class="w-full border h-[85%] flex justify-center items-center">

                                            <div class="flex flex-row gap-2">
                                                <div style="background-image: conic-gradient(from 0deg, violet, indigo 30%, blue 50%, green 60%, yellow 70%, orange 80%, red 100%);"
                                                    class="w-14 h-14 rounded-full bg-radial animate-spin [animation-delay:.7s]">
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class=" w-full">
                                        <div class="w-full border h-[85%] flex justify-center items-center">

                                            <div class="flex flex-row gap-2">
                                                <div style="background-image: conic-gradient(from 0deg, violet, indigo 30%, blue 50%, green 60%, yellow 70%, orange 80%, red 100%);"
                                                    class="w-14 h-14 rounded-full bg-radial animate-spin [animation-delay:.7s]">
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class=" w-full">
                                        <div class="w-full border h-[85%] flex justify-center items-center">


                                            <div class="flex flex-row gap-2">
                                                <div style="background-image: conic-gradient(from 0deg, violet, indigo 30%, blue 50%, green 60%, yellow 70%, orange 80%, red 100%);"
                                                    class="w-14 h-14 rounded-full bg-radial animate-spin [animation-delay:.7s]">
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                    `;
}

// Inputs

const sideInputs = () => {
    const container = document.getElementById('content-section');
    container.innerHTML = `
                 <div class="flex w-full ">
                    <div
                        class="w-full flex justify-center overflow-scroll pt-10 border border-gray-700 border-t-0 border-dashed h-screen">
                        <div class="w-[95%]  flex flex-col gap-5">
                            <h1 class="text-gray-400 flex gap-4">Inputs <p class="text-gray-200">></p>
                                <p class="text-white ">Inputs</p>
                            </h1>
                            <div class="flex flex-col gap-2">
                                <h1 class="text-white text-2xl font-bold ">Inputs</h1>
                                <p class="text-gray-400">Open-Source Cards made with CSS or Tailwind</p>
                            </div>

                            <div class=" flex items-center gap-5 h-10 w-full">
                                <h1 class="w-[20%] border-r text-white">First Page</h1>
                                <p class="border cursor-pointer text-white px-5 py-1 rounded-lg hover:bg-gray-500">All
                                </p>
                                <p class="border cursor-pointer text-white px-5 py-1 rounded-lg hover:bg-gray-500">
                                    Tailwind</p>
                                <p class="border cursor-pointer text-white px-5 py-1 rounded-lg hover:bg-gray-500">CSS
                                </p>
                                <select
                                    class="border px-5 py-1 rounded-lg hover:bg-gray-500 outline-0 bg-black text-white"
                                    name="Sort" id="Sort">
                                    <option value="Randomized">Randomized</option>
                                    <option value="Favorites">Favorites</option>
                                    <option value="Views">Views</option>
                                    <option value="Recent">Recent</option>
                                </select>
                                <select
                                    class="border px-5 py-1 rounded-lg hover:bg-gray-500 outline-0 bg-black text-white"
                                    name="Sort" id="Sort">
                                    <option value="Randomized">Any Theme</option>
                                    <option value="Favorites">Dark</option>
                                    <option value="Views">Light</option>
                                </select>
                                <!-- <p class="border text-white px-5 py-1 rounded-lg hover:bg-gray-500">Any Theme</p> -->
                                <input type="text"
                                    class="px-2 bg-gray-700 text-white py-1 border rounded-lg focus:border-sky-500 outline-0"
                                    size="28" placeholder="Search tags, usser, post...">

                            </div>

                            <div class="w-full h-full overflow-scroll  bottom-0 ">
                                <div class="gap-2 justify-between w-full h-[35vh] flex ">
                                    <div class=" w-full">
                                        <div class="w-full border h-[85%] flex justify-center items-center">
                                           
                                            <div class="relative w-60 group">
                                                <span
                                                    class="absolute -left-0.5 top-2 bottom-2 w-1.5 rounded bg-gradient-to-b from-indigo-500 to-purple-500 opacity-70 transition-all duration-300 group-focus-within:opacity-100"></span>
                                                <input type="text" id="input" placeholder=""
                                                    class="peer w-full pl-6 pr-4 pt-6 pb-2 text-sm text-gray-800 bg-white border border-gray-200 rounded-lg shadow-md focus:border-transparent focus:ring-2 focus:ring-indigo-300 focus:outline-none transition-all duration-300 delay-200 placeholder-transparent" />
                                                <label for="input"
                                                    class="absolute left-6 top-3.5 text-sm text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-indigo-500 peer-focus:font-semibold cursor-text">
                                                    Write Here
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                    <div class=" w-full">
                                        <div class="w-full border h-[85%] flex justify-center items-center">

                                            <div class="relative w-60 group">
                                                <span
                                                    class="absolute -left-0.5 top-2 bottom-2 w-1.5 rounded bg-gradient-to-b from-indigo-500 to-purple-500 opacity-70 transition-all duration-300 group-focus-within:opacity-100"></span>
                                                <input type="text" id="input" placeholder=""
                                                    class="peer w-full pl-6 pr-4 pt-6 pb-2 text-sm text-gray-800 bg-white border border-gray-200 rounded-lg shadow-md focus:border-transparent focus:ring-2 focus:ring-indigo-300 focus:outline-none transition-all duration-300 delay-200 placeholder-transparent" />
                                                <label for="input"
                                                    class="absolute left-6 top-3.5 text-sm text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-indigo-500 peer-focus:font-semibold cursor-text">
                                                    Write Here
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                    <div class=" w-full">
                                        <div class="w-full border h-[85%] flex justify-center items-center">

                                            <div class="relative w-60 group">
                                                <span
                                                    class="absolute -left-0.5 top-2 bottom-2 w-1.5 rounded bg-gradient-to-b from-indigo-500 to-purple-500 opacity-70 transition-all duration-300 group-focus-within:opacity-100"></span>
                                                <input type="text" id="input" placeholder=""
                                                    class="peer w-full pl-6 pr-4 pt-6 pb-2 text-sm text-gray-800 bg-white border border-gray-200 rounded-lg shadow-md focus:border-transparent focus:ring-2 focus:ring-indigo-300 focus:outline-none transition-all duration-300 delay-200 placeholder-transparent" />
                                                <label for="input"
                                                    class="absolute left-6 top-3.5 text-sm text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-indigo-500 peer-focus:font-semibold cursor-text">
                                                    Write Here
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div class="gap-2 justify-between w-full h-[35vh] flex ">
                                    <div class=" w-full">
                                        <div class="w-full border h-[85%] flex justify-center items-center">
                                           
                                            <div class="relative w-60 group">
                                                <span
                                                    class="absolute -left-0.5 top-2 bottom-2 w-1.5 rounded bg-gradient-to-b from-indigo-500 to-purple-500 opacity-70 transition-all duration-300 group-focus-within:opacity-100"></span>
                                                <input type="text" id="input" placeholder=""
                                                    class="peer w-full pl-6 pr-4 pt-6 pb-2 text-sm text-gray-800 bg-white border border-gray-200 rounded-lg shadow-md focus:border-transparent focus:ring-2 focus:ring-indigo-300 focus:outline-none transition-all duration-300 delay-200 placeholder-transparent" />
                                                <label for="input"
                                                    class="absolute left-6 top-3.5 text-sm text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-indigo-500 peer-focus:font-semibold cursor-text">
                                                    Write Here
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                    <div class=" w-full">
                                        <div class="w-full border h-[85%] flex justify-center items-center">

                                            <div class="relative w-60 group">
                                                <span
                                                    class="absolute -left-0.5 top-2 bottom-2 w-1.5 rounded bg-gradient-to-b from-indigo-500 to-purple-500 opacity-70 transition-all duration-300 group-focus-within:opacity-100"></span>
                                                <input type="text" id="input" placeholder=""
                                                    class="peer w-full pl-6 pr-4 pt-6 pb-2 text-sm text-gray-800 bg-white border border-gray-200 rounded-lg shadow-md focus:border-transparent focus:ring-2 focus:ring-indigo-300 focus:outline-none transition-all duration-300 delay-200 placeholder-transparent" />
                                                <label for="input"
                                                    class="absolute left-6 top-3.5 text-sm text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-indigo-500 peer-focus:font-semibold cursor-text">
                                                    Write Here
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                    <div class=" w-full">
                                        <div class="w-full border h-[85%] flex justify-center items-center">

                                            <div class="relative w-60 group">
                                                <span
                                                    class="absolute -left-0.5 top-2 bottom-2 w-1.5 rounded bg-gradient-to-b from-indigo-500 to-purple-500 opacity-70 transition-all duration-300 group-focus-within:opacity-100"></span>
                                                <input type="text" id="input" placeholder=""
                                                    class="peer w-full pl-6 pr-4 pt-6 pb-2 text-sm text-gray-800 bg-white border border-gray-200 rounded-lg shadow-md focus:border-transparent focus:ring-2 focus:ring-indigo-300 focus:outline-none transition-all duration-300 delay-200 placeholder-transparent" />
                                                <label for="input"
                                                    class="absolute left-6 top-3.5 text-sm text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-indigo-500 peer-focus:font-semibold cursor-text">
                                                    Write Here
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div class="gap-2 justify-between w-full h-[35vh] flex ">
                                    <div class=" w-full">
                                        <div class="w-full border h-[85%] flex justify-center items-center">
                                           
                                            <div class="relative w-60 group">
                                                <span
                                                    class="absolute -left-0.5 top-2 bottom-2 w-1.5 rounded bg-gradient-to-b from-indigo-500 to-purple-500 opacity-70 transition-all duration-300 group-focus-within:opacity-100"></span>
                                                <input type="text" id="input" placeholder=""
                                                    class="peer w-full pl-6 pr-4 pt-6 pb-2 text-sm text-gray-800 bg-white border border-gray-200 rounded-lg shadow-md focus:border-transparent focus:ring-2 focus:ring-indigo-300 focus:outline-none transition-all duration-300 delay-200 placeholder-transparent" />
                                                <label for="input"
                                                    class="absolute left-6 top-3.5 text-sm text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-indigo-500 peer-focus:font-semibold cursor-text">
                                                    Write Here
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                    <div class=" w-full">
                                        <div class="w-full border h-[85%] flex justify-center items-center">

                                            <div class="relative w-60 group">
                                                <span
                                                    class="absolute -left-0.5 top-2 bottom-2 w-1.5 rounded bg-gradient-to-b from-indigo-500 to-purple-500 opacity-70 transition-all duration-300 group-focus-within:opacity-100"></span>
                                                <input type="text" id="input" placeholder=""
                                                    class="peer w-full pl-6 pr-4 pt-6 pb-2 text-sm text-gray-800 bg-white border border-gray-200 rounded-lg shadow-md focus:border-transparent focus:ring-2 focus:ring-indigo-300 focus:outline-none transition-all duration-300 delay-200 placeholder-transparent" />
                                                <label for="input"
                                                    class="absolute left-6 top-3.5 text-sm text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-indigo-500 peer-focus:font-semibold cursor-text">
                                                    Write Here
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                    <div class=" w-full">
                                        <div class="w-full border h-[85%] flex justify-center items-center">

                                            <div class="relative w-60 group">
                                                <span
                                                    class="absolute -left-0.5 top-2 bottom-2 w-1.5 rounded bg-gradient-to-b from-indigo-500 to-purple-500 opacity-70 transition-all duration-300 group-focus-within:opacity-100"></span>
                                                <input type="text" id="input" placeholder=""
                                                    class="peer w-full pl-6 pr-4 pt-6 pb-2 text-sm text-gray-800 bg-white border border-gray-200 rounded-lg shadow-md focus:border-transparent focus:ring-2 focus:ring-indigo-300 focus:outline-none transition-all duration-300 delay-200 placeholder-transparent" />
                                                <label for="input"
                                                    class="absolute left-6 top-3.5 text-sm text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-indigo-500 peer-focus:font-semibold cursor-text">
                                                    Write Here
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                    `;
}






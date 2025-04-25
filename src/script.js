
const menuToggle = document.getElementById("menu-toggle");
const mobileSidebar = document.getElementById("mobile-sidebar");
const menuClosed = document.getElementById("menu-closed")
const modeButton = document.getElementById("modechange-button")
const navigationBar = document.getElementById("navigation-bar")
const navItems = document.getElementById("nav-items")
const navInput = document.getElementById("nav-input")
const sideBody = document.getElementById("side-body")
// const tagP = sideBody.getElementsByTagName("p")
const wholeScr = document.getElementById("whole-scr")
const contentSection = document.getElementById("content-section")
const bottomBar = document.getElementById("bottom-bar")



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
    navItems.classList.toggle("text-gray-200" ? "text-black" : "text-gray-200")
    modeButton.classList.toggle("text-white" ? "text-black" : "text-white")
    navInput.classList.toggle("bg-gray-900" ? "bg-white" : "bg-gray-900 ")
    navInput.classList.toggle("text-gray-300" ? "text-black" : "text-gray-300")
    sideBody.classList.toggle("bg-black" ? "bg-white" : "bg-black")
    sideBody.classList.toggle("text-gray-300" ? "text-gray-900" : "text-gray-300")
    wholeScr.classList.toggle("bg-black" ? "bg-white" : "bg-black")
    bottomBar.classList.toggle("bg-black"? "bg-white": "bg-black")
    bottomBar.classList.toggle("text-gray-400"? "text-gray-800": "text-gray-400")
    menuToggle.classList.toggle("text-white"? "text-black": "text-white")
    mobileSidebar.classList.toggle("bg-black"? "bg-white": "bg-black")
    mobileSidebar.classList.toggle("text-white"? "text-black": "text-white")
    // console.log(tagP)
    // paragraphs.classList.toggle("hover:bg-gray-800"? "hover:bg-gray-200": "hover:bg-gray-800")
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

// RadioButtons

const sideRadioButtons = () => {
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

                                <input type="text"
                                    class="px-2 bg-gray-700 text-white py-1 border rounded-lg focus:border-sky-500 outline-0"
                                    size="28" placeholder="Search tags, usser, post...">

                            </div>

                            <div class="w-full h-full overflow-scroll  bottom-0 ">
                                <div class="gap-2 my-5 justify-between w-full h-[35vh] overflow-hidden flex ">
                                    <div class=" w-full">
                                        <div class="w-full border h-full flex justify-center items-center">

                                            <div
                                                class="w-[300px] p-2 aspect-square rounded-lg shadow flex flex-col items-center justify-center gap-2 bg-slate-50">
                                                <p class="capitalize font-semibold self-start">Payment method</p>
                                                <p class="text-[10px] self-start text-wrap text-gray-500 pb-1">
                                                    This component is made by using
                                                    
                                                </p>
                                                <label
                                                    class="inline-flex justify-between w-full items-center z-10 rounded-lg p-2 border border-transparent has-[:checked]:border-indigo-500 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 has-[:checked]:font-bold hover:bg-slate-200 transition-all cursor-pointer has-[:checked]:transition-all has-[:checked]:duration-500 duration-500 relative [&amp;_p]:has-[:checked]:translate-y-0 [&amp;_p]:has-[:checked]:transition-transform [&amp;_p]:has-[:checked]:duration-500 [&amp;_p]:has-[:checked]:opacity-100 overflow-hidden">
                                                    <div
                                                        class="inline-flex items-center justify-center gap-2 relative z-10">
                                                        <svg fill="currentColor" viewBox="0 0 32 32" height="32"
                                                            width="32" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M32 13.333l-4.177 9.333h-1.292l1.552-3.266-2.75-6.068h1.359l1.99 4.651h0.026l1.927-4.651zM14.646 16.219v3.781h-1.313v-9.333h3.474c0.828-0.021 1.63 0.266 2.25 0.807 0.615 0.505 0.953 1.219 0.943 1.974 0.010 0.766-0.339 1.5-0.943 1.979-0.604 0.531-1.354 0.792-2.25 0.792zM14.641 11.818v3.255h2.198c0.484 0.016 0.958-0.161 1.297-0.479 0.339-0.302 0.526-0.714 0.526-1.141 0-0.432-0.188-0.844-0.526-1.141-0.349-0.333-0.818-0.51-1.297-0.495zM22.63 13.333c0.833 0 1.495 0.234 1.979 0.698s0.724 1.099 0.724 1.906v3.859h-1.083v-0.87h-0.047c-0.469 0.714-1.089 1.073-1.865 1.073-0.667 0-1.219-0.203-1.667-0.615-0.438-0.385-0.682-0.948-0.672-1.531 0-0.646 0.234-1.161 0.708-1.547 0.469-0.38 1.099-0.573 1.885-0.573 0.672 0 1.224 0.13 1.656 0.385v-0.271c0.005-0.396-0.167-0.776-0.464-1.042-0.297-0.276-0.688-0.432-1.094-0.427-0.63 0-1.13 0.276-1.5 0.828l-0.995-0.646c0.547-0.818 1.359-1.229 2.432-1.229zM21.167 17.88c-0.005 0.302 0.135 0.583 0.375 0.766 0.25 0.203 0.563 0.313 0.88 0.307 0.474 0 0.932-0.198 1.271-0.547 0.359-0.333 0.563-0.802 0.563-1.292-0.354-0.292-0.844-0.438-1.474-0.438-0.464 0-0.844 0.115-1.151 0.344-0.307 0.234-0.464 0.516-0.464 0.859zM5.443 10.667c1.344-0.016 2.646 0.479 3.641 1.391l-1.552 1.521c-0.568-0.526-1.318-0.813-2.089-0.797-1.385 0.005-2.609 0.891-3.057 2.198-0.229 0.661-0.229 1.38 0 2.042 0.448 1.307 1.672 2.193 3.057 2.198 0.734 0 1.365-0.182 1.854-0.505 0.568-0.375 0.964-0.958 1.083-1.625h-2.938v-2.052h5.13c0.063 0.359 0.094 0.719 0.094 1.083 0 1.625-0.594 3-1.62 3.927-0.901 0.813-2.135 1.286-3.604 1.286-2.047 0.010-3.922-1.125-4.865-2.938-0.771-1.505-0.771-3.286 0-4.792 0.943-1.813 2.818-2.948 4.859-2.938z">
                                                            </path>
                                                        </svg>
                                                        <p
                                                            class="font-semibold absolute inset-0 w-full whitespace-nowrap translate-y-[110%] translate-x-full top-1 left-2 transition-all duration-700 opacity-0">
                                                            Google Pay
                                                        </p>
                                                    </div>
                                                    <input
                                                        class="checked:text-indigo-500 checked:ring-0 checked:ring-current focus:ring-0 focus:ring-current"
                                                        value="google" name="payment" type="radio" />
                                                </label>
                                                <label
                                                    class="inline-flex justify-between w-full items-center rounded-lg p-2 border border-transparent has-[:checked]:border-indigo-500 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 has-[:checked]:font-bold hover:bg-slate-200 transition-all cursor-pointer has-[:checked]:transition-all has-[:checked]:duration-500 duration-500 relative [&amp;_p]:has-[:checked]:translate-y-0 [&amp;_p]:has-[:checked]:transition-transform [&amp;_p]:has-[:checked]:duration-500 [&amp;_p]:has-[:checked]:opacity-100 overflow-hidden">
                                                    <div class="inline-flex items-center justify-center gap-2 relative">
                                                        <svg fill="currentColor" viewBox="0 0 640 512" height="32"
                                                            width="32" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M116.9 158.5c-7.5 8.9-19.5 15.9-31.5 14.9-1.5-12 4.4-24.8 11.3-32.6 7.5-9.1 20.6-15.6 31.3-16.1 1.2 12.4-3.7 24.7-11.1 33.8m10.9 17.2c-17.4-1-32.3 9.9-40.5 9.9-8.4 0-21-9.4-34.8-9.1-17.9.3-34.5 10.4-43.6 26.5-18.8 32.3-4.9 80 13.3 106.3 8.9 13 19.5 27.3 33.5 26.8 13.3-.5 18.5-8.6 34.5-8.6 16.1 0 20.8 8.6 34.8 8.4 14.5-.3 23.6-13 32.5-26 10.1-14.8 14.3-29.1 14.5-29.9-.3-.3-28-10.9-28.3-42.9-.3-26.8 21.9-39.5 22.9-40.3-12.5-18.6-32-20.6-38.8-21.1m100.4-36.2v194.9h30.3v-66.6h41.9c38.3 0 65.1-26.3 65.1-64.3s-26.4-64-64.1-64h-73.2zm30.3 25.5h34.9c26.3 0 41.3 14 41.3 38.6s-15 38.8-41.4 38.8h-34.8V165zm162.2 170.9c19 0 36.6-9.6 44.6-24.9h.6v23.4h28v-97c0-28.1-22.5-46.3-57.1-46.3-32.1 0-55.9 18.4-56.8 43.6h27.3c2.3-12 13.4-19.9 28.6-19.9 18.5 0 28.9 8.6 28.9 24.5v10.8l-37.8 2.3c-35.1 2.1-54.1 16.5-54.1 41.5.1 25.2 19.7 42 47.8 42zm8.2-23.1c-16.1 0-26.4-7.8-26.4-19.6 0-12.3 9.9-19.4 28.8-20.5l33.6-2.1v11c0 18.2-15.5 31.2-36 31.2zm102.5 74.6c29.5 0 43.4-11.3 55.5-45.4L640 193h-30.8l-35.6 115.1h-.6L537.4 193h-31.6L557 334.9l-2.8 8.6c-4.6 14.6-12.1 20.3-25.5 20.3-2.4 0-7-.3-8.9-.5v23.4c1.8.4 9.3.7 11.6.7z">
                                                            </path>
                                                        </svg>
                                                        <p
                                                            class="font-semibold absolute inset-0 w-full whitespace-nowrap -translate-y-[110%] translate-x-full top-1 left-2 transition-all duration-700 opacity-0">
                                                            Apple Pay
                                                        </p>
                                                    </div>
                                                    <input
                                                        class="checked:text-indigo-500 checked:ring-0 checked:ring-current focus:ring-0 focus:ring-current"
                                                        value="apple" name="payment" type="radio" />
                                                </label>
                                                <label
                                                    class="inline-flex justify-between w-full items-center rounded-lg p-2 border border-transparent has-[:checked]:border-indigo-500 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 has-[:checked]:font-bold hover:bg-slate-200 transition-all cursor-pointer has-[:checked]:transition-all has-[:checked]:duration-500 duration-500 relative [&amp;_p]:has-[:checked]:translate-y-0 [&amp;_p]:has-[:checked]:transition-transform [&amp;_p]:has-[:checked]:duration-500 [&amp;_p]:has-[:checked]:opacity-100 overflow-hidden">
                                                    <div class="inline-flex items-center justify-center gap-2 relative">
                                                        <svg fill="currentColor" height="32" width="32"
                                                            viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M186.3 258.2c0 12.2-9.7 21.5-22 21.5-9.2 0-16-5.2-16-15 0-12.2 9.5-22 21.7-22 9.3 0 16.3 5.7 16.3 15.5zM80.5 209.7h-4.7c-1.5 0-3 1-3.2 2.7l-4.3 26.7 8.2-.3c11 0 19.5-1.5 21.5-14.2 2.3-13.4-6.2-14.9-17.5-14.9zm284 0H360c-1.8 0-3 1-3.2 2.7l-4.2 26.7 8-.3c13 0 22-3 22-18-.1-10.6-9.6-11.1-18.1-11.1zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM128.3 215.4c0-21-16.2-28-34.7-28h-40c-2.5 0-5 2-5.2 4.7L32 294.2c-.3 2 1.2 4 3.2 4h19c2.7 0 5.2-2.9 5.5-5.7l4.5-26.6c1-7.2 13.2-4.7 18-4.7 28.6 0 46.1-17 46.1-45.8zm84.2 8.8h-19c-3.8 0-4 5.5-4.2 8.2-5.8-8.5-14.2-10-23.7-10-24.5 0-43.2 21.5-43.2 45.2 0 19.5 12.2 32.2 31.7 32.2 9 0 20.2-4.9 26.5-11.9-.5 1.5-1 4.7-1 6.2 0 2.3 1 4 3.2 4H200c2.7 0 5-2.9 5.5-5.7l10.2-64.3c.3-1.9-1.2-3.9-3.2-3.9zm40.5 97.9l63.7-92.6c.5-.5.5-1 .5-1.7 0-1.7-1.5-3.5-3.2-3.5h-19.2c-1.7 0-3.5 1-4.5 2.5l-26.5 39-11-37.5c-.8-2.2-3-4-5.5-4h-18.7c-1.7 0-3.2 1.8-3.2 3.5 0 1.2 19.5 56.8 21.2 62.1-2.7 3.8-20.5 28.6-20.5 31.6 0 1.8 1.5 3.2 3.2 3.2h19.2c1.8-.1 3.5-1.1 4.5-2.6zm159.3-106.7c0-21-16.2-28-34.7-28h-39.7c-2.7 0-5.2 2-5.5 4.7l-16.2 102c-.2 2 1.3 4 3.2 4h20.5c2 0 3.5-1.5 4-3.2l4.5-29c1-7.2 13.2-4.7 18-4.7 28.4 0 45.9-17 45.9-45.8zm84.2 8.8h-19c-3.8 0-4 5.5-4.3 8.2-5.5-8.5-14-10-23.7-10-24.5 0-43.2 21.5-43.2 45.2 0 19.5 12.2 32.2 31.7 32.2 9.3 0 20.5-4.9 26.5-11.9-.3 1.5-1 4.7-1 6.2 0 2.3 1 4 3.2 4H484c2.7 0 5-2.9 5.5-5.7l10.2-64.3c.3-1.9-1.2-3.9-3.2-3.9zm47.5-33.3c0-2-1.5-3.5-3.2-3.5h-18.5c-1.5 0-3 1.2-3.2 2.7l-16.2 104-.3.5c0 1.8 1.5 3.5 3.5 3.5h16.5c2.5 0 5-2.9 5.2-5.7L544 191.2v-.3zm-90 51.8c-12.2 0-21.7 9.7-21.7 22 0 9.7 7 15 16.2 15 12 0 21.7-9.2 21.7-21.5.1-9.8-6.9-15.5-16.2-15.5z">
                                                            </path>
                                                        </svg>
                                                        <p
                                                            class="font-semibold absolute inset-0 w-full whitespace-nowrap -translate-y-[110%] translate-x-full top-1 left-2 transition-all duration-700 opacity-0">
                                                            Paypal
                                                        </p>
                                                    </div>
                                                    <input
                                                        class="checked:text-indigo-500 checked:ring-0 checked:ring-current focus:ring-0 focus:ring-current"
                                                        value="paypal" name="payment" type="radio" />
                                                </label>
                                                <label
                                                    class="inline-flex justify-between w-full items-center rounded-lg p-2 border border-transparent has-[:checked]:border-indigo-500 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 has-[:checked]:font-bold hover:bg-slate-200 transition-all cursor-pointer has-[:checked]:transition-all has-[:checked]:duration-500 duration-500 relative [&amp;_p]:has-[:checked]:translate-y-0 [&amp;_p]:has-[:checked]:transition-transform [&amp;_p]:has-[:checked]:duration-500 [&amp;_p]:has-[:checked]:opacity-100 overflow-hidden">
                                                    <div class="inline-flex items-center justify-center gap-2 relative">
                                                        <svg fill="currentColor" height="32" width="32"
                                                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <g>
                                                                <path d="M0 0h24v24H0z" fill="none"></path>
                                                                <path
                                                                    d="M22.222 15.768l-.225-1.125h-2.514l-.4 1.117-2.015.004a4199.19 4199.19 0 0 1 2.884-6.918c.164-.391.455-.59.884-.588.328.003.863.003 1.606.001L24 15.765l-1.778.003zm-2.173-2.666h1.62l-.605-2.82-1.015 2.82zM7.06 8.257l2.026.002-3.132 7.51-2.051-.002a950.849 950.849 0 0 1-1.528-5.956c-.1-.396-.298-.673-.679-.804C1.357 8.89.792 8.71 0 8.465V8.26h3.237c.56 0 .887.271.992.827.106.557.372 1.975.8 4.254L7.06 8.257zm4.81.002l-1.602 7.508-1.928-.002L9.94 8.257l1.93.002zm3.91-.139c.577 0 1.304.18 1.722.345l-.338 1.557c-.378-.152-1-.357-1.523-.35-.76.013-1.23.332-1.23.638 0 .498.816.749 1.656 1.293.959.62 1.085 1.177 1.073 1.782-.013 1.256-1.073 2.495-3.309 2.495-1.02-.015-1.388-.101-2.22-.396l.352-1.625c.847.355 1.206.468 1.93.468.663 0 1.232-.268 1.237-.735.004-.332-.2-.497-.944-.907-.744-.411-1.788-.98-1.774-2.122.017-1.462 1.402-2.443 3.369-2.443z">
                                                                </path>
                                                            </g>
                                                        </svg>
                                                        <p
                                                            class="font-semibold absolute inset-0 w-full whitespace-nowrap translate-y-[110%] translate-x-full top-1 left-2 transition-all duration-700 opacity-0">
                                                            Credit Card
                                                        </p>
                                                    </div>
                                                    <input
                                                        class="checked:text-indigo-500 checked:ring-0 checked:ring-current focus:ring-0 focus:ring-current"
                                                        value="visa" name="payment" type="radio" />
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                    <div class=" w-full">
                                        <div class="w-full border h-full flex justify-center items-center">

                                            <div
                                                class="w-[300px] p-2 aspect-square rounded-lg shadow flex flex-col items-center justify-center gap-2 bg-slate-50">
                                                <p class="capitalize font-semibold self-start">Payment method</p>
                                                <p class="text-[10px] self-start text-wrap text-gray-500 pb-1">
                                                    This component is made by using
                                                </p>
                                                <label
                                                    class="inline-flex justify-between w-full items-center z-10 rounded-lg p-2 border border-transparent has-[:checked]:border-indigo-500 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 has-[:checked]:font-bold hover:bg-slate-200 transition-all cursor-pointer has-[:checked]:transition-all has-[:checked]:duration-500 duration-500 relative [&amp;_p]:has-[:checked]:translate-y-0 [&amp;_p]:has-[:checked]:transition-transform [&amp;_p]:has-[:checked]:duration-500 [&amp;_p]:has-[:checked]:opacity-100 overflow-hidden">
                                                    <div
                                                        class="inline-flex items-center justify-center gap-2 relative z-10">
                                                        <svg fill="currentColor" viewBox="0 0 32 32" height="32"
                                                            width="32" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M32 13.333l-4.177 9.333h-1.292l1.552-3.266-2.75-6.068h1.359l1.99 4.651h0.026l1.927-4.651zM14.646 16.219v3.781h-1.313v-9.333h3.474c0.828-0.021 1.63 0.266 2.25 0.807 0.615 0.505 0.953 1.219 0.943 1.974 0.010 0.766-0.339 1.5-0.943 1.979-0.604 0.531-1.354 0.792-2.25 0.792zM14.641 11.818v3.255h2.198c0.484 0.016 0.958-0.161 1.297-0.479 0.339-0.302 0.526-0.714 0.526-1.141 0-0.432-0.188-0.844-0.526-1.141-0.349-0.333-0.818-0.51-1.297-0.495zM22.63 13.333c0.833 0 1.495 0.234 1.979 0.698s0.724 1.099 0.724 1.906v3.859h-1.083v-0.87h-0.047c-0.469 0.714-1.089 1.073-1.865 1.073-0.667 0-1.219-0.203-1.667-0.615-0.438-0.385-0.682-0.948-0.672-1.531 0-0.646 0.234-1.161 0.708-1.547 0.469-0.38 1.099-0.573 1.885-0.573 0.672 0 1.224 0.13 1.656 0.385v-0.271c0.005-0.396-0.167-0.776-0.464-1.042-0.297-0.276-0.688-0.432-1.094-0.427-0.63 0-1.13 0.276-1.5 0.828l-0.995-0.646c0.547-0.818 1.359-1.229 2.432-1.229zM21.167 17.88c-0.005 0.302 0.135 0.583 0.375 0.766 0.25 0.203 0.563 0.313 0.88 0.307 0.474 0 0.932-0.198 1.271-0.547 0.359-0.333 0.563-0.802 0.563-1.292-0.354-0.292-0.844-0.438-1.474-0.438-0.464 0-0.844 0.115-1.151 0.344-0.307 0.234-0.464 0.516-0.464 0.859zM5.443 10.667c1.344-0.016 2.646 0.479 3.641 1.391l-1.552 1.521c-0.568-0.526-1.318-0.813-2.089-0.797-1.385 0.005-2.609 0.891-3.057 2.198-0.229 0.661-0.229 1.38 0 2.042 0.448 1.307 1.672 2.193 3.057 2.198 0.734 0 1.365-0.182 1.854-0.505 0.568-0.375 0.964-0.958 1.083-1.625h-2.938v-2.052h5.13c0.063 0.359 0.094 0.719 0.094 1.083 0 1.625-0.594 3-1.62 3.927-0.901 0.813-2.135 1.286-3.604 1.286-2.047 0.010-3.922-1.125-4.865-2.938-0.771-1.505-0.771-3.286 0-4.792 0.943-1.813 2.818-2.948 4.859-2.938z">
                                                            </path>
                                                        </svg>
                                                        <p
                                                            class="font-semibold absolute inset-0 w-full whitespace-nowrap translate-y-[110%] translate-x-full top-1 left-2 transition-all duration-700 opacity-0">
                                                            Google Pay
                                                        </p>
                                                    </div>
                                                    <input
                                                        class="checked:text-indigo-500 checked:ring-0 checked:ring-current focus:ring-0 focus:ring-current"
                                                        value="google" name="payment" type="radio" />
                                                </label>
                                                <label
                                                    class="inline-flex justify-between w-full items-center rounded-lg p-2 border border-transparent has-[:checked]:border-indigo-500 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 has-[:checked]:font-bold hover:bg-slate-200 transition-all cursor-pointer has-[:checked]:transition-all has-[:checked]:duration-500 duration-500 relative [&amp;_p]:has-[:checked]:translate-y-0 [&amp;_p]:has-[:checked]:transition-transform [&amp;_p]:has-[:checked]:duration-500 [&amp;_p]:has-[:checked]:opacity-100 overflow-hidden">
                                                    <div class="inline-flex items-center justify-center gap-2 relative">
                                                        <svg fill="currentColor" viewBox="0 0 640 512" height="32"
                                                            width="32" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M116.9 158.5c-7.5 8.9-19.5 15.9-31.5 14.9-1.5-12 4.4-24.8 11.3-32.6 7.5-9.1 20.6-15.6 31.3-16.1 1.2 12.4-3.7 24.7-11.1 33.8m10.9 17.2c-17.4-1-32.3 9.9-40.5 9.9-8.4 0-21-9.4-34.8-9.1-17.9.3-34.5 10.4-43.6 26.5-18.8 32.3-4.9 80 13.3 106.3 8.9 13 19.5 27.3 33.5 26.8 13.3-.5 18.5-8.6 34.5-8.6 16.1 0 20.8 8.6 34.8 8.4 14.5-.3 23.6-13 32.5-26 10.1-14.8 14.3-29.1 14.5-29.9-.3-.3-28-10.9-28.3-42.9-.3-26.8 21.9-39.5 22.9-40.3-12.5-18.6-32-20.6-38.8-21.1m100.4-36.2v194.9h30.3v-66.6h41.9c38.3 0 65.1-26.3 65.1-64.3s-26.4-64-64.1-64h-73.2zm30.3 25.5h34.9c26.3 0 41.3 14 41.3 38.6s-15 38.8-41.4 38.8h-34.8V165zm162.2 170.9c19 0 36.6-9.6 44.6-24.9h.6v23.4h28v-97c0-28.1-22.5-46.3-57.1-46.3-32.1 0-55.9 18.4-56.8 43.6h27.3c2.3-12 13.4-19.9 28.6-19.9 18.5 0 28.9 8.6 28.9 24.5v10.8l-37.8 2.3c-35.1 2.1-54.1 16.5-54.1 41.5.1 25.2 19.7 42 47.8 42zm8.2-23.1c-16.1 0-26.4-7.8-26.4-19.6 0-12.3 9.9-19.4 28.8-20.5l33.6-2.1v11c0 18.2-15.5 31.2-36 31.2zm102.5 74.6c29.5 0 43.4-11.3 55.5-45.4L640 193h-30.8l-35.6 115.1h-.6L537.4 193h-31.6L557 334.9l-2.8 8.6c-4.6 14.6-12.1 20.3-25.5 20.3-2.4 0-7-.3-8.9-.5v23.4c1.8.4 9.3.7 11.6.7z">
                                                            </path>
                                                        </svg>
                                                        <p
                                                            class="font-semibold absolute inset-0 w-full whitespace-nowrap -translate-y-[110%] translate-x-full top-1 left-2 transition-all duration-700 opacity-0">
                                                            Apple Pay
                                                        </p>
                                                    </div>
                                                    <input
                                                        class="checked:text-indigo-500 checked:ring-0 checked:ring-current focus:ring-0 focus:ring-current"
                                                        value="apple" name="payment" type="radio" />
                                                </label>
                                                <label
                                                    class="inline-flex justify-between w-full items-center rounded-lg p-2 border border-transparent has-[:checked]:border-indigo-500 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 has-[:checked]:font-bold hover:bg-slate-200 transition-all cursor-pointer has-[:checked]:transition-all has-[:checked]:duration-500 duration-500 relative [&amp;_p]:has-[:checked]:translate-y-0 [&amp;_p]:has-[:checked]:transition-transform [&amp;_p]:has-[:checked]:duration-500 [&amp;_p]:has-[:checked]:opacity-100 overflow-hidden">
                                                    <div class="inline-flex items-center justify-center gap-2 relative">
                                                        <svg fill="currentColor" height="32" width="32"
                                                            viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M186.3 258.2c0 12.2-9.7 21.5-22 21.5-9.2 0-16-5.2-16-15 0-12.2 9.5-22 21.7-22 9.3 0 16.3 5.7 16.3 15.5zM80.5 209.7h-4.7c-1.5 0-3 1-3.2 2.7l-4.3 26.7 8.2-.3c11 0 19.5-1.5 21.5-14.2 2.3-13.4-6.2-14.9-17.5-14.9zm284 0H360c-1.8 0-3 1-3.2 2.7l-4.2 26.7 8-.3c13 0 22-3 22-18-.1-10.6-9.6-11.1-18.1-11.1zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM128.3 215.4c0-21-16.2-28-34.7-28h-40c-2.5 0-5 2-5.2 4.7L32 294.2c-.3 2 1.2 4 3.2 4h19c2.7 0 5.2-2.9 5.5-5.7l4.5-26.6c1-7.2 13.2-4.7 18-4.7 28.6 0 46.1-17 46.1-45.8zm84.2 8.8h-19c-3.8 0-4 5.5-4.2 8.2-5.8-8.5-14.2-10-23.7-10-24.5 0-43.2 21.5-43.2 45.2 0 19.5 12.2 32.2 31.7 32.2 9 0 20.2-4.9 26.5-11.9-.5 1.5-1 4.7-1 6.2 0 2.3 1 4 3.2 4H200c2.7 0 5-2.9 5.5-5.7l10.2-64.3c.3-1.9-1.2-3.9-3.2-3.9zm40.5 97.9l63.7-92.6c.5-.5.5-1 .5-1.7 0-1.7-1.5-3.5-3.2-3.5h-19.2c-1.7 0-3.5 1-4.5 2.5l-26.5 39-11-37.5c-.8-2.2-3-4-5.5-4h-18.7c-1.7 0-3.2 1.8-3.2 3.5 0 1.2 19.5 56.8 21.2 62.1-2.7 3.8-20.5 28.6-20.5 31.6 0 1.8 1.5 3.2 3.2 3.2h19.2c1.8-.1 3.5-1.1 4.5-2.6zm159.3-106.7c0-21-16.2-28-34.7-28h-39.7c-2.7 0-5.2 2-5.5 4.7l-16.2 102c-.2 2 1.3 4 3.2 4h20.5c2 0 3.5-1.5 4-3.2l4.5-29c1-7.2 13.2-4.7 18-4.7 28.4 0 45.9-17 45.9-45.8zm84.2 8.8h-19c-3.8 0-4 5.5-4.3 8.2-5.5-8.5-14-10-23.7-10-24.5 0-43.2 21.5-43.2 45.2 0 19.5 12.2 32.2 31.7 32.2 9.3 0 20.5-4.9 26.5-11.9-.3 1.5-1 4.7-1 6.2 0 2.3 1 4 3.2 4H484c2.7 0 5-2.9 5.5-5.7l10.2-64.3c.3-1.9-1.2-3.9-3.2-3.9zm47.5-33.3c0-2-1.5-3.5-3.2-3.5h-18.5c-1.5 0-3 1.2-3.2 2.7l-16.2 104-.3.5c0 1.8 1.5 3.5 3.5 3.5h16.5c2.5 0 5-2.9 5.2-5.7L544 191.2v-.3zm-90 51.8c-12.2 0-21.7 9.7-21.7 22 0 9.7 7 15 16.2 15 12 0 21.7-9.2 21.7-21.5.1-9.8-6.9-15.5-16.2-15.5z">
                                                            </path>
                                                        </svg>
                                                        <p
                                                            class="font-semibold absolute inset-0 w-full whitespace-nowrap -translate-y-[110%] translate-x-full top-1 left-2 transition-all duration-700 opacity-0">
                                                            Paypal
                                                        </p>
                                                    </div>
                                                    <input
                                                        class="checked:text-indigo-500 checked:ring-0 checked:ring-current focus:ring-0 focus:ring-current"
                                                        value="paypal" name="payment" type="radio" />
                                                </label>
                                                <label
                                                    class="inline-flex justify-between w-full items-center rounded-lg p-2 border border-transparent has-[:checked]:border-indigo-500 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 has-[:checked]:font-bold hover:bg-slate-200 transition-all cursor-pointer has-[:checked]:transition-all has-[:checked]:duration-500 duration-500 relative [&amp;_p]:has-[:checked]:translate-y-0 [&amp;_p]:has-[:checked]:transition-transform [&amp;_p]:has-[:checked]:duration-500 [&amp;_p]:has-[:checked]:opacity-100 overflow-hidden">
                                                    <div class="inline-flex items-center justify-center gap-2 relative">
                                                        <svg fill="currentColor" height="32" width="32"
                                                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <g>
                                                                <path d="M0 0h24v24H0z" fill="none"></path>
                                                                <path
                                                                    d="M22.222 15.768l-.225-1.125h-2.514l-.4 1.117-2.015.004a4199.19 4199.19 0 0 1 2.884-6.918c.164-.391.455-.59.884-.588.328.003.863.003 1.606.001L24 15.765l-1.778.003zm-2.173-2.666h1.62l-.605-2.82-1.015 2.82zM7.06 8.257l2.026.002-3.132 7.51-2.051-.002a950.849 950.849 0 0 1-1.528-5.956c-.1-.396-.298-.673-.679-.804C1.357 8.89.792 8.71 0 8.465V8.26h3.237c.56 0 .887.271.992.827.106.557.372 1.975.8 4.254L7.06 8.257zm4.81.002l-1.602 7.508-1.928-.002L9.94 8.257l1.93.002zm3.91-.139c.577 0 1.304.18 1.722.345l-.338 1.557c-.378-.152-1-.357-1.523-.35-.76.013-1.23.332-1.23.638 0 .498.816.749 1.656 1.293.959.62 1.085 1.177 1.073 1.782-.013 1.256-1.073 2.495-3.309 2.495-1.02-.015-1.388-.101-2.22-.396l.352-1.625c.847.355 1.206.468 1.93.468.663 0 1.232-.268 1.237-.735.004-.332-.2-.497-.944-.907-.744-.411-1.788-.98-1.774-2.122.017-1.462 1.402-2.443 3.369-2.443z">
                                                                </path>
                                                            </g>
                                                        </svg>
                                                        <p
                                                            class="font-semibold absolute inset-0 w-full whitespace-nowrap translate-y-[110%] translate-x-full top-1 left-2 transition-all duration-700 opacity-0">
                                                            Credit Card
                                                        </p>
                                                    </div>
                                                    <input
                                                        class="checked:text-indigo-500 checked:ring-0 checked:ring-current focus:ring-0 focus:ring-current"
                                                        value="visa" name="payment" type="radio" />
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                    <div class=" w-full">
                                        <div class="w-full border h-full flex justify-center items-center">

                                            <div
                                                class="w-[300px] p-2 aspect-square rounded-lg shadow flex flex-col items-center justify-center gap-2 bg-slate-50">
                                                <p class="capitalize font-semibold self-start">Payment method</p>
                                                <p class="text-[10px] self-start text-wrap text-gray-500 pb-1">
                                                    This component is made by using

                                                </p>
                                                <label
                                                    class="inline-flex justify-between w-full items-center z-10 rounded-lg p-2 border border-transparent has-[:checked]:border-indigo-500 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 has-[:checked]:font-bold hover:bg-slate-200 transition-all cursor-pointer has-[:checked]:transition-all has-[:checked]:duration-500 duration-500 relative [&amp;_p]:has-[:checked]:translate-y-0 [&amp;_p]:has-[:checked]:transition-transform [&amp;_p]:has-[:checked]:duration-500 [&amp;_p]:has-[:checked]:opacity-100 overflow-hidden">
                                                    <div
                                                        class="inline-flex items-center justify-center gap-2 relative z-10">
                                                        <svg fill="currentColor" viewBox="0 0 32 32" height="32"
                                                            width="32" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M32 13.333l-4.177 9.333h-1.292l1.552-3.266-2.75-6.068h1.359l1.99 4.651h0.026l1.927-4.651zM14.646 16.219v3.781h-1.313v-9.333h3.474c0.828-0.021 1.63 0.266 2.25 0.807 0.615 0.505 0.953 1.219 0.943 1.974 0.010 0.766-0.339 1.5-0.943 1.979-0.604 0.531-1.354 0.792-2.25 0.792zM14.641 11.818v3.255h2.198c0.484 0.016 0.958-0.161 1.297-0.479 0.339-0.302 0.526-0.714 0.526-1.141 0-0.432-0.188-0.844-0.526-1.141-0.349-0.333-0.818-0.51-1.297-0.495zM22.63 13.333c0.833 0 1.495 0.234 1.979 0.698s0.724 1.099 0.724 1.906v3.859h-1.083v-0.87h-0.047c-0.469 0.714-1.089 1.073-1.865 1.073-0.667 0-1.219-0.203-1.667-0.615-0.438-0.385-0.682-0.948-0.672-1.531 0-0.646 0.234-1.161 0.708-1.547 0.469-0.38 1.099-0.573 1.885-0.573 0.672 0 1.224 0.13 1.656 0.385v-0.271c0.005-0.396-0.167-0.776-0.464-1.042-0.297-0.276-0.688-0.432-1.094-0.427-0.63 0-1.13 0.276-1.5 0.828l-0.995-0.646c0.547-0.818 1.359-1.229 2.432-1.229zM21.167 17.88c-0.005 0.302 0.135 0.583 0.375 0.766 0.25 0.203 0.563 0.313 0.88 0.307 0.474 0 0.932-0.198 1.271-0.547 0.359-0.333 0.563-0.802 0.563-1.292-0.354-0.292-0.844-0.438-1.474-0.438-0.464 0-0.844 0.115-1.151 0.344-0.307 0.234-0.464 0.516-0.464 0.859zM5.443 10.667c1.344-0.016 2.646 0.479 3.641 1.391l-1.552 1.521c-0.568-0.526-1.318-0.813-2.089-0.797-1.385 0.005-2.609 0.891-3.057 2.198-0.229 0.661-0.229 1.38 0 2.042 0.448 1.307 1.672 2.193 3.057 2.198 0.734 0 1.365-0.182 1.854-0.505 0.568-0.375 0.964-0.958 1.083-1.625h-2.938v-2.052h5.13c0.063 0.359 0.094 0.719 0.094 1.083 0 1.625-0.594 3-1.62 3.927-0.901 0.813-2.135 1.286-3.604 1.286-2.047 0.010-3.922-1.125-4.865-2.938-0.771-1.505-0.771-3.286 0-4.792 0.943-1.813 2.818-2.948 4.859-2.938z">
                                                            </path>
                                                        </svg>
                                                        <p
                                                            class="font-semibold absolute inset-0 w-full whitespace-nowrap translate-y-[110%] translate-x-full top-1 left-2 transition-all duration-700 opacity-0">
                                                            Google Pay
                                                        </p>
                                                    </div>
                                                    <input
                                                        class="checked:text-indigo-500 checked:ring-0 checked:ring-current focus:ring-0 focus:ring-current"
                                                        value="google" name="payment" type="radio" />
                                                </label>
                                                <label
                                                    class="inline-flex justify-between w-full items-center rounded-lg p-2 border border-transparent has-[:checked]:border-indigo-500 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 has-[:checked]:font-bold hover:bg-slate-200 transition-all cursor-pointer has-[:checked]:transition-all has-[:checked]:duration-500 duration-500 relative [&amp;_p]:has-[:checked]:translate-y-0 [&amp;_p]:has-[:checked]:transition-transform [&amp;_p]:has-[:checked]:duration-500 [&amp;_p]:has-[:checked]:opacity-100 overflow-hidden">
                                                    <div class="inline-flex items-center justify-center gap-2 relative">
                                                        <svg fill="currentColor" viewBox="0 0 640 512" height="32"
                                                            width="32" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M116.9 158.5c-7.5 8.9-19.5 15.9-31.5 14.9-1.5-12 4.4-24.8 11.3-32.6 7.5-9.1 20.6-15.6 31.3-16.1 1.2 12.4-3.7 24.7-11.1 33.8m10.9 17.2c-17.4-1-32.3 9.9-40.5 9.9-8.4 0-21-9.4-34.8-9.1-17.9.3-34.5 10.4-43.6 26.5-18.8 32.3-4.9 80 13.3 106.3 8.9 13 19.5 27.3 33.5 26.8 13.3-.5 18.5-8.6 34.5-8.6 16.1 0 20.8 8.6 34.8 8.4 14.5-.3 23.6-13 32.5-26 10.1-14.8 14.3-29.1 14.5-29.9-.3-.3-28-10.9-28.3-42.9-.3-26.8 21.9-39.5 22.9-40.3-12.5-18.6-32-20.6-38.8-21.1m100.4-36.2v194.9h30.3v-66.6h41.9c38.3 0 65.1-26.3 65.1-64.3s-26.4-64-64.1-64h-73.2zm30.3 25.5h34.9c26.3 0 41.3 14 41.3 38.6s-15 38.8-41.4 38.8h-34.8V165zm162.2 170.9c19 0 36.6-9.6 44.6-24.9h.6v23.4h28v-97c0-28.1-22.5-46.3-57.1-46.3-32.1 0-55.9 18.4-56.8 43.6h27.3c2.3-12 13.4-19.9 28.6-19.9 18.5 0 28.9 8.6 28.9 24.5v10.8l-37.8 2.3c-35.1 2.1-54.1 16.5-54.1 41.5.1 25.2 19.7 42 47.8 42zm8.2-23.1c-16.1 0-26.4-7.8-26.4-19.6 0-12.3 9.9-19.4 28.8-20.5l33.6-2.1v11c0 18.2-15.5 31.2-36 31.2zm102.5 74.6c29.5 0 43.4-11.3 55.5-45.4L640 193h-30.8l-35.6 115.1h-.6L537.4 193h-31.6L557 334.9l-2.8 8.6c-4.6 14.6-12.1 20.3-25.5 20.3-2.4 0-7-.3-8.9-.5v23.4c1.8.4 9.3.7 11.6.7z">
                                                            </path>
                                                        </svg>
                                                        <p
                                                            class="font-semibold absolute inset-0 w-full whitespace-nowrap -translate-y-[110%] translate-x-full top-1 left-2 transition-all duration-700 opacity-0">
                                                            Apple Pay
                                                        </p>
                                                    </div>
                                                    <input
                                                        class="checked:text-indigo-500 checked:ring-0 checked:ring-current focus:ring-0 focus:ring-current"
                                                        value="apple" name="payment" type="radio" />
                                                </label>
                                                <label
                                                    class="inline-flex justify-between w-full items-center rounded-lg p-2 border border-transparent has-[:checked]:border-indigo-500 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 has-[:checked]:font-bold hover:bg-slate-200 transition-all cursor-pointer has-[:checked]:transition-all has-[:checked]:duration-500 duration-500 relative [&amp;_p]:has-[:checked]:translate-y-0 [&amp;_p]:has-[:checked]:transition-transform [&amp;_p]:has-[:checked]:duration-500 [&amp;_p]:has-[:checked]:opacity-100 overflow-hidden">
                                                    <div class="inline-flex items-center justify-center gap-2 relative">
                                                        <svg fill="currentColor" height="32" width="32"
                                                            viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M186.3 258.2c0 12.2-9.7 21.5-22 21.5-9.2 0-16-5.2-16-15 0-12.2 9.5-22 21.7-22 9.3 0 16.3 5.7 16.3 15.5zM80.5 209.7h-4.7c-1.5 0-3 1-3.2 2.7l-4.3 26.7 8.2-.3c11 0 19.5-1.5 21.5-14.2 2.3-13.4-6.2-14.9-17.5-14.9zm284 0H360c-1.8 0-3 1-3.2 2.7l-4.2 26.7 8-.3c13 0 22-3 22-18-.1-10.6-9.6-11.1-18.1-11.1zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM128.3 215.4c0-21-16.2-28-34.7-28h-40c-2.5 0-5 2-5.2 4.7L32 294.2c-.3 2 1.2 4 3.2 4h19c2.7 0 5.2-2.9 5.5-5.7l4.5-26.6c1-7.2 13.2-4.7 18-4.7 28.6 0 46.1-17 46.1-45.8zm84.2 8.8h-19c-3.8 0-4 5.5-4.2 8.2-5.8-8.5-14.2-10-23.7-10-24.5 0-43.2 21.5-43.2 45.2 0 19.5 12.2 32.2 31.7 32.2 9 0 20.2-4.9 26.5-11.9-.5 1.5-1 4.7-1 6.2 0 2.3 1 4 3.2 4H200c2.7 0 5-2.9 5.5-5.7l10.2-64.3c.3-1.9-1.2-3.9-3.2-3.9zm40.5 97.9l63.7-92.6c.5-.5.5-1 .5-1.7 0-1.7-1.5-3.5-3.2-3.5h-19.2c-1.7 0-3.5 1-4.5 2.5l-26.5 39-11-37.5c-.8-2.2-3-4-5.5-4h-18.7c-1.7 0-3.2 1.8-3.2 3.5 0 1.2 19.5 56.8 21.2 62.1-2.7 3.8-20.5 28.6-20.5 31.6 0 1.8 1.5 3.2 3.2 3.2h19.2c1.8-.1 3.5-1.1 4.5-2.6zm159.3-106.7c0-21-16.2-28-34.7-28h-39.7c-2.7 0-5.2 2-5.5 4.7l-16.2 102c-.2 2 1.3 4 3.2 4h20.5c2 0 3.5-1.5 4-3.2l4.5-29c1-7.2 13.2-4.7 18-4.7 28.4 0 45.9-17 45.9-45.8zm84.2 8.8h-19c-3.8 0-4 5.5-4.3 8.2-5.5-8.5-14-10-23.7-10-24.5 0-43.2 21.5-43.2 45.2 0 19.5 12.2 32.2 31.7 32.2 9.3 0 20.5-4.9 26.5-11.9-.3 1.5-1 4.7-1 6.2 0 2.3 1 4 3.2 4H484c2.7 0 5-2.9 5.5-5.7l10.2-64.3c.3-1.9-1.2-3.9-3.2-3.9zm47.5-33.3c0-2-1.5-3.5-3.2-3.5h-18.5c-1.5 0-3 1.2-3.2 2.7l-16.2 104-.3.5c0 1.8 1.5 3.5 3.5 3.5h16.5c2.5 0 5-2.9 5.2-5.7L544 191.2v-.3zm-90 51.8c-12.2 0-21.7 9.7-21.7 22 0 9.7 7 15 16.2 15 12 0 21.7-9.2 21.7-21.5.1-9.8-6.9-15.5-16.2-15.5z">
                                                            </path>
                                                        </svg>
                                                        <p
                                                            class="font-semibold absolute inset-0 w-full whitespace-nowrap -translate-y-[110%] translate-x-full top-1 left-2 transition-all duration-700 opacity-0">
                                                            Paypal
                                                        </p>
                                                    </div>
                                                    <input
                                                        class="checked:text-indigo-500 checked:ring-0 checked:ring-current focus:ring-0 focus:ring-current"
                                                        value="paypal" name="payment" type="radio" />
                                                </label>
                                                <label
                                                    class="inline-flex justify-between w-full items-center rounded-lg p-2 border border-transparent has-[:checked]:border-indigo-500 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 has-[:checked]:font-bold hover:bg-slate-200 transition-all cursor-pointer has-[:checked]:transition-all has-[:checked]:duration-500 duration-500 relative [&amp;_p]:has-[:checked]:translate-y-0 [&amp;_p]:has-[:checked]:transition-transform [&amp;_p]:has-[:checked]:duration-500 [&amp;_p]:has-[:checked]:opacity-100 overflow-hidden">
                                                    <div class="inline-flex items-center justify-center gap-2 relative">
                                                        <svg fill="currentColor" height="32" width="32"
                                                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <g>
                                                                <path d="M0 0h24v24H0z" fill="none"></path>
                                                                <path
                                                                    d="M22.222 15.768l-.225-1.125h-2.514l-.4 1.117-2.015.004a4199.19 4199.19 0 0 1 2.884-6.918c.164-.391.455-.59.884-.588.328.003.863.003 1.606.001L24 15.765l-1.778.003zm-2.173-2.666h1.62l-.605-2.82-1.015 2.82zM7.06 8.257l2.026.002-3.132 7.51-2.051-.002a950.849 950.849 0 0 1-1.528-5.956c-.1-.396-.298-.673-.679-.804C1.357 8.89.792 8.71 0 8.465V8.26h3.237c.56 0 .887.271.992.827.106.557.372 1.975.8 4.254L7.06 8.257zm4.81.002l-1.602 7.508-1.928-.002L9.94 8.257l1.93.002zm3.91-.139c.577 0 1.304.18 1.722.345l-.338 1.557c-.378-.152-1-.357-1.523-.35-.76.013-1.23.332-1.23.638 0 .498.816.749 1.656 1.293.959.62 1.085 1.177 1.073 1.782-.013 1.256-1.073 2.495-3.309 2.495-1.02-.015-1.388-.101-2.22-.396l.352-1.625c.847.355 1.206.468 1.93.468.663 0 1.232-.268 1.237-.735.004-.332-.2-.497-.944-.907-.744-.411-1.788-.98-1.774-2.122.017-1.462 1.402-2.443 3.369-2.443z">
                                                                </path>
                                                            </g>
                                                        </svg>
                                                        <p
                                                            class="font-semibold absolute inset-0 w-full whitespace-nowrap translate-y-[110%] translate-x-full top-1 left-2 transition-all duration-700 opacity-0">
                                                            Credit Card
                                                        </p>
                                                    </div>
                                                    <input
                                                        class="checked:text-indigo-500 checked:ring-0 checked:ring-current focus:ring-0 focus:ring-current"
                                                        value="visa" name="payment" type="radio" />
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="gap-2 my-5 justify-between w-full h-[35vh] overflow-hidden flex ">
                                    <div class=" w-full">
                                        <div class="w-full border h-full flex justify-center items-center">

                                            <div
                                                class="w-[300px] p-2 aspect-square rounded-lg shadow flex flex-col items-center justify-center gap-2 bg-slate-50">
                                                <p class="capitalize font-semibold self-start">Payment method</p>
                                                <p class="text-[10px] self-start text-wrap text-gray-500 pb-1">
                                                    This component is made by using

                                                </p>
                                                <label
                                                    class="inline-flex justify-between w-full items-center z-10 rounded-lg p-2 border border-transparent has-[:checked]:border-indigo-500 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 has-[:checked]:font-bold hover:bg-slate-200 transition-all cursor-pointer has-[:checked]:transition-all has-[:checked]:duration-500 duration-500 relative [&amp;_p]:has-[:checked]:translate-y-0 [&amp;_p]:has-[:checked]:transition-transform [&amp;_p]:has-[:checked]:duration-500 [&amp;_p]:has-[:checked]:opacity-100 overflow-hidden">
                                                    <div
                                                        class="inline-flex items-center justify-center gap-2 relative z-10">
                                                        <svg fill="currentColor" viewBox="0 0 32 32" height="32"
                                                            width="32" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M32 13.333l-4.177 9.333h-1.292l1.552-3.266-2.75-6.068h1.359l1.99 4.651h0.026l1.927-4.651zM14.646 16.219v3.781h-1.313v-9.333h3.474c0.828-0.021 1.63 0.266 2.25 0.807 0.615 0.505 0.953 1.219 0.943 1.974 0.010 0.766-0.339 1.5-0.943 1.979-0.604 0.531-1.354 0.792-2.25 0.792zM14.641 11.818v3.255h2.198c0.484 0.016 0.958-0.161 1.297-0.479 0.339-0.302 0.526-0.714 0.526-1.141 0-0.432-0.188-0.844-0.526-1.141-0.349-0.333-0.818-0.51-1.297-0.495zM22.63 13.333c0.833 0 1.495 0.234 1.979 0.698s0.724 1.099 0.724 1.906v3.859h-1.083v-0.87h-0.047c-0.469 0.714-1.089 1.073-1.865 1.073-0.667 0-1.219-0.203-1.667-0.615-0.438-0.385-0.682-0.948-0.672-1.531 0-0.646 0.234-1.161 0.708-1.547 0.469-0.38 1.099-0.573 1.885-0.573 0.672 0 1.224 0.13 1.656 0.385v-0.271c0.005-0.396-0.167-0.776-0.464-1.042-0.297-0.276-0.688-0.432-1.094-0.427-0.63 0-1.13 0.276-1.5 0.828l-0.995-0.646c0.547-0.818 1.359-1.229 2.432-1.229zM21.167 17.88c-0.005 0.302 0.135 0.583 0.375 0.766 0.25 0.203 0.563 0.313 0.88 0.307 0.474 0 0.932-0.198 1.271-0.547 0.359-0.333 0.563-0.802 0.563-1.292-0.354-0.292-0.844-0.438-1.474-0.438-0.464 0-0.844 0.115-1.151 0.344-0.307 0.234-0.464 0.516-0.464 0.859zM5.443 10.667c1.344-0.016 2.646 0.479 3.641 1.391l-1.552 1.521c-0.568-0.526-1.318-0.813-2.089-0.797-1.385 0.005-2.609 0.891-3.057 2.198-0.229 0.661-0.229 1.38 0 2.042 0.448 1.307 1.672 2.193 3.057 2.198 0.734 0 1.365-0.182 1.854-0.505 0.568-0.375 0.964-0.958 1.083-1.625h-2.938v-2.052h5.13c0.063 0.359 0.094 0.719 0.094 1.083 0 1.625-0.594 3-1.62 3.927-0.901 0.813-2.135 1.286-3.604 1.286-2.047 0.010-3.922-1.125-4.865-2.938-0.771-1.505-0.771-3.286 0-4.792 0.943-1.813 2.818-2.948 4.859-2.938z">
                                                            </path>
                                                        </svg>
                                                        <p
                                                            class="font-semibold absolute inset-0 w-full whitespace-nowrap translate-y-[110%] translate-x-full top-1 left-2 transition-all duration-700 opacity-0">
                                                            Google Pay
                                                        </p>
                                                    </div>
                                                    <input
                                                        class="checked:text-indigo-500 checked:ring-0 checked:ring-current focus:ring-0 focus:ring-current"
                                                        value="google" name="payment" type="radio" />
                                                </label>
                                                <label
                                                    class="inline-flex justify-between w-full items-center rounded-lg p-2 border border-transparent has-[:checked]:border-indigo-500 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 has-[:checked]:font-bold hover:bg-slate-200 transition-all cursor-pointer has-[:checked]:transition-all has-[:checked]:duration-500 duration-500 relative [&amp;_p]:has-[:checked]:translate-y-0 [&amp;_p]:has-[:checked]:transition-transform [&amp;_p]:has-[:checked]:duration-500 [&amp;_p]:has-[:checked]:opacity-100 overflow-hidden">
                                                    <div class="inline-flex items-center justify-center gap-2 relative">
                                                        <svg fill="currentColor" viewBox="0 0 640 512" height="32"
                                                            width="32" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M116.9 158.5c-7.5 8.9-19.5 15.9-31.5 14.9-1.5-12 4.4-24.8 11.3-32.6 7.5-9.1 20.6-15.6 31.3-16.1 1.2 12.4-3.7 24.7-11.1 33.8m10.9 17.2c-17.4-1-32.3 9.9-40.5 9.9-8.4 0-21-9.4-34.8-9.1-17.9.3-34.5 10.4-43.6 26.5-18.8 32.3-4.9 80 13.3 106.3 8.9 13 19.5 27.3 33.5 26.8 13.3-.5 18.5-8.6 34.5-8.6 16.1 0 20.8 8.6 34.8 8.4 14.5-.3 23.6-13 32.5-26 10.1-14.8 14.3-29.1 14.5-29.9-.3-.3-28-10.9-28.3-42.9-.3-26.8 21.9-39.5 22.9-40.3-12.5-18.6-32-20.6-38.8-21.1m100.4-36.2v194.9h30.3v-66.6h41.9c38.3 0 65.1-26.3 65.1-64.3s-26.4-64-64.1-64h-73.2zm30.3 25.5h34.9c26.3 0 41.3 14 41.3 38.6s-15 38.8-41.4 38.8h-34.8V165zm162.2 170.9c19 0 36.6-9.6 44.6-24.9h.6v23.4h28v-97c0-28.1-22.5-46.3-57.1-46.3-32.1 0-55.9 18.4-56.8 43.6h27.3c2.3-12 13.4-19.9 28.6-19.9 18.5 0 28.9 8.6 28.9 24.5v10.8l-37.8 2.3c-35.1 2.1-54.1 16.5-54.1 41.5.1 25.2 19.7 42 47.8 42zm8.2-23.1c-16.1 0-26.4-7.8-26.4-19.6 0-12.3 9.9-19.4 28.8-20.5l33.6-2.1v11c0 18.2-15.5 31.2-36 31.2zm102.5 74.6c29.5 0 43.4-11.3 55.5-45.4L640 193h-30.8l-35.6 115.1h-.6L537.4 193h-31.6L557 334.9l-2.8 8.6c-4.6 14.6-12.1 20.3-25.5 20.3-2.4 0-7-.3-8.9-.5v23.4c1.8.4 9.3.7 11.6.7z">
                                                            </path>
                                                        </svg>
                                                        <p
                                                            class="font-semibold absolute inset-0 w-full whitespace-nowrap -translate-y-[110%] translate-x-full top-1 left-2 transition-all duration-700 opacity-0">
                                                            Apple Pay
                                                        </p>
                                                    </div>
                                                    <input
                                                        class="checked:text-indigo-500 checked:ring-0 checked:ring-current focus:ring-0 focus:ring-current"
                                                        value="apple" name="payment" type="radio" />
                                                </label>
                                                <label
                                                    class="inline-flex justify-between w-full items-center rounded-lg p-2 border border-transparent has-[:checked]:border-indigo-500 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 has-[:checked]:font-bold hover:bg-slate-200 transition-all cursor-pointer has-[:checked]:transition-all has-[:checked]:duration-500 duration-500 relative [&amp;_p]:has-[:checked]:translate-y-0 [&amp;_p]:has-[:checked]:transition-transform [&amp;_p]:has-[:checked]:duration-500 [&amp;_p]:has-[:checked]:opacity-100 overflow-hidden">
                                                    <div class="inline-flex items-center justify-center gap-2 relative">
                                                        <svg fill="currentColor" height="32" width="32"
                                                            viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M186.3 258.2c0 12.2-9.7 21.5-22 21.5-9.2 0-16-5.2-16-15 0-12.2 9.5-22 21.7-22 9.3 0 16.3 5.7 16.3 15.5zM80.5 209.7h-4.7c-1.5 0-3 1-3.2 2.7l-4.3 26.7 8.2-.3c11 0 19.5-1.5 21.5-14.2 2.3-13.4-6.2-14.9-17.5-14.9zm284 0H360c-1.8 0-3 1-3.2 2.7l-4.2 26.7 8-.3c13 0 22-3 22-18-.1-10.6-9.6-11.1-18.1-11.1zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM128.3 215.4c0-21-16.2-28-34.7-28h-40c-2.5 0-5 2-5.2 4.7L32 294.2c-.3 2 1.2 4 3.2 4h19c2.7 0 5.2-2.9 5.5-5.7l4.5-26.6c1-7.2 13.2-4.7 18-4.7 28.6 0 46.1-17 46.1-45.8zm84.2 8.8h-19c-3.8 0-4 5.5-4.2 8.2-5.8-8.5-14.2-10-23.7-10-24.5 0-43.2 21.5-43.2 45.2 0 19.5 12.2 32.2 31.7 32.2 9 0 20.2-4.9 26.5-11.9-.5 1.5-1 4.7-1 6.2 0 2.3 1 4 3.2 4H200c2.7 0 5-2.9 5.5-5.7l10.2-64.3c.3-1.9-1.2-3.9-3.2-3.9zm40.5 97.9l63.7-92.6c.5-.5.5-1 .5-1.7 0-1.7-1.5-3.5-3.2-3.5h-19.2c-1.7 0-3.5 1-4.5 2.5l-26.5 39-11-37.5c-.8-2.2-3-4-5.5-4h-18.7c-1.7 0-3.2 1.8-3.2 3.5 0 1.2 19.5 56.8 21.2 62.1-2.7 3.8-20.5 28.6-20.5 31.6 0 1.8 1.5 3.2 3.2 3.2h19.2c1.8-.1 3.5-1.1 4.5-2.6zm159.3-106.7c0-21-16.2-28-34.7-28h-39.7c-2.7 0-5.2 2-5.5 4.7l-16.2 102c-.2 2 1.3 4 3.2 4h20.5c2 0 3.5-1.5 4-3.2l4.5-29c1-7.2 13.2-4.7 18-4.7 28.4 0 45.9-17 45.9-45.8zm84.2 8.8h-19c-3.8 0-4 5.5-4.3 8.2-5.5-8.5-14-10-23.7-10-24.5 0-43.2 21.5-43.2 45.2 0 19.5 12.2 32.2 31.7 32.2 9.3 0 20.5-4.9 26.5-11.9-.3 1.5-1 4.7-1 6.2 0 2.3 1 4 3.2 4H484c2.7 0 5-2.9 5.5-5.7l10.2-64.3c.3-1.9-1.2-3.9-3.2-3.9zm47.5-33.3c0-2-1.5-3.5-3.2-3.5h-18.5c-1.5 0-3 1.2-3.2 2.7l-16.2 104-.3.5c0 1.8 1.5 3.5 3.5 3.5h16.5c2.5 0 5-2.9 5.2-5.7L544 191.2v-.3zm-90 51.8c-12.2 0-21.7 9.7-21.7 22 0 9.7 7 15 16.2 15 12 0 21.7-9.2 21.7-21.5.1-9.8-6.9-15.5-16.2-15.5z">
                                                            </path>
                                                        </svg>
                                                        <p
                                                            class="font-semibold absolute inset-0 w-full whitespace-nowrap -translate-y-[110%] translate-x-full top-1 left-2 transition-all duration-700 opacity-0">
                                                            Paypal
                                                        </p>
                                                    </div>
                                                    <input
                                                        class="checked:text-indigo-500 checked:ring-0 checked:ring-current focus:ring-0 focus:ring-current"
                                                        value="paypal" name="payment" type="radio" />
                                                </label>
                                                <label
                                                    class="inline-flex justify-between w-full items-center rounded-lg p-2 border border-transparent has-[:checked]:border-indigo-500 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 has-[:checked]:font-bold hover:bg-slate-200 transition-all cursor-pointer has-[:checked]:transition-all has-[:checked]:duration-500 duration-500 relative [&amp;_p]:has-[:checked]:translate-y-0 [&amp;_p]:has-[:checked]:transition-transform [&amp;_p]:has-[:checked]:duration-500 [&amp;_p]:has-[:checked]:opacity-100 overflow-hidden">
                                                    <div class="inline-flex items-center justify-center gap-2 relative">
                                                        <svg fill="currentColor" height="32" width="32"
                                                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <g>
                                                                <path d="M0 0h24v24H0z" fill="none"></path>
                                                                <path
                                                                    d="M22.222 15.768l-.225-1.125h-2.514l-.4 1.117-2.015.004a4199.19 4199.19 0 0 1 2.884-6.918c.164-.391.455-.59.884-.588.328.003.863.003 1.606.001L24 15.765l-1.778.003zm-2.173-2.666h1.62l-.605-2.82-1.015 2.82zM7.06 8.257l2.026.002-3.132 7.51-2.051-.002a950.849 950.849 0 0 1-1.528-5.956c-.1-.396-.298-.673-.679-.804C1.357 8.89.792 8.71 0 8.465V8.26h3.237c.56 0 .887.271.992.827.106.557.372 1.975.8 4.254L7.06 8.257zm4.81.002l-1.602 7.508-1.928-.002L9.94 8.257l1.93.002zm3.91-.139c.577 0 1.304.18 1.722.345l-.338 1.557c-.378-.152-1-.357-1.523-.35-.76.013-1.23.332-1.23.638 0 .498.816.749 1.656 1.293.959.62 1.085 1.177 1.073 1.782-.013 1.256-1.073 2.495-3.309 2.495-1.02-.015-1.388-.101-2.22-.396l.352-1.625c.847.355 1.206.468 1.93.468.663 0 1.232-.268 1.237-.735.004-.332-.2-.497-.944-.907-.744-.411-1.788-.98-1.774-2.122.017-1.462 1.402-2.443 3.369-2.443z">
                                                                </path>
                                                            </g>
                                                        </svg>
                                                        <p
                                                            class="font-semibold absolute inset-0 w-full whitespace-nowrap translate-y-[110%] translate-x-full top-1 left-2 transition-all duration-700 opacity-0">
                                                            Credit Card
                                                        </p>
                                                    </div>
                                                    <input
                                                        class="checked:text-indigo-500 checked:ring-0 checked:ring-current focus:ring-0 focus:ring-current"
                                                        value="visa" name="payment" type="radio" />
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                    <div class=" w-full">
                                        <div class="w-full border h-full flex justify-center items-center">

                                            <div
                                                class="w-[300px] p-2 aspect-square rounded-lg shadow flex flex-col items-center justify-center gap-2 bg-slate-50">
                                                <p class="capitalize font-semibold self-start">Payment method</p>
                                                <p class="text-[10px] self-start text-wrap text-gray-500 pb-1">
                                                    This component is made by using

                                                </p>
                                                <label
                                                    class="inline-flex justify-between w-full items-center z-10 rounded-lg p-2 border border-transparent has-[:checked]:border-indigo-500 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 has-[:checked]:font-bold hover:bg-slate-200 transition-all cursor-pointer has-[:checked]:transition-all has-[:checked]:duration-500 duration-500 relative [&amp;_p]:has-[:checked]:translate-y-0 [&amp;_p]:has-[:checked]:transition-transform [&amp;_p]:has-[:checked]:duration-500 [&amp;_p]:has-[:checked]:opacity-100 overflow-hidden">
                                                    <div
                                                        class="inline-flex items-center justify-center gap-2 relative z-10">
                                                        <svg fill="currentColor" viewBox="0 0 32 32" height="32"
                                                            width="32" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M32 13.333l-4.177 9.333h-1.292l1.552-3.266-2.75-6.068h1.359l1.99 4.651h0.026l1.927-4.651zM14.646 16.219v3.781h-1.313v-9.333h3.474c0.828-0.021 1.63 0.266 2.25 0.807 0.615 0.505 0.953 1.219 0.943 1.974 0.010 0.766-0.339 1.5-0.943 1.979-0.604 0.531-1.354 0.792-2.25 0.792zM14.641 11.818v3.255h2.198c0.484 0.016 0.958-0.161 1.297-0.479 0.339-0.302 0.526-0.714 0.526-1.141 0-0.432-0.188-0.844-0.526-1.141-0.349-0.333-0.818-0.51-1.297-0.495zM22.63 13.333c0.833 0 1.495 0.234 1.979 0.698s0.724 1.099 0.724 1.906v3.859h-1.083v-0.87h-0.047c-0.469 0.714-1.089 1.073-1.865 1.073-0.667 0-1.219-0.203-1.667-0.615-0.438-0.385-0.682-0.948-0.672-1.531 0-0.646 0.234-1.161 0.708-1.547 0.469-0.38 1.099-0.573 1.885-0.573 0.672 0 1.224 0.13 1.656 0.385v-0.271c0.005-0.396-0.167-0.776-0.464-1.042-0.297-0.276-0.688-0.432-1.094-0.427-0.63 0-1.13 0.276-1.5 0.828l-0.995-0.646c0.547-0.818 1.359-1.229 2.432-1.229zM21.167 17.88c-0.005 0.302 0.135 0.583 0.375 0.766 0.25 0.203 0.563 0.313 0.88 0.307 0.474 0 0.932-0.198 1.271-0.547 0.359-0.333 0.563-0.802 0.563-1.292-0.354-0.292-0.844-0.438-1.474-0.438-0.464 0-0.844 0.115-1.151 0.344-0.307 0.234-0.464 0.516-0.464 0.859zM5.443 10.667c1.344-0.016 2.646 0.479 3.641 1.391l-1.552 1.521c-0.568-0.526-1.318-0.813-2.089-0.797-1.385 0.005-2.609 0.891-3.057 2.198-0.229 0.661-0.229 1.38 0 2.042 0.448 1.307 1.672 2.193 3.057 2.198 0.734 0 1.365-0.182 1.854-0.505 0.568-0.375 0.964-0.958 1.083-1.625h-2.938v-2.052h5.13c0.063 0.359 0.094 0.719 0.094 1.083 0 1.625-0.594 3-1.62 3.927-0.901 0.813-2.135 1.286-3.604 1.286-2.047 0.010-3.922-1.125-4.865-2.938-0.771-1.505-0.771-3.286 0-4.792 0.943-1.813 2.818-2.948 4.859-2.938z">
                                                            </path>
                                                        </svg>
                                                        <p
                                                            class="font-semibold absolute inset-0 w-full whitespace-nowrap translate-y-[110%] translate-x-full top-1 left-2 transition-all duration-700 opacity-0">
                                                            Google Pay
                                                        </p>
                                                    </div>
                                                    <input
                                                        class="checked:text-indigo-500 checked:ring-0 checked:ring-current focus:ring-0 focus:ring-current"
                                                        value="google" name="payment" type="radio" />
                                                </label>
                                                <label
                                                    class="inline-flex justify-between w-full items-center rounded-lg p-2 border border-transparent has-[:checked]:border-indigo-500 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 has-[:checked]:font-bold hover:bg-slate-200 transition-all cursor-pointer has-[:checked]:transition-all has-[:checked]:duration-500 duration-500 relative [&amp;_p]:has-[:checked]:translate-y-0 [&amp;_p]:has-[:checked]:transition-transform [&amp;_p]:has-[:checked]:duration-500 [&amp;_p]:has-[:checked]:opacity-100 overflow-hidden">
                                                    <div class="inline-flex items-center justify-center gap-2 relative">
                                                        <svg fill="currentColor" viewBox="0 0 640 512" height="32"
                                                            width="32" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M116.9 158.5c-7.5 8.9-19.5 15.9-31.5 14.9-1.5-12 4.4-24.8 11.3-32.6 7.5-9.1 20.6-15.6 31.3-16.1 1.2 12.4-3.7 24.7-11.1 33.8m10.9 17.2c-17.4-1-32.3 9.9-40.5 9.9-8.4 0-21-9.4-34.8-9.1-17.9.3-34.5 10.4-43.6 26.5-18.8 32.3-4.9 80 13.3 106.3 8.9 13 19.5 27.3 33.5 26.8 13.3-.5 18.5-8.6 34.5-8.6 16.1 0 20.8 8.6 34.8 8.4 14.5-.3 23.6-13 32.5-26 10.1-14.8 14.3-29.1 14.5-29.9-.3-.3-28-10.9-28.3-42.9-.3-26.8 21.9-39.5 22.9-40.3-12.5-18.6-32-20.6-38.8-21.1m100.4-36.2v194.9h30.3v-66.6h41.9c38.3 0 65.1-26.3 65.1-64.3s-26.4-64-64.1-64h-73.2zm30.3 25.5h34.9c26.3 0 41.3 14 41.3 38.6s-15 38.8-41.4 38.8h-34.8V165zm162.2 170.9c19 0 36.6-9.6 44.6-24.9h.6v23.4h28v-97c0-28.1-22.5-46.3-57.1-46.3-32.1 0-55.9 18.4-56.8 43.6h27.3c2.3-12 13.4-19.9 28.6-19.9 18.5 0 28.9 8.6 28.9 24.5v10.8l-37.8 2.3c-35.1 2.1-54.1 16.5-54.1 41.5.1 25.2 19.7 42 47.8 42zm8.2-23.1c-16.1 0-26.4-7.8-26.4-19.6 0-12.3 9.9-19.4 28.8-20.5l33.6-2.1v11c0 18.2-15.5 31.2-36 31.2zm102.5 74.6c29.5 0 43.4-11.3 55.5-45.4L640 193h-30.8l-35.6 115.1h-.6L537.4 193h-31.6L557 334.9l-2.8 8.6c-4.6 14.6-12.1 20.3-25.5 20.3-2.4 0-7-.3-8.9-.5v23.4c1.8.4 9.3.7 11.6.7z">
                                                            </path>
                                                        </svg>
                                                        <p
                                                            class="font-semibold absolute inset-0 w-full whitespace-nowrap -translate-y-[110%] translate-x-full top-1 left-2 transition-all duration-700 opacity-0">
                                                            Apple Pay
                                                        </p>
                                                    </div>
                                                    <input
                                                        class="checked:text-indigo-500 checked:ring-0 checked:ring-current focus:ring-0 focus:ring-current"
                                                        value="apple" name="payment" type="radio" />
                                                </label>
                                                <label
                                                    class="inline-flex justify-between w-full items-center rounded-lg p-2 border border-transparent has-[:checked]:border-indigo-500 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 has-[:checked]:font-bold hover:bg-slate-200 transition-all cursor-pointer has-[:checked]:transition-all has-[:checked]:duration-500 duration-500 relative [&amp;_p]:has-[:checked]:translate-y-0 [&amp;_p]:has-[:checked]:transition-transform [&amp;_p]:has-[:checked]:duration-500 [&amp;_p]:has-[:checked]:opacity-100 overflow-hidden">
                                                    <div class="inline-flex items-center justify-center gap-2 relative">
                                                        <svg fill="currentColor" height="32" width="32"
                                                            viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M186.3 258.2c0 12.2-9.7 21.5-22 21.5-9.2 0-16-5.2-16-15 0-12.2 9.5-22 21.7-22 9.3 0 16.3 5.7 16.3 15.5zM80.5 209.7h-4.7c-1.5 0-3 1-3.2 2.7l-4.3 26.7 8.2-.3c11 0 19.5-1.5 21.5-14.2 2.3-13.4-6.2-14.9-17.5-14.9zm284 0H360c-1.8 0-3 1-3.2 2.7l-4.2 26.7 8-.3c13 0 22-3 22-18-.1-10.6-9.6-11.1-18.1-11.1zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM128.3 215.4c0-21-16.2-28-34.7-28h-40c-2.5 0-5 2-5.2 4.7L32 294.2c-.3 2 1.2 4 3.2 4h19c2.7 0 5.2-2.9 5.5-5.7l4.5-26.6c1-7.2 13.2-4.7 18-4.7 28.6 0 46.1-17 46.1-45.8zm84.2 8.8h-19c-3.8 0-4 5.5-4.2 8.2-5.8-8.5-14.2-10-23.7-10-24.5 0-43.2 21.5-43.2 45.2 0 19.5 12.2 32.2 31.7 32.2 9 0 20.2-4.9 26.5-11.9-.5 1.5-1 4.7-1 6.2 0 2.3 1 4 3.2 4H200c2.7 0 5-2.9 5.5-5.7l10.2-64.3c.3-1.9-1.2-3.9-3.2-3.9zm40.5 97.9l63.7-92.6c.5-.5.5-1 .5-1.7 0-1.7-1.5-3.5-3.2-3.5h-19.2c-1.7 0-3.5 1-4.5 2.5l-26.5 39-11-37.5c-.8-2.2-3-4-5.5-4h-18.7c-1.7 0-3.2 1.8-3.2 3.5 0 1.2 19.5 56.8 21.2 62.1-2.7 3.8-20.5 28.6-20.5 31.6 0 1.8 1.5 3.2 3.2 3.2h19.2c1.8-.1 3.5-1.1 4.5-2.6zm159.3-106.7c0-21-16.2-28-34.7-28h-39.7c-2.7 0-5.2 2-5.5 4.7l-16.2 102c-.2 2 1.3 4 3.2 4h20.5c2 0 3.5-1.5 4-3.2l4.5-29c1-7.2 13.2-4.7 18-4.7 28.4 0 45.9-17 45.9-45.8zm84.2 8.8h-19c-3.8 0-4 5.5-4.3 8.2-5.5-8.5-14-10-23.7-10-24.5 0-43.2 21.5-43.2 45.2 0 19.5 12.2 32.2 31.7 32.2 9.3 0 20.5-4.9 26.5-11.9-.3 1.5-1 4.7-1 6.2 0 2.3 1 4 3.2 4H484c2.7 0 5-2.9 5.5-5.7l10.2-64.3c.3-1.9-1.2-3.9-3.2-3.9zm47.5-33.3c0-2-1.5-3.5-3.2-3.5h-18.5c-1.5 0-3 1.2-3.2 2.7l-16.2 104-.3.5c0 1.8 1.5 3.5 3.5 3.5h16.5c2.5 0 5-2.9 5.2-5.7L544 191.2v-.3zm-90 51.8c-12.2 0-21.7 9.7-21.7 22 0 9.7 7 15 16.2 15 12 0 21.7-9.2 21.7-21.5.1-9.8-6.9-15.5-16.2-15.5z">
                                                            </path>
                                                        </svg>
                                                        <p
                                                            class="font-semibold absolute inset-0 w-full whitespace-nowrap -translate-y-[110%] translate-x-full top-1 left-2 transition-all duration-700 opacity-0">
                                                            Paypal
                                                        </p>
                                                    </div>
                                                    <input
                                                        class="checked:text-indigo-500 checked:ring-0 checked:ring-current focus:ring-0 focus:ring-current"
                                                        value="paypal" name="payment" type="radio" />
                                                </label>
                                                <label
                                                    class="inline-flex justify-between w-full items-center rounded-lg p-2 border border-transparent has-[:checked]:border-indigo-500 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 has-[:checked]:font-bold hover:bg-slate-200 transition-all cursor-pointer has-[:checked]:transition-all has-[:checked]:duration-500 duration-500 relative [&amp;_p]:has-[:checked]:translate-y-0 [&amp;_p]:has-[:checked]:transition-transform [&amp;_p]:has-[:checked]:duration-500 [&amp;_p]:has-[:checked]:opacity-100 overflow-hidden">
                                                    <div class="inline-flex items-center justify-center gap-2 relative">
                                                        <svg fill="currentColor" height="32" width="32"
                                                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <g>
                                                                <path d="M0 0h24v24H0z" fill="none"></path>
                                                                <path
                                                                    d="M22.222 15.768l-.225-1.125h-2.514l-.4 1.117-2.015.004a4199.19 4199.19 0 0 1 2.884-6.918c.164-.391.455-.59.884-.588.328.003.863.003 1.606.001L24 15.765l-1.778.003zm-2.173-2.666h1.62l-.605-2.82-1.015 2.82zM7.06 8.257l2.026.002-3.132 7.51-2.051-.002a950.849 950.849 0 0 1-1.528-5.956c-.1-.396-.298-.673-.679-.804C1.357 8.89.792 8.71 0 8.465V8.26h3.237c.56 0 .887.271.992.827.106.557.372 1.975.8 4.254L7.06 8.257zm4.81.002l-1.602 7.508-1.928-.002L9.94 8.257l1.93.002zm3.91-.139c.577 0 1.304.18 1.722.345l-.338 1.557c-.378-.152-1-.357-1.523-.35-.76.013-1.23.332-1.23.638 0 .498.816.749 1.656 1.293.959.62 1.085 1.177 1.073 1.782-.013 1.256-1.073 2.495-3.309 2.495-1.02-.015-1.388-.101-2.22-.396l.352-1.625c.847.355 1.206.468 1.93.468.663 0 1.232-.268 1.237-.735.004-.332-.2-.497-.944-.907-.744-.411-1.788-.98-1.774-2.122.017-1.462 1.402-2.443 3.369-2.443z">
                                                                </path>
                                                            </g>
                                                        </svg>
                                                        <p
                                                            class="font-semibold absolute inset-0 w-full whitespace-nowrap translate-y-[110%] translate-x-full top-1 left-2 transition-all duration-700 opacity-0">
                                                            Credit Card
                                                        </p>
                                                    </div>
                                                    <input
                                                        class="checked:text-indigo-500 checked:ring-0 checked:ring-current focus:ring-0 focus:ring-current"
                                                        value="visa" name="payment" type="radio" />
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                    <div class=" w-full">
                                        <div class="w-full border h-full flex justify-center items-center">

                                            <div
                                                class="w-[300px] p-2 aspect-square rounded-lg shadow flex flex-col items-center justify-center gap-2 bg-slate-50">
                                                <p class="capitalize font-semibold self-start">Payment method</p>
                                                <p class="text-[10px] self-start text-wrap text-gray-500 pb-1">
                                                    This component is made by using

                                                </p>
                                                <label
                                                    class="inline-flex justify-between w-full items-center z-10 rounded-lg p-2 border border-transparent has-[:checked]:border-indigo-500 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 has-[:checked]:font-bold hover:bg-slate-200 transition-all cursor-pointer has-[:checked]:transition-all has-[:checked]:duration-500 duration-500 relative [&amp;_p]:has-[:checked]:translate-y-0 [&amp;_p]:has-[:checked]:transition-transform [&amp;_p]:has-[:checked]:duration-500 [&amp;_p]:has-[:checked]:opacity-100 overflow-hidden">
                                                    <div
                                                        class="inline-flex items-center justify-center gap-2 relative z-10">
                                                        <svg fill="currentColor" viewBox="0 0 32 32" height="32"
                                                            width="32" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M32 13.333l-4.177 9.333h-1.292l1.552-3.266-2.75-6.068h1.359l1.99 4.651h0.026l1.927-4.651zM14.646 16.219v3.781h-1.313v-9.333h3.474c0.828-0.021 1.63 0.266 2.25 0.807 0.615 0.505 0.953 1.219 0.943 1.974 0.010 0.766-0.339 1.5-0.943 1.979-0.604 0.531-1.354 0.792-2.25 0.792zM14.641 11.818v3.255h2.198c0.484 0.016 0.958-0.161 1.297-0.479 0.339-0.302 0.526-0.714 0.526-1.141 0-0.432-0.188-0.844-0.526-1.141-0.349-0.333-0.818-0.51-1.297-0.495zM22.63 13.333c0.833 0 1.495 0.234 1.979 0.698s0.724 1.099 0.724 1.906v3.859h-1.083v-0.87h-0.047c-0.469 0.714-1.089 1.073-1.865 1.073-0.667 0-1.219-0.203-1.667-0.615-0.438-0.385-0.682-0.948-0.672-1.531 0-0.646 0.234-1.161 0.708-1.547 0.469-0.38 1.099-0.573 1.885-0.573 0.672 0 1.224 0.13 1.656 0.385v-0.271c0.005-0.396-0.167-0.776-0.464-1.042-0.297-0.276-0.688-0.432-1.094-0.427-0.63 0-1.13 0.276-1.5 0.828l-0.995-0.646c0.547-0.818 1.359-1.229 2.432-1.229zM21.167 17.88c-0.005 0.302 0.135 0.583 0.375 0.766 0.25 0.203 0.563 0.313 0.88 0.307 0.474 0 0.932-0.198 1.271-0.547 0.359-0.333 0.563-0.802 0.563-1.292-0.354-0.292-0.844-0.438-1.474-0.438-0.464 0-0.844 0.115-1.151 0.344-0.307 0.234-0.464 0.516-0.464 0.859zM5.443 10.667c1.344-0.016 2.646 0.479 3.641 1.391l-1.552 1.521c-0.568-0.526-1.318-0.813-2.089-0.797-1.385 0.005-2.609 0.891-3.057 2.198-0.229 0.661-0.229 1.38 0 2.042 0.448 1.307 1.672 2.193 3.057 2.198 0.734 0 1.365-0.182 1.854-0.505 0.568-0.375 0.964-0.958 1.083-1.625h-2.938v-2.052h5.13c0.063 0.359 0.094 0.719 0.094 1.083 0 1.625-0.594 3-1.62 3.927-0.901 0.813-2.135 1.286-3.604 1.286-2.047 0.010-3.922-1.125-4.865-2.938-0.771-1.505-0.771-3.286 0-4.792 0.943-1.813 2.818-2.948 4.859-2.938z">
                                                            </path>
                                                        </svg>
                                                        <p
                                                            class="font-semibold absolute inset-0 w-full whitespace-nowrap translate-y-[110%] translate-x-full top-1 left-2 transition-all duration-700 opacity-0">
                                                            Google Pay
                                                        </p>
                                                    </div>
                                                    <input
                                                        class="checked:text-indigo-500 checked:ring-0 checked:ring-current focus:ring-0 focus:ring-current"
                                                        value="google" name="payment" type="radio" />
                                                </label>
                                                <label
                                                    class="inline-flex justify-between w-full items-center rounded-lg p-2 border border-transparent has-[:checked]:border-indigo-500 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 has-[:checked]:font-bold hover:bg-slate-200 transition-all cursor-pointer has-[:checked]:transition-all has-[:checked]:duration-500 duration-500 relative [&amp;_p]:has-[:checked]:translate-y-0 [&amp;_p]:has-[:checked]:transition-transform [&amp;_p]:has-[:checked]:duration-500 [&amp;_p]:has-[:checked]:opacity-100 overflow-hidden">
                                                    <div class="inline-flex items-center justify-center gap-2 relative">
                                                        <svg fill="currentColor" viewBox="0 0 640 512" height="32"
                                                            width="32" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M116.9 158.5c-7.5 8.9-19.5 15.9-31.5 14.9-1.5-12 4.4-24.8 11.3-32.6 7.5-9.1 20.6-15.6 31.3-16.1 1.2 12.4-3.7 24.7-11.1 33.8m10.9 17.2c-17.4-1-32.3 9.9-40.5 9.9-8.4 0-21-9.4-34.8-9.1-17.9.3-34.5 10.4-43.6 26.5-18.8 32.3-4.9 80 13.3 106.3 8.9 13 19.5 27.3 33.5 26.8 13.3-.5 18.5-8.6 34.5-8.6 16.1 0 20.8 8.6 34.8 8.4 14.5-.3 23.6-13 32.5-26 10.1-14.8 14.3-29.1 14.5-29.9-.3-.3-28-10.9-28.3-42.9-.3-26.8 21.9-39.5 22.9-40.3-12.5-18.6-32-20.6-38.8-21.1m100.4-36.2v194.9h30.3v-66.6h41.9c38.3 0 65.1-26.3 65.1-64.3s-26.4-64-64.1-64h-73.2zm30.3 25.5h34.9c26.3 0 41.3 14 41.3 38.6s-15 38.8-41.4 38.8h-34.8V165zm162.2 170.9c19 0 36.6-9.6 44.6-24.9h.6v23.4h28v-97c0-28.1-22.5-46.3-57.1-46.3-32.1 0-55.9 18.4-56.8 43.6h27.3c2.3-12 13.4-19.9 28.6-19.9 18.5 0 28.9 8.6 28.9 24.5v10.8l-37.8 2.3c-35.1 2.1-54.1 16.5-54.1 41.5.1 25.2 19.7 42 47.8 42zm8.2-23.1c-16.1 0-26.4-7.8-26.4-19.6 0-12.3 9.9-19.4 28.8-20.5l33.6-2.1v11c0 18.2-15.5 31.2-36 31.2zm102.5 74.6c29.5 0 43.4-11.3 55.5-45.4L640 193h-30.8l-35.6 115.1h-.6L537.4 193h-31.6L557 334.9l-2.8 8.6c-4.6 14.6-12.1 20.3-25.5 20.3-2.4 0-7-.3-8.9-.5v23.4c1.8.4 9.3.7 11.6.7z">
                                                            </path>
                                                        </svg>
                                                        <p
                                                            class="font-semibold absolute inset-0 w-full whitespace-nowrap -translate-y-[110%] translate-x-full top-1 left-2 transition-all duration-700 opacity-0">
                                                            Apple Pay
                                                        </p>
                                                    </div>
                                                    <input
                                                        class="checked:text-indigo-500 checked:ring-0 checked:ring-current focus:ring-0 focus:ring-current"
                                                        value="apple" name="payment" type="radio" />
                                                </label>
                                                <label
                                                    class="inline-flex justify-between w-full items-center rounded-lg p-2 border border-transparent has-[:checked]:border-indigo-500 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 has-[:checked]:font-bold hover:bg-slate-200 transition-all cursor-pointer has-[:checked]:transition-all has-[:checked]:duration-500 duration-500 relative [&amp;_p]:has-[:checked]:translate-y-0 [&amp;_p]:has-[:checked]:transition-transform [&amp;_p]:has-[:checked]:duration-500 [&amp;_p]:has-[:checked]:opacity-100 overflow-hidden">
                                                    <div class="inline-flex items-center justify-center gap-2 relative">
                                                        <svg fill="currentColor" height="32" width="32"
                                                            viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M186.3 258.2c0 12.2-9.7 21.5-22 21.5-9.2 0-16-5.2-16-15 0-12.2 9.5-22 21.7-22 9.3 0 16.3 5.7 16.3 15.5zM80.5 209.7h-4.7c-1.5 0-3 1-3.2 2.7l-4.3 26.7 8.2-.3c11 0 19.5-1.5 21.5-14.2 2.3-13.4-6.2-14.9-17.5-14.9zm284 0H360c-1.8 0-3 1-3.2 2.7l-4.2 26.7 8-.3c13 0 22-3 22-18-.1-10.6-9.6-11.1-18.1-11.1zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM128.3 215.4c0-21-16.2-28-34.7-28h-40c-2.5 0-5 2-5.2 4.7L32 294.2c-.3 2 1.2 4 3.2 4h19c2.7 0 5.2-2.9 5.5-5.7l4.5-26.6c1-7.2 13.2-4.7 18-4.7 28.6 0 46.1-17 46.1-45.8zm84.2 8.8h-19c-3.8 0-4 5.5-4.2 8.2-5.8-8.5-14.2-10-23.7-10-24.5 0-43.2 21.5-43.2 45.2 0 19.5 12.2 32.2 31.7 32.2 9 0 20.2-4.9 26.5-11.9-.5 1.5-1 4.7-1 6.2 0 2.3 1 4 3.2 4H200c2.7 0 5-2.9 5.5-5.7l10.2-64.3c.3-1.9-1.2-3.9-3.2-3.9zm40.5 97.9l63.7-92.6c.5-.5.5-1 .5-1.7 0-1.7-1.5-3.5-3.2-3.5h-19.2c-1.7 0-3.5 1-4.5 2.5l-26.5 39-11-37.5c-.8-2.2-3-4-5.5-4h-18.7c-1.7 0-3.2 1.8-3.2 3.5 0 1.2 19.5 56.8 21.2 62.1-2.7 3.8-20.5 28.6-20.5 31.6 0 1.8 1.5 3.2 3.2 3.2h19.2c1.8-.1 3.5-1.1 4.5-2.6zm159.3-106.7c0-21-16.2-28-34.7-28h-39.7c-2.7 0-5.2 2-5.5 4.7l-16.2 102c-.2 2 1.3 4 3.2 4h20.5c2 0 3.5-1.5 4-3.2l4.5-29c1-7.2 13.2-4.7 18-4.7 28.4 0 45.9-17 45.9-45.8zm84.2 8.8h-19c-3.8 0-4 5.5-4.3 8.2-5.5-8.5-14-10-23.7-10-24.5 0-43.2 21.5-43.2 45.2 0 19.5 12.2 32.2 31.7 32.2 9.3 0 20.5-4.9 26.5-11.9-.3 1.5-1 4.7-1 6.2 0 2.3 1 4 3.2 4H484c2.7 0 5-2.9 5.5-5.7l10.2-64.3c.3-1.9-1.2-3.9-3.2-3.9zm47.5-33.3c0-2-1.5-3.5-3.2-3.5h-18.5c-1.5 0-3 1.2-3.2 2.7l-16.2 104-.3.5c0 1.8 1.5 3.5 3.5 3.5h16.5c2.5 0 5-2.9 5.2-5.7L544 191.2v-.3zm-90 51.8c-12.2 0-21.7 9.7-21.7 22 0 9.7 7 15 16.2 15 12 0 21.7-9.2 21.7-21.5.1-9.8-6.9-15.5-16.2-15.5z">
                                                            </path>
                                                        </svg>
                                                        <p
                                                            class="font-semibold absolute inset-0 w-full whitespace-nowrap -translate-y-[110%] translate-x-full top-1 left-2 transition-all duration-700 opacity-0">
                                                            Paypal
                                                        </p>
                                                    </div>
                                                    <input
                                                        class="checked:text-indigo-500 checked:ring-0 checked:ring-current focus:ring-0 focus:ring-current"
                                                        value="paypal" name="payment" type="radio" />
                                                </label>
                                                <label
                                                    class="inline-flex justify-between w-full items-center rounded-lg p-2 border border-transparent has-[:checked]:border-indigo-500 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 has-[:checked]:font-bold hover:bg-slate-200 transition-all cursor-pointer has-[:checked]:transition-all has-[:checked]:duration-500 duration-500 relative [&amp;_p]:has-[:checked]:translate-y-0 [&amp;_p]:has-[:checked]:transition-transform [&amp;_p]:has-[:checked]:duration-500 [&amp;_p]:has-[:checked]:opacity-100 overflow-hidden">
                                                    <div class="inline-flex items-center justify-center gap-2 relative">
                                                        <svg fill="currentColor" height="32" width="32"
                                                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <g>
                                                                <path d="M0 0h24v24H0z" fill="none"></path>
                                                                <path
                                                                    d="M22.222 15.768l-.225-1.125h-2.514l-.4 1.117-2.015.004a4199.19 4199.19 0 0 1 2.884-6.918c.164-.391.455-.59.884-.588.328.003.863.003 1.606.001L24 15.765l-1.778.003zm-2.173-2.666h1.62l-.605-2.82-1.015 2.82zM7.06 8.257l2.026.002-3.132 7.51-2.051-.002a950.849 950.849 0 0 1-1.528-5.956c-.1-.396-.298-.673-.679-.804C1.357 8.89.792 8.71 0 8.465V8.26h3.237c.56 0 .887.271.992.827.106.557.372 1.975.8 4.254L7.06 8.257zm4.81.002l-1.602 7.508-1.928-.002L9.94 8.257l1.93.002zm3.91-.139c.577 0 1.304.18 1.722.345l-.338 1.557c-.378-.152-1-.357-1.523-.35-.76.013-1.23.332-1.23.638 0 .498.816.749 1.656 1.293.959.62 1.085 1.177 1.073 1.782-.013 1.256-1.073 2.495-3.309 2.495-1.02-.015-1.388-.101-2.22-.396l.352-1.625c.847.355 1.206.468 1.93.468.663 0 1.232-.268 1.237-.735.004-.332-.2-.497-.944-.907-.744-.411-1.788-.98-1.774-2.122.017-1.462 1.402-2.443 3.369-2.443z">
                                                                </path>
                                                            </g>
                                                        </svg>
                                                        <p
                                                            class="font-semibold absolute inset-0 w-full whitespace-nowrap translate-y-[110%] translate-x-full top-1 left-2 transition-all duration-700 opacity-0">
                                                            Credit Card
                                                        </p>
                                                    </div>
                                                    <input
                                                        class="checked:text-indigo-500 checked:ring-0 checked:ring-current focus:ring-0 focus:ring-current"
                                                        value="visa" name="payment" type="radio" />
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="gap-2 my-5 justify-between w-full h-[35vh] overflow-hidden flex ">
                                    <div class=" w-full">
                                        <div class="w-full border h-full flex justify-center items-center">

                                            <div
                                                class="w-[300px] p-2 aspect-square rounded-lg shadow flex flex-col items-center justify-center gap-2 bg-slate-50">
                                                <p class="capitalize font-semibold self-start">Payment method</p>
                                                <p class="text-[10px] self-start text-wrap text-gray-500 pb-1">
                                                    This component is made by using

                                                </p>
                                                <label
                                                    class="inline-flex justify-between w-full items-center z-10 rounded-lg p-2 border border-transparent has-[:checked]:border-indigo-500 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 has-[:checked]:font-bold hover:bg-slate-200 transition-all cursor-pointer has-[:checked]:transition-all has-[:checked]:duration-500 duration-500 relative [&amp;_p]:has-[:checked]:translate-y-0 [&amp;_p]:has-[:checked]:transition-transform [&amp;_p]:has-[:checked]:duration-500 [&amp;_p]:has-[:checked]:opacity-100 overflow-hidden">
                                                    <div
                                                        class="inline-flex items-center justify-center gap-2 relative z-10">
                                                        <svg fill="currentColor" viewBox="0 0 32 32" height="32"
                                                            width="32" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M32 13.333l-4.177 9.333h-1.292l1.552-3.266-2.75-6.068h1.359l1.99 4.651h0.026l1.927-4.651zM14.646 16.219v3.781h-1.313v-9.333h3.474c0.828-0.021 1.63 0.266 2.25 0.807 0.615 0.505 0.953 1.219 0.943 1.974 0.010 0.766-0.339 1.5-0.943 1.979-0.604 0.531-1.354 0.792-2.25 0.792zM14.641 11.818v3.255h2.198c0.484 0.016 0.958-0.161 1.297-0.479 0.339-0.302 0.526-0.714 0.526-1.141 0-0.432-0.188-0.844-0.526-1.141-0.349-0.333-0.818-0.51-1.297-0.495zM22.63 13.333c0.833 0 1.495 0.234 1.979 0.698s0.724 1.099 0.724 1.906v3.859h-1.083v-0.87h-0.047c-0.469 0.714-1.089 1.073-1.865 1.073-0.667 0-1.219-0.203-1.667-0.615-0.438-0.385-0.682-0.948-0.672-1.531 0-0.646 0.234-1.161 0.708-1.547 0.469-0.38 1.099-0.573 1.885-0.573 0.672 0 1.224 0.13 1.656 0.385v-0.271c0.005-0.396-0.167-0.776-0.464-1.042-0.297-0.276-0.688-0.432-1.094-0.427-0.63 0-1.13 0.276-1.5 0.828l-0.995-0.646c0.547-0.818 1.359-1.229 2.432-1.229zM21.167 17.88c-0.005 0.302 0.135 0.583 0.375 0.766 0.25 0.203 0.563 0.313 0.88 0.307 0.474 0 0.932-0.198 1.271-0.547 0.359-0.333 0.563-0.802 0.563-1.292-0.354-0.292-0.844-0.438-1.474-0.438-0.464 0-0.844 0.115-1.151 0.344-0.307 0.234-0.464 0.516-0.464 0.859zM5.443 10.667c1.344-0.016 2.646 0.479 3.641 1.391l-1.552 1.521c-0.568-0.526-1.318-0.813-2.089-0.797-1.385 0.005-2.609 0.891-3.057 2.198-0.229 0.661-0.229 1.38 0 2.042 0.448 1.307 1.672 2.193 3.057 2.198 0.734 0 1.365-0.182 1.854-0.505 0.568-0.375 0.964-0.958 1.083-1.625h-2.938v-2.052h5.13c0.063 0.359 0.094 0.719 0.094 1.083 0 1.625-0.594 3-1.62 3.927-0.901 0.813-2.135 1.286-3.604 1.286-2.047 0.010-3.922-1.125-4.865-2.938-0.771-1.505-0.771-3.286 0-4.792 0.943-1.813 2.818-2.948 4.859-2.938z">
                                                            </path>
                                                        </svg>
                                                        <p
                                                            class="font-semibold absolute inset-0 w-full whitespace-nowrap translate-y-[110%] translate-x-full top-1 left-2 transition-all duration-700 opacity-0">
                                                            Google Pay
                                                        </p>
                                                    </div>
                                                    <input
                                                        class="checked:text-indigo-500 checked:ring-0 checked:ring-current focus:ring-0 focus:ring-current"
                                                        value="google" name="payment" type="radio" />
                                                </label>
                                                <label
                                                    class="inline-flex justify-between w-full items-center rounded-lg p-2 border border-transparent has-[:checked]:border-indigo-500 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 has-[:checked]:font-bold hover:bg-slate-200 transition-all cursor-pointer has-[:checked]:transition-all has-[:checked]:duration-500 duration-500 relative [&amp;_p]:has-[:checked]:translate-y-0 [&amp;_p]:has-[:checked]:transition-transform [&amp;_p]:has-[:checked]:duration-500 [&amp;_p]:has-[:checked]:opacity-100 overflow-hidden">
                                                    <div class="inline-flex items-center justify-center gap-2 relative">
                                                        <svg fill="currentColor" viewBox="0 0 640 512" height="32"
                                                            width="32" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M116.9 158.5c-7.5 8.9-19.5 15.9-31.5 14.9-1.5-12 4.4-24.8 11.3-32.6 7.5-9.1 20.6-15.6 31.3-16.1 1.2 12.4-3.7 24.7-11.1 33.8m10.9 17.2c-17.4-1-32.3 9.9-40.5 9.9-8.4 0-21-9.4-34.8-9.1-17.9.3-34.5 10.4-43.6 26.5-18.8 32.3-4.9 80 13.3 106.3 8.9 13 19.5 27.3 33.5 26.8 13.3-.5 18.5-8.6 34.5-8.6 16.1 0 20.8 8.6 34.8 8.4 14.5-.3 23.6-13 32.5-26 10.1-14.8 14.3-29.1 14.5-29.9-.3-.3-28-10.9-28.3-42.9-.3-26.8 21.9-39.5 22.9-40.3-12.5-18.6-32-20.6-38.8-21.1m100.4-36.2v194.9h30.3v-66.6h41.9c38.3 0 65.1-26.3 65.1-64.3s-26.4-64-64.1-64h-73.2zm30.3 25.5h34.9c26.3 0 41.3 14 41.3 38.6s-15 38.8-41.4 38.8h-34.8V165zm162.2 170.9c19 0 36.6-9.6 44.6-24.9h.6v23.4h28v-97c0-28.1-22.5-46.3-57.1-46.3-32.1 0-55.9 18.4-56.8 43.6h27.3c2.3-12 13.4-19.9 28.6-19.9 18.5 0 28.9 8.6 28.9 24.5v10.8l-37.8 2.3c-35.1 2.1-54.1 16.5-54.1 41.5.1 25.2 19.7 42 47.8 42zm8.2-23.1c-16.1 0-26.4-7.8-26.4-19.6 0-12.3 9.9-19.4 28.8-20.5l33.6-2.1v11c0 18.2-15.5 31.2-36 31.2zm102.5 74.6c29.5 0 43.4-11.3 55.5-45.4L640 193h-30.8l-35.6 115.1h-.6L537.4 193h-31.6L557 334.9l-2.8 8.6c-4.6 14.6-12.1 20.3-25.5 20.3-2.4 0-7-.3-8.9-.5v23.4c1.8.4 9.3.7 11.6.7z">
                                                            </path>
                                                        </svg>
                                                        <p
                                                            class="font-semibold absolute inset-0 w-full whitespace-nowrap -translate-y-[110%] translate-x-full top-1 left-2 transition-all duration-700 opacity-0">
                                                            Apple Pay
                                                        </p>
                                                    </div>
                                                    <input
                                                        class="checked:text-indigo-500 checked:ring-0 checked:ring-current focus:ring-0 focus:ring-current"
                                                        value="apple" name="payment" type="radio" />
                                                </label>
                                                <label
                                                    class="inline-flex justify-between w-full items-center rounded-lg p-2 border border-transparent has-[:checked]:border-indigo-500 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 has-[:checked]:font-bold hover:bg-slate-200 transition-all cursor-pointer has-[:checked]:transition-all has-[:checked]:duration-500 duration-500 relative [&amp;_p]:has-[:checked]:translate-y-0 [&amp;_p]:has-[:checked]:transition-transform [&amp;_p]:has-[:checked]:duration-500 [&amp;_p]:has-[:checked]:opacity-100 overflow-hidden">
                                                    <div class="inline-flex items-center justify-center gap-2 relative">
                                                        <svg fill="currentColor" height="32" width="32"
                                                            viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M186.3 258.2c0 12.2-9.7 21.5-22 21.5-9.2 0-16-5.2-16-15 0-12.2 9.5-22 21.7-22 9.3 0 16.3 5.7 16.3 15.5zM80.5 209.7h-4.7c-1.5 0-3 1-3.2 2.7l-4.3 26.7 8.2-.3c11 0 19.5-1.5 21.5-14.2 2.3-13.4-6.2-14.9-17.5-14.9zm284 0H360c-1.8 0-3 1-3.2 2.7l-4.2 26.7 8-.3c13 0 22-3 22-18-.1-10.6-9.6-11.1-18.1-11.1zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM128.3 215.4c0-21-16.2-28-34.7-28h-40c-2.5 0-5 2-5.2 4.7L32 294.2c-.3 2 1.2 4 3.2 4h19c2.7 0 5.2-2.9 5.5-5.7l4.5-26.6c1-7.2 13.2-4.7 18-4.7 28.6 0 46.1-17 46.1-45.8zm84.2 8.8h-19c-3.8 0-4 5.5-4.2 8.2-5.8-8.5-14.2-10-23.7-10-24.5 0-43.2 21.5-43.2 45.2 0 19.5 12.2 32.2 31.7 32.2 9 0 20.2-4.9 26.5-11.9-.5 1.5-1 4.7-1 6.2 0 2.3 1 4 3.2 4H200c2.7 0 5-2.9 5.5-5.7l10.2-64.3c.3-1.9-1.2-3.9-3.2-3.9zm40.5 97.9l63.7-92.6c.5-.5.5-1 .5-1.7 0-1.7-1.5-3.5-3.2-3.5h-19.2c-1.7 0-3.5 1-4.5 2.5l-26.5 39-11-37.5c-.8-2.2-3-4-5.5-4h-18.7c-1.7 0-3.2 1.8-3.2 3.5 0 1.2 19.5 56.8 21.2 62.1-2.7 3.8-20.5 28.6-20.5 31.6 0 1.8 1.5 3.2 3.2 3.2h19.2c1.8-.1 3.5-1.1 4.5-2.6zm159.3-106.7c0-21-16.2-28-34.7-28h-39.7c-2.7 0-5.2 2-5.5 4.7l-16.2 102c-.2 2 1.3 4 3.2 4h20.5c2 0 3.5-1.5 4-3.2l4.5-29c1-7.2 13.2-4.7 18-4.7 28.4 0 45.9-17 45.9-45.8zm84.2 8.8h-19c-3.8 0-4 5.5-4.3 8.2-5.5-8.5-14-10-23.7-10-24.5 0-43.2 21.5-43.2 45.2 0 19.5 12.2 32.2 31.7 32.2 9.3 0 20.5-4.9 26.5-11.9-.3 1.5-1 4.7-1 6.2 0 2.3 1 4 3.2 4H484c2.7 0 5-2.9 5.5-5.7l10.2-64.3c.3-1.9-1.2-3.9-3.2-3.9zm47.5-33.3c0-2-1.5-3.5-3.2-3.5h-18.5c-1.5 0-3 1.2-3.2 2.7l-16.2 104-.3.5c0 1.8 1.5 3.5 3.5 3.5h16.5c2.5 0 5-2.9 5.2-5.7L544 191.2v-.3zm-90 51.8c-12.2 0-21.7 9.7-21.7 22 0 9.7 7 15 16.2 15 12 0 21.7-9.2 21.7-21.5.1-9.8-6.9-15.5-16.2-15.5z">
                                                            </path>
                                                        </svg>
                                                        <p
                                                            class="font-semibold absolute inset-0 w-full whitespace-nowrap -translate-y-[110%] translate-x-full top-1 left-2 transition-all duration-700 opacity-0">
                                                            Paypal
                                                        </p>
                                                    </div>
                                                    <input
                                                        class="checked:text-indigo-500 checked:ring-0 checked:ring-current focus:ring-0 focus:ring-current"
                                                        value="paypal" name="payment" type="radio" />
                                                </label>
                                                <label
                                                    class="inline-flex justify-between w-full items-center rounded-lg p-2 border border-transparent has-[:checked]:border-indigo-500 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 has-[:checked]:font-bold hover:bg-slate-200 transition-all cursor-pointer has-[:checked]:transition-all has-[:checked]:duration-500 duration-500 relative [&amp;_p]:has-[:checked]:translate-y-0 [&amp;_p]:has-[:checked]:transition-transform [&amp;_p]:has-[:checked]:duration-500 [&amp;_p]:has-[:checked]:opacity-100 overflow-hidden">
                                                    <div class="inline-flex items-center justify-center gap-2 relative">
                                                        <svg fill="currentColor" height="32" width="32"
                                                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <g>
                                                                <path d="M0 0h24v24H0z" fill="none"></path>
                                                                <path
                                                                    d="M22.222 15.768l-.225-1.125h-2.514l-.4 1.117-2.015.004a4199.19 4199.19 0 0 1 2.884-6.918c.164-.391.455-.59.884-.588.328.003.863.003 1.606.001L24 15.765l-1.778.003zm-2.173-2.666h1.62l-.605-2.82-1.015 2.82zM7.06 8.257l2.026.002-3.132 7.51-2.051-.002a950.849 950.849 0 0 1-1.528-5.956c-.1-.396-.298-.673-.679-.804C1.357 8.89.792 8.71 0 8.465V8.26h3.237c.56 0 .887.271.992.827.106.557.372 1.975.8 4.254L7.06 8.257zm4.81.002l-1.602 7.508-1.928-.002L9.94 8.257l1.93.002zm3.91-.139c.577 0 1.304.18 1.722.345l-.338 1.557c-.378-.152-1-.357-1.523-.35-.76.013-1.23.332-1.23.638 0 .498.816.749 1.656 1.293.959.62 1.085 1.177 1.073 1.782-.013 1.256-1.073 2.495-3.309 2.495-1.02-.015-1.388-.101-2.22-.396l.352-1.625c.847.355 1.206.468 1.93.468.663 0 1.232-.268 1.237-.735.004-.332-.2-.497-.944-.907-.744-.411-1.788-.98-1.774-2.122.017-1.462 1.402-2.443 3.369-2.443z">
                                                                </path>
                                                            </g>
                                                        </svg>
                                                        <p
                                                            class="font-semibold absolute inset-0 w-full whitespace-nowrap translate-y-[110%] translate-x-full top-1 left-2 transition-all duration-700 opacity-0">
                                                            Credit Card
                                                        </p>
                                                    </div>
                                                    <input
                                                        class="checked:text-indigo-500 checked:ring-0 checked:ring-current focus:ring-0 focus:ring-current"
                                                        value="visa" name="payment" type="radio" />
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                    <div class=" w-full">
                                        <div class="w-full border h-full flex justify-center items-center">

                                            <div
                                                class="w-[300px] p-2 aspect-square rounded-lg shadow flex flex-col items-center justify-center gap-2 bg-slate-50">
                                                <p class="capitalize font-semibold self-start">Payment method</p>
                                                <p class="text-[10px] self-start text-wrap text-gray-500 pb-1">
                                                    This component is made by using

                                                </p>
                                                <label
                                                    class="inline-flex justify-between w-full items-center z-10 rounded-lg p-2 border border-transparent has-[:checked]:border-indigo-500 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 has-[:checked]:font-bold hover:bg-slate-200 transition-all cursor-pointer has-[:checked]:transition-all has-[:checked]:duration-500 duration-500 relative [&amp;_p]:has-[:checked]:translate-y-0 [&amp;_p]:has-[:checked]:transition-transform [&amp;_p]:has-[:checked]:duration-500 [&amp;_p]:has-[:checked]:opacity-100 overflow-hidden">
                                                    <div
                                                        class="inline-flex items-center justify-center gap-2 relative z-10">
                                                        <svg fill="currentColor" viewBox="0 0 32 32" height="32"
                                                            width="32" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M32 13.333l-4.177 9.333h-1.292l1.552-3.266-2.75-6.068h1.359l1.99 4.651h0.026l1.927-4.651zM14.646 16.219v3.781h-1.313v-9.333h3.474c0.828-0.021 1.63 0.266 2.25 0.807 0.615 0.505 0.953 1.219 0.943 1.974 0.010 0.766-0.339 1.5-0.943 1.979-0.604 0.531-1.354 0.792-2.25 0.792zM14.641 11.818v3.255h2.198c0.484 0.016 0.958-0.161 1.297-0.479 0.339-0.302 0.526-0.714 0.526-1.141 0-0.432-0.188-0.844-0.526-1.141-0.349-0.333-0.818-0.51-1.297-0.495zM22.63 13.333c0.833 0 1.495 0.234 1.979 0.698s0.724 1.099 0.724 1.906v3.859h-1.083v-0.87h-0.047c-0.469 0.714-1.089 1.073-1.865 1.073-0.667 0-1.219-0.203-1.667-0.615-0.438-0.385-0.682-0.948-0.672-1.531 0-0.646 0.234-1.161 0.708-1.547 0.469-0.38 1.099-0.573 1.885-0.573 0.672 0 1.224 0.13 1.656 0.385v-0.271c0.005-0.396-0.167-0.776-0.464-1.042-0.297-0.276-0.688-0.432-1.094-0.427-0.63 0-1.13 0.276-1.5 0.828l-0.995-0.646c0.547-0.818 1.359-1.229 2.432-1.229zM21.167 17.88c-0.005 0.302 0.135 0.583 0.375 0.766 0.25 0.203 0.563 0.313 0.88 0.307 0.474 0 0.932-0.198 1.271-0.547 0.359-0.333 0.563-0.802 0.563-1.292-0.354-0.292-0.844-0.438-1.474-0.438-0.464 0-0.844 0.115-1.151 0.344-0.307 0.234-0.464 0.516-0.464 0.859zM5.443 10.667c1.344-0.016 2.646 0.479 3.641 1.391l-1.552 1.521c-0.568-0.526-1.318-0.813-2.089-0.797-1.385 0.005-2.609 0.891-3.057 2.198-0.229 0.661-0.229 1.38 0 2.042 0.448 1.307 1.672 2.193 3.057 2.198 0.734 0 1.365-0.182 1.854-0.505 0.568-0.375 0.964-0.958 1.083-1.625h-2.938v-2.052h5.13c0.063 0.359 0.094 0.719 0.094 1.083 0 1.625-0.594 3-1.62 3.927-0.901 0.813-2.135 1.286-3.604 1.286-2.047 0.010-3.922-1.125-4.865-2.938-0.771-1.505-0.771-3.286 0-4.792 0.943-1.813 2.818-2.948 4.859-2.938z">
                                                            </path>
                                                        </svg>
                                                        <p
                                                            class="font-semibold absolute inset-0 w-full whitespace-nowrap translate-y-[110%] translate-x-full top-1 left-2 transition-all duration-700 opacity-0">
                                                            Google Pay
                                                        </p>
                                                    </div>
                                                    <input
                                                        class="checked:text-indigo-500 checked:ring-0 checked:ring-current focus:ring-0 focus:ring-current"
                                                        value="google" name="payment" type="radio" />
                                                </label>
                                                <label
                                                    class="inline-flex justify-between w-full items-center rounded-lg p-2 border border-transparent has-[:checked]:border-indigo-500 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 has-[:checked]:font-bold hover:bg-slate-200 transition-all cursor-pointer has-[:checked]:transition-all has-[:checked]:duration-500 duration-500 relative [&amp;_p]:has-[:checked]:translate-y-0 [&amp;_p]:has-[:checked]:transition-transform [&amp;_p]:has-[:checked]:duration-500 [&amp;_p]:has-[:checked]:opacity-100 overflow-hidden">
                                                    <div class="inline-flex items-center justify-center gap-2 relative">
                                                        <svg fill="currentColor" viewBox="0 0 640 512" height="32"
                                                            width="32" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M116.9 158.5c-7.5 8.9-19.5 15.9-31.5 14.9-1.5-12 4.4-24.8 11.3-32.6 7.5-9.1 20.6-15.6 31.3-16.1 1.2 12.4-3.7 24.7-11.1 33.8m10.9 17.2c-17.4-1-32.3 9.9-40.5 9.9-8.4 0-21-9.4-34.8-9.1-17.9.3-34.5 10.4-43.6 26.5-18.8 32.3-4.9 80 13.3 106.3 8.9 13 19.5 27.3 33.5 26.8 13.3-.5 18.5-8.6 34.5-8.6 16.1 0 20.8 8.6 34.8 8.4 14.5-.3 23.6-13 32.5-26 10.1-14.8 14.3-29.1 14.5-29.9-.3-.3-28-10.9-28.3-42.9-.3-26.8 21.9-39.5 22.9-40.3-12.5-18.6-32-20.6-38.8-21.1m100.4-36.2v194.9h30.3v-66.6h41.9c38.3 0 65.1-26.3 65.1-64.3s-26.4-64-64.1-64h-73.2zm30.3 25.5h34.9c26.3 0 41.3 14 41.3 38.6s-15 38.8-41.4 38.8h-34.8V165zm162.2 170.9c19 0 36.6-9.6 44.6-24.9h.6v23.4h28v-97c0-28.1-22.5-46.3-57.1-46.3-32.1 0-55.9 18.4-56.8 43.6h27.3c2.3-12 13.4-19.9 28.6-19.9 18.5 0 28.9 8.6 28.9 24.5v10.8l-37.8 2.3c-35.1 2.1-54.1 16.5-54.1 41.5.1 25.2 19.7 42 47.8 42zm8.2-23.1c-16.1 0-26.4-7.8-26.4-19.6 0-12.3 9.9-19.4 28.8-20.5l33.6-2.1v11c0 18.2-15.5 31.2-36 31.2zm102.5 74.6c29.5 0 43.4-11.3 55.5-45.4L640 193h-30.8l-35.6 115.1h-.6L537.4 193h-31.6L557 334.9l-2.8 8.6c-4.6 14.6-12.1 20.3-25.5 20.3-2.4 0-7-.3-8.9-.5v23.4c1.8.4 9.3.7 11.6.7z">
                                                            </path>
                                                        </svg>
                                                        <p
                                                            class="font-semibold absolute inset-0 w-full whitespace-nowrap -translate-y-[110%] translate-x-full top-1 left-2 transition-all duration-700 opacity-0">
                                                            Apple Pay
                                                        </p>
                                                    </div>
                                                    <input
                                                        class="checked:text-indigo-500 checked:ring-0 checked:ring-current focus:ring-0 focus:ring-current"
                                                        value="apple" name="payment" type="radio" />
                                                </label>
                                                <label
                                                    class="inline-flex justify-between w-full items-center rounded-lg p-2 border border-transparent has-[:checked]:border-indigo-500 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 has-[:checked]:font-bold hover:bg-slate-200 transition-all cursor-pointer has-[:checked]:transition-all has-[:checked]:duration-500 duration-500 relative [&amp;_p]:has-[:checked]:translate-y-0 [&amp;_p]:has-[:checked]:transition-transform [&amp;_p]:has-[:checked]:duration-500 [&amp;_p]:has-[:checked]:opacity-100 overflow-hidden">
                                                    <div class="inline-flex items-center justify-center gap-2 relative">
                                                        <svg fill="currentColor" height="32" width="32"
                                                            viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M186.3 258.2c0 12.2-9.7 21.5-22 21.5-9.2 0-16-5.2-16-15 0-12.2 9.5-22 21.7-22 9.3 0 16.3 5.7 16.3 15.5zM80.5 209.7h-4.7c-1.5 0-3 1-3.2 2.7l-4.3 26.7 8.2-.3c11 0 19.5-1.5 21.5-14.2 2.3-13.4-6.2-14.9-17.5-14.9zm284 0H360c-1.8 0-3 1-3.2 2.7l-4.2 26.7 8-.3c13 0 22-3 22-18-.1-10.6-9.6-11.1-18.1-11.1zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM128.3 215.4c0-21-16.2-28-34.7-28h-40c-2.5 0-5 2-5.2 4.7L32 294.2c-.3 2 1.2 4 3.2 4h19c2.7 0 5.2-2.9 5.5-5.7l4.5-26.6c1-7.2 13.2-4.7 18-4.7 28.6 0 46.1-17 46.1-45.8zm84.2 8.8h-19c-3.8 0-4 5.5-4.2 8.2-5.8-8.5-14.2-10-23.7-10-24.5 0-43.2 21.5-43.2 45.2 0 19.5 12.2 32.2 31.7 32.2 9 0 20.2-4.9 26.5-11.9-.5 1.5-1 4.7-1 6.2 0 2.3 1 4 3.2 4H200c2.7 0 5-2.9 5.5-5.7l10.2-64.3c.3-1.9-1.2-3.9-3.2-3.9zm40.5 97.9l63.7-92.6c.5-.5.5-1 .5-1.7 0-1.7-1.5-3.5-3.2-3.5h-19.2c-1.7 0-3.5 1-4.5 2.5l-26.5 39-11-37.5c-.8-2.2-3-4-5.5-4h-18.7c-1.7 0-3.2 1.8-3.2 3.5 0 1.2 19.5 56.8 21.2 62.1-2.7 3.8-20.5 28.6-20.5 31.6 0 1.8 1.5 3.2 3.2 3.2h19.2c1.8-.1 3.5-1.1 4.5-2.6zm159.3-106.7c0-21-16.2-28-34.7-28h-39.7c-2.7 0-5.2 2-5.5 4.7l-16.2 102c-.2 2 1.3 4 3.2 4h20.5c2 0 3.5-1.5 4-3.2l4.5-29c1-7.2 13.2-4.7 18-4.7 28.4 0 45.9-17 45.9-45.8zm84.2 8.8h-19c-3.8 0-4 5.5-4.3 8.2-5.5-8.5-14-10-23.7-10-24.5 0-43.2 21.5-43.2 45.2 0 19.5 12.2 32.2 31.7 32.2 9.3 0 20.5-4.9 26.5-11.9-.3 1.5-1 4.7-1 6.2 0 2.3 1 4 3.2 4H484c2.7 0 5-2.9 5.5-5.7l10.2-64.3c.3-1.9-1.2-3.9-3.2-3.9zm47.5-33.3c0-2-1.5-3.5-3.2-3.5h-18.5c-1.5 0-3 1.2-3.2 2.7l-16.2 104-.3.5c0 1.8 1.5 3.5 3.5 3.5h16.5c2.5 0 5-2.9 5.2-5.7L544 191.2v-.3zm-90 51.8c-12.2 0-21.7 9.7-21.7 22 0 9.7 7 15 16.2 15 12 0 21.7-9.2 21.7-21.5.1-9.8-6.9-15.5-16.2-15.5z">
                                                            </path>
                                                        </svg>
                                                        <p
                                                            class="font-semibold absolute inset-0 w-full whitespace-nowrap -translate-y-[110%] translate-x-full top-1 left-2 transition-all duration-700 opacity-0">
                                                            Paypal
                                                        </p>
                                                    </div>
                                                    <input
                                                        class="checked:text-indigo-500 checked:ring-0 checked:ring-current focus:ring-0 focus:ring-current"
                                                        value="paypal" name="payment" type="radio" />
                                                </label>
                                                <label
                                                    class="inline-flex justify-between w-full items-center rounded-lg p-2 border border-transparent has-[:checked]:border-indigo-500 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 has-[:checked]:font-bold hover:bg-slate-200 transition-all cursor-pointer has-[:checked]:transition-all has-[:checked]:duration-500 duration-500 relative [&amp;_p]:has-[:checked]:translate-y-0 [&amp;_p]:has-[:checked]:transition-transform [&amp;_p]:has-[:checked]:duration-500 [&amp;_p]:has-[:checked]:opacity-100 overflow-hidden">
                                                    <div class="inline-flex items-center justify-center gap-2 relative">
                                                        <svg fill="currentColor" height="32" width="32"
                                                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <g>
                                                                <path d="M0 0h24v24H0z" fill="none"></path>
                                                                <path
                                                                    d="M22.222 15.768l-.225-1.125h-2.514l-.4 1.117-2.015.004a4199.19 4199.19 0 0 1 2.884-6.918c.164-.391.455-.59.884-.588.328.003.863.003 1.606.001L24 15.765l-1.778.003zm-2.173-2.666h1.62l-.605-2.82-1.015 2.82zM7.06 8.257l2.026.002-3.132 7.51-2.051-.002a950.849 950.849 0 0 1-1.528-5.956c-.1-.396-.298-.673-.679-.804C1.357 8.89.792 8.71 0 8.465V8.26h3.237c.56 0 .887.271.992.827.106.557.372 1.975.8 4.254L7.06 8.257zm4.81.002l-1.602 7.508-1.928-.002L9.94 8.257l1.93.002zm3.91-.139c.577 0 1.304.18 1.722.345l-.338 1.557c-.378-.152-1-.357-1.523-.35-.76.013-1.23.332-1.23.638 0 .498.816.749 1.656 1.293.959.62 1.085 1.177 1.073 1.782-.013 1.256-1.073 2.495-3.309 2.495-1.02-.015-1.388-.101-2.22-.396l.352-1.625c.847.355 1.206.468 1.93.468.663 0 1.232-.268 1.237-.735.004-.332-.2-.497-.944-.907-.744-.411-1.788-.98-1.774-2.122.017-1.462 1.402-2.443 3.369-2.443z">
                                                                </path>
                                                            </g>
                                                        </svg>
                                                        <p
                                                            class="font-semibold absolute inset-0 w-full whitespace-nowrap translate-y-[110%] translate-x-full top-1 left-2 transition-all duration-700 opacity-0">
                                                            Credit Card
                                                        </p>
                                                    </div>
                                                    <input
                                                        class="checked:text-indigo-500 checked:ring-0 checked:ring-current focus:ring-0 focus:ring-current"
                                                        value="visa" name="payment" type="radio" />
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                    <div class=" w-full">
                                        <div class="w-full border h-full flex justify-center items-center">

                                            <div
                                                class="w-[300px] p-2 aspect-square rounded-lg shadow flex flex-col items-center justify-center gap-2 bg-slate-50">
                                                <p class="capitalize font-semibold self-start">Payment method</p>
                                                <p class="text-[10px] self-start text-wrap text-gray-500 pb-1">
                                                    This component is made by using

                                                </p>
                                                <label
                                                    class="inline-flex justify-between w-full items-center z-10 rounded-lg p-2 border border-transparent has-[:checked]:border-indigo-500 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 has-[:checked]:font-bold hover:bg-slate-200 transition-all cursor-pointer has-[:checked]:transition-all has-[:checked]:duration-500 duration-500 relative [&amp;_p]:has-[:checked]:translate-y-0 [&amp;_p]:has-[:checked]:transition-transform [&amp;_p]:has-[:checked]:duration-500 [&amp;_p]:has-[:checked]:opacity-100 overflow-hidden">
                                                    <div
                                                        class="inline-flex items-center justify-center gap-2 relative z-10">
                                                        <svg fill="currentColor" viewBox="0 0 32 32" height="32"
                                                            width="32" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M32 13.333l-4.177 9.333h-1.292l1.552-3.266-2.75-6.068h1.359l1.99 4.651h0.026l1.927-4.651zM14.646 16.219v3.781h-1.313v-9.333h3.474c0.828-0.021 1.63 0.266 2.25 0.807 0.615 0.505 0.953 1.219 0.943 1.974 0.010 0.766-0.339 1.5-0.943 1.979-0.604 0.531-1.354 0.792-2.25 0.792zM14.641 11.818v3.255h2.198c0.484 0.016 0.958-0.161 1.297-0.479 0.339-0.302 0.526-0.714 0.526-1.141 0-0.432-0.188-0.844-0.526-1.141-0.349-0.333-0.818-0.51-1.297-0.495zM22.63 13.333c0.833 0 1.495 0.234 1.979 0.698s0.724 1.099 0.724 1.906v3.859h-1.083v-0.87h-0.047c-0.469 0.714-1.089 1.073-1.865 1.073-0.667 0-1.219-0.203-1.667-0.615-0.438-0.385-0.682-0.948-0.672-1.531 0-0.646 0.234-1.161 0.708-1.547 0.469-0.38 1.099-0.573 1.885-0.573 0.672 0 1.224 0.13 1.656 0.385v-0.271c0.005-0.396-0.167-0.776-0.464-1.042-0.297-0.276-0.688-0.432-1.094-0.427-0.63 0-1.13 0.276-1.5 0.828l-0.995-0.646c0.547-0.818 1.359-1.229 2.432-1.229zM21.167 17.88c-0.005 0.302 0.135 0.583 0.375 0.766 0.25 0.203 0.563 0.313 0.88 0.307 0.474 0 0.932-0.198 1.271-0.547 0.359-0.333 0.563-0.802 0.563-1.292-0.354-0.292-0.844-0.438-1.474-0.438-0.464 0-0.844 0.115-1.151 0.344-0.307 0.234-0.464 0.516-0.464 0.859zM5.443 10.667c1.344-0.016 2.646 0.479 3.641 1.391l-1.552 1.521c-0.568-0.526-1.318-0.813-2.089-0.797-1.385 0.005-2.609 0.891-3.057 2.198-0.229 0.661-0.229 1.38 0 2.042 0.448 1.307 1.672 2.193 3.057 2.198 0.734 0 1.365-0.182 1.854-0.505 0.568-0.375 0.964-0.958 1.083-1.625h-2.938v-2.052h5.13c0.063 0.359 0.094 0.719 0.094 1.083 0 1.625-0.594 3-1.62 3.927-0.901 0.813-2.135 1.286-3.604 1.286-2.047 0.010-3.922-1.125-4.865-2.938-0.771-1.505-0.771-3.286 0-4.792 0.943-1.813 2.818-2.948 4.859-2.938z">
                                                            </path>
                                                        </svg>
                                                        <p
                                                            class="font-semibold absolute inset-0 w-full whitespace-nowrap translate-y-[110%] translate-x-full top-1 left-2 transition-all duration-700 opacity-0">
                                                            Google Pay
                                                        </p>
                                                    </div>
                                                    <input
                                                        class="checked:text-indigo-500 checked:ring-0 checked:ring-current focus:ring-0 focus:ring-current"
                                                        value="google" name="payment" type="radio" />
                                                </label>
                                                <label
                                                    class="inline-flex justify-between w-full items-center rounded-lg p-2 border border-transparent has-[:checked]:border-indigo-500 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 has-[:checked]:font-bold hover:bg-slate-200 transition-all cursor-pointer has-[:checked]:transition-all has-[:checked]:duration-500 duration-500 relative [&amp;_p]:has-[:checked]:translate-y-0 [&amp;_p]:has-[:checked]:transition-transform [&amp;_p]:has-[:checked]:duration-500 [&amp;_p]:has-[:checked]:opacity-100 overflow-hidden">
                                                    <div class="inline-flex items-center justify-center gap-2 relative">
                                                        <svg fill="currentColor" viewBox="0 0 640 512" height="32"
                                                            width="32" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M116.9 158.5c-7.5 8.9-19.5 15.9-31.5 14.9-1.5-12 4.4-24.8 11.3-32.6 7.5-9.1 20.6-15.6 31.3-16.1 1.2 12.4-3.7 24.7-11.1 33.8m10.9 17.2c-17.4-1-32.3 9.9-40.5 9.9-8.4 0-21-9.4-34.8-9.1-17.9.3-34.5 10.4-43.6 26.5-18.8 32.3-4.9 80 13.3 106.3 8.9 13 19.5 27.3 33.5 26.8 13.3-.5 18.5-8.6 34.5-8.6 16.1 0 20.8 8.6 34.8 8.4 14.5-.3 23.6-13 32.5-26 10.1-14.8 14.3-29.1 14.5-29.9-.3-.3-28-10.9-28.3-42.9-.3-26.8 21.9-39.5 22.9-40.3-12.5-18.6-32-20.6-38.8-21.1m100.4-36.2v194.9h30.3v-66.6h41.9c38.3 0 65.1-26.3 65.1-64.3s-26.4-64-64.1-64h-73.2zm30.3 25.5h34.9c26.3 0 41.3 14 41.3 38.6s-15 38.8-41.4 38.8h-34.8V165zm162.2 170.9c19 0 36.6-9.6 44.6-24.9h.6v23.4h28v-97c0-28.1-22.5-46.3-57.1-46.3-32.1 0-55.9 18.4-56.8 43.6h27.3c2.3-12 13.4-19.9 28.6-19.9 18.5 0 28.9 8.6 28.9 24.5v10.8l-37.8 2.3c-35.1 2.1-54.1 16.5-54.1 41.5.1 25.2 19.7 42 47.8 42zm8.2-23.1c-16.1 0-26.4-7.8-26.4-19.6 0-12.3 9.9-19.4 28.8-20.5l33.6-2.1v11c0 18.2-15.5 31.2-36 31.2zm102.5 74.6c29.5 0 43.4-11.3 55.5-45.4L640 193h-30.8l-35.6 115.1h-.6L537.4 193h-31.6L557 334.9l-2.8 8.6c-4.6 14.6-12.1 20.3-25.5 20.3-2.4 0-7-.3-8.9-.5v23.4c1.8.4 9.3.7 11.6.7z">
                                                            </path>
                                                        </svg>
                                                        <p
                                                            class="font-semibold absolute inset-0 w-full whitespace-nowrap -translate-y-[110%] translate-x-full top-1 left-2 transition-all duration-700 opacity-0">
                                                            Apple Pay
                                                        </p>
                                                    </div>
                                                    <input
                                                        class="checked:text-indigo-500 checked:ring-0 checked:ring-current focus:ring-0 focus:ring-current"
                                                        value="apple" name="payment" type="radio" />
                                                </label>
                                                <label
                                                    class="inline-flex justify-between w-full items-center rounded-lg p-2 border border-transparent has-[:checked]:border-indigo-500 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 has-[:checked]:font-bold hover:bg-slate-200 transition-all cursor-pointer has-[:checked]:transition-all has-[:checked]:duration-500 duration-500 relative [&amp;_p]:has-[:checked]:translate-y-0 [&amp;_p]:has-[:checked]:transition-transform [&amp;_p]:has-[:checked]:duration-500 [&amp;_p]:has-[:checked]:opacity-100 overflow-hidden">
                                                    <div class="inline-flex items-center justify-center gap-2 relative">
                                                        <svg fill="currentColor" height="32" width="32"
                                                            viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M186.3 258.2c0 12.2-9.7 21.5-22 21.5-9.2 0-16-5.2-16-15 0-12.2 9.5-22 21.7-22 9.3 0 16.3 5.7 16.3 15.5zM80.5 209.7h-4.7c-1.5 0-3 1-3.2 2.7l-4.3 26.7 8.2-.3c11 0 19.5-1.5 21.5-14.2 2.3-13.4-6.2-14.9-17.5-14.9zm284 0H360c-1.8 0-3 1-3.2 2.7l-4.2 26.7 8-.3c13 0 22-3 22-18-.1-10.6-9.6-11.1-18.1-11.1zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM128.3 215.4c0-21-16.2-28-34.7-28h-40c-2.5 0-5 2-5.2 4.7L32 294.2c-.3 2 1.2 4 3.2 4h19c2.7 0 5.2-2.9 5.5-5.7l4.5-26.6c1-7.2 13.2-4.7 18-4.7 28.6 0 46.1-17 46.1-45.8zm84.2 8.8h-19c-3.8 0-4 5.5-4.2 8.2-5.8-8.5-14.2-10-23.7-10-24.5 0-43.2 21.5-43.2 45.2 0 19.5 12.2 32.2 31.7 32.2 9 0 20.2-4.9 26.5-11.9-.5 1.5-1 4.7-1 6.2 0 2.3 1 4 3.2 4H200c2.7 0 5-2.9 5.5-5.7l10.2-64.3c.3-1.9-1.2-3.9-3.2-3.9zm40.5 97.9l63.7-92.6c.5-.5.5-1 .5-1.7 0-1.7-1.5-3.5-3.2-3.5h-19.2c-1.7 0-3.5 1-4.5 2.5l-26.5 39-11-37.5c-.8-2.2-3-4-5.5-4h-18.7c-1.7 0-3.2 1.8-3.2 3.5 0 1.2 19.5 56.8 21.2 62.1-2.7 3.8-20.5 28.6-20.5 31.6 0 1.8 1.5 3.2 3.2 3.2h19.2c1.8-.1 3.5-1.1 4.5-2.6zm159.3-106.7c0-21-16.2-28-34.7-28h-39.7c-2.7 0-5.2 2-5.5 4.7l-16.2 102c-.2 2 1.3 4 3.2 4h20.5c2 0 3.5-1.5 4-3.2l4.5-29c1-7.2 13.2-4.7 18-4.7 28.4 0 45.9-17 45.9-45.8zm84.2 8.8h-19c-3.8 0-4 5.5-4.3 8.2-5.5-8.5-14-10-23.7-10-24.5 0-43.2 21.5-43.2 45.2 0 19.5 12.2 32.2 31.7 32.2 9.3 0 20.5-4.9 26.5-11.9-.3 1.5-1 4.7-1 6.2 0 2.3 1 4 3.2 4H484c2.7 0 5-2.9 5.5-5.7l10.2-64.3c.3-1.9-1.2-3.9-3.2-3.9zm47.5-33.3c0-2-1.5-3.5-3.2-3.5h-18.5c-1.5 0-3 1.2-3.2 2.7l-16.2 104-.3.5c0 1.8 1.5 3.5 3.5 3.5h16.5c2.5 0 5-2.9 5.2-5.7L544 191.2v-.3zm-90 51.8c-12.2 0-21.7 9.7-21.7 22 0 9.7 7 15 16.2 15 12 0 21.7-9.2 21.7-21.5.1-9.8-6.9-15.5-16.2-15.5z">
                                                            </path>
                                                        </svg>
                                                        <p
                                                            class="font-semibold absolute inset-0 w-full whitespace-nowrap -translate-y-[110%] translate-x-full top-1 left-2 transition-all duration-700 opacity-0">
                                                            Paypal
                                                        </p>
                                                    </div>
                                                    <input
                                                        class="checked:text-indigo-500 checked:ring-0 checked:ring-current focus:ring-0 focus:ring-current"
                                                        value="paypal" name="payment" type="radio" />
                                                </label>
                                                <label
                                                    class="inline-flex justify-between w-full items-center rounded-lg p-2 border border-transparent has-[:checked]:border-indigo-500 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 has-[:checked]:font-bold hover:bg-slate-200 transition-all cursor-pointer has-[:checked]:transition-all has-[:checked]:duration-500 duration-500 relative [&amp;_p]:has-[:checked]:translate-y-0 [&amp;_p]:has-[:checked]:transition-transform [&amp;_p]:has-[:checked]:duration-500 [&amp;_p]:has-[:checked]:opacity-100 overflow-hidden">
                                                    <div class="inline-flex items-center justify-center gap-2 relative">
                                                        <svg fill="currentColor" height="32" width="32"
                                                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <g>
                                                                <path d="M0 0h24v24H0z" fill="none"></path>
                                                                <path
                                                                    d="M22.222 15.768l-.225-1.125h-2.514l-.4 1.117-2.015.004a4199.19 4199.19 0 0 1 2.884-6.918c.164-.391.455-.59.884-.588.328.003.863.003 1.606.001L24 15.765l-1.778.003zm-2.173-2.666h1.62l-.605-2.82-1.015 2.82zM7.06 8.257l2.026.002-3.132 7.51-2.051-.002a950.849 950.849 0 0 1-1.528-5.956c-.1-.396-.298-.673-.679-.804C1.357 8.89.792 8.71 0 8.465V8.26h3.237c.56 0 .887.271.992.827.106.557.372 1.975.8 4.254L7.06 8.257zm4.81.002l-1.602 7.508-1.928-.002L9.94 8.257l1.93.002zm3.91-.139c.577 0 1.304.18 1.722.345l-.338 1.557c-.378-.152-1-.357-1.523-.35-.76.013-1.23.332-1.23.638 0 .498.816.749 1.656 1.293.959.62 1.085 1.177 1.073 1.782-.013 1.256-1.073 2.495-3.309 2.495-1.02-.015-1.388-.101-2.22-.396l.352-1.625c.847.355 1.206.468 1.93.468.663 0 1.232-.268 1.237-.735.004-.332-.2-.497-.944-.907-.744-.411-1.788-.98-1.774-2.122.017-1.462 1.402-2.443 3.369-2.443z">
                                                                </path>
                                                            </g>
                                                        </svg>
                                                        <p
                                                            class="font-semibold absolute inset-0 w-full whitespace-nowrap translate-y-[110%] translate-x-full top-1 left-2 transition-all duration-700 opacity-0">
                                                            Credit Card
                                                        </p>
                                                    </div>
                                                    <input
                                                        class="checked:text-indigo-500 checked:ring-0 checked:ring-current focus:ring-0 focus:ring-current"
                                                        value="visa" name="payment" type="radio" />
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

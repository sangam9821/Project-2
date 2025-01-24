const menu= document.querySelector("#menu")


function navMenu() {
    menu.classList.toggle("hidden")
}
/* <body>
    <!-- Responsive navbar starts here -->

    <!-- navbar -->
    <nav
      class="p-3 flex items-center bg-gradient-to-r from-[#0eecf0] via-cyan-200 to-cyan-100"
    >
      <a href="#">
        <img
          class="max-h-8 rounded-2xl mix-blend-multiply"
          src="logo.jpg"
          alt="logo"
        />
      </a>

      <!-- navbar list -->
      <div class="hidden md:flex ml-auto space-x-4">
        <a href="#" class="pr-2 font-medium hover:text-gray-800 hover:scale-105"
          >Offers</a
        >
        <a href="#" class="pr-2 font-medium hover:text-gray-800 hover:scale-105"
          >About</a
        >
        <a href="#" class="pr-2 font-medium hover:text-gray-800 hover:scale-105"
          >Services</a
        >
        <button
          class="flex justify-evenly items-center px-2 border border-gray-400 rounded-lg hover:text-gray-800 hover:scale-105"
        >
          <i class="fa-solid fa-book pr-2"></i>
          <a href="#" class="pr-2 font-medium">My Work</a>
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>

      <!-- menu for mobile -->

      <button
        class="pr-2 md:hidden ml-auto hover:scale-110"
        onclick="navMenu()"
      >
        <i class="fa-solid fa-bars"></i>
      </button>
      <!-- nav under menu -->
      <div id="menu" class="fixed hidden md:hidden bg-gray-100 inset-0">
        <div
          id="menu-top"
          class="p-3 flex items-center bg-gradient-to-r from-[#0eecf0] via-cyan-200 to-cyan-100"
        >
          <a href="#">
            <img
              class="max-h-8 rounded-2xl mix-blend-multiply"
              src="logo.jpg"
              alt="logo"
            />
          </a>
          <button
            class="pr-2 transition md:hidden ml-auto hover:scale-110"
            onclick="navMenu()"
          >
            <i class="fa-regular fa-circle-xmark"></i>
          </button>
        </div>

        <!-- content under menu -->

        <div
          id="menu-content"
          class="mt-6 hover:bg-gray-200 rounded-2xl hover:scale-101 h-8 flex items-center"
        >
          <a href="#" class="p-7 font-medium">Offers</a>
        </div>
        <div
          id="menu-content"
          class="mt-6 hover:bg-gray-200 rounded-2xl hover:scale-101 h-8 flex items-center"
        >
          <a href="#" class="p-7 font-medium">About</a>
        </div>
        <div
          id="menu-content"
          class="mt-6 hover:bg-gray-200 rounded-2xl hover:scale-101 h-8 flex items-center"
        >
          <a href="#" class="p-7 font-medium">Services</a>
        </div>
        <div class="h-[1px] mt-5 bg-black"></div>

        <div
          class="mt-6 hover:bg-gray-200 rounded-2xl hover:scale-101 h-8 flex items-center"
        >
          <button
            class="pl-7 flex justify-evenly items-center px-2 rounded-lg hover:text-gray-800 hover:scale-105"
          >
            <i class="fa-solid fa-book pr-2"></i>
            <a href="#" class="pr-2 font-medium">My Work</a>
          </button>
        </div>
      </div>
    </nav>

    <!-- nav ends here -->

    <!-- main -->
    <main>
      <!-- Hero section starts here -->

      <div
        id="main"
        class="min-h-screen bg-gradient-to-br from-purple-50 via-cyan-50 to-transparent"
      >
        <div
          id="hero-section"
          class="mx-auto max-w-4xl px-6 pt-6 pb-32 flex flex-col sm:text-center sm:items-center"
        >
          <div
            id="source-code"
            class="flex my-6 gap-2 items-center border border-cyan-200 bg-cyan-100 rounded-2xl w-fit px-3 py-1 shadow-md hover:shadow-lg hover:-translate-y-1 transition duration-100 group"
          >
            <div><i class="fa-regular fa-file-code"></i></div>
            <p class="italic font-medium text-blue-900">
              <a href="">Click Here For Source Code</a>
            </p>
            <i
              class="fa-solid fa-arrow-right group-hover:translate-x-1 transition duration-300"
            ></i>
          </div>
          <h1 class="font-bold text-6xl leading-snug">Convert Your Ideas <i class="fa-regular fa-lightbulb"></i> Into Reality <i class="fa-brands fa-react"></i></h1>
          <p class="p-4 font-semibold leading-relaxed text-lg">Hello, I'm Sangam, a passionate frontend developer with a knack for crafting engaging and intuitive user interfaces. With expertise in modern frameworks like Tailwind CSS, React <i class="fa-brands fa-react"></i>, I specialize in transforming design concepts into responsive, pixel-perfect web applications. Proficient in HTML <i class="fa-brands fa-html5"></i>, CSS <i class="fa-brands fa-css3-alt"></i>, JavaScript <i class="fa-brands fa-js"></i>, and a keen eye for UI/UX principles, I strive to deliver seamless user experiences. Whether collaborating with designers or optimizing for performance, I'm dedicated to creating web solutions that not only look great but work flawlessly across devices. Let's build something amazing together!</p>
          <div id="button-container" class="flex flex-col mt-6 md:flex-row gap-7">
            <button class="px-8 py-3 font-semibold text-white bg-gradient-to-r from-blue-900 to-cyan-500 rounded-2xl shadow-md hover:opacity-80 hover:-translate-y-1 transition border border-black"><a href="">Hire me!</a></button>
            <button class="px-8 py-3  font-semibold text-white bg-gradient-to-r from-cyan-900 to-cyan-500 rounded-2xl shadow-md hover:opacity-80 hover:-translate-y-1 transition border border-black"> Contanct Me</button>
          </div>
        </div>
      </div>
    </main>

    <script src="script.js"></script>
  </body> */
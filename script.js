"object" != typeof window.CP && (window.CP = {}),
  (window.CP.PenTimer = {
    programNoLongerBeingMonitored: !1,
    timeOfFirstCallToShouldStopLoop: 0,
    _loopExits: {},
    _loopTimers: {},
    START_MONITORING_AFTER: 2e3,
    STOP_ALL_MONITORING_TIMEOUT: 5e3,
    MAX_TIME_IN_LOOP_WO_EXIT: 2200,
    exitedLoop: function (E) {
      this._loopExits[E] = !0;
    },
    shouldStopLoop: function (E) {
      if (this.programKilledSoStopMonitoring) return !0;
      if (this.programNoLongerBeingMonitored) return !1;
      if (this._loopExits[E]) return !1;
      var _ = this._getTime();
      if (0 === this.timeOfFirstCallToShouldStopLoop)
        return (this.timeOfFirstCallToShouldStopLoop = _), !1;
      var o = _ - this.timeOfFirstCallToShouldStopLoop;
      if (o < this.START_MONITORING_AFTER) return !1;
      if (o > this.STOP_ALL_MONITORING_TIMEOUT)
        return (this.programNoLongerBeingMonitored = !0), !1;
      try {
        this._checkOnInfiniteLoop(E, _);
      } catch {
        return (
          this._sendErrorMessageToEditor(),
          (this.programKilledSoStopMonitoring = !0),
          !0
        );
      }
      return !1;
    },

    _checkOnInfiniteLoop: function (E, _) {
      if (!this._loopTimers[E]) return (this._loopTimers[E] = _), !1;
      if (_ - this._loopTimers[E] > this.MAX_TIME_IN_LOOP_WO_EXIT)
        throw "Infinite Loop found on loop: " + E;
    },
    _getTime: function () {
      return Date.now();
    },
  }),
  (window.CP.shouldStopExecution = function (E) {
    var _ = window.CP.PenTimer.shouldStopLoop(E);
    return;
  }),
  (window.CP.exitedLoop = function (E) {
    window.CP.PenTimer.exitedLoop(E);
  });

function createSnowfall() {
  const container = document.createElement("div");
  container.className = "snowfall";
  document.body.appendChild(container);

  for (let i = 0; i < 50; i++) {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";

    // Random size
    const size = Math.random() * 5 + 2;
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;

    // Random position
    snowflake.style.left = `${Math.random() * 100}%`;

    // Random animation duration
    const duration = Math.random() * 5 + 5;
    snowflake.style.animationDuration = `${duration}s`;

    container.appendChild(snowflake);
  }
}

function createEnhancedSnowfall() {
  // Xóa snowfall cũ nếu có
  const oldSnowfall = document.querySelector(".snowfall");
  if (oldSnowfall) {
    oldSnowfall.remove();
  }

  const container = document.createElement("div");
  container.className = "snowfall";
  document.body.appendChild(container);

  // Số lượng bông tuyết dựa trên kích thước màn hình
  const snowflakeCount = window.innerWidth < 768 ? 50 : 100;

  for (let i = 0; i < snowflakeCount; i++) {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";

    // Random properties
    const size = Math.random() * 4 + 2; // 2-6px
    const startPositionLeft = Math.random() * 100;
    const startOpacity = Math.random() * 0.6 + 0.3;
    const duration = Math.random() * 3 + 4; // 4-7s
    const delay = Math.random() * 5; // 0-5s

    // Apply styles
    Object.assign(snowflake.style, {
      width: `${size}px`,
      height: `${size}px`,
      left: `${startPositionLeft}%`,
      opacity: startOpacity,
      animationDuration: `${duration}s`,
      animationDelay: `-${delay}s`,
      top: "-5%",
    });

    container.appendChild(snowflake);
  }
}

// Thêm hiệu ứng ánh sáng xoay
function createRotatingLights() {
  const container = document.createElement("div");
  container.className = "rotating-lights";

  for (let i = 0; i < 12; i++) {
    const light = document.createElement("div");
    light.className = "light-beam";
    light.style.transform = `rotate(${i * 30}deg)`;
    container.appendChild(light);
  }

  document.body.appendChild(container);
}

function addChristmasAudio() {
  const audio = new Audio();
  audio.src = "path/to/christmas-music.mp3"; // Thêm đường dẫn nhạc Giáng sinh
  audio.loop = true;

  // Thêm nút điều khiển âm thanh
  const audioControl = document.createElement("button");
  audioControl.innerHTML = "🔊";
  audioControl.className = "audio-control";

  audioControl.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      audioControl.innerHTML = "🔊";
    } else {
      audio.pause();
      audioControl.innerHTML = "🔈";
    }
  });

  document.body.appendChild(audioControl);
}

function createEnhancedParticles() {
  const colors = ["#ffeb3b", "#ffc107", "#ff9800", "#ff5722"];
  const particleContainer = document.createElement("div");
  particleContainer.className = "particle-container";

  for (let i = 0; i < 30; i++) {
    const particle = document.createElement("div");
    particle.className = "magic-particle";
    particle.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${Math.random() * 2 + 1}s`;
    particle.style.animationDelay = `${Math.random() * 2}s`;
    particleContainer.appendChild(particle);
  }

  document.body.appendChild(particleContainer);
}

function createDynamicLights() {
  const lights = document.querySelectorAll(".light-beam");
  lights.forEach((light, index) => {
    gsap.to(light, {
      opacity: 0.3,
      duration: 1,
      repeat: -1,
      yoyo: true,
      delay: index * 0.2,
      ease: "power1.inOut",
    });
  });
}

function showGreeting() {
  const greetingCard = document.getElementById("greetingCard");
  if (!greetingCard) return;

  // Hiển thị thiệp
  greetingCard.style.display = "block";
  greetingCard.style.visibility = "visible";

  // Thêm hiệu ứng fade in
  gsap.fromTo(
    greetingCard,
    {
      opacity: 0,
      y: -20,
      scale: 0.95,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
    }
  );

  // Thêm sự kiện click để lật thiệp
  const cardInner = greetingCard.querySelector(".card-inner");
  if (cardInner) {
    // Xóa event listener cũ nếu có
    cardInner.removeEventListener("click", handleCardClick);
    // Thêm event listener mới
    cardInner.addEventListener("click", handleCardClick);
  }

  // Làm mờ background
  const mainSVG = document.querySelector(".mainSVG");
  if (mainSVG) {
    mainSVG.style.opacity = "0.5";
  }
}

// Xử lý sự kiện click vào thiệp
function handleCardClick(event) {
  const greetingCard = document.getElementById("greetingCard");
  const closeButton = event.target.closest(".close-button");

  // Không lật thiệp nếu click vào nút đóng
  if (closeButton) return;

  if (!greetingCard.classList.contains("open")) {
    greetingCard.classList.add("open");
  }
}

function closeGreeting() {
  const greetingCard = document.getElementById("greetingCard");
  if (!greetingCard) return;

  // Xóa class open
  greetingCard.classList.remove("open");

  // Đợi animation lật hoàn thành rồi mới fade out
  setTimeout(() => {
    gsap.to(greetingCard, {
      opacity: 0,
      y: -20,
      scale: 0.95,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        greetingCard.style.display = "none";
        greetingCard.style.visibility = "hidden";

        // Khôi phục opacity của background
        const mainSVG = document.querySelector(".mainSVG");
        if (mainSVG) {
          mainSVG.style.opacity = "1";
        }
      },
    });
  }, 400); // Đợi 400ms cho animation lật
}

// Thêm sự kiện click bên ngoài để đóng thiệp
document.addEventListener("click", (event) => {
  const greetingCard = document.getElementById("greetingCard");
  const giftButton = document.querySelector(".gift-button");
  const cardInner = document.querySelector(".card-inner");

  if (greetingCard && greetingCard.style.display === "block") {
    // Chỉ đóng khi click ngoài thiệp và không phải là nút gift hoặc card-inner
    if (
      !cardInner.contains(event.target) &&
      !giftButton.contains(event.target)
    ) {
      closeGreeting();
    }
  }
});

// Thêm sự kiện nhấn ESC để đóng thiệp
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeGreeting();
  }
});

function createBackgroundEffects() {
  // Tạo sao
  const starField = document.querySelector(".star-field");
  for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.cssText = `
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      width: ${Math.random() * 3}px;
      height: ${Math.random() * 3}px;
      --duration: ${Math.random() * 3 + 1}s;
      animation-delay: ${Math.random() * 2}s;
    `;
    starField.appendChild(star);
  }

  // Tạo mây
  const clouds = document.querySelector(".clouds");
  for (let i = 0; i < 8; i++) {
    const cloud = document.createElement("div");
    cloud.className = "cloud";
    cloud.style.cssText = `
      top: ${Math.random() * 100}%;
      width: ${Math.random() * 200 + 100}px;
      height: ${Math.random() * 100 + 50}px;
      --duration: ${Math.random() * 20 + 20}s;
      animation-delay: ${Math.random() * -20}s;
    `;
    clouds.appendChild(cloud);
  }

  // Tạo particles
  const particles = document.querySelector(".background-particles");
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.cssText = `
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      width: ${Math.random() * 4 + 2}px;
      height: ${Math.random() * 4 + 2}px;
      background: rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1});
      border-radius: 50%;
      position: absolute;
      filter: blur(1px);
      animation: float-particle ${Math.random() * 10 + 10}s linear infinite;
    `;
    particles.appendChild(particle);
  }
}

window.onload = function () {
  createSnowfall();
  createEnhancedSnowfall();
  createRotatingLights();
  createEnhancedParticles();
  createDynamicLights();
  addChristmasAudio();
  createBackgroundEffects();

  // Thêm xử lý resize để tái tạo tuyết khi thay đổi kích thước màn hình
  let resizeTimeout;
  window.addEventListener("resize", () => {
    if (resizeTimeout) {
      clearTimeout(resizeTimeout);
    }
    resizeTimeout = setTimeout(() => {
      createEnhancedSnowfall();
    }, 250);
  });
};

window.addEventListener('load', createEnhancedSnowfall);
window.addEventListener('resize', createEnhancedSnowfall);

// Thêm keyframe animation cho particles
const style = document.createElement("style");
style.textContent = `
  @keyframes float-particle {
    0% {
      transform: translateY(0) rotate(0deg);
    }
    100% {
      transform: translateY(-100vh) rotate(360deg);
    }
  }
`;
document.head.appendChild(style);

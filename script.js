let isDark = true;

    function toggleMode() {
      document.body.classList.toggle("light-mode");
      isDark = !isDark;
    }

    function updateClock() {
      const now = new Date();

      // Digital Clock
      let hours = now.getHours();
      const meridiem = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
      const h = hours.toString().padStart(2, '0');
      const m = now.getMinutes().toString().padStart(2, '0');
      const s = now.getSeconds().toString().padStart(2, '0');
      document.getElementById("clock").textContent = `${h}:${m}:${s} ${meridiem}`;
      document.getElementById("clock").classList.add("tick-animate");
      setTimeout(() => document.getElementById("clock").classList.remove("tick-animate"), 300);

      // Date
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      document.getElementById("date").textContent = now.toLocaleDateString('en-US', options);

      // Analog Clock
      const hourDeg = ((now.getHours() % 12) + now.getMinutes() / 60) * 30;
      const minuteDeg = now.getMinutes() * 6;
      const secondDeg = now.getSeconds() * 6;

      document.getElementById("hour-hand").style.transform = `rotate(${hourDeg}deg)`;
      document.getElementById("minute-hand").style.transform = `rotate(${minuteDeg}deg)`;
      document.getElementById("second-hand").style.transform = `rotate(${secondDeg}deg)`;
    }

    updateClock();
    setInterval(updateClock, 1000);
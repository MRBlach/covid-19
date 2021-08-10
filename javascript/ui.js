  // Insert html
  document.querySelector('.wrapper').innerHTML = `
  <header>
    <div class="logo">
      <img src="images/logo.png" alt="" />
      <p>COVID-19<br />STATS</p>
    </div>
    <nav>
      <ul>
        <li><a id="goHome">HOME</a></li>
        <li><a id="goAbout">ABOUT</a></li>
      </ul>
    </nav>
  </header>

  <div id="home">
    <p>COVID-19<br>
      Statistics<br>
      By Country<br>
    <button id="start">Explore</button>
    </p>
    </div>
    <div id="about" hidden>
    <p>This app was created with the help of<br> <a href="https://covid19api.com" target="_blank">COVID-19 API</a><br>A free API for data on the Coronavirus</p>
  </div>

  <main hidden>
    <div class="stats">
      <div class="latest-report">
        <div class="country">
          <div class="name">Loading...</div>
          <div class="change-country">change</div>
          <div class="search-country hide">
            <div class="search-box">
              <input
                type="text"
                id="search-input"
                placeholder="Search Country..."
              />
              <img class="close" src="images/close.svg" alt="" />
            </div>
            <div class="country-list"></div>
          </div>
        </div>
        <div class="total-cases">
          <div class="title">Total Cases</div>
          <div class="value">0</div>
          <div class="new-value">+0</div>
        </div>
        <div class="recovered">
          <div class="title">Recovered</div>
          <div class="value">0</div>
          <div class="new-value">+0</div>
        </div>
        <div class="deaths">
          <div class="title">Deaths</div>
          <div class="value">0</div>
          <div class="new-value">+0</div>
        </div>
      </div>
      <div class="chart">
        <canvas id="axes_line_chart"></canvas>
      </div>
    </div>
  </main>

  <footer>
    <div class="footer-container">
      <div class="copyright">
        <p>Copyright © 2020</p>
      </div>
    </div>
  </footer>
`;
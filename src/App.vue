<template>
  <section class="hero-section" :class="{ 'is-time-out': timeOut }">
    <div class="hero-img" />
    <a class="site-name">
      HUIHUI
    </a>
    <nav>
      <div class="flex justify-center">
        <ul class="flex justify-between">
          <li v-for="link in links" :key="link.id" class="px-4 py-3">
            <a :href="link.url" target="_blank">
              <i :class="`fab fa-${link.name}`" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </section>
  <section ref="portfolio" class="portfolio-section">
    <div class="container">
      <h2>
        <span>
          Portfolio
        </span>
      </h2>
      <div class="grid lg:grid-cols-2 gap-2">
        <portfolio-card
          v-for="(item, index) in data"
          :key="`portfolio-${index}`"
          :itemData="item"
          :itemIndex="index"
        />
      </div>
    </div>
  </section>
  <footer>
    <div class="container">
      <nav>
        <ul class="flex justify-center">
          <li v-for="link in links" :key="link.id">
            <a :href="link.url" target="_blank">
              <i :class="`fab fa-${link.name}`" />
            </a>
          </li>
        </ul>
      </nav>
      <p class="text-sm text-gray-800 text-center">
        Copyright © 2020 Chang Ching Hui
      </p>
    </div>
  </footer>
</template>

<script>
import PortfolioCard from './components/PortfolioCard.vue';

const LOADING_TIME = 3;
const STAY_TIME = 2;

export default {
  name: 'App',
  components: {
    PortfolioCard,
  },
  data() {
    return {
      links: [
        { id: '1', name: 'github', url: 'https://github.com/ChingHuiHui' },
        {
          id: '2',
          name: 'codepen',
          url: 'https://codepen.io/ddbrtzlg/collections/',
        },
        { id: '3', name: 'google', url: 'mailto:sunny70624@gmail.com' },

        {
          id: '4',
          name: 'facebook',
          url: 'https://www.facebook.com/sunny60920',
        },
        {
          id: '5',
          name: 'instagram',
          url: 'https://www.instagram.com/sunnyhui_0126',
        },
      ],
      data: [
        {
          title: '專題 - 地樺股份有限公司 ( 產學合作 )',
          description:
            '將舊有的資訊系統搬至App，希望可以增加使用率，利用行動裝置讓承包案流程更加方便',
          responsibility: '資料庫設計、前端切板接資料、文件撰寫、小組長',
          languages: ['React Native', 'Firebase'],
          src: require('./assets/portfolio/dehwa.png'),
          links: [
            {
              uri: 'http://www.dehwa.com.tw/m_about.aspx',
              icon: 'fas fa-globe',
            },
          ],
        },
        {
          title: 'yoxi 乘客端',
          description: '為yoxi這個新的車隊所開發的叫車app系統。',
          responsibility: '負責刻出APP畫面、串接API ',
          languages: [],
          src: require('./assets/portfolio/yoxi.png'),
          links: [
            {
              uri: 'https://apps.apple.com/tw/app/yoxi/id1521393667',
              icon: 'fab fa-app-store-ios',
            },
            {
              uri:
                'https://play.google.com/store/apps/details?id=tw.com.yoxi.rider',
              icon: 'fab fa-google-play',
            },
          ],
        },
        {
          title: 'yoxi 司機端',
          description: '為yoxi這個新的車隊所開發的叫車app系統。',
          responsibility: '負責刻出APP畫面、串接API ',
          languages: [],
          src: require('./assets/portfolio/yoxi.png'),
          links: [
            {
              uri: 'https://apps.apple.com/tw/app/id1521393549',
              icon: 'fab fa-app-store-ios',
            },
            {
              uri:
                'https://play.google.com/store/apps/details?id=tw.com.yoxi.driver&hl=zh_TW&gl=US',
              icon: 'fas fa-globe',
            },
          ],
        },
        {
          title: '仿Dcard',
          description: '模仿dcard web。',
          responsibility:
            '使用React，串接dcard api，並用React Router切換各看板頁面。',
          languages: ['React', 'axios', 'React Router'],
          src: require('./assets/portfolio/dcard.png'),
          links: [
            {
              uri: 'https://github.com/ChingHuiHui/dcard_hui',
              icon: 'fab fa-github',
            },
            {
              uri: 'https://chinghuihui.github.io/dcard_hui/',
              icon: 'fas fa-globe',
            },
          ],
        },
        {
          title: 'Album PlayList',
          description:
            '介紹專輯，包含曲目和相關影片。可以自由切換不同專輯。選取喜好的曲目。',
          responsibility: '切版，加入redux存放喜好項目，加入yotube清單影片',
          languages: ['React', 'Redux', 'Styled-Component', 'axios'],
          src: require('./assets/portfolio/styled-component.png'),
          links: [
            {
              uri: 'https://github.com/ChingHuiHui/react-styled-component',
              icon: 'fab fa-github',
            },
            {
              uri: 'https://chinghuihui.github.io/react-styled-component/',
              icon: 'fas fa-globe',
            },
          ],
        },
        {
          title: 'TIME WILL TELL player',
          description: '音樂播放器，包含播放清單，另外有隨機播放。',
          responsibility: '切版，讓時間條可以隨時間和音樂長度變化',
          languages: ['HTML', 'SASS ', 'Vue'],
          src: require('./assets/portfolio/timewilltell.png'),
          links: [
            {
              uri: 'https://github.com/ChingHuiHui/vue-player',
              icon: 'fab fa-github',
            },
            {
              uri: 'https://chinghuihui.github.io/vue-player/',
              icon: 'fas fa-globe',
            },
          ],
        },
        {
          title: 'Someday or Oneday',
          description: '網站主要介紹戲劇內容、角色、劇照、原聲帶、團隊。',
          responsibility: '切版、RWD、串接API',
          languages: ['HTML', 'CSS', 'JS', 'RWD'],
          src: require('./assets/portfolio/someday.png'),
          links: [
            {
              uri: 'https://github.com/ChingHuiHui/oneday',
              icon: 'fab fa-github',
            },
            {
              uri: 'https://chinghuihui.github.io/oneday/',
              icon: 'fas fa-globe',
            },
          ],
        },
        {
          title: 'Taylor Swift',
          description: '網站主要是提供歌手各式各樣的資訊。',
          responsibility: '切版、RWD',
          languages: ['HTML', 'CSS', 'JS', 'RWD'],
          src: require('./assets/portfolio/taylor.png'),
          links: [
            {
              uri: 'https://github.com/ChingHuiHui/self',
              icon: 'fab fa-github',
            },
            {
              uri: 'https://chinghuihui.github.io/self/',
              icon: 'fas fa-globe',
            },
          ],
        },
      ],
      time: 0,
      timer: null,
    };
  },
  computed: {
    timeOut() {
      return this.time >= LOADING_TIME;
    },
  },
  created() {
    this.setTime();
  },
  methods: {
    setTime() {
      this.timer = setInterval(() => {
        this.time += 0.01;
      }, 10);
    },
  },
  watch: {
    time() {
      if (this.time >= LOADING_TIME + STAY_TIME) {
        window.scrollTo(0, this.$refs.portfolio.getBoundingClientRect().top);
        clearInterval(this.timer);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.hero-section {
  @apply bg-gray-200 flex flex-col justify-center items-center relative;

  min-height: 100vh;

  .hero-img {
    @apply absolute inset-0 opacity-0;
    @apply transition ease-in duration-700;
  }

  .site-name {
    @apply text-9xl font-bold text-transparent text-center;
    @apply relative pointer-events-none;

    font-family: 'Squada One', cursive;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #000;

    &::before {
      @apply absolute top-0 left-0 w-0 overflow-hidden overflow-hidden;
      @apply text-primary transition-all duration-300;

      content: 'HUIHUI';
      animation: fill-the-color 3s linear;
      animation-fill-mode: forwards;
    }
  }

  &.is-time-out {
    .hero-img {
      @apply opacity-100;

      background-image: url('./assets/profile2.jpg');
      background-position: 50% 80%;
      filter: brightness(50%);
    }

    .site-name {
      -webkit-text-stroke-color: white;
    }

    nav ul {
      @apply bg-primary;
    }
  }
}

nav {
  @apply z-10 w-full transition-all duration-300 mt-10;

  ul li {
    @apply cursor-pointer text-3xl text-white;
  }
}

section.portfolio-section {
  @apply bg-gray-100 flex flex-col items-center pt-4 pb-8 relative;

  h2 {
    @apply flex items-center;
    @apply pointer-events-none w-full my-5 lg:my-10 lg:w-auto;
    @apply text-secondary text-center font-bold text-4xl md:text-6xl;

    > span {
      @apply mx-2;
    }

    &::before,
    &::after {
      @apply bg-secondary h-1 flex-1;

      content: '';
    }
  }
}

footer {
  @apply flex justify-center bg-primary-light pt-5 pb-2;

  nav {
    @apply mt-0 mb-3;

    ul {
      @apply space-x-4;
    }
  }
}

@keyframes fill-the-color {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
</style>

<template>
  <div
    class="h-screen bg-gray-200 flex flex-col justify-center items-center relative"
  >
    <div class="absolute inset-0 opacity-0 transition ease-in duration-700" :class="{'bg-img': time>=3}"/>
    <a
      :class="['site-name', {'light-up': time>=3}]"
      :style="{'-webkit-text-stroke-color': time>=3 ? 'white' : 'black'}">
      HUIHUI
    </a>
    <!-- :class="{'opacity-0': time>=3} -->
    <!-- <div class="w-8/12 h-10 bg-white rounded-full shadow-sm relative opacity-1 transition ease-out duration-300" >
      <img
        src="./assets/profile3.jpg"
        :style="leftPercentage"
        class="absolute top-2/4 transform -translate-x-2/4 -translate-y-2/4 w-20  rounded-full"
        @click="startTheScreen"
      />
    </div> -->
      <nav class="z-10 lg:w-2/12 md:w-4/12 w-8/12">
        <ul class="flex justify-between">
          <li>
            <a href="https://github.com/ChingHuiHui" target="_blank">
              <i class="fab fa-github cursor-pointer text-3xl text-white"/>
            </a>
          </li>
          <li>
            <a href="mailto:sunny70624@gmail.com" target="_blank">
              <i class="fas fa-envelope cursor-pointer text-3xl text-white"/>
            </a>
          </li>
          <li>
            <a href="https://codepen.io/ddbrtzlg/collections/" target="_blank">
              <i class="fab fa-codepen cursor-pointer text-3xl text-white"/>
            </a>
          </li>

          <li>
            <a href="https://www.facebook.com/sunny60920" target="_blank">
              <i class="fab fa-facebook cursor-pointer text-3xl text-white"/>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/sunnyhui_0126/" target="_blank">
              <i class="fab fa-instagram cursor-pointer text-3xl text-white"/>
            </a>
          </li>
        </ul>
      </nav>
  </div>
  <section ref="portfolio" class="bg-gray-100 flex flex-col items-center pt-4 pb-8 relative">
   <h2
    :style="['-webkit-text-stroke-width: 2px',{'-webkit-text-stroke-color': 'white'}]"
    class="lg:text-9xl md:text-8xl text-6xl self-start text-center font-bold pointer-events-none bg-red-500 lg:my-10 lg:w-auto w-full my-5 pr-1 py-2"
    >
      Portfolio
    </h2>
    <div class="grid lg:grid-cols-2 gap-2 w-10/12">
      <portfolio-card v-for="(item, index) in data" :key="item" :itemData="item" :itemIndex="index"></portfolio-card>
    </div>
  </section>
  <footer class="flex justify-center bg-gray-400 pt-5 pb-2 border-t-10">
    <div class="w-10/12 flex lg:flex-row flex-col justify-between lg:items-center">
    <nav class="z-10 lg:w-2/12 w-4/12 lg:mb-0 mb-2">
        <ul class="flex justify-between">
          <li>
            <a href="https://github.com/ChingHuiHui" target="_blank">
              <i class="fab fa-github cursor-pointer text-xl text-white"/>
            </a>
          </li>
          <li>
            <a href="mailto:sunny70624@gmail.com" target="_blank">
              <i class="fas fa-envelope cursor-pointer text-xl text-white"/>
            </a>
          </li>
          <li>
            <a href="https://codepen.io/ddbrtzlg/collections/" target="_blank">
              <i class="fab fa-codepen cursor-pointer text-xl text-white"/>
            </a>
          </li>

          <li>
            <a href="https://www.facebook.com/sunny60920" target="_blank">
              <i class="fab fa-facebook cursor-pointer text-xl text-white"/>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/sunnyhui_0126/" target="_blank">
              <i class="fab fa-instagram cursor-pointer text-xl text-white"/>
            </a>
          </li>
        </ul>
      </nav>
      <p class="text-sm text-gray-800">Copyright © 2020 Chang Ching Hui</p>
    </div>
  </footer>
</template>

<style scoped>
 .bg-img {
    background-image: url('./assets/profile2.jpg');
    background-position: 50% 80%;
    opacity: 1;
    filter: brightness(50%);
 }
 .site-name {
    font-family: 'Squada One', cursive;
    font-size: 20vw;
    text-align: center;
    position: relative;
    font-weight: bold;
    color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #000;
    pointer-events: none;
  }
  .site-name::before {
    content: 'HUIHUI';
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    overflow: hidden;
    transition: width 275ms ease;
    color: #f73b3b;
    animation: fill-the-color 3s linear;
    animation-fill-mode: forwards;
  }
  .site-name.light-up::before {
    color: transparent;
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

<script>

import PortfolioCard from './components/PortfolioCard.vue'

export default {
  name: 'App',
  components: {
    PortfolioCard
  },
  data() {
    return {
      data: [
        {
          title: '專題 - 地樺股份有限公司 ( 產學合作 )',
          description: '將舊有的資訊系統搬至App，希望可以增加使用率，利用行動裝置讓承包案流程更加方便',
          responsibility: '資料庫設計、前端切板接資料、文件撰寫、小組長',
          languages: ['React Native' , 'Firebase'],
          src: require('./assets/portfolio/dehwa.png'),
          links: [
            {
              uri: 'http://www.dehwa.com.tw/m_about.aspx',
              icon: 'fas fa-globe'
            }
          ]
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
              icon: 'fab fa-app-store-ios'
            },
            {
              uri: 'https://play.google.com/store/apps/details?id=tw.com.yoxi.rider',
              icon: 'fab fa-google-play'
            }
          ]
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
              icon: 'fab fa-app-store-ios'
            },
            {
              uri: 'https://play.google.com/store/apps/details?id=tw.com.yoxi.driver&hl=zh_TW&gl=US',
              icon: 'fas fa-globe'
            }
          ]
        },
         {
          title: '仿Dcard',
          description: '模仿dcard web。',
          responsibility: '使用React，串接dcard api，並用React Router切換各看板頁面。',
          languages: ['React', 'axios', 'React Router'],
          src: require('./assets/portfolio/dcard.png'),
          links: [
            {
              uri: 'https://github.com/ChingHuiHui/dcard_hui',
              icon: 'fab fa-github'
            },
            {
              uri: 'https://chinghuihui.github.io/dcard_hui/',
              icon: 'fas fa-globe'
            }
          ]
        },
         {
          title: 'Album PlayList',
          description: '介紹專輯，包含曲目和相關影片。可以自由切換不同專輯。選取喜好的曲目。',
          responsibility: '切版，加入redux存放喜好項目，加入yotube清單影片',
          languages: ['React' , 'Redux', 'Styled-Component', 'axios'],
          src: require('./assets/portfolio/styled-component.png'),
          links: [
           {
              uri: 'https://github.com/ChingHuiHui/react-styled-component',
              icon: 'fab fa-github'
            },
            {
              uri: 'https://chinghuihui.github.io/react-styled-component/',
              icon: 'fas fa-globe'
            }
          ]
        },
         {
          title: 'TIME WILL TELL player',
          description: '音樂播放器，包含播放清單，另外有隨機播放。',
          responsibility: '切版，讓時間條可以隨時間和音樂長度變化',
          languages: ['HTML' , 'SASS ', 'Vue'],
          src: require('./assets/portfolio/timewilltell.png'),
          links: [
           {
              uri: 'https://github.com/ChingHuiHui/vue-player',
              icon: 'fab fa-github'
            },
            {
              uri: 'https://chinghuihui.github.io/vue-player/',
              icon: 'fas fa-globe'
            }
          ]
        },
         {
          title: 'Someday or Oneday',
          description: '網站主要介紹戲劇內容、角色、劇照、原聲帶、團隊。',
          responsibility: '切版、RWD、串接API',
          languages: ['HTML','CSS','JS','RWD'],
          src: require('./assets/portfolio/someday.png'),
          links: [
            {
              uri: 'https://github.com/ChingHuiHui/oneday',
              icon: 'fab fa-github'
            },
            {
              uri: 'https://chinghuihui.github.io/oneday/',
              icon: 'fas fa-globe'
            }
          ]
        },
        {
          title: 'Taylor Swift',
          description: '網站主要是提供歌手各式各樣的資訊。',
          responsibility: '切版、RWD',
          languages: ['HTML','CSS','JS','RWD'],
          src: require('./assets/portfolio/taylor.png'),
          links: [
            {
              uri: 'https://github.com/ChingHuiHui/self',
              icon: 'fab fa-github'
            },
            {
              uri: 'https://chinghuihui.github.io/self/',
              icon: 'fas fa-globe'
            }
          ]
        }
      ],
      time: 0,
      timer: null,
    }
  },
  created() {
    this.setTime()
  },
  computed: {
    // percentage() {
    //   console.log('this.time', this.time)
    //   let duration = Math.ceil((this.time/3) * 100)
    //   console.log('duration', duration)
    //   if(duration < 10) {
    //     return ("00" + duration).split("")
    //   }else if (duration < 100) {
    //     return ("0" + duration).split("")
    //   }
    //   return duration.split("")
    // },
    // leftPercentage() {
    //   let p = 0
    //   p = (this.time/3) *100
    //   if(p >= 100) {
    //     return { left: '100%' }
    //   }
    //   return { left: p + '%' };
    // }
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
      if(this.time >= 5) {
        window.scrollTo(0, this.$refs.portfolio.getBoundingClientRect().top);
        clearInterval(this.timer)
      }
    }
  }
}
</script>

<style src="./assets/tailwind.css" />
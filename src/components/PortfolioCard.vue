<template>
  <div
    class="bg-white p-4 shadow-md transition ease-in duration-300 flex flex-col"
    :class="move && 'transform -translate-x-1	-translate-y-1'"
    @mouseover="move = true"
    @mouseleave="move = false"
  >
    <div class="relative w-full mb-2"  :style="[mainBgStyle, { backgroundImage: `url(${itemData.src})`}]">
      <div
        @mouseover="mouseOver"
        @mouseLeave="mouseLeave"
        class="flex justify-center items-center absolute inset-0 bg-black bg-opacity-10 hover:bg-opacity-50 transition ease-in duration-300 ">
        <div v-show="showInner" class="flex justify-center items-center flex-col">
          <h2 class="text-xl text-white mb-2">{{ itemData.title }}</h2>
          <div class="bg-white px-4 py-1 rounded-md">
              <a
                v-for="(link, index) in itemData.links"
                :class="[itemData.links.length !== 1 && index !== itemData.links.length - 1 && 'mr-2']"
                :key="link.uri"
                :href="link.uri"
                target="_blank">
                <i
                  :class="link.icon"
                  class="cursor-pointer text-xl text-gray-500 hover:text-black"/>
              </a>
          </div>
        </div>
      </div>
    </div>
    <p class="text-md mb-2">PRJECT  {{ '0' + (+itemIndex+1)}} | {{ itemData.title }}</p>
    <div class="flex">
      <div class="flex-1 mr-1">
        <p class="text-xs bg-red-200 text-center">DESCRIPTION</p>
        <p class="ml-2 my-1 text-sm">{{ itemData.description }}</p>
      </div>
      <div class="flex-1">
        <p class="text-xs bg-red-200 text-center">RESPONSIBILITY</p>
        <p class="ml-2 my-1 text-sm">{{ itemData.responsibility }}</p>
      </div>
    </div>
    <div class="flex flex-wrap mt-auto">
        <div
          v-for="(language) in itemData.languages"
          :key="language"
          class="min-w-1/5 bg-red-50 mr-1 rounded-full p-2 mb-1"
          >
          <p class="text-sm text-center">{{ language }}</p>
        </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ["itemData", "itemIndex"],
  data() {
    return {
      showInner: false,
      move: false
    }
  },
  methods: {
    mouseOver() {
      this.showInner = true
    },
    mouseLeave() {
      this.showInner = false
    }
  },
  computed: {
    mainBgStyle() {
      return {
        "padding-top": "50%",
        "background-size": "cover",
      };
    },
  }
}
</script>
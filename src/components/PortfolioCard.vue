<template>
  <div class="portfolio-card">
    <div class="portfolio-card-image">
      <img :src="itemData.src" class="absolute object-cover w-full h-full" />
    </div>
    <div class="mask">
      <div>
        <h2 class="text-xl text-white mb-2">{{ itemData.title }}</h2>
        <div class="bg-white px-4 py-1 rounded-lg space-x-2">
          <a
            v-for="link in itemData.links"
            :key="link.uri"
            :href="link.uri"
            target="_blank"
          >
            <i
              :class="link.icon"
              class="cursor-pointer text-xl text-gray-500 hover:text-black"
            />
          </a>
        </div>
      </div>
    </div>

    <div class="portfolio-card-info">
      <h3 class="title">
        PROJECT {{ String(itemIndex + 1).padStart(2, '0') }} |
        {{ itemData.title }}
      </h3>
      <div class="content">
        <div>
          <p class="label">
            DESCRIPTION
          </p>
          <p class="description">{{ itemData.description }}</p>
        </div>
        <div>
          <p class="label">
            RESPONSIBILITY
          </p>
          <p class="description">{{ itemData.responsibility }}</p>
        </div>
      </div>

      <div class="tags">
        <div v-for="language in itemData.languages" :key="language" class="tag">
          <p class="text-sm text-center text-white">{{ language }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemData: {
      type: Object,
      required: true,
    },
    itemIndex: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.portfolio-card {
  @apply transition ease-in duration-300 flex flex-col overflow-hidden;
  @apply bg-white p-4 shadow-md cursor-pointer relative rounded-lg;

  .mask {
    @apply hidden justify-center items-center bg-black hover:bg-opacity-50;
    @apply absolute inset-0 bg-opacity-10 transition ease-in duration-300;

    > div {
      @apply justify-center items-center flex-col hidden;
    }
  }

  &:hover {
    @apply transform -translate-x-1	-translate-y-1;

    .mask {
      @apply flex;
      > div {
        @apply flex;
      }
    }
  }

  .portfolio-card-image {
    @apply relative w-full mb-2;

    padding-bottom: calc(3 / 5 * 100%);
  }

  .portfolio-card-info {
    h3 {
      @apply text-lg font-medium mb-2;
    }

    .content {
      @apply flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-1 my-3;

      > div {
        @apply flex-1;

        .label {
          @apply text-white font-medium bg-primary-light text-center;
        }

        .description {
          @apply ml-2 my-1 text-sm;
        }
      }
    }

    .tags {
      @apply flex flex-wrap;

      .tag {
        @apply min-w-1/5 bg-primary mr-1 rounded-full p-2 mb-1;
      }
    }
  }
}
</style>

<script lang="ts">
  import { showWrapper } from "@/lib/helpers/wrapper";
  import { chapters } from "@/lib/assets/home/grid_home";
  import { typeContentWrapper } from "@/lib/stores/wrapper";

  let currentIndex: number | null = null;

  function showGallery() {
    typeContentWrapper.set("gallery");
    showWrapper();
  }

  function handleIndex(index: number) {
    currentIndex = index;
  }

  function handleLeave() {
    currentIndex = null;
  }
</script>

<section
  class="w-svw grid h-[100vh] p-6 pt-0 grid-rows-home_rows justify-center max-xl:pb-4 max-lg:pb-0"
>
  <div></div>
  <div class="grid grid-cols-3 xl:grid-cols-4 justify-center">
    {#each chapters as chapter, index}
      <a
        id="column"
        aria-hidden="true"
        href={chapter.href}
        on:mouseleave={handleLeave}
        on:mouseenter={handleIndex.bind(null, index)}
        on:click={() => index === 3 && showGallery()}
        class={`opacity-0 grid cursor-pointer ${index === chapters.length - 1 && "max-xl:hidden"}`}
      >
        <div
          class:first={index === 0}
          class:last={index === 3}
          class={`p-3 h-full grid grid-rows-column_row text-center max-lg:pb-0 max-lg:px-1`}
        >
          <div
            class="w-full relative overflow-hidden cursor-pointer object-cover h-full self-end"
          >
            <img
              src={chapter.src}
              alt={chapter.description}
              class="w-full absolute left-0 right-0 bottom-0 top-0 h-full select-none object-cover"
            />
          </div>
          <h2
            class:active={index === currentIndex}
            class:off={currentIndex !== null && currentIndex !== index}
            class="text-hells_red leading-7 transition-all pt-2 flex flex-col font-futura_lt_bold text-[40px] uppercase"
          >
            <span class="text-[12px] font-normal font-futura_bt"
              >{chapter.chapter}</span
            >
            {chapter.title}
          </h2>
        </div>
      </a>
    {/each}
  </div>
  <img
    id="logo_ferrari"
    class="w-svw h-full pt-6 bottom-0 self-end opacity-0 max-xl:pt-1"
    src="/logo/logo.svg"
    alt="Ferrari"
  />
</section>

<style>
  .active {
    @apply transition-all;
  }

  .off {
    @apply opacity-100 transition-all brightness-50;
  }

  .first {
    @apply pl-0 text-start;
  }

  .last {
    @apply pr-0 text-end;
  }
</style>

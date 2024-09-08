<script>
  import ColumnText from "@/components/grid_routes/column_text.svelte";
  import ImageWrapper from "@/components/wrappers/image_wrapper.svelte";
</script>

<section class="h-[150vh] grid grid-cols-2">
  <ColumnText start>
    <div class="h-full w-full overflow-hidden flex items-center">
      <ImageWrapper sourceImage="/stories/section/second.webp">
        <img
          class="w-full h-full object-cover"
          src="/stories/section/second.webp"
          alt="Ferrari"
        />
      </ImageWrapper>
    </div>
  </ColumnText>
  <ColumnText>
    <div class="max-w-md">
      <blockquote class="m-auto h-56 flex flex-col justify-between">
        <p class="text-hells_red font-thin text-[15px] leading-6">
          <span class="float-left mr-2 pb-1 pt-[2px]">
            <svg
              width="31"
              height="22"
              viewBox="0 0 31 22"
              fill="#CE0000"
              xmlns="http://www.w3.org/2000/svg"
              class="w-[20px]"
              ><path
                d="M30.8648 0L20.3648 21.42H13.3648L20.3648 0H30.8648ZM17.6348 0L7.13477 21.42H0.134766L7.13477 0H17.6348Z"
                fill="#CE0000"
              ></path></svg
            >
          </span>
          There is no equilibrium in his life, and that’s the whole point of Enzo
          Ferrari. That fascinated me, because that’s more like the way life actually
          is. Life is asymmetrical. Life is messy. Life is filled with chaos. Ferrari
          was precise and logical; rational in everything to do with his factory
          and race team. In the rest of his life, he was impulsive, defensive, libidinous,
          chaotic. This asymmetry and wonderful contradiction is what made him and
          the other characters in this unique story so human to me.
        </p>
        <p class="text-hells_red font-futura_bt uppercase text-xl pt-5">
          Michael Mann
        </p>
      </blockquote>
    </div>
  </ColumnText>
</section>

<script>
  import PinSection from "@/components/section/pin_section.svelte";
  import ColumnText from "@/components/grid_routes/column_text.svelte";
  import GridColumns from "@/components/grid_routes/grid_columns.svelte";
  import ImageWrapper from "@/components/wrappers/image_wrapper.svelte";
</script>

<GridColumns>
  <ColumnText>
    <div class="h-[100vh] flex items-center">
      <ImageWrapper sourceImage="/becoming/penelope/first.webp">
        <img src="/becoming/penelope/first.webp" alt="" />
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
          To me, Enzo is kind of a duck. He's calm on the surface but he's furiously
          paddling underneath. It's always more interesting to me to play characters
          where you have to hunt for it. That's what I like about good writing. It's
          not telling you what you're supposed to be feeling, and characters aren't
          saying everything that they're feeling. That's more real to me.
        </p>
        <p class="text-hells_red font-futura_bt uppercase text-xl">
          Adam Driver, Actor
        </p>
      </blockquote>
    </div>
  </ColumnText>
</GridColumns>

<PinSection>
  <GridColumns>
    <ColumnText>
      <div class="max-w-[430px]">
        <blockquote
          class="m-auto h-64 flex flex-col items-center justify-between"
        >
          <p
            class="text-hells_red font-thin text-[30px] text-center leading-8 tracking-[1px]"
          >
            “There is an unstoppable force at the center of Michael Mann’s
            Ferrari. It is fast, fierce, and wildly unpredictable. That force is
            Penélope Cruz.”
          </p>
          <img class="w-28" src="/logo/rolling-red.webp" alt="" />
        </blockquote>
      </div>
    </ColumnText>
    <ColumnText>
      <div class="h-[100vh] flex items-center">
        <ImageWrapper sourceImage="/becoming/penelope/second.webp">
          <img src="/becoming/penelope/second.webp" alt="" />
        </ImageWrapper>
      </div>
    </ColumnText>
  </GridColumns>
</PinSection>

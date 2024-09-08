<script>
  import ColumnText from "@/components/grid_routes/column_text.svelte";
  import GridColumns from "@/components/grid_routes/grid_columns.svelte";
  import ImageWrapper from "@/components/wrappers/image_wrapper.svelte";
</script>

<GridColumns>
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
          There's a very conscious design to the film. There's a formality to the
          dramatic dialogue scenes. It manifests itself, also, in the monochromatic
          production design and set decoration. It's very restrained but a deeply
          regional palette. That's cut across by everything to do with the cars.
          The cars are savagely kinetic. It's a counterpoint to the emotional scenes
          formality. Suddenly you have these red race cars that are beautiful and
          lethal at the same time. There is no primary red like that anywhere else
          in the film. I wanted the experience of what it is to drive one of those
          cars and to be in a race and master the forces that are pushing you to
          the edge of adhesion.
        </p>
        <p class="text-hells_red font-futura_bt uppercase text-xl pt-5">
          Michael Mann
        </p>
      </blockquote>
    </div>
  </ColumnText>
  <ColumnText>
    <div class="h-[100vh] flex items-center">
      <ImageWrapper sourceImage="/making/first_section/first.webp">
        <img class="self-center" src="/making/first_section/first.webp" alt="" />
      </ImageWrapper>
    </div>
  </ColumnText>
</GridColumns>

<script>
  import ColumnText from "@/components/grid_routes/column_text.svelte";
  import GridColumns from "@/components/grid_routes/grid_columns.svelte";
  import ImageWrapper from "@/components/wrappers/image_wrapper.svelte";
</script>

<GridColumns>
  <ColumnText>
    <div class="h-[100vh] flex items-center">
      <ImageWrapper sourceImage="/making/second_section/second.webp">
        <img class="self-center" src="/making/second_section/second.webp" alt="" />
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
          I did a lot of track time. We were at several different tracks in Modena,
          and then there was another little private track close to Milan. Robert
          Nagle, the stunt coordinator, said, 'Just go pound around.' So, I would
          just do long runs all day long. Then we'd work on the setup. We'd talked
          about the handling, what we needed to do to improve the car. It was like
          a proper test. It was the best job ever. I would have been a PA! And everybody
          was really into cars, clearly. I mean, how could you not be? They're works
          of art. And our cars were recreated in the same tradition with the same
          family that built the bodies back in the day. Everything was built to the
          same specification.
        </p>
        <p class="text-hells_red font-futura_bt uppercase text-xl pt-5">
          Patrick Dempsey
        </p>
      </blockquote>
    </div>
  </ColumnText>
</GridColumns>

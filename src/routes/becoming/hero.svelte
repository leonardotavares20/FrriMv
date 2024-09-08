<script lang="ts">
  import { Title } from "@/components/title";
  import { Grid } from "@/components/grid_routes";
  import ImageWrapper from "@/components/wrappers/image_wrapper.svelte";
</script>

<Grid.GridColumns>
  <Grid.HeroColumnOne>
    <ImageWrapper sourceImage="/images_grid/grid_one.webp">
      <Grid.GridImage
        src="/images_grid/grid_one.webp"
        alt="Adam driver walking with sunglasses and a light beige coat, and in the background a ferrari used in the recordings"
      />
    </ImageWrapper>
  </Grid.HeroColumnOne>
  <Grid.HeroColumnTwo>
    <Title.TitleContainer>
      <Title.TitleSm sm>Adam Driver, Penélope Cruz</Title.TitleSm>
      <Title.TitleLg>
        Becoming <br /> Ferrari
      </Title.TitleLg>
    </Title.TitleContainer>
  </Grid.HeroColumnTwo>
</Grid.GridColumns>

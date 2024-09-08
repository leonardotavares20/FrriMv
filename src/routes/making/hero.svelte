<script lang="ts">
  import { Title } from "@/components/title";
  import { Grid } from "@/components/grid_routes";
  import ImageWrapper from "@/components/wrappers/image_wrapper.svelte";
</script>

<Grid.GridColumns>
  <Grid.HeroColumnOne>
    <ImageWrapper sourceImage="/images_grid/grid_two.webp">
      <Grid.GridImage
        src="/images_grid/grid_two.webp"
        alt="Behind the scenes of the filming of the movie Ferrari"
      />
    </ImageWrapper>
  </Grid.HeroColumnOne>
  <Grid.HeroColumnTwo>
    <Title.TitleContainer>
      <Title.TitleSm>Chapter Two</Title.TitleSm>
      <Title.TitleLg>Making <br /> Ferrari</Title.TitleLg>
    </Title.TitleContainer>
  </Grid.HeroColumnTwo>
</Grid.GridColumns>

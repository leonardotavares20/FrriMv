<script lang="ts">
  import { Title } from "@/components/title";
  import { Grid } from "@/components/grid_routes";
  import ImageWrapper from "@/components/wrappers/image_wrapper.svelte";
</script>

<Grid.GridColumns>
  <Grid.HeroColumnOne>
    <ImageWrapper sourceImage="/images_grid/grid_three.webp">
      <Grid.GridImage
        src="/images_grid/grid_three.webp"
        alt="Penelope Cruz walking towards the camera in a grey dress"
      />
    </ImageWrapper>
  </Grid.HeroColumnOne>
  <Grid.HeroColumnTwo>
    <Title.TitleContainer>
      <Title.TitleSm>Chapter Three</Title.TitleSm>
      <Title.TitleLg>The Stories Of <br /> Ferrari</Title.TitleLg>
    </Title.TitleContainer>
  </Grid.HeroColumnTwo>
</Grid.GridColumns>

<script lang="ts">
  import { Title } from "@/components/title";
  import { Grid } from "@/components/grid_routes";
</script>

<Grid.GridColumns>
  <Grid.HeroColumnOne>
    <Grid.GridImage
      indexImage={2}
      src="/images_grid/grid_two.webp"
      alt="Behind the scenes of the filming of the movie Ferrari"
    />
  </Grid.HeroColumnOne>
  <Grid.HeroColumnTwo>
    <Title.TitleContainer>
      <Title.TitleSm>Chapter Two</Title.TitleSm>
      <Title.TitleLg>Making <br /> Ferrari</Title.TitleLg>
    </Title.TitleContainer>
  </Grid.HeroColumnTwo>
</Grid.GridColumns>

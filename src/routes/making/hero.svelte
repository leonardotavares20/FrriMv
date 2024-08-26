<script lang="ts">
  import { Title } from "@/components/title";
  import { Grid } from "@/components/grid_routes";
  import Cover from "@/components/cover/cover.svelte";
</script>

<Grid.GridColumns>
  <Grid.HeroColumnOne>
    <Cover />
    <Grid.GridImage
      src="/images_grid/grid_two.webp"
      alt="Behind the scenes of the filming of the movie Ferrari"
    />
  </Grid.HeroColumnOne>
  <Grid.HeroColumnTwo>
    <Title.TitleContainer>
      <Title.TitleSm>Chapter Two</Title.TitleSm>
      <Title.TitleLg>Making Ferrari</Title.TitleLg>
    </Title.TitleContainer>
  </Grid.HeroColumnTwo>
</Grid.GridColumns>

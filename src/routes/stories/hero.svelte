<script lang="ts">
  import { Title } from "@/components/title";
  import { Grid } from "@/components/grid_routes";
  import Cover from "@/components/cover/cover.svelte";
</script>

<Grid.GridColumns>
  <Grid.HeroColumnOne>
    <Cover />
    <Grid.GridImage
      src="/images_grid/grid_three.webp"
      alt="Penelope Cruz walking towards the camera in a grey dress"
    />
  </Grid.HeroColumnOne>
  <Grid.HeroColumnTwo>
    <Title.TitleContainer>
      <Title.TitleSm>Chapter Three</Title.TitleSm>
      <Title.TitleLg>The Stories Of <br /> Ferrari</Title.TitleLg>
    </Title.TitleContainer>
  </Grid.HeroColumnTwo>
</Grid.GridColumns>

<script lang="ts">
  import { Title } from "@/components/title";
  import { Grid } from "@/components/grid_routes";
  import Cover from "@/components/cover/cover.svelte";
</script>

<Grid.GridColumns>
  <Grid.HeroColumnOne>
    <Cover />
    <Grid.GridImage
      src="/images_grid/grid_one.webp"
      alt="Adam driver walking with sunglasses and a light beige coat, and in the background a ferrari used in the recordings"
    />
  </Grid.HeroColumnOne>
  <Grid.HeroColumnTwo>
    <Title.TitleContainer>
      <Title.TitleSm>Adam Driver, Penélope Cruz</Title.TitleSm>
      <Title.TitleLg>
        Becoming <br /> Ferrari
      </Title.TitleLg>
    </Title.TitleContainer>
  </Grid.HeroColumnTwo>
</Grid.GridColumns>

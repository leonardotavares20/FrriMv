<script lang="ts">
  import NavigateTransition from "@/components/transitions/navigate_transition.svelte";
  import Cover from "@/components/cover/cover.svelte";
  import { Grid } from "@/components/grid_routes";
  import PageWrapper from "@/components/page_wrapper/page_wrapper.svelte";
  import { Title } from "@/components/title";
  import { afterNavigate } from "$app/navigation";
  import { onMount } from "svelte";
  import { showColumnOneGrid } from "@/lib/helpers/grid";
  import { GridRoutesTimeline } from "@/lib/animations/timelines/GridRoutesTimeline";

  afterNavigate(() => {
    return new Promise(() => {
      showColumnOneGrid();
    });
  });

  onMount(() => {
    new GridRoutesTimeline(false).getTimeline().play();
  });
</script>

<NavigateTransition>
  <PageWrapper>
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
  </PageWrapper>
</NavigateTransition>

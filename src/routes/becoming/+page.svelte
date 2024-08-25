<script lang="ts">
  import { onMount } from "svelte";
  import { Title } from "@/components/title";
  import { Grid } from "@/components/grid_routes";
  import { afterNavigate } from "$app/navigation";
  import Cover from "@/components/cover/cover.svelte";
  import { showColumnOneGrid } from "@/lib/helpers/grid";
  import PageWrapper from "@/components/page_wrapper/page_wrapper.svelte";
  import PageNavigation from "@/components/page_navigation/page_navigation.svelte";
  import { GridRoutesTimeline } from "@/lib/animations/timelines/GridRoutesTimeline";
  import NavigateTransition from "@/components/transitions/navigate_transition.svelte";

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
  <PageNavigation>
    <a class="hover:underline" href="#adam">Adam Driver</a> <br />
    <a class="hover:underline" href="#penelope">Penelope Cruz</a>
  </PageNavigation>
  <PageWrapper>
    <Grid.GridColumns>
      <Grid.ColumnOne>
        <Cover />
        <Grid.GridImage
          src="/images_grid/grid_one.webp"
          alt="Adam driver walking with sunglasses and a light beige coat, and in the background a ferrari used in the recordings"
        />
      </Grid.ColumnOne>
      <Grid.ColumnTwo>
        <Title.TitleContainer>
          <Title.TitleSm>Adam Driver, Penélope Cruz</Title.TitleSm>
          <Title.TitleLg>
            Becoming <br /> Ferrari
          </Title.TitleLg>
        </Title.TitleContainer>
      </Grid.ColumnTwo>
    </Grid.GridColumns>
  </PageWrapper>
</NavigateTransition>

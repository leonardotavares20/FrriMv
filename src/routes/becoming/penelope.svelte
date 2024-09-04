<script lang="ts">
  import PenelopeColumns from "./penelope_columns.svelte";
  import VideoPreview from "@/components/video/video_preview.svelte";
  import SectionBreak from "@/components/section/section_break.svelte";
  import { penelope_images } from "@/lib/assets/becoming/penelope_scroll";
  import PenelopeHorizontalScroll from "./penelope_horizontal_scroll.svelte";
  import PenelopeSectionDescription from "./penelope_section_description.svelte";
</script>

<section id="penelope_section" class="pt-5">
  <SectionBreak title="Penelope Cruz" />
  <VideoPreview srcVideo="/videos/becoming/penelope/penelope.mp4" />
  <PenelopeSectionDescription />
  <PenelopeHorizontalScroll images={penelope_images} />
  <PenelopeColumns />
</section>

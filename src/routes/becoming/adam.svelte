<script lang="ts">
  import AdamColumns from "./adam_columns.svelte";
  import { adam_images } from "@/lib/assets/becoming/adam_scroll";
  import AdamHorizontalScroll from "./adam_horizontal_scroll.svelte";
  import VideoPreview from "@/components/video/video_preview.svelte";
  import SectionBreak from "@/components/section/section_break.svelte";
  import AdamSectionDescription from "./adam_section_description.svelte";
</script>

<section id="adam_section">
  <SectionBreak title="Adam Driver" />
  <VideoPreview srcVideo="/videos/becoming/adam/adam.mp4" />;
  <AdamSectionDescription />
  <AdamHorizontalScroll images={adam_images} />
  <AdamColumns />
</section>

<script lang="ts">
  import MilleMigliaColumn from "./mille_miglia_column.svelte";
  import VideoPreview from "@/components/video/video_preview.svelte";
  import SectionImage from "@/components/section/section_image.svelte";
  import MilleMigliaDescription from "./mille_miglia_description.svelte";
  import { mille_miglia_images } from "@/lib/assets/stories/mille_miglia_scroll";
  import MilleMigliaHorizontalScroll from "./mille_miglia_horizontal_scroll.svelte";
</script>

<VideoPreview srcVideo="/videos/stories/mille-miglia.mp4" />
<MilleMigliaDescription />
<SectionImage src="/stories/section/first.webp" alt="Mille Miglia" />
<MilleMigliaColumn />
<MilleMigliaHorizontalScroll images={mille_miglia_images} />

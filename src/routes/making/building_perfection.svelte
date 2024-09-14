<script lang="ts">
  import VideoPreview from "@/components/video/video_preview.svelte";
  import BuildingPerfectionDescription from "./building_perfection_description.svelte";
  import SectionImage from "@/components/section/section_image.svelte";
  import BuldingPerfectionColumnOne from "./bulding_perfection_column_one.svelte";
  import BuildingPerfectionHorizontalScroll from "./building_perfection_horizontal_scroll.svelte";
  import { building_perfection_images } from "@/lib/assets/making/building_perfection";
</script>

<VideoPreview
  srcVideo="/videos/making/building_perfection/building_perfection.mp4"
/>
<BuildingPerfectionDescription />
<SectionImage
  indexImage={22}
  src="/making/second_section/first.webp"
  alt="Building Perfection"
/>
<BuldingPerfectionColumnOne />
<SectionImage
  indexImage={24}
  src="/making/second_section/third.webp"
  alt="Building Perfection"
/>
<BuildingPerfectionHorizontalScroll images={building_perfection_images} />

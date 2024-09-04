<script lang="ts">
  import ChapterOneColumnOne from "./chapter_one_column_one.svelte";
  import VideoPreview from "@/components/video/video_preview.svelte";
  import ChapterOneDescription from "./chapter_one_description.svelte";
  import { chapter_one_images } from "@/lib/assets/making/chapter_one_scroll";
  import ChapterOneHorizontalScroll from "./chapter_one_horizontal_scroll.svelte";
</script>

<VideoPreview srcVideo="/videos/making/chapter_one/chapter_one.mp4" />
<ChapterOneDescription />
<ChapterOneHorizontalScroll images={chapter_one_images} />
<ChapterOneColumnOne />

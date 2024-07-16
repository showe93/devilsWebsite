<script>
    import { Carousel} from 'flowbite-svelte';

  // ./imageData/+server.js has the following
  export const images = [
    {
      alt: 'Commit Day',
      src: '/teampics/Commitday.jpg',
      title: 'Devils 2024 Commit Day'
    },
    {
      alt: 'World Series',
      src: '/teampics/WorldSeries.jpg',
      title: 'RI Devils 18u win World Series'
    },
    {
      alt: 'Awards',
      src: '/teampics/Awards.jpg',
      title: 'All State Awards'
    }
  ];
</script>

<div class="mx-[60px] ">
    <Carousel {images} duration="3000" let:Indicators let:Controls>
    <Indicators />
    </Carousel>
  </div>

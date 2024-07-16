<script>
    import { Card, Button } from 'flowbite-svelte';
    import { ArrowRightOutline } from 'flowbite-svelte-icons';
  </script>
  
  <Card class="bg-maroon ml-[100px] mr-[50px]">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">Interested in learning more about our other commits?</h5>
    <p class="mb-3 font-normal text-white dark:text-lightgrey leading-tight">Click here to see all of our past commits from 2020-now:</p>
    <Button href="/commits" class="w-fit bg-darkgrey hover:bg-black">
      Read more <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
    </Button>
</Card>
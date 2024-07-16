<script>
    import { Card, Button } from 'flowbite-svelte';
    import { ArrowRightOutline } from 'flowbite-svelte-icons';
  </script>
  
  <Card class="bg-black ml-[50px] mr-[100px]">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-maroon dark:text-white">Interested in trying out for the RI Devils?</h5>
    <p class="mb-3 font-normal text-white dark:text-lightgrey leading-tight">Click here to find out all the information about the upcoming fall tryouts:</p>
    <Button href="/tryouts" class="w-fit bg-maroon hover:bg-darkgrey">
      Learn More<ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
    </Button>
</Card>
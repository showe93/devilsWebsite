<script lang="typescript">
    import NavBar from "../../components/NavBar.svelte";
    import Footer from "../../components/Footer.svelte";
    import Team from "../../components/Team.svelte";
    import Socials from "../../components/socials.svelte";
</script>

<div class="bg-black">
    <div class="relative max-w-[1920px] min-h-screen mx-auto border-x-2  mx-auto border-darkgrey"> 
        <NavBar/>
        <div class = "flex flex-col w-full justify-center items-center bg-black pb-[50px]">
            <div class="text-center text-white text-3xl pt-[20px]">Your Form was submitted</div>
            <a href="/" class="cursor-pointer text-maroon text-2xl font-semibold px-16 py-4 border-2 border-solid border-amaroon rounded-lg bg-white hover:bg-lightgrey hover:text-maroon hover:border-maroon whitespace-nowrap mt-[50px]">Return to Home Page</a>
            </div>
            <Socials/>
        </div>
        <Footer/>
    </div>

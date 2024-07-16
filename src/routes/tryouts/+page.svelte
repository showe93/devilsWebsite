<script lang="typescript">
    import NavBar from "../../components/NavBar.svelte";
    import Footer from "../../components/Footer.svelte";
    import Team from "../../components/Team.svelte";
    import Socials from "../../components/socials.svelte";
</script>

<div class="bg-black">
    <div class="relative flex flex-col min-h-screen max-w-[1920px] mx-auto border-x-2 border-darkgrey"> 
    <NavBar/>
    <div class = "flex flex-col w-full justify-center items-center bg-black pb-[50px] px-[50px]">
        <div class="text-white text-center text-5xl font-dancing pt-[20px] border-b-4 pb-[10px] border-lightgrey w-full "> Tryouts - Fall 2024 </div>
        <div class="text-center text-white text-3xl pt-[20px]">This Fall The Rhode Island Devils will offer an 18U, 16U and 13U Program</div>
        <div class="flex flex-row">
            <Team team="18U Devils" name="Jay Sanford"></Team>
            <Team team="16U Devils" name="Sean Howe"></Team>
            <Team team="13U Devils" name="Ryan Pallotta"></Team>
            <Socials/>
        </div>
        <div class="text-white text-center text-5xl font-dancing mt-[50px] pt-[30px] border-t-4 pb-[10px] border-lightgrey w-full "> Interested in trying out?</div>
        <div class="text-center text-white text-3xl pt-[20px]">*Insert Tryout Information Here*</div>
    </div>
    <Footer/>
    </div>
    
    </div>